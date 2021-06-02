<?php defined('IN_IA') or exit('Access Denied');?>
  <?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?> 
  <div class="app-container-right"> 
   <style type="text/css">
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
    <li class="active"><a href="javascript:;">报告解读</a></li> 
   </ul> 
   <div class="app-content"> 
    <div class="app-filter"> 
     <div class="alert alert-warning">
       注意一：患者上传报告形式有两种 一种是线上的报告，一种是图片的报告，付费发送报告后。提醒医生解读报告
      <br /> 注意二：报告解读不光是可以解读体检报告，任何报告都可以解读
      <br /> 注意三：不是所有医生都可以解读报告，只有支持对应解读报告的医生才可以
      <br /> 
     </div> 
     <div class="filter-action">
       当前订单:
      <span class="cored"><?php  echo $count;?></span>单，共计问诊人数
      <span class="cored"><?php  echo $count;?></span>人，
      <span class="cored"><?php  echo $money;?></span>元; 
     </div> 
     <div class="filter-list"> 
      <form action="" method="get" class="form-horizontal" role="form" id="form1"> 
       <input type="hidden" name="c" value="site" />
		<input type="hidden" name="a" value="entry" />
		<input type="hidden" name="m" value="hyb_yl" />
		<input type="hidden" name="op" value="informask" />
		<input type="hidden" name="ac" value="informask" />
		<input type="hidden" name="do" value="ask" />
    <input type="hidden" name="hid" value="<?php  echo $_SESSION['hid'];?>" />
       <input type="hidden" name="fightgroupid" value="" /> 
       <div class="form-group" style="max-width: 1180px;"> 
        <label class="col-sm-2 control-label">订单状态</label> 
        <div class="col-sm-10"> 
         <div class="btn-group"> 
          <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">不限</a> 
          <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'0','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '0') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">待支付</a>
