<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<ul class="nav nav-tabs" id="myTab">
	<li class="active"><a href="javascript:;">分销商列表</a></li>
</ul>

<div class="app-content">

	<?php  if($test == 'adddis') { ?>
		<div class="app-form">
			<form action="" method="post" class="form-horizontal form" id="form">
				<div class="panel panel-default">
					<div class="panel-heading">添加分销商</div>
					<div class="panel-body">
						<div class="form-group">
							<label class="col-xs-12 col-sm-3 col-md-2 control-label"><span style='color:red'>*</span>选择用户</label>
	                        <div class="col-sm-9">
										<input type="hidden" id="openid" name="openid" value="<?php  echo $res['openid'];?>">
										<div class="input-group">
											<input type="text" name="nickname" maxlength="30" value="<?php  echo $res['u_name'];?>" id="saler" class="form-control" readonly="">
											<div class="input-group-btn">
												<button class="btn btn-default" type="button" data-toggle="modal" data-target="#myModal">绑定专家微信</button>
											</div>
										</div>
										<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
											<div class="modal-dialog" style="width: 660px;">
												<div class="modal-content">
													<div class="modal-header">
														<button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
														<h3>绑定专家微信</h3>
													</div>
													<div class="modal-body">
														<div class="row">
															<div class="input-group">
																<input type="text" class="form-control" name="keyword" value="" id="search-kwd" placeholder="可搜索微信昵称，openid，UID">
																<span class="input-group-btn">
																	<button type="button" class="btn btn-default" onclick="search_members();">搜索</button>
																</span>
															</div>
														</div>
														<div id="module-menus" style="padding-top:5px;"></div>
													</div>
													<div class="modal-footer">
														<a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a>
													</div>
												</div>
											</div>
										</div>
									</div>
						</div>
						<div class="form-group">
							<label class="col-xs-12 col-sm-3 col-md-2 col-lg-2 control-label">用户名</label>
							<div class="col-sm-7">
								<input type="text" name="username" class="form-control" value="<?php  echo $res['username'];?>" />
							</div>
						</div>
						<div class="form-group">
							<label class="col-xs-12 col-sm-3 col-md-2 col-lg-2 control-label">上级分销商</label>
							<div class="col-md-7">
								<select name="tkid" class="form-control select2 col-sm-7 col-xs-6" style="width: 100%;">
									<option value="0" selected="selected">代理直属</option>
									<?php  if(is_array($row)) { foreach($row as $gift) { ?>
									<option value="<?php  echo $gift['id'];?>"><?php  echo $gift['username'];?></option>
									<?php  } } ?>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-sm-9">
						<input type="submit" name="submit" value="提交" class="btn btn-primary min-width" />
						<input type="hidden" name="token" value="<?php  echo $_W['token'];?>" />
					</div>
				</div>
			</form>
		</div>
	<?php  } ?>
</div>

<script src="<?php  echo HYB_YL_ADMIN?>/js/user.js" type="text/javascript"></script>