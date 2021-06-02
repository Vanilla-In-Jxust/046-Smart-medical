<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
	<style type="text/css">
		.page-heading {
				padding: 5px 0;
				border-bottom: 1px solid #ccc;
				margin-bottom: 20px;
				position: relative;
				margin-left: 15px;
			}
	</style>
	<ul class="nav nav-tabs">
		<li class="active">
			<a href="javascript:;">收费设置</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-filter">
			<div class="alert alert-warning">
				注意一：该收费是针对专家开通对应服务包所设定的收费项目
				<br>
				注意二：专家开通服务包后专家才可以自主设置服务包针对用户的收费，开通服务包费用计入平台盈利
				<br>
				注意三：专家所开通的服务包到期后，将提醒专家进行续费，续费记录可去开通记录中查找
			</div>
			<div class="filter-action">
				<a class="btn btn-primary" href="/index.php?c=site&a=entry&do=team&op=serviceboxadd&ac=serviceboxadd&m=hyb_yl">增加类别</a>
			</div>
		</div>
		<div class="app-table-list">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th class="text-center">类型名称</th>
							<th class="text-center">时长</th>
							<th class="text-center">价格</th>
							<th class="text-center">服务类型</th>
							<th class="text-center">是否免审核</th>
							<th class="text-center">排序</th>
							<th class="text-center">是否启用</th>
							<th class="text-center">是否用于续费</th>
							<th class="text-center">操作</th>
						</tr>
					</thead>
					<tbody>
					<?php  if(is_array($list)) { foreach($list as $item) { ?>
					
						<tr class="text-center">
							<td>
								<?php  echo $item['title'];?> </td>
							<td>
								<?php  echo $item['time_leng'];?>天
							</td>
							<td><?php  echo $item['money'];?></td>
							<td>
								<label class="label label-info"><?php  echo $item['titlme'];?></label>
							</td>
							<td>
							    <?php  if($item['if_store'] =='1') { ?>
								<label class="label label-primary">免审核</label>
								<?php  } else { ?>
								<label class="label label-error">需要审核</label>
								<?php  } ?>
							</td>
							<td>
								<?php  echo $item['stort'];?> </td>
							<td>
							    <?php  if($item['if_open'] =='1') { ?>
								<label class="label label-primary" >启用</label>
								<?php  } else { ?>
								<label class="label label-error" >不启用</label>
								<?php  } ?>
							</td>
							<td>
							    <?php  if($item['if_xf'] =='1') { ?>
								<label class="label label-primary">续费可用</label>
								<?php  } else { ?>
								<label class="label label-primary">无需续费</label>
								<?php  } ?>
							</td>
							<td style="position:relative;">
								<a href="/index.php?c=site&a=entry&do=team&m=hyb_yl&op=serviceboxadd&id=<?php  echo $item['id'];?>&ac=servicebox">编辑 </a> -
								<a data-toggle="ajaxRemove" data-confirm="确定要删除该记录吗？" href="/index.php?c=site&a=entry&op=serviceboxdel&do=team&m=hyb_yl&ac=servicebox&id=<?php  echo $item['id'];?>">删除 </a>
							</td>
						</tr>
					<?php  } } ?>	
					</tbody>
				</table>
			</div>
			<div class="app-table-foot clearfix">
				<div class="pull-left">

				</div>
				<div class="pull-right">
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
<div class="foot" id="footer">
	<ul class="links ft">
		<li class="links_item">
			<div class="copyright">Powered by <a href="http://www.we7.cc">
					<b>系统</b>
				</a> v2.0.4 © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a>
			</div>
		</li>
	</ul>
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
</script>
</body>
</html>