import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Details from '../views/details.vue';
// import Create from "../views/create.vue";
import Tag from "../views/tag.vue";
import Index from "../views/index.vue";
import Roy from "../views/Img_Roy.vue"


const routes = [
    {
        path:"/index",
        name: 'Index',
        Comment: Index,
    },
    {
        path:"/home",
        name: 'Home',
        component: Home
    },
    {
        path:"/roy",
        name: 'Img_Roy',
        component: Roy
    },
    {
        path:"/posts/:id",
        name: 'Details',
        component: Details,
        props: true
    },
    // {
    //     path:"/create",
    //     name: 'Create',
    //     component: Create
    // },
    {
        path:"/tags/:tag",
        name: 'Tag',
        component: Tag
    },
]

const router = createRouter({
     history: createWebHistory(),

     routes

})

export default router;