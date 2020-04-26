import Vue from 'vue';
import VueRouter from 'vue-router';

//pages
import IndexComponent from '@/pages/index/Index'
import ReaderComponent from '@/pages/reader/Reader'
import NotFoundComponent from '@/pages/404'

Vue.use(VueRouter);

let routes = [
    {path: '/', component: IndexComponent},
    {path: '/reader', component: ReaderComponent},
    {path: '*', component: NotFoundComponent}
];
let router = new VueRouter({
    routes
});
export default router;
