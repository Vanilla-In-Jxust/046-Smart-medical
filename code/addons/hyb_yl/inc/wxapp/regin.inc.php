<?php
/**
* 
*/
require_once(IA_ROOT . '/framework/library/qrcode/phpqrcode.php');
 class Regin extends HYBPage
 { 
 //注册
   public function zhuce()
  {
    global $_GPC, $_W;
    $uniacid = $_W['uniacid'];
    $zid = $_GPC['zid'];
    $data['uniacid'] = $_W['uniacid'];
    $data['openid'] = $_REQUEST['openid'];
    $data['z_name'] = $_REQUEST['z_name'];
    $data['z_content'] = $_REQUEST['z_content'];
    $data['hid'] = $_REQUEST['hid'];
    $data['z_room'] = $_REQUEST['z_room'];
    $data['parentid'] = $_REQUEST['parentid'];
    $data['z_zhicheng'] = $_REQUEST['z_zhicheng'];
    $data['z_sex'] = $_REQUEST['z_sex'];
    $data['zgzimgurl1back'] = $_GPC['zgzimgurl1back'];
    $data['sfzimgurl1back'] = $_GPC['sfzimgurl1back'];
    $data['sfzimgurl2back'] = $_GPC['sfzimgurl2back'];
    $data['advertisement'] = $_GPC['advertisement'];
    $data['sfzbianhao'] = $_GPC['sfzbianhao'];
    $data['address'] = $_GPC['address'];
    $data['lat'] = $_GPC['lat'];
    $data['lng'] = $_GPC['lng'];
    $data['authority'] = $_GPC['authority'];
    $data['z_telephone'] = $_GPC['z_telephone'];
    $data['qx_id'] = $_GPC['qx_id'];
    $data['is_green'] = $_GPC['is_green'];
    $data['is_examine'] = $_GPC['is_examine'];
    $data['is_urgent'] = $_GPC['is_urgent'];
    $row = pdo_get('hyb_yl_zhuanjia_rule',array('uniacid'=>$uniacid),array('is_ruzhu'));
    if($row['is_ruzhu'] =='1'){
      $data['exa'] = 1;
    }else{
      $data['exa'] = 0;
    }
    if (!empty($zid)) {
        $res = pdo_update("hyb_yl_zhuanjia", $data, array("zid" => $zid, "uniacid" => $uniacid));
    } else {
        $data['opentime'] = strtotime('now');
        $res = pdo_insert("hyb_yl_zhuanjia", $data);
        $zid = pdo_insertid();

    }
    $Dmoney = pdo_fetch("SELECT * FROM " . tablename("hyb_yl_zhuanjia") . "WHERE zid = '{$zid}' and uniacid='{$uniacid}'");
    //生成二维码
    if (empty($Dmoney['weweima'])) {
        $dir = iconv("UTF-8", "GBK", "../attachment/hyb_yl");
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        $result = pdo_fetch('SELECT * FROM ' . tablename('hyb_yl_parameter') . " where `uniacid`='{$uniacid}' ", array(":uniacid" => $uniacid));
        $APPID = $result['appid'];
        $SECRET = $result['appsecret'];
        $tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$APPID}&secret={$SECRET}";
        $getArr = array();
        $tokenArr = json_decode($this->send_post($tokenUrl, $getArr, "GET"));
        $access_token = $tokenArr->access_token;
        $data = array();
        $data['scene'] = "zid=" . $zid;
        $data['page'] = "hyb_yl/czhuanjiasubpages/pages/zhuanjiazhuye/zhuanjiazhuye";
        $data = json_encode($data);
        $url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" . $access_token;
        $result = $this->api_notice_increment($url, $data);
        $image_name = md5(uniqid(rand())) . ".jpg";
        $filepath = "../attachment/hyb_yl/{$image_name}";
        $file_put = file_put_contents($filepath, $result);
        if ($file_put) {
            $siteroot = $_W['siteroot'];
            $filepathsss = "attachment/hyb_yl/{$image_name}";
            $phone = pdo_getcolumn('hyb_yl_zhuanjia', array('zid' => $zid), 'weweima');
            if($_GPC['advertisement'])
            {
              $erweimas = $this->changeAvatar("../".$filepathsss,$_GPC['advertisement'],$zid);
              $erweimas = substr($erweimas, 3);
              $datas = array('weweima' => $erweimas);
              $getupdate = pdo_update("hyb_yl_zhuanjia", $datas, array('zid' => $zid, 'uniacid' => $uniacid));
            }
            
            
        }
    } 
    echo json_encode($res);
  }
  public function yuan_img($imgpath) {
        $ext     = pathinfo($imgpath);
        $src_img = null;
        switch ($ext['extension']) {
        case 'jpg':
            $src_img = imagecreatefromjpeg($imgpath);
            break;
        case 'png':
            $src_img = imagecreatefromjpeg($imgpath);
            break;
        }

        $wh  = getimagesize($imgpath);
        $w   = $wh[0];
        $h   = $wh[1];
        $w   = min($w, $h);
        $h   = $w;
        $img = imagecreatetruecolor($w, $h);
        //这一句一定要有
        imagesavealpha($img, true);
        //拾取一个完全透明的颜色,最后一个参数127为全透明
        $bg = imagecolorallocatealpha($img, 255, 255, 255, 127);
        imagefill($img, 0, 0, $bg);
        $r   = $w / 2; //圆半径
        $y_x = $r; //圆心X坐标
        $y_y = $r; //圆心Y坐标
        for ($x = 0; $x < $w; $x++) {
            for ($y = 0; $y < $h; $y++) {
                $rgbColor = imagecolorat($src_img, $x, $y);
                if (((($x - $r) * ($x - $r) + ($y - $r) * ($y - $r)) < ($r * $r))) {
                    imagesetpixel($img, $x, $y, $rgbColor);
                }
            }
        }

        return $img;
    }
  public function changeAvatar($file_code_name,$avatar,$zid){
      //保存原始头像
      $img_file = file_get_contents($avatar);  //小程序传的头像是网络地址需要周转一下
      $img_content= base64_encode($img_file);
      $headurl = "../attachment/hyb_yl/".md5(uniqid(rand())) . ".jpg";
      file_put_contents($headurl,base64_decode($img_content));

      $imgg = $this->yuan_img($headurl); 

      $file_name = "../attachment/hyb_yl/".md5(uniqid(rand())) . ".jpg";
      imagepng($imgg,$file_name);
      imagedestroy($imgg);

      // 缩小头像（原图为1080，430的小程序码logo为192）
      $target_im = imagecreatetruecolor(200,200);     //创建一个新的画布（缩放后的），从左上角开始填充透明背景   
      imagesavealpha($target_im, true); 
      $trans_colour = imagecolorallocatealpha($target_im, 0, 0, 0, 127); 
      imagefill($target_im, 0, 0, $trans_colour);                
       
      $o_image = imagecreatefrompng($file_name);   //获取上文已保存的修改之后头像的内容
      imagecopyresampled($target_im,$o_image, 0, 0,0, 0, 200, 200, 200, 200);
      $file_head_name = "../attachment/hyb_yl/".md5(uniqid(rand())) . ".jpg";
      $comp_path = $file_head_name;
      imagepng($target_im,$comp_path);
      imagedestroy($target_im);

      // 进行拼接（使用加水印方式把处理过后的头像盖住logo）
      //传入保存后的二维码地址
      $url = $this->create_pic_watermark($file_code_name,$comp_path,"center",$zid); //处理完的新小程序码
      
      return $url;
  }

  public function create_pic_watermark($dest_image,$watermark,$locate,$zid){
      list($dwidth,$dheight,$dtype)=getimagesize($dest_image);
      list($wwidth,$wheight,$wtype)=getimagesize($watermark);
      $types=array(1 => "GIF",2 => "JPEG",3 => "PNG",
          4 => "SWF",5 => "PSD",6 => "BMP",
          7 => "TIFF",8 => "TIFF",9 => "JPC",
          10 => "JP2",11 => "JPX",12 => "JB2",
          13 => "SWC",14 => "IFF",15 => "WBMP",16 => "XBM");
      $dtype=strtolower($types[$dtype]);//原图类型
      $wtype=strtolower($types[$wtype]);//水印图片类型
      $created="imagecreatefrom".$dtype;
      $createw="imagecreatefrom".$wtype;
      $imgd=$created($dest_image);
      $imgw=$createw($watermark);
      switch($locate){
          case 'center':
              $x=($dwidth-$wwidth)/2;
              $y=($dheight-$wheight)/2;
              break;
          case 'left_buttom':
              $x=1;
              $y=($dheight-$wheight-2);
              break;
          case 'right_buttom':
              $x=($dwidth-$wwidth-1);
              $y=($dheight-$wheight-2);
              break;
          default:
              die("未指定水印位置!");
              break;
      }
      imagecopy($imgd,$imgw,$x,$y,0,0, $wwidth,$wheight);
      $save="image".$dtype;
      //保存到服务器
      $f_file_name = "../attachment/hyb_yl/".$zid . ".jpg";
      imagepng($imgd,$f_file_name); //保存
      imagedestroy($imgw);
      imagedestroy($imgd);
      //传回处理好的图片
      // $url = 'https://www.qubaobei.com/'.str_replace('/opt/ci123/www/html/markets/app2/baby/','',$f_file_name);
      $url = str_replace('/opt/ci123/www/html/markets/app2/baby/','',$f_file_name);
      return $url;
  }
 //专家信息
  public function zjinfo(){
     global $_W, $_GPC;
      $id = intval($_REQUEST['id']);
      $uniacid = $_W['uniacid'];
      $seunseinfo = pdo_fetch('SELECT a.*,b.*,c.agentname,d.job_name FROM' . tablename('hyb_yl_zhuanjia') . "as a left join" . tablename('hyb_yl_ceshi') . " as b on a.parentid = b.id left join".tablename('hyb_yl_hospital')."as c on c.hid=a.hid left join".tablename('hyb_yl_zhuanjia_job')."as d on d.id=a.z_zhicheng WHERE a.uniacid = '{$uniacid}' and a.zid='{$id}' ");
      $qx_id = $seunseinfo['qx_id'];
      $seunseinfo['jigouqx'] = pdo_fetch("select * from".tablename('hyb_yl_hospital_diction')."where id='{$qx_id}'");
      $seunseinfo['advertisement']=tomedia($seunseinfo['advertisement']);
      $seunseinfo['zgzimgurl1back'] = tomedia($seunseinfo['zgzimgurl1back']);
      $seunseinfo['sfzimgurl2back'] = tomedia($seunseinfo['sfzimgurl2back']);
      $seunseinfo['sfzimgurl1back'] = tomedia($seunseinfo['sfzimgurl1back']);
      echo json_encode($seunseinfo);
   }
   //机构申请
   public function getorganlevel(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $row = pdo_fetchall("SELECT id,level_name FROM".tablename('hyb_yl_hospital_level')."WHERE uniacid='{$uniacid}' and level_type=1");
      echo json_encode($row);
   }
     //机权限
   public function jurisdiction(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $row = pdo_fetchall("SELECT id,name FROM".tablename('hyb_yl_hospital_diction')."WHERE uniacid='{$uniacid}' and state=1");
      echo json_encode($row);
   }
   //添加机构
   public function addjigou(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $hid = $_GPC['hid'];
      $state = $_GPC['state'];
        $data['uniacid'] = $uniacid;
        $data['agentname'] = $_GPC['agentname'];
        $data['logo'] = $_GPC['logo'];
        $data['longitude'] = $_GPC['longitude'];
        $data['latitude']  = $_GPC['latitude'];
        $data['address']   = $_GPC['address'];
        $data['groupid']   = $_GPC['groupid'];
        $data['grade']     = $_GPC['grade'];
        $data['realname']  = $_GPC['realname'];
        $data['hospitaltel'] = $_GPC['hospitaltel'];
        $data['xxaddress'] = $_GPC['xxaddress'];
        $data['openid'] = $_GPC['openid'];
        $data['username'] = $_GPC['username'];
        $data['zctime'] = strtotime('now');
        $data['type_da'] = 1;
        $data['districtslevel'] =3;
        $data['city'] = $_GPC['cityid'];
        $data['district'] = $_GPC['districtid'];
        $data['province'] = $_GPC['provinceid'];
        $data['lntroduction'] = $_GPC['lntroduction'];
        $data['bank_num'] = $_GPC['bank_num'];
        $data['bank_user'] = $_GPC['bank_user'];
        $data['bank_name'] = $_GPC['bank_name'];
        
        if(empty($hid)){
          $password = $_GPC['password']; 
          $random = random(6); 
          $salt =md5(md5($random . $password) . $random);
          $hash = user_hash($password , $salt);
          $data['password'] =$hash;
          $data['backpassword'] = '123456789';
          $row = pdo_insert('hyb_yl_hospital',$data);
        }else{
          if($state==5){
          $data['state'] = 0; 
          $row = pdo_update('hyb_yl_hospital',$data,array('hid'=>$hid));
          }
          if($state=='1'){
          $data['state'] = 0; 
          $row = pdo_update('hyb_yl_hospital',$data,array('hid'=>$hid));
          }
        }
        echo json_encode($row);
   }
   public function jigouif(){
      global $_GPC,$_W;
      $uniacid = $_W['uniacid'];
      $openid = $_GPC['openid'];
      $res = pdo_fetch("SELECT a.*,b.level_name,c.name FROM".tablename('hyb_yl_hospital')."as a left join".tablename('hyb_yl_hospital_level')."as b on b.id=a.grade left join".tablename('hyb_yl_hospital_diction')."as c on c.id = a.groupid WHERE a.uniacid='{$uniacid}' and a.type_da=1 and a.openid='".$openid."'");
      $res['logo'] = tomedia($res['logo']);
      echo json_encode($res);
   }
   //查询机构的id select * from table_name where domain regexp 'baidu';
   public function getjigouid(){
    global $_GPC,$_W;
    $uniacid = $_W['uniacid'];
    $province = $_GPC['province'];
    $city = $_GPC['city'];
    $district = $_GPC['district'];
    $res="";
    $sql1 ="select * from ".tablename('hyb_yl_address')." where name regexp '".$province."' and level=1";
    $sql2 ="select * from ".tablename('hyb_yl_address')." where name regexp '".$city."' and level=2";
    $sql3 ="select * from ".tablename('hyb_yl_address')." where name regexp '".$district."' and level=3";
    $res['province'] = pdo_fetch($sql1);
    $res['city'] = pdo_fetch($sql2);
    $res['district'] = pdo_fetch($sql3);
    echo json_encode($res);
   }
}


