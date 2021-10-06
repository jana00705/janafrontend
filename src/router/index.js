import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Admin from '../components/Admin'
import Viewstudent from '../components/Viewstudent'
import DeleteInstitute from '../components/DeleteInstitute'
import ApproveInstitute from '../components/ApproveInstitute'
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
                path: '/Admin',
                name: 'Admin',
                component: Admin
        }, 
        {
                path: '/Admin/DeleteInstitute',
                name: 'DeleteInstitute',
                component: DeleteInstitute
        },
        {
                path: '/Admin/ApproveInstitute',
                name: 'ApproveInstitute',
                component: ApproveInstitute
        },


      


];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;