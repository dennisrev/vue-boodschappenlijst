import { createRouter, createWebHistory } from 'vue-router';

import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

const routes = [
    {
        path: '/',
        redirect: '/groceries'
    },
    {    
        path: '/groceries',
        name: 'overview',
        component: Overview
    },
    {    
        path: '/groceries/create',
        name: 'create',
        component: Create
    },
    {    
        path: '/groceries/edit',
        name: 'edit',
        component: Edit
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;