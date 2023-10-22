<script setup>
import { computed, reactive, onMounted } from 'vue'
import getPost from "../composibles/getPost";

import Spinner from "../components/Spinner.vue";
import Time from "../components/Time.vue"

import moment from "moment";

//时间初始化和持续刷新
const state = reactive({
  timeMsg : moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
})
onMounted(() => {
  setInterval(function(){
    state.timeMsg = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')
  }, 1000)
})

const props = defineProps({
        id: Number,
    })

const {post, load} = getPost(props.id)


//限制文章 
const sinppet = computed(() => {
  let content = post.value.content.split(',')
  return content
})

load()
</script>

<template>
  <div class="post" v-if="post">
    
    <div class="singe-time">
        <Time></Time>
      </div>
    <div class="singe-info">
      <h3>{{ post.title }}</h3>
      <div class="singe-text">
        <p class="pre" v-for="item in sinppet" :key="item" v-html="item"></p>
      </div>
      
    </div>
    
    
  </div>
  <div v-else>
    
    <Spinner/>
  </div>
</template>

<style scoped>
    hr {
      color: #000000;
    }
    .singe-info{
       word-wrap: break-word;
        min-height: 40px;
        max-width: 900px;
        padding: 20px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background-color: #ffffff;
        box-shadow: 0 0 15px -3px #0000001a;
    }
    .singe-text{
        display: flex;
        flex-direction: column;
        width: 500px;
    }
    .singe-time{
       word-wrap: break-word;
        min-height: 40px;
        max-width: 305px;
        padding: 20px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background-color: #ffffff;
        box-shadow: 0 0 15px -3px #0000001a;
    }
    .tags a {
        margin-right: 10px;
    }
    .post {
        
        max-width: 1200px;
        margin: 0 auto;
        justify-content: center;
        flex-direction: row;
        align-items: flex-start;
    }
    .post p {
        color: #444;
        line-height: 1.5em;
        margin-top: 40px
    }
    .pre {
        white-space: pre-wrap   ;
    }
    .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: wheat;
    margin-bottom: 3px;
    max-width: 400px;
    
    }
  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #f80;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -20px;
    border-radius: 10px;
  }
</style>