<!-- 		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'1','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end))?>" class="btn <?php  if($ispay == '1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">待手术</a>
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'2','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end))?>" class="btn <?php  if($ispay == '2') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">已手术</a> -->
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'3','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '3') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">申请退款</a>
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'4','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '4') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">退款成功</a>
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'5','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '5') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">退款拒绝</a>
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'6','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '6') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">已取消</a>
		<a href="<?php  echo $this->createWebUrl('ask',array('op'=>'informask','ac'=>'informask','ispay'=>'7','keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($ispay == '7') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">已完成</a>
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
       </div>  -->
       <div class="form-group form-inline"> 
        <label class="col-sm-2 control-label">订单搜索</label> 
        <div class="col-sm-9"> 
         <select name="keywordtype" class="form-control">
			<option value="" >订单搜索</option>
			<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>订单号</option>
			<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>用户信息</option>
			<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>接诊医生</option>
			<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>用户电话</option>
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
		<button class="btn btn-default daterange daterange-date" type="button"><span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span> <i class="fa fa-calendar"></i></button>
        </div> 
       </div> 
       <div class="form-group"> 
        <label class="col-sm-2 control-label"></label> 
        <div class="col-md-9"> 
         <button class="btn btn-primary" id="search">筛选</button> 
         <input type="file" id="excelUpload" class="hide" /> 
         <button class="btn btn-default min-width" name="export" type="submit" value="export"><i class="fa fa-download"></i><a href="<?php  echo $this->createWebUrl('ask',array('op'=>'export','ac'=>'informask','ispay'=>$ispay,'keywordtype'=>$keywordtype,'keyword'=>$keyword,'timetype'=>$timetype,'start'=>$start,'end'=>$end,'key_words'=>'tijianjiedu','hid'=>$_SESSION['hid']))?>">导出记录</a></button> 
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
         <div style="width: 400px;text-align: left;">
          接诊信息
         </div> 
         <div class="others">
          用户信息
         </div> 
         <div class="others">
          支付方式
         </div> 
         <div class="others">
          时间信息
         </div> 
         <div class="others">
          费用信息
         </div> 
         <div class="others">
          状态
         </div> 
         <div class="others">
          操作
         </div> 
        </div> 
        <?php  if(is_array($list)) { foreach($list as $item) { ?>
        <div class="table-row">
         <div style="height:20px;padding:0;border-top:none;">
          &nbsp;
         </div>
        </div> 
        <div class="tables"> 
         <div class="table-row table-top"> 
          <div style="text-align: left;color: #8f8e8e;"> 
           <span style="font-weight: bold;margin-right: 10px;color: #2d2d31"> <span class="label label-info ordertype">解读</span> <?php  echo $item['time'];?> </span> 订单编号：<?php  echo $item['orders'];?>&nbsp;&nbsp; 
          </div> 
          <div class="aops text-right"> 
           <i class="icow icow-shutDown" title="订单退款" style="color: #999;margin-right: 3px;display: inline-block;vertical-align: middle"></i> <?php  if($item['ifpay'] == '0') { ?>
                   	 待支付
                   	<?php  } else if($item['ifpay'] == '1') { ?>
                   	已支付待接诊
                   	<?php  } else if($item['ifpay'] == '2') { ?>
                   	接诊中
                   	<?php  } else if($item['ifpay'] == '3') { ?>
                   	已完成待评价
                   	<?php  } else if($item['ifpay'] == '4') { ?>
                   	已评价
                   	<?php  } else if($item['ifpay'] == '5') { ?>
                   	申请退款
                   	<?php  } else if($item['ifpay'] == '6') { ?>
                   	退款成功
                   	<?php  } else if($item['ifpay'] == '7') { ?>
                   	订单关闭
                   	<?php  } ?>
	                                    &nbsp &nbsp;  
         <!--   <a class="op" data-toggle="ajaxPost" href="https://www.webstrongtech.com/web/index.php?c=site&amp;a=entry&amp;m=hyb_yl&amp;p=order&amp;ac=wlOrder&amp;do=createdisorder&amp;id=289&amp;type=a" data-confirm="确认生成相关分销订单？"> <i class="icow icow-shutDown" title="查看详情" style="color: #999;margin-right: 3px;display: inline-block;vertical-align: middle"></i> 生成推客订单 &nbsp; </a>  -->
          </div> 
         </div> 
         <div class="table-row" style="margin:0  20px"> 
          <div class="goods-des"> 
           <div style="display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;margin: 10px 0"> 
            <img src="<?php  echo $item['advertisement'];?>" style="width:70px;height:70px;border:1px solid #efefef; padding:1px;" onerror="this.src='<?php  echo $item['advertisement'];?>'" /> 
            <div style="-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;margin-left: 10px;text-align: left;display: flex;align-items: center"> 
             <div> 
              <div class="title">
                <?php  echo $item['z_name'];?>&nbsp;
               <label class="label label-success"><?php  echo $item['keshi'];?></label> 
               <span class="label label-warning"><?php  echo $item['zhicheng'];?></span>
               <br /> 
               <br /> 所属机构：
               <span class="label label-primary"><?php  echo $item['jigou'];?></span> 
               <span style="color: #999"> </span> 
              </div> 
             </div> 
             <span style="float: right;text-align: right;display: inline-block;width:130px;"> 解读费用：￥<?php  echo $item['money'];?><br /> x1 </span> 
            </div> 
           </div> 
          </div> 
          <div class="list-inner saler" style="text-align: center;"> 
           <div> 
           <a  href="/index.php?c=site&a=entry&op=adduser&do=copysite&m=hyb_yl&act=profile.adduser&ac=notice&u_id=<?php  echo $item['u_id'];?>&hid=<?php  echo $_SESSION['hid'];?>"  > <?php  echo $item['u_name'];?></a>
            <br/><?php  echo $item['names'];?><br/><?php  echo $item['tel'];?><br/>MID:<?php  echo $item['u_id'];?>	   
           </div> 
          </div> 
          <div class="list-inner paystyle" style="text-align:center;"> 
           <!-- 已支付 --> 
           <span> <i class="icow icow-yue text-warning" style="font-size: 17px;"></i><span>微信支付</span></span> 
          </div> 
          <div class="list-inner paystyle"> 
           <!-- 时间信息 --> 
           <span> <i class="icow icow-yue text-warning" style="font-size: 13px;"></i><span>问诊：2020-03-14&nbsp; 18:00<span></span> <br />下单：<?php  echo $item['time'];?><span></span>
            <br/>                  
           <?php  if($item['ifpay'] == '1') { ?>
        支付：<?php  echo $item['paytime'];?>
        <?php  } else if($item['ifpay'] == '2') { ?>
         <br/>接诊：<?php  echo $item['jz_time'];?>
                	                            	                        
        <?php  } ?>
          </div> 
          <a class="list-inner" data-toggle="popover" data-html="true" data-placement="right" data-trigger="hover" data-content="&lt;table style='width:100%;'&gt;
                                            &lt;tr&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;解读费用：&lt;/td&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;￥<?php  echo $item['money'];?>&lt;/td&gt;
                                            &lt;/tr&gt;
                 
                                         &lt;tr&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;优惠券抵扣：&lt;/td&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;￥0.00&lt;/td&gt;
                                            &lt;/tr&gt;
                                                                                                                                                       &lt;tr&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;会员折扣：&lt;/td&gt;
                                                &lt;td  style='border:none;text-align:right;padding: 5px!important;'&gt;￥0.00&lt;/td&gt;
                                            &lt;/tr&gt;
                                                                                                                                                                                                            &lt;tr&gt;
                                                &lt;td style='border:none;text-align:right;padding: 5px!important;'&gt;应收款：&lt;/td&gt;
                                                &lt;td  style='border:none;text-align:right;color:green;padding: 5px!important;'&gt;￥<?php  echo $item['money'];?>&lt;/td&gt;
                                            &lt;/tr&gt;
        
                                        &lt;/table&gt;
                            "> 
           <div style="text-align:center">
             ￥<?php  echo $item['money'];?> 
           </div> </a> 
          <div class="list-inner" style="text-align:center"> 
           <span class="label label-warning">
           <?php  if($item['ifpay'] == '0') { ?>
              待支付
              <?php  } else if($item['ifpay'] == '1') { ?>
              已支付待接诊
              <?php  } else if($item['ifpay'] == '2') { ?>
              接诊中
              <?php  } else if($item['ifpay'] == '3') { ?>
              已完成待评价
              <?php  } else if($item['ifpay'] == '4') { ?>
              已评价
              <?php  } else if($item['ifpay'] == '5') { ?>
              申请退款
              <?php  } else if($item['ifpay'] == '6') { ?>
              退款成功
              <?php  } else if($item['ifpay'] == '7') { ?>
              订单关闭
              <?php  } ?>
           </span> 
          </div> 
          <div class="" style="overflow:visible;margin-top: 40px; text-align: center;"> 
           <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('ask',array('id'=>$item['id'],'ac'=>'informaskdetails','op'=>'informaskdetails','hid'=>$_SESSION['hid']))?>" title="">查看详情</a> 
           <a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('ask',array('back_orser'=>$item['back_orser'],'ifpay'=>'1','ac'=>'informaskpay','op'=>'informaskpay','hid'=>$_SESSION['hid']))?>">确定付款</a> 
           <a class="btn btn-info btn-sm" href="<?php  echo $this->createWebUrl('ask',array('back_orser'=>$item['back_orser'],'keyword'=>'tijianjiedu','ac'=>'askchat','op'=>'askchat','hid'=>$_SESSION['hid']))?>">快速回复</a> 
           <a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('ask',array('back_orser'=>$item['back_orser'],'ac'=>'informaskdetails','op'=>'informaskdel','hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该记录吗？">快速删除</a> 
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
    <li class="links_item">
     <div class="copyright">
      Powered by 
      <a href="http://www.we7.cc"><b>系统</b></a> v2.0.4 &copy; 2014-2015 
      <a href="http://www.we7.cc">www.we7.cc</a>
     </div></li> 
   </ul> 
  </div>   
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainfooter', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainfooter', TEMPLATE_INCLUDEPATH));?> 