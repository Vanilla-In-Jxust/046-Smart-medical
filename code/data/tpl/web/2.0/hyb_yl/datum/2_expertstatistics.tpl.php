<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="#">专家统计</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" id="form1">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="hyb_yl" />
				<input type="hidden" name="op" value="expertstatistics" />
				<input type="hidden" name="ac" value="expertstatistics" />
				<input type="hidden" name="do" value="datum" />
				<!-- <input type="hidden" name="days" value="1" /> -->
				<div class="form-group form-inline">
					<label class="col-sm-2 control-label">选择专家</label>
					<div class="col-sm-9">
						<select name="zid" class="form-control">
							<option value="" <?php  if($zid=='' ) { ?> selected="" <?php  } ?>>全部 </option>
							<?php  if(is_array($zhuanjia)) { foreach($zhuanjia as $zj) { ?>
							<option value="<?php  echo $zj['zid'];?>" <?php  if($zid==$zj['zid']) { ?> selected="" <?php  } ?>><?php  echo $zj['z_name'];?> </option>
							<?php  } } ?>
							
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">时间</label>
					<div class="col-sm-9 js-daterange" data-form="#form1">
						<div class="btn-group">
							<!-- <a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'1'))?>" class="btn <?php  if($days == '1') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">今天</a>
							<a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'2'))?>" class="btn <?php  if($days == '7') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">最近7天</a>
							<a href="<?php  echo $this->createWebUrl('datum',array('op'=>'index','ac'=>'operationstatistics','timetype'=>'3'))?>" class="btn <?php  if($days == '30') { ?> btn-primary <?php  } else { ?> btn-default <?php  } ?>">最近30天</a> -->
							<a href="javascript:;" class="btn js-btn-custom btn-primary">自定义</a>
						</div>
						<span class="btn-daterange js-btn-daterange">

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

							<input name="start" type="hidden" value="<?php  echo $starts;?>" />
							<input name="end" type="hidden" value="<?php  echo $ends;?>" />
							<button class="btn btn-default daterange daterange-date" type="button">
								<span class="date-title"><?php  echo $starts;?> 至 <?php  echo $ends;?></span>
								<i class="fa fa-calendar"></i>
							</button>
						</span>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-md-9">
						<button class="btn btn-primary" id="search">筛选</button>
					</div>
				</div>
			</form>
		</div>
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
</script>
	<div class="panel panel-stat">
		<div class="panel-heading">
			<h3>总览</h3>
		</div>
		<div class="panel-body">
			<div class="col-md-3">
				<div class="title">
					收益金总额(元)
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-all-fee">￥<?php  echo $money;?></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="title">
					订单总数
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-all-order"><?php  echo $count;?></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="title">
					订单总额(元)
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-all-money"><?php  echo $money;?></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="title">
					专家总人数
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-all-num"><?php  echo count($zhuanjia);?></span>
					</a>
				</div>
			</div>
		</div>
		<div class="panel-body">
			<div class="col-md-2">
				<div class="title">
					图文问诊金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-rush-fee">￥<?php  echo $tuwen;?></span>
					</a>
					<!-- <span class="info" id="html-total-rush-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					视频问诊金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-fight-fee">￥<?php  echo $shipin;?></span>
					</a>
					<!-- <span class="info" id="html-total-fight-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					电话问诊金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-coupon-fee">￥<?php  echo $tel;?></span>
					</a>
					<!-- <span class="info" id="html-total-coupon-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					报告解读金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-groupon-fee">￥<?php  echo $baogao;?></span>
					</a>
					<!-- <span class="info" id="html-total-groupon-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					远程开方金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-pocket-fee">￥<?php  echo $chufang;?></span>
					</a>
					<!-- <span class="info" id="html-total-pocket-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					手术安排金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-half-fee">￥<?php  echo $shoushu;?></span>
					</a>
					<!-- <span class="info" id="html-total-half-order">--</span> -->
				</div>
			</div>
			<!-- <div class="col-md-2">
				<div class="title">
					付费入驻金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-charge-fee">￥--</span>
					</a>
					<span class="info" id="html-total-charge-order">--</span>
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					团队签约金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-distri-fee">￥--</span>
					</a>
					<span class="info" id="html-total-distri-order">--</span>
				</div>
			</div> -->
		</div>
	</div>
	
	<div class="panel panel-trend">
		<div class="panel-heading">
			<h3>柱状图</h3>
		</div>
		<div class="panel-body">
           <div id="container" style="min-width: 800px; height: 400px; margin: 0 auto"></div>
       	</div>
	</div>
	
	<div class="app-table-list">
		<div class="table-responsive">
			<table class="table table-bordered table-hover">
				<thead class="navbar-inner">
					<tr>
						<th>日期</th>
						<!-- <th>专家订单数</th> -->
						<th>专家名称</th>
						<th>总收益额</th>

						<th>图文</th>
						<th>视频</th>
						<th>电话</th>
						<th>挂号</th>
						<th>手术</th>
						<th>远程开方</th>
						<th>报告解读</th>
						<th>体检</th>
						<!-- <th>付费入驻</th>
						<th>签约</th> -->
					</tr>
				</thead>
				<tbody>
				<?php  if(is_array($date)) { foreach($date as $item) { ?>
						<td rowspan="<?php  echo count($item['zhuanjia']) + 1;?>"><strong><?php  echo $item['time'];?></strong></td>
				<?php  if(is_array($item['zhuanjia'])) { foreach($item['zhuanjia'] as $zj) { ?>
					<tr>
						<!-- <td><strong>0</strong></td> -->
						<td><?php  echo $zj['z_name'];?></td>
						<td><strong>￥<?php  echo $zj['moneys'];?></strong></td>
						<td><span class="text-success">￥<?php  echo $zj['tuwens'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['shipins'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['tels'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['guahaos'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['shoushus'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['chufangs'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['baogaos'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['tijians'];?></span></td>
						<!-- <td><span class="text-info">￥0</span></td>
						<td><span class="text-info">￥0</span></td> -->
					</tr>
					<?php  } } ?>
					<?php  } } ?>
								</tbody>
			</table>
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
<div>
	 		

</div>
	<script language="javascript" src="<?php  echo $_W['siteroot'];?>addons/hyb_yl/public/js/highcharts/highcharts.js"></script>
<script type="text/javascript"> 
    $(function () {
    	

    	var data=[
    	<?php  if(is_array($zhuanjias)) { foreach($zhuanjias as $key => $row) { ?>
    		
    		{
    			name:'<?php  echo $row['z_name'];?>',
    			data: [
	                
    					<?php  if(is_array($row['money'])) { foreach($row['money'] as $kk => $rr) { ?>
	                <?php  echo $rr;?>,
	                		<?php  } } ?>
    	 			
	               ]
    		},
    		
    		<?php  } } ?>
    		 ]
    	
    		
    	 console.log(data);
    	 var time=[
				<?php  if(is_array($time)) { foreach($time as $key => $row) { ?>
                      "<?php  echo $row;?>",
            	<?php  } } ?>
    	 ]
    	 console.log(time);
        $('#container').highcharts({
        	chart: {
        type: 'column'
    },
    title: {
        text: '专家收入统计图'
    },
    // subtitle: {
    //     text: '数据来源: WorldClimate.com'
    // },
    xAxis: {
        categories: time,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: '金额 (元)'
        }
    },
    tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            borderWidth: 0
        }
    },
    series: data
         //    chart: {
         //        type: 'line'
         //    },
         //    title: {
         //         text: '<?php  echo $charttitle;?>',
         //    },
         //    subtitle: {
         //        text: ''
         //    },
            
         //    xAxis: {
         //        categories: [    <?php  if(is_array($date)) { foreach($date as $key => $row) { ?>
         //               <?php  if($key>0) { ?>,<?php  } ?>"<?php  echo $row['time'];?>"
         //               <?php  } } ?>]
         //    },
         //    yAxis: {
         //        title: {
         //            text: '金额'
         //        },allowDecimals:false
         //    },
         //    tooltip: {
         //        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		       //  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		       //  '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		       //  footerFormat: '</table>',
		       //  shared: true,
		       //  useHTML: true
         //    },
         //    plotOptions: {
         //        column: {
		       //      borderWidth: 0
		       //  }
         //    },
         //    series: [{
	        //     name: '新增团队',
	        //     data: [
	        //         <?php  if(is_array($date[0]['zhuanjia'])) { foreach($date[0]['zhuanjia'] as $key => $row) { ?>
	        //         <?php  if($key>0) { ?>,<?php  } ?>
	        //         <?php  echo $row['money'];?>
	                
	        //         <?php  } } ?>
	        //     ]
	        // }, {
	        //     name: '签约订单',
	        //     data: [
	        //         <?php  if(is_array($date)) { foreach($date as $key => $row) { ?>
	        //         <?php  if($key>0) { ?>,<?php  } ?><?php  echo $row['order'];?>
	        //         <?php  } } ?>
	        //     ]
	        // }],
    	});
	});
</script>
	</body>
</html>
