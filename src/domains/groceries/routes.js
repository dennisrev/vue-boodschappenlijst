import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';

export const routes = [
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

// export default routes;

// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL),
//     routes
// });

// export default router;