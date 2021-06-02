<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
	<ul class="nav nav-tabs" id="myTab">
		<li>
			<a href="javascript:;">佣金明细</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-filter">
			<div class="filter-list">
				<form action="" method="get" class="form-horizontal" role="form" id="form1">
					<input type="hidden" name="c" value="site" />
					<input type="hidden" name="a" value="entry" />
					<input type="hidden" name="m" value="hyb_yl" />
					<input type="hidden" name="p" value="distribution" />
					<input type="hidden" name="ac" value="dissysbase" />
					<input type="hidden" name="do" value="disdetail" />
					<div class="form-group">
						<label class="col-sm-2 control-label">状态</label>
						<div class="col-sm-9">
							<div class="btn-group">
								<a href="#" class="btn btn-primary">不限</a>
								<a href="#" class="btn btn-default">收入</a>
								<a href="#" class="btn btn-default">支出</a>
							</div>
						</div>
					</div>

					<div class="form-group form-inline">
						<label class="col-sm-2 control-label">关键字</label>
						<div class="col-sm-9">
							<select name="keywordtype" class="form-control">
								<option value="">关键字类型</option>
								<option value="1">推客MID</option>
								<option value="2">推客昵称</option>
								<option value="5">买家MID</option>
								<option value="6">买家昵称</option>
								<option value="3">金额大于</option>
								<option value="4">金额小于</option>
							</select>
							<input type="text" name="keyword" class="form-control" value="" placeholder="请输入关键字" />
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label">时间</label>
						<div class="col-sm-9">

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

							<input name="time_limit[start]" type="hidden" value="2020-02-18" />
							<input name="time_limit[end]" type="hidden" value="2020-03-19" />
							<button class="btn btn-default daterange daterange-date" type="button">
								<span class="date-title">2020-02-18 至 2020-03-19</span>
								<i class="fa fa-calendar"></i>
							</button>
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-2 control-label"></label>
						<div class="col-md-9">
							<button class="btn btn-primary" id="search">筛选</button>
							<button class="btn btn-default" name="exportflag" type="submit" value="export">
								<i class="fa fa-download"></i> 导出
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		<script type="text/javascript">
			$("#search").click(function(){
			            $('#form1')[0].submit();
			        });
		</script>
		<div class="app-table-list">
			<div class="table-responsive">
				<table class="table table-hover">
					<thead class="navbar-inner">
						<tr>
							<th style="width:5%;">MID</th>
							<th style="width:15%;">推客姓名</th>
							<th style="width:10%;">收支</th>
							<th style="width:10%;">金额</th>
							<th style="width:10%;">来源</th>
							<!-- <th style="width:15%;">描述</th> -->
							<th style="width:25%;">时间</th>
						<!-- 	<th style="width:10%;">订单</th> -->
						</tr>
					</thead>
					<tbody>
					<?php  if(is_array($all)) { foreach($all as $item) { ?>
						<tr>
							<td><?php  echo $item['aid'];?></td>
							<td><?php  echo $item['username'];?></td>
							<td>
								<span class="label label-success"><?php  if($item['over']=='1') { ?>已收<?php  } else { ?> 待收 <?php  } ?></span>
							</td>
							<td style="color: red;"><?php  echo $item['money'];?></td>
							<td><?php  echo $item['ly']['username'];?></td>
						<!-- 	<td>
								后台修改: </td> -->
							<td><?php  echo $item['addtime'];?></td>
							<td></td>
						</tr>
						<?php  } } ?>
					</tbody>
				</table>
			</div>
			<div class="app-table-foot clearfix">
				<div class="pull-left">

				</div>
				<div class="pull-right">
				</div>
			</div>
		</div>
		<style>
			.change:hover{
			            cursor:pointer;
			        }
		</style>
	</div>
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
</script>
</body>
</html>