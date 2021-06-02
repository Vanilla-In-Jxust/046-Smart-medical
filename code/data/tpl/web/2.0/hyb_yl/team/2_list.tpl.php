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
					<a href="<?php  echo $this->createWebUrl('team',array('ac'=>'docindex','op'=>'doctor','status'=>'1','keywordtype'=>$keywordtype,'keyword'=>$keyword,'keshi'=>$keshi,'zhicheng'=>$zhicheng,'gzstype'=>$gzstype,'hid'=>$_SESSION['hid']))?>">入驻中
					<?php  if($ruzhu > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $ruzhu;?></span>
					<?php  } ?>
					</a>
				</li>
				<li <?php  if($status == '2') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWebUrl('team',array('ac'=>'docindex','op'=>'doctor','status'=>'2','keywordtype'=>$keywordtype,'keyword'=>$keyword,'keshi'=>$keshi,'zhicheng'=>$zhicheng,'gzstype'=>$gzstype,'hid'=>$_SESSION['hid']))?>">待入驻
					<?php  if($shenhe > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $shenhe;?></span>
					<?php  } ?>
					</a>
				</li>
				<li <?php  if($status == '3') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWebUrl('team',array('ac'=>'docindex','op'=>'doctor','status'=>'3','keywordtype'=>$keywordtype,'keyword'=>$keyword,'keshi'=>$keshi,'zhicheng'=>$zhicheng,'gzstype'=>$gzstype,'hid'=>$_SESSION['hid']))?>">暂停中
					<?php  if($zanting > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $zanting;?></span>
					<?php  } ?>
					</a>
				</li>
				<li <?php  if($status == '4') { ?> class="active" <?php  } ?>>
					<a href="<?php  echo $this->createWebUrl('team',array('ac'=>'docindex','op'=>'doctor','status'=>'4','keywordtype'=>$keywordtype,'keyword'=>$keyword,'keshi'=>$keshi,'zhicheng'=>$zhicheng,'gzstype'=>$gzstype,'hid'=>$_SESSION['hid']))?>">已到期
					<?php  if($daoqi > 0) { ?>
					<span class="label label-warning pull-right" style="margin-left: 10px;"><?php  echo $daoqi;?></span>
					<?php  } ?>
					</a>
				</li>
			</ul>
			<div class="app-content">
				<div class="app-filter">
					<div class="filter-list">
						<form action="" method="post" class="form-horizontal" role="form" id="form1">
			              	<div class="form-group">
								<label class="col-sm-2 control-label">关键字</label>
								<div class="col-md-3">
									<select name="keywordtype" class="form-control">
										<option value="">关键字类型</option>
										<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>机构名称</option>
										<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>专家名称</option>
										<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>联系人电话</option>
										<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>业务员MID</option>
									</select>
			                    </div>
								<div class="col-md-5">
									<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
								</div>
							</div>
							<div class="form-group" style="display: flex;">
								<label class="col-sm-2 control-label" style="white-space: nowrap;">按科室</label>
								<div class="col-sm-3">
									<select name="keshi" class="form-control" id="one" onchange="keshi_change()">
										<option value="">请选择一级科室</option>
										<?php  if(is_array($keshi_arr)) { foreach($keshi_arr as $ks) { ?>
										<option value="<?php  echo $ks['id'];?>" <?php  if($keshi == $ks['id']) { ?> selected="" <?php  } ?>><?php  echo $ks['ctname'];?></option>
										<?php  } } ?>
									</select>
								</div>
								<div class="col-sm-3">
									<select name="keshi_two" class="form-control" id="two">
										<option value="">请选择二级科室</option>
										<?php  if(is_array($keshis_arr)) { foreach($keshis_arr as $kse) { ?>
										<option value="<?php  echo $kse['id'];?>" <?php  if($keshi_two == $kse['id']) { ?> selected="" <?php  } ?>><?php  echo $kse['name'];?></option>
										<?php  } } ?>
									</select>
								</div>
								<div class="col-md-4" style="display: flex;">
									<label class="col-sm-2 control-label" style="white-space: nowrap;">按职称</label>
									<div class="col-sm-10">
										<select name="zhicheng" class="form-control">
											<option value="">请选择职称</option>
											<?php  if(is_array($zhicheng_arr)) { foreach($zhicheng_arr as $zc) { ?>
											<option value="<?php  echo $zc['id'];?>" <?php  if($zc['id'] == $zhicheng) { ?> selected="" <?php  } ?>><?php  echo $zc['job_name'];?></option>
											<?php  } } ?>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<label class="col-sm-2 control-label">按工作状态</label>
									<div class="col-sm-8">
										<select name="gzstype" class="form-control">
											<option value="">请选择工作状态</option>
											<option value="1" <?php  if($gzstype == '1') { ?> selected="" <?php  } ?>>工作中</option>
											<option value="0" <?php  if($gzstype == '0') { ?> selected="" <?php  } ?>>休息中</option>
										</select>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="col-md-9">
									<button class="btn btn-primary" id="search">筛选</button>
									
                                    <a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('team',array('op'=>'delerweima','ac'=>'delerweima','hid'=>$_SESSION['hid']))?>" data-confirm="删除后需要在前端重新获取，是否删除？">清空二维码</a>
									<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'adderweima','ac'=>'adderweima','hid'=>$_SESSION['hid']))?>" data-confirm="是否重申二维码？">一键生成二维码</a>
									<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'zips','ac'=>'zips','hid'=>$_SESSION['hid']))?>" data-confirm="是否压缩二维码？">压缩二维码</a>
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
									<th style="width: 50px;">专家</th>
									<th></th>
									<th>专家余额</th>
									<th>所属机构</th>
									<th>所属科室</th>
									<th>时间</th>
									<th>入驻状态</th>
									<th>工作状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<?php  if(is_array($res)) { foreach($res as $item) { ?>
							<tbody>
								<tr>
									<td>
										<center>
											<input type="checkbox" name="checkbox[]" class="checkbox" value="94" />
										</center>
									</td>
									<td><?php  echo $item['zid'];?></td>
									<td class="text-left">
										<img class="scrollLoading" src="<?php  echo tomedia($item['advertisement']) ?>" height="50" width="50" />
									</td>
									<td>
										<span data-toggle="tooltip" data-placement="top" title="<?php  echo $item['z_name'];?>" class="text-lue" style="display: inline-block;max-width: 200px;"><?php  echo $item['z_name'];?></span>
									</td>
									<td class="text-left">
										<label class="label label-warning">0.00</label>
									</td>
									<td>
										<label class="label label-success"><?php  echo $item['agentname'];?></label>
									</td>
									<td class="text-left">
										<label class="label label-success"><?php  echo $item['ctname'];?></label>
										<label class="label label-danger"><?php  echo $item['name'];?></label>
									</td>
									<td>
										入驻：<?php  echo date("Y--m-d H:i:s",$item['opentime'])?>
										<br>
										到期：<?php  echo $item['endtime'];?> </td>
									<td>
										<label class="label label-success">
										<?php  if($item['exa'] =='0') { ?>
										待入驻
										<?php  } else if($item['exa'] =='1') { ?>
										入驻中
										<?php  } else if($item['exa'] == '2') { ?>
										暂停中
										<?php  } else if($item['exa'] == '3') { ?>
										审核拒绝
										<?php  } ?>
										</label>
									</td>
									<td>
										<label class="label label-success"><?php  if($item['gzstype'] =='0') { ?>休息中<?php  } else if($item['gzstype'] =='1') { ?>工作中<?php  } else { ?>暂停中<?php  } ?></label>
									</td>
									<td style="overflow:visible;">
										<?php  if($item['exa'] == '0') { ?>
										<a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'change_exa','zid'=>$item['zid'],'ac'=>'change_exa','exa'=>'1','hid'=>$_SESSION['hid']))?>" title="">审核通过</a>
										<a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'change_exa','zid'=>$item['zid'],'ac'=>'change_exa','exa'=>'3','hid'=>$_SESSION['hid']))?>" title="">审核拒绝</a>
										<?php  } ?>
                                        <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'edit','zid'=>$item['zid'],'ac'=>'edit','hid'=>$_SESSION['hid']))?>" title="">编辑</a>
                                        <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'shouyi','zid'=>$item['zid'],'ac'=>'shouyi','hid'=>$_SESSION['hid']))?>" title="">收益明细</a>
                                        <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'signup','zid'=>$item['zid'],'ac'=>'signup','hid'=>$_SESSION['hid']))?>" title="">签约记录</a>
                                        <a class="btn btn-info btn-sm bigImg" href="javascript:;" data-src="<?php  echo $item['erweima'];?>">二维码</a>
                                        <a class="btn btn-warning btn-sm"  href="/index.php?c=site&a=entry&do=team&op=scheduling&ac=scheduling&m=hyb_yl&zid=<?php  echo $item['zid'];?>,'hid'=>$_SESSION['hid']">排班</a>
                                        <a class="btn btn-danger btn-sm"  href="<?php  echo $this->createWebUrl('team',array('op'=>'del','zid'=>$item['zid'],'ac'=>'docindex','hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该会员吗？">删除</a>
                                    </td>
								</tr>
							</tbody>
							<?php  } } ?>
						</table>
				
					</div>
					<div class="app-table-foot clearfix">
						<div class="pull-left">
							<div id="de1" class="pull-left">
								<a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中专家</a>
							</div>
						</div>
						<div class="pull-right"><?php  echo $pager;?></div>
					</div>
				</div>
			</div>
