window.onload = function () {
    eventListent();
    fenye();
}

// 修改页面的元素
var Aid = document.getElementById('Aid');
var Aname = document.getElementById('Aname');
var Apassword = document.getElementById('Apassword');
var Aphone = document.getElementById('Aphone');
var AregisterDate = document.getElementById('AregisterDate');
var Apermission = document.getElementsByName('Apermission');
// 添加页面的元素
// var addAid = document.getElementById('addAid');
// var addAname = document.getElementById('addAname');
// var addApassword = document.getElementById('addApassword');
// var addAphone = document.getElementById('addAphone');
// var addAregisterDate = document.getElementById('addAregisterDate');
// var addApermission = document.getElementsByName('addApermission');
// 展示修改数据
function updateAdmin(userDate) {
    // 获取当前数据
    var string = userDate;
    var stringResult = string.split(',');
    // 编号
    Aid.value = stringResult[0];
    // 姓名
    Aname.value = stringResult[1];
    //密码
    Apassword.value = stringResult[2];
    // 手机号
    Aphone.value = stringResult[3];

    // 注册日期
    AregisterDate.value = stringResult[4];
    // 权限
    if (Apermission[0].value == stringResult[5]) {
        var fuzhi = document.getElementsByClassName("Aper1");
        fuzhi[0].checked = true;
    } else {
        var fuzhi2 = document.getElementsByClassName("Aper2");
        fuzhi2[0].checked = true;
    }
}


// 提交修改管理员信息
function submitAdmin() {
    // // 动态改变提交按钮的地址传相应参数
    console.log(Apermission[0].checked);
    Apermission.value = (Apermission[0].checked === true) ? '1' : '0';
    var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'updateData');
    window.location.href = p1.getHref() + "?Aid=" +
        Aid.value + "&Aname=" + Aname.value + "&Apassword=" + Apassword.value + "&Aphone=" + Aphone.value + "&AregisterDate=" + AregisterDate.value + "&Apermission=" + Apermission.value;
}
//显示添加模态框操作 
function addAdminModel(id) {
    $('#' + id).modal();
}
//添加管理员操作
function addAdmin() {
    var addAdminForm = $('#addAdminForm').serializeArray();
    var Aid = addAdminForm[0].value;
    var Aname = addAdminForm[1].value;
    var Aphone = addAdminForm[2].value;
    var Apassword = addAdminForm[3].value;
    var Apermission = addAdminForm[4].value;
    // 生成当前日期
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var stringDate = year + '-' + month + '-' + date;

    // 获取类名
    var class1 = $("#addAid").parent().parent().attr("class");
    var class2 = $("#addAphone").parent().parent().attr("class");
    var class3 = $("#addApassword").parent().parent().attr("class");
    var a = class1.includes("has-error");
    var b = class2.includes("has-error");
    var c = class3.includes("has-error");
    if (Aid == "" || Aname == "" || Aphone == "" || Apassword == "" || Apermission == "") {
        alert("用户信息不能为空");
    } else {
        if (!a && !b && !c) {
            var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'selectData');
            var p2 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'addData');
            //获取数据库查询是否存在当前id，如果存在就不执行跳转操作
            $.ajax({
                url: p1.getHref(),
                success: function (res) {
                    for (var i = 0; i < res.length; i++) {
                        console.log(res[i]['Aid']);
                        if (res[i]['Aid'] == Aid) break;
                    }
                    if (i >= res.length) {
                        var href = p2.getHref() + "?Aid=" +
                            Aid + "&Aname=" + Aname + "&Apassword=" + Apassword + "&Aphone=" + Aphone + "&AregisterDate=" + stringDate + "&Apermission=" + Apermission;
                        window.location.href = href;
                    } else {
                        alert("用户已存在");
                    }
                }
            });
        }
    }



}
// 删除信息操作
function deleteAdmin(adminId) {
    var r = confirm("确定要删除" + adminId + "的用户吗");
    if (r) {
        var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'deleteData');
        window.location.href = p1.getHref() + "?Aid=" + adminId;
    }
}
// 添加监听事件
function eventListent() {
    changeInputClass("#addAid", /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/);
    changeInputClass("#addAphone", /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
    changeInputClass("#addApassword", /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
}
/* id传入字符串的id,id必须带“”
prove正则表达式*/
function changeInputClass(id, prove) {
    $(id).bind("change", function () {
        var key = $(this).val();
        // 表单验证操作
        var AidTest = new RegExp(prove);
        if (AidTest.test(key)) {
            $(id).parent().parent().removeClass("has-error");
        } else {
            $(id).parent().parent().addClass("has-error");
        }
    })
}
// 请求获取总页数
function fenye() {
    // 显示的条数是写死的，后台是显示两条，所以这边也是两条
    var Pad = 2;
    //获取地址栏的值
    var pageParm;
    //  总页数
    var countRes;
    // 获取请求地址
    var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'countpaging');
    $.ajax({
        // Pad为展示的条数
        url: p1.getHref() + "?Pad=" + Pad,
        success: function (res) {
            countRes = res;
            for (let i = res; i > 0; i--) {//?Page=${i}
                $('#Pre').after(`<li data-page="${i}" class="light"><a href="?Page=${i}">${i}</a></li>`);
            }

            if (getUrlParam("Page") != null) {
                pageParm = getUrlParam("Page");
            } else {
                pageParm = 1;
            }
            $(".light").eq(pageParm - 1).addClass("active").siblings().removeClass("active");
        }
    });
    $('#Pre').bind('click', function () {
        if (pageParm > 1) {
            pageParm--;
            var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'admin');
            window.location.href = p1.getHref() + "?Page=" + pageParm;
        }
    })
    $('#Next').bind('click', function () {
        if (pageParm < countRes) {
            pageParm++;
            var p1 = new Href(hrefObj.tp, hrefObj.host, hrefObj.controller, hrefObj.str1, 'admin');
            window.location.href = p1.getHref() + "?Page=" + pageParm;
        }
    })
}
// 获取地址参数的值
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}





