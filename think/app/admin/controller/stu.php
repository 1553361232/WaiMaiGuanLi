<?php
    namespace app\admin\controller;
    use app\BaseController;
    use think\facade\Db;
    use think\facade\View;
    use think\facade\Request;
class Stu extends BaseController{
    public function stu(){
       $adminname =Request::param('username');
       $password =Request::param('password');
        // dump($adminname);
        $user = "用户名:".$adminname."密码:".$password;
        return $user;
    }
    
   

}