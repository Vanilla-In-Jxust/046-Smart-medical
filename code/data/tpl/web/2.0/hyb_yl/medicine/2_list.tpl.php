<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<style>
	.prstyle{color: orangered;}
</style>
<ul class="nav nav-tabs">
	<li <?php  if($status == '') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>''))?>">商品全部<span class="label label-warning pull-right"><?php  if($count > 0) { ?><?php  echo $count;?><?php  } ?></span></a></li>
	<li <?php  if($status == '1') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>'1'))?>">销售中<span class="label label-warning pull-right"><?php  if($sell > 0) { ?><?php  echo $sell;?><?php  } ?></span></a></li>
	<li <?php  if($status == '2') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>'2'))?>">待审核<span class="label label-warning pull-right"><?php  if($shenhe > 0) { ?><?php  echo $shenhe;?><?php  } ?></span></a></li>
	<li <?php  if($status == '3') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>'3'))?>">未通过<span class="label label-warning pull-right"><?php  if($jujue > 0) { ?><?php  echo $jujue;?><?php  } ?></span></a></li>
	<li <?php  if($status == '4') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>'4'))?>">已下架<span class="label label-warning pull-right"><?php  if($xiajia > 0) { ?><?php  echo $xiajia;?><?php  } ?></span></a></li>
	<li <?php  if($status == '5') { ?> class="active" <?php  } ?>><a href="<?php  echo $this->createWeburl('medicine',array('op'=>'list','status'=>'5'))?>">已删除<span class="label label-warning pull-right"><?php  if($delete > 0) { ?><?php  echo $delete;?><?php  } ?></span></a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="app-filter">
			<div class="filter-action">
				<a href="<?php  echo $this->createWeburl('medicine',array('op'=>'add','type_id'=>$type_id))?>" class="btn btn-primary">添加商品</a>
			</div>
		</div> 
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" role="form" id="form1">
				
			<input type="hidden" name="c" value="site">
			<input type="hidden" name="a" value="entry">
			<input type="hidden" name="m" value="hyb_yl">
			<input type="hidden" name="op" value="list"/>
			<input type="hidden" name="ac" value="list"/>
			<input type="hidden" name="do" value="medicine"/>				
			<div class="form-group form-inline">
					<label class="col-sm-2 control-label">关键字</label>
					<div class="col-sm-9">
						<select name="keywordtype" class="form-control">
							<option value="1" <?php  if($keywordtype == '1') { ?> selected="" <?php  } ?>>关键字类型</option>
							<option value="2" <?php  if($keywordtype == '2') { ?> selected="" <?php  } ?>>商品ID</option>
							<option value="3" <?php  if($keywordtype == '3') { ?> selected="" <?php  } ?>>商家ID</option>
							<option value="4" <?php  if($keywordtype == '4') { ?> selected="" <?php  } ?>>商品名称</option>
							<option value="5" <?php  if($keywordtype == '5') { ?> selected="" <?php  } ?>>商家名称</option>
						</select>
						<input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>"  placeholder="请输入关键字"/>
                    </div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-sm-9">
						<button class="btn btn-primary" id="search">筛选</button>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="app-table-list">
		<div class="table-responsive">
			<table id="de1" class="table table-hover table-bordered">
				<thead>
				<tr>
					<th class="text-center" style="width:40px;">ID</th>
					<th class="text-center" style="width:130px;">商品</th>
					<th class="text-center" style="width:90px;">所属来源</th>
					<th class="text-center" style="width:70px;">所属分类</th>
					<th class="text-center" style="width:80px;">制药方</th>
					<th class="text-center" style="width:100px;">价格</th>
					<th class="text-center" style="width:80px;">仓储</th>
					<th class="text-center" style="width:100px;">销量</th>
					<th class="text-center" style="width:60px;">状态</th>
					<th class="text-center" style="width:190px;">操作</th>
				</tr>
				</thead>
				<tbody>
					<?php  if(is_array($list)) { foreach($list as $item) { ?>
								<tr class="text-center" >
					<td>
						<center><?php  echo $item['sid'];?></center>
					</td>
					<!--商品-->
					<td>
						<div class="img" style="text-align: left;padding-left: 2rem;">
							<img style="height: 50px;width: 50px;margin-right: 10px;" class="scrollLoading" src="<?php  echo $item['sthumb'];?>" data-url="<?php  echo $item['sthumb'];?>">
							<span> <?php  echo $item['sname'];?></span>
						</div>
					</td>
					<!--所属商家-->
					<td>
						<?php  echo $item['jigou'];?>					</td>
						<td>
						<label class="label label-success"><?php  echo $item['typs'];?></label>				</td>
						<td>
						<?php  echo $item['s_name'];?>					</td>
					<!--价格-->
					<td>
						<span>原价：<span class="prstyle">￥<?php  echo $item['smoney'];?></span></span><br />
						<span>零售价：<span class="prstyle">￥<?php  echo $item['retail_price'];?></span></span><br />		<span>批发价：<span class="prstyle">￥<?php  echo $item['trade_price'];?></span></span><br />
					</td>
					<!--仓储-->
					<td>
						<span>库存量：<span class="prstyle"><?php  echo $item['snum'];?></span></span><br />
						
					</td>
					<!--数据-->
					<td>
						<p style="color: #428bca;margin-bottom: 0;"><a href="#">已下单：0</a></p>
						<p style="color: #428bca;margin-bottom: 0;"><a href="#">已支付：0</a></p>
						<p style="color: #428bca;margin-bottom: 0;"><a href="#">已完成：0</a></p>
					</td>
					<!--状态-->
					<td>
						<span class="label label-warning">
						<?php  if($item['state'] == '0') { ?>未上架
						<?php  } else if($item['state'] == '1') { ?>
						已上架
						<?php  } ?>
						</span> 																					
					</td>
					<!--操作-->
				<td class="text-center" style="text-align: center;">
                   		 	<a class="btn btn-default btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'add','sid'=>$item['sid']))?>" class="btn btn-primary" title="编辑">编辑</a>
                   		 	<?php  if($item['rec'] == '1') { ?>
                    		<a class="btn btn-primary btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'tuijian','rec'=>'0'))?>" class="btn btn-primary" title="不推荐">不推荐</a>
                    		<?php  } else if($item['rec'] == '0') { ?>
                    		<a class="btn btn-success btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'tuijian','rec'=>'1'))?>" class="btn btn-primary" title="推荐">推荐</a>
                    		<?php  } ?>
                    		<?php  if($item['state'] == '1') { ?>
                    		<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'jia','state'=>'0'))?>" class="btn btn-primary" title="下架">下架</a>
                    		<?php  } else if($item['state'] == '0') { ?>
                    		<a class="btn btn-warning btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'jia','state'=>'1'))?>" class="btn btn-primary" title="上架">上架</a>
                    		<?php  } ?>
                    		<?php  if($item['status'] == '0') { ?>
                    		<a class="btn btn-info btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'shenhe','status'=>'1'))?>" class="btn btn-primary" title="通过">通过</a>
                    		<a class="btn btn-default btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'changes','sid'=>$item['sid'],'typs'=>'shenhe','status'=>'2'))?>" class="btn btn-primary" title="拒绝">拒绝</a>
                    		<?php  } else if($item['status'] == '1') { ?>
                    		<span class="btn btn-success btn-sm">通过</span>
                    		<?php  } else if($item['status'] == '2') { ?>
                    		<span class="btn btn-danger btn-sm">拒绝</span>
                    		<?php  } else if($item['status'] == '3') { ?>
                    		<span class="btn btn-warning btn-sm">已删除</span>
                    		<?php  } ?>
                    		<a class="btn btn-danger btn-sm" href="<?php  echo $this->createWeburl('medicine',array('op'=>'dels','sid'=>$item['sid']))?>" data-toggle="ajaxRemove" data-confirm="删除商品，确定要删除吗？" title="删除">删除</a> 


						</td>
				</tr>
				<?php  } } ?>
								</tbody>
			</table>
			<?php  echo $pager;?>
		</div>
		<div class="app-table-foot clearfix">
			<div class="pull-left">
				
			</div>
			<div class="pull-right">
							</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$("#search").click(function(){
		$('#form1')[0].submit();
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
<script>
    $(function(){
        require(['bootstrap'], function () {
            $("[rel=pop]").popover({
                trigger: 'manual',
                placement: 'right',
                title: $(this).data('title'),
                html: 'true',
                content: $(this).data('content'),
                animation: false
            }).on("mouseenter", function () {
                var _this = this;
                $(this).popover("show");
                $(this).siblings(".popover").on("mouseleave", function () {
                    $(_this).popover('hide');
                });
            }).on("mouseleave", function () {
                var _this = this;
                setTimeout(function () {
                    if (!$(".popover:hover").length) {
                        $(_this).popover("hide")
                    }
                }, 100);
            });
        });
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
</script>

