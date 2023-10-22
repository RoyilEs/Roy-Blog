<script setup>

    window.onload = () => {
        const app = new Vue({
            el: '#app',
            data: {
                headerOpacity: 0.5
            },
            methods: {
                handleScroll() {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.documentElement.scrollTop
                    this.headerOpacity = scrollTop / 60
                }  
            },
            mounted() {
                //监听页面滚动
                window.addEventListener("scroll", this.handleScroll, true)
            },
            beforeDestroy() {
                //移除滚动监听
                window.removeEventListener("scroll", this.handleScroll, true)
            }
        })
    }
</script>
//导航栏
<template>
    <header :style="{ opacity: headerOpacity }">
        <h1>个人博客</h1>
        <nav>
            <router-link :to="{name: 'Home'}">首页</router-link>
            <router-link :to="{name: 'Img_Roy'}">傻瓜表情</router-link>
            <!-- <router-link to="/create">新建</router-link> -->
        </nav>
    </header>
</template>

<style scoped>
    header {
        height: 30px;
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        padding: 15px;
        transition: background-color .5s;
     }

    header h1 {
        color: aquamarine;
        font-size: 30px;
    }
    header a {
        color: #bbb;
        text-decoration: none;
        margin-left: 20px;
    }
    header a.router-link-active {
        color: #444;
        font-weight: bold;
    }
</style>