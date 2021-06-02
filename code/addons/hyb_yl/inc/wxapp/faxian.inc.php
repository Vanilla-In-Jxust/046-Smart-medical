<?php
/**
* 
*/
 class faxian extends HYBPage
 { 
    //获取用户信息
    public function departments() {
        global $_GPC, $_W;
        $uniacid = $_W['uniacid'];
        $catlist =pdo_fetchall("select * from".tablename('hyb_yl_classgory')."where uniacid = '{$uniacid}' and state=1 and typeint=0");
      
     
        foreach($catlist as $key => $value){
              $newdate[$key]['titles']=$value['ctname'];  
              $id = $value['id']; 
              $rows = pdo_fetchall("select * from".tablename('hyb_yl_ceshi')."where uniacid = '{$uniacid}' and giftstatus ='{$id}' and enabled=1 group by id order by sort desc ");
              foreach($rows as $k => $v){
                $rows[$k]['detail_cover_url'] = tomedia($rows[$k]['detail_cover_url']);
              }
              $newdate[$key]['list']=$rows;
        }
       
        echo json_encode($newdate);
    }

}


