<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="#">运营统计</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" id="form1">
				<input type="hidden" name="c" value="site" />
				<input type="hidden" name="a" value="entry" />
				<input type="hidden" name="m" value="hyb_yl" />
				<input type="hidden" name="op" value="promotionstatistics" />
				<input type="hidden" name="ac" value="promotionstatistics" />
				<input type="hidden" name="do" value="datum" />
				<!-- <input type="hidden" name="days" value="1" /> -->
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
			</form>
		</div>
	</div>
	
	<div class="panel panel-stat">
		<div class="panel-heading">
			<h3>总览</h3>
		</div>
		<div class="panel-body">
			<div class="col-md-3">
				<div class="title">
					营业总额(元)
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-all-fee">￥<?php  echo $money;?></span>
					</a>
				</div>
			</div>
				<div class="col-md-3">
				<div class="title">
					远程挂号支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-all-fee">￥<?php  echo $guahao;?></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="title">
					药房支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-all-fee">￥<?php  echo $chufang;?></span>
					</a>
				</div>
			</div>
			<div class="col-md-3">
				<div class="title">
					总订单
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-all-order"><?php  echo $count;?></span>
					</a>
				</div>
			</div>
		</div>
		<div class="panel-body">
			
			<div class="col-md-2">
				<div class="title">
					图文问诊支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-fight-fee">￥<?php  echo $tuwen;?></span>
					</a>
					<!-- <span class="info" id="html-total-fight-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					视频问诊支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-coupon-fee">￥<?php  echo $shipin;?></span>
					</a>
					<!-- <span class="info" id="html-total-coupon-order">--</span> -->
				</div>
			</div>
			
			<div class="col-md-2">
				<div class="title">
					电话问诊支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-groupon-fee">￥<?php  echo $tel;?></span>
					</a>
					<!-- <span class="info" id="html-total-groupon-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					手术安排支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-activity-fee">￥<?php  echo $shoushu;?></span>
					</a>
					<!-- <span class="info" id="html-total-activity-order">--</span> -->
				</div>
			</div>
				<div class="col-md-2">
				<div class="title">
					报告解读支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-activity-fee">￥<?php  echo $baogao;?></span>
					</a>
					<!-- <span class="info" id="html-total-activity-order">--</span> -->
				</div>
			</div>
			<div class="col-md-2">
				<div class="title">
					远程开方支付金额
				</div>
				<div class="num-wrapper">
					<a class="num" href="javascript:;">
						<span id="html-total-payonline-fee">￥<?php  echo $chufang;?></span>
					</a>
					<span class="info" id="html-total-payonline-order">--</span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="panel panel-trend">
		<div class="panel-heading">
			<h3>趋势图</h3>
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
						<th>机构名称</th>
						<th>总收益额</th>
						<th>挂号</th>
						<!-- <th>药房</th> -->
						<th>图文</th>
						<th>视频</th>
						<th>电话</th>
						<th>手术</th>
						<th>报告解读</th>
						<th>远程开方</th>
						<th>体检</th>
						<!-- <th>付费入驻</th>
						<th>签约</th> -->
					</tr>
				</thead>
				<tbody>
				<?php  if(is_array($date)) { foreach($date as $item) { ?>
						<td rowspan="<?php  echo count($item['hospital']) + 1;?>"><strong><?php  echo $item['time'];?></strong></td>
				<?php  if(is_array($item['hospital'])) { foreach($item['hospital'] as $zj) { ?>
					<tr>
						<!-- <td><strong>0</strong></td> -->
						<td><?php  echo $zj['agentname'];?></td>
						<td><strong>￥<?php  echo $zj['moneys'];?></strong></td>
						<td><span class="text-success">￥<?php  echo $zj['guahaos'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['tuwens'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['shipins'];?></span></td>
						<td><span class="text-success">￥<?php  echo $zj['tels'];?></span></td>
						
						<td><span class="text-info">￥<?php  echo $zj['shoushus'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['baogaos'];?></span></td>
						<td><span class="text-info">￥<?php  echo $zj['chufangs'];?></span></td>
						
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
<script language="javascript" src="<?php  echo $_W['siteroot'];?>addons/hyb_yl/public/js/highcharts/highcharts.js"></script>
<script type="text/javascript"> 
    $(function () {
    	

    	var data=[
    	<?php  if(is_array($hospital)) { foreach($hospital as $key => $row) { ?>
    		
    		{
    			name:'<?php  echo $row['agentname'];?>',
    			data: [
	                
    					<?php  if(is_array($row['moneyss'])) { foreach($row['moneyss'] as $kk => $rr) { ?>
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
        text: '机构收入统计图'
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
         
    	});
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
	</body>
</html>

