import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Viewstudent from '../components/Viewstudent'
import DeleteInstitute from '../components/DeleteInstitute'
Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'Home',
                component: Home
        },
        {
                path: '/Admin/Viewstudent',
                name: 'Viewstudent',
                component: Viewstudent
        },
        {
                path: '/Admin/DeleteInstitute',
                name: 'DeleteInstitute',
                component: DeleteInstitute
        },


      


];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;