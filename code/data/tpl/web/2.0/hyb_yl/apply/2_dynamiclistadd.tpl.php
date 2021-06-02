<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<div class="app-container-right">
			<ul class="nav nav-tabs">
	<li class="active"><a href="javascript:;">发布动态</a></li>
</ul>
<div class="app-content">
    <div class="app-form">
         <div class="panel panel-default">
            <form  method="post" class="form-horizontal form" novalidate="novalidate" id="dataform">
                <div class="form-group">
                    <label class="col-sm-2 control-label">发布来源</label>
                    <div class="col-sm-9">
                        <label class="radio-inline">
                            <input type="radio" name="user_identity" id="user_identity0"  value="0" <?php  if($item['user_identity'] == '0' ) { ?> checked <?php  } ?> >普通用户
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="user_identity" id="user_identity1"  value="1" <?php  if($item['user_identity'] == '1') { ?> checked <?php  } ?>>医生专家
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="user_identity" id="user_identity2" value="2" <?php  if($item['user_identity'] == '2' || (empty($item['user_identity']) && $item['user_identity']!=0)) { ?> checked<?php  } ?>>平台虚拟
                        </label>
                    </div>
                    
                    <script type="text/javascript">

                        $("#user_identity0").click(function(){
                            $(".laiyuan_box0").show();
                            $(".laiyuan_box1").hide();
                            $(".laiyuan_box2").hide();
                        })
                        $("#user_identity1").click(function(){
                            $(".laiyuan_box0").hide();
                            $(".laiyuan_box1").show();
                            $(".laiyuan_box2").hide();
                        })
                        $("#user_identity2").click(function(){ 
                            $(".laiyuan_box0").hide();
                            $(".laiyuan_box1").hide();
                            $(".laiyuan_box2").show();
                        })
                    </script>

                </div>
                <div class="form-group laiyuan_box0" style="display: none;">
                    <label class="col-sm-2 control-label">选择用户</label>
                    <div class="col-sm-9">
                        <input type='hidden' id='uopenid' name="uopenid" value="<?php  echo $item['openid'];?>" />
                        <input type='hidden' id='uthumb' name="uthumb" />
                        <input type='hidden' id='uname' name="uname" />
                        <div class='input-group'>
                            <input type="text" name="name" maxlength="30"  class="form-control" id="saler"  value="<?php  echo $item['uname'];?>" readonly />
                            <span class="btn input-group-addon" onclick="popwin = $('#modal-module-menus').modal();">选择用户</span>
                        </div>
                        <div id="modal-module-menus"  class="modal fade" tabindex="-1">
                            <div class="modal-dialog" style='width: 660px;'>
                                <div class="modal-content">
                                    <div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button><h3>选择用户</h3></div>
                                    <div class="modal-body" >
                                        <div class="row">
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="keyword" value="" id="search-kwd" placeholder="输入用户昵称或真实姓名" />
                                                <span class='input-group-btn'><button type="button" class="btn btn-default" onclick="search_members();">搜索</button></span>
                                            </div>
                                        </div>
                                        <div id="module-menus" style="padding-top:5px;">
                                        </div>
                                    </div>
                                        <div class="modal-footer"><a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group laiyuan_box1" style="display: none;">
                    <label class="col-sm-2 control-label">选择专家</label>
                    <div class="col-sm-9">
                        <input type='hidden' id='zopenid' name="zopenid" value="<?php  echo $item['openid'];?>" />
                        <input type='hidden' id='zname' name="zname"  />
                        <input type='hidden' id='zthumb' name="zthumb"  />
                        <div class='input-group'>
                            <input type="text" name="name" maxlength="30"  class="form-control" id="saler-doctor"  value="<?php  echo $item['zname'];?>" readonly />
                            <span class="btn input-group-addon" onclick="popwin = $('#modal-module-menus-doctor').modal();">选择专家</span>
                        </div>
                        <div id="modal-module-menus-doctor"  class="modal fade" tabindex="-1">
                            <div class="modal-dialog" style='width: 660px;'>
                                <div class="modal-content">
                                    <div class="modal-header"><button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button><h3>选择专家</h3></div>
                                    <div class="modal-body" >
                                        <div class="row">
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="keyword" value="" id="search-doctor-kwd" placeholder="输入专家昵称或真实姓名" />
                                                <span class='input-group-btn'><button type="button" class="btn btn-default" onclick="search_doctor();">搜索</button></span>
                                            </div>
                                        </div>
                                        <div id="module-menus-doctor" style="padding-top:5px;">
                                        </div>
                                    </div>
                                        <div class="modal-footer"><a href="#" class="btn btn-default" data-dismiss="modal" aria-hidden="true">关闭</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="form-group laiyuan_box1" style="display: none;">
                    <label class="col-sm-2 control-label">是否仅医生可见</label>
                    <div class="col-sm-9">
                        <label class="radio-inline">
                            <input type="radio" name="doctor_visible"  value="1" <?php  if($item['doctor_visible'] == '1') { ?> checked<?php  } ?> >是
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="doctor_visible"  value="0" <?php  if($item['doctor_visible'] == '0' || empty($item['doctor_visible'])) { ?> checked<?php  } ?>>否
                        </label>
                        <div class="help-block">开启后只有医生可以看见，他人无法查看</div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">选择分类</label>
                    <div class="col-sm-9">
                        <?php  echo tpl_form_field_category_2level('category_name', $parentpfxm, $childrenpfxm,$item['parentid'],$item['childrenid']);?>
                    </div>
                </div>
                <div class="form-group laiyuan_box2" style="display: none;">
                    <label class="col-sm-2 control-label">用户头像</label>
                    <div class="col-sm-9">
                        <?php  echo tpl_form_field_image('virtual_thumb', $item['virtual_thumb'])?>
                    </div>
                </div>
                <div class="form-group laiyuan_box2" style="display: none;">
                    <label class="col-sm-2 control-label">用户昵称</label>
                    <div class="col-sm-9">
                         <input type="text" class="form-control" name="virtual_name" value="<?php  echo $item['virtual_name'];?>">
                    </div>
                </div>
                <div class="form-group">
                      <label class="col-sm-2 control-label must">发布内容</label>
                    <div class="col-sm-9">
                        <textarea style="height:150px;" id="virtual_contents" name="virtual_contents"  class="form-control description" cols="60"><?php  echo $item['contents'];?></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">发布内容图片</label>
                    <div class="col-sm-9">
                        <?php  echo tpl_form_field_multi_image('virtual_sharepic', $item['sharepic'])?>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">发布时间</label>
                    <div class="col-sm-9"> 
                        <?php  echo tpl_form_field_date('virtual_time', $virtual_time,true);?>         
					</div>
                </div>
              	<div class="form-group">
					<label class="col-sm-2 control-label">虚拟浏览量</label>
					<div class="col-sm-9">
						<input type="number" name="virtual_accesses" class="form-control" value="<?php  echo $item['virtual_accesses'];?>">
						<div class="help-block">当前访问次数</div>
					</div>
				</div>
              	<div class="form-group">
					<label class="col-sm-2 control-label">虚拟点赞量</label>
					<div class="col-sm-9">
						<input type="number" name="virtual_likes" class="form-control" value="<?php  echo $item['dianj'];?>">
						<div class="help-block">当前点赞次数</div>
					</div>
				</div>
                <div class="form-group" >
                    <label class="col-sm-2 control-label">是否审核通过</label>
                    <div class="col-sm-9">
                        <label class="radio-inline">
                            <input type="radio" name="type"  value="1" <?php  if($item['type'] == '1') { ?> checked<?php  } ?> >是
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="type"  value="0" <?php  if($item['type'] == '0' || empty($item['type'])) { ?> checked<?php  } ?>>否
                        </label>
                    </div>
                </div>
                <div class="form-group" >
                    <label class="col-sm-2 control-label">是否推荐</label>
                    <div class="col-sm-9">
                        <label class="radio-inline">
                            <input type="radio" name="share_tj"  value="1" <?php  if($item['share_tj'] == '1') { ?> checked<?php  } ?> >是
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="share_tj"  value="0" <?php  if($item['share_tj'] == '0' || empty($item['share_tj'])) { ?> checked<?php  } ?>>否
                        </label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-9">
                        <input type="submit" value="提交" class="btn btn-primary min-width">
                        <input type="hidden" name="token" value="c5514e9f">
                        <input type="hidden" name="a_id" value="<?php  echo $a_id;?>">
                        <input type="button" name="back" onclick="history.back()" style="margin-left:10px;" value="返回列表" class="btn btn-default min-width">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript">
    /*默认状态*/
    <?php  if($item['user_identity']=='0') { ?>
        $(".laiyuan_box0").show();
        $(".laiyuan_box1").hide();
        $(".laiyuan_box2").hide();
    <?php  } ?>
    <?php  if($item['user_identity']=='1') { ?>
        $(".laiyuan_box0").hide();
        $(".laiyuan_box1").show();
        $(".laiyuan_box2").hide();
    <?php  } ?>
    <?php  if($item['user_identity']=='2' || (empty($item['user_identity']) && $item['user_identity']!=0)) { ?>
        $(".laiyuan_box0").hide();
        $(".laiyuan_box1").hide();
        $(".laiyuan_box2").show();
    <?php  } ?>


    /*选择用户*/
    function search_members() {
        $("#module-menus").html("正在搜索....")
        $.ajax({
            'url':"<?php  echo $this->createWebUrl('selectquery',array('op'=>'usersearch'))?>",
            data:{
                keyword: $.trim($('#search-kwd').val())
            },
            type:"get",
            dataType:"json",
            success:function(res){
                var html ="<div style='max-height:500px;overflow:auto;min-width:580px;'>";
                html +="<table class='table table-hover' style='min-width:580px;'>";
                html +="<thead>";
                html +="<th></th>";
                html +="</thead>";
                html +="<tbody>";    
                if(res.length == 0)
                {
                    html +="<tr>"; 
                    html +="<td colspan='4' align='center'>未找到</td>";
                    html +="</tr>";
                    html +="</tbody>";
                    html +="</table>";
                    html +="</div>";
                }else{
                    for(var i=0;i<res.length;i++)
                    {
                        html +="<tr>";
                        html +="<td><img src='"+res[i]['u_thumb']+"' style='width:30px;height:30px;padding1px;border:1px solid #ccc' /> "+res[i]['u_name']+"</td>";
                        html +="<td style='width:80px;'><a href='javascript:;' onclick='select_member(`"+res[i]['u_name']+"`,`"+res[i]['u_thumb']+"`,`"+res[i]['openid']+"`)'>选择</a></td>";
                        html +="</tr>";
                    }   
                }
                $('#module-menus').html(html); 

            }
        })
    }
    function select_member(name,thumb,openid) {
        console.log(name,thumb,openid);
        $("#uopenid").val(openid);
        $("#uname").val(name);
        $("#uthumb").val(thumb);
        $('#saler').val(name);
        $('#search-kwd').val(name);
        
        
        $('#module-menus').html('');
        $("#modal-module-menus").modal("hide");
    }
    /*选择专家*/
    function search_doctor(){
        $("#module-menus-doctor").html("正在搜索....");
        $.ajax({
            'url':"<?php  echo $this->createWebUrl('selectquery',array('op'=>'zhuanjiasearch'))?>",
            data:{
                keyword: $.trim($('#search-doctor-kwd').val())
            },
            type:"get",
            dataType:"json",
            success:function(res){
                console.log(res);
                var html ="<div style='max-height:500px;overflow:auto;min-width:580px;'>";
                html +="<table class='table table-hover' style='min-width:580px;'>";
                html +="<thead>";
                html +="<th></th>";
                html +="</thead>";
                html +="<tbody>";    
                if(res.length == 0)
                {
                    html +="<tr>"; 
                    html +="<td colspan='4' align='center'>未找到</td>";
                    html +="</tr>";
                    html +="</tbody>";
                    html +="</table>";
                    html +="</div>";
                }else{
                    for(var i=0;i<res.length;i++)
                    {
                        html +="<tr>";
                        html +="<td><img src='"+res[i]['advertisement']+"' style='width:30px;height:30px;padding1px;border:1px solid #ccc' /> "+res[i]['z_name']+"</td>";
                        html +="<td style='width:80px;'><a href='javascript:;' onclick='select_doctor(`"+res[i]['z_name']+"`,`"+res[i]['advertisement']+"`,`"+res[i]['openid']+"`)'>选择</a></td>";
                        html +="</tr>";
                    }   
                }
                $('#module-menus-doctor').html(html); 

            }
        })
    }
    function select_doctor(name,thumb,openid) {
        console.log(name,thumb,openid);
        $("#zopenid").val(openid);
        $("#zname").val(name);
        $("#zthumb").val(thumb);
        $('#saler-doctor').val(name);
        $('#search-doctor-kwd').val(name);
        
        
        $('#module-menus-doctor').html('');
        $("#modal-module-menus-doctor").modal("hide");
    }
</script>
<?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('./common/mainfooter', TEMPLATE_INCLUDEPATH)) : (include template('./common/mainfooter', TEMPLATE_INCLUDEPATH));?>
