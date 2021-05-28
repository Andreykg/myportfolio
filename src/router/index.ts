import Vue from 'vue';
import Router from 'vue-router';

import AppLayout from '@/AppLayout.vue';
import InitLayout from '@/InitLayout.vue';

import Home from '@/views/Home.vue';

Vue.use(Router);

const routes = [
    { path: '*', redirect: '/init' },
    {
        path: '/init',
        name: 'init',
        component: InitLayout,
        meta: {
            name: 'init',
        },
    },
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', redirect: '/login' },
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
        ],
    },
];

const router = new Router({ routes });

export default router;
