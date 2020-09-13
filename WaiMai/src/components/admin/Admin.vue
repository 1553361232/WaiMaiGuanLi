<template>
    <div class="container-fluid">
        <div class="row">
            <!-- 左边盒子 -->
            <div class="col-lg-2 adminLeftBox">
                <!-- 标题logo -->
                <div class="row">
                    <div class="col-lg-2 icon_margin"><svg class="icon icon_titile" aria-hidden="true">
                            <use xlink:href="#icon-celiudian"></use>
                        </svg></div>
                    <div class="col-lg-8 align_middle">Admin</div>
                </div>
                <!-- Select -->
                <div class="row">
                    <div class="col-lg-12 sidebar-header">Select</div>
                </div>
                <div v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)" class="row userBox"
                    data-title="takeout">
                    <div class="col-lg-2 glyphicon glyphicon-book iconColor"></div>
                    <div class="col-lg-8">{{item}}</div>
                    <div class="col-lg-2"></div>
                </div>
            </div>
            <!-- 右边内容 -->
            <div class="col-lg-10 adminRightBox">
                <!-- 头部导航 -->
                <div class="row admin_header">
                    <!-- 搜索图标 -->
                    <div class="col-lg-2 sear_logoBox ">
                        <a class="glyphicon glyphicon-search sear_logo"></a>
                        <input type="text" class="sear_text" placeholder="Search user...">
                    </div>
                    <!-- 用户头像 -->
                    <div class="col-lg-2 col-lg-offset-8">
                        <img src="../../../static/admin/images/erha.jpg" class="userHead">
                        <span class="user_name">小豪</span>
                        <div class="glyphicon glyphicon-chevron-down"></div>
                    </div>
                </div>
                <!-- 在此处添加主要内容 -->
                <div class="tabCon">
                    <!-- 用户信息 -->
                    <div v-if="index==0" v-for="(tabCon,index) in tabContents" v-show="index==num">
                        <!-- 主要内容 -->
                        <!-- 用户信息 -->
                        <div v-if="show=='parent_admin'" class="page-header yetou">
                            <h1>{{adminif}}<button class="btn btn-info addAdmin glyphicon glyphicon-plus"
                                    data-toggle="modal" @click="addAdminModel('addModal')"></button></h1>
                            <table id="adminTable" class="table table-striped table-hover">
                                <th>id</th>
                                <th>姓名</th>
                                <th>密码</th>
                                <th>手机号</th>
                                <th>注册日期</th>
                                <th>权限</th>
                                <th>操作</th>
                                <tbody>
                                    <tr v-for="(admin,index) in adminData" :key="index">
                                        <td>{{admin.Aid}}</td>
                                        <td>{{admin.Aname}}</td>
                                        <td>{{admin.Apassword}}</td>
                                        <td>{{admin.Aphone}}</td>
                                        <td>{{admin.AregisterDate}}</td>
                                        <td v-if="admin.Apermission == 1">已授权</td>
                                        <td v-else>未授权</td>
                                        <td>
                                            <a href="#" class="btn btn-info" id="updateAdmin"
                                                @click="updateAdmin(index,admin.Aid,admin.Aname,admin.Apassword,admin.Aphone,admin.AregisterDate,admin.Apermission)">修改</a>
                                            <button class="btn btn-danger" type="button"
                                                @click="deleteAdmin(admin.Aid)">删除</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- 分页 -->
                            <nav aria-label="Page navigation" class="fenye">
                                <ul class="pagination">
                                    <li id="Pre">
                                        <a href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li id="Next">
                                        <a href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- 外卖信息 -->
                        <Takeout v-if="show=='admin'" />
                        <!-- 修改页面的模态框 -->
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <!-- 模态框头部 -->
                                    <div class="modal-header">
                                        <!-- 关闭按钮 -->
                                        <button type="button" class="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                        <!-- 标题 -->
                                        <h4 class="modal-title" id="myModalLabel">修改用户信息</h4>
                                    </div>
                                    <!-- 主要内容 -->
                                    <div class="model_main">
                                        <form class="form-horizontal">
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="Aid">编&nbsp;&nbsp;&nbsp;号</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="text" id="Aid" disabled
                                                        placeholder="Large input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="Aname">姓&nbsp;&nbsp;&nbsp;名</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="text" id="Aname"
                                                        placeholder="Small input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="Apassword">密&nbsp;&nbsp;&nbsp;码</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="password" id="Apassword"
                                                        placeholder="Small input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label" for="Aphone">手机号</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="text" id="Aphone"
                                                        placeholder="Small input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label" for="AregisterDate">注册日期</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="date" id="AregisterDate"
                                                        placeholder="Small input">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="AregisterDate">权&nbsp;&nbsp;&nbsp;限</label>
                                                <div class="col-sm-10">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="Apermission" id="Apermission"
                                                                value="1" class="Aper1">是
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="Apermission" class="Aper2"
                                                                value="0">否
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                        <a href="#" id="admin_submit" type="button" class="btn btn-primary"
                                            @click="submitAdmin()">提交更改</a>
                                    </div>
                                </div><!-- /.modal-content -->
                            </div><!-- /.modal -->
                        </div>
                        <!-- 添加页面的模态框 -->
                        <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <!-- 模态框头部 -->
                                    <div class="modal-header">
                                        <!-- 关闭按钮 -->
                                        <button type="button" class="close" data-dismiss="modal"
                                            aria-hidden="true">&times;</button>
                                        <!-- 标题 -->
                                        <h4 class="modal-title" id="myModalLabel">添加用户信息</h4>
                                    </div>
                                    <!-- 主要内容 -->
                                    <div class="model_main">
                                        <form class="form-horizontal" id="addAdminForm">
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label" for="addAid">证件号</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="text" id="addAid" name="Aid"
                                                        require v-on:change="testAid($event)" placeholder="请输入身份证号码"
                                                        title="请输入正确的格式">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label" for="addAname">用户名</label>
                                                <div class="col-sm-10">
                                                    <input class="form-control" type="text" id="addAname" name="Aname"
                                                        require placeholder="用户名">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label" for="addAphone">手机号</label>
                                                <div class="col-sm-10">
                                                    <input v-on:change="testAphone($event)" class="form-control"
                                                        type="text" id="addAphone" require placeholder="手机号"
                                                        name="Aphone">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="Apassword">密&nbsp;&nbsp;&nbsp;码</label>
                                                <div class="col-sm-10">
                                                    <input v-on:change="testApassword($event)" class="form-control"
                                                        name="addApassword" type="password" id="addApassword" require
                                                        placeholder="请输入8-16位的有效字符，至少一个大写字母或一个小写字母">
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-sm-2 control-label"
                                                    for="AregisterDate">权&nbsp;&nbsp;&nbsp;限</label>
                                                <div class="col-sm-10">
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" name="Apermission" value="1"
                                                                class="Aper1" checked>是
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="Apermission" class="Aper2"
                                                                value="0">否
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                                        <button type="button" class="btn btn-primary" @click="addAdmin()">提交</button>
                                    </div>
                                    </form>
                                </div><!-- /.modal-content -->
                            </div><!-- /.modal-dialog -->
                        </div><!-- /.modal -->
                    </div>
                    <!-- 外卖信息 -->
                    <div v-if="index==1" v-for="(tabCon,index) in tabContents" v-show="index==num">
                        <Takeout/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>
