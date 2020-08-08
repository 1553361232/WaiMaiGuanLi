window.onload=function(){
    
}
// 登录请求
function loginModel(){
    
    var form =document.getElementById('loginForm');
    var formData = new FormData(form);
    var name = formData.get('name');
    var pass = formData.get('pass');
    $.ajax({
        type:"POST",
        url:'http://localhost/admin.php/admin/loginModel?AdminName='+name+'&AdminPassword='+pass,
        //data:$("#loginForm").serialize(),
        success:function (result) {
            console.log(result)
        },
        error:function (err) {
            console.log(err);
        }
    })
}