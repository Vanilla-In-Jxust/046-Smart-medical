<?php defined('IN_IA') or exit('Access Denied');?><html lang="zh-cn">
<head><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style> 
  <meta charset="utf-8"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title><?php  echo $_W['uniaccount']['name'];?></title> 
  <link rel="shortcut icon" href="<?php  echo $_W['siteroot'];?>/attachment/images/global/wechat.jpg"> 
  <link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/web/resource/css/bootstrap.min.css"> 
  <link rel="stylesheet" href="/addons/hyb_yl/web/resource/components/font-awesome-4.6.3/css/font-awesome.min.css"> 
  <link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/app/resource/components/icon/iconfont.css"> 
  <link href="<?php  echo $_W['siteroot'];?>/web/resource/css/common.css?v=20170802" rel="stylesheet"> 
  <link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/css/common_v2.css"> 
  <link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/css/style.min.css"> 
	<script type="text/javascript">
	if(navigator.appName == 'Microsoft Internet Explorer'){
		if(navigator.userAgent.indexOf("MSIE 5.0")>0 || navigator.userAgent.indexOf("MSIE 6.0")>0 || navigator.userAgent.indexOf("MSIE 7.0")>0) {
			alert('您使用的 IE 浏览器版本过低, 推荐使用 Chrome 浏览器或 IE8 及以上版本浏览器.');
		}
	}
	window.sysinfo = {
		'uniacid': '5',		'acid': '5',				'uid': '1',				'siteroot': '<?php  echo $_W['siteroot'];?>/',
		'siteurl': 'index.php?c=site&a=entry&do=dashboard&op=gk&m=hyb_yl&ac=dashboard',
		'attachurl': 'https://caiji123258.oss-cn-beijing.aliyuncs.com/',
		'attachurl_local': '<?php  echo $_W['siteroot'];?>/attachment/',
		'attachurl_remote': 'https://caiji123258.oss-cn-beijing.aliyuncs.com/',
		'MODULE_URL': '<?php  echo $_W['siteroot'];?>/addons/hyb_yl/',		'cookie' : {'pre': 'a8ba_'},
		'account' : {"acid":"5","uniacid":"5","token":"z76rlmnlvYKoHNyyTUzztUz77G0HpkNy","encodingaeskey":"c6ZRrNd0awWan6S181bzs7bf0861D0w888DRRzfI0I7","level":"1","account":"","original":"gh_6005ca48bbf2","key":"wx206380818e1922b5","secret":"9ec4fceeb10df7d6f9d0aebc8c66aee9","name":"\u601d\u521b\u62d3\u5ba2","appdomain":"","auth_refresh_token":"","encrypt_key":"wx206380818e1922b5","hash":"gGGl54u4","type":"4","isconnect":"0","isdeleted":"0","endtime":"0","groupid":"0","description":"","default_acid":"5","rank":null,"title_initial":"S","type_sign":"wxapp","starttime":"0","groups":[],"setting":{"uniacid":"5","passport":"","oauth":"","jsauth_acid":"0","uc":"","notify":"","creditnames":{"credit1":{"title":"\u79ef\u5206","enabled":1},"credit2":{"title":"\u4f59\u989d","enabled":1}},"creditbehaviors":{"activity":"credit1","currency":"credit2"},"welcome":"","default":"","default_message":"","payment":"","stat":"","default_site":null,"sync":"0","recharge":"","tplnotice":"","grouplevel":"0","mcplugin":"","exchange_enable":"0","coupon_type":"0","menuset":"","statistics":"","bind_domain":"","comment_status":"0","reply_setting":"0","default_module":"","attachment_limit":null,"attachment_size":null,"sync_member":"0"},"grouplevel":"0","logo":"https:\/\/caiji123258.oss-cn-beijing.aliyuncs.com\/headimg_5.jpg?time=1583481558","qrcode":"https:\/\/caiji123258.oss-cn-beijing.aliyuncs.com\/qrcode_5.jpg?time=1583481558","type_name":"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f","switchurl":".\/index.php?c=account&a=display&do=switch&uniacid=5","setmeal":{"uid":-1,"username":"\u521b\u59cb\u4eba","timelimit":"\u672a\u8bbe\u7f6e","groupid":"-1","groupname":"\u6240\u6709\u670d\u52a1"},"current_user_role":"founder"}	};
	</script>
 <!--<script>var require = { urlArgs: 'v=2020030409' };</script> -->
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/web/resource/js/lib/jquery-1.11.1.min.js"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/js/vue.js"></script> 
  <script src="https://cdn.bootcss.com/html2canvas/0.5.0-beta4/html2canvas.js"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/components/layer/layer.js"></script><link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/components/layer/skin/layer.css" id="layui_layer_skinlayercss" style=""><link rel="stylesheet" href="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/components/layer/skin/layer.css" id="layui_layer_skinlayercss" style=""> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/web/resource/js/lib/bootstrap.min.js?v=20170208"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/js/util.js"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/web/resource/js/app/common.min.js"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/web/resource/js/require.js"></script> 
  <script type="text/javascript" src="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/js/weliam.js"></script> 
  <script src="<?php  echo $_W['siteroot'];?>/addons/hyb_yl/web/resource/js/common.js"></script> 
 </head>
<body>