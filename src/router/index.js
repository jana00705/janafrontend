import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Admin from '../components/Admin'
import Student from '../components/Student'
import College from '../components/College'
import Viewstudent from '../components/Viewstudent'
import Viewcomplaints from '../components/Viewcomplaints'
import DeleteInstitute from '../components/DeleteInstitute'
import Uploadarticle from '../components/Uploadarticle'
import Managefaculty from '../components/Managefaculty'
import Facultymanagement from '../components/Facultymanagement'
import ApproveInstitute from '../components/ApproveInstitute'
import Feedback from '../components/Feedback'
import Sendrequest from '../components/Sendrequest'
import Studentfeedback from '../components/Studentfeedback'
Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'Home',
                component: Home
        },
        {
                path: '/Admin',
                name: 'Admin',
                component: Admin,
                meta: { requiresAuth: true }
               
        }, 
        {
                path: '/Admin/Viewstudent',
                name: 'Viewstudent',
                component: Viewstudent,
                meta: { requiresAuth: true }
        },
        { 
                path: '/Admin/Viewcomplaints',
                name: 'Viewcomplaints',
                component: Viewcomplaints,
                meta: { requiresAuth: true }
        },
        {
                path: '/Admin/DeleteInstitute',
                name: 'DeleteInstitute',
                component: DeleteInstitute,
                meta: { requiresAuth: true }
        },
        {
                path: '/Admin/ApproveInstitute',
                name: 'ApproveInstitute',
                component: ApproveInstitute,
                meta: { requiresAuth: true }
        },
        {
                path: '/College',
                name: 'College',
                component: College,
                meta: { requiresAuth: true }
        }, 
        {
                path: '/College/Uploadarticle',
                name: 'Uploadarticle',
                component:Uploadarticle, 
                meta: { requiresAuth: true }
        }, 
        {
                path: '/College/Facultymanagement',
                name: 'Facultymanagement',
                component:Facultymanagement,
                meta: { requiresAuth: true } 
        },
        {
                path: '/College/Managefaculty',
                name: 'Managefaculty',
                component:Managefaculty ,
                meta: { requiresAuth: true }
        },

        {
                path: '/College/Feedback',
                name: 'Feedback',
                component:Feedback ,
                meta: { requiresAuth: true }
        },
        {
                path: '/Student',
                name: 'Student',
                component: Student,
                meta: { requiresAuth: true }
        }, 
        {
                path: '/Student/Studentfeedback',
                name: 'Studentfeedback',
                component:Studentfeedback ,
                meta: { requiresAuth: true }
        },
        {
                path: '/Student/Sendrequest',
                name: 'Sendrequest',
                component:Sendrequest ,
                meta: { requiresAuth: true }
        },

];

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
});
router.beforeEach((to,from,next)=>{
        if(to.meta.requiresAuth){
                if(localStorage.getItem('status')=='verified')
                {
                       next();
                }
                else{
                        router.push({name:'Login'})
                }
        }
        else{
                next();
        }
       
})



export default router;