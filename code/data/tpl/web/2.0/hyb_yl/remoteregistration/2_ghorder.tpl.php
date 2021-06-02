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
	<li class="active"><a href="javascript:;">挂号订单</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
        <div class="alert alert-warning">
            注意一：挂号订单一旦失效，则不能退款，患者没到诊也不退款<br />
            注意二：挂号订单仅仅只是挂号费用，到诊治疗费用，线下结算<br />
            注意三：挂号后，会提前三小时通知用户及时到诊
        </div>
		<div class="filter-action">
			当前订单:<span class="cored"><?php  echo $count;?></span>个，共计挂号人<span class="cored"><?php  echo $count;?></span>人，<span class="cored"><?php  echo $money;?></span>元;
		</div>
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" role="form" id="form1">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="hyb_yl" />
				<input type="hidden" name="op" value="ghorder" />
				<input type="hidden" name="ac" value="ghorder" />
				<input type="hidden" name="do" value="remoteregistration" />
				<input type="hidden" name="fightgroupid" value="" />
				<input type="hidden" name="hid" id="hid" value="<?php  echo $_SESSION['hid'];?>" />
				<div class="form-group" style="max-width: 1180px;">
					<label class="col-sm-2 control-label">订单状态</label>
					<div class="col-sm-10">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">不限</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'0','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '0') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">未支付</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'1','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '1') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">待接诊</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'2','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '2') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">已到诊</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'3','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '3') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">待评价</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'4','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '4') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">已取消</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','ifpay'=>'5','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ifpay == '5') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">已失约</a>
						
						</div>
					</div>
				</div>
				<!-- <div class="form-group">
					<label class="col-sm-2 control-label">支付方式</label>
					<div class="col-sm-9">
						<div class="btn-group">
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','status'=>$status,'p_type'=>'','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end))?>" class="btn <?php  if($p_type == '') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">不限</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','status'=>$status,'p_type'=>'0','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end))?>" class="btn <?php  if($p_type == '0') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">微信支付</a>
							<a href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'ghorder','status'=>$status,'p_type'=>'1','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end))?>" class="btn <?php  if($p_type == '1') { ?> btn-primary <?php  } else { ?>  btn-default <?php  } ?>">余额支付</a>
						</div>
					</div>
				</div> -->
				<div class="form-group form-inline">
					<label class="col-sm-2 control-label">订单搜索</label>
					<div class="col-sm-9">
						<select name="keywordtype" class="form-control">
							<option value="" >搜索内容</option>
							<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>订单号</option>
							<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>用户信息</option>
							<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>专家信息</option>
							<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>买家电话</option>
						</select>
						<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>"  placeholder="请输入关键字"/>
	                </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">时间筛选</label>
					<div class="col-md-3">
						<select name="timetype" class="form-control">
							<option value="">时间类型</option>
							<option value="1" <?php  if($timetype == '1') { ?> selected="" <?php  } ?>>下单时间</option>
							<option value="2" <?php  if($timetype == '2') { ?> selected="" <?php  } ?>>支付时间</option>
						</select>
                    </div>
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
	<button class="btn btn-default daterange daterange-date" type="button"><span class="date-title"><?php  echo $start;?>至 <?php  echo $end;?></span> <i class="fa fa-calendar"></i></button>
						</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-md-9">
						<button class="btn btn-primary" id="search">筛选</button>
                        <input type="file" id="excelUpload" class="hide"/>
						<!-- <button class="btn btn-default min-width" name="export" type="submit" value="export"><i class="fa fa-download"></i>  导出记录</button> -->
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

	                    <div style='width: 400px;text-align: left;'>挂号信息</div>
	                    <div class="others">用户信息</div>
	                    <div class="others">支付方式</div>
                        <div class="others">时间信息</div>
	                    <div class="others">费用信息</div>
                        <div class="others">患者描述</div>
                        <div class="others">号段</div>
	                    <div class="others">状态</div>
	                    <div class="others">操作</div>
	                </div>
	                <?php  if(is_array($list)) { foreach($list as $item) { ?>
	            	<div class="table-row"><div style='height:20px;padding:0;border-top:none;'>&nbsp;</div></div>
	                <div class="tables">
	                    <div class='table-row table-top'>
	                        <div style="text-align: left;color: #8f8e8e;">
	                            <span style="font-weight: bold;margin-right: 10px;color: #2d2d31">
	                                <span class="label label-info ordertype">挂号</span> <?php  echo $item['time'];?>	                            </span>
	                                                        订单编号：<?php  echo $item['back_orser'];?>&nbsp;&nbsp;
	                            	                            	                        </div>
	                        <div class='aops text-right'>
	                            	                                
	                                    <i class="icow icow-yibiaoji" style="color: #999;display: inline-block;vertical-align: middle" title="  添加备注" ></i>
	                                    备注
	                                    &nbsp	                            	                                	       
	                                    
	                        </div>
	                    </div>
	                    <div class='table-row' style="margin:0  20px">
	                        <div class="goods-des">
	                            <div style="display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;margin: 10px 0">
	                                <img src="<?php  echo $item['advertisement'];?>" style='width:70px;height:70px;border:1px solid #efefef; padding:1px;'onerror="this.src='<?php  echo $item['advertisement'];?>'">
	                                <div style="-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;margin-left: 10px;text-align: left;display: flex;align-items: center">
	                                    <div>
	                                       <div class="title">
	                                           <?php  echo $item['z_name'];?>&nbsp<label class="label label-success"><?php  echo $item['keshi'];?></label> <span class="label label-warning"><?php  echo $item['zhicheng'];?></span><br/>
											 <br/>
                                             所属机构：<span class="label label-primary"><?php  echo $item['jigou'];?></span>
                                               
	                                           <span style="color: #999"> </span>
	                                       	</div>
	                                    </div>
	                                    <span style="float: right;text-align: right;display: inline-block;width:130px;">
	                                                                                挂号费用：￥<?php  echo $item['money'];?><br/>
	                                    	x1	                                    </span>
	                                </div>
	                            </div>
	                        </div>
	
	                        <div class="list-inner saler" style='text-align: center;' >
	                            <div>
	                                <a  href="/index.php?c=site&a=entry&op=adduser&do=copysite&m=hyb_yl&act=profile.adduser&ac=notice&u_id=<?php  echo $item['u_id'];?>&hid=<?php  echo $_SESSION['hid'];?>"  > <?php  echo $item['u_name'];?></a>
	                                <br/>
	                                <?php  echo $item['u_name'];?><br/><?php  echo $item['u_phone'];?><br/>MID:<?php  echo $item['u_id'];?>	                            </div>
	                        </div>
	                        <div class="list-inner paystyle" style='text-align:center;' >
	
	                            <!-- 已支付 -->
	                           <span> <i class="icow icow-yue text-warning" style="font-size: 17px;"></i><span>
	                           线上支付
	                           </span></span>
	                        </div>
	 <div class="list-inner paystyle" style='text-align:center;' >
	
	                            <!-- 时间信息 -->
	                         <span> <i class="icow icow-yue text-warning" style="font-size: 13px;"></i><span>预约：<?php  echo $item['year'];?><span></span>
                                <br/>下单：<?php  echo $item['time'];?> <br/>支付：<?php  echo $item['paytime'];?>
	                                	                            	                        </div>
	
	                        <a  class="list-inner" data-toggle='popover' data-html='true' data-placement='right' data-trigger="hover" data-content="<table style='width:100%;'>
	                                    <tr>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>挂号费用：</td>
	                                        <td  style='border:none;text-align:right;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	                                    <tr>
	                                        <td style='border:none;text-align:right;padding: 5px!important;'>应收款：</td>
	                                        <td  style='border:none;text-align:right;color:green;padding: 5px!important;'>￥<?php  echo $item['money'];?></td>
	                                    </tr>
	
	                                </table>
	                    "
	                    	>
	                        	<div style='text-align:center' >
	                                	￥<?php  echo $item['money'];?>                                	                            </div>
	                        </a>
	 <div class="list-inner paystyle" style='text-align:center;' >
	
	                            <!-- 时间信息 -->
	                         <span> <i class="icow icow-yue text-warning" style="font-size: 15px;"></i><span><?php  echo $item['describe']['text'];?><span></span>
                                
	                                	                            	                        </div>
	                         <div class="list-inner paystyle" style='text-align:center;' >
	                         <?php  echo $item['gh_num'];?>/<?php  echo $item['nums'];?><span></span>
                                
	                         </div>
	
	                        <div  class='ops list-inner' style='line-height:20px;text-align:center' >
	                        
	                            <span class='label label-info'>
	                            <?php  if($item['ifpay'] == '0') { ?>
	                           未付款
	                           <?php  } else if($item['ifpay'] == '1') { ?>
		                       已支付
		                       <?php  } else if($item['ifpay'] == '2') { ?>
		                       接诊中
		                       <?php  } else if($item['ifpay'] == '3') { ?>
		                       待评价
		                       <?php  } else if($item['ifpay'] == '4') { ?>
		                       已完成
		                       <?php  } else if($item['ifpay'] == '5') { ?>
		                       申请退款
		                       <?php  } else if($item['ifpay'] == '6') { ?>
		                       退款成功
		                       <?php  } else if($item['ifpay'] == '7') { ?>
		                       订单关闭
		                       <?php  } else if($item['ifpay'] == '8') { ?>
		                       已失约
		                       <?php  } ?>
	                            </span>
   
	                        </div>
	                          <div class="" style='overflow:visible;margin-top: 40px; text-align: center;' >
	                        
                                <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'orderdetail','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" title="">详情</a>
                                <a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'daozhen','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>">确定到诊</a>
                                                   
                                <a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'orderdel','id'=>$item['id'],'hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该记录吗？">删除</a>					
							</div>
	
	                    </div>
			            									            		            </div>
			            									            		            <?php  } } ?>
	            		            	
	   	</div>
	</div>	
</div>

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
