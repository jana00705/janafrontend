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
               
        }, 
        {
                path: '/Admin/Viewstudent',
                name: 'Viewstudent',
                component: Viewstudent
        },
        { 
                path: '/Admin/Viewcomplaints',
                name: 'Viewcomplaints',
                component: Viewcomplaints
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
                component: College,
                meta: { requiresAuth: true }
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
                path: '/College/Feedback',
                name: 'Feedback',
                component:Feedback 
        },
        {
                path: '/Student',
                name: 'Student',
                component: Student
        }, 
        {
                path: '/Student/Studentfeedback',
                name: 'Studentfeedback',
                component:Studentfeedback 
        },
        {
                path: '/Student/Sendrequest',
                name: 'Sendrequest',
                component:Sendrequest 
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