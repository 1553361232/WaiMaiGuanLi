<template>
    <div id="index">
        <x-header :left-options="{showBack: false}" style="background-color:#337ab7;">首页</x-header>
        <div class="index_contain">
            <!-- 轮播 -->
            <swiper style="border-radius: 10px;" :list="demo01_list" auto loop show-desc-mask></swiper>
            <!-- 扩展功能 -->
            <div class="expends while">
                <div class="expends-box" v-for="i in expend_image">
                    <img :src="i.img" width="60px" class="expends-img" height="60px" alt="">
                    <span>{{i.title}}</span>
                </div>
            </div>
            <!-- 商品种类 -->
            <div class="head_nav_wrap">
                <ul class="head_nav">
                    <a @click="changeClass(i)" v-for="(item,i) in shop_Kind">
                        <li>
                            <div class="item_title1" v-bind:class="[isActive==i?'head_title1':'']">{{item.title1}}</div>
                            <div class="item_title2" v-bind:class="[isActive==i?'head_title2':'']">{{item.title2}}</div>
                        </li>
                    </a>
                </ul>
            </div>
            <!-- 商品展示 -->
            <div class="container">
                <div v-for="(item,i) in data" class="conbox">
                    <div class="conbox_img">
                        <img :src="item.img" width="100%" height="100%" alt="item.title">
                    </div>
                    <div class="contentTitle">
                        <p class="conbox_p conbox_grap">{{item.title1}}</p>
                        <div class="conbox_grap">
                            <span class="conbox_span1">4.8分</span>
                            <span class="conbox_span2">支持自取</span>
                        </div>
                        <p class="conbox_span3">￥<span class="conbox_span3">229</span></p>
                    </div>

                </div>
            </div>
            </br>
            </br>
            </br>
            </br>
            </br>
            </br>
        </div>
    </div>
</template>
<i18n>
    Grid:
    zh-CN: 九宫格
</i18n>
<script>
    import '../../../../static/home/indexCSS/index.css';
    //#337ab7
    import { Swiper, Search, XHeader } from 'vux';
    import Masonry from "masonry-layout"; // Vue项目的引入方式
    const swiper_image = [
        { url: 'javascript:', img: "../../../../static/home/indexIMG/swiper01.jpg", title: "图片1" },
        { url: 'javascript:', img: "../../../../static/home/indexIMG/swiper02.jpg", title: "图片2" },
        { url: 'javascript:', img: "../../../../static/home/indexIMG/swiper03.jpg", title: "图片3" },
    ]
    const expend_image = [
        { img: "../../../../static/home/indexIMG/expend01.png", title: "饮料1" },
        { img: "../../../../static/home/indexIMG/expend02.png", title: "饮料2" },
        { img: "../../../../static/home/indexIMG/expend03.png", title: "饮料3" },
        { img: "../../../../static/home/indexIMG/expend04.png", title: "饮料4" },
        { img: "../../../../static/home/indexIMG/expend05.png", title: "饮料5" },
        { img: "../../../../static/home/indexIMG/expend06.png", title: "饮料6" },
        { img: "../../../../static/home/indexIMG/expend07.png", title: "饮料7" },
        { img: "../../../../static/home/indexIMG/expend08.png", title: "饮料8" },
        { img: "../../../../static/home/indexIMG/expend09.png", title: "饮料8" },
        { img: "../../../../static/home/indexIMG/expend10.png", title: "饮料8" },
    ]

    //产品种类
    const shopKind = [
        { title1: "海鲜", title2: "为你推荐" },
        { title1: "快餐", title2: "简便快捷" },
        { title1: "汉堡", title2: "好吃到爆" },
        { title1: "蛋糕店", title2: "超级周末" },
        { title1: "炒饭", title2: "单人餐" },
        { title1: "奶茶", title2: "奶茶" }
    ]

    // 商品列表
    const data =
        [
            [
                { img: "../../../../static/home/indexIMG/icy01.jpg", alt: "图片1", title1: "阿馥奇朵™", content: "双份精萃浓缩咖啡，新西兰进口香草冰淇淋" },
                { img: "../../../../static/home/indexIMG/icy02.jpg", alt: "图片2", title1: "麦芽雪冷萃™", content: "冷萃咖啡，双份新西兰进口香草冰淇淋巧克力味苦味酒，麦芽成分" },
                { img: "../../../../static/home/indexIMG/icy03.jpg", alt: "图片3", title1: "冷萃浮乐朵™", content: "冷萃咖啡，新西兰进口香草冰淇淋" },
                { img: "../../../../static/home/indexIMG/icy04.jpg", alt: "图片4", title1: "气致™冷萃浮乐朵™", content: "气致™冷萃咖啡，新西兰进口香草冰淇淋" },

            ],
            [
                { img: "../../../../static/home/indexIMG/icy04.jpg", alt: "图片1", title1: "内容内容内容内容内容内容" },
                { img: "../../../../static/home/indexIMG/icy03.jpg", alt: "图片2", title1: "内容内容内容内容内容内容内容内容内容内容内容内容" },
                { img: "../../../../static/home/indexIMG/icy02.jpg", alt: "图片3", title1: "内容内容内容内容内容内容" },
                { img: "../../../../static/home/indexIMG/icy01.jpg", alt: "图片4", title1: "内容内容内容内容内容内容内容内容内容内容内容内容" },
            ]
        ]
    export default {
        name: 'index',
        data() {
            return {
                demo01_list: swiper_image,
                expend_image: expend_image,
                shop_Kind: shopKind,
                isActive: 0,
                data: data[0],
            }
        },
        components: {
            Swiper,
            Search,
            XHeader,
        },
        created() {

        },
        mounted() {
            this.isImgLoad(function () {
                var msnry = new Masonry('.container', {
                    itemSelector: '.conbox',
                    columnWidth: '.conbox',
                    percentPosition: true,
                    horizontalOrder: true,
                    gutter: 5,
                })
            });


        },
        updated() {
            this.isImgLoad(function () {
                var msnry = new Masonry('.container', {
                    itemSelector: '.conbox',
                    columnWidth: '.conbox',
                    percentPosition: true,
                    horizontalOrder: true,
                    gutter: 5,
                })
            });
        },
        methods: {
            changeClass(index) {
                var _this = this;
                _this.isActive = index;
                _this.data = data[index];
            },
            // 获取滚动条的宽度
            getScrollbarWidth() {
                const oDiv = document.createElement('div');
                oDiv.style.cssText = `width: 50px;height: 50px;overflowY: scroll;`
                document.body.appendChild(oDiv);
                const scrollbarWidtd = oDiv.offsetWidth - oDiv.clientWidth;
                oDiv.remove();
                return scrollbarWidtd;
            },
            isImgLoad(callbalck) {
                var _this = this;
                var t_img;//定时器
                var isLoad = true;//控制变量
                $('.conbox_img img').each(function () {
                    if (this.height === 0) {
                        isLoad = false;
                        return false;
                    }
                })
                if (isLoad) {
                    clearTimeout(t_img);
                    // 回调函数
                    callbalck();
                    //没有找到调用定时器进行递归
                } else {
                    isLoad = true;
                    t_img = setTimeout(function () {
                        _this.isImgLoad(callbalck);
                    }, 500);
                }
            }
        }
    }
</script>