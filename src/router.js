import {createRouter, createWebHistory} from 'vue-router';
import ContactList from './views/ContactList.vue';
import ContactDetails from './views/AddContact.vue';
import AddContact from './views/AddContact.vue';
import EditContact from './views/EditContact.vue';

const routes = [
    {path: '/', component: ContactList},
    {path: 'contact/:id', component: ContactDetails},
    {path: '/add', component: AddContact},
    {path: '/edit/:id', component: EditContact},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;