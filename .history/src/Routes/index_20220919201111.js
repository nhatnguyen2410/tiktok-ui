import Home from '@/Pages/Home';
import Following from '@/Pages/Following';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
