<script setup>
    import { ref } from "vue";
    const props = defineProps({
        posts: Array,
    })

    const tags = ref([])
    const tagSet = new Set()

    props.posts.forEach((item) => {
        item.tags.forEach((tag) => tagSet.add(tag))
    })

    tags.value = [...tagSet]
</script>

<template>
    <div class='tag-cloud'>
        <h3>标签</h3>
        <div v-for="tag in tags" :key="tag">
            <router-link :to="{name: 'Tag', params: { tag } }">#{{ tag }}</router-link>
        </div>
    </div>
  </template>
<style scoped>

  .tag-cloud {
    padding: 10px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    border-radius: 20px 20px 20px 20px;
    background-color: #f80;
    padding: 16px 8px;
    color: #444;
  }
  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
  }
  .tag-cloud a.router-link-active {
    display: inline-block;
    margin: 10px 10px 0 0;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    color: #f80;
    font-weight: bold;
  }
</style>