<?php
/**
* 
*/
 class Hzbingli extends HYBPage
 { 
  //患者病历添加
   public function addbingli()
  {
     global $_GPC, $_W;
     $model = Model('userbingli');
     $uniacid = $_W['uniacid'];
     $zid = $_GPC['zid'];
     $msglist = $this->jsondata($_GPC['msglist']);
     $openid = $_GPC['openid'];
     $data = array(
        'uniacid'  => $_W['uniacid'],
        'msglist'  => serialize($msglist),
        'openid'   => $_GPC['openid'],
        'time'     => strtotime('now'),
        'sicktel'  => $_GPC['sicktel'],
        'userid'   => $_GPC['j_id'],
        'time'     => strtotime('now'),
        'keywords' => $_GPC['keywords']
     	);
     $res = $model->add($data);
     $bl_id =  pdo_insertid();
     echo json_encode($bl_id);
  }

	public function url() {
	    global $_W;
	    echo $_W['siteroot'];
	}
	//模板消息提醒医生
public function doctixing($user_openid,$zid){
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
	  $wxappaid = pdo_get('hyb_yl_parameter', array('uniacid' => $uniacid));
	  $wxapptemp = pdo_get('hyb_yl_wxapptemp', array('uniacid' => $uniacid));
	  $appid = $wxappaid['appid'];
	  $appsecret = $wxappaid['appsecret'];
	  $template_id = $wxapptemp['weidbb'];
  	$tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
	  $getArr = array();
  	$tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
  	$access_token = $tokenArr->access_token;
  	$url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' . $access_token;
	  $res = pdo_get('hyb_yl_zhuanjia', array('zid' => $zid, 'uniacid' => $uniacid));
	  $user_curr = pdo_fetchall("SELECT * FROM " . tablename("hyb_yl_userinfo") . " where uniacid=:uniacid and openid=:openid", array(":uniacid" => $uniacid, ":openid" => $user_openid));
  	foreach ($user_curr as $key => $value) {
	    $out_time = strtotime('-7 days', time());
	    $formids = unserialize($value['form_id']);
	    foreach ($formids as $k => $v) {
	        if ($out_time >= $v['form_time']) {
	            unset($formids[$k]);
	        }
	    }
	    $formids = array_values($formids);
	    $form_id = $formids[0]['form_id'];
	    $dd['form_id'] = $form_id;
	    $dd['touser'] = $value['openid'];
	    $content = array(
	    	"keyword1" => array(
	    		"value" => $question, 
	    		"color" => "#4a4a4a"
	    		), 
	    	"keyword2" => array(
	    		"value" => $z_name, 
	    		"color" => ""
	    		), 
	    	"keyword3" => array(
	    		"value" => $paytime, 
	    		"color" => ""
	    		)
	    	);
	    $dd['template_id'] = $template_id;
	    $dd['page'] = 'hyb_yl/mysubpages/pages/wodetiwen/wodetiwen?openid='.$user_openid; 
	    $dd['data'] = $content; 
	    $dd['color'] = ''; 
	    $dd['emphasis_keyword'] = ''; 
	    $result1 = $this->https_curl_json($url, $dd, 'json');
	    foreach ($formids as $k => $v) {
	        if ($form_id == $v['form_id']) {
	            unset($formids[$k]);
	        }
	    }
	    $new_formids = array_values($formids);
	    $datas['form_id'] = serialize($new_formids);
	    pdo_update('hyb_yl_userinfo', $datas, array('u_id' => $value['u_id']));
	  } 
	}
	// 短息提醒
	public function docduanxin(){
     global $_GPC, $_W;
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

      public function addorder()
	 {
        global $_GPC, $_W;
        $uniacid  = $_W['uniacid'];
        $model = Model('wenzorder');
        $data = array(
               'uniacid' => $uniacid,
               'openid'  => $_GPC['openid'],
               'name'    => $_GPC['name'],
               'keywords'=> $_GPC['keywords'],
               'order'   => date('Ymd').substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8),
               'zid'     => $_GPC['zid'],
               'money'   => $_GPC['money'],
               'bl_id'   => $_GPC['bl_id'],
               'time'    => strtotime('now'),
               'j_id'    => $_GPC['j_id']
        	);
        $model->add($data);
        //查询订单详情
        $oid = pdo_insertid();
        $res = $model->where('uniacid="'.$uniacid.'" and oid="'.$oid.'"')->get();
        echo json_encode($res);
	  }
    public function seeuserbl(){
        global $_GPC, $_W;
        $uniacid  = $_W['uniacid'];
        $oid = $_GPC['oid'];
        $res = pdo_fetch("SELECT a.*,b.msglist,b.bl_id FROM".tablename('hyb_yl_wenzorder')."as a left join".tablename('hyb_yl_userbingli')."as b on b.bl_id=a.bl_id where a.uniacid='{$uniacid}' and a.oid='{$oid}'");
        $res['msglist'] = unserialize($res['msglist']);
        foreach ($res['msglist'] as $key => $value) {
          if($res['msglist'][$key]['img']){
            $is = str_replace('"]', "", $res['msglist'][$key]['img']);
            $id2 = str_replace('["', "", $is);
            $id3 = str_replace('""', "", $id2);
            $arr = explode(",", $id3);
            $res['msglist'][$key]['img'] =$arr;
          }
        }
        echo json_encode($res);
    }

    public function jsondata($data)
   {
        $value =htmlspecialchars_decode($data);
        $array =json_decode($value);
        $object =json_decode(json_encode($array),true);
        return $object;
    }
}


