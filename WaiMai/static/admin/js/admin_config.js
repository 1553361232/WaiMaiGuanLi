var hrefObj = {
    // 协议
    tp:'http',
    // 地址
    host:'localhost',
    // 入口文件
    controller:'admin.php',
    // 控制类
    str1:'admin',
}
// 公共函数
function Href(tp,host,controller,str1,str2){
    this.tp = tp;
    this.host = host;
    this.controller = controller;
    this.str1 = str1;
    this.str2 = str2;
}
// 重写原型对象
Href.prototype = {
    constructor:Href,//手动将 constructor 指向正确的构造函数
    getHref:function(){
        return this.tp+"://"+this.host+"/"+this.controller+"/"+this.str1+"/"+this.str2;
    }
    //http://localhost/admin.php/admin/updateData
}
