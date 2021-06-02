<?php
/**
* 
*/
 class Yuyue extends HYBPage
 { 
//手术预约详情
   public function shoushuinfo()
  {
     global $_GPC, $_W;
     $model = Model('servicemenu');
     $uniacid = $_W['uniacid'];
     $pinyin = $_GPC['key'];
     $res = $model->where('uniacid="'.$uniacid.'" and pinyin="'.$pinyin.'"')->get('tishi,tiaokuan');
     $res['tishi'] = htmlspecialchars_decode($res['tishi']);
     $res['tiaokuan'] = htmlspecialchars_decode($res['tiaokuan']);
     echo json_encode($res);
  }
//
  public function paywenzhen() {
      global $_GPC, $_W;
      cache_write('uniacid',$_W['uniacid']);
      require_once dirname(dirname(dirname(__FILE__)))."/wxpay.php";
      $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
      $appid = $res['appid'];
      $openid = $_GPC['openid'];
      $mch_id = $res['mch_id'];
      $key = $res['pub_api'];
      $out_trade_no = $_GPC['orders'];
      $total_fee = $_GPC['z_tw_money'];
      $key_words = $_GPC['key_words'];
      $noturl = 'http://'.$_SERVER['SERVER_NAME'].'/addons/hyb_yl/noturl.php';
      if (empty($total_fee)) {
          $body = '订单付款';
          $total_fee = floatval(99 * 100);
      } else {
          $body = '订单付款';
          $total_fee = floatval($total_fee * 100);
      }
      $weixinpay = new WeixinPay($appid, $openid, $mch_id, $key, $out_trade_no, $body, $total_fee,$noturl);
      $return = $weixinpay->pay();
      echo json_encode($return);
  }
   public function upwenzhentype(){
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $order_time = pdo_get("hyb_yl_wenzhenrule",array('uniacid'=>$uniacid));
     $chaoshi = $order_time['p_jiezhen'];
     $time_b = intval($chaoshi * 60);
     $newtime  = date("Y-m-d H:i:s");
     $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b); 
     $orders =$_GPC['orders'];
     $res_one_order = pdo_update('hyb_yl_wenzorder',array('ifpay'=>1,'paytime' => strtotime("now"),'overtime'=>strtotime($overtime)),array('uniacid'=>$uniacid,'back_orser'=>$orders));
     $order = pdo_get("hyb_yl_wenzorder",array("back_orser"=>$orders,"uniacid"=>$uniacid));
     $rule = pdo_getcolumn("hyb_yl_zhuanjia_rule",array("uniacid"=>$uniacid),'fee');
     $zhuanjia_money = $order['money'] * $rule / 100;
     $z_money = pdo_getcolumn("hyb_yl_zhuanjia",array("uniacid"=>$uniacid,"zid"=>$order['zid']),'total_money');
     $z_moneys = $z_money + $zhuanjia_money;
     pdo_update("hyb_yl_zhuanjia",array("total_money"=>$z_moneys),array("zid"=>$order['zid']));
    echo json_encode($res_one_order);
   }
   public function uptuwentype(){
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $order_time = pdo_get("hyb_yl_wenzhenrule",array('uniacid'=>$uniacid));
     $chaoshi = $order_time['p_jiezhen'];
     $time_b = intval($chaoshi * 60);
     $newtime  = date("Y-m-d H:i:s");
     $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b); 
     $orders =$_GPC['orders'];
     $res_one_order = pdo_update('hyb_yl_twenorder', array('ifpay' => 1, 'paytime' => strtotime("now"),'overtime'=>strtotime($overtime)), array('uniacid' => $uniacid, 'back_orser' => $orders));
     $order = pdo_get("hyb_yl_twenorder",array("back_orser"=>$orders,"uniacid"=>$uniacid));
     $rule = pdo_getcolumn("hyb_yl_zhuanjia_rule",array("uniacid"=>$uniacid),'fee');
     $zhuanjia_money = $order['money'] * $rule / 100;
     $z_money = pdo_getcolumn("hyb_yl_zhuanjia",array("uniacid"=>$uniacid,"zid"=>$order['zid']),'total_money');
     $z_moneys = $z_money + $zhuanjia_money;
     pdo_update("hyb_yl_zhuanjia",array("total_money"=>$z_moneys),array("zid"=>$order['zid']));
    echo json_encode($res_one_order);
   }   
   public function upchufangwentype(){
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $order_time = pdo_get("hyb_yl_wenzhenrule",array('uniacid'=>$uniacid));
     $chaoshi = $order_time['p_jiezhen'];
     $time_b = intval($chaoshi * 60);
     $newtime  = date("Y-m-d H:i:s");
     $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b); 
     $orders =$_GPC['orders'];
     $res_one_order = pdo_update('hyb_yl_chufang',array('ispay'=>1,'paytime' => strtotime("now"),'overtime'=>strtotime($overtime)),array('uniacid'=>$uniacid,'back_orser'=>$orders));
     $order = pdo_get("hyb_yl_chufang",array("back_orser"=>$orders,"uniacid"=>$uniacid));
     $rule = pdo_getcolumn("hyb_yl_zhuanjia_rule",array("uniacid"=>$uniacid),'fee');
     $zhuanjia_money = $order['money'] * $rule / 100;
     $z_money = pdo_getcolumn("hyb_yl_zhuanjia",array("uniacid"=>$uniacid,"zid"=>$order['zid']),'total_money');
     $z_moneys = $z_money + $zhuanjia_money;
     pdo_update("hyb_yl_zhuanjia",array("total_money"=>$z_moneys),array("zid"=>$order['zid']));
    echo json_encode($res_one_order);
   }
   public function upguahaowentype(){
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $order_time = pdo_get("hyb_yl_wenzhenrule",array('uniacid'=>$uniacid));
     $chaoshi = $order_time['p_jiezhen'];
     $time_b = intval($chaoshi * 60);
     $newtime  = date("Y-m-d H:i:s");
     $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b); 
     $orders = $_GPC['orders'];
     $res_one_order = pdo_update('hyb_yl_guahaoorder',array('ifpay'=>1,'paytime' => strtotime("now"),'overtime'=>strtotime($overtime)),array('uniacid'=>$uniacid,'back_orser'=>$orders));
     $order = pdo_get("hyb_yl_guahaoorder",array("back_orser"=>$orders,"uniacid"=>$uniacid));
     $rule = pdo_getcolumn("hyb_yl_zhuanjia_rule",array("uniacid"=>$uniacid),'fee');
     $zhuanjia_money = $order['money'] * $rule / 100;
     $z_money = pdo_getcolumn("hyb_yl_zhuanjia",array("uniacid"=>$uniacid,"zid"=>$order['zid']),'total_money');
     $z_moneys = $z_money + $zhuanjia_money;
     pdo_update("hyb_yl_zhuanjia",array("total_money"=>$z_moneys),array("zid"=>$order['zid']));
    echo json_encode($res_one_order);
   }

  // //图文短信通知
  // public function msgtw(){
  //   global $_GPC, $_W;
  //   $params = array();
  //   $uniacid = $_W['uniacid'];
  //   $orders = $_GPC['orders'];
  //   require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
  //   $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_twenorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
  //   $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
  //   $mobel = unserialize($aliduanxin['moban_id']);
  //   if ($aliduanxin['stadus'] == 1 ) {
  //       $accessKeyId = $aliduanxin['key'];
  //       $accessKeySecret = $aliduanxin['scret'];
  //       $params["PhoneNumbers"] = $aliduanxin['tel'];
  //       $params["SignName"] = $aliduanxin['qianming'];
  //       $params["TemplateCode"] = $mobel['templateid'];
  //       $j_id = $res['j_id'];
  //       $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
  //       $name = $myinfo['names'];
  //       $phoneNum = $myinfo['tel'];
  //       $zid = $res['zid'];
  //       $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
  //       $doctor = $doname['z_name']."(图文问诊)";
  //       $ksname = $doname['name'];
  //       $params['TemplateParam'] = Array('content' => $phoneNum, 'name' => $name, 'ksname' => $ksname, 'doctor' => $doctor);
  //       if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
  //           $params["TemplateParam"] = json_encode($params["TemplateParam"]);
  //       }
  //       $helper = new SignatureHelper();
  //       $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
  //   }
  // }
  // 短信通知
  public function guhaomsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_guahaoorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {
        $time = $res['year'];
        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name'];
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $aliduanxin['tel'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['ghmobel'];
        $params['TemplateParam'] = Array( 'name' => $name, 'tel' => $phoneNum, 'zname' => $doctor,'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
        echo json_encode($params);
    }
  }
  //图文问诊提醒
  public function tuwenmsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_twenorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    //查询回复时间
    $date_info_time = pdo_get('hyb_yl_wenzhenrule',array('uniacid'=>$uniacid),array('p_jiezhen'));
    $time = $date_info_time['p_jiezhen'];
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {
        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['wzmobel'];
        $params['TemplateParam'] = Array('name' => $name, 'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
        echo json_encode($content);
    }
  }
 //电话问诊提醒
  public function telmsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_wenzorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    //查询回复时间
    $date_info_time = pdo_get('hyb_yl_wenzhenrule',array('uniacid'=>$uniacid),array('p_jiezhen'));
    $time = $date_info_time['p_jiezhen'];
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {

        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name']."(".$text.")";
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['telmobel'];
        $params['TemplateParam'] = Array('name' => $name, 'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
        echo json_encode($params);
    }
  }
 //视频问诊提醒
  public function vidomsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_wenzorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    //查询回复时间
    $date_info_time = pdo_get('hyb_yl_wenzhenrule',array('uniacid'=>$uniacid),array('p_jiezhen'));
    $time = $date_info_time['p_jiezhen'];
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {

        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name']."(".$text.")";
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['spmobel'];
        $params['TemplateParam'] = Array('name' => $name, 'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
        echo json_encode($params);
    }
  }
 //开方问诊提醒
  public function kfangmsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_wenzorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    //查询回复时间
    $date_info_time = pdo_get('hyb_yl_wenzhenrule',array('uniacid'=>$uniacid),array('p_jiezhen'));
    $time = $date_info_time['p_jiezhen'];
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {

        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name']."(".$text.")";
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['kfmobel']; 
        $params['TemplateParam'] = Array('name' => $name, 'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
    }
  }
//体检解读
  public function tijianmsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_wenzorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {

        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name']."(".$text.")";
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['bgmobel'];
        $params['TemplateParam'] = Array('content' => $phoneNum, 'name' => $name, 'ksname' => $ksname, 'doctor' => $doctor);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
    }
  }
