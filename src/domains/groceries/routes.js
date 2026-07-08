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
        path: '/groceries/edit/:id',
        name: 'edit',
        component: Edit
    }
];