import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Contact from '@/views/Contact.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import UsersView from '@/views/users/UsersView.vue'
import UserView from '@/views/users/UserView.vue'
import NotFound from '@/views/NotFound.vue'
import UserPosts from '@/views/users/UserPosts.vue'
import UserFollowers from '@/views/users/UserFollowers.vue'
import UserFollowing from '@/views/users/UserFollowing.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'HomePage',
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/about',
            component: AboutView,
            name: 'AboutPage',
            meta: {
                title: 'About'
            }

        },
        {
            path: '/features',
            component: FeaturesView,
            name: 'FeaturePage',
            meta: {
                title: 'Features'
            }

        },
        {
            path: '/contact',
            component: Contact,
            name: 'ContactPage',
            meta: {
                title: 'Contact Us'
            }

        },
        {
            path: '/users', component: UsersView,
            meta: {
                title: 'Users'
            }
        },
        {
            path: '/users/:id',
            component: UserView,
            meta: {
                title: 'Each User'
            },
            // meta: {
            //     requiredAuth: true
            // },
            children: [
                {
                    path: '',
                    component: UserPosts,
                    meta: {
                        title: 'User Posts'
                    },
                },
                {
                    path: 'followers',
                    component: UserFollowers,
                    meta: {
                        title: 'User Followers'
                    },
                },
                {
                    path: 'followings',
                    component: UserFollowing,
                    meta: {
                        title: 'User Followings'
                    },
                }]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]

})

router.beforeEach((to, from, next) => {
    // Set page title from route meta
    document.title = 'Note App | ' + to.meta.title
    next()
})

// router.beforeEach((to, from, next) => {
//     // to: route we're navigating TO
//     // from: route we're coming FROM
//     // next: function to resolve the navigation

//     console.log(`Navigating from ${from.path} to ${to.path}`)

//     // Always call next() to continue navigation
//     next()
// })

router.beforeEach((to, from, next) => {
    // Check if route requires authentication
    const requiresAuth = to.matched.some(record => record.meta.requiredAuth)

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('token')

    if (requiresAuth && !isLoggedIn) {
        // Redirect to login if not authenticated
        next({
            name: 'HomePage',
            query: { redirect: to.fullPath }  // Save intended destination
        })
    } else {
        // Allow navigation
        next()
    }
})

export default router