<?php
    namespace app\admin\controller;
    use app\BaseController;
    use think\facade\Db;
    use think\facade\View;
    use think\facade\Request;
    use think\facade\Session;
    use think\facade\Config;
class Admin extends BaseController{
    //接口测试
    public function jiekou(){
        $Db=Db::table('admin')->select();
        // global $pad=2;
        return Session::get('page');
    }
    //渲染登录页面
    public function login(){
        return view('login');
    }
    // 查询用户信息面板
    public function admin(){
        // 显示条数
        $pad= Request::param('Pad');
        // 当前页数
        $page =Request::param("Page");
        if($page!=null){
            Session::set('page', $page);
        }else{
            $page=1;
            Session::set('page', $page);
        }
        if($pad==null){
            $pad=5;
        }
        $Admin=Db::table('admin')->limit($pad)->page($page)->select();
        return $Admin;
    }
    // 计算总的分页数
    function countpaging(){
        $Pad = Request::param('Pad');
        $Admin=Db::table('admin')->order('Aid', 'desc')->paginate($Pad);
         // 获取总的记录数
         $count =$Admin->total();
         // 计算设置的页数
         $padcount = (int)ceil($count/(int)$Pad); 
        return $padcount;
    }
    public function stu(){
        return view();
    }
    //查询管理员数据
    // public function selectData(){
    //     // $Admin=Db::table('admin')->limit(1)->page(1)->select();
    //     // return json($Admin);
    //     //return $limt;
    // }
    /* 更新数据
    $updateData 
    */
    public function updateData(){
        // 获取当前页面
        // $thisPage =Session::get('page');
        // $Aid = $this->request->param("Aid");
        // $Aname = $this->request->param("Aname");
        // $Apassword = $this->request->param("Apassword");
        // $Aphone = $this->request->param("Aphone");
        // $AregisterDate =$this->request->param("AregisterDate");
        // $Apermission =$this->request->param("Apermission");
        // $href=$this->href('tp','host','controller','Admin','admin/admin');
        // return redirect($href."?Page=$thisPage");
        $Aid = Request::param('Aid');
        $Aname= Request::param('Aname');
        $Apassword= Request::param('Apassword');
        $Aphone= Request::param('Aphone');
        $AregisterDate = Request::param('AregisterDate');
        $Apermission = Request::param('Apermission');
        $updateData = Db::name('admin')->update(['Aname'=>$Aname,'Apassword'=>$Apassword,'Aphone'=>$Aphone,'AregisterDate'=>$AregisterDate,'Apermission'=>$Apermission,'Aid'=>$Aid]);
        return $this->admin();
        
    }
    // 添加用户
    public function addData(){
        $Aid = Request::param('Aid');
        $Aname= Request::param('Aname');
        $Apassword= Request::param('Apassword');
        $Aphone= Request::param('Aphone');
        $AregisterDate = Request::param('AregisterDate');
        $Apermission = Request::param('Apermission');
        // 查询用户id是否已经存在
        $Admin=Db::table('admin')->select();
        //数据转换成数组的形式
        $provinces = json_decode($Admin,true);

        //遍历当前身份证号是否已经注册过
        for($i=0;$i<count($provinces);$i++){
            if($provinces[$i]['Aid']==$Aid){
                break;
            }
        }
        // 如果id不存在则执行函数
        if($i>=count($provinces)){
            $data = ['Aid' => $Aid, 'Aname' => $Aname,'Apassword' => $Apassword,'Aphone' => 
            $Aphone,'AregisterDate' => $AregisterDate,'Apermission' => $Apermission,'Paid'=> 'PA001'];
            Db::name('admin')->insert($data);
            return $this->admin();
        }else{
            return -1;
        }
    }

    // 删除用户
    function deleteData(){
        $Aid = Request::param('Aid');
         Db::table('admin')->delete($Aid);
         return $this->admin();
    }
    // 地址拼接
    /**
     * tp:协议
     * host：地址
     * controller:控制器
     * str1:入口文件
     * str2:类下的某个方法
     */
    function href($tp,$host,$controller,$str1,$str2){
        $tp = Config::get('mail.'.$tp);
        $host = Config::get('mail.'.$host);
        $controller = Config::get('mail.'.$controller);
        $href = $tp.'://'.$host.'/'.$controller[$str1].'/'.$str2;
        return $href;
    }

    // 登录
    //http://localhost/admin.php/admin/loginModel
    function loginModel(){
        $AdminName= Request::param('adminName');
        $AdminPassword= Request::param('adminPassword');
        // 查询外卖员数据
        $Admin=Db::table('admin')->select()->toArray();
        // 查询一级管理原数据,数据转换成数组的形式
        $ParAdmin = Db::table('parent_admin')->select()->toArray();
        $data=false;
        for($i=0;$i<count($ParAdmin);$i++){
            if($ParAdmin[$i]['Pausername']==$AdminName&&$ParAdmin[$i]['Papassword']==$AdminPassword){
                // 进入一级管理原界面
                $data= "parent_admin";
            }
        }
        for($i=0;$i<count($Admin);$i++){
            if($Admin[$i]['Aname']==$AdminName&&$Admin[$i]['Apassword']==$AdminPassword){
                // 查看的是二级管理员的数据
                $data= "admin";
            }
        }
        return $data;
    }

    //test
    function test(){
        return "admin下的stu";
    }

    
    

}