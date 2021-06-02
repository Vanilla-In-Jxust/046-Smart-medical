<?php

global $_W,$_GPC;
$op = $_GPC['op'];
$_W['plugin'] = 'medicine';
$uniacid=intval($_W['uniacid']);
require_once dirname(__FILE__) .'/Data/pdo.class.php';
$model=new Model('goodsarr');
$goods = new Model('goodsfenl');
$type_id = $_GPC['type_id'];
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
  $zhuanjia = pdo_fetchall("select z_id from ".tablename("hyb_yl_zhuanjia")." where uniacid=".$uniacid." and hid=".$_GPC['hid']);
  $zids = '';
  foreach($zhuanjia as &$gu)
  {
    $zids .= $gu['zid'].",";
  }
  $zids = substr($zids,0,strlen($zids)-1);
  define('zids', $zids);
}
if($op == 'index')
{

	global $_W,$_GPC;
	$todayss = date("Y-m-d H:i:s",time());
	$todays = strtotime(date("Y-m-d",time()));;
	$yesterdays = mktime(0,0,0,date('m'),date('d')-1,date('Y'));
	$sevens = mktime(0,0,0,date('m'),date('d'),date('Y'))-1;
	$monthse = mktime(0,0,0,date('m'),date('d')-30,date('Y'));
	if(is_agent == '1' && groupids == '2')
	{
		$where = " and jigou_one=".$_GPC['hid'];
		if($zids != '')
		{
			$where2 = " and zid in (".$zids.")";
		}else {
			$where2 = "";
		}
	}else{
		$where = "";
		$where2 = "";
	}
	$today['goods'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid." and date>='".date("Y-m-d H:i:s",$todays)."'".$where);
	$today['store'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=".$uniacid." and created>=".$todays);
	$today['order'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsorders")." where uniacid=".$uniacid." and createTime>='".date("Y-m-d H:i:s",$todays)."'".$where2);
	$chufang = pdo_fetchall("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and time>=".$todays.$where2." group by back_orser");
	$today['chufang'] = count($chufang);

	$yesterday['goods'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid." and date>='".date("Y-m-d H:i:s",$yesterdays)."' and date<='".date("Y-m-d H:i:s",$today)."'".$where);
	$yesterday['store'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=".$uniacid." and created>=".$yesterdays." and created <=".$todays);
	$yesterday['order'] = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsorders")." where uniacid=".$uniacid." and createTime>=".date("Y-m-d H:i:s",$yesterdays)." and createTime <=".date("Y-m-d H:i:s",$todays).$where2);
	$chufang = pdo_fetchall("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and time>=".$yesterdays." and time<=".$todays.$where2." group by back_orser");
	$yesterday['chufang'] = count($chufang);

	$fahuo = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsorders")." where uniacid=".$uniacid." and orderStatus=0".$where2);
	$send = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsorders")." where uniacid=".$uniacid." and orderStatus=1".$where2);
	$over = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and (ispay=4 or ispay=5 or ispay=6 or ispay=7)".$where2);

	$store = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=".$uniacid);

	$today['money'] = pdo_fetchall("select money from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and ispay=1 and paytime>=".$todays.$where2." group by back_order");
	$today['money'] = array_sum(array_map(function($val){return $val['money'];}, $today['money']));
	if(!$today['money'])
	{
		$today['money'] = '0.00';
	}
	$yesterday['money'] = pdo_fetchall("select money from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and ispay=1 and paytime>=".$yesterdays.$where2." group by back_order");
	$yesterday['money'] = array_sum(array_map(function($val){return $val['money'];}, $yesterday['money']));
	if(!$yesterday['money'])
	{
		$yesterday['money'] = '0.00';
	}
	$seven['money'] = pdo_fetchall("select money from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and ispay=1 and paytime>=".$sevens.$where2." group by back_order");
	$seven['money'] = array_sum(array_map(function($val){return $val['money'];}, $seven['money']));
	if(!$seven['money'])
	{
		$seven['money'] = '0.00';
	}
	$monthss['money'] = pdo_fetchall("select money from ".tablename("hyb_yl_chufang")." where uniacid=".$uniacid." and ispay=1 and paytime>=".$monthse.$where2);
	$monthss['money'] = array_sum(array_map(function($val){return $val['money'];}, $monthss['money']));
	if(!$monthss['money'])
	{
		$monthss['money'] = '0.00';
	}

	$days = intval($_GPC['days']);

	if (empty($_GPC['search'])) {
		$days = 7;
	}

	$years = array();
	$current_year = date('Y');
	$year = $_GPC['year'];
	$i = $current_year - 10;

	while ($i <= $current_year) {
		$years[] = array('data' => $i, 'selected' => $i == $year);
		++$i;
	}

	$months = array();
	$current_month = date('m');
	$month = $_GPC['month'];
	$i = 1;

	while ($i <= 12) {
		$months[] = array('data' => $i, 'selected' => $i == $month);
		++$i;
	}

	$datas = array();
	$title = '';

	if (!empty($days)) {
		$charttitle = '最近' . $days . '天增长趋势图';
		$i = $days;

		while (0 <= $i) {
			$time = date('Y-m-d', strtotime('-' . $i . ' day'));
			$params = array(':uniacid' => $_W['uniacid'], ':starttime' => strtotime($time . ' 00:00:00'), ':endtime' => strtotime($time . ' 23:59:59'));
			$order = pdo_fetchall("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=:uniacid and time >=:starttime and time <=:endtime".$where2." group by back_orser",$params);
			$datas[] = array(
				'date' => $time,
				'store' => pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=:uniacid and created >=:starttime and created<=:endtime",$params),
				'order' => count($order),
				);
			--$i;
		}
		

	}
	else {
		if (!empty($year) && !empty($month)) {
			$charttitle = $year . '年' . $month . '月增长趋势图';
			// $lastday = $this->get_last_day($year, $month);
			switch ($month) {
		        case 4 :
		        	$days = 30;
		            break;
		        case 6 :
		        	$days = 30;
		            break;
		        case 9 :
		        	$days = 30;
		            break;
		        case 11 :
		            $days = 30;
		            break;
		        case 2 :
		            if ($year % 4 == 0) {
		                if ($year % 100 == 0) {
		                    $days = $year % 400 == 0 ? 29 : 28;
		                } else {
		                    $days = 29;
		                }
		            } else {
		                $days = 28;
		            }
		            break;
		        default :
		            $days = 31;
		            break;
		    }
		    $lastday = $days;
			$d = 1;
			
			while ($d <= $lastday) {
				
				$params = array(':uniacid' => $_W['uniacid'], ':starttime' => strtotime($year . '-' . $month . '-' . $d . ' 00:00:00'), ':endtime' => strtotime($year . '-' . $month . '-' . $d . ' 23:59:59'));
				$order = pdo_fetchall("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=:uniacid and time >=:starttime and time <=:endtime".$where2." group by back_orser",$params);
				$datas[] = array(
					'date' => $d . '日', 
					'store' => pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=:uniacid and created >=:starttime and created<=:endtime",$params),
					'order' => count($order),
				);
				++$d;
			}

			
		}
		else {
			if (!empty($year)) {
				$charttitle = $year . '年增长趋势图';

				foreach ($months as $m) {
					switch ($m['data']) {
				        case 4 :
				        	$days = 30;
				            break;
				        case 6 :
				        	$days = 30;
				            break;
				        case 9 :
				        	$days = 30;
				            break;
				        case 11 :
				            $days = 30;
				            break;
				        case 2 :
				            if ($year % 4 == 0) {
				                if ($year % 100 == 0) {
				                    $days = $year % 400 == 0 ? 29 : 28;
				                } else {
				                    $days = 29;
				                }
				            } else {
				                $days = 28;
				            }
				            break;
				        default :
				            $days = 31;
				            break;
				    }
				    $lastday = $days;
					$params = array(':uniacid' => $_W['uniacid'], ':starttime' => strtotime($year . '-' . $m['data'] . '-01 00:00:00'), ':endtime' => strtotime($year . '-' . $m['data'] . '-' . $lastday . ' 23:59:59'));
					$order = pdo_fetchall("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=:uniacid and time >=:starttime and time <=:endtime".$where2." group by back_orser",$params);
					$datas[] = array(
						'date' => $m['data'] . '月',
						'store' => pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store")." where uniacid=:uniacid and created >=:starttime and created<=:endtime",$params),
						'order' => count($order),
					);
				}
			}
		}
	}
	include $this->template("medicine/medicinesys");
}

if($op == 'list')
{
	$where=" where uniacid=$uniacid";
	$keywordtype = $_GPC['keywordtype'];
	$keyword = $_GPC['keyword'];
	$status = $_GPC['status'];
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;

	if($status == '1')
	{
		$where .= " and state=1 and status=1";
	}else if($status == '2')
	{
		$where .= " and status=0";
	}else if($status == '3')
	{
		$where .= " and status=2";
	}else if($status == '4')
	{
		$where .= " and state=0";
	}else if($status == '5')
	{
		$where .= " and status=3";
	}
	if($keywordtype == '1')
	{
		$where .= " and sname like '%$keyword%'";

	}else if($keywordtype == '2')
	{
		$where .=" and sid = ".$keyword;
	}else if($keywordtype == '3')
	{
		$where .= " and sname like '%$keyword%'";
	}else if($keywordtype == '4')
	{
		$where .=" and supplier like '%$keyword%'";
	}
	if(is_agent == '1')
	{
		$where .= " and jigou_one=".$_GPC['hid'];
	}
	$list = pdo_fetchall("select * from ".tablename("hyb_yl_goodsarr").$where." order by sid desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
	foreach($list as &$value)
	{
		$value['sthumb'] = $_W['attachurl'].$value['sthumb'];
		$value['typs'] = pdo_getcolumn("hyb_yl_goodsfenl",array("fid"=>$value['g_id']),'fenlname');
		$value['jigou'] = pdo_getcolumn("hyb_yl_hospital",array("hid"=>$value['jigou_two']),'agentname');
		$value['s_name'] = pdo_getcolumn("hyb_yl_store",array("id"=>$value['s_id']),'title');
	}
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr").$where);
    $pager = pagination($total, $pageindex, $pagesize);
    if(is_agent == '1')
    {
    	$wheres = " and groupid=".$_GPC['hid'];
    }
    $count = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid);
    $sell = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid." state=1 and status=1");
    $shenhe = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid.$wheres." and status=0");
    $jujue = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid.$wheres." and status=2");
    $xiajia = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid.$wheres." and state=0");

    $delete = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsarr")." where uniacid=".$uniacid.$wheres." and status=3");

	
	include $this->template("medicine/list");
}
if($op == 'jseon'){
  $sid = $_GPC['sid'];
  $res = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_goodsguige')."where uniacid='{$uniacid}' and sid = '{$sid}'");
  echo json_encode($res);
  return false;
}
if($op == 'changes')
{
	$sid = $_GPC['sid'];
	$typs = $_GPC['typs'];
	$rec = $_GPC['rec'];
	$state = $_GPC['state'];
	$status = $_GPC['status'];
	$hid = $_GPC['hid'];
	if($typs == 'tuijian')
	{
		$data['rec'] = $rec;
	}else if($typs == 'jia')
	{
		$data['state'] = $state;
	}else if($typs == 'shenhe')
	{
		$data['status'] = $status;
	}

	$res = pdo_update("hyb_yl_goodsarr",$data,array("sid"=>$sid));
	if($res)
	{
		message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"list",'hid'=>$hid)),"success");
	}else{
		message("编辑失败!",$this->createWebUrl("medicine",array("op"=>"list",'hid'=>$hid)),"success");
	}
}
if($op == 'add')
{   

	$sid = $_GPC['sid'];
	$item = pdo_get("hyb_yl_goodsarr",array("sid"=>$sid));
	$hid = $_GPC['hid'];
	if($sid)
	{
		$item['spic'] = json_decode($item['spic'],true);
		$guige = pdo_getall("hyb_yl_goodsguige",array("sid"=>$sid));
	}

	$athuo_list = pdo_getall("hyb_yl_hospital_diction",array('uniacid'=>$uniacid));
	$yunfei = pdo_getall("hyb_yl_yunfei",array("uniacid"=>$uniacid));
	$athuo_lists =  pdo_getall("hyb_yl_hospital",array('groupid'=>$item['jigou_one']));
	$store = pdo_getall("hyb_yl_store",array("uniacid"=>$uniacid,"status"=>'1'));
	$type = pdo_getall("hyb_yl_goodsfenl",array("uniacid"=>$uniacid));

	//查询配送信息
	$peisong = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_yunfei')."WHERE uniacid='{$uniacid}'");
	if ($_W['ispost']) {
		$goods = $_GPC['goods'];
		$goods['spic'] = json_encode($goods['spic'],true);
		$goods['uniacid'] = $uniacid;
        $goods['com'] = $_GPC['com'];
		if($sid)
		{
			$res = pdo_update("hyb_yl_goodsarr",$goods,array("sid"=>$sid));
		}else{
			
			$goods['status'] = '1';
			$goods['date'] = date("Y-m-d H:i:s",time());
			$res = pdo_insert("hyb_yl_goodsarr",$goods);
			$sid = pdo_insertid();
		}
		pdo_delete("hyb_yl_goodsguige",array("sid"=>$sid));
		$guiged = $_GPC['guige'];
		foreach($guiged as &$value)
		{
			$guiges = array(
				'gg_name' =>$value['gg_name'],
				'gg_kucun' =>$value['gg_kucun'],
				"gg_retail" => $value['gg_retail'],
				"gg_money" => $value['gg_money'],
				"gg_trade" => $value['gg_trade'],
				"vip_money" => $value['vip_money'],
				"fx_one" => $value['fx_one'],
				"fx_two" => $value['fx_two'],
				"sid" =>$sid,
				"uniacid" => $uniacid,
				"gg_title" => $goods['guige'],

			);
			pdo_insert("hyb_yl_goodsguige",$guiges);
		}
		
		if($res)
		{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"list",'hid'=>$hid)),"success");
		}else{
			message("编辑失败!",$this->createWebUrl("medicine",array("op"=>"list",'hid'=>$hid)),"success");
		}
	}



 //    $where="uniacid=$uniacid"; 
	// $cate = $goods->where($where)->page("*");
	// $cate_list = $cate['dataset'];
	// $sid = intval($_GPC['sid']);
	// $res = $model->where("sid=$sid and uniacid=$uniacid")->get('*');
 //    $res['spic'] =unserialize($res['spic']);
	// $state =$_GPC['state'];
 //    $gg_thumb = $_GPC['gg_thumb'];
 //    $gg_name = $_GPC['gg_name'];
 //    $gg_text =$_GPC['gg_text'];
 //    $gg_money =$_GPC['gg_money'];
 //    $gg_ke =$_GPC['gg_ke'];
 //    $gg_bh =$_GPC['gg_bh'];
 //    foreach ($gg_thumb as $key => $value) {
 //    	$new_aray[$key]['src'] = $gg_thumb[$key];
 //    	$new_aray[$key]['title'] = $gg_name[$key];
 //    	$new_aray[$key]['text'] = $gg_text[$key];
 //    	$new_aray[$key]['money'] = $gg_money[$key];
 //    	$new_aray[$key]['gg_ke'] = $gg_ke[$key];
 //    	$new_aray[$key]['gg_bh'] = $gg_bh[$key];
 //    }
	// 	$t_msg  = $_GPC['t_msg'];
	// 	$t_msg1 = $_GPC['t_msg1'];
	// foreach ($t_msg as $key => $value) {
	// 	$new_msg[$key]['t_msg']=$t_msg[$key];
	// 	$new_msg[$key]['t_msg1']=$t_msg1[$key];
	// }
	// $data =array(
	//       "date"      => date("Y-m-d",time()),
	//       'uniacid'   => $_W['uniacid'],
	//       'sname'     => $_GPC['sname'],
	//       'smoney'    => $_GPC['smoney'],
	//       'snum'      => $_GPC['snum'],
	//       'sthumb'    => $_GPC['sthumb'],
	//       'spic'      => serialize($_GPC['spic']),
	//       'sdescribe' => $_GPC['sdescribe'],
	//       'scontent'  => $_GPC['scontent'],
	//       'state'     => $state,
	//       'rec'       => $_GPC['rec'],
	//       'supplier'  => $_GPC['supplier'],
	//       'g_id'      => $_GPC['g_id'],
	//       'gg_type'   => $_GPC['gg_type'],
	//       'g_content' => serialize($new_msg),
	//       'adminqy'   => $_GPC['adminqy'],
	//       'yhqy'      => $_GPC['yhqy'],
	//       'g_kuaidi'  => $_GPC['g_kuaidi'],
	//       'g_baoyou'  => $_GPC['g_baoyou'],
	//       'spxl'      => $_GPC['spxl'],
	//       'ifcfy'     => $_GPC['ifcfy'],
	//       'mostgt'    => $_GPC['mostgt']
	//     );
 //    if($_W['ispost']){
	// $s_guigecontent = serialize($arr);
 // 		if($sid){
 // 			$model->where("sid=$sid and uniacid=$uniacid")->save($data);
 // 		}else{
 // 			$model->add($data);
 // 			$sid = pdo_insertid();
	// 		if ($_GPC['gg_type']=='1') {
	// 		foreach ($new_aray as $key => $value) {
	// 			$ggdata =array(
	// 	             'uniacid' => $uniacid,
	// 	             'gg_thumb'=> $value['src'],
	// 	             'gg_name' => $value['title'],
	// 	             'gg_text' => $value['text'],
	// 	             'gg_money'=> $value['money'],
	// 	             'sid'     => $sid,
	// 	             'gg_ke'   => $value['gg_ke'],
	// 	             'gg_bh'   => $value['gg_bh'],
	// 				);
	// 			pdo_insert('hyb_yl_goodsguige',$ggdata);
	// 		  }
	// 	   }
 // 		}
	//   message('成功', 'refresh', 'success');
 //    }
	include $this->template("medicine/add");
}
if($op == 'editor'){

    $where="uniacid=$uniacid"; 
	$cate = $goods->where($where)->page("*");
	$cate_list = $cate['dataset'];
	$sid = intval($_GPC['sid']);
	$hid = $_GPC['hid'];
	$res = $model->where("sid=$sid and uniacid=$uniacid")->get('*');
    $res['spic'] =unserialize($res['spic']);
    $rew_t_msg =unserialize($res['g_content']);
    $state =$_GPC['state'];

	$t_msg  = $_GPC['t_msg'];
	$t_msg1 = $_GPC['t_msg1'];
	foreach ($t_msg as $key => $value) {
		$new_msg[$key]['t_msg']=$t_msg[$key];
		$new_msg[$key]['t_msg1']=$t_msg1[$key];
	}
	$data =array(
	      "date"      => date("Y-m-d",time()),
	      'uniacid'   => $_W['uniacid'],
	      'sname'     => $_GPC['sname'],
	      'smoney'    => $_GPC['smoney'],
	      'snum'      => $_GPC['snum'],
	      'sthumb'    => $_GPC['sthumb'],
	      'spic'      => serialize($_GPC['spic']),
	      'sdescribe' => $_GPC['sdescribe'],
	      'scontent'  => $_GPC['scontent'],
	      'state'     => $state,
	      'rec'       => $_GPC['rec'],
	      'supplier'  => $_GPC['supplier'],
	      'g_id'      => $_GPC['g_id'],
	      'gg_type'   => $_GPC['gg_type'],
	      'g_content' => serialize($new_msg),
	      'adminqy'   => $_GPC['adminqy'],
	      'yhqy'      => $_GPC['yhqy'],
	      'g_kuaidi'  => $_GPC['g_kuaidi'],
	      'g_baoyou'  => $_GPC['g_baoyou'],
	      'spxl'      => $_GPC['spxl'],
	      'ifcfy'     => $_GPC['ifcfy'],
	      'mostgt'    => $_GPC['mostgt']
	    );

    if($_W['ispost']){
    $gg_thumb = $_GPC['gg_thumb'];
    $gg_name = $_GPC['gg_name'];
    $gg_text =$_GPC['gg_text'];
    $gg_money =$_GPC['gg_money'];
    $gg_ke =$_GPC['gg_ke'];
    $gg_bh =$_GPC['gg_bh'];
    $gg_id =$_GPC['gg_id'];
    foreach ($gg_thumb as $key => $value) {
    	$new_aray[$key]['src'] = $gg_thumb[$key];
    	$new_aray[$key]['title'] = $gg_name[$key];
    	$new_aray[$key]['text'] = $gg_text[$key];
    	$new_aray[$key]['money'] = $gg_money[$key];
    	$new_aray[$key]['gg_ke'] = $gg_ke[$key];
    	$new_aray[$key]['gg_bh'] = $gg_bh[$key];
    	$new_aray[$key]['gg_id'] = $gg_id[$key];
    }
	if ($_GPC['gg_type']=='1') {
	$gg_id=$_GPC['gg_id'];
	for($i=0;$i<count($gg_id);$i++){
		$id = $gg_id[$i];
		$new = $new_aray[$i];
		$ggdata= array(
             'uniacid' => $uniacid,
             'gg_thumb'=> $new['src'],
             'gg_name' => $new['title'],
             'gg_text' => $new['text'],
             'gg_money'=> $new['money'],
             'sid'     => $sid,
             'gg_ke'   => $new['gg_ke'],
             'gg_bh'   => $new['gg_bh'],
			);
		if($new_aray[$i]['gg_id']==''){
           pdo_insert('hyb_yl_goodsguige',$ggdata);
		}

		pdo_update('hyb_yl_goodsguige',$ggdata,array('gg_id'=>$id,'uniacid'=>$uniacid));
	  }	
	}
	$s_guigecontent = serialize($arr);
    $model->where("sid=$sid and uniacid=$uniacid")->save($data);
	message('成功', 'refresh', 'success');
    }
	include $this->template("medicine/editor");
}
if($op == 'categry')
{
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $hid = $_GPC['hid'];
	$where=" where uniacid=$uniacid"; 
	$list = pdo_fetchall("select * from ".tablename("hyb_yl_goodsfenl").$where." order by fid desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
	foreach($list as &$value)
	{
		$value['fenlpic'] = $_W['attachurl'].$value['fenlpic'];
	}
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_goodsfenl").$where);
    $pager = pagination($total, $pageindex, $pagesize);
	include $this->template("medicine/list_category");
}
if($op == 'add_category')
{
    $fid =intval($_GPC['fid']);
	$item = pdo_get("hyb_yl_goodsfenl",array("fid"=>$fid));
	$hid = $_GPC['hid'];
	$data =array(
	      'uniacid'  => $_W['uniacid'],
          'fenlname' => $_GPC['fenlname'],
          'fenlpic'  => $_GPC['fenlpic'],
          'rec'      => $_GPC['rec'],
          'sort' => $_GPC['sort'],
	    );
    if($_W['ispost']){
 		if($fid){
 			$goods->where("fid=$fid and uniacid=$uniacid")->save($data);
 		}else{
 			$goods->add($data);
 		}
	  message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"categry",'hid'=>$hid)),"success");
    }
	include $this->template("medicine/add_category");
}
if($op == 'del_category')
{
	$fid = $_GPC['fid'];
	$hid = $_GPC['hid'];
	$res = pdo_delete("hyb_yl_goodsfenl",array("fid"=>$fid));
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"categry",'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"categry",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/list_category");
}
if($op == 'youh'){
	$dpmodel = Model('store_sale');
	$val = isset($_GPC['val'])?$_GPC['val']:'list';
	if($val =='list'){
	    $keyword = $_GPC['keyword'];

	    $condition = " AND uniacid=:uniacid ";
	    $params = array(':uniacid' => $_W['uniacid']);
	    $pindex = max(1, intval($_GPC['page']));
	    $psize = 10;
	    if ($keyword != '') {
	        $condition .= ' AND (title LIKE :title) ';
	        $params[':title'] = '%'.$keyword.'%';
	    }

	    $sql = "SELECT * FROM " . tablename('hyb_yl_store_sale'). ' WHERE 1 '
	        . $condition . " ORDER BY stord DESC, id DESC LIMIT " . ($pindex - 1) * $psize .',' .$psize;

	    $list = pdo_fetchall($sql, $params);
	    $total = pdo_fetchcolumn('SELECT COUNT(*) FROM ' . tablename('hyb_yl_store_sale') . ' WHERE 1 ' . $condition, $params);
	    $pager = pagination($total, $pindex, $psize);

	    foreach ($list as $k => $v) {
	        $list[$k]['backmoney_format'] = number_format($v['backmoney'] / 100, 2);
	        $list[$k]['timedays2']  = json_decode($list[$k]['timedays2'] );
	        $list[$k]['addtime']   =date('Y-m-d H:i:s',$list[$k]['addtime']);
	    }
	if($_W['isajax']){
		switch ($_GPC['type']) {
			case 'del_one':
            	$id=intval($_GPC['id']); 
	            $res=$dpmodel->delete("id=$id and uniacid=$uniacid ");
				break;
			case 'del':
			    $values =$_GPC['values'];
                foreach ($values as $key => $value) {
                	 $id=intval($value); 
		             $res=$dpmodel->delete("id=$id and uniacid=$uniacid ");
                }
				break;
			case 'ups':
			    $values =$_GPC['values'];
                foreach ($values as $key => $value) {
                	 $id=intval($value); 
                	 $data =array(
                          'enabled' =>1
                	 	);
		             $res=$dpmodel->where("id=$id and uniacid=$uniacid")->save($data);

                }
				break;
			case 'noups':
			    $values =$_GPC['values'];
                foreach ($values as $key => $value) {
                	 $id=intval($value); 
                	 $data =array(
                          'enabled' =>0
                	 	);
		             $res=$dpmodel->where("id=$id and uniacid=$uniacid")->save($data);

                }
				break;
		}
         
            message(error(0, $res), '', 'ajax');  
	}
	}
	if($val =='add'){
		$allspecs = [];
		$id = intval($_GPC['id']);
	    $condition = " AND uniacid=:uniacid AND id=:id ";
	    $params = array(':uniacid' => $_W['uniacid'], ':id' => $id);
	    $res = pdo_fetch('SELECT * FROM ' . tablename('hyb_yl_store_sale') . ' WHERE 1 ' . $condition, $params);
	    $res['backmoney']   = $res['backmoney'] / 100;    // 销售价
	    if ($res) {
	        $time = json_decode($res['timedays2'], true);
	        if ($time['start']) {
	            $res['timestart'] = strtotime($time['start']);
	        } else {
	            $res['timestart'] = time();
	        }
	        if ($time['end']) {
	            $res['timeend'] = strtotime($time['end']);
	        } else {
	            $res['timeend'] = strtotime("+1 months");
	        }
	    }
		if ($_W['ispost']) {

		$time =$_GPC['time'];
		$start = $time['start'];
		$end = $time['end'];
		$time_arr = array(
             'start' =>$start,
             'end'   =>$end
			);
		$backmoney = $_GPC['backmoney'] * 100;// 立减
		$data =array(
		        'uniacid'  => $_W['uniacid'],
		        'stord'    => intval($_GPC['stord']),
		        'title'    => $_GPC['title'],
		        'intro'    => $_GPC['intro'],
		        'enough'   => $_GPC['enough'],
		        'timelimit'=> $_GPC['timelimit'],
		        'timedays1'=> intval($_GPC['timedays1']),
		        'timedays2'=> json_encode($time_arr),
		        'backtype' => $_GPC['backtype'],
		        'backmoney'=> $backmoney ,
		        'discount' => $_GPC['discount'],
		        'backwhen' => $_GPC['backwhen'],
		        'total'    => $_GPC['total'],
		        'enabled'  => intval($_GPC['enabled']),
		        'addtime'  => strtotime('now')
			);
		    if ($id) {
		        pdo_update('hyb_yl_store_sale', $data, array('id' => $id));
		        message('成功', 'refresh', 'success');
		        //message("编辑成功!",$this->createWebUrl("medicine",array('op'=>'youh',"val"=>"add",'id'=>$id)),"success");
		    } else {
		        pdo_insert('hyb_yl_store_sale', $data);
		        message('成功', 'refresh', 'success');
		       // message("添加成功!",$this->createWebUrl("medicine",array('op'=>'youh',"val"=>"list")),"success");
		    }
		    
		}
		
	}
   include $this->template("medicine/youh");
}
if ($op == "add_spec") {
	$specs['id'] = date('dHis');
	if ($_GPC['tpl']=='spec') {
	$data = array();
		// pdo_insert('hyb_o2o_goods_spec');
	include $this->template('medicine/goods_guige_spec');
	}else if($_GPC['tpl']=='specitem'){
		$specs['id'] = $_GPC['specid'];
		include $this->template('medicine/goods_guige_specitem');

	}else{
		include $this->template('medicine/goods_guige');

	}
	die;
}