//挂号模板提醒
  public function mobelghmsgdh(){
         global $_GPC, $_W;
         $uniacid = $_W['uniacid'];
         $orders = $_GPC['orders'];
         $g_order = pdo_get('hyb_yl_guahaoorder',array('orders'=>$orders));
         $j_id = $g_order['j_id'];
         $zid = $g_order['zid'];
         $docinfo = pdo_get("hyb_yl_zhuanjia",array('uniacid'=>$uniacid,'zid'=>$zid));
         $openid = $docinfo['openid'];
         $z_name = $docinfo['z_name'];
         //查询机构
         $hid = $docinfo['hid'];
         $hos_jigou = pdo_get('hyb_yl_hospital',array('hid'=>$hid),array('agentname'));
         //查询科室
         $parentid = $hos_jigou['parentid'];
         $k_shi_one = pdo_get('hyb_yl_ceshi',array('id'=>$parentid));
         $userinfo = pdo_get("hyb_yl_userjiaren",array('uniacid'=>$uniacid,'j_id'=>$j_id));
         $username = $userinfo['names'];
         $sex = $userinfo['sex'];
         $wxappaid = pdo_get('hyb_yl_parameter', array('uniacid' => $uniacid));
         $wxapptemp = pdo_get('hyb_yl_wxapptemp', array('uniacid' => $uniacid));
         $appid = $wxappaid['appid'];
         $appsecret = $wxappaid['appsecret'];
         $template_id = $wxapptemp['overtime']; 
         $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
         $getArr = array();
         $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
         $access_token = $tokenArr->access_token;
         $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' . $access_token;
         $data_time = date("Y-m-d H:i:s");
         $dd['data']  = [
            'phrase2'   =>['value' =>$username],
            'phrase3'   =>['value' =>$sex],
            'thing4'    =>['value' =>$hos_jigou['agentname']],
            'thing5'    =>['value' =>$k_shi_one['name']],
            'thing6'    =>['value' =>$z_name],
          ];   
         $dd['touser'] = $openid;
         $dd['template_id'] = $template_id;
         $dd['page'] = 'hyb_yl/backstageFollowUp/pages/explanation/explanation?zid='.$zid; 
         $result1 = $this->https_curl_json($url, $dd, 'json');
         echo json_encode($result1);
     }
