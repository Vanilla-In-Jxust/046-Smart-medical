<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 0) ? (include $this->template('common/header', TEMPLATE_INCLUDEPATH)) : (include template('common/header', TEMPLATE_INCLUDEPATH));?>
<div class="welcome-container" id="js-wxapp-home-welcome" ng-controller="WxappWelcomeCtrl" ng-cloak>
	<div class="panel we7-panel wxapp-procedure <?php  if($_W['account']['type_sign'] == 'phoneapp') { ?>hidden<?php  } ?>">
		<div class="panel-body">
			<div class="procedure-top">
				<span class="title-lg"><?php  echo ACCOUNT_TYPE_NAME?></span>
				<span class="title-md">使用流程和开发简述</span>
			</div>
			<div class="procedure-diagram">
				<div class="procedure">
					<div>
						<div class="icon"><span class="wi wi-shopping-cart"></span></div>
						<div>购买<?php  echo ACCOUNT_TYPE_NAME?>应用</div>
						<div class="arrow"><span class="wi wi-step-arrows"></span></div>
					</div>
					<div>
						<div class="icon"><span class="wi wi-small-routine"></span></div>
						<div>新建<?php  echo ACCOUNT_TYPE_NAME?></div>
						<?php  if(TYPE_SIGN == WXAPP_TYPE_SIGN) { ?>
							<div><a href="<?php  echo url('wxapp/post/design_method')?>" class="color-default" target="_blank">去新建></a></div>
						<?php  } else { ?>
							<div><a href="<?php  echo url('account/create', array('sign' => TYPE_SIGN))?>" class="color-default" target="_blank">去新建></a></div>
						<?php  } ?>
						<div class="arrow"><span class="wi wi-step-arrows"></span></div>
					</div>
					<!-- <div>
						<div class="icon"><span class="wi wi-scan"></span></div>
						<div>打包下载</div>
						<div><a href="<?php  echo url('wxapp/front-download', array('version_id'=>$version_id))?>" class="color-default">去下载></a></div>
						<div class="arrow"><span class="wi wi-step-arrows"></span></div>
					</div> -->
					<div>
						<div class="icon"><span class="wi wi-publish"></span></div>
						<div>上传版本</div>
						<div class="arrow"><span class="wi wi-step-arrows"></span></div>
					</div>
					<div>
						<div class="icon"><span class="wi wi-setting-wxapp"></span></div>
						<div><?php  echo ACCOUNT_TYPE_NAME?>设置</div>
						<div class="arrow"><span class="wi wi-step-arrows"></span></div>
					</div>
					<div>
						<div class="icon"><span class="wi wi-account"></span></div>
						<div>到<?php  echo ACCOUNT_TYPE_NAME?>提交审核</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 公告 start -->
	<div class="panel we7-panel">
		<div class="panel-heading">
			<h4>公告</h4>
			<ul class="nav nav-tabs" role="tablist">
				<li role="presentation" class="active">
					<a href="#notice" aria-controls="notice" role="tab" data-toggle="tab" >系统公告</a>
				</li>
				
			</ul>
			<a href="./index.php?c=article&a=notice" class="color-default more">更多</a>
		</div>
		<div class="panel-body">
			<div class="tab-content" >
				<div class="tab-pane active"  id="notice">
					<ul class="list-group notice-statistics">
						<li class="list-group-item" ng-repeat="notice in notices" ng-if="notices && notices.length">
							<a ng-href="{{notice.url}}" class="text-over" target="_blank" ng-style="{'color': notice.style.color, 'font-weight': notice.style.bold ? 'bold' : 'normal'}" ng-bind="notice.title"></a>
							<span class="pull-right color-gray" ng-bind="notice.createtime"></span>
						</li>
						<div class="we7-empty-block" ng-if="!notices.length"> 
							暂无公告
						</div>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
	<!-- 公告 end -->
	
</div>
<script>
	angular.module('wxApp').value('config', {
		family: "<?php  echo IMS_FAMILY?>",
		notices: <?php echo !empty($notices) ? json_encode($notices) : 'null'?>,
		'apiLink': '//api.w7.cc',
	});
	angular.bootstrap($('#js-wxapp-home-welcome'), ['wxApp']);
</script>
<?php (!empty($this) && $this instanceof WeModuleSite || 0) ? (include $this->template('common/footer', TEMPLATE_INCLUDEPATH)) : (include template('common/footer', TEMPLATE_INCLUDEPATH));?>