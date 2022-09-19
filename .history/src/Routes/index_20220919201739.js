import Home from '@/Pages/Home';
import Following from '@/Pages/Following';
import Profile from '@/Pages/Profile';
//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
