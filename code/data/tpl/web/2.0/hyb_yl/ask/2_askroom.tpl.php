<?php defined('IN_IA') or exit('Access Denied');?><?php (!empty($this) && $this instanceof WeModuleSite || 1) ? (include $this->template('/common/mainHeader', TEMPLATE_INCLUDEPATH)) : (include template('/common/mainHeader', TEMPLATE_INCLUDEPATH));?>
<style>
  .df{
    display:flex;
    align-items: center;
  }
  .tab_cg{
    border:1px solid #eaeaea;
    margin-left:20px;
  }
  .tab_text,.tab_btn{
    padding: 5px 10px;
  }
  .tab_btn{
    border-left:1px solid #eaeaea;
  }
  button{
    outline: none;
  }
  .tabBox{
    margin-top:20px;
  }
  label{
    margin:0;
  }
  .tab_box{
    height:200px;
    overflow:hidden;
    overflow-y:auto;
    margin-top:20px;
  }
  .tab{
    display:inline-block;
    padding:5px;
    border:1px solid #eaeaea;
    margin-right:10px;
    cursor: pointer;
  }
  
  .tabBox label{
    white-space: nowrap;
  }
  #tabBox_xz{
    flex-wrap:wrap;
    max-height:200px;
    overflow:hidden;
    overflow-y:auto;
  }
    #tabBox_xz .tab_cg{
  margin-bottom:10px;
  }
  .tab:hover{
    background:#2aabd2;
    color:#fff;
  }
  #myModal{
    background: rgba(0,0,0,0.5)
  }
  .we7-modal-dialog, .modal-dialog{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
  }
  .text_over{
    width: 240px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
</style>

<div class="modal" id="myModal">
  <form action="" method="get" class="form-horizontal" role="form" id="form1">
    <input type="hidden" name="c" value="site" />
    <input type="hidden" name="a" value="entry" />
    <input type="hidden" name="m" value="hyb_yl" />
    <input type="hidden" name="op" value="changes" />
    <input type="hidden" name="ac" value="changes" />
    <input type="hidden" name="do" value="ask" />
    <input type="hidden" name="aid" id="aid" value="" />
    <input type="hidden" name="labels" id="labels" value="" />
    <input type="hidden" name="hid" id="<?php  echo $_SESSION['hid'];?>" value="" />
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close close1" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="myModalLabel">添加标签</h4>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">问诊类型</label>
          <div class="col-sm-9">
            <div class="row row-fix tpl-category-container">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <select class="form-control tpl-category-parent we7-select" id="type" name="type">
                  <option value="">请选择问诊类型</option>
                  <?php  if(is_array($type_arr)) { foreach($type_arr as $typs) { ?>
                  <option value="<?php  echo $typs['title'];?>"><?php  echo $typs['title'];?></option>
                  <?php  } } ?>
                </select>
              </div>

            </div>
          </div>
        </div>
        <div class="form-group" style="display: flex;">
          <label class="col-sm-2 control-label">科室类别</label>
          <div class="col-sm-9" style="float: inherit;">
            <script type="text/javascript">
              $(document).on("change","#category_parent",function(){
                            console.log($(this).val())
                  
                             var id = $(this).val()
                             //查询二级
                             
                                $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=all&m=hyb_yl&id="+id,{id:id},function (res) {
                                        console.log(res);
                                        $("select[name='parentid']").empty();
                                        var html = "<option value='0'>请选择二级分类</option>";
                                        $(res).each(function (v, k) {
              
                                            html += "<option value='" + k.id + "'>" + k.name + "</option>";
                                        });
                                        //把遍历的数据放到select表里面
                                        $("select[name='parentid']").append(html);
              
                                    },'json');
                            });
                            $(document).on("change","#category_childs",function(){
                            
                             var id = $(this).val()
                             //查询二级
              
                                $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=detail&m=hyb_yl&id="+id,{id:id},function (res) {
                                    console.log(res)
                                        var html="";
                                        $(res.description).each(function (v, k) {
                                            html += "<div class='tab'>"+k+"</div>";
                                        });
                                    
                                         $("#biaoqian").html(html);
                                    },'json');
                            });
            </script>
            <div class="row row-fix tpl-category-container">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <select class="form-control tpl-category-parent we7-select" id="category_parent" name="keshi_one">
                  <option value="">请选择科室分类</option>
                  <?php  if(is_array($ks_list)) { foreach($ks_list as $ks) { ?>
                  <option value="<?php  echo $ks['id'];?>"><?php  echo $ks['ctname'];?></option>
                  <?php  } } ?>
                </select>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <select class="form-control tpl-category-child we7-select" id="category_childs" name="parentid">
                  <option value='0'>请选择二级分类</option>
                  <?php  if(is_array($ks_two)) { foreach($ks_two as $kst) { ?>
                  <option value="<?php  echo $kst['id'];?>" <?php  if($kst['id']==$res['parentid']) { ?> selected="selected" <?php  } ?>><?php  echo $kst['name'];?> </option>
                      <?php  } } ?>
                      </select>
                      </div>
                      </div>


                      </div>
                      </div>
                      <div class="modal-body">
                    <div class="tab_box" id="biaoqian">
                      <div class="tab"></div>

                    </div>

                    <div class="df tabBox">
                      <label>已选择</label>
                      <div class="df" id="tabBox_xz">
                        <div class="df tab_cg">
                          <!-- <div class="tab_text"></div>
                    <div class="tab_btn"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div> -->
                        </div>
                      </div>
                    </div>
                    <div class="form-inline">
                      <div class="form-group">
                        <label for="exampleInputEmail2">自定义标签</label>
                        <input type="text" class="form-control" id="tabInput" placeholder="">
                      </div>
                      <button type="button" class="btn btn-primary addTab">添加</button>
                    </div>


              </div>


              <div class="modal-footer">
                <button type="button" class="btn btn-default close1" data-dismiss="modal">取消</button>
                <button type="submit" class="btn btn-primary addBtn" data-dismiss="modal">确认添加</button>
              </div>
            </div>
          </div>
  </form>
