import Vue from 'vue';
import Router from 'vue-router';

import AppLayout from '@/AppLayout.vue';
import InitLayout from '@/InitLayout.vue';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Portfolio from '@/views/Portfolio.vue';
import Contact from '@/views/Contact.vue';

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
            {
                path: '/about',
                name: 'about',
                component: About,
            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: Portfolio,
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
        ],
    },
];

const router = new Router({ routes });

export default router;
