<?php 
	global $_W,$_GPC;
  $_W['plugin'] ='setting';
  $selclass ='selclass';
  $op = isset($_GPC['op'])?$_GPC['op']:'basesite';
  $uniacid =$_W['uniacid'];
  $type_id = $_GPC['type_id'];
  $res = pdo_get('hyb_yl_base',array('uniacid'=>$uniacid));
  $res['show_thumb'] = unserialize($res['show_thumb']);
  $res['advertisement'] = unserialize($res['advertisement']);
  $res['back_zjthumb']  = unserialize($res['back_zjthumb']);
  $res['tj_thumb']      = unserialize($res['tj_thumb']);
  $res['goodslunb']     = unserialize($res['goodslunb']);
	if($op=='basesite'){
    if($_W['ispost']){
     $data =array(
          'uniacid'    => $_W['uniacid'],
          'show_title' => $_GPC['show_title'],
          'show_thumb' => serialize($_GPC['show_thumb']),
          'baidukey'   => $_GPC['baidukey'],
          'advertisement' => serialize($_GPC['advertisement']),
          'back_zjthumb'  => serialize($_GPC['back_zjthumb']),
           'goodslunb'  => serialize($_GPC['goodslunb']),
          'tj_thumb'  => serialize($_GPC['tj_thumb']),
          'ztcolor'   => $_GPC['ztcolor'],
          'state'     => $_GPC['state'],
          "content" => $_GPC['content'],
          "is_search" => $_GPC['is_search'],
          'bq_thumb' => $_GPC['bq_thumb'],
          'yy_thumb' => $_GPC['yy_thumb'],
          'slide'    => $_GPC['slide'],
          "is_hospital" => $_GPC['is_hospital'],
          
      );
        if(!empty($res['id'])){
            pdo_update('hyb_yl_base',$data,array('id'=>$res['id']));
  
        }else{
            pdo_insert('hyb_yl_base',$data);
            
        }
        message("操作成功!",$this->createWebUrl("base",array("op"=>"basesite",'ac'=>'base')),"success");
    }
    include $this->template('base/basic-setting');
	}
   if($op=='pianshen'){
   if($_W['ispost']){
        $data =array(
           'uniacid'    => $_W['uniacid'],
           'pstatus'    => $_GPC['pstatus'],
           'slide'      => serialize($_GPC['slide']),
          );

        if(!empty($res['id'])){
            pdo_update('hyb_yl_base',$data,array('id'=>$res['id']));
            message('成功', 'refresh', 'success');
        }else{
            pdo_insert('hyb_yl_base',$data);
            message('成功', 'refresh', 'success');
        }
   }
    include $this->template('base/pianshen');
  }
   if($op=='hospital'){
   if($_W['ispost']){
        $data =array(
           'uniacid'    => $_W['uniacid'],
           'yy_thumb'   => $_GPC['yy_thumb'],
           'yy_title'   => $_GPC['yy_title'],
           'lntroduction'   => $_GPC['lntroduction'],
           'longitude'   => $_GPC['log']['lng'],
           'latitude'    => $_GPC['log']['lat'],
           'yy_address'  => $_GPC['yy_address'],
           'yy_telphone' => $_GPC['yy_telphone'],
           'yy_title'    => $_GPC['yy_title'],
           'bq_name'     => $_GPC['bq_name'],
           'bq_thumb'    => $_GPC['bq_thumb'],
           'bq_telphone' => $_GPC['bq_telphone'],
           'grade'       => $_GPC['grade']

          );
        if(!empty($res['id'])){
            pdo_update('hyb_yl_base',$data,array('id'=>$res['id']));
            message('成功', 'refresh', 'success');
        }else{
            pdo_insert('hyb_yl_base',$data);
            message('成功', 'refresh', 'success');
        }
   }
  	include $this->template('base/hospital');
  }
     if($op=='servesite'){
     if($_W['ispost']){
          $data =array(
             'uniacid'    => $_W['uniacid'],
             'fwsite'     => $_GPC['fwsite'],
            );
          if(!empty($res['id'])){
              pdo_update('hyb_yl_base',$data,array('id'=>$res['id']));
              message('成功', 'refresh', 'success');
          }else{
              pdo_insert('hyb_yl_base',$data);
              message('成功', 'refresh', 'success');
          }
        }
    include $this->template('base/site');
  }
     if($op=='tixian'){
      if($_W['ispost']){
          $data =array(
             'uniacid'    => $_W['uniacid'],
             'txxz'       => $_GPC['txxz'],
             'zdtx'       => $_GPC['zdtx'],
             'txsx'       => $_GPC['txsx'],
            );
          if(!empty($res['id'])){
              pdo_update('hyb_yl_base',$data,array('id'=>$res['id']));
              message('成功', 'refresh', 'success');
          }else{
              pdo_insert('hyb_yl_base',$data);
              message('成功', 'refresh', 'success');
          }
        }
    include $this->template('base/tixian');
  }
  //充值设置
  if($op=='czsite'){
    $item = pdo_get("hyb_yl_recharge",array("uniacid"=>$uniacid));

    if($item)
    {
      $item['content'] = unserialize($item['content']);
    }
    if($_W['ispost']){

      $data = array(
        'status' => $_GPC['status'],
        "content" => serialize($_GPC['recharge']),
        "uniacid" => $_W['uniacid'],
      );

      if($item)
      {
        pdo_update("hyb_yl_recharge",$data,array("uniacid"=>$uniacid));
      }else{
        $data['created'] = time();
        pdo_insert("hyb_yl_recharge",$data);
      }
      message('成功', 'refresh', 'success');
    }
  include $this->template('base/czsite');
  }
  //积分设置
  if($op=='jfsite'){
    $item = pdo_get("hyb_yl_integral_set",array("uniacid"=>$uniacid));
    if($_W['ispost'])
    {
      $data = array(
          'uniacid' => $uniacid,
          'evaluate_score' => $_GPC['evaluate_score'],
          'status' => $_GPC['status'],
          "proportion" => $_GPC['proportion'],

      );
      if($item)
      {
        pdo_update("hyb_yl_integral_set",$data,array("uniacid"=>$uniacid));
      }else{
        $data['created'] = time();
        pdo_insert("hyb_yl_integral_set",$data);
      }
      message('成功', 'refresh', 'success');
    }
  include $this->template('base/jfsite');
  }
  //文字设置
  if($op=='wjsite'){
  include $this->template('base/wjsite');
  }
  //入驻设置
  if($op=='rzsite'){
  include $this->template('base/rzsite');
  }
  //支付设置
  if($op=='zfsite'){
    load()->func('file'); //调用上传函数
    $dir_url=$_SERVER['DOCUMENT_ROOT'].'/web/cert/hyb_yl/'; //上传路径
    mkdirs($dir_url); 
    //创建目录
    if ($_FILES["upfile"]["name"]){
      $upfile=$_FILES["upfile"]; 
    //获取数组里面的值 
    $name=$upfile["name"];//上传文件的文件名 
    $size=$upfile["size"];//上传文件的大小 
    if($size>2*1024*1024) {  

      message("文件过大，不能上传大于2M的文件!",$this->createWebUrl("pay",array("op"=>"display")),"success"); 
      exit();  
    } 
    if(file_exists($dir_url))@unlink ($dir_url);

    $cfg['upfile']=TIMESTAMP.".pem";
    move_uploaded_file($_FILES["upfile"]["tmp_name"],$dir_url.$upfile["name"]); //移动到目录下
    $upfiles = $dir_url.$name;
    
  }
  if ($_FILES["keypem"]["name"]){
      $upfile=$_FILES["keypem"]; 
      //获取数组里面的值 
      $name=$upfile["name"];//上传文件的文件名 
      //$type=$upfile["type"];//上传文件的类型 
      $size=$upfile["size"];//上传文件的大小 
      if($size>2*1024*1024) {  
        message("文件过大，不能上传大于2M的文件!",$this->createWebUrl("pay",array("op"=>"display")),"success");  
        exit();  
      }   
      if(file_exists($dir_url))@unlink ($dir_url);
      move_uploaded_file($_FILES["keypem"]["tmp_name"],$dir_url.$upfile["name"]); //移动到目录下
      $keypems = $dir_url.$name;

    }
  $res = pdo_get("hyb_yl_parameter",array('uniacid'=>$uniacid));
  $p_id = $_GPC['p_id'];
  if($_W['ispost']){

      $data = array(
            'uniacid' => $_W['uniacid'],
            'mch_id'  => $_GPC['mch_id'],
            'pub_api' => $_GPC['pub_api'],
            'pub_appid' => $_GPC['pub_appid'],
            'upfile'   =>$upfiles,
            'keypem'   =>$keypems,
        );
      if(!empty($p_id)){
        pdo_update('hyb_yl_parameter',$data,array('p_id'=>$p_id));
        message("修改成功!",$this->createWebUrl("base",array('op'=>'zfsite','ac'=>'zfsite')),"success");
     }else{
        pdo_insert('hyb_yl_parameter',$data);
        message("添加成功!",$this->createWebUrl("base",array('op'=>'zfsite','ac'=>'zfsite')),"success");
     }
  }

  include $this->template('base/zfsite');
  }
  //短信消息
  if($op=='dxmsg'){

  include $this->template('base/dxmsg');
  }
 //短信消息添加
  if($op=='dxmsgadd'){
  include $this->template('base/dxmsgadd');
  }
  //参数设置
  if($op=='dxsys'){
    $res = pdo_get("hyb_yl_duanxin",array('uniacid'=>$uniacid));
    $moban_id = unserialize($res['moban_id']);
    $id = $_GPC['id'];
    $mobel =serialize($_GPC['mobel']);
    if($_W['ispost']){

        $data = array(
              'uniacid' => $_W['uniacid'],
              'key'     => $_GPC['key'],
              'scret'   => $_GPC['scret'],
              'qianming'=> $_GPC['qianming'],
              'tel'=> $_GPC['tel'],
              'templateid'=> $_GPC['templateid'],
              'moban_id'=>$mobel
          );
        if(!empty($id)){
          pdo_update('hyb_yl_duanxin',$data,array('id'=>$id));
          message("修改成功!",$this->createWebUrl("base",array('op'=>'dxsys','ac'=>'dxsys')),"success");
       }else{
          pdo_insert('hyb_yl_duanxin',$data);
          message("添加成功!",$this->createWebUrl("base",array('op'=>'dxsys','ac'=>'dxsys')),"success");
       }
    }
  include $this->template('base/dxsys');
  }
  //接口设置
  if($op=='jiekou'){
  $res = pdo_get("hyb_yl_parameter",array('uniacid'=>$uniacid));
  //查询所有物流
  $row = pdo_fetchall("select * from".tablename('hyb_yl_kuaidi')."where uniacid='{$uniacid}'");
  $p_id = $res['p_id'];
  $data =array(
     'uniacid'   =>$uniacid,
     'baidu_key' =>$_GPC['baidu_key'],
     'city_state'=>$_GPC['city_state'],
     'qie_city'  =>$_GPC['qie_city'],
     'appid'     =>$_GPC['appid'],
     'appsecret' =>$_GPC['appsecret'],
     'tencent_sdkappid'=>$_GPC['tencent_sdkappid'],
     'tencent_key'=>$_GPC['tencent_key'],
     'huaw_appid' =>$_GPC['huaw_appid'],
     'huaw_key'   =>$_GPC['huaw_key'],
     'wuliu_appid'=>$_GPC['wuliu_appid'],
     'wuliu_key'  =>$_GPC['wuliu_key'],
     'wuliu_state'=>$_GPC['wuliu_state'],
     'areaCode'   =>$_GPC['areaCode'],
     'wlid'       =>$_GPC['wlid'],
    );
  if($_W['ispost']){

      if(empty($p_id)){
        pdo_insert('hyb_yl_parameter',$data);
        message('成功', 'refresh', 'success');
      }else{
        pdo_update('hyb_yl_parameter',$data,array('p_id'=>$p_id));
        message('成功', 'refresh', 'success');
      }
  }
  
  include $this->template('base/jiekou');
  }
  //订阅消息
  if($op=='dymsg'){
    $res = pdo_get("hyb_yl_parameter",array('uniacid'=>$uniacid));
    $wxapp_mb = unserialize($res['wxapp_mb']);
    $p_id  =$_GPC['p_id'];
    if($_W['ispost']){
      $notice = $_GPC['notice'];
      $data = array(
         'wxapp_mb' => serialize($notice)
        );
      if(empty($p_id)){
         pdo_insert('hyb_yl_parameter',$data);
         message("添加成功!",$this->createWebUrl("base",array('op'=>'dymsg','ac'=>'dymsg')),"success");
      }else{
         pdo_update('hyb_yl_parameter',$data,array('p_id'=>$p_id));
         message("修改成功!",$this->createWebUrl("base",array('op'=>'dymsg','ac'=>'dymsg')),"success");
      }
    }
    include $this->template('base/dymsg');
  }
  if($op=='dxmsgadd'){
  include $this->template('base/dxmsgadd');
  }
  //小程序路径
  if($op=='scxsite'){
  include $this->template('base/scxsite');
  }
  //骗审设置
  if($op=='psimg'){
  include $this->template('base/psimg');
  }
