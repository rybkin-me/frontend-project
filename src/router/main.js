import {createRouter, createWebHashHistory} from "vue-router";
// import {useUsersStore} from "@/stores/users";

const routes = [
//     {
//         path: '/',
//         component: PostsLayout,
//         children: [
//             {
//                 path: 'new',
//                 component: PostsNew,
//                 // only authenticated users can create posts
//                 meta: { requiresAuth: true }
//             },
//             {
//                 path: ':id',
//                 component: PostsDetail,
//                 // anybody can read a post
//                 meta: { requiresAuth: false }
//             }
//         ]
//     }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})