<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			              <div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="<?php  echo $this->createWeburl('wuliu',array('op'=>'wuliulist'))?>">供应商列表</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="filter-action">
			<a href="<?php  echo $this->createWeburl('wuliu',array('op'=>'add','ac'=>'addwuli'))?>" class="btn btn-primary">添加物流公司</a>
		</div>
		<div class="filter-list">
			<form action="" method="post" class="form-horizontal" role="form">
				<input type="hidden" name="status" value="" />
				<div class="form-group">
					<label class="col-sm-2 control-label">物流公司状态</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWeburl('wuliu',array('op'=>'wuliulist','keyword'=>$keyword,'status'=>'-1','ac'=>'wuliulist'))?>" class="btn <?php  if($status == '-1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">不限</a>
							<a href="<?php  echo $this->createWeburl('wuliu',array('op'=>'wuliulist','keyword'=>$keyword,'status'=>'1','ac'=>'wuliulist'))?>" class="btn <?php  if($status == '1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">启用中</a>
							<a href="<?php  echo $this->createWeburl('wuliu',array('op'=>'wuliulist','keyword'=>$keyword,'status'=>'0','ac'=>'wuliulist'))?>" class="btn <?php  if($status == '0') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">禁用中</a>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">物流公司筛选</label>
					<div class="col-sm-9">
						<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="输入物流公司名称"  />
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-md-9">
						 <input type="submit" name="submit" value="筛选" class="btn btn-primary" />
						 <input type="hidden" name="token" value="<?php  echo $_W['token'];?>" />
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
						<th style="width:100px;text-align:center;">物流公司名称</th>
						<th style="width:100px;text-align:center;">物流公司编码</th>
                        <th style="width:100px;text-align:center;">物流公司电话</th>
                        <th style="width:100px;text-align:center;">排序</th>
						<th style="width:60px; text-align:center">是否启用</th>
						<th style="width:200px; text-align:center">操作</th>
					</tr>
				</thead>
				<tbody>
				<?php  if(is_array($row)) { foreach($row as $item) { ?>
										<tr>
						<td class="text-center">
							<?php  echo $item['name'];?>					</td>
						<td class="text-center">
							<?php  echo $item['com'];?>			</td>
                        <td class="text-center">
							<?php  echo $item['tel'];?>
						</td>
                        <td class="text-center">
							<?php  echo $item['sort'];?>
						</td>
						<td class="text-center">
							<label class='label label-success'>
							<?php  if($item['status'] == '1') { ?>
							启用
							<?php  } else if($item['status'] == '0') { ?>
							禁用
							<?php  } ?>
							</label>						
						</td>
						<td class="text-center" style="text-align: center;">
                   		 	<a class="btn btn-default btn-sm" href="<?php  echo $this->createWeburl('wuliu',array('op'=>'add','id'=>$item['id']))?>" title="编辑">编辑</a>
                    		<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWeburl('wuliu',array('op'=>'del','id'=>$item['id']))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？" title="删除">删除</a> 
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

