<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="#">社区列表</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="filter-action">
			<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlistadd'))?>" class="btn btn-primary">添加社区</a>
			<div class="pull-right"><a href="<?php  echo $this->createWebUrl('sign',array('op'=>'import'))?>" data-toggle='ajaxModal' class="btn btn-success">一键导入社区</a></div>
		</div>
		<div class="filter-list">
			<form action="./index.php" method="get" class="form-horizontal" role="form">
				<input type="hidden" name="c" value="site" />
	            <input type="hidden" name="a" value="entry" />
	            <input type="hidden" name="m" value="hyb_yl" />
	            <input type="hidden" name="op" value="sqlist" />
				<input type="hidden" name="ac" value="sqlist" />
				<input type="hidden" name="do" value="sign" />
				<input type="hidden" name="status" value="" />
				<div class="form-group">
					<label class="col-sm-2 control-label">社区状态</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlist'))?>" class="btn <?php  if($status == '') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">不限</a>
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlist','status'=>'1'))?>" class="btn <?php  if($status == '1') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">启用中</a>
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlist','status'=>'2'))?>" class="btn <?php  if($status == '2') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">禁用中</a>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">社区筛选</label>
					<div class="col-sm-9">
						<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="输入社区名称"  />
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-md-9">
						<button class="btn btn-primary">筛选</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="app-table-list">
		<div class="table-responsive">
			<table class="table table-hover">
				<thead>
					<tr>
						<th style="width:100px;text-align:center;">社区名称</th>
						<th style="width:100px;text-align:center;">所在地区</th>
                        <th style="width:100px;text-align:center;">所在经纬度</th>
						<th style="width:60px; text-align:center">是否启用</th>
						<th style="width:200px; text-align:center">操作</th>
					</tr>
				</thead>
				<tbody>
				<?php  if(is_array($list)) { foreach($list as $item) { ?>
										<tr>
						<td class="text-center">
							<?php  echo $item['title'];?>						</td>
						<td class="text-center">
							<?php  echo $item['address'];?>				</td>
                                          	<td class="text-center">
							<?php  echo $item['lon'];?>,<?php  echo $item['lat'];?>				</td>
						<td class="text-center">
							<label class='label label-success'>
							<?php  if($item['status'] == '1') { ?>
							启用
							<?php  } else if($item['status'] == '0') { ?>
							禁用
							<?php  } ?>
							</label>						</td>
						<td class="text-center" style="text-align: center;">
                   		 	<a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlistadd','id'=>$item['id']))?>" title="编辑">编辑</a>
                    		<!--<a class="btn btn-default" href="https://www.webstrongtech.com/web/index.php?c=site&a=entry&m=weliam_merchant&p=area&ac=areaagent&do=agentDetail&id=28" title="详情">记录</a> -->
             
                    		<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'sqlistdel','id'=>$item['id']))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？" title="删除">删除</a> 
						</td>
					</tr>
					<?php  } } ?>
									</tbody>
			</table>
		</div>
		<?php  echo $pager;?>
	</div>
</div>
			</div>
		</div>
	</div>
	<div class="foot" id="footer">
		<ul class="links ft">
            <li class="links_item"><div class="copyright">Powered by <a href="http://www.we7.cc"><b>系统</b></a> v2.0.4 © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a></div></li>
		</ul>
	</div>
	</body>
</html>

