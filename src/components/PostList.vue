<script setup>
    import  SinglePost  from "./SinglePost.vue";
    //声明周期
    import {onMounted, onUnmounted, onUpdated} from "vue";

    // onMounted(() => {
    //     alert("页面渲染之前执行, 执行完毕 出来页面")
    //     /**数据请求 */
    // })

    // onUnmounted(() => {  
    //     alert("组件销毁之前执行, 执行完组件就不在页面现实")
    // })

    // onUpdated(() => {
    //     alert("当组件内的内容发生变化, 就会执行这个钩子函数")
    // })

    defineProps({
        posts: Array,
    })
</script>

<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" class="left-block"/>
        </div>
    </div>
</template>

<style scoped>
.left-block {
        word-wrap: break-word;
        min-height: 40px;
        padding: 20px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 0 15px -3px #0000001a;
    }
</style>