//手术快约
  public function shouangmsgdh(){
    global $_GPC, $_W;
    $params = array();
    $uniacid = $_W['uniacid'];
    $orders = $_GPC['orders'];
    $text = $_GPC['text'];
    require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
    $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_wenzorder') . "where uniacid ='{$uniacid}' and orders='{$orders}' ");
    //查询回复时间
    $date_info_time = pdo_get('hyb_yl_wenzhenrule',array('uniacid'=>$uniacid),array('p_jiezhen'));
    $time = $date_info_time['p_jiezhen'];
    $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
    $mobel = unserialize($aliduanxin['moban_id']);
    if ($aliduanxin['stadus'] == 1 ) {

        $j_id = $res['j_id'];
        $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
        $name = $myinfo['names'];
        $phoneNum = $myinfo['tel'];
        $zid = $res['zid'];
        $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
        $doctor = $doname['z_name']."(".$text.")";
        $ksname = $doname['name'];
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $doname['z_telephone'];
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['wzmobel']; 
        $params['TemplateParam'] = Array('name' => $name, 'time' => $time);
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
    }
  }  
  public function paycforder() {
      global $_GPC, $_W;
      require_once dirname(dirname(dirname(__FILE__)))."/wxpay.php";
      cache_write('uniacid',$_W['uniacid']);
      $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
      $appid = $res['appid'];
      $openid = $_GPC['openid'];
      $mch_id = $res['mch_id'];
      $key = $res['pub_api'];
      $out_trade_no = $this->getordernum();
      $total_fee = $_GPC['z_tw_money'];
      $key_words = $_GPC['key_words'];
      
      $noturl = 'http://'.$_SERVER['SERVER_NAME'].'/addons/hyb_yl/cfnoturl.php';
      if (empty($total_fee)) {
          $body = '订单付款';
          $total_fee = floatval(99 * 100);
      } else {
          $body = '订单付款';
          $total_fee = floatval($total_fee * 100);
      }
      // var_dump($total_fee);
      $weixinpay = new WeixinPay($appid, $openid, $mch_id, $key, $out_trade_no, $body, $total_fee,$noturl);
      $return = $weixinpay->pay();
      echo json_encode($return);
  }
