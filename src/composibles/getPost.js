import { ref, reactive, computed, watch, watchEffect } from "vue";
import axios from 'axios'

const getPost = (id) => {
    
    const post = ref({})

    const load = async() => {
        try {
            let {data}  = await axios("http://localhost:3000/posts/"+ id )
            post.value = data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    load()

    return { post, load }
}

export default getPost