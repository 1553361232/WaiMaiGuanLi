<template>
    <div class="confirm-button">
        <button @click="getButtonClick">{{text || '确认'}}</button>
    </div>
</template>
<script>
    export default{
        name:"confirm-button",
        props:["text"],//获取父组件的值
        data(){
            return {
                msg:true
            };
        },
        methods:{
            // 点击按钮向父组件传值
            getButtonClick(){
                // 子组件向父组件传值的方法
                this.$emit("message",this.msg);//向父组件传递值
            }
        }
    }
</script>