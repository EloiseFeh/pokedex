<template>
    <div class="Page-container mx-4">
        <h1 class="Page-title mt-5 mb-5">Ellie's PokeDex</h1>

        <div class="mt-5 d-flex justify-content-around flex-wrap">
            <div v-for="(pokemon, index) in pokemons" :key='pokemon.url' class="Card Elev4">
            <router-link :to="{ name: 'PokemonInfo', params: {id: index+1 } }">
            <PokemonCard :name="pokemon.name" :imgPath="require('../assets/img/venosaur.png')" />
            </router-link>
            </div>
        </div>

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
.Card{
    height: 7rem;
    width: 25rem;
    /* position: absolute; */
    border-radius: 10px;
    margin-bottom: 8%;
}

.Card-img{
    height: auto;
    width: 40%;
    float: left;
    position: relative;
    bottom: 10%;
    left: -4%;
}

.Card-title{
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 600;
    padding-right: 8%;
}
</style>