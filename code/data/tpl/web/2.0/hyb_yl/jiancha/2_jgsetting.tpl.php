<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
	<ul class="nav nav-tabs">
		<li class="active">
			<a href="javascript:;">级别列表</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-filter">
			<div class="filter-action">
				<span class="btn btn-primary" id="addCate">
					<i class="fa fa-plus"></i> 新建级别
				</span>
			</div>
			<div class="filter-list">
				<form action="" method="get">
					<input type="hidden" name="c" value="site" />
					<input type="hidden" name="a" value="entry" />
					<input type="hidden" name="m" value="hyb_yl" />
					<input type="hidden" name="op" value="jgsetting" />
					<input type="hidden" name="ac" value="jgsetting" />
					<input type="hidden" name="do" value="jiancha" />
					<div class="form-group">
						<label class="col-sm-2 control-label">关键字</label>
						<div class="col-sm-9">
							<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label"></label>
						<div class="col-sm-9">
							<button class="btn btn-primary">筛选</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="app-table-list">
			<div class="table-responsive">
				<table class="table table-hover table-bordered">
					<thead class="navbar-inner">
						<tr>
							<th style="width: 50px;">ID</th>
							<th style="">级别名称(点击编辑)</th>
							<th style="">排序(点击编辑)</th>
							<th style="width: 50px;">状态(点击编辑)</th>
							<th style="width: 80px">操作</th>
						</tr>
					</thead>
					<tbody>
					    <?php  if(is_array($row)) { foreach($row as $item) { ?>
						<tr>
							<td><?php  echo $item['id'];?></td>
							<td>
								<a href='javascript:;' data-toggle='ajaxEdit' data-href="<?php  echo $this->createWeburl('jiancha',array('op'=>'change','change'=>'level_name','id'=>$item['id']));?>">
									<?php  echo $item['level_name'];?> </a>
							</td>
							<td>
								<a href='javascript:;' data-toggle='ajaxEdit' data-href="<?php  echo $this->createWeburl('jiancha',array('op'=>'change','change'=>'level_strot','id'=>$item['id']));?>">
									<?php  echo $item['level_strot'];?> </a>
							</td>
							<td>
								<span class="change">
									<span style="float: left;" class='label <?php  if($item['level_type'] == '0') { ?> label-primary <?php  } else { ?> label-default <?php  } ?>'
										  data-toggle='ajaxSwitch'
										  data-switch-value='0'
                                          
										  data-switch-value0='0|禁用|label label-default|./index.php?c=site&a=entry&op=change&change=level_type&id=<?php  echo $item['id'];?>&do=jiancha&m=hyb_yl&value=1'
                                       
										  data-switch-value1='1|启用|label label-primary|./index.php?c=site&a=entry&op=change&change=level_type&id=<?php  echo $item['id'];?>&do=jiancha&m=hyb_yl&value=0'>
									
										  <?php  if($item['level_type'] == '0') { ?> 启用 <?php  } else { ?> 禁用 <?php  } ?> </span>
								</span>
							</td>
							<td style="position: relative;">
								<a class="btn btn-sm btn-danger" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('jiancha',array('op'=>'jgsettingdel','id'=>$item['id']))?>" data-confirm="删除标签会删除所有对应的标签记录,确认删除此标签？">删除</a>
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
		<div class="modal fade" id="addCateModal" aria-hidden="false">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button data-dismiss="modal" class="close" type="button">×</button>
						<h4 class="modal-title">新建级别</h4>
					</div>
					<div class="modal-body form-horizontal">
						<div class="form-group">
							<div class="col-sm-2 control-label">级别名称</div>
							<div class="col-sm-9">
								<input class="form-control" placeholder="请输入标签名称" id="saveTempName" value="" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-2 control-label">级别排序</div>
							<div class="col-sm-9">
								<input class="form-control" type="tel" placeholder="请输入标签排序" id="saveSort" value="" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-sm-2 control-label">级别状态</div>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" value="1" name="saveStatus" checked="checked">启用</label>
								<label class="radio-inline">
									<input type="radio" value="0" name="saveStatus">禁用</label>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<div class="btn btn-primary" id="saveCate">保存</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    <script type="text/javascript" src="<?php  echo HYB_YL_ADMIN?>/js/table_edit.js"></script>
	<script type="text/javascript">

		$("#addCate").unbind('click').click(function () {
		        $("#addCateModal").modal();
		        $("#saveCate").unbind('click').click(function () {
		            var status = $(this).data('status');
		            if(status) {
		                util.tips("正在保存，请稍候。");
		                return;
		            }
		            var name = $.trim($("#saveTempName").val());
		            if(!name) {
		                util.tips("请填写名称！");
		                $("#saveTempName").focus();
		                return;
		            }
		            var sort = $.trim($("#saveSort").val());
		            var status = $('input[name="saveStatus"]:checked').val();
		            $(this).data('status',1).text('保存中');
		            var url = "<?php  echo $_W['siteroot'];?>web/index.php?c=site&a=entry&do=jiancha&op=jgsetting&ac=jgsetting&m=hyb_yl";
		            $.post(url, {
		                level_name: name,
		                level_strot: sort,
		                level_type: status
		            }, function (ret) {
		            	console.log(ret)
                        util.tips("保存成功！");
		                $("#addCateModal .close").trigger('click');
		                setTimeout(function () {
		                    location.reload();
		                }, 500);
		            }, 'json');
		        });
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