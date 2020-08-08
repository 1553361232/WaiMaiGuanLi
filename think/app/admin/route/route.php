<?php
    namespace app\admin\route;
    use think\facade\Route;
// 后台管理系统
    // 更新
     //Route::post('updateData?Aid=:id&Aname=:Aname&Apassword=:Apassword&Aphone=:Aphone&AregisterDate=:AregisterDate&Apermission=:Apermission','updateData','POST');
    // 添加
     //Route::post('addData?Aid=:id&Aname=:Aname&Apassword=:Apassword&Aphone=:Aphone&AregisterDate=:AregisterDate&Apermission=:Apermission','addData','POST');
    //删除
     Route::post('deleteData?Aid=:id','deleteData','POST');
    //  分页数
    Route::post('countpaging?Pad=:id','countpaging','POST');
    // 传递页数
    Route::post('admin?Page=:page&Pad=:Pad','admin','POST');
//登录注册模块
    // //登录
    // Route::post('loginModel?AdminName=:AdminName&AdminPassword=:AdminName','loginModel','POST');
    