</div>
<div class="app-container-right">
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="#">问答列表</a>
    </li>
  </ul>
  <div class="app-content">
    <div class="app-filter">
      <div class="alert alert-warning">
        注意一：前台对应问答大厅，只展示图文问诊的记录，其余问诊则不展示
        <br>
        注意二：后台可以查看用户的问诊记录以及专家的回复记录
        <br>
        注意三：因为问题前台无法实现进行问题自动分类，作为运营方，需要把患者的问题进行手动数据标注，归类。
        <br>
        注意四：问题标签和关键词分别用于智能推荐，不冲突，问题标签后期可以让用户去选择主诉，不用手动归档，但是分类必须后台手动维护。
      </div>

      <div class="filter-list">
        <form action="" method="get" class="form-horizontal" role="form" id="form2">
          
          <input type="hidden" name="c" value="site" />
          <input type="hidden" name="a" value="entry" />
          <input type="hidden" name="m" value="hyb_yl" />
          <input type="hidden" name="op" value="askroom" />
          <input type="hidden" name="ac" value="askroom" />
          <input type="hidden" name="do" value="ask" />
          <input type="hidden" name="hid" value="<?php  echo $_SESSION['hid'];?>" />
          <div class="form-group">
            <label class="col-sm-2 control-label">问诊类型</label>
            <div class="col-sm-9">
              <div class="btn-group">
              
                <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'askroom','type'=>'','start'=>$start,'end'=>$end,'keshi'=>$keshi,'label'=>$label,'status'=>$status,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($type == '') { ?>  btn-primary <?php  } else { ?>  btn-default <?php  } ?>">不限</a>
                <?php  if(is_array($type_arr)) { foreach($type_arr as $item) { ?>

                <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'askroom','type'=>$item['title'],'start'=>$start,'end'=>$end,'keshi'=>$keshi,'label'=>$label,'status'=>$status,'keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($type == $item['title']) { ?>  btn-primary <?php  } else { ?>  btn-default <?php  } ?>"><?php  echo $item['title'];?></a>
                <?php  } } ?>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">问诊时间</label>
            <div class="col-sm-9">

              <script type="text/javascript">
                $(document).on('click','.guidang',function(){
                  $('#myModal').show()
                  var id = $(this).attr('id');
                  $("#aid").val(id);
                })
                  $(function(){
                    $('.checkbox,.checkboxall').click(function(){
                      var $checks=$('.checkbox:checkbox:checked');
                      $('#check').attr('disabled','');
                      if($checks.length>0) {
                        $('#checkYse').attr('disabled',false);
                        $('#checkNo').attr('disabled',false);
                        $('#delete').attr('disabled',false);
                      }else{
                        $('#checkYse').attr('disabled',true);
                        $('#checkNo').attr('disabled',true);
                        $('#delete').attr('disabled',true);
                      }
                    });
                
                  })
                  // require(["daterangepicker"], function(){
                  //   $(function(){
                  //     $(".daterange.daterange-time").each(function(){
                  //       var elm = this;
                  //       $(this).daterangepicker({
                  //         startDate: $(elm).prev().prev().val(),
                  //         endDate: $(elm).prev().val(),
                  //         format: "YYYY-MM-DD HH:mm",
                  //         timePicker: true,
                  //         timePicker12Hour : false,
                  //         timePickerIncrement: 1,
                  //         minuteStep: 1
                  //       }, function(start, end){
                  //         $(elm).find(".date-title").html(start.toDateTimeStr() + " 至 " + end.toDateTimeStr());
                  //         $(elm).prev().prev().val(start.toDateTimeStr());
                  //         $(elm).prev().val(end.toDateTimeStr());
                  //       });
                  //     });
                  //   });
                  // });
              </script>
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

  <input name="start" type="hidden" value="<?php  echo $start;?>" />
  <input name="end" type="hidden" value="<?php  echo $end;?>" />
  <button class="btn btn-default daterange daterange-date" type="button"><span class="date-title"><?php  echo $start;?> 至 <?php  echo $end;?></span> <i class="fa fa-calendar"></i></button>
              
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">公开状态</label>
            <div class="col-sm-9">
              <div class="btn-group">
                <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'askroom','type'=>$type,'start'=>$start,'end'=>$end,'keshi'=>$keshi,'label'=>$label,'status'=>'','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($status == '') { ?>  btn-primary <?php  } else { ?>  btn-default <?php  } ?>">不限</a>
                <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'askroom','type'=>$type,'start'=>$start,'end'=>$end,'keshi'=>$keshi,'label'=>$label,'status'=>'0','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($status == '0') { ?>  btn-primary <?php  } else { ?>  btn-default <?php  } ?>" class="btn btn-default">已公开</a>
                <a href="<?php  echo $this->createWebUrl('ask',array('op'=>'askroom','type'=>$type,'start'=>$start,'end'=>$end,'keshi'=>$keshi,'label'=>$label,'status'=>'1','keyword'=>$keyword,'hid'=>$_SESSION['hid']))?>" class="btn <?php  if($status == '1') { ?>  btn-primary <?php  } else { ?>  btn-default <?php  } ?>" class="btn btn-default">未公开</a>

              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">科室类别<span class="must-fill">*</span>
            </label>
            <div class="col-sm-9">
              <div class="row row-fix tpl-category-container">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6" style="display: flex;">
                  <select class="form-control tpl-category-parent we7-select" id="one" name="keshi_ones" onchange="keshi_change()">
                    <option value="">请选择一级科室分类</option>
                    <?php  if(is_array($ks_list)) { foreach($ks_list as $kss) { ?>
                    <option value="<?php  echo $kss['id'];?>" <?php  if($kss['id'] == $keshi_one) { ?> selected="" <?php  } ?>><?php  echo $kss['ctname'];?></option>
                    <?php  } } ?>
                  </select>
                  <select class="form-control tpl-category-parent we7-select" id="category_child" name="keshi_two">
                    <option value="">请选择二级科室分类</option>
                    <?php  if(is_array($keshi_arr)) { foreach($keshi_arr as $ks) { ?>
                    <option value="<?php  echo $ks['id'];?>"><?php  echo $ks['name'];?></option>
                    <?php  } } ?>
                  </select>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <select class="form-control tpl-category-child we7-select" id="label" name="label">
                    <option value="">请选择标签</option>

                  </select>
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
                          html +="<select name='keshi_two' class='form-control tpl-category-parent we7-select' id='category_child'>";
                          html +="<option value=''>请选择二级科室分类</option>";
                          for(var i=0;i<res.length;i++)
                          {
                              html +="<option value='"+ res[i].id +"'>"+ res[i].name +"</option>";
                          }
                          html +="</select>";
                          $("#category_child").html(html)
                      }
                  })
              }
              
          }
            $("#category_child").on("change",function(){
                
                         var id = $(this).val()
                         //查询二级
            
                            $.post("/index.php?c=site&a=entry&do=team&op=ajax&type=detail&m=hyb_yl&id="+id,{id:id},function (data) {
                                    
                                    var res = data.description;
                                    $("select[name='label']").empty();
                                    var html = "<option value='0'>请选择标签</option>";
                                    $(res).each(function (v, k) {
            
                                        html += "<option value='" + k + "'>" + k + "</option>";
                                    });
                                    //把遍历的数据放到select表里面
                                    $("select[name='label']").append(html);
                                    
                                },'json');
                        });
          </script>

          <div class="form-group">
            <label class="col-sm-2 control-label">搜索</label>
            <div class="col-sm-9">
              <input type="text" name="keyword" class="form-control" value="<?php  echo $keyword;?>" placeholder="请输入专家/用户名称" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label"></label>
            <div class="col-md-9">
              <span class="btn btn-primary" id="search">搜索</span>
            </div>
          </div>
        </form>


        <a class="btn btn-primary" href="<?php  echo $this->createWebUrl('ask',array('op'=>'import','hid'=>$_SESSION['hid']))?>">导入</a>


      </div>
    </div>
    <div class="app-table-list">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="text-center" width="10%">
                <input type="checkbox" name="checkall" value="" id="checkall" class="checkboxall" onclick="var ck = this.checked; $(':checkbox').each(function(){this.checked = ck});">
              </th>
              <th>问诊用户</th>
              <th>问诊标题</th>
              <th>接诊专家</th>
              <th>科室信息</th>
              <th>问诊标签</th>

              <th>问诊时间</th>
              <th>公开状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <?php  if(is_array($list)) { foreach($list as $item) { ?>
            <tr id="" class="text-center">
              <td>
                <center>
                  <input type="checkbox" name="items[]" value="<?php  echo $item['id'];?>" class="checkbox">
                </center>
              </td>
              <td style="overflow: visible">
                <div rel="pop" style="display: flex" data-content=" <span>ID: </span><?php  echo $item['u_id'];?> </br>                                                                                                                     <span>真实姓名：</span> <?php  if($item['u_name'] != '') { ?><?php  echo $item['u_name'];?><?php  } else if($item['uname'] != '') { ?><?php  echo $item['uname'];?><?php  } ?><br/>
                          <span>手机号：</span><?php  if($item['u_phone'] != '') { ?><?php  echo $item['u_phone'];?><?php  } else { ?>未绑定 <?php  } ?><br/>
                          <!--  <span>问诊次数：</span>3 <br/>
                           <span>购药订单：</span>5 <br/>
                           <span>体检订单：</span>5 <br/>
                            <span>挂号订单：</span>6<br/>
                            <span>总消费：</span>6000元<br/> -->
                            <span>用户余额：</span><?php  echo $item['money'];?>元<br/>
                           <!-- <span>推荐人：</span>无 <br/> -->
                           <span>用户来源：</span>
                           <?php  if($item['gender'] == '1') { ?>
                            <i>自然进入</i>
                          <?php  } else if($item['gender'] == '2') { ?>
                              <i>推荐进入</i>
                          <?php  } ?>
                            <br/>
                           <span>状态:</span><?php  if($item['type'] == '1') { ?>正常<?php  } else if($item['type'] == '0') { ?>不正常 <?php  } ?>" data-original-title="" title="">
                  <img class="img-40" src="<?php  echo $_W['siteroot'];?>addons/hyb_yl/web/resource/images/user.png" style="border-radius:50%;border:1px solid #efefef;" onerror="this.src='<?php  echo $_W['siteroot'];?>addons/hyb_yl/web/resource/images/user.png'" width="40" height="40">
                  <span style="display: flex;flex-direction: column;justify-content: center;align-items: flex-start;padding-left: 5px">
                    <span class="nickname">

                      <?php  if($item['u_name'] != '') { ?>
                      <?php  echo $item['u_name'];?>
                      <?php  } else if($item['uname'] != '') { ?>
                      <?php  echo $item['uname'];?>
                      <?php  } ?>
                    </span>
                  </span>

                </div>
              </td>
              <td>
                <a href="" class="text_over"><?php  echo $item['title'];?></a>
              </td>
              <td style="overflow: visible">
                <div rel="pop" style="display: flex" data-content=" <span>ID: </span><?php  echo $item['zid'];?> </br>                                                                                                                     <span>专家姓名：</span>  <?php  if($item['z_name'] != '') { ?><?php  echo $item['z_name'];?><?php  } else if($item['zname'] != '') { ?><?php  echo $item['zname'];?><?php  } ?><br/>
                          <span>手机号：</span><?php  if($item['zhuanjia']['z_telephone'] != '') { ?><?php  echo $item['zhuanjia']['z_telephone'];?><?php  } ?> <br/>
                           <span>所属机构：</span><?php  echo $item['zhuanjia']['jigou'];?> <br/>
                           <span>科室：</span><?php  echo $item['zhuanjia']['keshi'];?> <br/>
                           <span>职称：</span><?php  echo $item['zhuanjia']['zhicheng'];?> <br/>
                         
                            <br/>
                           <span>状态:</span>正常" data-original-title="" title="">
                  <img class="img-40" src="<?php  echo $_W['siteroot'];?>addons/hyb_yl/web/resource/images/zhuanjia.png" style="border-radius:50%;border:1px solid #efefef;" onerror="this.src='<?php  echo $_W['siteroot'];?>addons/hyb_yl/web/resource/images/zhuanjia.png'" width="40" height="40">
                  <span style="display: flex;flex-direction: column;justify-content: center;align-items: flex-start;padding-left: 5px">
                    <span class="nickname">

                      <?php  if($item['z_name'] != '') { ?><?php  echo $item['z_name'];?><?php  } else if($item['zname'] != '') { ?><?php  echo $item['zname'];?><?php  } ?> </span>
                  </span>

                </div>
              </td>
              <td class="text-left">
                <label class="label label-success"><?php  echo $item['ks_one'];?></label>
                <label class="label label-danger"><?php  echo $item['ks_two'];?></label>
              </td>
              <td class="text-left">

                <?php  if(is_array($item['label'])) { foreach($item['label'] as $las) { ?>
                <label class="label label-success"><?php  echo $las;?></label>
                <?php  } } ?>
              </td>



              <td class="text-left" style="color: #ff6600;">

                <?php  echo $item['created'];?> </td>
              <td>
                <label class="label label-default"><?php  if($item['status'] == '0') { ?>已公开<?php  } else if($item['status'] == '1') { ?>不公开<?php  } ?></label>
                <br>
              </td>


              <td style="overflow:visible;">
                <a class="btn btn-primary btn-sm" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askchat','id'=>$item['id'],'keyword'=>$item['keyword'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>" title="">查看</a>
                <?php  if($item['status'] == '1') { ?>
                <a class="btn btn-warning btn-sm" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askchange','status'=>'0','id'=>$item['id'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>">公开</a>
                <?php  } else if($item['status'] == '0') { ?>
                <a class="btn btn-warning btn-sm" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askchange','status'=>'1','id'=>$item['id'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>">不公开</a>
                <?php  } ?>
                <?php  if($item['is_hot'] == '0') { ?>
                <a class="btn btn-warning btn-sm" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askchange','is_hot'=>'1','id'=>$item['id'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>">非热门</a>
                <?php  } else if($item['is_hot'] == '1') { ?>
                <a class="btn btn-warning btn-sm" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askchange','is_hot'=>'0','id'=>$item['id'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>">热门</a>
                <?php  } ?>
                <a class="btn btn-warning btn-sm guidang" id="<?php  echo $item['id'];?>">归档</a>
                <a class="btn btn-danger btn-sm" data-toggle="ajaxRemove" href="<?php  echo $this->createWebUrl('ask',array('op'=>'askdel','id'=>$item['id'],'back_orser'=>$item['orders'],'hid'=>$_SESSION['hid']))?>" data-confirm="确定要删除该会员吗？">删除</a>
              </td>
            </tr>
            <?php  } } ?>
          </tbody>
        </table>
        <?php  echo $pager;?>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    $("#search").click(function(){
            $('#form2')[0].submit();
        })
  </script>
  <script>
    //通过申请
      function checkOrDelete(check,type){
        var content = '';
        if(check==1 && type==2) content = '确认删除？';
        if(check==2 && type==1) content = '确认审核通过？';
        if(check==3 && type==1) content = '确认审核不通过？';
        layer.open({
            title: [
              '',
              'background-color:#23c6c8; color:#fff;'
            ]
            ,anim: 'up'
            ,content: content
            ,btn: ['确认', '取消']
            ,yes:function(index){
              var ids = [];
            var $checks=$('.checkbox:checkbox:checked');
            $checks.each(function() {
              if (this.checked) {
                ids.push(this.value);
              };
            });
            if(type==1){
              location.href = "/web/index.php?c=site&a=entry&m=weliam_merchant&p=store&ac=comment&do=check&&ids="+ids+"&check="+check;
            }else if(type==2){
              location.href = "/web/index.php?c=site&a=entry&m=weliam_merchant&p=store&ac=comment&do=delete&&id="+ids;
            }
            }
        });
      }
      $('#de1').delegate('.js-delete','click',function(e){
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
              $.post("/web/index.php?c=site&a=entry&m=weliam_merchant&p=order&ac=order&do=delete&", { ids : ids }, function(data){
                if(!data.errno){
                util.tips("删除成功！");
                location.reload();
                };
              }, 'json');
            }, {html: '确认删除?'});
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