<style>

</style>
<script>
    // 顺序要注
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'
    import '../../../static/admin/css/admin.css';
    import '../../../static/admin/css/public.css';
    //外卖信息组件
    import Takeout from '@/components/admin/Takeout';
    export default {
        name: 'Admin',
        data() {
            return {
                adminif: "用户信息",
                takeout: "外卖信息",
                adminData: [],
                index: "",
                // 总页数
                countRes: 0,
                //登录过来赋予的权限
                show: "",
                //导航栏
                //nav:"",



                //测试中...
                tabs: ["用户信息", "外卖信息"],
                tabContents: ["内容一", "内容二", "内容三"],
                num: '',
            }
        },
        components: {
            Takeout
        },

        beforeCreate() {
            // 组件创建前请求数据
            var _this = this;

        },
        created() {
            // 获取总页数
            this.selectData();
            this.show = this.$cookies.get("show");



        },
        // 在模板渲染成html后调用

        methods: {
            //测试中...
            tab: function (index) {
                this.num = index;
            },




            // 请求获取数据
            selectData: function () {
                var _this = this;
                // 显示的条数是写死的，后台是显示两条，所以这边也是两条
                var Pad = 5;
                var data = {
                    Pad: Pad
                }
                _this.$axios.post('http://localhost/admin.php/admin/countpaging', this.$qs.stringify(data)).then(function (res) {
                    _this.countRes = res.data;
                    for (let i = res.data; i > 0; i--) {//?Page=${i}
                        $('#Pre').after(`<li data-page="${i}"  class="light"><a href="#">${i}</a></li>`);
                    }
                    $(".light").eq(0).addClass("active").siblings().removeClass("active");
                    $('.light').bind('click', function () {
                        //获取当前页数
                        var page = $(this).attr("data-page");
                        _this.changePage(Pad, page, this);
                    })
                    _this.changePage(Pad);
                    // 上一页
                    $('#Pre').bind('click', function () {
                        // 获取已经选中的页数然后-1就是上一页
                        var page = $(".light.active").attr("data-page");
                        if (page > 1) {
                            page--;
                            _this.changePage(Pad, page, $(".light"));
                        }
                    })
                    //下一页
                    $('#Next').bind('click', function () {
                        // 获取已经选中的页数然后-1就是上一页
                        var page = $(".light.active").attr("data-page");
                        if (page < _this.countRes) {
                            page++;
                            _this.changePage(Pad, page, $(".light"));
                        }
                    })
                    $(".userBox").bind('click', function () {
                        $(this).addClass("userbox_active").siblings().removeClass("userbox_active");
                        let data_title = $(this).attr('data-title')
                        // if(data_title=='takeout'){
                        //     _this.nav = data_title;
                        // }
                        //this.show = _this.$cookies.get("show");

                    })

                })

            },
            // 导航切换
            changeVue: function () {

            },
            /*
                页面切换
                Pad传递显示的条数,
                ele出发当前事件的元素
            */
            changePage: function (Pad, page, ele) {
                var _this = this;
                var data = {
                    Pad: Pad,
                    Page: page
                }
                _this.$axios.post('http://localhost/admin.php/admin/admin', _this.$qs.stringify(data)).then(res => {
                    _this.adminData = res.data;
                    $(".light").eq(page - 1).addClass("active").siblings().removeClass("active");
                });
            },
            // 获取修改数据
            updateAdmin: function (index, $Aid, $Aname, $Apassword, $Aphone, $AregisterDate, $Apermission) {
                // 修改页面的元素
                var Aid = document.getElementById('Aid');
                var Aname = document.getElementById('Aname');
                var Apassword = document.getElementById('Apassword');
                var Aphone = document.getElementById('Aphone');
                var AregisterDate = document.getElementById('AregisterDate');
                var Apermission = document.getElementsByName('Apermission');
                var _this = this;
                $('#myModal').modal();
                // 获取点击的
                Aid.value = $Aid;
                // 姓名
                Aname.value = $Aname;
                //密码
                Apassword.value = $Apassword;
                // 手机号
                Aphone.value = $Aphone;
                // 注册日期
                AregisterDate.value = $AregisterDate;
                // 权限
                if (Apermission[0].value == $Apermission) {
                    var fuzhi = document.getElementsByClassName("Aper1");
                    fuzhi[0].checked = true;
                } else {
                    var fuzhi2 = document.getElementsByClassName("Aper2");
                    fuzhi2[0].checked = true;
                }
            },
            //提交修改数据
            submitAdmin: function () {
                var _this = this;
                var Apermission = document.getElementsByName('Apermission');
                Apermission.value = (Apermission[0].checked === true) ? '1' : '0';
                var data = {
                    Aid: Aid.value,
                    Aname: Aname.value,
                    Apassword: Apassword.value,
                    Aphone: Aphone.value,
                    AregisterDate: AregisterDate.value,
                    Apermission: Apermission.value
                }
                this.$axios.post('http://localhost/admin.php/admin/updateData', this.$qs.stringify(data)).then(res => {
                    if (res.data.length != 0) {
                        _this.adminData = res.data;
                        $('#myModal').modal('hide');
                    }
                });
            },
            // 点击添加按钮显示模态框
            addAdminModel: function (adminModel) {
                $('#' + adminModel).modal();
            },
            //添加管理原
            addAdmin: function () {
                var _this = this;
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
                        var data = {
                            Aid: Aid,
                            Aname: Aname,
                            Apassword: Apassword,
                            Aphone: Aphone,
                            AregisterDate: stringDate,
                            Apermission: Apermission
                        }
                        this.$axios.post('http://localhost/admin.php/admin/addData', this.$qs.stringify(data)).then(res => {
                            if (res.data == -1) {
                                alert("用户已存在");
                            } else {
                                if (res.data.length != 0) {
                                    _this.adminData = res.data;
                                    $('#addModal').modal('hide');
                                }
                            }
                        });
                    }
                }
            },
            //删除admin数据
            deleteAdmin: function (adminId) {
                var _this = this;
                var r = confirm("确定要删除" + adminId + "的用户吗");
                var data = {
                    Aid: adminId,
                }
                if (r) {
                    this.$axios.post('http://localhost/admin.php/admin/deleteData', this.$qs.stringify(data)).then(res => {
                        //console.log(res.data);
                        _this.adminData = res.data;
                    });
                }
            },
            //数据校验
            testAid: function (e) {
                var eleid = "#" + e.path[0].id;
                this.changeInputClass(eleid, /^(\d{18,18}|\d{15,15}|\d{17,17}X)$/);
            },
            testAphone: function (e) {
                var eleid = "#" + e.path[0].id;
                this.changeInputClass(eleid, /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
            },
            testApassword: function (e) {
                var eleid = "#" + e.path[0].id;
                this.changeInputClass(eleid, /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/);
            },
            /* id传入字符串的id,id必须带“ ”
            prove正则表达式*/
            changeInputClass: function (id, prove) {
                var key = $(id).val();
                // 表单验证操作
                var AidTest = new RegExp(prove);
                if (AidTest.test(key)) {
                    $(id).parent().parent().removeClass("has-error");
                } else {
                    $(id).parent().parent().addClass("has-error");
                }

            }
        }


    }
</script>