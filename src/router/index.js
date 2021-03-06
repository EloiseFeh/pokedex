import { createRouter, createWebHistory } from "vue-router";
import PokeDex from "../views/PokeDex";
import PokemonInfo from "../views/PokemonInfo";

const routes = [
  {
    path: "/",
    name: "PokeDex",
    component: PokeDex,
  },
  {
    path: "/pokedex/:id",
    name: "PokemonInfo",
    component: PokemonInfo,
  },
  {
    path: "/trainercard",
    name: "TrainderCard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TrainerCard.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