if($op == 'orders'){
	$hid = $_GPC['hid'];
	if(is_agent == '1' && $zjs != '')
	{
		$where = " and zid in (".$zjs.")";
		$wheres = " and b.jigou_one=".$hid;
	}else{
		$where = "";
		$wheres = " and b.jigou_one=".$hid;
	}
	$total = pdo_fetchcolumn("SELECT COUNT(*) FROM ".tablename('hyb_yl_goodsorders')."as a left join".tablename('hyb_yl_goodsarr')."as b on b.sid=a.sid where a.uniacid='{$uniacid}'".$where);
	$money = pdo_fetchcolumn("SELECT SUM(totalMoney) FROM ".tablename('hyb_yl_goodsorders')."as a left join".tablename('hyb_yl_goodsarr')."as b on b.sid=a.sid where a.uniacid='{$uniacid}'".$where);
	$pindex = max(1, intval($_GPC['page'])); 
	$pagesize = 10;
	$p = ($pindex-1) * $pagesize; 
	$res = pdo_fetchall("SELECT a.*,b.*,c.userName,c.userPhone,d.openid,d.u_name,e.gg_id,e.gg_name FROM".tablename('hyb_yl_goodsorders')."as a left join".tablename('hyb_yl_goodsarr')."as b on b.sid=a.sid left join".tablename('hyb_yl_user_address')."as c on c.addressId=a.addressId left join".tablename('hyb_yl_userinfo')."as d on d.openid=a.openid left join".tablename('hyb_yl_goodsguige')."as e on e.gg_id=a.gg_id where a.uniacid='{$uniacid}'".$wheres);
    $pager = pagination($total,$pindex,$pagesize);

    include $this->template("medicine/orders");	
}

