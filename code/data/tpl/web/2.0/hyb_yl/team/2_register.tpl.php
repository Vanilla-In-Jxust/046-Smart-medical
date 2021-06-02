<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="#">评价列表</a></li>
</ul>
<div class="app-content">
    <div class="app-filter">
       
        <div class="filter-list">
            <form action="" method="get" class="form-horizontal" role="form"  id="form2">
            	<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="hyb_yl" />
                <input type="hidden" name="op" value="register" />
                <input type="hidden" name="ac" value="register" />
                <input type="hidden" name="do" value="team" />
                <input type="hidden" name="hid" id="hid" value="<?php  echo $_SESSION['hid'];?>" />
                <div class="form-group">
                    <label class="col-sm-2 control-label">评论时间</label>
                    <div class="col-sm-9">
                        
<script type="text/javascript">
	require(["daterangepicker"], function(){
		$(function(){
			$(".daterange.daterange-time").each(function(){
				var elm = this;
				$(this).daterangepicker({
					startDate: $(elm).prev().prev().val(),
					endDate: $(elm).prev().val(),
					format: "YYYY-MM-DD HH:mm",
					timePicker: true,
					timePicker12Hour : false,
					timePickerIncrement: 1,
					minuteStep: 1
				}, function(start, end){
					$(elm).find(".date-title").html(start.toDateTimeStr() + " 至 " + end.toDateTimeStr());
					$(elm).prev().prev().val(start.toDateTimeStr());
					$(elm).prev().val(end.toDateTimeStr());
				});
			});
		});
	});
</script>

	<input name="start" type="hidden" value="<?php  echo $start;?>" />
	<input name="end" type="hidden" value="<?php  echo $end;?>" />
	<button class="btn btn-default daterange daterange-time" type="button"><span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span> <i class="fa fa-calendar"></i></button>
	                    </div>
                </div>
                <div class="form-group">
					<label class="col-sm-2 control-label">评论类型</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','typs'=>$typs,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($style == '') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>>不限</a>
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>'1','typs'=>$typs,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($style == '1') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>>真实评论</a>
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>'2','typs'=>$typs,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($style == '2') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>>虚拟评论</a>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">评论状态</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>$style,'typs'=>'','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($typs == '') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>">不限</a>
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>$style,'typs'=>'0','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($typs == '0') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>">审核中</a>
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>$style,'typs'=>'1','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($typs == '1') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>">已通过</a>
							<a href="<?php  echo $this->createWebUrl('team',array('op'=>'register','style'=>$style,'typs'=>'2','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" <?php  if($typs == '2') { ?> class="btn btn-primary"<?php  } else { ?>  class="btn btn-default" <?php  } ?>">未通过</a>
						</div>
					</div>
				</div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">专家搜索</label>
                    <div class="col-sm-9">
                        <input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>"  placeholder="请输入专家名称"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-md-9">
                        <span class="btn btn-primary" id="search">搜索</span>
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
                        <th class="text-center" width="10%"><input type="checkbox" name="checkall" value="" id="checkall" class="checkboxall" onclick="var ck = this.checked; $(':checkbox').each(function(){this.checked = ck});"></th>
                        <th class="text-left" width="25%">专家</th>
                        <th class="text-left" width="20%">评价者</th>
                        <th class="text-left" width="20%">评价内容</th>
                        <th class="text-left" width="15%">评分等级<br>评价时间</th>
                        <th class="text-center" width="10%">回复状态</th>
                        <th class="text-center" width="10%">审核状态</th>
                        <th class="text-center" width="10%">操作</th>
                    </tr>
                </thead>
                <tbody>
                <?php  if(is_array($list)) { foreach($list as $item) { ?> 
                                            <tr id="" class="text-center">
                            <td>
                                <center><input type="checkbox" name="items[]" value="<?php  echo $item['gz_id'];?>" class="checkbox"></center>
                            </td>
                           <td class="text-left"><img class="scrollLoading" src="<?php  echo $item['advertisement'];?>" data-url="<?php  echo $item['advertisement'];?>" width="50" height="50">
                             <?php  echo $item['z_name'];?> &nbsp<span class="label label-success"><?php  echo $item['keshi'];?></span><span class="label label-warning"><?php  echo $item['zhicheng'];?></span>
						</td>
                                              
                            <td class="text-left">
                                <img class="scrollLoading" src="<?php  echo $item['u_thumb'];?>" data-url="<?php  echo $item['u_thumb'];?>" onerror="this.src='<?php  echo $item['u_thumb'];?>'" width="40" height="40"><?php  echo $item['u_name'];?>                            </td>
                            <td class="text-left">
                                <?php  echo $item['content'];?>                            </td>
                            <td class="text-left" style="color: #ff6600;">
                                 <?php 
                                   for ($j=0; $j <$item['starsnum'] ; $j++) {
                                  ?>
                                  <i class="fa fa-star"></i>
                                   <?php    }  ?>
                                <br>
                                <?php  echo date("Y-m-d H:i:s",$item['createTime'])?>                         </td>
                            <td>
                                                                <label class="label label-default"><?php  if($item['status'] == '0') { ?>未回复<?php  } else if($item['status'] == '1') { ?>已回复<?php  } ?></label><br>
                                                            </td>
                            <td>
                                <label class="label label-success"><?php  if($item['typs'] == '0') { ?>待审核<?php  } else if($item['typs'] == '1') { ?>审核通过<?php  } else if($item['typs'] == '2') { ?>未通过<?php  } ?></label><br>
                                                            </td>
                            <td style="overflow:visible;">
                                <div class="btn-group btn-group-sm">
                                    <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="javascript:;">操作
                                        <span class="caret"></span>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-left" role="menu" style="z-index: 9999;min-width: 100px;">
                                        <li><a href="<?php  echo $this->createWebUrl('team',array('op'=>'registershenhe','gz_id'=>$item['gz_id'],'typs'=>'1','hid'=>$_SESSION['hid']))?>" title="通过"><i class="fa fa-edit"></i> &nbsp;通过</a></li>
                                        <li><a href="<?php  echo $this->createWebUrl('team',array('op'=>'registershenhe','gz_id'=>$item['gz_id'],'typs'=>'2','hid'=>$_SESSION['hid']))?>" title="回复"><i class="fa fa-list"></i> &nbsp;拒绝</a></li>
                                        <!-- <li><a href="<?php  echo $this->createWebUrl('team',array('op'=>'comment_huifu','gz_id'=>$item['gz_id']))?>" title="回复"><i class="fa fa-list"></i> &nbsp;回复</a></li>
                                        <li><a href="<?php  echo $this->createWebUrl('team',array('op'=>'registeradd','zid'=>$item['zid']))?>" title="添加"><i class="fa fa-list"></i> &nbsp;添加</a></li> -->
                                        <li><a href="<?php  echo $this->createWebUrl('team',array('op'=>'registerdel','gz_id'=>$item['gz_id'],'hid'=>$_SESSION['hid']))?>" title="删除"><i class="fa fa-money"></i> &nbsp;删除</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <?php  } } ?>
                                    </tbody>
            </table>
            <?php  echo $pager;?>
        </div>
        <div class="app-table-foot clearfix">
            <div class="pull-left">
                <button class="btn btn-default btn-sm" type="button" onclick="location.reload();"><i class="fa fa-refresh"></i></button>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-default" disabled="disabled" id="checkYse" onclick="checkOrDelete(1,1);">审核通过</button>
                    <button class="btn btn-default" disabled="disabled" id="checkNo" onclick="checkOrDelete(2,1);">审核不通过</button>
                </div>
                <button class="btn btn-default btn-sm" type="button" disabled="disabled" id="delete" onclick="checkOrDelete(1,2);"><i class="fa fa-trash"></i> 删除</button>
            </div>
            <div class="pull-right">
                            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $("#search").click(function(){
        $('#form2')[0].submit();
    })
