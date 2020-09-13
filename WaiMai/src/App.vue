<template>
  <div id="app">
    <!-- 显示路由组件 -->
    <router-view/>
    <tabbar>
      <tabbar-item link="/">
          <img slot="icon"  src="../static/home/images/shouye.png">
          <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/classify">
          <img slot="icon" src="../static/home/images/fenlei.png">
          <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/shop">
          <img slot="icon"  src="../static/home/images/gouwuche.png">
          <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/mine">
          <img slot="icon" src="../static/home/images/wode.png">
          <span slot="label">我的</span>
      </tabbar-item>
  </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
    const Counter = {
        template: `<div>{{ count }}</div>`,
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
export default {
  name: 'App',
  data() {
            return {
                //count: 0
            }
        },
        created() {

        },
        components: {
            // Confirm
            Counter,
            Tabbar,
            TabbarItem,
            Group,
            Cell
        },
        methods: {
            inc() {
                this.count++
            },
            dec() {
                this.count--
            },
            increment() {
                this.$store.commit('increment')
                console.log(this.$store.state.count)
            }

        }
  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 0.12rem;
}
/* iconft图标 */
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
 body{
    height: 500px;
    overflow-y:auto;
 }



 

</style>
