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
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
