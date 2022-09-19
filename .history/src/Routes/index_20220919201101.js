import Home from '@/Pages/Home';
import Following from '@/Pages/Following';

//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Home },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
