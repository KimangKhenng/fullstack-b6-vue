import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Contact from '@/views/Contact.vue'
import FeaturesView from '@/views/FeaturesView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'HomePage'
        },
        {
            path: '/about',
            component: AboutView,
            name: 'AboutPage'

        },
        {
            path: '/features',
            component: FeaturesView,
            name: 'FeaturePage'

        },
        {
            path: '/contact',
            component: Contact,
            name: 'ContactPage'

        }
    ]

})

export default router