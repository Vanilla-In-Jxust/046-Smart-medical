<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<style type='text/css'>
.trhead td{background:#efefef;text-align: center}
.trbody td{text-align: center;vertical-align:top;border-left:1px solid #f2f2f2;overflow: hidden;font-size:12px;}
.trorder{background:#f8f8f8;border:1px solid #f2f2f2;text-align:left;}
.ops{border-right:1px solid #f2f2f2;text-align: center;}
.ops a,.ops span{margin: 3px 0;}
.table-top{padding: 0 20px;background: #f7f7f7;border-bottom: 1px solid #e5e5e5;}
.table-top .op:hover{color: #000;}
.tables{border:1px solid #e5e5e5;font-size: 14px;line-height: 18px;}
.tables:hover{border:1px solid #1ab394;}
.table-row,.table-header,.table-footer,.table-top{display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;justify-content: center;-webkit-justify-content: center;-webkit-align-content: space-around;align-content: space-around;}
.tables .table-row.table-top>div{padding: 10.5px 0;}
.tables .table-row .ops.list-inner{border-right:none;}
.tables .table-row .buyremark{background:#fdeeee;color:red;flex: 1;padding: 10px 20px!important;}
.tables .table-row .remark{background:#ffffcc;color:red;flex: 1;padding: 10px 20px!important;}
.tables .list-inner{border-right: 1px solid #efefef;vertical-align: middle;}
.table-row .goods-des .title{width:180px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.table-row .goods-des{border-right: 1px solid #efefef;vertical-align: middle;width:400px;text-align: left;padding: 14px 0;}
.table-row .list-inner{-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;text-align: center;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;-webkit-align-items: center;align-items: center;-webkit-justify-content: center;justify-content: center;-webkit-flex-direction: column;flex-direction: column;}
.saler>div{width:130px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
.table-row .list-inner.ops, .table-row .list-inner.paystyle{-webkit-flex-direction: column;flex-direction: column;-webkit-justify-content: center;justify-content: center;}
.table-header{background:#f8f8f8;height: 40px;line-height: 40px;padding: 0 20px;font-weight: 600;}
.table-header .others{-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;text-align: center;}
.table-footer{border-top: 1px solid #efefef;margin:0 20px;padding: 10.5px 0;}
.table-footer>div, .table-top>div{-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;height:100%;}
.fixed-header div{padding:0;}
.fixed-header.table-header{display: none;}
.fixed-header.table-header.active{display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;}
.shop{display: inline-block;width:48px;height:18px;text-align: center;border:1px solid #1b86ff;color: #1b86ff;margin-right: 10px;}
.min_program{display: inline-block;width:48px;height:18px;text-align: center;border:1px solid #ff5555;color: #ff5555;margin-right: 10px;}
.ordertype{display: inline-block;height:18px;margin-right: 10px;border-radius: 0;font-weight: 500;}
.popover{border: 1px solid #efefef;border: 1px solid #efefef;border-radius: 6px;-webkit-filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));-moz-filter: drop-shadow(0 5px 10px rgba(0, 0, 0, .1));-o-filter: drop-shadow(0 5px 10px rgba(0, 0, 0, .1));filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));padding: 0!important;}
.popover-content{padding: 10px!important;font-size:12px;}
.popover-content table{margin-bottom: 0!important;}
.popover.right>.arrow{border-right-color: #efefef;}
.cored{color: orangered;}
</style>
<ul class="nav nav-tabs">
	<li class="active"><a href="javascript:;">签约订单</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
        <div class="alert alert-warning">
            注意一：这里用户签约医生团队的订单记录，签约后的费用归团队收益，平台不赚取服务费<br />
        
        </div>
		<div class="filter-action">
			当前签约:<span class="cored"><?php  echo $qianyue;?></span>个，共计签约<span class="cored"><?php  echo $count;?></span>单，<span class="cored"><?php  echo $money;?></span>元;
		</div>
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" role="form" id="form1">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="hyb_yl" />
				<input type="hidden" name="op" value="orderlist" />
				<input type="hidden" name="ac" value="orderlist" />
				<input type="hidden" name="do" value="sign" />
				<input type="hidden" name="plugin" value="" />
				<input type="hidden" name="paytype" value="" />
				<input type="hidden" name="status" value="" />
				<input type="hidden" name="fightgroupid" value="" />
				<input type="hidden" name="hid" value="<?php  echo $_SESSION['hid'];?>" />
				<div class="form-group" style="max-width: 1180px;">
					<label class="col-sm-2 control-label">开通类型</label>
					<div class="col-sm-10">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','hid'=>$_SESSION['hid']))?>" class="btn <?php  if($leixing == '') { ?> btn-primary <?php  } else { ?> btn-default<?php  } ?>">不限</a>
						<?php  if(is_array($leixings)) { foreach($leixings as $lx) { ?>
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','key_words'=>$lx['key_words'],'ifpay'=>$ifpay,'start'=>$start,'end'=>$end,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($key_words == $lx['key_words']) { ?> btn-primary <?php  } else { ?> btn-default<?php  } ?>"><?php  echo $lx['titlme'];?></a>
						<?php  } } ?>
						</div>
					</div>
				</div>
				<!-- <div class="form-group">
					<label class="col-sm-2 control-label">支付方式</label>
					<div class="col-sm-9">
						<div class="btn-group">
							
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','type'=>'1','status'=>$status,'start'=>$start,'end'=>$end,'leixing'=>$leixing))?>" class="btn <?php  if($type == '1') { ?> btn-primary <?php  } else { ?> btn-default<?php  } ?>">微信支付</a>
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','type'=>'2','status'=>$status,'start'=>$start,'end'=>$end,'leixing'=>$leixing))?>" class="btn <?php  if($type == '2') { ?> btn-primary <?php  } else { ?> btn-default<?php  } ?>">线下汇款</a>
						</div>
					</div>
				</div> -->
              <div class="form-group">
					<label class="col-sm-2 control-label">状态</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">不限</a>

							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'0','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '0') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">待支付</a>

							<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'1','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '1') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">已支付</a>

                          	<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'2','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '2') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">已完成</a>
                          	<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'3','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '3') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">申请退款</a>
                          	<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'4','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '4') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">退款成功</a>
                          	<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'5','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '5') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">退款拒绝</a>
                          	<a href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderlist','ifpay'=>'6','keyword'=>$keyword,'start'=>$start,'end'=>$end,'key_words'=>$key_words,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '6') { ?> btn-primary <?php  } else { ?>btn-default<?php  } ?>">用户取消</a>
						</div>
					</div>
				</div>
				<div class="form-group form-inline">
					<label class="col-sm-2 control-label">订单搜索</label>
					<div class="col-sm-9">
						<select name="keywordtype" class="form-control">
							<option value="" <?php  if($keywordtype == '') { ?> selected="" <?php  } ?>>订单搜索</option>
							<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>订单号</option>
                          	<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>用户昵称</option>
                          	<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>团队名称</option>
							<!-- <option value="4" >团队名称</option> -->
						</select>
						<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>"  placeholder="请输入关键字"/>
	                </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">时间筛选</label>
					<!-- <div class="col-md-3">
						<select name="timetype" class="form-control">
							<option value="">时间类型</option>
							<option value="1" >签约时间</option>
						</select>
                    </div> -->
					<div class="col-md-2">
					
<script type="text/javascript">
	require(["daterangepicker"], function(){
		$(function(){
			$(".daterange.daterange-date").each(function(){
				var elm = this;
				$(this).daterangepicker({
					startDate: $(elm).prev().prev().val(),
					endDate: $(elm).prev().val(),
					format: "YYYY-MM-DD"
				}, function(start, end){
					$(elm).find(".date-title").html(start.toDateStr() + " 至 " + end.toDateStr());
					$(elm).prev().prev().val(start.toDateStr());
					$(elm).prev().val(end.toDateStr());
				});
			});
		});
	});
</script>
<input name="start" type="hidden" value="<?php  echo $start;?>">
	<input name="end" type="hidden" value="<?php  echo $end;?>">
	<button class="btn btn-default daterange daterange-date" type="button"><span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span> <i class="fa fa-calendar"></i></button>
						</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-md-9">
						<button class="btn btn-primary" id="search">搜索</button>
					</div>
				</div>

</form>

	
			
	<div class="app-table-list">
		<div class="row">
	        <div class="col-md-12">
	            <div class="">
	                <div class="table-header">
	                    <div style='width: 400px;text-align: left;'>签约团队</div>
	                    <div class="others">签约用户</div>
	                    <div class="others">价格</div>
                         <div class="others">时间</div>
                        <div class="others">状态</div>
	                    <div class="others">操作</div>
	                   
	                </div>
	            		            	<div class="table-row"><div style='height:20px;padding:0;border-top:none;'>&nbsp;</div></div>
	            	<?php  if(is_array($list)) { foreach($list as $item) { ?>
	                <div class="tables">
	                    <div class='table-row table-top'>
	                        <div style="text-align: left;color: #8f8e8e;">
	                            <span style="font-weight: bold;margin-right: 10px;color: #2d2d31">
	                                <span class="label label-info ordertype"><?php  echo $item['type_name'];?></span> <?php  echo $item['time'];?>	                            </span>
	                                                        订单编号：<?php  echo $item['orders'];?>&nbsp;&nbsp;
	                            	                            	                        </div>
	                    
	                    </div>
	                    <div class='table-row' style="margin:0  20px">
	                        <div class="goods-des">
	                            <div style="display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;margin: 10px 0">
	                                <img src="<?php  echo $item['fw_thumb'];?>" style='width:70px;height:70px;border:1px solid #efefef; padding:1px;'onerror="this.src='<?php  echo $item['fw_thumb'];?>'">
	                                <div style="-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;margin-left: 10px;text-align: left;display: flex;align-items: center">
	                                    <div>
	                                       <div class="title">
	                                           开通<?php  echo $item['type_name'];?>服务
                                             </br><span class="label label-warning">团队</span>：<?php  echo $item['title'];?>
                                          </br><span class="label label-primary">负责人</span>：<?php  echo $item['z_name'];?>
                                               
	                                           <span style="color: #999"> </span>
	                                       	</div>
	                                    </div>
	                                    <span style="float: right;text-align: right;display: inline-block;width:130px;">
	                                                                                ￥<?php  echo $item['money'];?><br/>
	                                    	x1	                                    </span>
	                                </div>
	                            </div>
	                        </div>
	
	                        <div class="list-inner saler" style='text-align: center;' >
	                            <div>
	                                <a  href="/index.php?c=site&a=entry&op=adduser&do=copysite&m=hyb_yl&act=profile.adduser&ac=notice&u_id=<?php  echo $item['u_id'];?>&hid=<?php  echo $_SESSION['hid'];?>"  > <?php  echo $item['u_name'];?></a>
	                                <br/>
	                                <?php  echo $item['u_name'];?><br/><?php  echo $item['u_phone'];?><br/>TID:<?php  echo $item['u_id'];?>	                            </div>
	                        </div>
	                     
	
	                        <a  class="list-inner" data-toggle='popover' data-html='true' data-placement='right' data-trigger="hover" data-content="<table style='width:100%;'>
	                        <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>支付方式：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'><?php  if($item['type'] == '1') { ?>微信支付<?php  } else if($item['type'] == '2') { ?>线下汇款<?php  } ?></td>
	                                    </tr>
	                                    <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>签约费用：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	                                    <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>时长：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'><?php  echo $item['time_leng'];?>天</td>
	                                    </tr>
	                                    	                                    	                                    	                                    	                                    <tr>
	                                        <td style='border:none;text-align:right;padding: 5px!important;'>应收款：</td>
	                                        <td  style='border:none;text-align:right;color:green;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	
	                                </table>
	                    "
	                    	>
	                        	<div style='text-align:center' >
	                                	<?php  echo $item['money'];?>	                                	                            </div>
	                        </a>
	  <div  class="list-inner"  style='text-align:center' >
	  							下单时间:<?php  echo $item['created'];?>
	  							<?php  if($item['ifpay'] == '1') { ?>
                                </br>支付时间：<?php  echo $item['paytime'];?>
                                <?php  } ?>
                                <?php  if($item['ifpay'] == '3') { ?>
                                </br>申请退款时间：<?php  echo $item['s_time'];?>
                                <?php  } ?>
                                <?php  if($item['ispay'] == '4' || $item['ifpay'] == '5') { ?>
                                </br><?php  echo $item['t_time'];?>
                                <?php  } ?>
	                        </div>
	                 <div class="list-inner paystyle" style='text-align:center;' >
	                            <span class='label label-info'>
	                            <?php  if($item['ifpay'] == '1') { ?>
	                            已支付
	                            <?php  } else if($item['ifpay'] == '0') { ?> 
	                            未支付 
	                            <?php  } else if($item['ifpay'] == '2') { ?>
	                            已完成
	                            <?php  } else if($item['ifpay'] == '3') { ?>
	                            申请退款
	                            <?php  } else if($item['ifpay'] == '4') { ?>
	                            退款成功
	                            <?php  } else if($item['ifpay'] == '5') { ?>
	                            退款拒绝
	                            <?php  } ?>
	                            </span>
   
	                        </div>
                              
                                     <div class="" style="overflow:visible;margin-top: 40px; text-align: center;">
	                        
                                                        <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderdetail','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="查看详情">查看详情</a>
                                                        <?php  if($item['ifpay'] == '0') { ?>
                                                        <a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'changeorder','id'=>$item['id'],'ifpay'=>'1','hid'=>$_SESSION['hid']))?>">确定付款</a>
                                                   		<?php  } ?>
                                                   		<?php  if($item['ifpay'] == '3') { ?>
                                                   		<a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'changeorder','id'=>$item['id'],'ifpay'=>'4','hid'=>$_SESSION['hid']))?>">同意退款</a>
                                                   		<a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('sign',array('op'=>'changeorder','id'=>$item['id'],'ifpay'=>'5','hid'=>$_SESSION['hid']))?>">拒绝退款</a>
                                                   		<?php  } ?>
                                                        <a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('sign',array('op'=>'orderdel','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该记录吗？">快速删除</a>
                                                 
	                          
													
									                        </div>
	
	
	                    </div>
			            									            		            </div>
			            <?php  } } ?>
	            		            	
	            		                <div style="padding: 20px 0;text-align: right" >
	                    	                </div>
	            </div>
	        </div>
	   	</div>
	</div>	
</div>
<script>
    $("#excelUpload").on('change',function () {
        var val = $("#excelUpload").get(0).files[0];//文件内容
        var type = val['name'].split(".");//文件名称+文件后缀
        type = $.trim(type[type.length - 1]);//文件后缀
        $("#excelUpload").val('');
        if(type == 'csv'){
            var fd = new FormData();
            fd.append("file",val);//上传的文件file
            tip.confirm("内容处理中，请不要刷新页面/离开页面!<br />确定后开始处理",function () {
                $.ajax({
                    url:"https://www.webstrongtech.com/web/index.php?c=site&a=entry&m=weliam_merchant&p=order&ac=wlOrder&do=bulkShipment&",
                    type:"post",
                    data:fd,
                    dataType:"json",
                    cache: false,
                    processData: false,
                    contentType: false,
                    async:false,
                    success:function(data){
                        tip.alert(data.message,function () {
                            if(data.errno == 1){
                                var url = "https://www.webstrongtech.com/web/index.php?c=site&a=entry&m=weliam_merchant&p=order&ac=wlOrder&do=batchSend&"+"name="+data.data;
                                window.location.href = url;
                            }
                        });
                    },
                    error:function(){
                        tip.alert("网络错误，请重试！！");
                    }
                });
            });
        }else{
            tip.alert("只能上传csv类型的表格文件");
        }
    });
</script>
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