//电话第一次预约
 public function telladd1()
  {
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $arr = $this->getarr($_GPC['describe']);
     $month_time = explode("-", $_GPC['month_time']);
     $startime = $month_time[0];
     $endtime = $month_time[1];
     $orders =$this->getordernum();
     $zid = $_GPC['zid'];
     $openid = $_GPC['openid'];
     //查询未支付订单时间
     $order_time = pdo_get("hyb_yl_wenzhenrule",array('uniacid'=>$uniacid));
     $chaoshi = $order_time['chaoshi'];

     $time_b = intval($chaoshi * 60);
     $newtime  = date("Y-m-d H:i:s");
     $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b);
     if($_GPC['money'] =='0.00'){
        $ifpay = '1';
     }else{
        $ifpay = '0';
     }
     $data =array(
       'uniacid' => $uniacid,
       'openid'  => $_GPC['openid'],
       'keywords'=> $_GPC['keywords'],
       'zid'     => $_GPC['zid'],
       'orders'  => $orders,
       'time'    => strtotime('now'),
       'month_time'=> $_GPC['month_time'],
       'year'      => $_GPC['year'],
       'startime'  => $startime,
       'endtime'   => $endtime,
       'tell'      => $_GPC['tell'],
       'describe'  => serialize($arr),
       'week'      => $_GPC['week'],
       'money'     => $_GPC['money'],
       'back_orser'=> $orders,
       'type'      => 1,
       'min'       => $_GPC['min'],
       'j_id'      => $_GPC['j_id'],
       'userId2'   => $_GPC['userId2'],
       'userSig2'  => $_GPC['userSig2'],
       'roomID'    => $_GPC['roomID'],
       'sdkAppID'  => $_GPC['sdkAppID'],
       'userID'    => $_GPC['userId2'],
       'userSig'   => $_GPC['userSig2'],
       'template'  => '1v1',
       'addnum'    => $_GPC['addnum'],
       'overtime'  => strtotime($overtime),
       'privateNum'=> $_GPC['privateNum'],
       'old_money' => $_GPC['old_money'],
        'coupon_id' => $_GPC['coupon_id'],
        "coupon_dk" => $_GPC['coupon_dk'],
        "yid" => $_GPC['yid'],
        "year_dk" => $_GPC['year_dk'],
        'ifpay'   => $ifpay
      );
     if($_GPC['money'] == '0.00' || $_GPC['money'] == '')
     {
      $data['ifpay'] = '1';
      $data['paytime'] = time();
     }else{
      $data['ifpay'] = '0';
     }

     $res = pdo_insert('hyb_yl_wenzorder',$data);
     $id  = pdo_insertid();
   
     if($_GPC['tjorder'] !=='undefined'){
         $tjorder = $_GPC['tjorder'];
         //查询是否已经被其他医生解读
         $if_over_du = pdo_fetch("SELECT * FROM ".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id='{$tjorder}'");
         if($if_over_du['ifjd']=='1'){
           //如果存在就新增一条记录为二级解读订单
          $data_du = array(
             'uniacid'  => $_W['uniacid'],
             'j_id'     => $_GPC['j_id'],
             'money'    => $if_over_du['money'],
             'content'  => $if_over_du['content'],
             'bm_id'    => $if_over_du['bm_id'],
             'time'     => $if_over_du['time'],
             'ordernums'=> $if_over_du['ordernums'],
             'openid'   => $if_over_du['openid'],
             'addproject'  => $if_over_du['addproject'],
             'pdf'         => $if_over_du['pdf'],
             'paytime'     => $if_over_du['paytime'],
             'overtime'    => $if_over_du['overtime'],
             'wzid'        => $id,
             'zid'         => $_GPC['zid'],
             'role'        => 1,
             'tid'         => $if_over_du['tid'],
             'yy_time'     => $if_over_du['yy_time'],
            );
           pdo_insert('hyb_yl_tijianorder',$data_du);
         }else{
           pdo_update('hyb_yl_tijianorder',array('wzid'=>$id,'zid'=>$_GPC['zid']),array('id'=>$tjorder,'uniacid'=>$uniacid));
         }

     }
     $info = pdo_get("hyb_yl_wenzorder",array('id'=>$id));
     echo json_encode($info);
  }


  //查询电话预约记录
  public function dianhualistall(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $openid  = $_GPC['openid'];
    $zid = $_GPC['zid'];
    $back_orser = $_GPC['back_orser'];
    $key_words =$_GPC['key_words'];
    $row = pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_wenzorder')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.openid ='{$openid}' and a.back_orser='{$back_orser}' and a.keywords='{$key_words}' ");

    foreach ($row as $key => $value) {
      $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
      $row[$key]['content'] = unserialize($row[$key]['describe']);
      $row[$key]['time'] = date("H:i",$row[$key]['time']);
        if($value['role'] =='0'){
          $row[$key]['len'] = $i++;
        }
    }
       echo json_encode($row);
   }
   //挂号
  public function guahaolistall(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $openid  = $_GPC['openid'];
    $zid = $_GPC['zid'];
    $back_orser = $_GPC['back_orser'];
    $key_words =$_GPC['key_words'];
    $row = pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_guahaoorder')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.openid ='{$openid}' and a.back_orser='{$back_orser}' ");

    foreach ($row as $key => $value) {
      $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
      $row[$key]['content'] = unserialize($row[$key]['describe']);
      $row[$key]['time'] = date("H:i",$row[$key]['time']);
        if($value['role'] =='0'){
          $row[$key]['len'] = $i++;
        }
    }
       echo json_encode($row);
   }
    public function oderstate(){
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $ifpay = $_GPC['ifpay'];
        $openid = $_GPC['openid'];
        $keywords = $_GPC['key_words'];
        $timestamp = strtotime('now');
        if($ifpay =='0'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and a.ifpay=0 and a.openid='{$openid}' and a.type=1 and a.role=0 and a.ifgb=0";
        }

        if($ifpay =='1'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and a.ifpay=1 and a.openid='{$openid}' and a.type=1 and a.role=0 and a.ifgb=0";
        }
        if($ifpay =='2'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and a.ifpay=2 and a.openid='{$openid}' and a.type=1 and a.role=0";
        }
        if($ifpay =='3'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and (a.ifpay=3 or a.ifpay=4 or a.ifpay=7) and a.openid='{$openid}' and a.type=1 and a.role=0";
        }
        if($ifpay =='4'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and (a.ifpay=5 or a.ifpay=6 or a.ifpay=7) and a.openid='{$openid}' and a.type=1 and a.role=0";
        }
        if($ifpay =='5'){
        $where="where a.uniacid='{$uniacid}' and a.keywords='{$keywords}' and (a.ifpay=0 or a.ifpay=1 or a.ifpay=2 or a.ifpay=8) and a.openid='{$openid}' and a.type=1 and a.role=0 and a.ifgb=1";
        }

        $res = pdo_fetchall("select a.*,b.z_name,b.z_zhicheng,b.advertisement,b.parentid  from".tablename('hyb_yl_wenzorder')."as a left join".tablename("hyb_yl_zhuanjia")."as b on b.zid=a.zid {$where} ");
        $wxappaid = pdo_get('hyb_yl_parameter', array('uniacid' => $uniacid));
       $wxapptemp = pdo_get('hyb_yl_wxapptemp', array('uniacid' => $uniacid));
       $appid = $wxappaid['appid'];
       $appsecret = $wxappaid['appsecret'];
       $template_id = $wxapptemp['fwSuccess']; 
        foreach ($res as $key => $value) {
         //查询科室
         $parentid = $value['parentid'];
         $res[$key]['keshi'] = pdo_fetch("SELECT ctname FROM".tablename('hyb_yl_classgory')."where uniacid='{$uniacid}' and id='{$parentid}'");
         $res[$key]['content'] = unserialize($res[$key]['describe']);
         $res[$key]['time'] = date("Y-m-d H:i:s",$res[$key]['time']);
         $res[$key]['overtime'] = date("Y-m-d H:i:s",$res[$key]['overtime']);
         $res[$key]['advertisement'] = tomedia($res[$key]['advertisement']);
          //查询当前时间戳是否大于数据库时间
         if($timestamp>=$value['overtime']){
             //更新数据库ifgb=1 订单关闭
            if($value['ifpay']=='2'){
               pdo_update("hyb_yl_wenzorder",array('ifgb'=>'1','ifpay'=>'3'),array('back_orser'=>$value['orders']));
               }else{
               pdo_update("hyb_yl_wenzorder",array('ifgb'=>'1'),array('back_orser'=>$value['orders']));
              }
              $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
             $getArr = array();
             $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
             $access_token = $tokenArr->access_token;
             $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' . $access_token;
             $data_time = date("Y-m-d H:i:s");
             $dd['data']  = [
                'character_string1'   =>['value' =>$value['back_orser']],
                'name2'   =>['value' =>$row[$key]['z_name']],
                'thing3'    =>['value' =>'图文问诊'.",（剩余".$row[$key]['addnum']]."次）",
                'date4'    =>['value' =>date("Y-m-d H:i:s",time())],
              ];   
             $dd['touser'] = $row[$key]['openid'];
             $dd['template_id'] = $template_id;
             $dd['page'] = 'hyb_yl/mysubpages/pages/wodezixun/wodezixun?type=wenzhen&key_words=tuwenwenzhen'; 
             $result1 = $this->https_curl_json($url, $dd, 'json');
           }
        }
        $row = pdo_fetchall("select a.*,b.z_name,b.z_zhicheng,b.advertisement,b.parentid  from".tablename('hyb_yl_wenzorder')."as a left join".tablename("hyb_yl_zhuanjia")."as b on b.zid=a.zid {$where} order by a.id desc");
        foreach ($row as $key => $value) {
         //查询科室
         $parentid = $value['parentid'];
         $row[$key]['keshi'] = pdo_fetch("SELECT ctname FROM".tablename('hyb_yl_classgory')."where uniacid='{$uniacid}' and id='{$parentid}'");
         $row[$key]['content'] = unserialize($row[$key]['describe']);
         $row[$key]['time'] = date("Y-m-d H:i:s",$row[$key]['time']);
         $row[$key]['overtime'] = date("Y-m-d H:i:s",$row[$key]['overtime']);
         $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
          //查询当前时间戳是否大于数据库时间
        
         if($timestamp>=$value['overtime']){
             //更新数据库ifgb=1 订单关闭
             pdo_update("hyb_yl_wenzorder",array('ifgb'=>'1'),array('back_orser'=>$value['orders']));
          }
        }
        echo json_encode($row);
    }

    public function odercf(){
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $ispay = $_GPC['ispay'];
        $openid = $_GPC['openid'];
        $timestamp = strtotime('now');

        if($ispay =='0'){
         $where = "where a.uniacid='{$uniacid}' and  a.ispay='0' and a.useropenid='{$openid}' and a.role=0 and a.ifgb!=1 and a.grade=1";
        }
        if($ispay =='1'){
         $where = "where a.uniacid='{$uniacid}' and  a.ispay='1' and a.useropenid='{$openid}' and a.role=0 and a.ifgb!=1 and a.grade=1";
        }
        if($ispay =='2'){
         $where = "where a.uniacid='{$uniacid}' and  a.ispay='2' and a.useropenid='{$openid}' and a.role=0 and a.grade=1 and a.ifgb!=1";
        }
        if($ispay =='3'){
         $where = "where a.uniacid='{$uniacid}' and  a.ispay='3' and a.useropenid='{$openid}' and a.role=0 and a.grade=1";
        }
        if($ispay =='4'){
         $where = "where a.uniacid='{$uniacid}' and  (a.ispay='5' or  a.ispay='6') and a.useropenid='{$openid}' and a.role=0 and a.grade=1";
        }
        if($ispay =='5'){
         $where = "where a.uniacid='{$uniacid}' and  (a.ispay='0' or  a.ispay='1' or  a.ispay='2' or  a.ispay='7' or  a.ispay='8') and a.useropenid='{$openid}' and a.role=0 and a.ifgb=1 and a.grade=1";
        }
        $res = pdo_fetchall("select a.*,b.z_name,b.z_zhicheng,b.advertisement,b.parentid  from".tablename('hyb_yl_chufang')."as a left join".tablename("hyb_yl_zhuanjia")."as b on b.zid=a.zid {$where} order by a.c_id desc");

        foreach ($res as $key => $value) {
         $parentid = $value['parentid'];
         $res[$key]['keshi'] = pdo_fetch("SELECT ctname FROM".tablename('hyb_yl_classgory')."where uniacid='{$uniacid}' and id='{$parentid}'");
         $res[$key]['content'] = unserialize($res[$key]['content']);
         $res[$key]['time'] = date("Y-m-d H:i:s",$res[$key]['time']);
         $res[$key]['overtime'] = date("Y-m-d H:i:s",$res[$key]['overtime']);
         $res[$key]['advertisement'] = tomedia($res[$key]['advertisement']);
          //查询当前时间戳是否大于数据库时间
         $overtime =intval($value['overtime']);
         if($timestamp>=$overtime){
             //更新数据库ifgb=1 订单关闭 
            if($value['ispay'] =='2'){
              pdo_update("hyb_yl_chufang",array('ifgb'=>'1','ispay'=>'3'),array('back_orser'=>$value['back_orser']));
            }else{
              pdo_update("hyb_yl_chufang",array('ifgb'=>'1'),array('back_orser'=>$value['back_orser']));
            }
          }
        }
      $row = pdo_fetchall("select a.*,b.z_name,b.z_zhicheng,b.advertisement,b.parentid  from".tablename('hyb_yl_chufang')."as a left join".tablename("hyb_yl_zhuanjia")."as b on b.zid=a.zid {$where} order by a.c_id desc");


        foreach ($row as $key => $value) {
         $parentid = $value['parentid'];
         $row[$key]['keshi'] = pdo_fetch("SELECT ctname FROM".tablename('hyb_yl_classgory')."where uniacid='{$uniacid}' and id='{$parentid}'");
         $row[$key]['content'] = unserialize($row[$key]['content']);
         $row[$key]['time'] = date("Y-m-d H:i:s",$row[$key]['time']);
         $row[$key]['overtime'] = date("Y-m-d H:i:s",$row[$key]['overtime']);
         $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
        }
        echo json_encode($row);
    }
 public function adduserzhuiwen(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $zid = $_GPC['zid'];
    $arr = $_GPC['arr'];
    $orders = $_GPC['orders'];
    $keywords =$_GPC['keywords'];
    $res =pdo_fetch("SELECT * FROM".tablename('hyb_yl_wenzorder')."where uniacid='{$uniacid}' and orders='{$orders}'");
    $oo_user_der =$this->getordernum();
    $idarr = htmlspecialchars_decode($arr);
    $array = json_decode($idarr);
    $object = json_decode(json_encode($array), true);
    $data =array(
         'uniacid' =>$uniacid,
         'zid'     =>$zid,
         'openid'  =>$res['openid'],
         'orders'  =>$oo_user_der,
         'time'    =>strtotime("now"),
         'describe' =>serialize($object),
         'type'    =>2,
         'j_id'   =>$res['j_id'],
         'money'  =>$res['money'],
         'ifpay'  =>$res['ifpay'],
         'back_orser'  =>$res['back_orser'],
         'pid'   =>0,
         'role'  =>0,
         'keywords'=>$keywords,
         'addnum'  => $_GPC['addnum']
      );
    $deeems = pdo_insert("hyb_yl_wenzorder",$data);
    $addnum = $_GPC['addnum'];
    pdo_update("hyb_yl_wenzorder",array('addnum'=>$addnum-1),array('orders'=>$orders));
    echo json_encode($res);
 }

 public function addguahaozhuiwen(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $zid = $_GPC['zid'];
    $arr = $_GPC['arr'];
    $orders = $_GPC['orders'];
    $keywords =$_GPC['keywords'];
    $res =pdo_fetch("SELECT * FROM".tablename('hyb_yl_guahaoorder')."where uniacid='{$uniacid}' and orders='{$orders}'");
    $oo_user_der =$this->getordernum();
    $idarr = htmlspecialchars_decode($arr);
    $array = json_decode($idarr);
    $object = json_decode(json_encode($array), true);
    $data =array(
         'uniacid' =>$uniacid,
         'zid'     =>$zid,
         'openid'  =>$res['openid'],
         'orders'  =>$oo_user_der,
         'time'    =>strtotime("now"),
         'describe' =>serialize($object),
         'type'    =>2,
         'j_id'   =>$res['j_id'],
         'money'  =>$res['money'],
         'ifpay'  =>$res['ifpay'],
         'back_orser'  =>$res['back_orser'],
         'role'  =>0,
         'addnum'  => $_GPC['addnum']
      );
    $deeems = pdo_insert("hyb_yl_guahaoorder",$data);
    $addnum = $_GPC['addnum'];
    pdo_update("hyb_yl_guahaoorder",array('addnum'=>$addnum-1),array('orders'=>$orders));
    echo json_encode($res);
 }
  public function getarr($data){
      $value =htmlspecialchars_decode($data);
      $array =json_decode($value);
      $object =json_decode(json_encode($array),true);
      return $object;
    
  }
    public function telcotime()
    {
     global $_W,$_GPC;
     require_once dirname(dirname(dirname(__FILE__))). '/PlsDemo.php';
     $uniacid =$_W['uniacid']; 
     $zid = $_GPC['zid'];
     $doc_info =pdo_get('hyb_yl_zhuanjia',array('zid'=>$zid,'uniacid'=>$uniacid));
     if(empty($doc_info['privateNum'])){
       $doc_ph  = $doc_info['z_telephone'];
       $res =pdo_get('hyb_yl_parameter',array('uniacid'=>$uniacid));
       $app_key = $res['huaw_appid'];
       $app_secrt = $res['huaw_key'];
       $areaCode = $res['areaCode'];
       $helper = new PlsDemo($app_key,$app_secrt,$areaCode);
       $unbind =$helper->getBangdin($doc_ph);
     }else {
         echo "1";
       }
    }
    public function upcharmsg()
    {
     global $_W,$_GPC;
     $uniacid =$_W['uniacid']; 
     $zid=$_GPC['zid'];

     $privateNum =$_GPC['privateNum'];
     $data =array(
         'privateNum'=>$privateNum
        );
     $res = pdo_update('hyb_yl_zhuanjia',$data,array('zid'=>$zid,'uniacid'=>$uniacid));
     echo json_encode($res);

    }

    public function setaxndel()
    {
       global $_W,$_GPC;
       require_once dirname(dirname(dirname(__FILE__))). '/PlsDemo.php';
       $uniacid =$_W['uniacid']; 
       $back_orser=$_GPC['back_orser'];
       $j_dan =pdo_get('hyb_yl_wenzorder',array('orders'=>$back_orser,'uniacid'=>$uniacid));
       $user_phone = $j_dan['tell'];
       $doc_phone  = $_GPC['doc_phone'];
       $privateNum =$_GPC['privateNum'];
       $res =pdo_get('hyb_yl_parameter',array('uniacid'=>$uniacid));
       $app_key = $res['huaw_appid'];
       $app_secrt = $res['huaw_key'];
       $areaCode =  $res['areaCode'];
       $helper = new PlsDemo($app_key,$app_secrt,$areaCode);
       $unbind =$helper->getAcsClient($user_phone,$doc_phone,$privateNum);
    }
    //解绑
    public function uphuawtel()
    {
     global $_W,$_GPC;
     require_once dirname(dirname(dirname(__FILE__))). '/PlsDemo.php';
     $uniacid =$_W['uniacid']; 
     $back_orser=$_GPC['back_orser'];
     $j_dan =pdo_get('hyb_yl_wenzorder',array('back_orser'=>$back_orser,'uniacid'=>$uniacid));
     $user_phone = $j_dan['tell'];
     $doc_phone  = $_GPC['doc_phone'];
     $privateNum =$_GPC['privateNum'];
     $res =pdo_get('hyb_yl_parameter',array('uniacid'=>$uniacid));
     $app_key = $res['huaw_appid'];
     $app_secrt = $res['huaw_key'];
     $areaCode = $res['areaCode'];
     $zid = $_GPC['zid'];
     pdo_update("hyb_yl_zhuanjia",array('privateNum'=>' '),array('zid'=>$zid));
     $helper = new PlsDemo($app_key,$app_secrt,$areaCode);
     $unbind =$helper->getHuaweidel($user_phone,$privateNum);

    }
  //一个订单
   public function oneorder(){
      global $_GPC, $_W;
      $uniacid = $_W['uniacid'];
      $id  = $_GPC['id'];
      $res =pdo_fetch("SELECT * FROM".tablename('hyb_yl_wenzorder')."where uniacid='{$uniacid}' and id='{$id}'");
      $res['content'] = unserialize($res['describe']);
      $res['time'] = date("Y-m-d H:i:s",$res['time']);
      $res['advertisement'] = tomedia($res['advertisement']);
      echo json_encode($res);
   }
   public function oneorderguahao(){
      global $_GPC, $_W;
      $uniacid = $_W['uniacid'];
      $id  = $_GPC['id'];
      $res =pdo_fetch("SELECT * FROM".tablename('hyb_yl_guahaoorder')."where uniacid='{$uniacid}' and id='{$id}'");
      $res['content'] = unserialize($res['describe']);
      $res['time'] = date("Y-m-d H:i:s",$res['time']);
      $res['advertisement'] = tomedia($res['advertisement']);
      echo json_encode($res);
   } 
    public function alldochuida(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $id  = $_GPC['id'];
    $zid = $_GPC['zid'];
    $openid = $_GPC['openid'];
    $back_orser = $_GPC['back_orser'];
    $res =pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_wenzorder')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.back_orser='{$back_orser}' order by a.id asc");
    foreach ($res as $key => $value) {
     $res[$key]['content'] = unserialize($res[$key]['describe']);
     $res[$key]['time'] = date("Y-m-d H:i:s",$res[$key]['time']);
     $res[$key]['advertisement'] = tomedia($res[$key]['advertisement']);
    }
    echo json_encode($res);
 }
