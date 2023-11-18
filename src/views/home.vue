<script setup>
    import PostList from "../components/PostList.vue";
    import getPosts from '../composibles/getPosts';
    import Introduce from "../components/Introduce.vue";
    import Time from "../components/Time.vue";
    
    const { posts, load } = getPosts()

    const imgList = [
        {id:0, idView:'src/assets/image/back-roy1.png'},
        {id:1, idView:'src/assets/image/back-roy2.png'},
        {id:2, idView:'src/assets/image/ap1.png'},
        {id:3, idView:'src/assets/image/royand莉亚.jpg'},
        {id:4, idView:'src/assets/image/roy3.png'},
        {id:5, idView:'src/assets/image/ap2.png'}
    ]
    load()
   
</script>

<template>
    <!--有bug 很奇怪-->
    <IMG />
    
   <div class="body">
    <div class="left-info">
        <el-carousel :interval="4000" type="card" height="240px">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <h3 text="2xl" justify="center"><img :src="item.idView" class="image"></h3>
    </el-carousel-item>
  </el-carousel>
        <div class="left-home">
            <PostList :posts="posts" />
        </div>
        
   </div>
   <div class="right-info">
        <div class="right-time">
            <Time></Time>
        </div>
        <div class="right-intr">
            <Introduce />
        </div>
   </div>
    </div>
    
</template>

<style scoped>

    .image {
        width: 450px;
        height: 240px;
    }

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

    .body {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: flex-start;
    }
    .left-info {
        display: flex;
        flex-direction: column;
        width: 900px;
        min-height: 100vh;
    }

    .left-home {
        max-width: 1200px;
        margin: 0  auto;
        padding: 10px;
        box-shadow: 0 0 15px -3px #0000001a;
    }


    .right-info {
        width: 350px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 40px;
        margin-right: 40px;
    }
    .right-time {
        word-wrap: break-word;
        min-height: 40px;
        padding: 13px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 0 15px -3px #0000001a;
    }
    
    .layout {
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 30px;
        box-shadow: 0 0 15px -3px #0000001a;
    }
    
    .right-intr {
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