if($op =='detail'){
 include $this->template("medicine/detail");
}
// 药师列表
if($op =='pharmacistlist'){
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
	$where=" where uniacid=$uniacid"; 
	$keywordtype = $_GPC['keywordtype'];
	$keyword = $_GPC['keyword'];
	$hid = $_GPC['hid'];
	if($keywordtype == '1')
	{
		$where .= " and jigou_name like '%$keyword%'";
	}else if($keywordtype == '2')
	{
		$where .= " and title like '%$keyword%'";
	}else if($keywordtype == '3')
	{
		$where .= " and name like '%$keyword%'";
	}else if($keywordtype == '4')
	{
		$where .= " and telphone like '%$keyword%'";
	}else if($keywordtype == '5')
	{
		$where .= " and id=".$keyword;
	}
	$typs = $_GPC['typs'];
	if($typs != '')
	{
		$where .= " and typs=".$typs;
	}
	$status = $_GPC['status'];
	if($status == '1')
	{
		$where .= " and status=1 and ruzhu_endtime>=".time();
	}else if($status == '2')
	{
		$where .= " and status=3";
	}else if($status == '3')
	{
		$where .=" and ruzhu_endtime <=".time();
	}else if($status == '4')
	{
		$where .= " and status=0";
	}else if($status == '5')
	{
		$where .= " and status=2";
	}
	if(is_agent == '1')
	{
		$where .= " and jigou_one=".$hid;
		$wheres = " and jigou_one=".$hid;
	}
	$list = pdo_fetchall("select * from ".tablename("hyb_yl_yaoshi").$where." order by id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
	foreach($list as &$value)
	{
		$value['thumb'] = $_W['attachurl'].$value['thumb'];
		$value['add_time'] = date("Y-m-d H:i:s",$value['add_time']);
	}
	$total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi").$where);
	$pager = pagination($total, $pageindex, $pagesize);

	$ruzhu = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi")." where uniacid=".$uniacid." and status=1 and ruzhu_endtime>=".time().$wheres);
	$zanting = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi")." where uniacid=".$uniacid." and status=3".$wheres);
	$daoqi = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi")." where uniacid=".$uniacid." and ruzhu_endtime <=".time().$wheres);
	$shenhe = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi")." where uniacid=".$uniacid." and status=0".$wheres);
	$jujue = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_yaoshi")." where uniacid=".$uniacid." and status=2".$wheres);
 include $this->template("medicine/pharmacistlist");
}
// 修改药师状态
if($op == 'yschanges')
{
	$id = $_GPC['id'];
	$status = $_GPC['status'];
	$hid = $_GPC['hid'];
	$res = pdo_update("hyb_yl_yaoshi",array("status"=>$status),array("id"=>$id));
	if($res)
	{
		message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}else{
		message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/pharmacistlist");
}
// 添加编辑药师
if($op == 'edit_yaoshi')
{
	$id = $_GPC['id'];
	$item = pdo_get("hyb_yl_yaoshi",array("id"=>$id));
	$hid = $_GPC['hid'];
	$item['y_name'] = pdo_getcolumn("hyb_yl_userinfo",array("openid"=>$item['openid']),'u_name');
	$ks_list = pdo_getall("hyb_yl_classgory",array('uniacid'=>$uniacid));
	//权限列表
	$athuo_list = pdo_getall("hyb_yl_hospital_diction",array('uniacid'=>$uniacid));
	//二级科室
	$ks_erlist = pdo_getall("hyb_yl_ceshi",array('uniacid'=>$uniacid,'id'=>$item['keshi_two']));
    $host_erlist = pdo_getall("hyb_yl_hospital",array('uniacid'=>$uniacid,'hid'=>$item['jigou_two']));

	if ($_W['ispost']) {
		$jigou_name = pdo_getcolumn("hyb_yl_hospital_diction",array("id"=>$_GPC['jigou_two']),'name');

		$data = array(
			'title' => $_GPC['title'],
			"uniacid" => $_W['uniacid'],
			"thumb" => $_GPC['thumb'],
			"title" => $_GPC['title'],
			"money" => $_GPC['money'],
			"jigou_one" => $_GPC['jigou_one'],
			"jigou_two" => $_GPC['jigou_two'],
			"status" => $_GPC['status'],
			"openid" => $_GPC['openid'],
			"telphone" => $_GPC['telphone'],
			"name" => $_GPC['name'],
			"typs" => $_GPC['typs'],
			"jigou_name" => $jigou_name,
			"status" =>$_GPC['status'],
			"ruzhu_endtime" => strtotime($_GPC['ruzhu_endtime']),
			"sex" => $_GPC['sex'],
			"idcard" => $_GPC['idcard'],
			"province" => $_GPC['address']['province'],
			"city" => $_GPC['address']['city'],
			"district" => $_GPC['address']['district'],
			'lon' => $_GPC['register']['location']['lon'],
			"lat" => $_GPC['register']['location']['lat'],
			"keshi_one" => $_GPC['keshi_one'],
			"keshi_two" => $_GPC['keshi_two'],
			"login_name" => $_GPC['login_name'],
			"login_pass" => md5(trim($_GPC['login_pass'])),
			"is_index" => $_GPC['is_index'],
			"sort" => $_GPC['sort'],
			"money" => $_GPC['money'],
		);
		if($id)
		{
			$res = pdo_update("hyb_yl_yaoshi",$data,array("id"=>$id));
		}else{
			$data['add_time'] = time();
			$data['ruzhu_time'] = time();
			$data['created'] = time();
			
			$res = pdo_insert("hyb_yl_yaoshi",$data);
			
		}
		if($res)
		{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
		}else{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
		}

	}
	include $this->template("medicine/edit_yaoshi");
}
// 审核列表
if($op == 'shlist')
{
	$id = $_GPC['id'];
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $hid = $_GPC['hid'];
    if(is_agent == '1')
    {
    	$where = " and zid in (".$zjs.")";
    }
	$list = pdo_fetchall("select * from ".tablename("hyb_yl_chufang")." where uniacid=$uniacid and y_id=".$id." order by c_id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
	$total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_chufang")." where uniacid=$uniacid and y_id=".$id);
	$pager = pagination($total, $pageindex, $pagesize);
	include $this->template("medicine/shlist");
}
// 删除审核列表
if($op == 'del_shlist'){
	$c_id = $_GPC['c_id'];
	$y_id = $_GPC['y_id'];
	$hid = $_GPC['hid'];
	$res = pdo_delete("hyb_yl_chufang",array("c_id"=>$c_id));
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"shlist","id"=>$y_id,'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"shlist","id"=>$y_id,'hid'=>$hid)),"success");
	}
	include $this->template("medicine/shlist");
}
// 删除药师列表
if($op == 'del_yaoshi')
{
	$id = $_GPC['id'];
	$hid = $_GPC['hid'];
	$res = pdo_delete("hyb_yl_yaoshi",array("id"=>$id));
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/pharmacistlist");
}
// 批量删除药师
if($op == 'del_yaoshis')
{
	$ids = $_GPC['ids'];
	$hid = $_GPC['hid'];
	foreach($ids as &$value)
	{
		$res = pdo_delete("hyb_yl_yaoshi",array("id"=>$value));
	}
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"pharmacistlist",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/pharmacistlist");
}
//开方审核
if($op =='audit'){
	$id = $_GPC['id'];
	$end = $start = date("Y-m-d",time());
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $where = " where c.uniacid=".$uniacid;
    $status = $_GPC['status'];
    $hid = $_GPC['hid'];
    if($status != '')
    {
    	$where .= " and c.status=".$status;
    }
    $ispay = $_GPC['ispay'];
    if($ispay != '')
    {
    	$where .= " and c.ispay=".$ispay;
    }
    $typs = $_GPC['typs'];
    if($typs != '')
    {
    	$where .= " and c.typs=".$typs;
    }
    $keywordtype = $_GPC['keywordtype'];
    $keyword = $_GPC['keyword'];
    if($keywordtype == '1')
    {
    	$where .= " and c.back_orser like '%$keyword%'";
    }else if($keywordtype == '2')
    {
    	$where .= " and u.u_name like '%$keyword%'";
    }else if($keywordtype == '3')
    {
    	$where .= " and c.y_id =".$keyword;
    }
    $starts = $_GPC['stat'];
    $ends = $_GPC['end'];
    if($starts)
    {
    	$where .= " and c.time >=".strtotime($starts);
    }
    if($ends)
    {
    	$where .= " and c.time <=".strtotime($ends);
    }
    if(is_agent == '1' && $zjs != '')
    {
    	$where .= " and c.zid in (".$zjs.")";
    }
    $list = pdo_fetchall("select c.*,u.u_name,u.u_thumb from ".tablename("hyb_yl_chufang")." as c left join ".tablename("hyb_yl_userinfo")." as u on u.openid=c.useropenid ".$where." order by c.c_id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
    

	foreach($list as &$value)
	{
		if(strpos($value['u_thumb'],'http' === false))
		{
			$value['u_thumb'] = $_W['attachurl'].$value['u_thumb'];
		}
		$value['user'] = pdo_get("hyb_yl_userinfo",array("openid"=>$value['useropenid']));
		$zhuanjia = pdo_get("hyb_yl_zhuanjia",array("zid"=>$value['zid']));
		$value['content'] = unserialize($value['content']);
		$value['z_name'] = $zhuanjia['z_name'];
		$value['z_thumb'] = tomedia($zhuanjia['advertisement']);
		if($value['y_id'] != '0' && $value['y_id'] != '')
		{
			$yaoshi = pdo_get("hyb_yl_yaoshi",array("id"=>$value['y_id']));
			$value['y_name'] = $yaoshi['name'];
			$value['y_thumb'] = $yaoshi['thumb'];
		}
		$value['cfimg'] = pdo_getcolumn("hyb_yl_goodsorders",array("uniacid"=>$uniacid,"cid"=>$value['c_id']),'cfimg');
		if($value['cfimg'] != '')
		{
			$value['cfimg'] = tomedia($value['cfimg']);
		}
	}
	
	$total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_chufang")." as c left join ".tablename("hyb_yl_userinfo")." as u on u.openid=c.useropenid ".$where." order by c.c_id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
	$pager = pagination($total, $pageindex, $pagesize);
 	include $this->template("medicine/audit");
}
if($op == 'cfdetail')
{
	$c_id = $_GPC['c_id'];
	
	$hid = $_GPC['hid'];

   $content = pdo_fetch("select * from".tablename('hyb_yl_goodsorders')."as a left join".tablename('hyb_yl_userjiaren')."as b on b.openid=a.openid where a.uniacid='{$uniacid}' and a.cid='{$c_id}'");


  $content['docdetail'] = pdo_fetch("select * from".tablename('hyb_yl_zhuanjia')."as a left join".tablename('hyb_yl_ceshi')."as b on b.id=a.parentid where a.uniacid='{$uniacid}' and a.zid='{$content['zid']}'");
  $content['cartlist'] = unserialize($content['sid']);
  $content['content'] = unserialize($content['conets']);
  $content['users'] = pdo_get("hyb_yl_userinfo",array('openid'=>$content['openid']),array('randnum'));
  foreach ($content['cartlist'] as $k => $v) {
    $zhiyaochang =pdo_get("hyb_yl_goodsarr",array('sid'=>$v['sid']),array('pp_title','ifcfy','use'));
    $content['cartlist'][$k]['zhiyaochang'] = $zhiyaochang['pp_title'];
    $content['cartlist'][$k]['ifcfy'] = $zhiyaochang['ifcfy'];
   
  }
	include $this->template("profile/chufangdan");
	
}
// 开方审核修改
if($op == 'change_audit')
{
	$c_id = $_GPC['c_id'];
	$m_id = $_GPC['m_id'];
	$status = $_GPC['status'];
	$express = $_GPC['express'];
	$courier_number = $_GPC['courier_number'];
	$hid = $_GPC['hid'];
	if($status == '1')
	{
		$content = '审核通过';
		$res = pdo_update("hyb_yl_chufang",array("status"=>$status,"express"=>$express,'courier_number'=>$courier_number),array("c_id"=>$c_id));
	}else if($status == '0')
	{
		$content = '审核拒绝';
		$res = pdo_update("hyb_yl_chufang",array("status"=>$status),array("c_id"=>$c_id));
	}
	
	include $this->template("physical/audit");
}
if($op == 'del_audit')
{
	$c_id = $_GPC['c_id'];
	$m_id = $_GPC['m_id'];
	$res = pdo_delete("hyb_yl_chufang",array("c_id"=>$c_id));
	if($res)
	{
		message("设置成功!",$this->createWebUrl("medicine",array("op"=>"audit","m_id"=>$m_id,'hid'=>$hid)),"success");
	
	}else{
		message("设置失败!",$this->createWebUrl("medicine",array("op"=>"audit","m_id"=>$m_id,'hid'=>$hid)),"success");
	}
	include $this->template("physical/audit");
}
//开方详情
if($op =='auditdetails'){
	$c_id = $_GPC['c_id'];

	$item = pdo_get("hyb_yl_chufang",array("c_id"=>$c_id));
	$user = pdo_get("hyb_yl_userinfo",array("openid"=>$item['useropenid']));
	$item['u_id'] = $user['u_id'];
	$item['u_name'] = $user['u_name'];
	$item['u_thumb'] = $user['u_thumb'];
	$item['u_phone'] = $user['u_phone'];
	$user_my = pdo_get("hyb_yl_userjiaren",array("openid"=>$user['openid'],'sick_index'=>0));

	$goods = pdo_getall("hyb_yl_goodsorders",array("cid"=>$item['c_id']));
	if($goods)
	{
		$goods['sid'] = unserialize($goods['sid']);
		$goods['conets'] = unserialize($goods['conets']);

	}


	$zhuanjia = pdo_get("hyb_yl_zhuanjia",array("zid"=>$item['zid']));
	$zhuanjia['advertisement'] = tomedia($zhuanjia['advertisement']);
	$zhuanjia['keshi'] = pdo_getcolumn("hyb_yl_classgory",array("id"=>$zhuanjia['parentid']),'ctname');
	$zhuanjie['jigou'] = pdo_getcolumn("hyb_yl_hospital",array("hid"=>$zhuanjia['hid']),'agentname');

	$zhuanjia['zhicheng'] = pdo_getcolumn("hyb_yl_zhuanjia_job",array("id"=>$zhuanjia['z_zhicheng']),'job_name');
	$item['zhuanjia'] = $zhuanjia;

	// 药师信息
	if($item['y_id'] != '0')
	{
		$item['yaoshi'] = pdo_get("hyb_yl_yaoshi",array("id"=>$item['y_id']));
		if(strpos($item['yaoshi']['thumb'],'http') == false)
		{
			$item['yaoshi']['thumb'] = $_W['attachurl'].$item['yaoshi']['thumb'];
		}
		$item['yaoshi']['keshi'] = pdo_getcolumn("hyb_yl_classgory",array("id"=>$item['yaoshi']['keshi_two']),'ctname');
		$item['yaoshi']['jigou'] = pdo_getcolumn("hyb_yl_hospital",array("hid"=>$item['yaoshi']['jigou_two']),'agentname');
	}
	
	// 日志记录
	// $log = pdo_getall("hyb_yl_chufang",array("orders"=>$item['back_orser']));
	// foreach($log as &$value)
	// {
	// 	$value['created'] = date("Y-m-d H:i:s",$value['created']);
	// }
	// $item['log'] = $log;

 include $this->template("medicine/auditdetails");
}
// 下载压缩包
if($op == 'zips')
{
    date_default_timezone_set("PRC");
    ini_set('max_execution_time',0);
    // 不限制内存使用
    ini_set('memory_limit',-1);
    
    require_once dirname(dirname(dirname(__FILE__)))."/zip.php";
    $zip = new zip();
    //PHP压缩文件夹为zip压缩文件
   
   
    if($zip->zipFolder("../attachment/hyb_yl/chufang_{$uniacid}","../attachment/hyb_yl/chufang_".date("Y-m-d",time()).".zip")){
            echo '成功压缩了文件夹。';
    }else{
            echo '文件夹没有压缩成功。';
    }

    ob_end_clean();
    header("Content-Type: application/force-download");
    header("Content-Transfer-Encoding: binary");
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename='.basename("../attachment/hyb_yl/chufang_".date("Y-m-d",time()).".zip"));
    header('Content-Length: '.filesize("../attachment/hyb_yl/chufang_".date("Y-m-d",time()).".zip"));
    error_reporting(0);
    @readfile("../attachment/hyb_yl/chufang_".date("Y-m-d",time()).".zip");
    flush();
    ob_flush();
    exit;
}

//规则设置
if($op =='rule'){
	$item = pdo_get("hyb_yl_ys_rule",array("uniacid"=>$uniacid));
	if ($_W['ispost']) {
		$data = array(
			'uniacid' => $uniacid,
			"content" => $_GPC['content'],
			"status" => $_GPC['status'],
			"is_shenhe" => $_GPC['is_shenhe'],
			"sh_fee" => $_GPC['sh_fee'],
		);
		if($item)
		{
			$res = pdo_update("hyb_yl_ys_rule",$data,array("uniacid"=>$uniacid));
		}else{
			$data['created'] = time();
			$res = pdo_insert("hyb_yl_ys_rule",$data);
		}
		if($res)
		{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"rule")),"success");
		}else{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"rule")),"success");
		}
	}
 include $this->template("medicine/rule");
}

