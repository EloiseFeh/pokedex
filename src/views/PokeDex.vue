<template>
    <div>
        <h1 class="Page-title mt-5 mb-5">Ellie's PokeDex</h1>

        <div class="Pokedex-container d-flex justify-content-between flex-wrap">
            
            <router-link  v-for="(pokemon, index) in pokemons"
            :key='pokemon.url'
            class="Card Elev4"
            :to="{ name: 'PokemonInfo', params: {id: index+1 } }">

                <PokemonCard :name="pokemon.name" :id="index+1" />
                
            </router-link>
            
            
        </div>

    </div>

    <div class="GithubCredits d-flex flex-column">
            <a href="https://github.com/EloiseFeh" target="_blank">
            <span>Created by EloiseFeh</span>
            <figure>
                <img class="IconGithub mb-4" alt="Github Icon" src="../assets/img/github-icon.png">
            </figure>
            </a>
        </div>
</template>

<script>
import PokemonCard from '@/components/PokeDex/PokemonCard.vue'
import api from "@/services/api.js"
import { ref, onMounted } from 'vue'

export default {
    name: "PokeDex",
    setup(){
        const pokemons = ref([]);
        const fetchPokemons = () => 
        api.get("/pokemon?limit=9").then((response) => pokemons.value = response.data.results);

        onMounted(fetchPokemons);

        return {pokemons};

    },
    components: {
    PokemonCard,
  },
}
</script>

<style>
.Pokedex-container{
    margin-top: 3rem;
}
.Card{
    height: 7rem;
    width: 22rem;
    text-decoration: none;
    border-radius: 10px;
    margin-bottom: 4%;
}

.GithubCredits a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.678);
}

.GithubCredits a:hover{
    color: #2c3e50;
    }
</style>