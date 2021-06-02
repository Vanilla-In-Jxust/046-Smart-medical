<?php
/**
 * 小程序模块小程序接口定义
 *
 * @author zofui
 * @url
 */
global $_W;
defined('IN_IA') or exit('Access Denied');
define('ST_ROOT', IA_ROOT . '/addons/hyb_yl/');
define('ST_URL', $_W['siteroot'] . 'addons/hyb_yl/');
define('MODULE', 'hyb_yl');
require_once (IA_ROOT . '/addons/hyb_yl/define.php');
require_once (ST_ROOT . 'class/function.php');
require_once (IA_ROOT . '/addons/hyb_yl/inc/web/Data/pdo.class.php');
require_once (ST_ROOT . 'class/autoload.php');
class Hyb_ylModuleWxapp extends WeModuleWxapp {
    public function doPageCopysite() {
        global $_W, $_GPC;
        copysite();
    }
    //图片上传
    public function doPageUpload() {
        global $_W, $_GPC;
        $uniacid = $_W['uniacid'];
        $max_file_size = 2000000;
        $destination_folder = '../attachment/';
        if (!is_uploaded_file($_FILES['upfile']['tmp_name'])) {
            echo '图片不存在!';
            die;
        }
        $file = $_FILES['upfile'];
        if ($max_file_size < $file['size']) {
            echo '文件太大!';
            die;
        }
        $filename = $file['tmp_name'];
        $image_size = getimagesize($filename);
        $pinfo = pathinfo($file['name']);
        $ftype = $pinfo['extension'];
        $destination = $destination_folder . str_shuffle(time() . rand(111111, 999999)) . '.' . $ftype;
        if (file_exists($destination) && $overwrite != true) {
            echo '同名文件已经存在了';
            die;
        }
        if (!move_uploaded_file($filename, $destination)) {
            echo '移动文件出错';
            die;
        }
        $pinfo = pathinfo($destination);
        $fname = $pinfo['basename'];
        echo $fname;
        @(require_once IA_ROOT . '/framework/function/file.func.php');
        @($filename = $fname);
        @file_remote_upload($filename);
    }
        public function doPageUploadvideo() {
        global $_W, $_GPC;
        $uniacid = $_W['uniacid'];
        $max_file_size = 2000000;
        $destination_folder = '../attachment/';
        if (!is_uploaded_file($_FILES['upfile']['tmp_name'])) {
            echo '图片不存在!';
            die;
        }
        $file = $_FILES['upfile'];
        if ($max_file_size < $file['size']) {
            echo '文件太大!';
            die;
        }
        $filename = $file['tmp_name'];
        $image_size = getimagesize($filename);
        $pinfo = pathinfo($file['name']);
        $ftype = $pinfo['extension'];
        $destination = $destination_folder . str_shuffle(time() . rand(111111, 999999)) . '.mp3';
        if (file_exists($destination) && $overwrite != true) {
            echo '同名文件已经存在了';
            die;
        }
        if (!move_uploaded_file($filename, $destination)) {
            echo '移动文件出错';
            die;
        }
        $pinfo = pathinfo($destination);
        $fname = $pinfo['basename'];
        echo $fname;
        @(require_once IA_ROOT . '/framework/function/file.func.php');
        @($filename = $fname);
        @file_remote_upload($filename);
    }
    public function doPageUploadback() {
        global $_W, $_GPC;
        $uniacid = $_W['uniacid'];
        $max_file_size = 2000000;
        $destination_folder = '../attachment/';
        if (!is_uploaded_file($_FILES['upfile']['tmp_name'])) {
            echo '图片不存在!';
            die;
        }
        $file = $_FILES['upfile'];
        if ($max_file_size < $file['size']) {
            echo '文件太大!';
            die;
        }
        $filename = $file['tmp_name'];
        $image_size = getimagesize($filename);
        $pinfo = pathinfo($file['name']);
        $ftype = $pinfo['extension'];
        $destination = $destination_folder . str_shuffle(time() . rand(111111, 999999)) . '.' . $ftype;
        if (file_exists($destination) && $overwrite != true) {
            echo '同名文件已经存在了';
            die;
        }
        if (!move_uploaded_file($filename, $destination)) {
            echo '移动文件出错';
            die;
        }
        $pinfo = pathinfo($destination);
        $fname = tomedia($pinfo['basename']);
        echo $fname;
        @(require_once IA_ROOT . '/framework/function/file.func.php');
        @($filename = $fname);
        @file_remote_upload($filename);
    }
    //问诊评价
    public function doPagePinglun() {
        global $_W, $_GPC;
        $uniacid = $_W['uniacid'];
        $zid = $_GPC['zid'];
        $openid = $_GPC['openid'];
        $keywords = $_GPC['keywords'];
        $orders = $_GPC['orders'];
        $content = $_GPC['content'];
        $j_id = $_GPC['j_id'];
        $rew = pdo_get('hyb_yl_zhuanjia_rule',array('uniacid'=>$uniacid),array('is_pinglun','score'));
        if($rew['is_pinglun'] =='1'){
           $typs = 1;
        }else{
          $typs = 0;
        }
        if($rew['score'] =='1'){
           $starsnum = 5;
        }else{
          $starsnum = $_GPC['starsnum'];
        }
        $data = array('uniacid' => $uniacid, 'zid' => $zid, 'openid' => $openid, 'createTime' => strtotime('now'), 'starsnum' => intval($starsnum), 'content' => $content, 'keywords' => $keywords, 'orders' => $orders, 'j_id' => $j_id,'typs'=>$typs);

        pdo_insert("hyb_yl_pingjia", $data);
        //更新订单状态
        if($keywords=='dianhuajizhen' || $keywords=='shipinwenzhen' || $_GPC['keywords'] == 'shoushukuaiyue' || $_GPC['keywords'] == 'tijianjiedu'){
           $res = pdo_update("hyb_yl_wenzorder", array('ifpay' => 4), array('back_orser' => $orders));
        }
        if($keywords=='tuwenwenzhen' ){
           $res = pdo_update("hyb_yl_twenorder", array('ifpay' => 4), array('back_orser' => $orders));
        }
        if($keywords=='yuanchengkaifang' ){
           $res = pdo_update("hyb_yl_chufang", array('ispay' => 4), array('back_orser' => $orders));
        }
        if($_GPC['keywords'] == 'yuanchengguahao')
       {
            pdo_update("hyb_yl_guahaoorder",array("ifpay"=>4),array("back_orser"=>$orders));
       }
        echo json_encode($res);
    }
    //短信验证
    public function doPageSendSms() {
        require_once dirname(__FILE__) . '/class/SignatureHelper.php';
        $params = array();
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $phoneNum = $_GPC['phoneNum'];
        $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}'");
        $mobel = unserialize($aliduanxin['moban_id']);
        $accessKeyId = $aliduanxin['key'];
        $accessKeySecret = $aliduanxin['scret'];
        $params["PhoneNumbers"] = $phoneNum;
        $params["SignName"] = $aliduanxin['qianming'];
        $params["TemplateCode"] = $mobel['moban_id'];
        $code = rand(1000, 9999);
        $params['TemplateParam'] = Array("code" => $code, "product" => "sms");
        if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
            $params["TemplateParam"] = json_encode($params["TemplateParam"]);
        }
        $helper = new SignatureHelper();
        $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
        return $this->result(0, 'success', $code);
    }

}