<script type="text/javascript">
    function keshi_change()
    {
        var id = $('#one option:selected') .val();
        if(id != '')
        {
            $.ajax({
                'url':"/index.php?c=site&a=entry&do=team&op=ajax&type=all&m=hyb_yl&hid=$_SESSION['hid']",
                data:{
                    id:id,
                },
                dataType:"json",
                type:"get",
                success:function(res){
                    var html = '';
                    html +="<select name='keshi_two' class='form-control' id='two'>";
                    html +="<option value=''>请选择二级科室</option>";
                    for(var i=0;i<res.length;i++)
                    {
                        html +="<option value='"+ res[i].id +"'>"+ res[i].name +"</option>";
                    }
                    html +="</select>";
                    $("#two").html(html)
                }
            })
        }
        
    }

</script>
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
							$.post("/web/index.php?c=site&a=entry&m=weliam_merchant&p=store&ac=merchant&do=deletes&hid=$_SESSION['hid']&", { ids : ids ,type:type}, function(data){
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
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainfooter', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainfooter', TEMPLATE_INCLUDEPATH));?>
<script>
myrequire(['/js/tip']);
  $(document).on("click", '[data-toggle="ajaxRemove"]', function (e) { //行删除
                    e.preventDefault();
                    var obj = $(this), url = obj.attr('href') || obj.data('href') || obj.data('url'), confirm = obj.data('msg') || obj.data('confirm');

                    var submit = function () {

                        obj.html('<i class="fa fa-spinner fa-spin"></i> ' + tip.lang.processing);
                        $.post(url).done(function (data) {
                             
                            data = eval("(" + data + ")");
                             
                            if (data.status == 1) {
                               window.location.reload()
                            }
                            else {
                                obj.button('reset'), tip.msgbox.err(data.result.message || tip.lang.error, data.result.url);
                            }
                        }).fail(function () {
                            obj.button('reset');
                            tip.msgbox.err(tip.lang.exception);
                        })
                    };

                    if (confirm) {
                        tip.confirm(confirm, submit, function () {
                            obj.removeAttr("disabled", "disabled");
                             
                        });

                    } else {
                    	
                        submit();
                    }

                });

</script> 


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