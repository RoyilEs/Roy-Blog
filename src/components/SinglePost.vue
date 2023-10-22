<script setup>
  import { computed } from "vue"


  const props = defineProps({
        post: Object,
    })

  const snippet = computed(() => {
        return props.post.content.substring(0, 80) + "..."
  })
  //单个文章主页展示
</script>

<template>
 
    <div class="post">
        <router-link :to="{ name: 'Details', params: {id: post.id}}">
        <h3>{{ post.title }}</h3>
        <hr>
        </router-link>
        <p>{{ snippet }}</p>
        <div v-for="tag in post.tags" :key="tag" >
          <div class="tag">
            <el-row class="mb-4">
              <router-link :to="{name: 'Tag', params: { tag } }"><el-button type="primary" round>#{{ tag }}</el-button></router-link>
            </el-row>
          </div>
        </div>
    </div>
  
</template>

<style scoped>
  .tag {
    display: flex;
    margin: 10px 10px 0 0;
  }

  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #a44242;
    border-radius: 10px 10px 10px 10px;
    background: transparent;

  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: wheat;
    margin-bottom: 10px;
    max-width: 400px;
  }

  .post h3::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 10px 10px;
    background: #f80;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }

</style>