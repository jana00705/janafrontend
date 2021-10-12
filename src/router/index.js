import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Admin from '../components/Admin'
import Student from '../components/Student'
import College from '../components/College'
import Viewstudent from '../components/Viewstudent'
import Viewrequest from '../components/Viewrequest'
import Viewcomplaints from '../components/Viewcomplaints'
import DeleteInstitute from '../components/DeleteInstitute'
import Uploadarticle from '../components/Uploadarticle'
import Downloadarticles from '../components/Downloadarticles'
import Managefaculty from '../components/Managefaculty'
import Facultymanagement from '../components/Facultymanagement'
import ApproveInstitute from '../components/ApproveInstitute'
import Feedback from '../components/Feedback'
import Sendrequest from '../components/Sendrequest'
import Studentfeedback from '../components/Studentfeedback'
import Contact from '../components/Contact'
Vue.use(VueRouter)

const routes = [
        {
                path: '/',
                name: 'Home',
                component: Home
        },
        {
                path: '/Contact',
                name: 'Contact',
                component: Contact
        },
        {
                path: '/Admin',
                name: 'Admin',
                component: Admin,
                meta: { requiresAuth: true, role: 'Admin' }


        },
        {
                path: '/Admin/Viewstudent',
                name: 'Viewstudent',
                component: Viewstudent,
                meta: { requiresAuth: true, role: 'Admin' }
        },
        {
                path: '/Admin/Viewcomplaints',
                name: 'Viewcomplaints',
                component: Viewcomplaints,
                meta: { requiresAuth: true, role: 'Admin' }
        },
        {
                path: '/Admin/DeleteInstitute',
                name: 'DeleteInstitute',
                component: DeleteInstitute,
                meta: { requiresAuth: true, role: 'Admin' }
        },
        {
                path: '/Admin/ApproveInstitute',
                name: 'ApproveInstitute',
                component: ApproveInstitute,
                meta: { requiresAuth: true, role: 'Admin' }
        },
        {
                path: '/College',
                name: 'College',
                component: College,
                meta: { requiresAuth: true, role: 'College' }
        },
        {
                path: '/College/Uploadarticle',
                name: 'Uploadarticle',
                component: Uploadarticle,
                meta: { requiresAuth: true, role: 'College' }
        },
        {
                path: '/College/Viewrequest',
                name: 'Viewrequest',
                component: Viewrequest,
                meta: { requiresAuth: true, role: 'College' }
        },
        {
                path: '/College/Facultymanagement',
                name: 'Facultymanagement',
                component: Facultymanagement,
                meta: { requiresAuth: true, role: 'College' }
        },
        {
                path: '/College/Managefaculty',
                name: 'Managefaculty',
                component: Managefaculty,
                meta: { requiresAuth: true, role: 'College' }
        },

        {
                path: '/College/Feedback',
                name: 'Feedback',
                component: Feedback,
                meta: { requiresAuth: true, role: 'College' }
        },
        {
                path: '/Student',
                name: 'Student',
                component: Student,
                meta: { requiresAuth: true, role: 'Student' }
        },
        {
                path: '/Student/Studentfeedback',
                name: 'Studentfeedback',
                component: Studentfeedback,
                meta: { requiresAuth: true, role: 'Student' }
        },
        {
                path: '/Student/Sendrequest',
                name: 'Sendrequest',
                component: Sendrequest,
                meta: { requiresAuth: true, role: 'Student' }
        },
        {
                path: '/Student/Downloadarticles',
                name: 'Downloadarticles',
                component: Downloadarticles,
                meta: { requiresAuth: true, role: 'Student' }
        },

];

const router = new VueRouter({
        routes,
        mode: 'history',
        linkActiveClass: 'active',
});
router.beforeEach((to, from, next) => {
        if ((to.meta.requiresAuth) && (to.meta.role === 'Admin')) {
                if (localStorage.getItem('status') == 'verified' && localStorage.getItem('role') == 'Admin') {
                        next();
                }
                else {
                        router.push({ name: 'Admin' })
                }
        }
        else if ((to.meta.requiresAuth) && (to.meta.role === 'College')) {
                if (localStorage.getItem('status') == 'verified' && localStorage.getItem('role') == 'College') {
                        next();
                }
                else {
                        router.push({ name: 'College' })
                }
        }
        else if ((to.meta.requiresAuth) && (to.meta.role === 'Student')) {
                if (localStorage.getItem('status') == 'verified' && localStorage.getItem('role') == 'Student') {
                        next();
                }
                else {
                        router.push({ name: 'Student' })
                }
        }
        else {
                next();
        }

})

export default router;