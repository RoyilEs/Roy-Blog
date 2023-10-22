import { ref, reactive, computed, watch, watchEffect } from "vue";
import axios from 'axios'

const getPosts = () => {
    
    const posts = ref([])

    const load = async() => {
        try {
            let {data}  = await axios("http://localhost:3000/posts")
            posts.value = data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    load()

    return { posts, load }
}

export default getPosts