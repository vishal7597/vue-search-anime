import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/letter/:letter?',
            name: 'byLetter',
            component: () => import('../views/GetByLetter.vue'),
        },
        {
            path: '/by-name',
            name: 'byName',
            component: () => import('../views/SearchByName.vue'),
        },
        {
            path: '/episodes/:animeId?',
            name: 'episodes',
            component: () => import('../views/EpisodeList.vue'),
        },
        {
            path: '/characters',
            name: 'characters',
            component: () => import('../views/Characters.vue'),
        },
    ]
})

export default router;