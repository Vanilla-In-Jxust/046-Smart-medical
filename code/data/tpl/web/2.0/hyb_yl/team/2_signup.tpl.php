<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>

<div class="app-content">

    <div class="app-filter">
        <div class="filter-list">
            <form action="" method="get" class="form-horizontal" role="form" id="form1">

                <input type="hidden" name="c" value="site" />
                <input type="hidden" name="a" value="entry" />
                <input type="hidden" name="m" value="hyb_yl" />
                <input type="hidden" name="op" value="signup" />
                <input type="hidden" name="ac" value="signup" />
                <input type="hidden" name="do" value="team" />
                <input type="hidden" name="zid" id="zid" value="<?php  echo $zid;?>" />
                <div class="form-group">
                    <label class="col-sm-2 control-label">按状态</label>
                    <div class="col-sm-4">
                    <!-- 1签约中；2已同意；3已解约；4已取消;5拒绝 -->
                        <select name="ifqianyue" style="width: 100%;">
                            <option value="" <?php  if($ifqianyue == '') { ?> selected="" <?php  } ?>>状态</option>
                            <option value="1" <?php  if($ifqianyue == '1') { ?> selected="" <?php  } ?>>待审核</option>
                            <option value="2" <?php  if($ifqianyue == '2') { ?> selected="" <?php  } ?>>已同意</option>
                            <option value="3" <?php  if($ifqianyue == '3') { ?> selected="" <?php  } ?>>已解约</option>
                            <option value="4" <?php  if($ifqianyue == '4') { ?> selected="" <?php  } ?>>已取消</option>
                            <option value="5" <?php  if($ifqianyue == '5') { ?> selected="" <?php  } ?>>已拒绝</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入关键字" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-md-9">
                        <button class="btn btn-primary" id="search">搜索</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="app-table-list">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th style="width: 30px;">
                            <input type="checkbox" onclick="var ck = this.checked;$(':checkbox').each(function(){this.checked = ck});" />
                        </th>
                        <th>ID</th>
                        <th style="width: 150px;">签约用户</th>
                        <th>签约时间</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                <?php  if(is_array($list)) { foreach($list as $item) { ?>
                    <tr>
                        <td>
                            <center>
                                <input type="checkbox" name="checkbox[]" class="checkbox" value="<?php  echo $item['id'];?>" />
                            </center>
                        </td>
                        <td><?php  echo $item['id'];?></td>
                        <td class="text-left">
                            <img class="scrollLoading" src="<?php  echo tomedia($item['u_thumb']) ?>" height="50" width="50" />
                            <?php  echo $item['u_name'];?>
                        </td>
                        <td>
                            <?php  echo $item['cerated_time'];?>
                        </td>
                        <td class="text-left">
                            <?php  if($item['ifqianyue'] =='1') { ?>
                            <label class="label label-error">待审核</label>
                            <?php  } else if($item['ifqianyue'] =='2') { ?>
                            <label class="label label-success">已同意</label>
                            <?php  } else if($item['ifqianyue'] =='3') { ?>
                            <label class="label label-success">已解约</label>
                            <?php  } else if($item['ifqianyue'] =='4') { ?>
                            <label class="label label-success">已取消</label>
                            <?php  } else if($item['ifqianyue'] =='5') { ?>
                            <label class="label label-success">已拒绝</label>
                            <?php  } ?>
                        </td>
                        <td style="position: relative;">
                        <?php  if($item['ifqianyue'] == '1') { ?>
                            <a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'sign_change','id'=>$item['id'],'zid'=>$zid,'ifqianyue'=>'2'))?>" title="同意">同意</a>
                            <a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'sign_change','id'=>$item['id'],'zid'=>$zid,'ifqianyue'=>'5'))?>" title="拒绝">拒绝</a>
                        <?php  } ?>
                            <a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('team',array('op'=>'sign_del','id'=>$item['id'],'zid'=>$zid))?>" data-toggle="ajaxRemove" data-confirm="确定要删除吗？" title="删除">删除</a>
                        
                        </td>
                    </tr>
                    <?php  } } ?>
                </tbody>
            </table>
            <?php  echo $pager;?>
        </div>
        <div class="app-table-foot clearfix">
            <div class="pull-left">
                <div id="de1" class="pull-left">
                    <a href="javascript:;" class="btn btn-default min-width js-batch js-delete pass">删除选中记录</a>
                </div>
            </div>
            <div class="pull-right">
            </div>
        </div>
    </div>
</div>
<script>
    var enabled = "1";
    var zid = $("#zid").val();
    $('#de1').delegate('.pass','click',function(e){
        e.stopPropagation();
        var order_ids = [];
        var $checks=$('.checkbox:checkbox:checked');
        $checks.each(function() {
            if (this.checked) {
                order_ids.push(this.value);
            };
        });
        var $this = $(this);
        var ids = order_ids;
        util.nailConfirm(this, function(state) {
        if(!state) return;
            if(enabled == 4){
                var type = 2;
            }else{
                var type = 1;
            }
            $.post("<?php  echo $this->createWebUrl('team',array('op'=>'sign_dels'))?>", { ids : ids ,type:type,zid:zid}, function(data){
                if(!data.errno){
                util.tips("删除成功！");
                location.reload();
                }else{
                util.tips(data.message);    
                };
            }, 'json');
        }, {html: '确认删除所选记录?'});
    });
</script>
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


</body>
</html>