<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
	<style>
		.form-group{max-width: 100%!important;}
</style>
	<ul class="nav nav-tabs">
		<li class="active">
			<a href="#">底部菜单</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-form">
			<form class="form-horizontal form form-validate" action="" method="post" novalidate="novalidate">
				<div class="panel panel-default">
					<div class="panel-body">
						<!--自定义菜单设置-->
						<div class="form-group diymenu">
							<div class="col-sm-19">
								<div class="app-table-list">
									<div class="table-responsive">
										<table class="table table-hover">
											<thead>
												<tr>
													<th width="7%" class="text-center">默认名称</th>
													<th width="10%" class="text-center">修改名称</th>
													<th width="20%" class="text-center">默认图片</th>
													<th width="20%" class="text-center">选中图片</th>
													<th width="25%" class="text-center">链接</th>
													<th width="8%" class="text-center">按钮开关</th>
												</tr>
											</thead>
											<tbody id="menuList">
												<tr class="text-center">
													<td>
														<input name="info[list][one][default_name]" class="hide" type="text" value="首页">
														首页 </td>
													<td>
														<input name="info[list][one][diy_name]" class="form-control" type="text" maxlength="4" placeholder="首页" value="<?php  echo $footers_menu['list']['one']['diy_name'];?>">
													</td>
													<!-- 默认图片 -->
													<td class="select_img_temp">
														<div class="input-group img-item">
															<div class="input-group-addon">
																<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['one']['default_img'])?>">
															</div>
															<input name="info[list][one][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['one']['default_img'];?>">
															<div class="input-group-btn">
																<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
																<button class="btn btn-default clearinput" type="button">X</button>
															</div>
														</div>
													</td>
													<!-- 选中图片 -->
													<td class="select_img_temp">
														<div class="input-group img-item">
															<div class="input-group-addon">
																<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['one']['selected_img'])?>">
															</div>
															<input name="info[list][one][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['one']['selected_img'];?>">
															<div class="input-group-btn">
																<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
																<button class="btn btn-default clearinput" type="button">X</button>
															</div>
														</div>
													</td>
													<td>
														<div class="input-group form-group" style="margin: 0;display: inline-block;">
															<input name="info[list][one][link]" class="form-control valid" id="advlinkone" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['one']['link'];?>">
															<span class="input-group-btn">
																<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinkone">选择链接</span>
																<span class="btn btn-default clearinput">X</span>
															</span>
														</div>
													</td>
													<td>
														<input type="checkbox" class="js-switch" name="info[list][one][switch]"  <?php  if($footers_menu['list']['one']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
															   <div class="switchery ">
														<small></small>
									</div>
									</td>
									</tr>
									<tr class="text-center">
										<td>
											<input name="info[list][two][default_name]" class="hide" type="text" value="资讯">
											资讯 </td>
										<td>
											<input name="info[list][two][diy_name]" class="form-control" type="text" maxlength="4" placeholder="资讯" value="<?php  echo $footers_menu['list']['two']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['two']['default_img'])?>">
												</div>
												<input name="info[list][two][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['two']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['two']['selected_img'])?>">
												</div>
												<input name="info[list][two][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['two']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][two][link]" class="form-control valid" id="advlinktwo" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['two']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinktwo">选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][two][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['two']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>
									<tr class="text-center">
										<td>
											<input name="info[list][three][default_name]" class="hide" type="text" value="分享">
											分享 </td>
										<td>
											<input name="info[list][three][diy_name]" class="form-control" type="text" maxlength="4" placeholder="分享" value="<?php  echo $footers_menu['list']['three']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['three']['default_img'])?>">
												</div>
												<input name="info[list][three][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['three']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['three']['selected_img'])?>">
												</div>
												<input name="info[list][three][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['three']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][three][link]" class="form-control valid" id="advlinkthree" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['three']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinkthree">选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][three][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['three']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>
									<tr class="text-center">
										<td>
											<input name="info[list][four][default_name]" class="hide" type="text" value="药房">
											药房 </td>
										<td>
											<input name="info[list][four][diy_name]" class="form-control" type="text" maxlength="4" placeholder="药房" value="<?php  echo $footers_menu['list']['four']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['four']['default_img'])?>">
												</div>
												<input name="info[list][four][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['four']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['four']['selected_img'])?>">
												</div>
												<input name="info[list][four][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['four']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][four][link]" class="form-control valid" id="advlinkfour" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['four']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinkfour">选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][four][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['four']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>
									<tr class="text-center">
										<td>
											<input name="info[list][five][default_name]" class="hide" type="text" value="问诊">
											问诊 </td>
										<td>
											<input name="info[list][five][diy_name]" class="form-control" type="text" maxlength="4" placeholder="问诊" value="<?php  echo $footers_menu['list']['five']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['five']['default_img'])?>">
												</div>
												<input name="info[list][five][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['five']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['five']['selected_img'])?>">
												</div>
												<input name="info[list][five][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['five']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][five][link]" class="form-control valid" id="advlinkfive" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['five']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinkfive">选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][five][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['five']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>

									<tr class="text-center">
										<td>
											<input name="info[list][six][default_name]" class="hide" type="text" value="我的">
											我的 </td>
										<td>
											<input name="info[list][six][diy_name]" class="form-control" type="text" maxlength="4" placeholder="我的" value="<?php  echo $footers_menu['list']['six']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['six']['default_img']) ?>">
												</div>
												<input name="info[list][six][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['six']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['six']['selected_img']) ?>">
												</div>
												<input name="info[list][six][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['six']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][six][link]" class="form-control valid" id="advlinksix" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['six']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinksix" >选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][six][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['six']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>
									<tr class="text-center">
										<td>
											<input name="info[list][seven][default_name]" class="hide" type="text" value="绿通">
											绿通 </td>
										<td>
											<input name="info[list][seven][diy_name]" class="form-control" type="text" maxlength="4" placeholder="绿通" value="<?php  echo $footers_menu['list']['seven']['diy_name'];?>">
										</td>
										<!-- 默认图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['seven']['default_img']) ?>">
												</div>
												<input name="info[list][seven][default_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['seven']['default_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<!-- 选中图片 -->
										<td class="select_img_temp">
											<div class="input-group img-item">
												<div class="input-group-addon">
													<img style="height:20px;width:20px" src="<?php  echo tomedia($footers_menu['list']['seven']['selected_img']) ?>">
												</div>
												<input name="info[list][seven][selected_img]" class="form-control" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['seven']['selected_img'];?>">
												<div class="input-group-btn">
													<button class="btn btn-default btn-select-pic" type="button">选择图片</button>
													<button class="btn btn-default clearinput" type="button">X</button>
												</div>
											</div>
										</td>
										<td>
											<div class="input-group form-group" style="margin: 0;display: inline-block;">
												<input name="info[list][seven][link]" class="form-control valid" id="advlinksix" style="width: 15rem;" type="text" readonly="readonly" value="<?php  echo $footers_menu['list']['seven']['link'];?>">
												<span class="input-group-btn">
													<span class="btn btn-default btnurl" data-toggle="selectUrl" data-input="#advlinksix" >选择链接</span>
													<span class="btn btn-default clearinput">X</span>
												</span>
											</div>
										</td>
										<td>
											<!--是否开启：0=关，1=开启-->
											<input name="info[list][seven][switch]" class="js-switch" type="checkbox" <?php  if($footers_menu['list']['seven']['switch'] =='on') { ?> checked="checked" <?php  } ?>>
											<div class="switchery ">
												<small></small>
											</div>
										</td>
									</tr>
									</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label"></label>
						<div class="col-sm-9">
							<input name="submit" class="btn btn-primary min-width" type="submit" value="保存">
							<input name="token" type="hidden" value="<?php  echo $_W['token'];?>">
							<input name="id" type="hidden" value="<?php  echo $res['id'];?>">
						</div>
					</div>
				</div>
		</div>
		</form>
	</div>
</div>


<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/menulist', TEMPLATE_INCLUDEPATH)) : (include template('./common/menulist', TEMPLATE_INCLUDEPATH));?>
<script type="text/javascript">

	$(function(){
					bindEvents();//引用图片选择触发器
					url_system();
					hideModal();
				});
				/**
				 * 触发图片选择
				 */
				function bindEvents() {
					require(['jquery', 'util'], function ($, util) {
						$('.btn-select-pic').unbind('click').click(function () {
							var imgitem = $(this).closest('.img-item');
							util.image('', function (data) {
								imgitem.find('img').attr('src', data['url']);
								imgitem.find('input').val(data['attachment']);
							});
						});
					});
				}
				/**
				 * 点击删除图片或者链接
				 */
				$("#menuList").on('click','.clearinput',function () {
					$(this).closest('.input-group-btn').prev('.form-control').val('');
					let a = $(this).closest('.input-group-btn').siblings('.input-group-addon').contents('img').attr('src','');
				});


</script>
<script type="text/javascript" src="<?php  echo HYB_YL_ADMIN?>/js/showmodel.js"></script>
</div>