</script>
<script>
	$(function(){
		$('.checkbox,.checkboxall').click(function(){
			var $checks=$('.checkbox:checkbox:checked');
			$('#check').attr('disabled','');
			if($checks.length>0) {
				$('#checkYse').attr('disabled',false);
				$('#checkNo').attr('disabled',false);
				$('#delete').attr('disabled',false);
			}else{
				$('#checkYse').attr('disabled',true);
				$('#checkNo').attr('disabled',true);
				$('#delete').attr('disabled',true);
			}
		});

	})
	//通过申请
	function checkOrDelete(check,type){
		var content = '';
		if(check==1 && type==2) content = '确认删除？';
		if(check==1 && type==1) content = '确认审核通过？';
		if(check==2 && type==1) content = '确认审核不通过？';
		layer.open({
		  	title: [
		    	'',
		    	'background-color:#23c6c8; color:#fff;'
		  	]
		  	,anim: 'up'
		  	,content: content
		  	,btn: ['确认', '取消']
		  	,yes:function(index){
		  		var ids = [];
				var $checks=$('.checkbox:checkbox:checked');
				var hid = $("#hid").val();
				$checks.each(function() {
					if (this.checked) {
						ids.push(this.value);
					};
				});
				if(type==1){
					location.href = "/web/index.php?c=site&a=entry&m=hyb_yl&op=registerchange&do=team&typs=shenhe&ids="+ids+"&status="+check+"&hid="+hid;
				}else if(type==2){
					location.href = "/web/index.php?c=site&a=entry&m=hyb_yl&op=registerchange&do=team&typs=del&ids="+ids+"&hid="+hid;
				}
		  	}
		});
	}
	$('#de1').delegate('.js-delete','click',function(e){
			e.stopPropagation();
			var order_ids = [];
			var $checks=$('.checkbox:checkbox:checked');
			$checks.each(function() {
				if (this.checked) {
					order_ids.push(this.value);
				};
			});
				var hid = $("#hid").val();
				var $this = $(this);
				var ids = order_ids;
				util.nailConfirm(this, function(state) {
				if(!state) return;
					$.post("/web/index.php?c=site&a=entry&m=hyb_yl&op=registerchange&typs=del&hid="+hid+"&", { ids : ids }, function(data){
						if(!data.errno){
						util.tips("删除成功！");
						location.reload();
						};
					}, 'json');
				}, {html: '确认删除?'});
			});
</script>
			</div>
		</div>
	</div>
	<div class="foot" id="footer">
		<ul class="links ft">
            <li class="links_item"><div class="copyright">Powered by <a href="http://www.we7.cc"><b>微擎</b></a> v2.0.4 © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a></div></li>
		</ul>
	</div>
	</body>
</html>
