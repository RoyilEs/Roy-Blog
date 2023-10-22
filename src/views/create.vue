<script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";

  const title = ref("")
  const content = ref("")
  const tags = ref([])
  const tag = ref("")
  const router = useRouter()

  const handlekeydown = () => {
    if(!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g,'')
        tags.value.push(tag.value)
    }

    tag.value = ""
  }

  const handlerSubmit = async () => {
    //准备数据
    const post = {
      //暂时无后端 id后期需要对应
      id: Math.floor(Math.random() * 10000),
      title: title.value,
      content: content.value,
      tags: tags.value
    }

   const data =  await axios.post("http://localhost:3000/posts", post)
   console.log(data)

   if (data.status === 201) {
    router.push("/")
   }
  }
    
</script>

<template>
    <div class='create'>
        <form @submit.prevent="handlerSubmit">
            <label for="title">标题</label>
            <input type="text" v-model="title" required />
            <label for="content">内容</label>
            <textarea v-model="content"></textarea>
            <label for="tag">标签(回车添加标签)</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handlekeydown" />

            <!-- 显示标签-->
            <div v-for="tag in tags" :key="tag" class="pill">
              #{{ tag }}
            </div>

            <button>添加</button>
        </form>
    </div>
  </template>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, 
  textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  
  button {
    display: block;
    margin-top: 30px;
    background: #f80;
    columns: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    margin-bottom: 10px;
  }
  textarea {
    height: 160px;
  }
 .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>