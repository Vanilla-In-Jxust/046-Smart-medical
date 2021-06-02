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
		<li class="active">
			<a href="javascript:;">检验订单</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-filter">
			<div class="alert alert-warning">
				注意一：这里只展示检验订单其中包含（体检，化验，检验，基因等多类型订单）
				<br />
				注意二：点击查看详情可以看到订单详情，也可以手动修改检验报告，查看报告
				<br />
			</div>
			<div class="filter-action">
				当前订单:<span class="cored"><?php  echo $count;?></span>单，共计检验人数<span class="cored"><?php  echo $count;?></span>人，<span class="cored"><?php  echo $money;?></span>元;
			</div>
			<div class="filter-list">
				<form action="" method="get" class="form-horizontal" role="form" id="form1">
					<input type="hidden" name="c" value="site" />
					<input type="hidden" name="a" value="entry" />
					<input type="hidden" name="m" value="hyb_yl" />
					<input type="hidden" name="op" value="tjorder" />
					<input type="hidden" name="ac" value="tjorder" />
					<input type="hidden" name="do" value="order" />
					<input type="hidden" name="hid" value="<?php  echo $_SESSION['hid'];?>" />
					<input type="hidden" name="fightgroupid" value="" />
					<div class="form-group" style="max-width: 1180px;">
						<label class="col-sm-2 control-label">订单状态</label>
						<div class="col-sm-10">
							<div class="btn-group">
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">不限</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'0','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '0') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">待支付</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'1','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">待接诊</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'2','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '2') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">接诊中</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'3','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '3') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">已完成</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'4','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '4') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">待评价</a>
								<a href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorder','ac'=>'tjorder','ifpay'=>'5','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '5') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">已评价</a>

							</div>
						</div>
					</div>
					<!-- <div class="form-group">
					<label class="col-sm-2 control-label">支付方式</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="#" class="btn btn-primary">不限</a>
							<a href="#" class="btn btn-default">微信支付</a>
							<a href="#" class="btn btn-default">余额支付</a>
						</div>
					</div>
				</div> -->
					<div class="form-group form-inline">
						<label class="col-sm-2 control-label">订单搜索</label>
						<div class="col-sm-9">
							<select name="keywordtype" class="form-control">
								<option value="">订单搜索</option>
								<option value="1" <?php  if($keywordtype=='1' ) { ?> selected="" <?php  } ?>>订单号 </option>
										<option value="2" <?php  if($keywordtype=='2' ) { ?> selected="" <?php  } ?>>用户信息 </option>
										</select>
										<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">时间筛选</label>
						<!-- <div class="col-md-3">
						<select name="timetype" class="form-control">
							<option value="">时间类型</option>
							<option value="1" >下单时间</option>
							<option value="2" >支付时间</option>
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

							<input name="start" type="hidden" value="<?php  echo $start;?>" />
							<input name="end" type="hidden" value="<?php  echo $end;?>" />
							<button class="btn btn-default daterange daterange-date" type="button">
								<span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span>
								<i class="fa fa-calendar"></i>
							</button>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label"></label>
						<div class="col-md-9">
							<button class="btn btn-primary" id="search">筛选</button>
							<input type="file" id="excelUpload" class="hide" />
							<a class="btn btn-default min-width" href="<?php  echo $this->createWebUrl('order',array('op'=>'export','ac'=>'export','hid'=>$_SESSION['hid']))?>" class="btn">报告生成</a>
							<a class="btn btn-default min-width" href="<?php  echo $this->createWebUrl('order',array('op'=>'zips','ac'=>'zips','hid'=>$_SESSION['hid']))?>" class="btn">导出报告</a>
							
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="app-table-list">
			<div class="row">
				<div class="col-md-12">
					<div class="">
						<div class="table-header">
							<div style='width: 400px;text-align: left;'>检验信息</div>
							<div class="others">用户信息</div>
							<!-- <div class="others">支付方式</div> -->
							<div class="others">时间信息</div>
							<div class="others">费用信息</div>

							<div class="others">状态</div>
							<div class="others">操作</div>
						</div>
						<?php  if(is_array($list)) { foreach($list as $item) { ?>
						<div class="table-row">
							<div style='height:20px;padding:0;border-top:none;'>&nbsp;</div>
						</div>
						<div class="tables">
							<div class='table-row table-top'>
								<div style="text-align: left;color: #8f8e8e;">
									<span style="font-weight: bold;margin-right: 10px;color: #2d2d31">
										<span class="label label-info ordertype">检验</span> <?php  echo $item['time'];?>
									</span>
									订单编号：<?php  echo $item['ordernums'];?>&nbsp;&nbsp;
								</div>
								<div class='aops text-right'>


									<!-- <a class='op'  data-toggle='ajaxPost' href="https://www.webstrongtech.com/web/index.php?c=site&a=entry&m=hyb_yl&p=order&ac=wlOrder&do=createdisorder&id=289&type=a" data-confirm="确认生成相关分销订单？" >
	                                    <i class="icow icow-shutDown" title="查看详情"  style="color: #999;margin-right: 3px;display: inline-block;vertical-align: middle"></i>
	                                   	        生成推客订单
	                                    &nbsp
	                                </a> -->
								</div>
							</div>
							<div class='table-row' style="margin:0  20px">
								<div class="goods-des">
									<div style="display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;margin: 10px 0">
										<img src="<?php  echo tomedia($item['taocan']['thumb']) ?>" style='width:70px;height:70px;border:1px solid #efefef; padding:1px;' onerror="this.src='../addons/weliam_merchant/web/resource/images/nopic.jpg'">
										<div style="-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;margin-left: 10px;text-align: left;display: flex;align-items: center">
											<div>
												<div class="title">
													<?php  echo $item['taocan']['title'];?><label class="label label-success"><?php  echo $item['taocan']['tcclass'];?></label>
													<!--  <span class="label label-warning">数量x1</span> -->

													<br />
													<br />
													所属机构：<span class="label label-primary"><?php  echo $item['agentname'];?></span>

													<span style="color: #999"> </span>
												</div>
											</div>
											<span style="float: right;text-align: right;display: inline-block;width:130px;">
												检验费用：￥<?php  echo $item['money'];?>
												<br />
												x1 </span>
										</div>
									</div>
								</div>

								<div class="list-inner saler" style='text-align: center;'>
									<div>
										<a href="/index.php?c=site&a=entry&op=adduser&do=copysite&m=hyb_yl&act=profile.adduser&ac=notice&u_id=<?php  echo $item['u_id'];?>&hid=<?php  echo $_SESSION['hid'];?>"> <?php  echo $item['u_name'];?></a>
										<br />
										<?php  echo $item['u_name'];?>
										<br /><?php  echo $item['u_tel'];?>
										<br />MID:<?php  echo $item['u_id'];?>
									</div>
								</div>
								<!-- <div class="list-inner paystyle" style='text-align:center;' >
	                            <span> <i class="icow icow-yue text-warning" style="font-size: 17px;"></i><span>微信支付</span></span>
	                        </div> -->
								<div class="list-inner paystyle">


									<span>
										<i class="icow icow-yue text-warning" style="font-size: 13px;"></i>
										<span>预约：<?php  echo $item['yy_time'];?><span></span>
											<br />下单：<?php  echo $item['time'];?>
											<br />支付：<?php  echo $item['time'];?>
								</div>

								<a class="list-inner" data-toggle='popover' data-html='true' data-placement='right' data-trigger="hover" data-content="<table style='width:100%;'>
	                                    <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>检验费用：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	         
                                         <!-- <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>优惠券抵扣：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>￥5.00</td>
	                                    </tr>
                                                                                                                                                       <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>会员折扣：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>￥5.00</td>
	                                    </tr> -->
	                                    	                                    	                                    	                                    	                                    <tr>
	                                        <td style='border:none;text-align:right;padding: 5px!important;'>应收款：</td>
	                                        <td  style='border:none;text-align:right;color:green;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	
	                                </table>
	                    ">
									<div style='text-align:center'>
										￥<?php  echo $item['money'];?> </div>
								</a>



								<div class="list-inner" style='text-align:center'>

									<span class="label label-warning">
										<?php  if($item['ifpay'] == '0') { ?>
										待支付
										<?php  } else if($item['ifpay'] == '1') { ?>
										待解读
										<?php  } else if($item['ifpay'] == '2') { ?>
										接诊中
										<?php  } else if($item['ifpay'] == '3') { ?>
										已完成
										<?php  } else if($item['ifpay'] == '4') { ?>
										待评价
										<?php  } else if($item['ifpay'] == '5') { ?>
										已评价
										<?php  } ?>
									</span>
								</div>


								<div class="" style="overflow:visible;margin-top: 40px; text-align: center;">

									<a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorderxq','ac'=>'tjorderxq','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="">查看详情</a>
									<a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorderxq','ac'=>'tjorderxq','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>">确定付款</a>
									<!-- <?php  echo $this->createWebUrl('ask',array('op'=>'askchat','ac'=>'askchat','id'=>$item['id']))?> -->
									<a class="btn btn-info btn-sm btnGoInfo" data-id="<?php  echo $item['id'];?>" href="javascript:;">报告查看</a>
									<a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('order',array('op'=>'tjorderxq','ac'=>'tjorderdel','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该记录吗？">快速删除</a>



								</div>


							</div>
							<?php  } } ?>
						</div>

					</div>
				</div>
			</div>
			<style type="text/css">
				.el-dialog__wrapper {
				     position:fixed;
				     top:0;
				     right:0;
				     bottom:0;
				     left:0;
				     overflow:auto;
				     margin:0;
				     background: rgba(0,0,0,0.5);
				    }
				    .el-dialog {
				     position:relative;
				     margin:0 auto 50px;
				     border-radius:2px;
				     -webkit-box-shadow:0 1px 3px rgba(0,0,0,.3);
				     box-shadow:0 1px 3px rgba(0,0,0,.3);
				     -webkit-box-sizing:border-box;
				     box-sizing:border-box;
				     width:50%;
				     background: #fff;
				    
				    }
				    .el-dialog__body {
				     padding:30px 20px;
				     color:#606266;
				     font-size:14px;
				     word-break:break-all;
				    }
				     .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain {
				     margin:0;
				     width:calc(100% - 26px);
				     position:relative;
				     border-radius:4px;
				     background-color:#fff;
				     padding:24px 13px 30px 13px
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain p {
				     margin:0
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardHead {
				     color:#b9b9b9;
				     font-size:14px;
				     line-height:14px;
				     border-bottom:1px dashed rgba(0,0,0,.15)
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardHead .title {
				     color:#4a4a4a;
				     font-size:16px;
				     line-height:16px;
				     text-align:center;
				     margin-top:33px
				    }
				     .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardHead .presType {
				     color:#4a4a4a;
				     font-size:20px;
				     line-height:20px;
				     text-align:center;
				     margin-top:17px;
				     margin-bottom:44px
				    }
				     .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardHead .row1 {
				     margin-bottom:22px;
				     padding:0 25px 0 12px
				    }
				    .floatR {
				     float:right;
				    }
				    .flex{
				      display: flex;
				    }
				    .justyBetween{
				      justify-content: space-between;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody.chinese {
				        padding: 30px 25px 100px 12px;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody {
				        color: #6b6b6b;
				        font-size: 14px;
				        padding: 0px 25px 100px 15px;
				    }
				    .cardBody table td{
				    	line-height: 54px;
				    	height: 54px; 
				    }
				    .rp {
				        color: #4a4a4a;
				        font-size: 16px;
				        margin-bottom: 8px;
				    }
				     .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody .itemMed.read.chinese {
				        display: inline-block;
				        width: 33%;
				        border-bottom: none;
				        padding: 0;
				        margin-top: 22px;
				        overflow: hidden;
				        text-overflow: ellipsis;
				        white-space: nowrap;
				    }
				    .yellow {
				        color: #ffa726;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody .chineseTotalRead {
				        color: #6b6b6b;
				        font-size: 14px;
				    }
				     .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody .chineseTotalRead p:first-child {
				        margin: 20px 0 25px;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody .chineseTotalRead p {
				        margin-top: 12px;
				    }
				    .area {
				        display: inline-block;
				        min-width: 60px;
				        border-bottom: 1px solid #6b6b6b;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__footer .el-button.el-button--primary:hover {
				        background-color: #2f6eb4;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__footer .el-button {
				        padding: 0;
				        height: 32px;
				        line-height: 32px;
				        width: 100px;
				    }
				    .el-button {
				        display: inline-block;
				        line-height: 1;
				        white-space: nowrap;
				        cursor: pointer;
				        background: #fff;
				        border: 1px solid #dcdfe6;
				        color: #606266;
				        -webkit-appearance: none;
				        text-align: center;
				        -webkit-box-sizing: border-box;
				        box-sizing: border-box;
				        outline: 0;
				        margin: 0;
				        -webkit-transition: .1s;
				        transition: .1s;
				        font-weight: 500;
				        padding: 12px 20px;
				        font-size: 14px;
				        border-radius: 4px;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__footer .el-button {
				        padding: 0;
				        height: 32px;
				        line-height: 32px;
				        width: 100px;
				        background: 
				    }
				    .el-dialog__footer {
				        padding: 10px 35px 25px;
				    }
				    .el-dialog__footer {
				        text-align: right;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__footer .el-button.el-button--primary {
				        background-color: #4381c6;
				    }
				    .el-button--primary {
				        color: #fff;
				        background-color: #409eff;
				        border-color: #409eff;
				    }
				    .el-dialog__wrapper .el-dialog .el-dialog__body .boxPresMain .cardBody .boxSign {
				        position: absolute;
				        bottom: 20px;
				        left: 34px;
				        right: 34px;
				    }
			</style>
			<!-- 检查单详情 -->
       

		</div>
	</div>
	<div id="module-menus-doc" ></div>
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
				$('.btnGoInfo').click(function(e){
		                $('#module-menus-doc').show()
		                var id = e.currentTarget.dataset.id

		                var url ="/index.php?c=site&a=entry&do=copysite&m=hyb_yl&act=profile.userbaogao&id="+id
		             
		                $.ajax({
		                    url:url,
		                    type: "POST",  
		                    dataType: "html",  
		                    cache:false, 

		                    success:function(res){
		                        console.log(res)
		                        $('#module-menus-doc').html(res)
		                    }
		                })
		              })
				$(document).on('click','.close2',function(){
		                $('#module-menus-doc').hide()
		
				})
	</script>
	</body>
	</html>