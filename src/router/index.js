import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Admin from '../components/Admin'
import College from '../components/College'
import Viewstudent from '../components/Viewstudent'
import DeleteInstitute from '../components/DeleteInstitute'
import Uploadarticle from '../components/Uploadarticle'
import Managefaculty from '../components/Managefaculty'
import Facultymanagement from '../components/Facultymanagement'
import Stufeedback from '../components/Stufeedback'
import ApproveInstitute from '../components/ApproveInstitute'
import Feedback from '../components/Feedback'
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
        {
                path: '/College',
                name: 'College',
                component: College
        }, 
        {
                path: '/College/Uploadarticle',
                name: 'Uploadarticle',
                component:Uploadarticle 
        }, 
        {
                path: '/College/Facultymanagement',
                name: 'Facultymanagement',
                component:Facultymanagement 
        },
        {
                path: '/College/Managefaculty',
                name: 'Managefaculty',
                component:Managefaculty 
        },
        {
                path: '/Student/Stufeedback',
                name: 'Stufeedback',
                component:Stufeedback 
        },
        {
                path: '/College/Feedback',
                name: 'Feedback',
                component:Feedback 
        },

];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;