<?php

global $_W,$_GPC;
$op = $_GPC['op'];
$uniacid =$_W['uniacid'];
$type_id = $_GPC['type_id'];
$_W['plugin'] = 'jigou';
defined('IN_IA') or exit('Access Denied');
define('IN_GW', true);

load()->model('user');
load()->model('message');
load()->classs('oauth2/oauth2client');
load()->model('setting');
 if(!empty($_GPC['h_id']))
{
  $lifeTime = 24 * 3600; 
  session_set_cookie_params($lifeTime); 
  session_start();
  $_SESSION["is_hospital"] = '1'; 
  $_SESSION['hid'] = $_GPC['h_id'];
  define("is_agent",'1');
  define("hid",$_GPC['h_id']);
  $hospital = pdo_get("hyb_yl_hospital",array("uniacid"=>$uniacid,"hid"=>$_GPC['h_id']));
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
if($op == 'display')
{
	//所有联盟医院
 
  $where = " where a.uniacid = '{$uniacid}'";
  $state = $_GPC['state'] == '' ? '1' : $_GPC['state'];
  $page = empty($_GPC['page']) ? "" : $_GPC['page'];
  $pageindex = max(1, intval($page));
  $pagesize = 10;
  $type = pdo_fetchall("SELECT * FROM".tablename("hyb_yl_hospital_diction")."where uniacid ='{$uniacid}'");
  if($state != '')
  {
    $where .= " and a.state=".$state;
  }

  $keywordtype = $_GPC['keywordtype'];
  $keyword = $_GPC['keyword'];
  if($keywordtype == '1')
  {
    $where .= " and a.hid=".$keyword;
  }else if($keywordtype == '2')
  {
    $where .= " and a.agentname like '%$keyword%'";
  }else if($keywordtype == '3')
  {
    $where .= " and a.realname like '%$keyword%'";
  }else if($keywordtype == '4')
  {
    $where .= " and a.hospitaltel like '%$keyword%'";
  }
  $groupid = $_GPC['groupid'];
  if($groupid != '')
  {
    $where .= " and a.groupid=".$groupid;
  }
  if(is_agent == '1')
  {
    $where .= " and a.hid=".hid;
  }

	$res = pdo_fetchall("SELECT a.*,c.level_name,d.u_name FROM".tablename('hyb_yl_hospital')."as a left join".tablename("hyb_yl_hospital_level")."as c on c.id=a.grade left join".tablename("hyb_yl_userinfo")."as d on d.openid=a.openid".$where." order by a.hid desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
    foreach ($res as $key => $value) {
      if($res[$key]['groupid'] == '1')
      {
        $res[$key]['name'] = '医院';
      }else if($res[$key]['groupid'] == '2')
      {
        $res[$key]['name'] = '药房';
      }else if($res[$key]['groupid'] == '3')
      {
        $res[$key]['name'] = '体检机构';
      }else if($res[$key]['groupid'] == '4')
      {
        $res[$key]['name'] = '诊所';
      }
    	$res[$key]['logo'] = tomedia($res[$key]['logo']);
    	$res[$key]['zctime'] = date("Y-m-d H:i:s",$res[$key]['zctime']);
    }
  $total = pdo_fetchcolumn("SELECT count(*) FROM".tablename('hyb_yl_hospital')."as a left join".tablename('hyb_yl_hospital_diction')."as b on b.id=a.groupid left join".tablename("hyb_yl_hospital_level")."as c on c.id=a.grade left join".tablename("hyb_yl_userinfo")."as d on d.openid=a.openid".$where);
  $pager = pagination($total, $pageindex, $pagesize);
  $ruzhu = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where uniacid=".$uniacid." and state=1");
  $shenhe = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where uniacid=".$uniacid." and state=0");
  $zanting = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where uniacid=".$uniacid." and state=2");
  $daoqi = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where uniacid=".$uniacid." and state=3");
  $laji = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospital")." where uniacid=".$uniacid." and state=4");
	include $this->template("jiancha/jiancha");
}

if($op == 'ajax'){
  if($_W['isajax']){
     if($_GPC['type'] =='erji'){
     	$id = $_GPC['id'];
        $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$id}' and uniacid='{$uniacid}' ");
        echo json_encode($city);
        return false;
     }
     if($_GPC['type'] =='sanji'){
     	$id = $_GPC['id'];
        $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$id}' and uniacid='{$uniacid}'");
        echo json_encode($city);
        return false;
     }
  }
}

