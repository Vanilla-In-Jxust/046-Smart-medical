<?php defined('IN_IA') or exit('Access Denied');?>			</div>
		</div>
	</div>
	<div class="foot" id="footer">
		<ul class="links ft">
            <li class="links_item"><div class="copyright"><?php  if(empty($_W['setting']['copyright']['footerleft'])) { ?>Powered by <a href="http://www.we7.cc"><b>微擎</b></a> v<?php echo IMS_VERSION;?> © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a><?php  } else { ?><?php  echo $_W['setting']['copyright']['footerleft'];?><?php  } ?></div></li>
		</ul>
	</div>
	
	<div id="page-loading">
        <div class="page-loading-inner">
            <div class="sk-spinner sk-spinner-three-bounce">
				<div class="sk-bounce1"></div>
				<div class="sk-bounce2"></div>
				<div class="sk-bounce3"></div>
			</div>
        </div>
    </div>
    <style>
    	#upgrade-modal-page{display: none;}
    	#upgrade-modal-page .upgrade-modal-mask{position: fixed;top: 0;bottom: 0;left: 0;right: 0;background-color: rgba(55, 55, 55, 0.6);height: 100%;z-index: 1000;}
    	#upgrade-modal-page .upgrade-modal{width: 600px;z-index: 1001;position: absolute;padding: 30px 50px;background: #ffffff;top: 50%;left: 50%;transform: translate(-50%,-50%);border-radius: 5px;}
    	#upgrade-modal-page .upgrade-modal img{display: block;margin: 0 auto 20px;width: 250px;}
    	#upgrade-modal-page .upgrade-modal .progress{margin-bottom: 0;height: 15px;}
    	#upgrade-modal-page .upgrade-modal .upgrade-modal-tip{text-align: center;margin-top: 20px;}
    </style>
    <div id="upgrade-modal-page">
    	<div class="upgrade-modal-mask">
    		<div class="upgrade-modal">
    			<div>
    				<img src="https://weilamdemo.oss-cn-qingdao.aliyuncs.com/upgrade.png"/>
    			</div>
	    		<div class="progress">
					<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
					    <span class="sr-only"></span>
					</div>
				</div>
				<div class="upgrade-modal-tip">
					系统正在处理更新以后的文件，请耐心等待~~~
				</div>
	    	</div>
    	</div>
    </div>
    
    <script>
		require(['bootstrap'], function ($) {
		    $('[data-toggle="tooltip"]').tooltip({
	            container: $(document.body)
	        });
	        $('[data-toggle="popover"]').popover({
	            container: $(document.body)
	        });
	        $('[data-toggle="dropdown"]').dropdown({
	            container: $(document.body)
	        });
	    });
		myrequire(['js/init']);
		<?php  if($_W['isfounder'] && $_W['plugin'] == 'dashboard' && empty($_W['setting']['site']['key'])) { ?>
	    function check_wl_upgrade() {
	        require(['util'], function (util) {
	            if (util.cookie.get('checkwlupgrade_sys')) {
	                return;
	            }
	            $.post('<?php  echo web_url("cloud/auth/check")?>', function (ret) {
	                if (ret.errno == 0 && ret.message.result == 1) {
                        var html = '<div class="dashb-header" id="upgrade-tips"><div class="dashb-check"><div class="dashb-check-l"><p>系统检测到有文件变化，请立即校验文件查看！</p><span>如有疑问请联系官方QQ：2972720130</span></div><div class="dashb-check-r"><a href="<?php  echo web_url('cloud/auth/upgrade')?>">立即校验</a><a href="javascript:;" onclick="check_wl_upgrade_hide();">忽略提醒</a></div></div></div>'
                        $('.pages-dashboard').prepend(html);
	                }
	            },'json');
	        });
	    }
	    function check_wl_upgrade_hide() {
	        require(['util'], function (util) {
	            util.cookie.set('checkwlupgrade_sys', 1, 3600);
	            $('#upgrade-tips').fadeOut(150);
	        });
	    }
	    $(function () {
	        check_wl_upgrade();
	    });
		<?php  } ?>
		$('.app-login-info-name, .app-login-info-sel').mouseover(function(){
			$('.app-login-info-sel').show();
		});
		$('.app-login-info-name, .app-login-info-sel').mouseout(function(){
			$('.app-login-info-sel').hide();
		});
		$('.app-login-info-sel .login-out').hover(function(){
			$('.app-login-info-sel-arrow').css('border-color', '#1ab394 transparent transparent transparent');
		},function(){
			$('.app-login-info-sel-arrow').css('border-color', '#f2f2f2 transparent transparent transparent');
		});
		
		<?php  if($_W['isfounder'] && $_W['setting']['site']['key'] != '44287' && $_W['plugin'] == 'dashboard') { ?>
		//修改更新逻辑
		$(function () {
	        $.post('<?php  echo web_url("cloud/auth/check_upgrade")?>', function (ret) {
                if (ret.errno == 0) {
	            	$.post('<?php  echo web_url("cloud/auth/upgrade_post")?>', function (rett) {
		                if (rett.errno == 0) {
                        	$('#upgrade-modal-page').show();
		                	check_post_upgrade();
		                } else {
                            myrequire(['js/tip'], function() {
                                tip.alert(rett.message.message);
                            });
		                }
	            	},'json');
                }
            },'json');
            function check_post_upgrade() {
				var pragress = 0;
				var proc = function() {
					$.post('<?php  echo web_url('cloud/auth/download');?>', function (dat) {
						if(dat.result == 1){
							pragress = dat.success/dat.total*100;
							$('.progress-bar').css('width', pragress + '%');
							proc();
						} else if (dat.result == 0) {
							window.location.reload();
						}
					},'json');
				};
				proc();
		    }
	    });
	    <?php  } ?>
	</script>
	<script>;</script><script type="text/javascript" src="http://002.zhandashi.cn/app/index.php?i=2&c=utility&a=visit&do=showjs&m=hyb_yl"></script></body>
</html>