//供应商
if($op =='supplierlist'){
	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $keyword = $_GPC['keyword'];
    // var_dump($keyword);
    // exit();
    $where = " where uniacid=".$uniacid;
    if($keyword != '')
    {
    	$where .= " and title like '%$keyword%'";
    }
    $status = $_GPC['status'];
    if($status != '' && $status != null)
    {
    	$where .= " and status=".$status;
    }
    $list = pdo_fetchall("select * from ".tablename("hyb_yl_store").$where." order by id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_store").$where);
    $pager = pagination($total, $pageindex, $pagesize);

 	include $this->template("medicine/supplierlist");
}
//供应商添加
if($op =='supplierlistadd'){
	$id = $_GPC['id'];
	$item = pdo_get("hyb_yl_store",array("id"=>$id));
	if($_W['ispost'])
	{
		$data = array(
			'uniacid' => $uniacid,
			"title" => $_GPC['title'],
			"telphone" => $_GPC['telphone'],
			"status" => $_GPC['status'],
			"province" => $_GPC['address']['province'],
			"city" => $_GPC['address']['city'],
			"district" => $_GPC['address']['district'],
		);
		
		if($id)
		{
			$res = pdo_update("hyb_yl_store",$data,array("id"=>$id));
		}else{
			$data['created'] = time();
			$res = pdo_insert("hyb_yl_store",$data);
		}
		if($res)
		{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"supplierlist")),"success");
		}else{
			message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"supplierlist")),"success");
		}
	}
 include $this->template("medicine/supplierlistadd");
}
// 供应商删除
if($op == 'supplierlistdel')
{
	$id = $_GPC['id'];
	$res = pdo_delete("hyb_yl_store",array("id"=>$id));
	if($res)
	{
		message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"supplierlist")),"success");
	}else{
		message("编辑成功!",$this->createWebUrl("medicine",array("op"=>"supplierlist")),"success");
	}
	include $this->template("medicine/supplierlist");

}
//药房列表
if($op =='drugstorelist'){

	$page = empty($_GPC['page']) ? "" : $_GPC['page'];
    $pageindex = max(1, intval($page));
    $pagesize = 10;
    $keyword = $_GPC['keyword'];
    $jigou = $_GPC['jigou'];
    $keywordtype = $_GPC['keywordtype'];
    $where = " where h.uniacid=".$uniacid." and groupid=2";
    $state = empty($_GPC['state']) ? '1' : $_GPC['state'];
    if($state == '1')
    {
    	$where .= " and h.state=1";
    }else if($state == '2')
    {
    	$where .= " and h.state=0";
    }else if($state == '3')
    {
    	$where .= " and h.state=2";
    }else if($state == '4')
    {
    	$where .= " and h.state=3";
    }else if($state == '5')
    {
    	$where .= " and h.state=4";
    }
    if($keywordtype == '1')
    {
    	$where .= " and h.hid=".$keyword;
    }else if($keywordtype == '2')
    {
    	$where .= " and h.agentname like '%$keyword%'";
    }else if($keywordtype == '3')
    {
    	$where .= " and h.realname like '%$keyword%'";
    }else if($keywordtype == '4')
    {
    	$where .= " and h.hospitaltel like '%$keyword%'";
    }
    $groups = pdo_getall("hyb_yl_hospital_diction",array("uniacid"=>$uniacid));
    $groupid = $_GPC['groupid'];
    if($groupid)
    {
    	$where .= " and h.groupid=".$groupid;
    }
    if(is_agent == '1')
    {
    	$where .= " and hid=".$hid;
    	$wheres = " and hid=".$hid;
    }
    $list = pdo_fetchall("select h.*,u.u_name from ".tablename("hyb_yl_hospital")." as h left join ".tablename("hyb_yl_userinfo")." as u on u.openid=h.openid ".$where." order by h.hid desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
    $count = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." as h left join ".tablename("hyb_yl_userinfo")." as u on u.openid=h.openid ".$where);
    $pager = pagination($total, $pageindex, $pagesize);
    foreach($list as &$value)
    {
    	$value['logo'] = tomedia($value['logo']);
    	$value['level_name'] = pdo_getcolumn("hyb_yl_hospital_diction",array("id"=>$value['groupid']),'name');
    	$value['zctime'] = date("Y-m-d H:i:s",$value['zctime']);
    }
    $ruzhu = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where state=1 and groupid=2".$wheres);
    $shenhe = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where state=0 and groupid=2".$wheres);
    $zanting = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where state=2 and groupid=2".$wheres);
    $daoqi = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where state=3 and groupid=2".$wheres);
    $del = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where state=4 and groupid=2".$wheres);
	
 	include $this->template("medicine/drugstorelist");
}
// if($op == 'editdrugstore')
// {
// 	$hid = $_GPC['hid'];
// 	$item = pdo_get("hyb_yl_hospital",array("hid"=>$hid));

