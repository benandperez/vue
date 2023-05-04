import * as Vue from 'vue'
import {createRouter, createWebHistory} from "vue-router";
// import {VueRouter} from 'vue-router';

// Vue.use(VueRouter);
import Home from '/assets/Views/Home';

const routes =[
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/login',
        name:'Login',
        component: () =>
            import ("../views/Login.vue")
    },
    // {
    //     path:'/register',
    //     name:'Register',
    //     component: () =>
    //         import ("../views/Register.vue")
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes:routes,
});
// const router = new VueRouter({
//     routes:routes
// });
export  default router
