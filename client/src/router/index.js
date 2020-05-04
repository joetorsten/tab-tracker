import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Songs from "@/components/Songs.vue";
import CreateSongs from "@/components/CreateSongs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/songs",
    name: "songs",
    component: Songs
  },
  {
    path: "/songs/create",
    name: "create-songs",
    component: CreateSongs
  }    
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
