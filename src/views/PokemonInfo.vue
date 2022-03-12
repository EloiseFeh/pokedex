<template>
    <div class="Page-container mx-5 d-flex ">

        <div class="Card-pokemon me-5 Elev5 d-flex flex-column justify-content-around align-items-center">
            <h6 class="id">#00{{id}}</h6>
                <img class="Pokemon-img" :src="front">
        </div>

        <div class="Info-container text-start">
            <h2 class="Info-title">{{pokeName}}</h2>
            <h5>Type: {{type}} </h5>
            <h5>Abilities: {{ability1}} {{ability2}}</h5>
            <h5>Height: {{height}} </h5>
            <h5>Weight: {{weight}}</h5>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: "PokemonInfo",
   setup(){
        const route = useRoute()
        const id = route.params.id
        const pokeName = ref([]);
        const weight = ref ([]);
        const height = ref ([]);
        const type = ref ([]);
        const front = ref ([]);
        const ability1 = ref ([]);
        const ability2 = ref ([]);
        const hp = ref ([]);
        const attack = ref ([]);
        const defense = ref ([]);
        const spAtk = ref ([]);
        const spDef = ref ([]);
        const speed = ref ([]);

        api.get(`pokemon/${id}`).then((response) => {
            pokeName.value = response.data.name;
            weight.value = response.data.weight;
            height.value = response.data.height;
            type.value = response.data.types[0].type.name;
            front.value = response.data.sprites.front_default;
            ability1.value = response.data.abilities[0].ability.name;
            ability2.value = response.data.abilities[1].ability.name;
            hp.value = response.data.stats[0].base_stat;
            attack.value = response.data.stats[1].base_stat;
            defense.value = response.data.stats[2].base_stat;
            spAtk.value = response.data.stats[3].base_stat;
            spDef.value = response.data.stats[4].base_stat;
            speed.value = response.data.stats[5].base_stat;
    });


        return {
            id,
                pokeName,
                weight,
                height,
                type,
                front,
                ability1,
                ability2,
                hp,
                attack,
                defense,
                spAtk,
                spDef,
                speed,
             
        }
    },
}
</script>

<style scoped>
.Page-container{
    margin-top: 8%;
}
.Card-pokemon{
    width: 20rem;
    height: 20rem;
    border: 3px solid #7CEF4E
}

.Pokemon-img{
    width: 75%;
    height: auto;
}

.Info-title{
    font-weight: 600;
    text-transform: uppercase;
}
</style>