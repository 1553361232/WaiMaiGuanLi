<template>
    <div id="home">
        <!-- <p>count: {{ $store.state.count }}
            <button @click="increment">+</button>
        </p>
        <counter></counter>
        <group>
            <cell is-link title="Simple" link="#"></cell>
            <cell is-link title="Switch icons" link="#"></cell>
        </group> -->
        
    </div>
</template>
<script>
    //import { Tabbar, TabbarItem, Group, Cell } from 'vux'
    // const Counter = {
    //     template: `<div>{{ count }}</div>`,
    //     computed: {
    //         count() {
    //             return this.$store.state.count
    //         }
    //     }
    // }
    export default {
        name: "Home",
        data() {
            return {
                //count: 0
            }
        },
        created() {

        },
        components: {
            // Confirm
            // Counter,
            // Tabbar,
            // TabbarItem,
            // Group,
            // Cell
        },
        methods: {
            // inc() {
            //     this.count++
            // },
            // dec() {
            //     this.count--
            // },
            // increment() {
            //     this.$store.commit('increment')
            //     console.log(this.$store.state.count)
            // }

        }
    }
</script>