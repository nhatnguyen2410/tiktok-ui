import Home from '@/Pages/Home';
import Following from '@/Pages/Following';
import Profile from '@/Pages/Profile';
import Upload from '@/Pages/Upload';
//Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },
];

//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
