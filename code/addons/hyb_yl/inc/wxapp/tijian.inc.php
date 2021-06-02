<?php
/**
* 
*/
 class Tijian extends HYBPage
 { 
//套餐列表
   public function listall()
  {
     global $_GPC, $_W;
     $model = Model('taocan');
     $uniacid = $_W['uniacid'];
     $res = $model->where('uniacid="'.$uniacid.'" and typs=0')->getall('id,thumb,title,price,content,haveBuyNumber,crowd');

     foreach ($res as $key => $value) {
       $res[$key]['thumb'] = $_W['attachurl'].$res[$key]['thumb'];
       $crowd = explode(',', $value['crowd']);
       $crowdarr = [];
       foreach ($crowd as $k => $val) {

          $crowdarr[]= pdo_get('hyb_yl_tijian_crowd',array('id'=>$val),array('title'));
          
        }
        $res[$key]['crowd'] = $crowdarr;
     }
     echo json_encode($res);
  }
 //套餐分类
   public function catefenlei()
  {
     global $_GPC, $_W;
     $model = Model('taocan_cate');
     $uniacid = $_W['uniacid'];
     $res = $model->where('uniacid="'.$uniacid.'" and status =1')->getall();
     foreach ($res as $key => $value) {
      $res[$key]['thumb'] = tomedia($res[$key]['thumb']);
     }
     echo json_encode($res);
  }
  //体检套餐详情
     public function detail()
  {
     global $_GPC, $_W;
     $uniacid = $_W['uniacid'];
     $id = $_GPC['id'];
     $res = pdo_fetch("SELECT a.thumb as athumb,a.title as atitle,a.*,b.* FROM".tablename('hyb_yl_taocan')."as a left join".tablename('hyb_yl_taocan_cate')."as b on b.id= a.type where a.id='{$id}' and a.uniacid='{$uniacid}'");
     $res['imgpath']= json_decode($res['imgpath'],true);
     $tijian = $res['tijian'];
     $row = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_tijian_moban')."where uniacid='{$uniacid}'  and id='{$tijian}' ");

     foreach ($row as $key => $value) {
      $id = $value['id'];
      $res['t_msg'] = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_tijian_project')."where uniacid='{$uniacid}' and m_id='{$id}' and type=1");
      $res['t_msg_fujia'] = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_tijian_project')."where uniacid='{$uniacid}' and m_id='{$id}' and type=2");
        foreach ($res['t_msg'] as $k => $v) {
           $res['t_msg'][$k]['price'] = (float)($res['t_msg'][$k]['price']);
        }
        foreach ($res['t_msg_fujia'] as $k2 => $v2) {
           $res['t_msg_fujia'][$k2]['price'] = (float)($res['t_msg_fujia'][$k2]['price']);
        }
     }
     //人群
     //人群id

     $crowd = explode(',', $res['crowd']);
   
     foreach ($crowd as $key => $value) {

       $crowdarr[] = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijian_crowd')."where id='{$value}'");
     }
     foreach ($crowdarr as $k => $val) {
       $crowdarr[$k]['icon'] =tomedia($crowdarr[$k]['icon']);
     }
     $res['crowd'] = $crowdarr;
     for ($i=0; $i <count($res['imgpath']) ; $i++) { 
       $res['imgpath'][$i] = tomedia($res['imgpath'][$i]);
     }
     $res['notes'] =htmlspecialchars_decode($res['notes']);
     $res['athumb'] = tomedia($res['athumb']);
     //查询分院
    //  $hid = json_decode($res['hid'],true);
    // foreach ($hid as $k => $v) {

    //    $res['fenyuan'][] = pdo_fetch("SELECT hid,agentname from".tablename('hyb_yl_hospital')."where hid='{$v}'");
    // }
     echo json_encode($res);
  }
  //体检套餐详情
     public function catefenleione()
  {
     global $_GPC, $_W;
     $model = Model('taocan_cate');
     $uniacid = $_W['uniacid'];
     $res = $model->where('uniacid="'.$uniacid.'"')->getall();
     foreach ($res as $key => $value) {
       $res[$key]['thumb'] = $_W['attachurl'].$res[$key]['thumb'];
     }
     echo json_encode($res);
  }
  //分类套餐列表
     public function detailist()
  {
     global $_GPC, $_W;
     $model = Model('taocan');
     $uniacid = $_W['uniacid'];
     $id = $_GPC['id'];
     if(empty($id)){
      $res = $model->where('uniacid="'.$uniacid.'"')->getall();
     }else{
      $res = $model->where('uniacid="'.$uniacid.'" and type="'.$id.'"')->getall();
     }
     
     foreach ($res as $key => $value) {
       $res[$key]['thumb'] = $_W['attachurl'].$res[$key]['thumb'];
     }
     echo json_encode($res);
  }
  //可用城市
     public function city()
  {
     global $_GPC, $_W;
     $model = Model('taocan');
     $host = Model('hospital');
     $uniacid = $_W['uniacid'];
     $id = $_GPC['id'];
     $res = $model->where('uniacid="'.$uniacid.'" and id = "'.$id.'"')->get('hid','');
     $t_cityid = json_decode($res['hid'],true);
 
     foreach ($t_cityid as $key => $value) { 
        //查询他下面的机构
      if($value){
       $new_row['host'][] = $host->where('hid="'.$value.'"')->get('hid,province,city');
      }
     }
     echo json_encode($new_row);
  }
  //部门
    public function bumen()
  {
     global $_GPC, $_W;
     $model = Model('taocan');
     $city = $this->jsondata($_GPC['city']);
     $uniacid = $_W['uniacid'];
     $tab2  = Model("address");

     foreach ($city as $key => $value) {
      //城市

         $province = $value['province'];
         $records[] =$tab2->where('uniacid="'.$uniacid.'" and pid="'.$province.'"')->get('parentid,name'); 
       //查询机构
         $list[] = pdo_fetchall("SELECT hid,agentname,xxaddress FROM".tablename('hyb_yl_hospital')."where uniacid = '{$uniacid}' and city='{$value['city']}' ");

     }
     foreach ($records as $key => $value) {
       $newArr[$key]['city'] = $records[$key];
       $newArr[$key]['list'] = $list[$key];
     }

     echo json_encode($newArr);
  }

    public function onebumen()
  {
     global $_GPC, $_W;
     $model = Model('taocan');
     $city = $_GPC['city'];
     $uniacid = $_W['uniacid'];
     $tab2  = Model("address");
     $list = pdo_fetchall("SELECT hid,agentname,xxaddress FROM".tablename('hyb_yl_hospital')."where uniacid = '{$uniacid}' and province='{$city}'  ");
     echo json_encode($list);
  }
  //体检时间
  public function timelist(){
    global $_GPC,$_W;
    $uniacid = $_W['uniacid'];
    $text = '';
    $time = time();//今天时间
    $times = strtotime('+1 day', $time);//三天后时间
    $timel = strtotime('+6 day', $times);//三天后时间
    //计算开始时间与结束时间之间天数
    $daynum=($timel-$times)/(3600*24);
    $tag=3600*24;
    //计算出所求时间每一个日期
    for ($i=0; $i <=$daynum ; $i++) { 
      $timem[$i]=date('Y-m-d',$times+$i*$tag);
      
    }
     $date=$this->get_date($timem);
     foreach ($date as $key => $value) {
         $date[0]['week'] = '明天';
         $date[1]['week'] = '后天';
     }
     echo json_encode($date);
  }
  //查询时间下面的所有部门
     public function timemumen(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $chooseDate = $_GPC['chooseDate'];
        $cityid = $_GPC['cityid'];
        $checkdate = array();
        $week =$this->get_week($chooseDate);

        //查询所有机构
        $res = pdo_fetchall("SELECT * FROM".tablename('hyb_yl_hospital')."where uniacid='{$uniacid}' and city='{$cityid}'");

        foreach ($res as $key => $value) {
          $hid = $value['hid'];
          $rows = pdo_fetchall("SELECT `hid`,`nums` FROM " . tablename("hyb_yl_hospitaljobtime") . " where uniacid ='{$uniacid}' and find_in_set('{$week}',week) and hid='{$hid}'");
                $checkdate=array();
                foreach ($rows as $k => $v) {
                   $n_num = $v['nums'];
                   $rows[$k]['n_num'] = 1*7;
                   for ($j=0; $j <=$rows[$k]['n_num'] ; $j++) { 
                      $checkdate[$j] = date("Y-m-d",strtotime("+".$j."day"));
                    }
                    //数组去重。去重之后查询当前点击的时间是否在时间数组中，如果存在就
                    $serializeArrs = array_map('serialize',$checkdate);
                    $uniqueArrs = array_unique($serializeArrs);
                    $rows[$k]['time'] = array_map('unserialize',$uniqueArrs);
                    if(in_array($chooseDate, $rows[$k]['time'])){
                      //查询星期几
                      $jigou= pdo_get("hyb_yl_hospital",array('hid'=>$v['hid']));
                      $rows[$k] = array_unique($jigou);
                    }
                }
                $rowsarr = array_unique($rows);
               message($rowsarr, '', 'ajax');
        }
       
    }
     public function timemumenone(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $chooseDate = $_GPC['chooseDate'];
        $checkdate = array();
        $week =$this->get_week($chooseDate);
        $rows = pdo_fetchall("SELECT `z_pid`,`nums` FROM " . tablename("hyb_yl_tjyytime") . " where uniacid ='{$uniacid}' and find_in_set('{$week}',week) ");
        $checkdate=array();
        foreach ($rows as $key => $value) {
           $n_num = $value['nums'];
           $rows[$key]['n_num'] = $n_num*7;
           for ($j=0; $j <=$rows[$key]['n_num'] ; $j++) { 
              $checkdate[$j] = date("Y-m-d",strtotime("+".$j."day"));
            }
            //数组去重。去重之后查询当前点击的时间是否在时间数组中，如果存在就
            $serializeArrs = array_map('serialize',$checkdate);
            $uniqueArrs = array_unique($serializeArrs);
            $rows[$key]['time'] = array_map('unserialize',$uniqueArrs);
            if(in_array($chooseDate, $rows[$key]['time'])){
              //查询星期几
              $rows[$key]= pdo_get("hyb_yl_jglist",array('j_id'=>$value['z_pid']));
            }
        }
        $data = array(
           'data'=>$rows,
           'week'=>$week,
          );
        echo json_encode($data);
    }
    function get_date($dateArray){
        $b=array();
     
        foreach($dateArray as $key=>$value){
            $b[]=array('id'=>$key,'date'=>$value);
        };
        foreach($b as $k=>$v){
            $b[$k]['week']=$this->get_week($v['date']);
            $b[$k]['date']=$v['date'];
            $b[$k]['time']=date("Y");
        }
        return $b;
    }
   /*
    * 返回输入日期星期几
    * @param $date 日期
    * */
    function get_week($date){
        $date_str=date('Y-m-d',strtotime($date));
        $arr=explode("-", $date_str);
        $year=$arr[0];
        $month=sprintf('%02d',$arr[1]);
        $day=sprintf('%02d',$arr[2]);
        $hour = $minute = $second = 0;
        $strap = mktime($hour,$minute,$second,$month,$day,$year);
        $number_wk=date("w",$strap);
        $weekArr=array("周日","周一","周二","周三","周四","周五","周六");
        return $weekArr[$number_wk];
 
    }
    //添加体检订单
    public function addtijian(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $content = $this->jsondata($_GPC['content']);
      $addproject = $this->jsondata($_GPC['addproject']);
      $timeArr =pdo_get('hyb_yl_order_rule',array('uniacid'=>$uniacid));
      $qx_time = $timeArr['qx_time'];
      $time_b = intval($qx_time * 60);
      $newtime  = date("Y-m-d H:i:s");
      $overtime = date("Y-m-d H:i:s",strtotime($newtime)+$time_b); 
      $tid = $_GPC['tid'];
      if($addproject==''){
         $projec = "";
      }else{
         $projec = serialize($addproject);
      }
      $data =array(
          'uniacid'  => $uniacid,
          'j_id'     => $_GPC['j_id'],
          'money'    => $_GPC['money'],
          'content'  => serialize($content),
          'bm_id'    => $_GPC['bm_id'],
          'time'     => strtotime('now'),
          'ordernums'=> $this->getordernum(),
          'ifpay'     => $_GPC['ifpay'],
          'yy_time'   => $_GPC['yy_time'],
          'openid'    => $_GPC['openid'],
          'id'        => $_GPC['id'],
          'addproject'=> $projec,
          'tid'       => $_GPC['tid'],
          'overtime'  => strtotime($overtime),
        );
      $res = pdo_insert("hyb_yl_tijianorder",$data);
      $id = pdo_insertid();
      $row = pdo_get('hyb_yl_tijianorder',array('id'=>$id));
      $tao_can_in = pdo_getcolumn('hyb_yl_taocan',array('id'=>$tid),array('haveBuyNumber'));
      pdo_update('hyb_yl_taocan',array('haveBuyNumber'=>$tao_can_in+1),array('id'=>$tid));
      echo json_encode($row);
    }
   //用户体检订单
     public function orderlist()
   {
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $openid = $_GPC['openid'];
      $index = $_GPC['index'];
      $where = "where a.uniacid='{$uniacid}' and a.openid='{$openid}' and a.role=0 ";
      if($index=='0'){
        $where .="";
      }
      if($index=='1'){
       $where .=" and a.ifpay=0";
      }
      if($index=='2'){
       $where .=" and a.ifover=0 and a.ifpay=1";
      }
      if($index=='3'){
       $where .=" and a.ifover=1";
      }
      if($index=='4'){
        $where .=" and a.ifgb=1";
      }
      $res = pdo_fetchall("SELECT a.time as atime,a.id as aid,a.content as acontent,a.*,b.id as bid,b.* FROM".tablename('hyb_yl_tijianorder')."as a left join".tablename('hyb_yl_taocan')."as b on b.id=a.tid ".$where."  order by a.id desc");

      foreach ($res as $key => $value) {
        $res[$key]['thumb'] = $_W['attachurl'].$res[$key]['thumb'];
        $res[$key]['addproject'] = unserialize($res[$key]['addproject']);
        $res[$key]['content'] = unserialize($res[$key]['acontent']);
        $res[$key]['atime'] = date("Y-m-d",$res[$key]['atime']);
        $res[$key]['overtime'] = date("Y-m-d H:i:s",$res[$key]['overtime']);
        $res[$key]['jiaren'] = pdo_get("hyb_yl_userjiaren",array('j_id'=>$value['j_id']),array('names'));
        $res[$key]['jigou'] = pdo_get("hyb_yl_hospital",array('hid'=>$value['bm_id']),array('agentname'));
        if($res[$key]['ifpay']==0){
            $res[$key]['code'] ="待支付";
        }
        if($res[$key]['ifpay']==1){
            $res[$key]['code'] ="已支付";
        }
      }
       echo json_encode($res);
    }
     public function getordernum(){
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
        $mch_id = $res['mch_id'];
        $out_trade_no = $mch_id . time();
        return $out_trade_no;
     }
    //订单详情
     public function oderinfo(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $id = $_GPC['id'];
      $res = pdo_fetch("SELECT a.id as aid,a.*,b.id as bid,b.thumb,b.title,b.notes,c.* FROM".tablename('hyb_yl_tijianorder')."as a left join".tablename('hyb_yl_taocan')."as b on b.id=a.tid left join".tablename('hyb_yl_userjiaren')."as c on c.j_id=a.j_id where a.uniacid='{$uniacid}' and a.id='{$id}'");
      if($res){
        //查询专家
        $zid = $res['zid'];
        $res['zj'] = pdo_fetch("SELECT a.*,b.agentname,c.name FROM".tablename('hyb_yl_zhuanjia')."as a left join".tablename('hyb_yl_hospital')."as b on b.hid=a.hid left join".tablename('hyb_yl_ceshi')."as c on c.id = a.parentid where a.uniacid='{$uniacid}' and a.zid='{$zid}'");
        $res['time'] = date("Y-m-d H:i:s",$res['time']);
        $res['paytime'] = date("Y-m-d H:i:s",$res['paytime']);
        $res['content'] = unserialize($res['content']);
        foreach ($res['content'] as $key => $value) {
         $res['content'][$key]['open'] =false;
         $res['content'][$key]['max'] =floatval($res['content'][$key]['max']);
         $res['content'][$key]['min'] =floatval($res['content'][$key]['min']);
         $id = $value['id'];
         $res['content'][$key]['text'] = pdo_getcolumn('hyb_yl_tijian_project', array('id' => $id), 'text');
         $res['content'][$key]['text2'] = pdo_getcolumn('hyb_yl_tijian_project', array('id' => $id), 'text2');
       }
       $res['addproject'] = unserialize($res['addproject']);
       foreach ($res['addproject'] as $key => $value) {
         $res['addproject'][$key]['open'] =false;
         $res['addproject'][$key]['max'] =floatval($res['addproject'][$key]['max']);
         $res['addproject'][$key]['min'] =floatval($res['addproject'][$key]['min']); 
         $id = $value['id'];
         $res['addproject'][$key]['text'] = pdo_getcolumn('hyb_yl_tijian_project', array('id' => $id), 'text');
         $res['addproject'][$key]['text2'] = pdo_getcolumn('hyb_yl_tijian_project', array('id' => $id), 'text2');
       } 
       $res['data'] =unserialize($res['data']);
       $res['notes'] =htmlspecialchars_decode($res['notes']);
       $res['jiaren'] = pdo_get("hyb_yl_userjiaren",array('j_id'=>$res['j_id']),array('names'));
       $res['jigou'] = pdo_get("hyb_yl_hospital",array('hid'=>$res['bm_id']),array('agentname'));
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
  public function paytijianorder() {
      global $_GPC, $_W;
      require_once dirname(dirname(dirname(__FILE__)))."/wxpay.php";
      cache_write('uniacid',$_W['uniacid']);
      $res = pdo_get('hyb_yl_parameter', array('uniacid' => $_W['uniacid']));
      $appid = $res['appid'];
      $openid = $_GPC['openid'];
      $mch_id = $res['mch_id'];
      $key = $res['pub_api'];
      $out_trade_no = $_GPC['orders'];
      $total_fee = $_GPC['z_tw_money'];
      $key_words = $_GPC['key_words'];
      
      $noturl = 'http://'.$_SERVER['SERVER_NAME'].'/addons/hyb_yl/tijiannoturl.php';
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
  public function addjson(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $id = $_GPC['id'];//套餐id
      $orderid = $_GPC['orderid'];
      $title = $_GPC['title'];
      $type = $_GPC['type'];
      $num = $_GPC['num'];
      $shuju = floatval($num);
      $res= pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id ='{$orderid}'");
      if($type=='1'){
       $row = unserialize($res['content']);
       foreach ($row as $key => $value) {
        if($id ==  $value['id']){
          $row[$key]['shuju'] = $shuju;
        }
       }
       pdo_update('hyb_yl_tijianorder',array('content'=>serialize($row)),array('id'=>$orderid));
      }
      if($type=='2'){
       $row = unserialize($res['addproject']);
       foreach ($row as $key => $value) {
        if($id ==  $value['id']){
           $row[$key]['shuju'] = $shuju;
        }
       }
       pdo_update('hyb_yl_tijianorder',array('addproject'=>serialize($row)),array('id'=>$orderid));
      }
     
     
      echo json_encode($row);
  }
  public function erweima(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $id = $_GPC['id'];//套餐id
      $orderid = $_GPC['orderid'];
      $title = $_GPC['title'];
      $type = $_GPC['type'];
      $ifcz =$_GPC['ifcz'];
      if($ifcz=='1'){
          $rowArr = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id ='{$orderid}'");
      }else{
          $qr_path = "../attachment/";
          if(!file_exists($qr_path.'hyb_yl/')){
              mkdir($qr_path.'hyb_yl/', 0700,true);//判断保存目录是否存在，不存在自动生成文件目录
          }
          $filename = 'hyb_yl/'.time().'.png';
          $file = $qr_path.$filename; 
          $access = json_decode($this->get_access_token(),true);
          $access_token= $access['access_token'];
          $url = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='.$access_token;

          $qrcode = array(
              'scene'         => $id.'&orderid='.$orderid.'&type='.$type,//二维码所带参数
              'width'         => 200,
              'page'          => 'hyb_yl/mysubpages/pages/phyDetail/phyDetail',
              'auto_color'    => true
          );

          $result = $this->sendCmd($url,json_encode($qrcode));//请求微信接口
          $res = file_put_contents($file,$result);//将微信返回的图片数据流写入文件
          $erweima = tomedia($filename);

          //将二维码保存数据库
          $res = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id ='{$orderid}'");
         
          if($type=='1'){
           $row = unserialize($res['content']);
           foreach ($row as $key => $value) {
            if($id ==  $value['id']){
              $row[$key]['erweima'] = $erweima;
              $row[$key]['ifcz'] = 1;
            }
           }
           pdo_update('hyb_yl_tijianorder',array('content'=>serialize($row)),array('id'=>$orderid));
          }
          if($type=='2'){
           $row = unserialize($res['addproject']);
           foreach ($row as $key => $value) {
            if($id ==  $value['id']){
               $row[$key]['erweima'] = $erweima;
               $row[$key]['ifcz'] = 1;
            }
           }
           pdo_update('hyb_yl_tijianorder',array('addproject'=>serialize($row)),array('id'=>$orderid));
          }
         $rowArr = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id ='{$orderid}'");
      }
      
      if($rowArr){
       $rowArr['content'] = unserialize($rowArr['content']);
       $rowArr['addproject'] = unserialize($rowArr['addproject']);

      }
      echo json_encode($rowArr);
  }
  public function taocandetail(){
    //
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $tjid = $_GPC['tjid'];
      $res = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijian_project')."where uniacid='{$uniacid}' and id='{$tjid}'");
      echo json_encode($res);
  }
    public function updatebaogao(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $id = $_GPC['id'];
      $res = pdo_update('hyb_yl_tijianorder',array('ifover'=>1,'wactime'=>date("Y-m-d H:i:s")),array('id'=>$id,'uniacid'=>$uniacid));
      echo json_encode($res);
  }
    public function addsuggest(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['id'];
        $wzid = $_GPC['wzid'];
        $zid = $_GPC['zid'];
        $back_orser = $_GPC['back_orser'];
        $datalist = $this->jsondata($_GPC['data']);
        $data = array(
          'data'=>serialize($datalist),
          'ifjd'=>1
          );
        $res = pdo_update('hyb_yl_tijianorder',$data,array('id'=>$id,'uniacid'=>$uniacid));
        echo json_encode($res);
    }
   public function deleteorder(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['id'];
        $res = pdo_delete('hyb_yl_tijianorder',array('id'=>$id,'uniacid'=>$uniacid));
        echo json_encode($res);
   }
   public function updateqorder(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['id'];
        $res = pdo_update('hyb_yl_tijianorder',array('ifgb'=>1),array('id'=>$id,'uniacid'=>$uniacid));
        echo json_encode($res);
   }
   public function getoneorder(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $id = $_GPC['tjorder'];
        $res = pdo_fetch("SELECT * FROM".tablename('hyb_yl_tijianorder')."where uniacid='{$uniacid}' and id ='{$id}'");
        $j_id =$res['j_id'];
        $hid = $res['bm_id'];
        $res['time'] = date('Y-m-d H:i:s',$res['time']);
        $res['user'] = pdo_get('hyb_yl_userjiaren',array('j_id'=>$j_id),array('names','sex','age'));
        $res['hospital'] = pdo_get('hyb_yl_hospital',array('hid'=>$hid),array('agentname','logo'));
        $res['hospital']['logo'] = tomedia($res['hospital']['logo']);
        echo json_encode($res);
   }
   //提醒体检专家
     public function tijmsgmobel(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $yy_time= $_GPC['yy_time'];
        $tid= $_GPC['tid'];
        $j_id = $_GPC['j_id'];
        $bm_id = $_GPC['bm_id'];
        $ho_spital_in = pdo_get("hyb_yl_hospital",array('hid'=>$bm_id),array('agentname','openid'));
        $tao_can = pdo_get('hyb_yl_taocan',array('id'=>$tid),array('title','notes'));
        $cx_name = strip_tags(htmlspecialchars_decode($tao_can['notes']));
        $cx_name = str_replace(PHP_EOL, '',  $cx_name);
        $cx_name = str_replace(array("&nbsp;", "&ensp;", "&emsp;","&thinsp;","&zwnj;","&zwj;","&ldquo;","&rdquo;"), "", $cx_name);
 
        $openid = $ho_spital_in['openid'];
        $agentname = $ho_spital_in['agentname'];
        $docinfo = pdo_get("hyb_yl_zhuanjia",array('uniacid'=>$uniacid,'zid'=>$zid));

        $userinfo = pdo_get("hyb_yl_userjiaren",array('uniacid'=>$uniacid,'j_id'=>$j_id));
        $username = $userinfo['names'];
        $wxappaid = pdo_get('hyb_yl_parameter', array('uniacid' => $uniacid));
        $wxapp_mb = unserialize($wxappaid['wxapp_mb']);
        $appid = $wxappaid['appid'];
        $appsecret = $wxappaid['appsecret'];
        $template_id = $wxapp_mb['jobnotice']; 
        $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
        $getArr = array();
        $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
        $access_token = $tokenArr->access_token;
        $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' . $access_token;
        $data_time = date("Y-m-d H:i:s");
        $dd['data']  = [
          'thing1'   =>['value' =>$cx_name],
          'thing2'   =>['value' =>$username],
          'thing3'   =>['value' =>$yy_time],
          'thing4'   =>['value' =>$agentname],
          'thing5'   =>['value' =>$tao_can['title']],
        ];   
       $dd['touser'] = $openid;
       $dd['template_id'] = $template_id;
       $dd['page'] = 'hyb_yl/backstageFollowUp/pages/explanation/explanation?zid='.$zid; 
       $result1 = $this->https_curl_json($url, $dd, 'json');
       echo json_encode($dd);
     }
    //提醒体检患者
     public function usermsgmobel(){
        global $_GPC,$_W;
        $uniacid = $_W['uniacid'];
        $yy_time= $_GPC['yy_time'];
        $tid= $_GPC['tid'];
        $openid= $_GPC['openid'];
        $j_id = $_GPC['j_id'];
        $bm_id = $_GPC['bm_id'];
        $ho_spital_in = pdo_get("hyb_yl_hospital",array('hid'=>$bm_id),array('agentname','openid'));
        $tao_can = pdo_get('hyb_yl_taocan',array('id'=>$tid),array('title','notes'));
        $cx_name = strip_tags(htmlspecialchars_decode($tao_can['notes']));
        $cx_name = str_replace(PHP_EOL, '',  $cx_name);
        $cx_name = str_replace(array("&nbsp;", "&ensp;", "&emsp;","&thinsp;","&zwnj;","&zwj;","&ldquo;","&rdquo;"), "", $cx_name);
        $agentname = $ho_spital_in['agentname'];
        $docinfo = pdo_get("hyb_yl_zhuanjia",array('uniacid'=>$uniacid,'zid'=>$zid));

        $userinfo = pdo_get("hyb_yl_userjiaren",array('uniacid'=>$uniacid,'j_id'=>$j_id));
        $username = $userinfo['names'];
        $wxappaid = pdo_get('hyb_yl_parameter', array('uniacid' => $uniacid));
        $wxapp_mb = unserialize($wxappaid['wxapp_mb']);
        $appid = $wxappaid['appid'];
        $appsecret = $wxappaid['appsecret'];
        $template_id = $wxapp_mb['jobnotice']; 
        $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appsecret}";
        $getArr = array();
        $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
        $access_token = $tokenArr->access_token;
        $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' . $access_token;
        $data_time = date("Y-m-d H:i:s");
        $dd['data']  = [
          'thing1'   =>['value' =>$cx_name],
          'thing2'   =>['value' =>$username],
          'thing3'   =>['value' =>$yy_time],
          'thing4'   =>['value' =>$agentname],
          'thing5'   =>['value' =>$tao_can['title']],
        ];   
       $dd['touser'] = $openid;
       $dd['template_id'] = $template_id;
       $dd['page'] = 'hyb_yl/backstageFollowUp/pages/explanation/explanation?zid='.$zid; 
       $result1 = $this->https_curl_json($url, $dd, 'json');
       echo json_encode($dd);
     }
     //短信提醒管理员
     public function msgtzadmin(){
        global $_GPC, $_W;
        $params = array();
        $uniacid = $_W['uniacid'];
        $id = $_GPC['tid'];
        $yy_time = $_GPC['yy_time'];
        require_once dirname(dirname(dirname(__FILE__))). '/inc/SignatureHelper.php';
        $res = pdo_fetch('SELECT * FROM' . tablename('hyb_yl_taocan') . "where uniacid ='{$uniacid}' and id='{$id}' ");
        $aliduanxin = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_duanxin") . "WHERE uniacid = '{$uniacid}' ");
        $mobel = unserialize($aliduanxin['moban_id']);
        if ($aliduanxin['stadus'] == 1 ) {
            $j_id = $_GPC['j_id'];
            $myinfo = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_userjiaren") . "WHERE uniacid = '{$uniacid}' and  j_id ='{$j_id}'");
            $name = $myinfo['names'];
            $phoneNum = $myinfo['tel'];
            $zid = $res['zid'];
            $doname = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "as a left join" . tablename('hyb_yl_ceshi') . "as b on b.id=a.parentid WHERE a.uniacid = '{$uniacid}' and a.zid ='{$zid}'");
            $doctor = $doname['z_name'];
            $ksname = $doname['name'];
            $accessKeyId = $aliduanxin['key'];
            $accessKeySecret = $aliduanxin['scret'];
            $params["PhoneNumbers"] = $phoneNum;
            $params["SignName"] = $aliduanxin['qianming'];
            $params["TemplateCode"] = $mobel['tjqxmobel'];
            $params['TemplateParam'] = Array('name' => $name, 'tel' => $phoneNum,'taocantitle'=>$res['title'],'time'=>$yy_time);
            if (!empty($params["TemplateParam"]) && is_array($params["TemplateParam"])) {
                $params["TemplateParam"] = json_encode($params["TemplateParam"]);
            }
            $helper = new SignatureHelper();
            $content = $helper->request($accessKeyId, $accessKeySecret, "dysmsapi.aliyuncs.com", array_merge($params, array("RegionId" => "cn-hangzhou", "Action" => "SendSms", "Version" => "2017-05-25",)));
            echo json_encode($params);
        }
     }
    //开启curl get请求    
    public function curl_get($url) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $data = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        return $data;
    }
    public function get_access_token(){
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $result = pdo_fetch('SELECT * FROM ' . tablename('hyb_yl_parameter') . " where `uniacid`='{$uniacid}' ", array(":uniacid" => $uniacid));
        $appid = $result['appid'];
        $secret = $result['appsecret'];
        $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$secret}";
        return $this->curl_get($url);
    }
    public  function sendCmd($url,$data)
    {
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检测
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Expect:')); //解决数据包大不能提交
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回

        $tmpInfo = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            echo 'Errno'.curl_error($curl);
        }
        curl_close($curl); // 关键CURL会话
        return $tmpInfo; // 返回数据
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