//挂号
   public function allguahaohuida(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $id  = $_GPC['id'];
    $zid = $_GPC['zid'];
    $openid = $_GPC['openid'];
    $back_orser = $_GPC['back_orser'];
    $res =pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_guahaoorder')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.back_orser='{$back_orser}' order by a.id asc");
    foreach ($res as $key => $value) {
     $res[$key]['content'] = unserialize($res[$key]['describe']);
     $res[$key]['time'] = date("Y-m-d H:i:s",$res[$key]['time']);
     $res[$key]['advertisement'] = tomedia($res[$key]['advertisement']);
    }
    echo json_encode($res);
 }
   public function cflistall(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $openid  = $_GPC['openid'];
    $zid = $_GPC['zid'];
    $back_orser = $_GPC['back_orser'];
    $key_words =$_GPC['key_words'];
    
    $row = pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_chufang')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.useropenid ='{$openid}' and a.back_orser='{$back_orser}'  and  a.pid=0 and a.useropenid='{$openid}' ");

    foreach ($row as $key => $value) {
      $pid = $value['id'];
      $row[$key]['erji'] = pdo_fetchall("SELECT a.*,b.z_name,b.z_zhicheng,b.advertisement FROM".tablename('hyb_yl_chufang')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.useropenid ='{$openid}'  and  a.pid='{$pid}' and a.key_words='{$key_words}' and a.useropenid='{$openid}'");
      foreach ($row[$key]['erji']as $k => $v) {
          $row[$key]['erji'][$k]['advertisement'] = tomedia($row[$key]['erji'][$k]['advertisement']);
          $row[$key]['erji'][$k]['content'] = unserialize($row[$key]['erji'][$k]['describe']);
      }
      $row[$key]['content'] = unserialize($row[$key]['content']);
      $row[$key]['time'] = date("m月d日 H:i",$row[$key]['time']);
      $row[$key]['ifpay'] = $row[$key]['ispay'];
      $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
      if($value['role'] =='0'){
          $row[$key]['len'] = $i++;
        }
    
    }
       echo json_encode($row);
   }

   public function cflistalldoc(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $openid  = $_GPC['openid'];
    $zid = $_GPC['zid'];
    $back_orser = $_GPC['back_orser'];
    $key_words =$_GPC['key_words'];
    $row = pdo_fetchall("SELECT a.*,b.z_name,b.z_name,b.z_zhicheng,b.advertisement  FROM".tablename('hyb_yl_chufang')."as a left join".tablename('hyb_yl_zhuanjia')."as b on b.zid=a.zid where a.uniacid ='{$uniacid}' and a.zid='{$zid}' and a.useropenid ='{$openid}' and a.back_orser='{$back_orser}' and a.key_words='{$key_words}' and  a.pid=0");
    foreach ($row as $key => $value) {
        $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
        $row[$key]['content'] = unserialize($row[$key]['content']);
        $row[$key]['time'] = date("H:i",$row[$key]['time']);
     }
       echo json_encode($row);
   }
   public function detail(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $openid  = $_GPC['openid'];
    $orders = $_GPC['orders'];
    $res =pdo_fetch("SELECT * FROM".tablename('hyb_yl_wenzorder')."where uniacid='{$uniacid}' and orders='{$orders}'");
    $res['overtime'] = date("Y-m-d H:i:s",$res['overtime']);
    echo json_encode($res);
   }
    public function getordercfdetail() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $orders = $_GPC['orders'];
        $openid = $_GPC['openid'];
        $res = pdo_fetch("select * from".tablename('hyb_yl_chufang')."where uniacid='{$uniacid}' and orders='{$orders}' and useropenid='{$openid}'");

        $res['overtime'] = date("Y-m-d H:i:s",$res['overtime']);
        echo json_encode($res);
    }
    public function getordercfdetaildoc() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $orders = $_GPC['orders'];
        $openid = $_GPC['openid'];
        $res = pdo_get("hyb_yl_chufang", array('orders' => $orders,'useropenid'=>$openid));
        //$res['overtime'] = date("Y-m-d H:i:s",$res['overtime']);
        echo json_encode($res);
    }
    public function getwenzhendetail() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $orders = $_GPC['orders'];
        $openid = $_GPC['openid'];
        $res = pdo_get("hyb_yl_wenzorder", array('orders' => $orders,'openid'=>$openid));
        $res['overtime'] = date("Y-m-d H:i:s",$res['overtime']);
        echo json_encode($res);
    }
    public function getguahaohendetail() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $orders = $_GPC['orders'];
        $openid = $_GPC['openid'];
        $res = pdo_get("hyb_yl_guahaoorder", array('orders' => $orders,'openid'=>$openid));
        $res['overtime'] = date("Y-m-d H:i:s",$res['overtime']);
        echo json_encode($res);
    }
   public function upcforderadd(){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $orders  = $_GPC['orders'];
    $addressmes =$this->jsondata($_GPC['addressmes']);
    $row = pdo_update("hyb_yl_chufang_log",array('address'=>$addressmes),array('orders'=>$orders));
    echo json_encode($row);
   }
         public function jsondata($data)
   {
        $value =htmlspecialchars_decode($data);
        $array =json_decode($value);
        $object =json_decode(json_encode($array),true);
        return $object;
    }
     public function getordernum(){
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
        $mch_id = $res['mch_id'];
        $out_trade_no = $mch_id . time();
        return $out_trade_no;
     }

    // 修改挂号订单状态
     public function updateghorder()
     {
        global $_W,$_GPC;
        $uniacid = $_W['uniacid'];
        $orders = $_GPC['orders'];
        $res = pdo_update('hyb_yl_guahaoorder',array('ifpay'=>1,'paytime' => strtotime("now")),array('uniacid'=>$uniacid,'orders'=>$orders));
        
        $log = pdo_getcolum("hyb_yl_guahaoorder",array("uniacid"=>$uniacid,'orders'=>$orders));
        pdo_update("hyb_yl_user_coupon",array("status"=>'1'),array("id"=>$log['coupon_id']));
        pdo_update("hyb_yl_user_yearcard",array("status"=>'1'),array("id"=>$log['yid']));
     }

    public function https_curl_json($url, $data, $type) {
            if ($type == 'json') {
                $headers = array("Content-type: application/json;charset=UTF-8", "Accept: application/json", "Cache-Control: no-cache", "Pragma: no-cache");
                $data = json_encode($data);
            }
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
            if (!empty($data)) {
                curl_setopt($curl, CURLOPT_POST, 1);
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            }
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
            $output = curl_exec($curl);
            if (curl_errno($curl)) {
                echo 'Errno' . curl_error($curl); //捕抓异常
                
            }
            curl_close($curl);
            return $output;
        }
     public function send_post($url, $post_data,$method='POST') {
        $postdata = http_build_query($post_data);
        $options = array(
          'http' => array(
            'method' => $method, //or GET
            'header' => 'Content-type:application/x-www-form-urlencoded',
            'content' => $postdata,
            'timeout' => 15 * 60 // 超时时间（单位:s）
          )
        );
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
      }
}