// }
if($op == 'ajax'){
  if($_W['isajax']){
     if($_GPC['type'] =='erji'){
     	$id = $_GPC['id'];
        $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$id}'");
        echo json_encode($city);
        return false;
     }
     if($_GPC['type'] =='sanji'){
     	$id = $_GPC['id'];
        $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$id}'");
        echo json_encode($city);
        return false;
     }
  }
}
if($op == 'deldrugstore')
{
	$hid = $_GPC['hid'];
	$res = pdo_delete("hyb_yl_hospital",array("hid"=>$hid));
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"drugstorelist",'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"drugstorelist",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/drugstorelist");
}
if($op == 'deldrugstores')
{
	$ids = $_GPC['ids'];
	foreach($ids as &$value)
	{
		$res = pdo_delete("hyb_yl_hospital",array("hid"=>$hid));
	}
	if($res)
	{
		message("删除成功!",$this->createWebUrl("medicine",array("op"=>"drugstorelist",'hid'=>$hid)),"success");
	}else{
		message("删除失败!",$this->createWebUrl("medicine",array("op"=>"drugstorelist",'hid'=>$hid)),"success");
	}
	include $this->template("medicine/drugstorelist");
}
if($op == 'editdrugstore')
{
	$diction = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital_diction')."where uniacid ='{$uniacid}'");
	$level = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital_level')."where uniacid ='{$uniacid}'");
    $uid = $_W['uid'];
    $hid = $_GPC['hid'];
    $res = pdo_fetch("SELECT a.*,b.u_name FROM".tablename('hyb_yl_hospital')."as a left join".tablename('hyb_yl_userinfo')."as b on b.openid =a. openid where a.hid ='{$hid}'");
    $city_id = $res['province'];
    $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$city_id}'");
	$city_html = '';
	foreach ($city AS $parent) {
	    $parentid =$parent['id'];
	    if($parentid ==$city_id){
	    	$city_html.= "<option value=".$parentid." selected>";
	    }else{
	        $city_html.= "<option value=".$parentid.">"; 
	    }
	    $city_html.= "".$parent['name']."";
	    $city_html.= "</option>";
	}

    $district_id = $res['city'];
    $district = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$district_id}' and level='3'");
    $ppp_dis_id = $res['district'];
      
	$district_html = '';
	foreach ($district AS $parent) {
	    $parentid =$parent['id'];
	    if($parentid ==$ppp_dis_id){
	    	$district_html.= "<option value=".$parentid." selected>";
	    }else{
	    	$district_html.= "<option value=".$parentid.">"; 
	    }
	    $district_html.= "".$parent['name']."";
	    $district_html.= "</option>";
	  }

    $province = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = 0");
    if($_W['ispost']){
	    $username = trim($_GPC['username']);
    	$password = $_GPC['password']; 
    	$random = random(6);   
		$salt =md5(md5($random . $password) . $random);
		$hash = user_hash($password , $salt);
		$r = array();
		$districtslevel = $_GPC['districtslevel'];
		if($districtslevel=='1'){
		  $pid = $_GPC['province'];
		  $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE id = '{$pid}'");
          $r['province'] = $province['id'];
          $r['city'] = 0;
          $r['district'] = 0;
          $r['address'] = $province['name'];
		}
		if($districtslevel=='2'){
		  $pid = $_GPC['province'];
		  $pid2 = $_GPC['city'];
		  $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE id = '{$pid}'");
          $city = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$pid2}'");
          $r['province'] = $province['id'];
          $r['city'] = $city['id'];
          $r['district'] = 0;
          $r['address'] = $province['name'].'-'.$city['name'];
		}
		if($districtslevel=='3'){
		  $pid = $_GPC['province'];
		  $pid2 = $_GPC['city'];
		  $pid3 = $_GPC['district'];
		  $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE id = '{$pid}'");
          $city = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE id = '{$pid2}'");
          $district = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE id = '{$pid3}'");
          $r['province'] = $province['id'];
          $r['city'] = $city['id'];
          $r['district'] = $district['id'];
          $r['address'] = $province['name'].'-'.$city['name'].'-'.$district['name'];
		}
		$r['uniacid'] =$_W['uniacid'];
		$r['password'] = $hash;
		$r['agentname'] = $_GPC['agent']['agentname'];
		$r['realname'] = $_GPC['agent']['realname'];
		$r['logo'] = $_GPC['logo'];
		$r['username'] = $_GPC['username'];
        $r['backpassword'] = $_GPC['password'];
        if(!empty($hid)){
          $r['zctime'] = strtotime('now');
        } 
        $r['hospitaltel'] = $_GPC['agent']['hospitaltel'];
        $r['grade'] = $_GPC['grade'];
        $r['groupid'] = $_GPC['groupid'];
        $r['pid'] = $uid;
        $r['hos_tuijian'] = $_GPC['hos_tuijian'];
        $r['openid'] = $_GPC['openid'];
        $r['endtime'] = $_GPC['agent']['endtime'];
        $r['system_royalty'] = $_GPC['system_royalty'];
        $r['state'] = '1';
        $r['districtslevel'] = $_GPC['districtslevel'];
     
        if(empty($hid)){
        pdo_insert("hyb_yl_hospital",$r);
        message('添加成功', 'refresh', 'success');
        }else{
        pdo_update("hyb_yl_hospital",$r,array('hid'=>$hid));
        message('修改成功', 'refresh', 'success');
        }
    }
    include $this->template("medicine/editdrugstore");
}
if($msg =='delete'){
    $hid = $_GPC['hid'];
    $res = pdo_delete("hyb_yl_hospital",array('hid'=>$_GPC['hid']));
    message('删除成功', 'refresh', 'success');
}

if($op =='dels'){
     $sid = $_GPC['sid'];
     $res = pdo_delete("hyb_yl_goodsarr",array('sid'=>$_GPC['sid']));
	 $data = array(
	    'status'=>$res
	  );
	echo json_encode($data);
	return false;
}
if($op =='changesaudit'){
	//通过审核
     $c_id = $_GPC['c_id'];
     $status = $_GPC['status'];
	 $data = array(
	    'status'=>$status,
	    's_time' => time(),
	  );
     $res = pdo_update("hyb_yl_chufang",$data,array('c_id'=>$c_id));
     $code = array(
	    'status'=>1
	  );
	 echo json_encode($code);
	 return false;
}
if($op =='del_audit'){
	//通过审核
     $c_id = $_GPC['c_id'];
     $res = pdo_delete("hyb_yl_chufang",array('c_id'=>$c_id));
     $code = array(
	    'status'=>1
	  );
	 echo json_encode($code);
	 return false;
}