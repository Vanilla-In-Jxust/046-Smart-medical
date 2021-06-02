<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>

<style type='text/css'>
    .trbody td {text-align: center; vertical-align:top;border-left:1px solid #ccc; border-bottom: 1px solid #ddd;}
    .order-rank img{width:16px; height:16px;}
    .js-remark,.js-admin-remark{word-break:break-all; overflow:hidden; background: #FDEEEE;color: #ED5050;padding: 5px 10px;}
    td.goods-info{position:relative; padding-left:60px;}
    .goods-info .img{position:absolute;top:50%; margin-top:-25px; background: url(https://xiaochuang.webstrongtech.net/addons/hyb_yl/web/resource/images/loading.gif) center center no-repeat; width:50px;height:50px; }
    .goods-info span {white-space: inherit;overflow: hidden;text-overflow: ellipsis;display: block;}
    .status-text{cursor:pointer;}
    .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {border-top: 1px solid rgba(221, 221, 221, 0);}
    .col-md-1{padding-right: 0px;}
    .asd{cursor: pointer;}
</style>

<div class="app-content">
    <div class="app-filter">
        <!-- <div class="filter-action">
            <a href="<?php  echo $this->createWeburl('remoteregistration',array('op'=>'subscribeadd'));?>" class="btn btn-primary">新增预约</a>
        </div> -->
        <div class="filter-list">
            <form action="" method="get" class="form-horizontal" role="form" id="form1">
                <input type="hidden" name="c" value="site" />
                <input type="hidden" name="a" value="entry" />
                <input type="hidden" name="m" value="hyb_yl" />
                <input type="hidden" name="op" value="subscribe" />
                <input type="hidden" name="ac" value="subscribe" />
                <input type="hidden" name="do" value="remoteregistration" />
                <div class="form-group">
                    <label class="col-sm-2 control-label">按科室</label>
                    <div class="col-sm-4" style="display: flex;">
                        <select name="keshi" style="width: 100%;" id="one" onchange="keshi_change()">
                            <option value="">请选择一级科室</option>
                            <?php  if(is_array($keshi_arr)) { foreach($keshi_arr as $ks) { ?>
                            <option value="<?php  echo $ks['id'];?>" <?php  if($keshi == $ks['id']) { ?> selected="" <?php  } ?>><?php  echo $ks['ctname'];?></option>
                            <?php  } } ?>
                        </select>
                        <select name="keshi_two" style="width: 100%;" id="two">
                            <option value="">请选择二级科室</option>
                            <?php  if(is_array($keshis_arr)) { foreach($keshis_arr as $kse) { ?>
                            <option value="<?php  echo $kse['id'];?>" <?php  if($keshi_two == $kse['id']) { ?> selected="" <?php  } ?>><?php  echo $kse['name'];?></option>
                            <?php  } } ?>
                        </select>
                    </div>
                </div>
                  <div class="form-group">
                    <label class="col-sm-2 control-label">预约类型</label>
                    <div class="col-sm-4">
                        <select name="type" style="width: 100%;">
                            <option value="">请选择预约类型</option>
                            <?php  if(is_array($type_arr)) { foreach($type_arr as $typs) { ?>
                            <option value="<?php  echo $typs['id'];?>" <?php  if($typs['id'] == $type) { ?> selected="" <?php  } ?>><?php  echo $typs['title'];?></option>
                            <?php  } } ?>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">专家</label>
                    <div class="col-sm-4">
                        <select name="zhuanjia" style="width: 100%;">
                            <option value="">请选择专家</option>
                            <?php  if(is_array($zhuanjia_arr)) { foreach($zhuanjia_arr as $zj) { ?>
                            <option value="<?php  echo $zj['zid'];?>" <?php  if($zj['zid'] == $zhuanjia) { ?> selected="" <?php  } ?>><?php  echo $zj['z_name'];?></option>
                            <?php  } } ?>
                        </select>
                    </div>
                </div>
                 <div class="form-group">
                    <label class="col-sm-2 control-label">预约状态</label>
                    <div class="col-sm-4">
                        <select name="status" style="width: 100%;">
                            <option value="">请选择预约状态</option>
                            <option value="0" <?php  if($status == '0') { ?> selected="" <?php  } ?>>已预约</option>
                            <option value="1" <?php  if($status == '1') { ?> selected="" <?php  } ?>>已就诊</option>
                            <option value="2" <?php  if($status == '2') { ?> selected="" <?php  } ?>>失约</option>
                            <option value="3" <?php  if($status == '3') { ?> selected="" <?php  } ?>>已取消</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">关键字</label>
                    
                    <div class="col-md-4">
                        <input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="输入患者姓名或手机号" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">时间筛选</label>
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

                        <input name="start" type="hidden" value="<?php  echo $start;?>">
                        <input name="end" type="hidden" value="<?php  echo $end;?>">
                        <button class="btn btn-default daterange daterange-date" type="button">
                            <span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span>
                            <i class="fa fa-calendar"></i>
                        </button>
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
    <div class="app-table-list">
        <div class="panel-body table-responsive collapse in" id="order-template-item-4" style="padding: 0;">
            <table class="table table-bordered">
                <thead style="background-color: #FFFFFF;">
                    <tr>
                        <th width="5%" class="text-center">
                            <input type="checkbox" onclick="var ck = this.checked;$(':checkbox').each(function(){this.checked = ck});" />
                        </th>
                        <th width="15%" class="text-left">挂号编号</th>
                        <th width="10%" class="text-center">患者名称</th>
                        <th width="10%" class="text-center">科室名称</th>
                        <th width="10%" class="text-center">医生名称</th>
                        <th width="10%" class="text-center">挂号日期</th>
                        <th width="10%" class="text-center">就诊日期</th>
                        <th width="10%" class="text-center">挂号费</th>
                        <th width="10%" class="text-center">号段</th>
                        <th width="10%" class="text-center">挂号状态</th>
                        <th width="10%" class="text-center">挂号来源</th>
                        <th width="10%" class="text-center">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <?php  if(is_array($list)) { foreach($list as $item) { ?>
                    <tr>
                        <td style="width: 50px;">
                            <center>
                                <input type="checkbox" name="checkbox[]" class="checkbox" value="<?php  echo $item['id'];?>" />
                            </center>
                        </td>
                        <td><?php  echo $item['id'];?></td>
                        <td class="goods-info line-feed" style="width:170px;">
                            <div class="title">
                                <span><?php  echo $item['u_name'];?></span>
                            </div>
                        </td>
                        <td><?php  echo $item['keshi'];?></td>
                        <td><?php  echo $item['z_name'];?></td>
                        <td><?php  echo $item['created'];?></td>
                        <td><?php  echo $item['yy_time'];?></td>
                        <td><?php  echo $item['money'];?>元</td>
                        <td>
                        <?php  if($item['times'] == '0') { ?>
                        上午
                        <?php  } else if($item['times'] == '1') { ?>
                        下午
                        <?php  } ?>
                        </td>
                        <td>
                        <?php  if($item['status'] == '0') { ?>
                        已预约
                        <?php  } else if($item['status'] == '1') { ?>
                        已就诊
                        <?php  } else if($item['status'] == '2') { ?>
                        失约
                        <?php  } else if($item['status'] == '3') { ?>
                        已取消
                        <?php  } ?>
                        </td>
                        <td><?php  echo $item['jigou'];?></td>
                        <td class="text-center" style="text-align: center;">
                            <a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'weixin','id'=>$item['id']))?>" title="微信交流">微信交流</a>

                            <a class="btn btn-default btn-sm" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'yy_detail','id'=>$item['id']))?>" title="详情">详情</a>

                            <a class="btn btn-danger btn-sm" href="<?php  echo $this->createWebUrl('remoteregistration',array('op'=>'delyuyue','id'=>$item['id']))?>" data-toggle="ajaxRemove" data-confirm="删除订单，确定要删除吗？" title="删除">删除</a>
                        </td>
                    </tr>
                    <?php  } } ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
</div>
</div>
<script type="text/javascript">
    function keshi_change()
    {
        var id = $('#one option:selected') .val();
        if(id != '')
        {
            $.ajax({
                'url':"/index.php?c=site&a=entry&do=team&op=ajax&type=all&m=hyb_yl",
                data:{
                    id:id,
                },
                dataType:"json",
                type:"get",
                success:function(res){
                    var html = '';
                    html +="<select name='keshi_two' style='width: 100%;' id='two'>";
                    html +="<option value=''>请选择二级科室</option>";
                    for(var i=0;i<res.length;i++)
                    {
                        html +="<option value='"+ res[i].id +"'>"+ res[i].name +"</option>";
                    }
                    html +="</select>";
                    $("#two").html(html)
                }
            })
        }
        
    }

</script>
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