if($op == 'edit')
{
    $diction = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital_diction')."where uniacid ='{$uniacid}'");
    $level = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital_level')."where uniacid ='{$uniacid}'");
    $uid = $_W['uid'];
    $hid = $_GPC['hid'];
    $h_id = $_GPC['h_id'];
    $res = pdo_fetch("SELECT a.*,b.u_name FROM".tablename('hyb_yl_hospital')."as a left join".tablename('hyb_yl_userinfo')."as b on b.openid =a. openid where a.hid ='{$hid}' and a.uniacid='{$uniacid}' ");

    $res['jingweidu']['lng'] = $res['longitude'];
    $res['jingweidu']['lat'] = $res['latitude'];
    $city_id = $res['province'];
    $city_id2 = $res['city'];


    $city = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$city_id}' and uniacid='{$uniacid}'");
   

    $city_html = '';
    foreach ($city AS $parent) {
     
        $parentid =$parent['parentid'];
      
        if($parentid ==$city_id2){

          $city_html.= "<option value='".$parentid."' selected='selected'>";
        }else{
          $city_html.= "<option value=".$parentid.">"; 
        }
        $city_html.= "".$parent['name']."";
        $city_html.= "</option>";
    }
   
    $district_id = $res['district'];

    $district = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = '{$city_id2}' and level='3' and uniacid='{$uniacid}'");
    $ppp_dis_id = $res['district'];
          
    $district_html = '';
    foreach ($district AS $parent) {
        $parentid2 =$parent['parentid'];
        if($parentid2 ==$ppp_dis_id){
           $district_html.= "<option value=".$parentid2." selected>";
        }else{
           $district_html.= "<option value=".$parentid2.">"; 
        }
        $district_html.= "".$parent['name']."";
        $district_html.= "</option>";
    }

    $province = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_address')."WHERE pid = 0 and uniacid='{$uniacid}'");

    if($_W['ispost']){
        load()->model('user');
        $username = trim($_GPC['username']);
        $password = trim($_GPC['password']); 
        $datas['uniacid'] = $_W['uniacid'];
        $datas['type'] = 'hyb_yl';
        $datas['permission'] = 'all';
        $user = user_single(array('username' => $_GPC['username']));
        if(!$user){
          $uidback = user_register(array('username' => $username, 'password' => $_GPC['password']));
          $datas['uid'] = $uidback;
          pdo_insert('uni_account_users', array('uid' => $uidback, 'uniacid' => $_W['uniacid'], 'role' => 'operator'));
          pdo_insert("users_permission",$datas);
        }else{
          $uid = $user['uid'];
          $salt = generate_password(7);
          $hashpass = user_hash($password,$salt);
          pdo_update('users',array('username' => $_GPC['username'], 'password' => $hashpass, 'salt' => $salt),array('uid' => $uid));
          pdo_update("users_permission",$datas,array("uid"=>$uid));
        }


        $districtslevel = $_GPC['districtslevel'];
        if($districtslevel=='1'){
            $pid = $_GPC['province'];
            $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid}' and uniacid='{$uniacid}'");

            $r['province'] = $province['parentid'];
            $r['city'] = 0;
            $r['district'] = 0;
            $r['address'] = $province['name'];
        }
        if($districtslevel=='2'){
            $pid = $_GPC['province'];
            $pid2 = $_GPC['city'];
            $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid}' and uniacid='{$uniacid}'");
            
            $city = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid2}' and uniacid='{$uniacid}'");
            
         
            $r['province'] = $province['parentid'];
            $r['city'] = $city['parentid'];
            $r['district'] = 0;
            $r['address'] = $province['name'].'-'.$city['name'];
        }
        if($districtslevel=='3'){
          $pid = $_GPC['province'];
          $pid2 = $_GPC['city'];
          $pid3 = $_GPC['district'];
          $province = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid}' and uniacid='{$uniacid}'");
          $city = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid2}' and uniacid='{$uniacid}'");
          $district = pdo_fetch("SELECT * FROM".tablename('hyb_yl_address')."WHERE parentid = '{$pid3}' and uniacid='{$uniacid}'");

          $r['province'] = $province['parentid'];
          $r['city'] = $city['parentid'];
          $r['district'] = $district['parentid'];
          $r['address'] = $province['name'].'-'.$city['name'].'-'.$district['name'];
        }
       $r['uniacid'] =$_W['uniacid'];
       $r['password'] = $hash;
       $r['agentname'] = $_GPC['agent']['agentname'];
       $r['realname'] = $_GPC['agent']['realname'];
       $r['logo'] = $_GPC['logo'];
       $r['username'] = $_GPC['username'];
       $r['backpassword'] = $_GPC['password'];
       if(empty($hid)){
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
      $r['xxaddress'] = trim($_GPC['xxaddress']);
      $r['longitude'] = $_GPC['jingweidu']['lng'];
      $r['latitude'] = $_GPC['jingweidu']['lat'];
      $r['lntroduction'] = $_GPC['lntroduction'];
      $r['is_index'] = $_GPC['is_index'];
      $r['bank_num'] = $_GPC['bank_num'];
      $r['bank_user'] = $_GPC['bank_user'];
      $r['bank_name'] = $_GPC['bank_name'];

      if(empty($hid)){
          pdo_insert("hyb_yl_hospital",$r);
          message("添加成功",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex','h_id'=>$h_id)),"success"); 
      }else{
          pdo_update("hyb_yl_hospital",$r,array('hid'=>$hid));
          message("修改成功",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex','hid'=>$h_id)),"success"); 
      }
  }
  include $this->template("jiancha/mechanism");
}
function generate_password( $length ) {
    // 密码字符集，可任意添加你需要的字符
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_ []{}<>~`+=,.;:/?|';
 
    $password = '';
    for ( $i = 0; $i < $length; $i++ ) 
    {
        // 这里提供两种字符获取方式
        // 第一种是使用 substr 截取$chars中的任意一位字符；
        // 第二种是取字符数组 $chars 的任意元素
        // $password .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        $password .= $chars[ mt_rand(0, strlen($chars) - 1) ];
    }
 
    return $password;
}
if($op == 'change_index')
{
  $hid = $_GPC['hid'];
  $is_index = $_GPC['is_index'];
  $h_id = $_GPC['h_id'];
  $res = pdo_update("hyb_yl_hospital",array("is_index"=>$is_index),array("hid"=>$hid));
  if($res)
  {
    message("修改成功",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex','h_id'=>$h_id)),"success"); 
  }else{
    message("修改失败",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex',"h_id"=>$h_id)),"success"); 
  }
  include $this->template("jiancha/mechanism");
}
if($op == 'change_status')
{
  $hid = $_GPC['hid'];
  $state = $_GPC['state'];
  $h_id = $_GPC['h_id'];
  $res = pdo_update("hyb_yl_hospital",array("state"=>$state),array("hid"=>$hid));
  if($res)
  {
    message("修改成功",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex','h_id'=>$h_id)),"success"); 
  }else{
    message("修改失败",$this->createWebUrl('jiancha',array('op'=>'display','ac'=>'jgindex','h_id'=>$h_id)),"success"); 
  }
  include $this->template("jiancha/mechanism");

}
if($op =='delete'){
    $hid = $_GPC['hid'];
    $h_id = $_GPC['h_id'];
    $res = pdo_delete("hyb_yl_hospital",array('hid'=>$_GPC['hid']));
    $data = array(
        'status'=>1,
      );
    echo json_encode($data);
    return false;
}
if($op =='deleteall'){
    $ids =explode(',',$_GPC['ids']);
  
    for ($i=0; $i <count($ids) ; $i++) { 
      
        pdo_delete("hyb_yl_hospital",array('hid'=>$ids[$i]));
    }
    $data = array(
        'status'=>1,
      );
    echo json_encode($data);
    return false;
}
//机构分组
if($op == 'register')
{    
    $res = pdo_fetchall("SELECT * FROM".tablename("hyb_yl_hospital_diction")."where uniacid ='{$uniacid}'");
	include $this->template("jiancha/register");
}
if($op == 'groupEdit')
{   
	$id = $_GPC['id'];
	$res = pdo_get('hyb_yl_hospital_diction',array('id'=>$id));
	$plug_in_back = explode(',', $res['plug_in']);
    if($_W['ispost']){
      $plugins = $_GPC['plugins'];
      $plug_in= "";
      foreach ($plugins as $key => $value) {
      	$plug_in= implode(',', $plugins);
      }
      $data =array(
             'uniacid' =>$_W['uniacid'],
             'plug_in' =>$plug_in,
             'name'    =>$_GPC['name'],
             'default' =>$_GPC['default'],
             'state'   =>$_GPC['state'],
             'grouparr'=>$_GPC['grouparr']
      	);
      if(empty($id)){
           pdo_insert('hyb_yl_hospital_diction',$data);
           message("添加成功",$this->createWebUrl('jiancha',array('op'=>'register','ac'=>'register')),"success"); 
      }else{
      	   pdo_update('hyb_yl_hospital_diction',$data,array('id'=>$id));
      	   message("更新成功",$this->createWebUrl('jiancha',array('op'=>'register','ac'=>'register')),"success"); 
      }
     
    }
	include $this->template("jiancha/groupEdit");
}
//机构级别
if($op == 'jgsetting')
{
  $where = " where uniacid='{$uniacid}'";
  $keyword = $_GPC['keyword'];
  if($keyword != '')
  {
    $where .= " and level_name like '%$keyword%'";
  }
	$row = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital_level').$where." order by  level_strot asc");

    if($_W['isajax']){
        $data =array(
        'uniacid' =>$_W['uniacid'],
        'level_name'  =>$_GPC['level_name'],
        'level_strot' =>$_GPC['level_strot'],
        'level_type'  =>$_GPC['level_type'],
    	);
      $res=pdo_insert('hyb_yl_hospital_level',$data);
      echo json_encode($res);
      return false;
    }
	include $this->template("jiancha/jgsetting");
}
// 删除机构级别
if($op == 'jgsettingdel')
{
  $id = $_GPC['id'];
  $res = pdo_delete("hyb_yl_hospital_level",array("id"=>$id));
  if($res){
       message("删除成功",$this->createWebUrl('jiancha',array('op'=>'jgsetting','ac'=>'jgsetting')),"success"); 
  }else{
       message("删除失败",$this->createWebUrl('jiancha',array('op'=>'jgsetting','ac'=>'jgsetting')),"error"); 
  }
  include $this->template("jiancha/jgsetting");
}
if($op == 'change'){
	if($_W['isajax']){
		 $change = $_GPC['change'];
		 $val = $_GPC['value'];
		 $id = $_GPC['id'];
         $res = pdo_update('hyb_yl_hospital_level',array($change=>$val),array('id'=>$id));
         if($res=='1'){
         	$data = array(
                 'status'=>1
         		);
         }else{
         	$data = array(
                 'status'=>0
         		);
         }
         echo json_encode($data);
         return false;
	}
}
if($op == 'groupDelete'){
	$id = $_GPC['id'];
	pdo_delete("hyb_yl_hospital_diction",array('id'=>$id));
	message("删除成功",$this->createWebUrl('jiancha',array('op'=>'register','ac'=>'register')),"success"); 
}
//添加机构级别
if($op == 'jgsettingadd')
{

	include $this->template("jiancha/jgsettingadd");
}
//代理管理
if($op == 'agentIndex')
{

    
  include $this->template("jiancha/agentIndex");
}
//代理添加
if($op == 'agentEdit')
{

  include $this->template("jiancha/agentEdit");
}
//代理分组
if($op == 'groupIndex')
{

  include $this->template("jiancha/groupIndex");
}
//代理分组添加
if($op == 'areagroupedit')
{

  include $this->template("jiancha/areagroupedit");
}
//地区管理
if($op == 'hotareaIndex')
{

  $page = empty($_GPC['page']) ? "" : $_GPC['page'];
  $pageindex = max(1, intval($page));
  $pagesize = 10;
  $status = $_GPC['status'];
  $is_hot = $_GPC['is_hot'];
  $keyword = $_GPC['keyword'];
  $where = " where uniacid=".$uniacid." and level=1";
  if($status != '')
  {
    $where .= " and status=".$status;
  }
  if($is_hot != '')
  {
    $where .= " and is_host=".$is_hot;
  }
  if($keyword != '')
  {
    $where .= " and name like '%$keyword%'";
  }
  $list = pdo_fetchall("select * from ".tablename("hyb_yl_address").$where." order by sort desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
  $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_address").$where);
  $pager = pagination($total, $pageindex, $pagesize);
  include $this->template("jiancha/hotareaIndex");
}

// 二级地区
if($op == 'hotareatwo')
{
      $page = empty($_GPC['page']) ? "" : $_GPC['page'];
      $pageindex = max(1, intval($page));
      $pagesize = 10;
      $parentid = $_GPC['parentid'];
      $status = $_GPC['status'];
      $is_hot = $_GPC['is_hot'];
      $keyword = $_GPC['keyword'];
      $where = " where uniacid=".$uniacid." and level=2 and pid=".$parentid;
      if($status != '')
      {
        $where .= " and status=".$status;
      }
      if($is_hot != '')
      {
        $where .= " and is_host=".$is_hot;
      }
      if($keyword != '')
      {
        $where .= " and name like '%$keyword%'";
      }
     
      $list = pdo_fetchall("select * from ".tablename("hyb_yl_address").$where." order by sort desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
      $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_address").$where);
      $pager = pagination($total, $pageindex, $pagesize);
      include $this->template("jiancha/hotareatwo");
}
// 三级地区
if($op == 'hotareathree')
{
      $page = empty($_GPC['page']) ? "" : $_GPC['page'];
      $pageindex = max(1, intval($page));
      $pagesize = 10;
      $parentid = $_GPC['parentid'];
      $status = $_GPC['status'];
      $is_hot = $_GPC['is_hot'];
      $keyword = $_GPC['keyword'];
      $where = " where uniacid=".$uniacid." and level=3 and pid=".$parentid;
      if($status != '')
      {
        $where .= " and status=".$status;
      }
      if($is_hot != '')
      {
        $where .= " and is_host=".$is_hot;
      }
      if($keyword != '')
      {
        $where .= " and name like '%$keyword%'";
      }
      $list = pdo_fetchall("select * from ".tablename("hyb_yl_address").$where." order by sort desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
      $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_address").$where);
      $pager = pagination($total, $pageindex, $pagesize);
      include $this->template("jiancha/hotareathree");
}
//地区添加
if($op == 'hotareaedit')
{

  $id = $_GPC['id'];
  $item = pdo_get("hyb_yl_address",array("id"=>$id));
  $parent = pdo_getall("hyb_yl_address",array('level'=>$item['level'] - 1,"uniacid"=>$uniacid));
  if($_W['ispost'])
  {
    $data = array(
      'uniacid' => $uniacid,
      "pid" => $_GPC['parentid'],
      "name" => $_GPC['name'],
      "is_host" => $_GPC['is_host'],
      "status" => $_GPC['status'],
      "sort" => $_GPC['sort'],
      "agent" => $_GPC['agent'],
    );
    if($id)
    {
      $res = pdo_update("hyb_yl_address",$data,array('id'=>$id));
    }else{
      $res = pdo_insert("hyb_yl_address",$data);
    }
    if($res)
    {
      message("编辑成功!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex","ac"=>"hotareaIndex")),"success");
    }else{
      message("编辑失败!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex","ac"=>"hotareaIndex")),"error");

    }
  }
  include $this->template("jiancha/hotareaedit");
}
// 地区导入
if($op == 'hotareaimport')
{
  $json_text = ST_ROOT."/inc/json/address_list.json";
  $a = file_get_contents($json_text);
  $re = json_decode($a,true);
  foreach ($re as $key => $value) {
      $id=$value['id'];
      $pid = $value['pid'];
      $name = $value['name'];
      $visible = $value['visible'];
      $displayorder = $value['displayorder'];
      $level = $value['level'];
      $is_host = $value['is_host'];
      $status = $value['status'];
      $sort = $value['sort'];
      $agent = $value['agent'];
      $data =array(
            'parentid' =>$id,
            'uniacid' => $_W['uniacid'],
            'pid' => $pid,
            'name' => $name,
            'visible' => $visible,
            'displayorder' => $displayorder,
            'level' => $level,
            'is_host' => $is_host,
            'status' => $status,
            'sort' => $sort,
            'created' => strtotime('now'),
            'agent'=>$agent
          );
    $res = pdo_insert('hyb_yl_address',$data);
  }
  if($res){
      message("操作成功!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex",'ac'=>'hotareaIndex')),"success");
  }else{
      message("未检测到更新文件,请勿重复提取!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex",'ac'=>'hotareaIndex')),"error");
  }
  include $this->template("jiancha/import");
}

if($op == 'change_area')
{
  $id = $_GPC['id'];
  $type = $_GPC['type'];
  $level = $_GPC['level'];
  
  $parentid = pdo_getcolumn("hyb_yl_address",array("id"=>$id,"uniacid"=>$uniacid),'parentid');
  
  if($type == 'hot')
  {
    $is_hot = $_GPC['hot'];
    if($level == '1')
    {
        $two = pdo_getall("hyb_yl_address",array("pid"=>$parentid,"uniacid"=>$uniacid));
        pdo_update("hyb_yl_address",array("is_host"=>$is_hot),array("pid"=>$parentid,"uniacid"=>$uniacid));
        
        foreach($two as &$t)
        {
            pdo_update("hyb_yl_address",array("is_host"=>$is_hot),array("pid"=>$t['parentid'],"uniacid"=>$uniacid));
        }
    }else if($level == '2')
    {
        pdo_update("hyb_yl_address",array("is_host"=>$is_hot),array("pid"=>$parentid,"uniacid"=>$uniacid));
    }
    $res = pdo_update("hyb_yl_address",array("is_host"=>$is_hot),array("id"=>$id));
  }else{
    $status = $_GPC['status'];
    if($level == '1')
    {
        pdo_update("hyb_yl_address",array("status"=>$status),array("pid"=>$parentid,"uniacid"=>$uniacid));
        $two = pdo_getall("hyb_yl_address",array("pid"=>$parentid,"uniacid"=>$uniacid));
        foreach($two as &$t)
        {
            pdo_update("hyb_yl_address",array("status"=>$status),array("pid"=>$t['parentid'],"uniacid"=>$uniacid));
        }
    }else if($level == '2')
    {
        pdo_update("hyb_yl_address",array("status"=>$status),array("pid"=>$parentid,"uniacid"=>$uniacid));
    }
    $res = pdo_update("hyb_yl_address",array("status"=>$status),array("id"=>$id));
  }
  echo json_encode($res);
}
// 地区删除
if($op == 'hotareadel')
{
  $id = $_GPC['id'];
  $level = $_GPC['level'];
  $parentid = pdo_getcolumn("hyb_yl_address",array("id"=>$id,"uniacid"=>$uniacid),'parentid');
  if($level == '1')
    {
        $two = pdo_getall("hyb_yl_address",array("pid"=>$parentid,"uniacid"=>$uniacid));
        foreach($two as &$t)
        {
            pdo_delete("hyb_yl_address",array("pid"=>$t['parentid'],"uniacid"=>$uniacid));
        }
        pdo_delete("hyb_yl_address",array("pid"=>$parentid,"uniacid"=>$uniacid));
    }else if($level == '2')
    {
        pdo_delete("hyb_yl_address",array("pid"=>$parentid,"uniacid"=>$uniacid));
    }
  $res = pdo_delete("hyb_yl_address",array("id"=>$id));

  if($res)
  {
    message("删除成功!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex","ac"=>"hotareaIndex")),"success");
  }else{
    message("删除失败!",$this->createWebUrl("jiancha",array("op"=>"hotareaIndex","ac"=>"hotareaIndex")),"error");

  }
  include $this->template("jiancha/hotareaedit");
}
//机构时间段
if($op =='jigoutime'){
  $hid = $_GPC['hid'];
  $state = $_GPC['state'];
  $page = empty($_GPC['page']) ? "" : $_GPC['page'];
  $pageindex = max(1, intval($page));
  $pagesize = 10;
  $where = " where uniacid='{$uniacid}' and hid='{$hid}'";

  if($state != '')
  {
    $where .= " and state=".$state;
  }

    $res = pdo_fetchall("SELECT * FROM ".tablename("hyb_yl_hospitaljobtime").$where." order by id desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);

    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_hospitaljobtime").$where);

    $pager = pagination($total, $pageindex, $pagesize);
      foreach ($res as $key => $value) {
        $server_time =unserialize($res[$key]['server_time']);
        $startTime = $server_time[0]['time'];

        foreach ($startTime as $key1 => $value1) {
            $startTime[$key1]['time'] = $startTime[$key1]['startTime'].'-'.$startTime[$key1]['endTime'];
            unset($startTime[$key1]['startTime']);
            unset($startTime[$key1]['endTime']);
        }
       $result2 = [];
       array_map(function ($value) use (&$result2) {
          $result2 = array_merge($result2, array_values($value));
       }, $startTime); 
          
        $tmp = '';

        foreach ($server_time as $key2 => $value2) {
             if($value2['week']=='1'){
                 $value2['week'] ='星期一';
             }
             if($value2['week']=='2'){
                 $value2['week'] ='星期二';
             }
             if($value2['week']=='3'){
                 $value2['week'] ='星期三';
             }
             if($value2['week']=='4'){
                 $value2['week'] ='星期四';
             }
             if($value2['week']=='5'){
                 $value2['week'] ='星期五';
             } 
             if($value2['week']=='6'){
                 $value2['week'] ='星期六';
             } 
             if($value2['week']=='0'){
                 $value2['week'] ='星期日';
             } 
             $tmp .= $value2['week'].',';
        }

         $res[$key]['weeks'] = rtrim($tmp, ',');
        
       $res[$key]['times'] =implode(',', $result2);
      
      } 
   include $this->template("jiancha/scheduling");
}
//添加机构时间段
if($op == 'addjgtime')
{
  $id = $_GPC['id'];
  $hid = $_GPC['hid'];
  $item = pdo_get("hyb_yl_hospitaljobtime",array("id"=>$id,'uniacid'=>$uniacid));

  if($item)
  { 
      $item['server_time'] = unserialize($item['server_time']);
      
      foreach($item['server_time'] as &$value)
      {
        $week[] = $value['week'];
      }
      $item['times'] = $item['server_time'][0];
      $item['week'] = $week;
  }

  if($_W['ispost']){

       $startTime = $_GPC['registerdate']['startTime'];
       $endTime = $_GPC['registerdate']['endTime'];
       $week = $_GPC['halfcard']['week'];

       foreach ($week as $key => $value) {
          if($value=='0'){
            $week_index[] = '周日';
           }
           if($value=='1'){
            $week_index[] = '周一';
           }
           if($value=='2'){
            $week_index[] = '周二';
           }
           if($value=='3'){
            $week_index[] = '周三';
           }
           if($value=='4'){
            $week_index[] = '周四';
           }
           if($value=='5'){
            $week_index[] = '周五';
           }
           if($value=='6'){
            $week_index[] = '周六';
           }
       }
       
       $week_index = implode(',', $week_index);
       $nums = $_GPC['nums'];
       $type = $_GPC['type'];
       foreach ($startTime as $key => $value) {
        $new_time[$key]['startTime'] = $startTime[$key];
        $new_time[$key]['endTime'] = $endTime[$key];
       }
       foreach ($week as $key => $value) {
        $time[$key]['week'] = $week[$key];
        $time[$key]['time'] = $new_time;
        $time[$key]['nums'] = $nums;
        $time[$key]['type'] = $type;
       }
       $data =array(
           'uniacid' => $_W['uniacid'],
           'server_time' => serialize($time),
           'nums'     =>$_GPC['nums'],
           'title'    =>$_GPC['title'],
           'state'    =>$_GPC['state'],
           'hid'      =>$_GPC['hid'],
           'type'     =>$_GPC['type'],
           'week'     =>$week_index
        );
       if(!empty($id)){
            pdo_update('hyb_yl_hospitaljobtime',$data,array('id'=>$id));
       }else{
            pdo_insert('hyb_yl_hospitaljobtime',$data);
       }
      
       message("操作成功!",$this->createWebUrl("jiancha",array("op"=>"jigoutime",'ac'=>'jigoutime','hid'=>$hid)),"success");
  }
  include $this->template("jiancha/schedulingadd");
}
  // 排版删除
  if($op == 'schedulingdel')
  {
    $id = $_GPC['id'];
    $hid = $_GPC['hid'];
    $res = pdo_delete("hyb_yl_hospitaljobtime",array("id"=>$id));
    if($res)
    {
      message("删除成功!",$this->createWebUrl("jiancha",array("op"=>"jigoutime",'ac'=>'jigoutime','hid'=>$hid)),"success");
    }else{
      message("删除失败!",$this->createWebUrl("jiancha",array("op"=>"jigoutime",'ac'=>'jigoutime','hid'=>$hid)),"error");
    }
    include $this->template('team/scheduling');
  }
//地区分组添加
if($op == 'hotareagroupedit')
{

  include $this->template("jiancha/hotareagroupedit");
}
//自定义地区
if($op == 'customindex')
{

  include $this->template("jiancha/customindex");
}
//自定义地区添加
if($op == 'customedit')
{

  include $this->template("jiancha/customedit");
}

// 机构权限列表
if($op == 'role')
{
  $list = pdo_fetchall("select * from ".tablename("hyb_yl_hospital_role")." where uniacid=".$uniacid);
  if(count($list) == 0)
  {
    $list = array(
        '0'=> array(
            'id'=>'1',
            'uniacid'=>$uniacid,
            'title' => '医院',
            'keyword' => 'hospital',
            'created' => time(),
        ),
        '1'=> array(
            'id'=>'2',
            'uniacid'=>$uniacid,
            'title' => '药房',
            'keyword' => 'pharmacy',
            'created' => time(),
        ),
        '2'=> array(
            'id'=>'3',
            'uniacid'=>$uniacid,
            'title' => '体检机构',
            'keyword' => 'mechanism',
            'created' => time(),
        ),
        '3'=> array(
            'id'=>'4',
            'uniacid'=>$uniacid,
            'title' => '诊所',
            'keyword' => 'clinic',
            'created' => time(),
        ),
    );
    foreach($list as &$value)
    {
      $res = pdo_insert("hyb_yl_hospital_role",$value);

    }
  }
  include $this->template("jiancha/role");
}
// 添加编辑机构权限
if($op == 'editrole')
{
  $id = $_GPC['id'];

  $keyword = $_GPC['keyword'];
  if($id)
  {
    $item = pdo_get("hyb_yl_hospital_role",array("uniacid"=>$uniacid,"id"=>$id));
    $item['role'] = unserialize($item['role']);
  }
  


  if($_W['ispost']){
    $data = array(
        'uniacid' => $uniacid,
        "role" => serialize($_GPC['role']),
    );
    
    if($id)
    {
      pdo_update("hyb_yl_hospital_role",$data,array("id"=>$id));
    }else{
      $data['created'] = time();
      pdo_insert("hyb_yl_hospital_role",$data);
    }
    message("操作成功!",$this->createWebUrl("jiancha",array("op"=>"editrole",'ac'=>'editrole','hid'=>$hid,'id'=>$id,'keyword'=>$keyword)),"success");
  }
  include $this->template("jiancha/editrole");
}
if($op == 'change_role'){
  if($_W['isajax']){
     $change = $_GPC['change'];
     $val = $_GPC['value'];
     $id = $_GPC['id'];
     $keyword = $_GPC['keyword'];
     
     $res = pdo_update('hyb_yl_hospital_role',array($change=>$val),array('keyword'=>$keyword,'uniacid'=>$uniacid));
     if($res=='1'){
      $data = array(
             'status'=>1
        );
     }else{
      $data = array(
             'status'=>0
        );
     }
     echo json_encode($data);
     return false;
  }
}

if($op == 'order_list')
{
  $page = empty($_GPC['page']) ? "" : $_GPC['page'];
  $pageindex = max(1, intval($page));
  $pagesize = 10;
  $keyword = $_GPC['keyword'];
  $type_arr = pdo_getall("hyb_yl_docser_speck",array("uniacid"=>$uniacid));
  foreach($type_arr as $key => $ty)
  {
      if($type_arr[$key]['key_words'] == 'sirenyisheng')
      {
          unset($type_arr[$key]);
      }
  }
  $type = $_GPC['type'];
  $where = " where a.uniacid=".$uniacid." and ";
  $hid = $_GPC['hid'];
  
  if($keyword != '')
  {
    $where .= " and (z.z_name like '%$keyword%' or a.back_orser like '%$keyword%' or u.u_name like '%$keyword%')";
  }
  if($type == 'shoushukuaiyue' || $type == 'tijianjiedu' || $type == 'shipinwenzhen' || $type == 'dianhuajizhen' || $type == '')
  {
    $shoushu = pdo_fetchall("select a.*,z.z_name,u.u_name from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as u on u.openid=a.openid ".$where." and a.keywords = '".$type."' order by a.id desc");
    foreach($shoushu as &$ss)
    {
      $ss['typs'] = $ss['keywords'];
      $ss['time'] = date("Y-m-d H:i:s",$ss['time']);
      $ss['paytime'] = date("Y-m-d H:i:s",$ss['paytime']);
    }
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_wenzorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as u on u.openid=a.openid ".$where." and a.keywords = '".$type."'");
    $list = array_slice($shoushu,($pageindex - 1) * $pagesize,$pagesize);
  }else if($type == 'tuwenwenzhen' || $type == '')
  {
    $tuwen = pdo_fetchall("select a.*,z.z_name,u.u_name from ".tablename("hyb_yl_tuwenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as  u on u.openid=a.openid ".$where." order by a.id desc");
    foreach($tuwen as &$tw)
    {
      $tw['typs'] = 'tuwenwenzhen';
      $tw['time'] = date("Y-m-d H:i:s",$tw['xdtime']);
      $tw['paytime'] = date("Y-m-d H:i:s",$tw['paytime']);
    }
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_tuwenorder")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as  u on u.openid=a.openid ".$where);
    $list = array_slice($tuwen,($pageindex - 1) * $pagesize,$pagesize);
  }else if($type == 'yuanchengkaifang' || $type == '')
  {
    $kaifang = pdo_fetchall("select a.*,z.z_name,u.u_name,a.c_id as id from ".tablename("hyb_yl_chufang")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as u on u.openid=a.openid ".$where." order by id desc");
    $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_chufang")." as a left join ".tablename("hyb_yl_zhuanjia")." as z on z.zid=a.zid left join ".tablename("hyb_yl_userinfo")." as u on u.openid=a.openid ".$where." order by id desc");
    foreach($kaifang as &$kf)
    {
      $kf['typs'] = 'yuanchengkaifang';
      $kf['time'] = date("Y-m-d H:i:s",$kf['time']);
      $kf['paytime'] = date("Y-m-d H:i:S",$kf['paytime']);
    }
    $list = array_slice($kaifang,($pageindex - 1) * $pagesize,$pagesize);
  }else if($type == '')
  {
    $lists = array_merge($shoushu,$tuwen,$kaifang);
    $list = array_slice($lists,($pageindex - 1) * $pagesize,$pagesize);
    $total = count($shoushu,$tuwen,$kaifang);
  }
  $pager = pagination($total, $pageindex, $pagesize);
  include $this->template("jiancha/order_list");
}
if($op == 'zhuanjia')
{
  $page = empty($_GPC['page']) ? "" : $_GPC['page'];
  $pageindex = max(1, intval($page));
  $pagesize = 10;
  $hid = $_GPC['hid'];
  $keyword = $_GPC['keyword'];
  $where = " where uniacid=".$uniacid." and hid=".$hid;
  if($keyword != '')
  {
    $where .= " and z_name like '%$keyword%'";
  }
  $list = pdo_fetchall("select * from ".tablename("hyb_yl_zhuanjia").$where." order by zid desc limit ".($pageindex - 1) * $pagesize.",".$pagesize);
  $total = pdo_fetchcolumn("select count(*) from ".tablename("hyb_yl_zhuanjia").$where);
  $pager = pagination($total, $pageindex, $pagesize);
  include $this->template("jiancha/zhuanjia");
}







