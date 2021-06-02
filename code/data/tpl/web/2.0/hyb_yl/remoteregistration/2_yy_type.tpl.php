<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>

			<ul class="nav nav-tabs">
				<li class="active">
					<a href="#">预约类型列表</a>
				</li>
			</ul>
			<div class="app-content">
				<div class="filter-action">
					<a href="<?php  echo $this->createWeburl('remoteregistration',array('op'=>'addyytype'));?>" class="btn btn-primary">添加类型</a>
				</div>
				<div class="app-table-list">
					<div class="table-responsive">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>ID</th>
									<th style="width: 50px;">标题</th>
									<th>图片</th>
									<th>现在状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<?php  if(is_array($list)) { foreach($list as $item) { ?>
								<tr>
									<td><?php  echo $item['id'];?></td>
									<td><?php  echo $item['title'];?></td>
									<td class="text-left">
										<img class="scrollLoading" src="<?php  echo $item['thumb'];?>" data-url="<?php  echo $item['thumb'];?>" height="50" width="50" />
									</td>
									<td>
										<label class="label label-success"><?php  if($item['status'] == '0') { ?>隐藏<?php  } else if($item['status'] == '1') { ?>显示<?php  } ?></label>
									</td>
									<td style="position: relative;">
										
										<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'addyytype','id'=>$item['id']))?>"  class="js-clip">
											编辑
										</a>
										-
										<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'delyytype','id'=>$item['id']))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？">删除</a>
									</td>
								</tr>
								<?php  } } ?>
							</tbody>
						</table>
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
</body>
</html>