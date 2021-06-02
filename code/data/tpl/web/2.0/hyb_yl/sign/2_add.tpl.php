<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
    <script type="text/javascript" src="http://www.webstrongtech.com/addons/hyb_yl/web/resource/js/diyarea.js"></script>
    <ul class="nav nav-tabs" id="myTab">
        <li class="active">
            <a href="#tab_1">团队信息</a>
        </li>
        <li>
            <a href="#tab_2">团队设置</a>
        </li>
        <li>
            <a href="#tab_3">开通服务</a>
        </li>
    </ul>
    <div class="app-content">
        <div class="app-form">
            <form action="" method="post" class="form-horizontal form form-validate">
                <input type="hidden" name="id" value="<?php  echo $id;?>" />
                <div class="tab-content">
                    <!--代理商基本信息-->
                    <div class="tab-pane  active" id="tab_1">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                负责人信息
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">绑定专家微信</label>
                                    <div class="col-sm-8">
                                        <input type="hidden" id="openid" name="openid" value="">
                                        <input type="hidden" id="zid" name="zid" value="<?php  echo $item['zid'];?>">
                                        <div class="input-group">
                                            <input type="text" name="nickname" maxlength="30" class="form-control" id="salers" value="<?php  echo $item['zhuanjia'];?>" readonly="">
                                            <span class="btn input-group-addon" onclick="popwin = $('#modal-module-menus-doc').modal();">绑定专家微信</span>
                                        </div>
                                        <div id="modal-module-menus-doc" class="modal fade" tabindex="-1">
                                            <div class="modal-dialog" style="width: 660px;">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                                                        <h3>绑定专家微信</h3>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="row">
                                                            <div class="input-group">
                                                                <input type="text" class="form-control" name="keyword" value="" id="search-kwd" placeholder="输入编辑员名称或openid或uid">
                                                                <span class="input-group-btn">
                                                                    <button type="button" class="btn btn-default" onclick="search_membersdoc();">搜索</button>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div id="user_list_doc" style="padding-top:5px;">
                                                            
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队名称<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">
                                        <input type="text" name="title" required placeholder="请输入团队名称" class="form-control" value="<?php  echo $item['title'];?>">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队排序</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="sort" class="form-control" value="<?php  echo $item['sort'];?>">
                                        <div class="help-block">数字越大排序越靠前。</div>
                                    </div>
                                </div>
                            
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队类别<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">
                                        <select name="type" class="form-control">
                                            <option value="1" <?php  if($item['type'] == '1') { ?> selected="" <?php  } ?>>线下团队</option>
                                            <option value="0" <?php  if($item['type'] == '0') { ?> selected="" <?php  } ?>>线上团队</option>
                                        </select>
                                    </div>
                                </div>
                               
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">所属社区<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">
                                        <select name="cid" class="form-control">
                                            <option value="">所属社区</option>
                                            <?php  if(is_array($shequ)) { foreach($shequ as $sq) { ?>
                                            <option value="<?php  echo $sq['id'];?>" <?php  if($item['cid'] == $sq['id']) { ?> selected="" <?php  } ?>><?php  echo $sq['title'];?></option>
                                            <?php  } } ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">负责人联系电话</label>
                                    <div class="col-sm-9">
                                        <input type="text" name="telphone" placeholder="请输入联系电话" class="form-control" value="<?php  echo $item['telphone'];?>">
                                    </div>
                                </div>
                             
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">所在区域<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">
                                        <?php  echo tpl_form_field_district('address',array('province' =>$item['province'],'city'=>$item['city'],'district'=>$item['district']))?>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">所在位置</label>
                                    <div class="col-sm-9">
                                        <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&amp;ak=F51571495f717ff1194de02366bb8da9&amp;s=1"></script>
                                        <script type="text/javascript" src="https://api.map.baidu.com/getscript?v=2.0&amp;ak=F51571495f717ff1194de02366bb8da9&amp;services=&amp;t=20200327103013"></script>
                                        <script type="text/javascript">
                                            function showCoordinate(elm) {
                                                                require(["util"], function(util){
                                                                    var val = {};
                                                                    val.lng = parseFloat($(elm).parent().prev().prev().find(":text").val());
                                                                    val.lat = parseFloat($(elm).parent().prev().find(":text").val());
                                                                    util.map(val, function(r){
                                                                        $(elm).parent().prev().prev().find(":text").val(r.lng);
                                                                        $(elm).parent().prev().find(":text").val(r.lat);
                                                                    });
                                            
                                                                });
                                                            }
                                        </script>
                                        <div class="row row-fix">
                                            <div class="col-xs-4 col-sm-4">
                                                <input type="text" name="register[location][lon]" value="<?php  echo $item['lon'];?>" placeholder="地理经度" class="form-control">
                                            </div>
                                            <div class="col-xs-4 col-sm-4">
                                                <input type="text" name="register[location][lat]" value="<?php  echo $item['lat'];?>" placeholder="地理纬度" class="form-control">
                                            </div>
                                            <div class="col-xs-4 col-sm-4">
                                                <button onclick="showCoordinate(this);" class="btn btn-default" type="button">选择坐标</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">所属机构<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">


                                        <div class="row row-fix tpl-category-container">
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                            
                                                <select class="form-control tpl-category-parent we7-select" id="category_parentjg" name="jigou_one" >
                                                    <option value="0">请选择一级分类</option>
                                                    <option value="1" <?php  if($res['jigou_one'] =='1') { ?> selected <?php  } ?>>医院</option>
                                                    <option value="2" <?php  if($res['jigou_one'] =='2') { ?> selected <?php  } ?>>药房</option>
                                                    <option value="3" <?php  if($res['jigou_one'] =='3') { ?> selected <?php  } ?>>体检机构</option>
                                                    <option value="4" <?php  if($res['jigou_one'] =='4') { ?> selected <?php  } ?>>诊所</option>
                                                    
                                                </select>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <select class="form-control tpl-category-child we7-select" id="category_childjg" name="jigou_two">
                                                    <option value='0'>请选择二级分类</option>
                                                    <?php  if(is_array($quanxian2)) { foreach($quanxian2 as $qx) { ?>
                                                    <option value="<?php  echo $qx['hid'];?>" <?php  if($item['jigou_two'] == $qx['hid']) { ?> selected <?php  } ?>><?php  echo $qx['agentname'];?></option>
                                                    <?php  } } ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">科室类别<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">

                                        <div class="row row-fix tpl-category-container">
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <select class="form-control tpl-category-parent we7-select" id="category_parent" name="keshi_one">
                                                    <option value="0">请选择一级分类</option>
                                                    <?php  if(is_array($ks_list)) { foreach($ks_list as $items) { ?>
                                                          <option value="<?php  echo $items['id'];?>" <?php  if($items['id']==$item['keshi_one']) { ?> selected="selected" <?php  } ?>><?php  echo $items['ctname'];?></option>
                                                    <?php  } } ?>
                                                </select>
                                            </div>
                                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                <select class="form-control tpl-category-child we7-select" id="category_child" name="keshi_two">
                                                     <option value='0'>请选择二级分类</option>
                                                     <?php  if(is_array($ks_two)) { foreach($ks_two as $ks) { ?>
                                                          <option value="<?php  echo $ks['id'];?>" <?php  if($ks['id']==$item['keshi_two']) { ?> selected="selected" <?php  } ?>><?php  echo $ks['name'];?></option>
                                                    <?php  } } ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">擅长标签</label>
                                    <div class="col-sm-9" id="biaoqian">
                                    <?php  if(is_array($res_sc)) { foreach($res_sc as $res) { ?>
                                         <label class="checkbox-inline"><input <?php  if(in_array($res,$item['label'])) { ?> checked="checked" <?php  } ?> type="checkbox" name="label[]" value="<?php  echo $res;?>"><?php  echo $res;?></label>
                                    <?php  } } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                团队设置
                            </div>
                            <div class="panel-body">
                                
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">入驻状态<span class="must-fill">*</span>
                                    </label>
                                    <div class="col-sm-9">
                                        <select name="status" class="form-control valid" aria-invalid="false">
                                            <option value="0" <?php  if($item['status'] == '0') { ?> selected="" <?php  } ?>>审核中</option>
                                            <option value="1" <?php  if($item['status'] == '1') { ?> selected="" <?php  } ?>>入驻中</option>
                                        </select>
                                    </div>
                                </div>
                             
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">是否在列表显示</label>
                                    <div class="col-sm-9">
                                        <label class="radio-inline">
                                            <input type="radio" name="is_show" value="1" <?php  if($item['is_show'] == '1') { ?> checked="" <?php  } ?>> 显示
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="is_show" value="0" <?php  if($item['is_show'] == '0') { ?> checked="" <?php  } ?>> 隐藏
                                        </label>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                    <!--团队设置-->
                    <div class="tab-pane" id="tab_2">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                团队设置
                            </div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队logo</label>
                                    <div class="col-sm-9">

                                       <?php  echo tpl_form_field_image('thumb',$item['thumb'])?>
                                        <div class="help-block">团队lgo</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队荣誉资质</label>
                                    <div class="col-sm-9">
                                       <?php  echo tpl_form_field_image('imgpath',$item['imgpath'])?>
                                        <div class="help-block">团队荣誉资质</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">虚拟月回答</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="xn_answer" class="form-control" value="<?php  echo $item['xn_answer'];?>">
                                        <div class="help-block">当前月回答次数</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">虚拟月处方</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="xn_chufang" class="form-control" value="<?php  echo $item['xn_chufang'];?>">
                                        <div class="help-block">当前月处方数</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">响应时间</label>
                                    <div class="col-sm-9">
                                        <input type="number" name="times" class="form-control" value="<?php  echo $item['times'];?>">
                                        <div class="help-block">分钟数</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-sm-2 control-label">团队余额</label>
                                    <div class="col-sm-9">
                                        <input type="text" name="money" class="form-control" value="<?php  echo $item['money'];?>">
                                        <div class="help-block">团队余额</div>
                                    </div>
                                </div>
                                <div class="form-group" style="">
                                    <label class="col-sm-2 control-label">团队简介</label>
                                    <div class="col-sm-9" style="">
                                       <textarea rows="6" cols="20" class="form-control ng-pristine ng-untouched ng-valid ng-empty"  name="content" id="content"><?php  echo $item['content'];?></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--团队服务包设置-->
                    <div class="tab-pane" id="tab_3">

                        <div class="panel panel-default">
                            <div class="table-responsive">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center" width="20%">服务开通</th>
                                            <th class="text-center" width="20%">普通用户(问诊价格)</th>
                                            <th class="text-center" width="10%">免费追问次数</th>
                                            <th class="text-center" width="20%">会员用户（问诊价格）</th>
                                            <th class="text-center" width="10%">免费追问次数</th>
                                            <th class="text-center" width="10%">开关</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php  if(is_array($data_list2)) { foreach($data_list2 as $key => $item) { ?>
                                        <tr>
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][ids]" value="<?php  echo $item['ids'];?>">
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][key_words]" value="<?php  echo $item['key_words'];?>">
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][bid]" value="<?php echo
                                             !$item['id']?$item['bid']:$item['id']?>">
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][titlme]" value="<?php  echo $item['titlme'];?>">
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][time]" value="<?php  echo date('Y-m-d H:i:s');?>">
                                            <input type="hidden" name="plugin[info][<?php  echo $key;?>][time_leng]" value="<?php  echo $item['time_leng'];?>">
                                            <td style="text-align: center;"><?php  echo $item['titlme'];?></td>
                                            <td>
                                                <input type="text" class="form-control" placeholder="输入问诊价格" name="plugin[info][<?php  echo $key;?>][ptmoney]" value="<?php  echo $item['ptmoney'];?>" />
                                            </td>
                                            <td>
                                                <input class="form-control" type="number" name="plugin[info][<?php  echo $key;?>][ptzhuiw]" value="<?php  echo $item['ptzhuiw'];?>" />
                                            </td>
                                            <td>
                                                <input type="text" class="form-control" placeholder="输入问诊价格" name="plugin[info][<?php  echo $key;?>][hymoney]" value="<?php  echo $item['hymoney'];?>" />
                                            </td>
                                            <td>
                                                <input class="form-control" type="number" name="plugin[info][<?php  echo $key;?>][hyzhuiw]" value="<?php  echo $item['hyzhuiw'];?>" />
                                            </td>
                                            <td>
                                                <input type="checkbox" class="js-switch" name="plugin[info][<?php  echo $key;?>][stateback]" value="1" <?php  if($item['stateback'] =='1') { ?> checked="checked" <?php  } ?>>
                                            </td>
                                        
                                        </tr>
                                         <?php  } } ?>
                                       


                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label"></label>
                        <div class="col-sm-9">
                            <input type="submit" name="submit" value="提交" class="btn btn-primary min-width" />
                            <input type="hidden" name="token" value="c5514e9f" />
                        </div>
                    </div>
            </form>
        </div>
    </div>
    <script type="text/javascript">
        $(function () {
                window.optionchanged = false;
                $('#myTab a').click(function (e) {
                    e.preventDefault();//阻止a链接的跳转行为
                    $(this).tab('show');//显示当前选中的链接及关联的content
                })
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

<script type="text/javascript">
           $("#category_parentjg").on("change",function(){
    
             var id = $(this).val()
             //查询二级
                $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=jgall&m=hyb_yl&id="+id,{id:id},function (res) {
                      console.log(res)
                        $("select[name='jigou_two']").empty();
                        var html = "<option value='0'>请选择二级分类</option>";
                        $(res).each(function (v, k) {

                            html += "<option value='" + k.hid + "'>" + k.agentname + "</option>";
                        });
                        //把遍历的数据放到select表里面
                        $("select[name='jigou_two']").append(html);

                    },'json');
            });
        function search_membersdoc() {
            var keyword_user = $("#keyword_user").val();
            var url ="<?php  echo $_W['siteroot'];?>/web/index.php?c=site&a=entry&op=user&do=alldoctor&m=hyb_yl";
            $("#user_list_doc").empty();
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: url,
                dataType: "html",  
                data: {
                    keyword_user: keyword_user
                },

                success: function(result) {
                   $("#user_list_doc").html(result);
                }
            });
        }
        function select_member_doc(o)
        {
            $("#z_name").val(o.z_name);
            $("#zid").val(o.zid);
            $("#openid").val(o.openid);
            $("#salers").val(o.z_name);
            $("#user_list_doc").html("");
            $("#myModal").modal("hide");
            $("#modal-module-menus-doc").attr("style",'display:none');
            $(".modal-backdrop").remove();
        }
    $("#category_parent").on("change",function(){
    
     var id = $(this).val()
     //查询二级
        $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=all&m=hyb_yl&id="+id,{id:id},function (res) {
              
                $("select[name='keshi_two']").empty();
                var html = "<option value='0'>请选择二级分类</option>";
                $(res).each(function (v, k) {

                    html += "<option value='" + k.id + "'>" + k.name + "</option>";
                });
                //把遍历的数据放到select表里面
                $("select[name='keshi_two']").append(html);

            },'json');
    });

    $("#category_child").on("change",function(){
    
     var id = $(this).val()
     //查询二级

        $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=detail&m=hyb_yl&id="+id,{id:id},function (res) {
            console.log(res)
                var html="";
                $(res.description).each(function (v, k) {
                    html += "<label class='checkbox-inline'>";
                    html += "<input type='checkbox' name='label[]' value='"+k+"'>"+ k +"</input>";
                    html += "</label>";
                });
            
                 $("#biaoqian").html(html);
            },'json');
    });

</script>


<script src="<?php  echo HYB_YL_ADMIN?>/js/user.js" type="text/javascript"></script> 
</body>
</html>