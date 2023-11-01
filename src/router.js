import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "./view/HomeView.vue"
import AboutView from "./view/AboutView.vue"
import RestaurantView from "./view/RestaurantView.vue"
import AppDetails from "./view/AppDetails.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/restaurant",
            name: "restaurant",
            component: RestaurantView
        },
        {
            path: "/restaurant/:id",
            name: "details",
            component: AppDetails
        },
    ]
})

export { router };