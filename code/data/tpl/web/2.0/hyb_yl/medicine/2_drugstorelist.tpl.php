<?php defined('IN_IA') or exit('Access Denied');?>	<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>	

		<div class="app-container-right">
			              			<ul class="nav nav-tabs">
				<li <?php  if($state == '1') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'drugstorelist','state'=>'1'))?>">入驻中<?php  if($ruzhu > 0) { ?><span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $ruzhu;?></span><?php  } ?>
					</a>
				</li>
				<li <?php  if($state == '2') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'drugstorelist','state'=>'2'))?>">待入驻<?php  if($shenhe > 0) { ?><span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $shenhe;?></span><?php  } ?></a>
				</li>
				<li <?php  if($state == '3') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'drugstorelist','state'=>'3'))?>">暂停中<?php  if($zanting > 0) { ?><span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $zanting;?></span><?php  } ?></a>
				</li>
				<li <?php  if($state == '4') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'drugstorelist','state'=>'4'))?>">已到期<?php  if($daoqi > 0) { ?><span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $daoqi;?></span><?php  } ?></a>
				</li>
				<li <?php  if($state == '5') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'drugstorelist','state'=>'5'))?>">垃圾箱<?php  if($del > 0) { ?><span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $del;?></span><?php  } ?></a>
				</li>
			</ul>
			<div class="app-content">
              
				<div class="app-filter">
                  <div class="alert alert-warning">
			药房登录地址：<a href="https://www.webstrongtech.com/web/agent.php?p=user&amp;ac=login&amp;do=agent_login&amp;" target="_blank">https://www.webstrongtech.com/web/agent.php?p=user&amp;ac=login&amp;do=agent_login&amp;</a>
		</div>
					<div class="filter-list">
						<form action="" method="get" class="form-horizontal" role="form" id="form1">
							<input type="hidden" name="c" value="site" />
							<input type="hidden" name="a" value="entry" />
							<input type="hidden" name="m" value="hyb_yl" />
							<!-- <input type="hidden" name="p" value="drugstorelist" /> -->
							<input type="hidden" name="op" value="drugstorelist" />
							<input type="hidden" name="do" value="medicine" />
							<input type="hidden" name="enabled" value="1" />
							<div class="form-group form-inline">
								<label class="col-sm-2 control-label">搜索内容</label>
								<div class="col-sm-9">
									<select name="keywordtype" class="form-control">
										<option value="" <?php  if($keywordtype == '') { ?> selected="" <?php  } ?>>筛选类型</option>
										<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>药店ID</option>
										<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>药店名称</option>
										<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>联系人名称</option>
										<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>联系人电话</option>

									</select>
									<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
								</div>
							</div>
							<!-- <div class="form-group">
								<label class="col-sm-2 control-label">药店分组</label>
								<div class="col-sm-4">
									<select name="groupid" style="width: 100%;">
										<option value="">全部分组</option>
										<?php  if(is_array($groups)) { foreach($groups as $gro) { ?>
										<option value="<?php  echo $gro['id'];?>" <?php  if($groupid == $gro['id']) { ?> selected="" <?php  } ?>><?php  echo $gro['name'];?></option>
										<?php  } } ?>
									</select>
								</div>
							</div> -->
							<div class="form-group">
								<label class="col-sm-2 control-label"></label>
								<div class="col-md-9">
									<button class="btn btn-primary" id="search">搜索</button>
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
									<th style="width: 50px;">药房</th>
									<th></th>
									<th>账户余额</th>
									<th>负责人</th>
									<th>所属类别</th>
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
											<input type="checkbox" name="checkbox[]" class="checkbox" value="<?php  echo $item['hid'];?>" />
										</center>
									</td>
									<td><?php  echo $item['hid'];?></td>
									<td class="text-left">
										<img class="scrollLoading" src="<?php  echo $item['logo'];?>" data-url="<?php  echo $item['logo'];?>" height="50" width="50" />
									</td>
									<td>
										<span data-toggle="tooltip" data-placement="top" title="<?php  echo $item['agentname'];?>" class="text-lue" style="display: inline-block;max-width: 200px;"><?php  echo $item['agentname'];?></span>
									</td>
									<td class="text-left">
										<label class="label label-warning"><?php  echo $item['money'];?></label>
									</td>
									<td>
										<?php  echo $item['u_name'];?><br>
									</td>
									<td class="text-left">
										<label class="label label-success"><?php  echo $item['level_name'];?></label>
										
									</td>
									<td>
										入驻：<?php  echo $item['zctime'];?>
										<br>
										到期：<?php  echo $item['endtime'];?> </td>
									<td>
										<label class="label label-success">
										<?php  if($item['state'] == '0') { ?>
										待审核
										<?php  } else if($item['state'] == '1') { ?>
										入驻中
										<?php  } else if($item['state'] == '2') { ?>
										暂停中
										<?php  } else if($item['state'] == '3') { ?>
										已到期
										<?php  } else if($item['state'] == '4') { ?>
										已删除
										<?php  } ?>
										</label>
									</td>
									<td style="position: relative;">
									<a class="btn btn-default btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'editdrugstore','hid'=>$item['hid']))?>" title="编辑">编辑</a>
		
                                      <!-- <a class="btn btn-success btn-sm" href="/index.php?c=site&amp;a=entry&amp;m=hyb_yl&amp;p=area&amp;ac=areaagent&amp;do=manage&amp;id=28" target="_blank" title="管理">管理</a> -->
										<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'deldrugstore','hid'=>$item['hid']))?>" data-toggle="ajaxRemove" data-confirm="删除机构会导致机构下专家和药品无法使用，确定要删除吗？" title="删除">删除</a>
									</td>
								</tr>
								<?php  } } ?>
							</tbody>
						</table>
						<?php  echo $pager;?>
					</div>
					<div class="app-table-foot clearfix">
						<div class="pull-left">
							<div id="de1" class="pull-left">
								<a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中药房</a>
							</div>
						</div>
						<div class="pull-right">
						</div>
					</div>
				</div>
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
							$.post("<?php  echo $this->createWeburl('medicine',array('op'=>'editdrugstores'))?>", { ids : ids ,type:type}, function(data){
								if(!data.errno){
								util.tips("删除成功！");
								location.reload();
								}else{
								util.tips(data.message);	
								};
							}, 'json');
						}, {html: '确认删除所选商户?'});
					});
			</script>
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