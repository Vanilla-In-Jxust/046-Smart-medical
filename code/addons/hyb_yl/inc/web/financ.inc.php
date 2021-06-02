<?php

global $_W,$_GPC;
$op = $_GPC['op'];
$_W['plugin'] = 'financ';
$uniacid = $_W['uniacid'];
if(!empty($_GPC['hid']))
{
  $lifeTime = 24 * 3600; 
  session_set_cookie_params($lifeTime); 
  session_start();
  $_SESSION["is_hospital"] = '1'; 
  $_SESSION['hid'] = $_GPC['hid'];
  define("is_agent",'1');
  define("hid",$_GPC['hid']);
  $hospital = pdo_get("hyb_yl_hospital",array("uniacid"=>$uniacid,"hid"=>hid));
  $role = pdo_getcolumn("hyb_yl_hospital_role",array("id"=>$hospital['groupid']),'role');
  $role = unserialize($role);
  define('groupids',$hospital['groupid']);
  $zhuanjia = pdo_fetchall("select zid from ".tablename("hyb_yl_zhuanjia")." where uniacid=".$uniacid." and hid=".$_GPC['hid']);
  $zjs = '';
  foreach($zhuanjia as &$zj)
  {
    $zjs .= $zj['zid'].",";
  }
  $zjs = substr($zjs,0,strlen($zjs)-1);
  define('zid', $zjs);
}
if($op == 'index')
{
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $where = " where a.uniacid=".$uniacid;
    $keywordtype = $_GPC['keywordtype'];
    $type_arr = pdo_getall("hyb_yl_docser_speck",array("uniacid"=>$uniacid));
    foreach($type_arr as $key => $ty)
    {
        if($type_arr[$key]['key_words'] == 'sirenyisheng')
        {
            unset($type_arr[$key]);
        }
    }
    if(is_agent == '1')
    {
        if($zjs != '')
        {
            $where .= " and a.zid in (".$zjs.")";
        }else{
            $where .= " and a.zid is NULL";
        }
        
    }
    $keyword = $_GPC['keyword'];
    $ftitle = empty($_GPC['ftitle']) ? '视频问诊' : $_GPC['ftitle'];
    $key_words = empty($_GPC['key_words']) ? 'shipinwenzhen' : $_GPC['key_words'];
    if($key_words == 'shipinwenzhen' || $key_words == 'dianhuajizhen' || $key_words == 'shoushukuaiyue' || $key_words == 'tijianjiedu')
    {
        $where .= " and a.keywords='".$key_words."'";
    }
    $start = empty($_GPC['start']) ? date("Y-m-d",strtotime("-1Months",time())) : $_GPC['start']; 
    $end = empty($_GPC['end']) ? date("Y-m-d",strtotime("+1days",time())) : $_GPC['end'];
    if($keywordtype == '1')
    {
    	$where .= " and z.z_name like '%$keyword%'";
    }else if($keywordtype == '2')
    {
    	$where .= " and a.orders like '%$keyword%'";
    }
    $start = empty($_GPC['start']) ? date("Y-m-d",strtotime("-1Months",time())) : $_GPC['start']; 
    $end = empty($_GPC['end']) ? date("Y-m-d",strtotime("+1days",time())) : $_GPC['end'];
    if($start != '' && $end != '')
    {
    	if($key_words == 'tuwenwenzhen')
    	{
    		$where .= " and a.xdtime >=".strtotime($start)." and a.xdtime <=".strtotime($end);
    	}else
    	{
    		$where .= " and a.time>=".strtotime($start)." and a.time <=".strtotime($end);
    	}
    }

    if($key_words == 'tuwenwenzhen')
    {
        $list = pdo_fetchall("select a.*,z.z_name,z.advertisement from ".tablename("hyb_yl_twenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by back_orser order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        
        foreach($list as &$values)
        {
            $values['time'] = date("Y-m-d H:i:s",$values['xdtime']);
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_twenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where."group by back_order");
    }else if($key_words == 'shipinwenzhen' || $key_words == 'dianhuajizhen' || $key_words == 'shoushukuaiyue' || $key_words == 'tijianjiedu')
    {
        $where.= " and a.orders like '%$keyword%'"; 
        $list = pdo_fetchall("select a.*,z.z_name,z.advertisement from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by a.back_orser order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        


        foreach($list as &$val)
        {
            $val['time'] = date("Y-m-d H:i:s",$val['time']);
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by a.back_orser");
    }else if($key_words == 'yuanchengkaifang')
    {
        $list = pdo_fetchall("select a.*,z.z_name,z.advertisement from ".tablename("hyb_yl_chufang")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by a.back_orser order by a.c_id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        
        
        foreach($list as &$vall)
        {
            $vall['time'] = date("Y-m-d H:i:s",$vall['time']);
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_chufang")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by a.back_orser");
    }else if($key_words == 'yuanchengguahao')
    {
        $list = pdo_fetchall("select a.*,z.z_name,z.advertisement from ".tablename("hyb_yl_guahaoorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by a.back_orser order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        foreach($list as &$vall)
        {
            $vall['time'] = date("Y-m-d H:i:s",$vall['time']);
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_guahaoorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." group by back_orser");
    }
    foreach($list as &$value)
    {
        $value['advertisement'] = tomedia($value['advertisement']);
    }
	$pager = pagination($total, $pageindex, $pagesize);
    
    
	include $this->template("financ/index");
}
//退款列表
if($op == 'display1')
{
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $where = " where a.uniacid=".$uniacid;
    $refund = $_GPC['refund'];
    $type_arr = pdo_getall("hyb_yl_docser_speck",array("uniacid"=>$uniacid));
    $keywordtype = $_GPC['keywordtype'];
    $keyword = $_GPC['keyword'];
    $start = empty($_GPC['start']) ? date("Y-m-d",strtotime("-1Months",time())) : $_GPC['start']; 
    $end = empty($_GPC['end']) ? date("Y-m-d",strtotime("+1days",time())) : $_GPC['end'];
    
    $key_words = $_GPC['key_words'];
    if($refund != '')
    {
    	$where .= " and a.refund=".$refund;
    }
    if($keywordtype == '1')
    {
    	$where .= " and a.orders like '%$keyword%'";
    }else if($keywordtype == '2')
    {
    	$where .= " and b.names like '%$keyword%'";
    }else if($keywordtype == '3')
    {
    	$where .= " and b.tel like '%$keyword%'";
    }
    if($start != '' && $end != '')
    {
    	$where .= " and a.created>=".strtotime($start)." and a.created<=".strtotime($end);
    }
    if($key_words != '')
    {
    	$where .= " and a.key_words=".$key_words;
    }
    $list = pdo_fetchall("select a.*,b.names,b.tel from".tablename('hyb_yl_refund')."as a left join".tablename('hyb_yl_userjiaren')."as b on b.j_id=a.j_id".$where." order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);

    $total = pdo_fetchcolumn("select count(*) from".tablename('hyb_yl_refund')."as a left join".tablename('hyb_yl_userjiaren')."as b on b.j_id=a.j_id".$where);
    $pager = pagination($total, $pageindex, $pagesize);
	// $res = pdo_fetchall("select a.*,b.names from".tablename('hyb_yl_refund')."as a left join".tablename('hyb_yl_userjiaren')."as b on b.j_id=a.j_id where a.uniacid='{$uniacid}'");
	include $this->template("financ/display1");
}
// 退款审核
if($op == 'tk_change')
{
	$id = $_GPC['id'];
	$status = $_GPC['status'];
	$res = pdo_update("hyb_yl_refund",array("status"=>$status),array("id"=>$id));
	if($res)
	{
	  message("设置成功!",$this->createWebUrl("financ",array("op"=>"display1")),"success");
	}else{
	  message("设置失败!",$this->createWebUrl("financ",array("op"=>"display1")),"error");
	}
	include $this->template("financ/display1");
}
// 退款删除
if($op == 'tk_del')
{
	$id = $_GPC['id'];
	$res = pdo_delete("hyb_yl_refund",array("id"=>$id));
	if($res)
	{
	  message("删除成功!",$this->createWebUrl("financ",array("op"=>"display1")),"success");
	}else{
	  message("删除失败!",$this->createWebUrl("financ",array("op"=>"display1")),"error");
	}
	include $this->template("financ/display1");
}
// 提现状态修改
if($op == 'tx_change')
{
	$id = $_GPC['id'];
	$status = $_GPC['status'];
	$res = pdo_update("hyb_yl_pay",array("status"=>$status),array("id"=>$id));
	if($res)
	{
	  message("设置成功!",$this->createWebUrl("financ",array("op"=>"givemoney")),"success");
	}else{
	  message("设置失败!",$this->createWebUrl("financ",array("op"=>"givemoney")),"error");
	}
	include $this->template("financ/givemoney");
}
if($op == 'tx_change_money')
{
    require_once dirname(dirname(dirname(__FILE__)))."/wxtx.php";
    $id = $_GPC['id'];
    $status = $_GPC['status'];
    $user_openid = $_GPC['openid'];
    $tx_cost = intval($_GPC['money'] * 100);
    $u_name = !empty($_GPC['u_name']) ? $_GPC['u_name'] :'匿名';
    $key = pdo_fetch("SELECT * FROM ".tablename("hyb_yl_parameter")." where uniacid=:uniacid",array(":uniacid"=>$uniacid));
        $appid = $key['appid'];   //微信公众平台的appid
        $mch_id = $key['mch_id'];  //商户号id
        $openid = $user_openid;    //用户openid
        $amount = $tx_cost;  //提现金额$money_sj
        $desc = "提现";     //企业付款描述信息
        $appkey = $key['pub_api'];   //商户号支付密钥
        $re_user_name = $u_name;   //收款用户姓名
        $Weixintx = new WeixinTx($appid,$mch_id,$openid,$amount,$desc,$appkey,$re_user_name);
        $notify_url = $Weixintx->Wxtx();

        if($notify_url['return_code']=="SUCCESS" && $notify_url['result_code']=="SUCCESS"){
            $res = pdo_update("hyb_yl_refund",array("status"=>$status),array("id"=>$id));
            if ($res) {
                message('确认成功', $this->createWebUrl('jsfl', array()), 'success');
            } else {
                message('失败', '', 'error');
            }
        }else{
            message($notify_url['return_msg'], '', 'error');
        }

    include $this->template("financ/givemoney");
}
// 提现删除
if($op == 'tx_del')
{
	$id = $_GPC['id'];
	$res = pdo_delete("hyb_yl_pay",array("id"=>$id));
	if($res)
	{
	  message("设置成功!",$this->createWebUrl("financ",array("op"=>"givemoney")),"success");
	}else{
	  message("设置失败!",$this->createWebUrl("financ",array("op"=>"givemoney")),"error");
	}
	include $this->template("financ/givemoney");
}
//提现列表
if($op == 'givemoney')
{
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $where = " where uniacid=".$uniacid." and cash=1";
    $style = $_GPC['style'];
    $status = $_GPC['status'];
    $start = empty($_GPC['start']) ? date("Y-m-d",strtotime("-1Months",time())) : $_GPC['start']; 
    $end = empty($_GPC['end']) ? date("Y-m-d",strtotime("+1days",time())) : $_GPC['end'];
    if($style != '')
    {
    	$where .= " and style=".$style;
    }
    if($status != '')
    {
        $where .= " and status=".$status;
    }
    
    if($start != '' && $end != '')
    {
    	$where .= " and created >=".strtotime($start)." and created <=".strtotime($end);
    }
        
    $list = pdo_fetchall("select * from ".tablename("hyb_yl_pay").$where." order by id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);

    foreach($list as &$value)
    {
        $value['created'] = date("Y-m-d H:i:s",$value['created']);
        
        if($value['style'] == '0')
        {
            $doc = pdo_get("hyb_yl_guidance",array("id"=>$value['did']));
            $value['name'] = $doc['title'];
            $value['thumb'] = tomedia($doc['thumb']);
        }else if($value['style'] == '1')
        {
            $doc = pdo_get("hyb_yl_zhuanjia",array("zid"=>$value['zid']));
            $value['name'] = $doc['z_name'];
            $value['thumb'] = tomedia($value['advertisement']);
        }else if($value['style'] == '2')
        {
            $doc = pdo_get("hyb_yl_team",array("id"=>$value['tid']));
            $value['name'] = $doc['title'];
            $value['thumb'] = tomedia($doc['thumb']);
        }else if($value['style'] == '5')
        {
            $doc = pdo_get("hyb_yl_userinfo",array("openid"=>$value['openid']));
            $value['name'] = $doc['u_name'];
            $value['thumb'] = $doc['u_thumb'];
        }else if($value['style'] == '6')
        {
            $doc = pdo_get("hyb_yl_yaoshi",array("id"=>$value['yid']));
            $value['name'] = $doc['name'];
            $value['thumb'] = tomedia($doc['thumb']);
        }

    }
    
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_pay").$where);
    $pager = pagination($total, $pageindex, $pagesize);
	include $this->template("financ/givemoney");
}
//平台账户
if($op == 'currentstore')
{
	include $this->template("financ/currentstore");
}
//代理账户
if($op == 'currentmy')
{
    $type_arr = pdo_getall("hyb_yl_docser_speck",array("uniacid"=>$uniacid));

    $page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    foreach($type_arr as $key=>$val)
    {
        if($type_arr[$key]['key_words'] == 'sirenyisheng')
        {
            unset($type_arr[$key]);
        }
    }

    $starts = empty($_GPC['start']) ? date("Y-m-d") : $_GPC['start'];
    $start = strtotime($starts);
    $ends = empty($_GPC['end']) ? date("Y-m-d") : $_GPC['end'];
    $end = strtotime($ends);
    $keywordtype = $_GPC['keywordtype'];
    $keyword = $_GPC['keyword'];
    $key_words = empty($_GPC['key_words']) ? $type_arr[0]['key_words'] : $_GPC['key_words'];

    $where = " where a.uniacid=".$uniacid." and (ifpay != 0 or ifpay != 5 or ifpay != 6 or ifpay != 7)";
    if($keywordtype == '1')
    {
        $where .= " and z.z_name like '%$keyword%'";
    }else if($keywordtype == '2')
    {
        $where .= " and a.back_order like '%$keyword%'";
    }
    if($start != '')
    {
        $where .= " and a.paytime >=".$start;
    }
    if($end != '')
    {
        $where .= " and a.paytime <=".$end;
    }
    if($key_words == 'shipinwenzhen' || $key_words == 'dianhuajizhen' || $key_words == 'shoushukuaiyue' || $key_words == 'tijianjiedu')
    {
        $where .= " and a.keywords='".$key_words."'";
        $list = pdo_fetchall("select a.*,z.z_name from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        foreach($list as &$value)
        {
            if($value['keywords'] == 'shipinwenzhen')
            {
                $value['typs'] = '视频问诊';
            }else if($value['keywords'] == 'dianhuajizhen')
            {
                $value['typs'] = '电话急诊';
            }else if($value['keywords'] == 'shoushukuaiyue')
            {
                $value['typs'] = '手术快约';
            }else if($value['keywords'] == 'tijianjiedu')
            {
                $value['typs'] = '体检解读';
            }
            $value['paytime'] = date("Y-m-d H:i:s",$value['paytime']);
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where);
        $pager = pagination($total, $pageindex, $pagesize);
    }else if($key_words == 'yuanchengkaifang')
    {
        $list = pdo_fetchall("select a.*,z.z_name from ".tablename("hyb_yl_twenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where." order by a.id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
        foreach($list as &$value)
        {
            $value['paytime'] = date("Y-m-d H:i:s",$value['paytime']);
            $value['typs'] = '远程处方';
        }
        $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_twenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid ".$where);
        $pager = pagination($total, $pageindex, $pagesize);
    }
    

	include $this->template("financ/currentmy");
}
//结算设置
if($op == 'currentsite')
{
	$item = pdo_get("hyb_yl_jiesuan_set",array("uniacid"=>$uniacid));
    if($item)
    {
        $item['money'] = unserialize($item['money']);
        $item['pay_type'] = unserialize($item['pay_type']);
    }
    
	if($_W['ispost'])
	{

		$data = array(
			'uniacid' => $uniacid,
			"min_money" => $_GPC['min_money'],
			"reserve_money" => $_GPC['reserve_money'],
			"pay_type" => serialize($_GPC['pay_type']),
			"is_user" => $_GPC['is_user'],
			"is_agent" => $_GPC['is_agent'],
			"is_twitter" => $_GPC['is_twitter'],
			"expert_fee" => $_GPC['expert_fee'],
			"agent_fee" => $_GPC['agent_fee'],
			"interval_time" => $_GPC['interval_time'],
			"user_fee" => $_GPC['user_fee'],
            "lvtong_fee" => $_GPC['lvtong_fee'],
            "is_lvtong" => $_GPC['is_lvtong'],
            "lvtong_cash" => $_GPC['lvtong_cash'],
            "is_expert" => $_GPC['is_expert'],
            "content" => $_GPC['content'],
            "money" => serialize($_GPC['money']),
            "weixin_content" => $_GPC['weixin_content'],
            "zfb_content" => $_GPC['zfb_content'],
            "bank_content" => $_GPC['bank_content'],
		);
		if($item)
		{
			$res = pdo_update("hyb_yl_jiesuan_set",$data,array("uniacid"=>$uniacid));
		}else{
			$res = pdo_insert("hyb_yl_jiesuan_set",$data);
		}
		if($res)
	    {
	      message("设置成功!",$this->createWebUrl("financ",array("op"=>"currentsite")),"success");
	    }else{
	      message("设置失败!",$this->createWebUrl("financ",array("op"=>"currentsite")),"error");

	    }
	}
	include $this->template("financ/currentsite");
}