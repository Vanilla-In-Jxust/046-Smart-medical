<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
			<div class="app-content">
              
				<div class="app-filter">
                  <div class="filter-action">
			<a href="<?php  echo $this->createWebUrl('physical',array('op'=>'mblistadd'))?>">添加模板</a>
		</div>
               
					<div class="filter-list">
						<form action="" method="get" class="form-horizontal" role="form" id="form1">
							<input type="hidden" name="enabled" value="1" />
							<div class="form-group form-inline">
								<label class="col-sm-2 control-label">搜索内容</label>
								<div class="col-sm-9">
									<select name="keywordtype" class="form-control">
										<option value="1" <?php  if($keywordtype == '1') { ?> selected="selected" <?php  } ?>>模板类型</option>
										<option value="2" <?php  if($keywordtype == '1') { ?> selected="selected" <?php  } ?>>关键词</option>
									

									</select>
									<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label"></label>
									<div class="col-md-9">
										<button class="btn btn-primary" id="search">搜索</button>
									</div>
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
									<th style="width: 30px;">
										<input type="checkbox" onclick="var ck = this.checked;$(':checkbox').each(function(){this.checked = ck});" />
									</th>
									<th>ID</th>
									<th style="width: 50px;">模板名称</th>
									<th>模板类型</th>
									<th>检查项</th>
									<th>时间</th>
									<th>现在状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
							<?php  if(is_array($list)) { foreach($list as $item) { ?>
								<tr>
								
									<td>
										<center>
											<input type="checkbox" name="checkbox[]" class="checkbox" value="<?php  echo $item['id'];?>" />
										</center>
									</td>
									<td><?php  echo $item['id'];?></td>
								
									<td>
										<span data-toggle="tooltip" data-placement="top" title="<?php  echo $item['title'];?>" class="text-lue" style="display: inline-block;max-width: 200px;"><a><?php  echo $item['title'];?></a></span>
									</td>
									<td class="text-left">
										<label class="label label-warning"><?php  echo $item['type'];?></label>
									</td>
									<td>
									<?php  echo $item['content'];?>
									</td>
									<td class="text-left">
										<label class="label label-success"><?php  echo date("Y-m-d",$item['created'])?></label>
										
									</td>
                                 
									<td>
										<label class="label label-success"><?php  if($item['status'] == '1') { ?>正常<?php  } else if($item['status'] == '0') { ?>禁用<?php  } ?></label>
									</td>
									<td style="position: relative;">
									<a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('physical',array('op'=>'mblistadd','id'=>$item['id']))?>" title="编辑">编辑</a>
		
                                      <a class="btn btn-success btn-sm" href="<?php  echo $this->createWebUrl('physical',array('op'=>'mbitem','m_id'=>$item['id']))?>"  title="管理">管理项目</a>
										<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('physical',array('op'=>'mbdel','id'=>$item['id']))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？" title="删除">删除</a>
									</td>
								</tr>
								<?php  } } ?>
							</tbody>
						</table>
					</div>
					<div class="app-table-foot clearfix">
						<div class="pull-left">
							<div id="de1" class="pull-left">
								<a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中模板</a>
							</div>
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
	var enabled = "1";
		$('#de1').delegate('.pass','click',function(e){
			e.stopPropagation();
			var order_ids = [];
			var $checks=$('.checkbox:checkbox:checked');
			$checks.each(function() {
				if (this.checked) {
					order_ids.push(this.value);
				};
			});
			var $this = $(this);
			var ids = order_ids;
			util.nailConfirm(this, function(state) {
			if(!state) return;
				if(enabled == 4){
					var type = 2;
				}else{
					var type = 1;
				}
				$.post("<?php  echo $this->createWebUrl('physical',array('op'=>'mbdels'))?>", { ids : ids ,type:type}, function(data){
					if(!data.errno){
					util.tips("删除成功！");
					location.reload();
					}else{
					util.tips(data.message);	
					};
				}, 'json');
			}, {html: '确认删除所选模板?'});
		});
</script>
</body>
</html>