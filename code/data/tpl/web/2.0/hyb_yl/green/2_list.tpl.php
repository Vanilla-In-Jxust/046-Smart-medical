<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<style>
	.col-sm-4{
   	width:auto   
  }
  .col-sm-2{
   	width:auto   
  }
</style>
<ul class="nav nav-tabs">
	<li class="active"><a href="javascript:;">客服列表</a></li>
</ul>
			<div class="app-content">
				<div class="app-filter">
				<div class="alert alert-warning">
		            注意一：导诊可任意设置医院的导诊客服<br>
		            注意二：医院开通导诊服务需要手动付费<br>
		        </div>
		        <div class="filter-action">
					<a class="btn btn-primary" href="/index.php?c=site&a=entry&do=green&m=hyb_yl&op=edit&ac=list&hid=<?php  echo $_SESSION['hid'];?>">添加客服</a>
				</div>
					<div class="filter-list">
						<form action="" method="get" class="form-horizontal" role="form" id="form1" style="display:flex">
							<input type="hidden" name="c" value="site" />
							<input type="hidden" name="a" value="entry" />
							<input type="hidden" name="m" value="hyb_yl" />
							<input type="hidden" name="op" value="list" />
							<input type="hidden" name="ac" value="list" />
							<input type="hidden" name="do" value="green" />
							<input type="hidden" name="enabled" value="1" />
							<input type="hidden" name="hid" id="hid" value="<?php  echo $_SESSION['hid'];?>" />
							<div class="form-group form-inline">
								<label class="col-sm-2 control-label">搜索内容</label>
								<div class="col-sm-9" style="display:flex">
									<select name="keywordtype" class="form-control">
										<option value="" <?php  if($keywordtype == '') { ?> selected="" <?php  } ?>>搜索内容</option>
										<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>机构名称</option>
										<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>客服名称</option>
										<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>用户名称</option>
										<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>客服电话</option>
									
									</select>
									<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">按科室</label>
								<div class="col-sm-4">
									<select name="keshi_one" id="category_parent" style="width: 100%;">
										<option value="">请选择一级科室</option>
										<?php  if(is_array($keshi_arr)) { foreach($keshi_arr as $ks) { ?>
										<option value="<?php  echo $ks['id'];?>" <?php  if($ks['id'] == $keshi_one) { ?> selected="" <?php  } ?>><?php  echo $ks['ctname'];?></option>
										<?php  } } ?>
									</select>
									<select id="category_child" name="keshi_two" style="width: 100%;">
                                         <option value="">请选择二级科室</option>
                                         <?php  if(is_array($keshi)) { foreach($keshi as $ks) { ?>
										 <option value="<?php  echo $ks['id'];?>" <?php  if($ks['id'] == $keshi_one) { ?> selected="" <?php  } ?>><?php  echo $ks['name'];?></option>
										 <?php  } } ?>
                                    </select>
								</div>
							</div>

                          	<div class="form-group">
								<label class="col-sm-2 control-label">按机构</label>
								<div class="col-sm-4">
									<select name="qx_id" id="category_parentjg" style="width: 100%;">
										<option value="">请选择机构</option>
										<?php  if(is_array($hospital)) { foreach($hospital as $hos) { ?>
										<option value="<?php  echo $hos['id'];?>" <?php  if($hos['id'] == $qx_id) { ?> selected="" <?php  } ?>><?php  echo $hos['name'];?></option>
										<?php  } } ?>
									</select>
									<select id="category_childjg" name="hid" style="width: 100%;">
                                        <option value="">请选择二级分类</option>
                                        <?php  if(is_array($quanxian2)) { foreach($quanxian2 as $qx) { ?>
                                        <option value="<?php  echo $qx['hid'];?>" <?php  if($hid == $qx['hid']) { ?> selected <?php  } ?>><?php  echo $qx['agentname'];?></option>
                                        <?php  } } ?>
                                    </select>
								</div>
							</div>
                       
                              <div class="form-group">
								<label class="col-sm-2 control-label">按职称</label>
								<div class="col-sm-4">
									<select name="zhicheng" style="width: 100%;">
										<option value="">请选择职称</option>
										<?php  if(is_array($zc_arr)) { foreach($zc_arr as $zc) { ?>
										<option value="<?php  echo $zc['id'];?>" <?php  if($zhicheng == $zc['id']) { ?> selected="" <?php  } ?>><?php  echo $zc['job_name'];?></option>
										<?php  } } ?>
									</select>
								</div>
							</div>
                       
                             <div class="form-group">
								<label class="col-sm-2 control-label">按工作状态</label>
								<div class="col-sm-4">
									<select name="gzstype" style="width: 100%;">
										<option value="">请选择工作状态</option>
										<option value="1" <?php  if($gzstype == '1') { ?> selected="" <?php  } ?>>工作中</option>
										<option value="0" <?php  if($gzstyle == '0') { ?> selected="" <?php  } ?>>休息中</option>
									</select>
								</div>
							</div>
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
									<th style="width: 50px;">客服</th>
									<th></th>
									<th>机构余额</th>
									<th>所属机构</th>
									<th>所属科室</th>
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
									<td class="text-left">
										<img class="scrollLoading" src="<?php  echo $item['thumb'];?>" data-url="<?php  echo $item['thumb'];?>" height="50" width="50" />
									</td>
									<td>
										<span data-toggle="tooltip" data-placement="top" title="<?php  echo $item['title'];?>" class="text-lue" style="display: inline-block;max-width: 200px;"><?php  echo $item['title'];?></span>
									</td>
									<td class="text-left">
										<label class="label label-warning"><?php  echo $item['money'];?></label>
									</td>
									<td>
										<?php  echo $item['hospital'];?><br>
									</td>
									<td class="text-left">
										<label class="label label-success"><?php  echo $item['keshi_one'];?></label>
										<label class="label label-danger"><?php  echo $item['keshi_two'];?></label>
										
									</td>
									<td>
										创建：<?php  echo $item['opentime'];?>
										<br>
										到期：<?php  echo $item['endtime'];?> </td>
									<td>
									<?php  if($item['gzstype'] == 1) { ?>
										<label class="label label-success">工作中</label>
									<?php  } else if($item['gzstype'] == '0') { ?>
										<label class="label label-success">休息中</label>
									<?php  } ?>
									</td>
									<td >
							
                   		 	<a class="btn btn-default btn-sm" href="/index.php?c=site&a=entry&do=green&m=hyb_yl&op=edit&ac=list&id=<?php  echo $item['id'];?>&hid=<?php  echo $_SESSION['hid'];?>" title="编辑">编辑</a>
                    		
                    	
                    		<a class="btn btn-danger btn-sm" href="/index.php?c=site&a=entry&do=green&m=hyb_yl&op=delete&ac=list&id=<?php  echo $item['id'];?>&hid=<?php  echo $_SESSION['hid'];?>" data-toggle="ajaxRemove" data-confirm="删除客服，确定要删除吗？" title="删除">删除</a> 
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
								<a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中客服</a>
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
							var hid = $("#hid").val();
							$.post("/index.php?c=site&a=entry&do=green&m=hyb_yl&op=deletes&ac=list&hid="+hid+"&", { ids : ids ,type:type}, function(data){
								if(!data.errno){
								util.tips("删除成功！");
								location.reload();
								}else{
								util.tips(data.message);	
								};
							}, 'json');
						}, {html: '确认删除所选客服?'});
					});
					$("#category_parent").on("change",function(){
    
				     var id = $(this).val()
				     //查询二级
				        $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=all&m=hyb_yl&id="+id,{id:id},function (res) {
				              
				                $("select[name='keshi_two']").empty();
				                var html = "<option value=''>请选择二级科室</option>";
				                $(res).each(function (v, k) {

				                    html += "<option value='" + k.id + "'>" + k.name + "</option>";
				                });
				                //把遍历的数据放到select表里面
				                $("select[name='keshi_two']").append(html);

				            },'json');
				    });
				    $("#category_parentjg").on("change",function(){
    
				     var id = $(this).val()
				     //查询二级
				        $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=jgall&m=hyb_yl&id="+id,{id:id},function (res) {
				              console.log(res)
				                $("select[name='hid']").empty();
				                var html = "<option value=''>请选择二级分类</option>";
				                $(res).each(function (v, k) {

				                    html += "<option value='" + k.hid + "'>" + k.agentname + "</option>";
				                });
				                //把遍历的数据放到select表里面
				                $("select[name='hid']").append(html);

				            },'json');
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