<script>
  $("#reset").on('click',function(){
      $("#color").val('#666').trigger('propertychange');
    });
    $(document).on('click','.tab',function(){
      var tabText=$(this).text().trim()
      var textlen=$('.tabBox').find('.tab_cg').length
      for(var i=0;i<textlen;i++){
        console.log($('.tabBox').find('.tab_cg .tab_text').eq(i).text().trim())
        console.log(tabText)
        if(tabText==$('.tabBox').find('.tab_cg .tab_text').eq(i).text().trim()){
              alert('已添加相同的标签')
              return
             }
      }
      var labels = $("#labels").val();
      labels += tabText+',';
       $("#labels").val(labels);
      $('#tabBox_xz').append(`
       <div class="df tab_cg">
                      <div class="tab_text">${tabText}</div>
                      <div class="tab_btn"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div>
                  </div>
    `)
    })
    
    $(document).on('click','.close',function(){
      console.log($(this).parents('.tab_cg'))
      $(this).parents('.tab_cg').remove()
    })
    
    $('.addTab').on('click',function(){
      var text=$('#tabInput').val().trim()
      if(text==''){
        $('#tabInput').focus()
      alert('请填写自定义标签')
      }else{
          $('.tab_box').append(`
      <div class="tab">${text}</div>
    `)
        $('#tabInput').val('')
         }
    })
    
    $('.addBtn').on('click',function(){
      var arr=[]
        $('#tabBox_xz').find('.tab_text').each(function(index,val){
            arr.push($(val).text())
          })
          $('#advlink').val(arr)
    })
    $('.close1').on('click',function(){
    $('#myModal').hide()
  
    })
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
</body>
</html>