<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<?php  if($op == 'display') { ?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="#">服务主页</a></li>
</ul>
<div class="app-content">
	<div class="app-filter">
		<div class="filter-action">
			<a class="btn btn-primary" href="/index.php?c=site&a=entry&do=copysite&m=hyb_yl&act=index.docser&ac=docser&op=post">添加服务包</a>
		</div>
		<div class="filter-list">
			<form action="" method="get" class="form-horizontal" role="form" id="form1">
				<div class="form-group">
					<label class="col-sm-2 control-label">搜索内容</label>
					<div class="col-sm-9">
						<input type="text" name="keyname" class="form-control" value="" placeholder="请输入搜索内容">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-sm-9">
						<span class="btn btn-primary" id="search">搜索</span>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="app-table-list">
		<div class="table-responsive">
			<table class="table table-hover table-bordered">
				<thead>
					<tr>
						<th class="text-center">服务主页图片</th>
						<th class="text-center">icon</th>
						<th class="text-center">显示顺序</th>
						<th class="text-center">标题</th>
						<th class="text-center">连接</th>
						<th class="text-center">状态</th>
						<th class="text-center">操作</th>
					</tr>
				</thead>
				<tbody>
				<?php  if(is_array($res)) { foreach($res as $item) { ?>
						<tr  class="text-center">
							<td><img class="scrollLoading" src="<?php  echo tomedia($item['thumb'])?>" data-url="<?php  echo tomedia($item['thumb'])?>" width="100"/></td>
							<td><img class="scrollLoading" src="<?php  echo tomedia($item['icon'])?>" data-url="<?php  echo tomedia($item['icon'])?>" width="100"/></td>
							<td><?php  echo $item['sort'];?></td>
							<td><?php  echo $item['titlme'];?></td>
							<td class="text-lue"><?php  echo $item['url'];?></td>
							<td><input type="checkbox" class="js-switch tpl_change_status" data-url="" data-open="1" data-close="0" <?php  if($item['state'] =='1') { ?> checked="checked" <?php  } ?>></td>
							<td>
								<a class="btn btn-sm btn-warning" href="/index.php?c=site&a=entry&do=copysite&m=hyb_yl&act=index.docser&ac=docser&id=<?php  echo $item['id'];?>&op=post">编辑</a>
								<a class="btn btn-sm btn-danger"  href="/index.php?c=site&a=entry&do=copysite&m=hyb_yl&act=index.delete&ac=docser&id=<?php  echo $item['id'];?>" data-confirm="确定删除当前信息?">删除</a>
							</td>
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
<?php  } ?>
