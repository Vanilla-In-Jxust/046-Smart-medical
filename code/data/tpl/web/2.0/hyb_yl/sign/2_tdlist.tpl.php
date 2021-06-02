<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<style>
	.col-sm-4{
   	width:auto   
  }
  .col-sm-2{
   	width:auto   
  }
  .zhe{
  	position: fixed;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	background: rgba(0,0,0,0.6);
  	display: flex;
  	justify-content: center;
  	align-items: center;
  }
  .zhe .imgBig{
  	width: 20%;
  }
</style>
			<ul class="nav nav-tabs">
				<li <?php  if($status == '1') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'tdlist','status'=>'1'))?>">入驻中
					<?php  if($ruzhu > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $ruzhu;?></span>
					<?php  } ?>
					</a>
				</li>
				<li <?php  if($status == '2') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'tdlist','status'=>'2'))?>">待审核
					<?php  if($shenhe > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $shenhe;?></span>
					<?php  } ?>
					</a>
				</li>
			</ul>
			<div class="app-content">
              
				<div class="app-filter">
               		<div class="app-filter">
						<div class="filter-action">
							<a href="<?php  echo $this->createWeburl('sign',array('op'=>'add','hid'=>$_SESSION['hid']))?>" class="btn btn-primary">添加团队</a>
						</div>
					</div> 
					<div class="filter-list">
						<form action="" method="get" class="form-horizontal" role="form" id="form1">
							<input type="hidden" name="c" value="site" />
							<input type="hidden" name="a" value="entry" />
							<input type="hidden" name="m" value="hyb_yl" />
							<input type="hidden" name="op" value="tdlist" />
							<input type="hidden" name="ac" value="tdlist" />
							<input type="hidden" name="do" value="sign" />
							<input type="hidden" name="enabled" value="1" />
							<input type="hidden" name="hid" value="<?php  echo $_SESSION['hid'];?>" />
							<div class="form-group form-inline">
								<label class="col-sm-2 control-label">搜索内容</label>
								<div class="col-sm-9">
									<select name="keywordtype" class="form-control">
										<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>团队ID</option>
										<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>名称</option>
										<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>负责人名称</option>

									</select>
									<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">按地区</label>
								<div class="col-sm-4">
									<select name="address" style="width: 100%;">
										<option value="">全部地区</option>
										<?php  if(is_array($addressed)) { foreach($addressed as $add) { ?>
										<option value="<?php  echo $add['name'];?>" <?php  if($address == $add['name']) { ?> selected="" <?php  } ?>><?php  echo $add['name'];?></option>
										<?php  } } ?>
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
							
									<th>团队成员</th>
									<th>团队名称</th>
									<th>团队余额</th>
									<th>负责人</th>
									<th>团队类别</th>
                                  	<th>团队地区</th>
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
										<label class="label label-warning"><?php  echo $item['title'];?></label>
									</td>
									<td class="text-left">
										<label class="label label-warning"><?php  echo $item['money'];?></label>
									</td>
									<td>
										<?php  echo $item['z_name'];?><br>
									</td>
									<td class="text-left">
										<label class="label label-success">
										<?php  if($item['type'] == 0) { ?>
										线上团队
										<?php  } else if($item['type'] == 1) { ?>
										线下团队
										<?php  } ?>
										</label>
										
									</td>
                                  	<td>
                                      <?php  echo $item['province'];?><?php  echo $item['city'];?><?php  echo $item['district'];?>
										
									<td>
										创建时间：<?php  echo $item['created'];?>
										 </td>
									<td>
										<label class="label label-success">
										<?php  if($item['status'] == '1') { ?>
										入驻中
										<?php  } else if($item['status'] == '0') { ?>
										待审核
										<?php  } else if($item['status'] == '2') { ?>
										已拒绝
										<?php  } ?>
										</label>
									</td>
									<td style="position: relative;">
									<a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'add','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="编辑">编辑</a>
									<a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'tdmsg','tid'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="公告">公告管理</a>
									<a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'share','tid'=>$item['id'],'hid'=>$_SESSION['hid']))?>"  title="邀请记录">邀请记录</a>
		
                                      <a class="btn btn-success btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'cylist','tid'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="成员">成员</a>
                                         <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','tid'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="订单">订单</a>
                                          
                                            <a class="btn btn-warning btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'withdrawal','tid'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="提现记录">提现记录</a>
                                           <a class="btn btn-info btn-sm bigImg" href="javascript:;" data-src="<?php  echo $item['erweima'];?>">二维码</a>
										<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'delteam','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？" title="删除">删除</a>
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
								<a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中团队</a>
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
							$.post("/web/index.php?c=site&a=entry&m=hyb_yl&p=store&ac=merchant&do=deletes&", { ids : ids ,type:type}, function(data){
								if(!data.errno){
								util.tips("删除成功！");
								location.reload();
								}else{
								util.tips(data.message);	
								};
							}, 'json');
						}, {html: '确认删除所选商户?'});
					});
					//商户申请结算
				    $(".shopSettlement").on('click',function () {
				        var sid = $(this).attr("sid");//获取店铺id
				        var balance = $(this).attr("balance");//总余额
				        tip.prompt('请输入提现金额,不能超过'+balance+'元！',function () {
				            var money = $("[name='confirm']").val();//提现金额
				            if(money > 0 && parseInt(balance) >= parseInt(money)){
				                $.post("/web/index.php?c=site&a=entry&m=weliam_merchant&p=store&ac=merchant&do=cash&",{money:money,sid:sid},function (res) {
				                    if(res.errno == 1){
				                        tip.alert(res.message,function () {
				                            history.go(0);
				                        });
				                    }else{
				                        tip.alert(res.message);
				                    }
				                },'json');
				            }else{
				                tip.alert("请输入正确的提现金额");
				            }
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
			$(document).on('click','.bigImg',function(){
				var src=$(this).attr('data-src')
				$('body').append(`
					<div class="zhe">
					<img class="imgBig" src="${src}"/>
					</div>
					`)
			})
			$(document).on('click','.zhe',function(){
				$(this).remove()
			})
</script>
</body>
</html>