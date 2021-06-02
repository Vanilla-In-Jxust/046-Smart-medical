<?php
/**
* 
*/
 class tuike extends HYBPage
 { 
   public function updateperson(){
     //
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $openid = $_GPC['openid'];
        $tkid = $_GPC['tkid'];
        $data['uniacid'] = $uniacid;
        $data['type'] = intval($_GPC['type']);
        $data['openid'] = $openid;
        $data['tgtime'] = strtotime('now');
        $data['tkid'] = $_GPC['tkid'];
        $data['content'] ='患者推广';
        $data['zid']=$_GPC['zid'];
        $beginToday=mktime(0,0,0,date('m'),date('d'),date('Y'));//当天开始时间戳
        $endToday=mktime(0,0,0,date('m'),date('d')+1,date('Y'))-1;//当天结束时间戳

        $user =pdo_fetch("SELECT * FROM".tablename('hyb_yl_tuiguanglog')."where uniacid='{$uniacid}' and tgtime>='{$beginToday}' and tgtime<=$endToday and openid='{$openid}' and type=2 and tkid='{$_GPC['tkid']}'");
        
        if(!$user && !empty($_GPC['tkid'])){
          $res = pdo_insert('hyb_yl_tuiguanglog',$data);
        }else{
          $res =0;
        }
        echo json_encode($res);
   }
   public function erweima(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['id'];
        $res = pdo_get("hyb_yl_tuikesite",array('id'=>$id));
        $dir = iconv("UTF-8", "GBK", "../attachment/hyb_yl");
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        $result = pdo_fetch('SELECT * FROM ' . tablename('hyb_yl_parameter') . " where `uniacid`='{$uniacid}' ", array(":uniacid" => $uniacid));
        $APPID = $result['appid'];
        $SECRET = $result['appsecret'];
        $erweima = $res['erweima'];

        if($erweima == '')
        {
          $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$result['appid']}&secret={$result['appsecret']}";
          $getArr = array();
          $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
          $access_token = $tokenArr->access_token;
          $id = $_GPC['id'];
          $data = array();
          $data['scene'] = "id=".$res['id'];
          $data['page'] = "hyb_yl/mycenter/pages/twitterApply/twitterApply";
          $data = json_encode($data);
          $url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" . $access_token;
          $result = $this->api_notice_increment($url, $data);
          $image_name = "id_".$res['id'] . ".jpg";
          $filepath = "../attachment/hyb_yl/{$image_name}";
          $file_put = file_put_contents($filepath, $result);
          if($file_put) {
            $siteroot = $_W['siteroot'];
            $filepathsss = "attachment/hyb_yl/{$image_name}";
            pdo_update("hyb_yl_tuikesite",array("erweima"=>$filepathsss),array('id'=>$id,'uniacid'=>$uniacid));
           }
        }
   }

    public function alldoc(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['id'];
        $row = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_tuiguanglog')."as a left join".tablename('hyb_yl_zhuanjia')."as c on c.zid=a.zid where a.uniacid='{$uniacid}' and a.tkid='{$id}' group by a.zid order by a.id desc ");
         foreach ($row as $key => $value) {
                $zid = $value['zid'];
                $where2="WHERE uniacid = '{$uniacid}' and zid='{$zid}'";
                $row[$key]['keshi'] = pdo_getcolumn("hyb_yl_ceshi",array("id"=>$row[$key]['parentid']),'name');
                $row[$key]['hospital'] = pdo_getcolumn("hyb_yl_hospital",array("hid"=>$row[$key]['hid']),'agentname');
                $row[$key]['grade'] = pdo_getcolumn("hyb_yl_hospital",array("hid"=>$row[$key]['hid']),'grade');
                        
                $row[$key]['leve'] = pdo_getcolumn("hyb_yl_hospital_level",array("id"=>$row[$key]['grade']),'level_name');
               

                $row[$key]['yearcad'] = pdo_fetch("SELECT * from" . tablename('hyb_yl_yearcard') . "where zid='{$zid}' and typs=1 and status=1");
                $row[$key]['advertisement'] = tomedia($row[$key]['advertisement']);
                $row[$key]['server'] = pdo_fetchall("SELECT key_words,titlme,ptmoney,hymoney from".tablename('hyb_yl_doc_all_serverlist')."{$where2}");
                $rows[$k]['serverss'] = pdo_getall("hyb_yl_doc_all_serverlist",array("zid"=>$v['zid'],"uniacid"=>$uniacid,"stateback"=>'1'));
                $rows[$k]['servers'] = pdo_fetch("select a.*,b.ser_url from ".tablename("hyb_yl_doc_all_serverlist")." as a left join ".tablename("hyb_yl_all_server_menulist")." as b on a.key_words=b.server_key where a.zid=".$v['zid']." and a.uniacid=".$uniacid." and a.key_words='".$server_key."' and a.stateback=1");
                $row[$key]['jingxuan'] = explode(',', $value['jingxuan']);
            }
        echo json_encode($row);
    }

    public function leverperson(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $tkid = $_GPC['id'];
        $index = $_GPC['index'];
        $where ="where uniacid='{$uniacid}'";
        if(empty($index)){
          $where .=" and tkid='{$tkid}' and leve=1";
        }else{
          $where .=" and tkid='{$tkid}' and leve=2";
        }
        $res = pdo_fetchall("SELECT * from".tablename('hyb_yl_tuikesite')." {$where} ");
        $count = pdo_fetchcolumn("SELECT count(*) from".tablename('hyb_yl_tuikesite')."where uniacid='{$uniacid}' and leve=1 and tkid='{$tkid}'");
        $count2 = pdo_fetchcolumn("SELECT count(*) from".tablename('hyb_yl_tuikesite')."where uniacid='{$uniacid}' and leve=2 and tkid='{$tkid}'");
        $data =array(
         'count'=>$count,
         'list' =>$res,
         'count2'=>$count2
          );
        echo json_encode($data);
    }

    public function yongjin(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $tkid = $_GPC['id'];
        //查询总佣金
        //查询可提现佣金
        $ktmoney =pdo_get('hyb_yl_tuikesite',array('id'=>$tkid),array('countmoney'));
        $countmoney = pdo_fetch("SELECT SUM(`money`) AS sum from".tablename('hyb_yl_tuikeshouyi')."where uniacid='{$uniacid}' and tkid='{$tkid}'");
        $sqmoney =pdo_fetch("SELECT SUM(`money`) AS sum from".tablename('hyb_yl_tuikeshouyi')."where uniacid='{$uniacid}' and tkid='{$tkid}' and over=0");
        //提现待通过
        $dtgmoney = pdo_fetch("SELECT SUM(`txprice`) AS sum from".tablename('hyb_yl_tuike_tixian_log')."where uniacid='{$uniacid}' and tkid='{$tkid}' and type=0");

        //yitg
        $ytgmoney = pdo_fetch("SELECT SUM(`txprice`) AS sum from".tablename('hyb_yl_tuike_tixian_log')."where uniacid='{$uniacid}' and tkid='{$tkid}' and type=1");
        $data =array(
            'ktmoney'=>$ktmoney,
            'countmoney'=>$countmoney,
            'sqmoney' =>$sqmoney,
            'dtgmoney'=>$dtgmoney,
            'ytgmoney'=>$ytgmoney
          );
        echo json_encode($data);
    }
    public function tixian(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $tkid = $_GPC['id'];
        $txprice = floatval($_GPC['txprice']);
        $count =pdo_getcolumn('hyb_yl_tuikesite',array('id'=>$tkid,'uniacid'=>$uniacid),'countmoney');
        $data =array(
           'countmoney'=>(floatval($count))-($txprice)
          );
        $res =pdo_update('hyb_yl_tuikesite',$data,array('id'=>$tkid));
        $test = array(
           'uniacid'=>$_W['uniacid'],
           'tkid'=>$tkid,
           'txprice'=>$txprice,
           'addtime'=>date("Y-m-d H:i:s")
          );
        
        pdo_insert('hyb_yl_tuike_tixian_log',$test);
        echo json_encode($res);
    }
   
   public function roul(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $tkid = $_GPC['tkid']=='undefined'?'0':$_GPC['tkid'];
        $res =pdo_get('hyb_yl_tuike_roul',array('uniacid'=>$uniacid));
        if(empty($tkid)){
           $res['applymoney'] ==$res['twoapplymoney'];
        }else{
          if($res['appdis']=='1'){
            $res['applymoney'] =='0.00';
          }
        }
        echo json_encode($res);
   }
    public function pay() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        require_once dirname(dirname(dirname(__FILE__)))."/wxpay.php";
        cache_write('uniacid',$_W['uniacid']);
        $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
        $appid = $res['appid'];
        $openid = $_GPC['openid'];
        $mch_id = $res['mch_id'];
        $key = $res['pub_api'];
        $out_trade_no = $mch_id . time();
        $total_fee = $_GPC['z_tw_money'];
        $noturl = 'http://'.$_SERVER['SERVER_NAME'].''; //通知地址 
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
    public function uptopmoney(){
      global $_GPC, $_W;
      $uniacid =$_W['uniacid'];
      $tkid = $_GPC['tkid']; //一级
      $mytkid = $_GPC['mytkid']; //二级
      $money = $_GPC['money'];
      $openid = $_GPC['openid'];
      //查询返佣金额
      $onemoney = pdo_getcolumn('hyb_yl_tuike_roul',array('uniacid'=>$uniacid),'modeonemoney');
      $twomoney = pdo_getcolumn('hyb_yl_tuike_roul',array('uniacid'=>$uniacid),'modetwomoney');
      $t_onemoney = pdo_getcolumn('hyb_yl_tuike_roul',array('uniacid'=>$uniacid),'onegetmoney');

      //一级分销商返佣
      if(!empty($tkid)){

        $res = pdo_fetch("SELECT * from".tablename('hyb_yl_tuikesite')."where uniacid='{$uniacid}' and id='{$mytkid}' ");
          $data =array(
             'uniacid' =>$uniacid,
             'money'   =>$onemoney,
             'addtime' =>date("Y-m-d H:i:s"),
             'tkid'    =>$tkid,
             'xjid'    =>$myid
            );
          //增加总金额
          $countmoney = pdo_getcolumn('hyb_yl_tuikesite',array('uniacid'=>$uniacid,'id'=>$tkid),'countmoney');
          $row = pdo_update('hyb_yl_tuikesite',array('countmoney'=> $countmoney+$onemoney),array('id'=>$tkid));
          $result=pdo_insert('hyb_yl_tuikeshouyi',$data);
          echo $result;
    //二级分销商返佣
    //当前分享用户是否是等于二级分销商
      }
       if(!empty($mytkid)){
       
          $user_fxs = pdo_get('hyb_yl_tuikesite',array('openid'=>$openid));
          $res = pdo_fetch("SELECT * from".tablename('hyb_yl_tuikesite')."where uniacid='{$uniacid}' and id='{$mytkid}' ");
          $data =array(
             'uniacid' =>$uniacid,
             'money'   =>$twomoney,
             'addtime' =>date("Y-m-d H:i:s"),
             'mytkid'  =>$mytkid,
             'xjid'    =>$myid
            );
         
          if($user_fxs['id'] !== $res['id']){
              //增加总金额
            $countmoney = pdo_getcolumn('hyb_yl_tuikesite',array('uniacid'=>$uniacid,'id'=>$mytkid),'countmoney');
            $row = pdo_update('hyb_yl_tuikesite',array('countmoney'=> $countmoney+$twomoney),array('id'=>$mytkid));
            $result=pdo_insert('hyb_yl_tuikeshouyi',$data);
            echo $result;
          }else{
             echo 0;
          }
      }else{
        $result=0;
        echo $result;
      }

        
    }
    public function api_notice_increment($url, $data) {
        $ch = curl_init();
        // $header = "Accept-Charset: utf-8";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        //curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $tmpInfo = curl_exec($ch);
        if (curl_errno($ch)) {
            return false;
        } else {
            return $tmpInfo;
        }
    }
    public function send_post($url, $post_data, $method = 'POST') {
        $postdata = http_build_query($post_data);
        $options = array('http' => array('method' => $method, //or GET
        'header' => 'Content-type:application/x-www-form-urlencoded', 'content' => $postdata, 'timeout' => 15 * 60 // 超时时间（单位:s）
        ));
        $context = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        return $result;
    }
    public function hospital(){
      global $_GPC, $_W;
      $uniacid =$_W['uniacid'];
      $openid = $_GPC['openid'];
      $res = pdo_fetchall('select * from'.tablename('hyb_yl_tuihospital')."where uniacid='{$uniacid}' and openid='{$openid}'");
      foreach ($res as $key => $value) {
        $hid = $value['hid'];
        $res[$key]['hospital'] = pdo_get('hyb_yl_hospital',array('hid'=>$hid));
        $res[$key]['hospital']['logo']=tomedia($res[$key]['hospital']['logo']);
        if($res[$key]['hospital']['groupid'] =='1'){
          $res[$key]['hospital']['groupname']='医院';
        }
        if($res[$key]['hospital']['groupid'] =='2'){
          $res[$key]['hospital']['groupname']='药房';
        }
        if($res[$key]['hospital']['groupid'] =='3'){
          $res[$key]['hospital']['groupname']='体检机构';
        }
        if($res[$key]['hospital']['groupid'] =='4'){
          $res[$key]['hospital']['groupname']='诊所';
        }
        $res[$key]['addtime'] = date('Y-m-d',$res[$key]['addtime']);
      }
      echo json_encode($res);
    }
    public function myshangji(){
      global $_GPC, $_W;
      $uniacid =$_W['uniacid'];
      $id = $_GPC['id'];
      $res = pdo_getcolumn('hyb_yl_tuikesite',array('tkid'=>$id),'tkid');
      if($res){
        echo json_encode($res);
      }else{
        echo json_encode(0);
      }
      
    }
}


