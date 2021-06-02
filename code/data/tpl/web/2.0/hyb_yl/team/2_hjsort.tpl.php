<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<style>
    td>i{cursor:pointer; display:inline-block; width:100%; height:100%; color:#428bca;}
    .category-caret{display:inline-block; width:20px; margin: 0 10px; text-align:center; cursor:pointer; color:#d9534f;}
    .add.add_level0{cursor:pointer;}
    .scrollLoading{border-radius: 50px;}
</style>
<ul class="nav nav-tabs">
	<li  class="active" ><a href="#">患教分类管理</a></li>
	<li ><a href="<?php  echo $this->createWebUrl('team',array('op'=>'hjsortadd'))?>">添加患教分类</a></li>
</ul>
<div class="app-content">
    <div class="app-filter">
        <div class="filter-action">
            <a href="javascript:;" class="btn btn-primary js-category-all js-collapse">全部折叠</a>
        </div>
    </div>
    <div class="app-table-list">
        <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th class="text-center" width="10%">分类图片</th>
                            <th class="text-center" width="30%">分类名称</th>
                            <th class="text-center" width="10%">分类ID</th>
                            <th class="text-center" width="10%">开启状态</th>
                            <th class="text-center" width="10%">显示顺序</th>
                            <th class="text-center" width="20%">操作</th>
                        </tr>
                    </thead>
                    <tbody >
                    <?php  if(is_array($list)) { foreach($list as $item) { ?>
                                                    <tr class="text-center">
                                <td class="text-left">
                                    <img class="scrollLoading" src="<?php  echo $item['thumb'];?>"  height="45" width="45" >
                                </td>
                                <td class="text-left">
                                    <div>
                                        <span><?php  echo $item['hj_name'];?></span>
                                    </div>
                                    <div>
                                        <span>
                                            <a href="<?php  echo $this->createWebUrl('team',array('op'=>'hjsortadd','pid'=>$item['hj_id']))?>" class="add add_level1" title="添加子分类" >
                                                <i class="fa fa-plus-circle"></i>添加子分类
                                            </a>
                                        </span>
                                        <span class="category-caret">
                                            <i class="fa fa-caret-down js-category-down" style="display:none;" pid="<?php  echo $item['hj_id'];?>"></i>
                                            <i class="fa fa-caret-up js-category-up" pid="<?php  echo $item['hj_id'];?>"></i>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <label class='label label-warning'><?php  echo $item['hj_id'];?></label>
                                </td>
                                <td>
                                                                        <label class='label label-success'><?php  if($item['status'] == '1') { ?>开启<?php  } else if($item['status'] == '0') { ?>关闭<?php  } ?></label>
                                                                    </td>
                                <td><?php  echo $item['sord'];?></td>
                                <td>
                                	
                                    
                                   
                                    <a href="<?php  echo $this->createWebUrl('team',array('op'=>'hjsortadd','hj_id'=>$item['hj_id']))?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="修改">
                                        编辑
                                    </a>
                                    -
                                    <a href="<?php  echo $this->createWebUrl('team',array('op'=>'hj_del','hj_id'=>$item['hj_id'],'type'=>'1'))?>" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="删除">
                                        删除
                                    </a>
                                </td>
                            </tr>
                            <?php  if(is_array($item['child'])) { foreach($item['child'] as $chs) { ?>
                                                            <tr class="js-collpase js-child-category text-center" pid="<?php  echo $chs['pid'];?>">
                                    <td><img class="scrollLoading" src="<?php  echo $chs['thumb'];?>" width='45' height="45" style='float:right;'/></td>
                                    <td class="text-left">
                                        <div style="    padding-left:50px;height:30px;line-height:30px;background:url('./resource/images/bg_repno.gif') no-repeat -245px -545px;">
                                            <?php  echo $chs['hj_name'];?>                                        </div>
                                    </td>
                                    <td>
                                        <label class='label label-default'><?php  echo $chs['hj_id'];?></label>
                                    </td>
                                    <td class="text-center">
                                                                                <label class='label label-success'><?php  if($chs['status'] == '1') { ?>开启
                                                                                <?php  } else if($chs['status'] == '0') { ?>
                                                                                关闭
                                                                                <?php  } ?>
                                                                                </label>
                                                                            </td>
                                    <td class="text-center"><?php  echo $chs['sord'];?></td>
                                    <td class="text-center" style="position:relative;">
                                        <!-- <a href="javascript:;" data-id="839"  data-url="#" id="js-copy839" class="btn btn-default btn-sm js-clip" >
                                                复制链接
                                        </a>
                                        - -->
                                        <a href="<?php  echo $this->createWebUrl('team',array('op'=>'hjsortadd','hj_id'=>$chs['hj_id']))?>" class="btn btn-default btn-sm" data-toggle="tooltip" data-placement="top" title="修改">
                                            编辑
                                        </a>
                                        -
                                        <a href="<?php  echo $this->createWebUrl('team',array('op'=>'hj_del','hj_id'=>$chs['hj_id']))?>" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="删除">
                                            删除
                                        </a>
                                    </td>
                                </tr>
                                <?php  } } ?>
                                <?php  } } ?>
                                                                        </tbody>
                </table>
                <?php  echo $pager;?>
            </div>
	</div>
</div>
<script type="text/javascript">
	//控制显示
	$(function(){
		$('.js-category-all').click(function() {
			if($(this).hasClass('js-collapse')) {
				$('.js-child-category').fadeOut("slow");
				$('.fa-caret-up').hide();
				$('.fa-caret-down').show();
				$(this).text('全部展开').removeClass('js-collapse');
				
			} else {
				
				$('.js-child-category').fadeIn("slow");
				$('.fa-caret-up').show();
				$('.fa-caret-down').hide();
				$(this).text('全部折叠').addClass('js-collapse');
			}
		});
		$('.js-category-up').click(function() {
			var parentId = $(this).attr('pid');
			$('tr[pid="'+parentId+'"]').fadeOut("slow");
			$(this).prev().show();
			$(this).hide();
		});
		$('.js-category-down').click(function() {
			var parentId = $(this).attr('pid');
			$('tr[pid="'+parentId+'"]').fadeIn("slow");
			$(this).next().show();
			$(this).hide();
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
	</body>
</html>
