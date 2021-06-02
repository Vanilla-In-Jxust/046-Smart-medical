<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>

<div class="app-container-right">
	<ul class="nav nav-tabs" id="myTab">
		<li class="active">
			<a href="#tab_basic">新增班次</a>
		</li>
	</ul>
	<div class="app-content">
		<div class="app-form">
			<form action="" method="post" class="form-horizontal form form-validate">
				<div class="panel panel-default">
					<div class="panel-heading">新增班次</div>
					<div class="panel-body">
						<div class="form-group">
							<label class="col-sm-2 control-label">班次名称</label>
							<div class="col-sm-9">
								<div class="input-group">
									<input type="text" name="title" class="form-control" value="<?php  echo $item['title'];?>">
								</div>
							</div>
							<div class="help-block col-md-10 col-lg-offset-2">班次模板名称。</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">预约人数限制</label>
							<div class="col-sm-9">
								<div class="input-group">
									<span class="input-group-addon">人</span>
									<input type="text" name="nums" class="form-control" value="<?php  echo $item['nums'];?>">
								</div>
							</div>
							<div class="help-block col-md-10 col-lg-offset-2">预约人数限制</div>
						</div>
						<?php  if($item) { ?>
						<div class="form-group">
							<label class="col-sm-2 control-label">班次时间</label>
							<div class="col-md-9">
							<?php  if(is_array($item['times']['time'])) { foreach($item['times']['time'] as $tims) { ?>
								<div id="datas" class="sms-template-1" style="display:block;">
									<div class="col-sm-12 data-item" style="margin-bottom: 10px;padding-left: 0;padding-right: 0;">
										<div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
											<span class="input-group-addon">开始时间</span>
											<input type="time" name="registerdate[startTime][]" class="form-control" value="<?php  echo $tims['startTime'];?>">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>

										</div>


										<div class="input-group form-group col-sm-6" style="margin: 0px;padding-right: 0;float: left;">
											<span class="input-group-addon">结束时间</span>
											<input type="time" name="registerdate[endTime][]" class="form-control" value="<?php  echo $tims['endTime'];?>">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>

											<span class="input-group-addon btn btn-default data-item-delete">
												<i class="fa fa-remove"></i>删除
											</span>
										</div>
									</div>
									<script type="text/javascript">
										$(document).on('click', '.data-item-delete', function () {
										        $(this).closest('.data-item').remove();
										  });
									</script>
								</div>
								
								<?php  } } ?>
								<div class="form-group sms-template-1" style="display:block;">
									<div class="col-sm-6" style="padding-left: 0;">
										<a class="btn btn-default btn-add-type btn1 col-sm-12 col-xs-12" href="javascript:;" onclick="addType();">
											<i class="fa fa-plus" title=""></i>增加时间
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group layui-form-item" id="weeke">
							<label class="col-xs-12 col-sm-3 col-md-2 col-lg-2 control-label">按星期</label>
							<div class="col-md-9">
								<div class="layui-input-block">
									<label class="checkbox-inline">
										<input type="checkbox" value="1" name="halfcard[week][]" <?php  if(in_array('1',$item['week'])) { ?> checked="" <?php  } ?>> 星期一
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="2" name="halfcard[week][]" <?php  if(in_array('2',$item['week'])) { ?> checked="" <?php  } ?>> 星期二
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="3" name="halfcard[week][]" <?php  if(in_array('3',$item['week'])) { ?> checked="" <?php  } ?>> 星期三
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="4" name="halfcard[week][]" <?php  if(in_array('4',$item['week'])) { ?> checked="" <?php  } ?>> 星期四
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="5" name="halfcard[week][]" <?php  if(in_array('5',$item['week'])) { ?> checked="" <?php  } ?>> 星期五
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="6" name="halfcard[week][]" <?php  if(in_array('6',$item['week'])) { ?> checked="" <?php  } ?>> 星期六
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="0" name="halfcard[week][]" <?php  if(in_array('0',$item['week'])) { ?> checked="" <?php  } ?>> 星期日
									</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">时段</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" id="inlineRadio3" name="type" <?php  if($item['type'] == '上午') { ?> checked="checked" <?php  } ?> value="上午">上午
								</label>
								<label class="radio-inline">
									<input type="radio" id="inlineRadio4" name="type" <?php  if($item['type'] == '下午') { ?> checked="checked" <?php  } ?>  value="下午">下午
								</label>
							</div>
						</div>
						<?php  } else { ?>
						<div class="form-group">
							<label class="col-sm-2 control-label">班次时间</label>
							<div class="col-md-9">
								<div id="datas" class="sms-template-1" style="display:block;">
									<div class="col-sm-12 data-item" style="margin-bottom: 10px;padding-left: 0;padding-right: 0;">
										<div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
											<span class="input-group-addon">开始时间</span>
											<input type="time" name="registerdate[startTime][]" class="form-control" value="">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>

										</div>


										<div class="input-group form-group col-sm-6" style="margin: 0px;padding-right: 0;float: left;">
											<span class="input-group-addon">结束时间</span>
											<input type="time" name="registerdate[endTime][]" class="form-control" value="">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>

											<span class="input-group-addon btn btn-default data-item-delete">
												<i class="fa fa-remove"></i>删除
											</span>
										</div>
									</div>
									<script type="text/javascript">
										$(document).on('click', '.data-item-delete', function () {
										        $(this).closest('.data-item').remove();
										  });
									</script>
								</div>
								<div class="form-group sms-template-1" style="display:block;">
									<div class="col-sm-6" style="padding-left: 0;">
										<a class="btn btn-default btn-add-type btn1 col-sm-12 col-xs-12" href="javascript:;" onclick="addType();">
											<i class="fa fa-plus" title=""></i>增加时间
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="form-group layui-form-item" id="weeke">
							<label class="col-xs-12 col-sm-3 col-md-2 col-lg-2 control-label">按星期</label>
							<div class="col-md-9">
								<div class="layui-input-block">
									<label class="checkbox-inline">
										<input type="checkbox" value="1" name="halfcard[week][]"> 星期一
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="2" name="halfcard[week][]"> 星期二
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="3" name="halfcard[week][]"> 星期三
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="4" name="halfcard[week][]"> 星期四
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="5" name="halfcard[week][]"> 星期五
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="6" name="halfcard[week][]"> 星期六
									</label>
									<label class="checkbox-inline">
										<input type="checkbox" value="0" name="halfcard[week][]"> 星期日
									</label>
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="col-sm-2 control-label">时段</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" id="inlineRadio3" name="type" value="上午">上午
								</label>
								<label class="radio-inline">
									<input type="radio" id="inlineRadio4" name="type"  value="下午" checked="checked">下午
								</label>
							</div>
						</div>
						<?php  } ?>
						<div class="form-group">
							<label class="col-sm-2 control-label">状态</label>
							<div class="col-sm-9">
								<label class="radio-inline">
									<input type="radio" id="inlineRadio1" name="state" value="1" <?php  if($item['state'] == '1') { ?> checked="" <?php  } ?>>开启
								</label>
								<label class="radio-inline">
									<input type="radio" id="inlineRadio2" name="state" value="0" <?php  if($item['state'] == '0') { ?> checked="" <?php  } ?>>关闭
								</label>
							</div>
						</div>

					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-sm-9">
						<input type="submit" name="submit" value="提交" class="btn btn-primary min-width" />
						<input type="hidden" name="token" value="<?php  echo $_W['token'];?>" />
					</div>
				</div>
			</form>
		</div>
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
			function addType(){
				$('#datas').append(`
						<div class="col-sm-12 data-item" style="margin-bottom: 10px;padding-left: 0;padding-right: 0;">
	    <div class="input-group form-group col-sm-6" style="margin: 0px;padding-left: 0;float: left;">
	    	<span class="input-group-addon">开始时间</span>
			<input type="time" name="registerdate[startTime][]" class="form-control" value="">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>
	    
		</div>
	
	    <div class="input-group form-group col-sm-6" style="margin: 0px;padding-right: 0;float: left;">
	    	<span class="input-group-addon">结束时间</span>
	      	<input type="time" name="registerdate[endTime][]" class="form-control" value="">
											<span class="input-group-addon">
												<span class="glyphicon glyphicon-time"></span>
											</span>
	
			<span class="input-group-addon btn btn-default data-item-delete"><i class="fa fa-remove"></i>删除</span>
	    </div>
	</div>
	</div>
					`)
			}

</script>
</body>
</html>