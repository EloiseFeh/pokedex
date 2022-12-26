<template>

    <!-- HEADER COLOR CONDITIONAL -->
    <div v-bind:class="computedClass" class="header">
        <div class="container d-flex align-items-start">
            <div v-bind:class="type" class="card-pokemon me-5 Elev5 d-flex flex-column align-items-center">
                <img class="pokemon-img" :src="front">
            </div>

            <div class="id-name-div d-flex flex-column align-items-start mt-4">
                <h6 class="id">#00{{id}}</h6>
                <h1 class="poke-title mb-5">{{pokeName}}</h1>

                <h5 class="type mb-3">Type: <span v-bind:class="classForType" class="type-box ms-2 px-3 py-1">{{type}}</span></h5>
                <h5 class=" abilities mb-3">Abilities: <span class="ms-2 px-3 py-1"> {{ability1}} | {{ability2}}</span></h5>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="poke-stats text-start">
            <div class="stats-info d-flex justify-content-between mb-3">
                <h5>Height: {{height}} </h5>
                <h5>Weight: {{weight}}</h5>
            </div>

            
            <div class="d-flex align-items-center">
                <h5 class="stats-title mb-0 me-5">HP:</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: hp + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ hp }}</div>
                </div>
            </div>

            <div class="d-flex align-items-center">
                <h5 class="stats-title mb-0 me-5">Attack:</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: attack + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ attack }}</div>
                </div>
            </div>
            
            <div class="d-flex align-items-center">
                <h5 class="stats-title mb-0 me-5">Defense:</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: defense + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ defense }}</div>
                </div>
            </div>

            <div class="d-flex align-items-center">
                <h5 class="stats-title mb-0 me-5">Speed:</h5>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: speed + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ speed }}</div>
                </div>
            </div>
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

    computed: {
        computedClass(){
            return{
                'bg-grass': this.type === 'grass',
                'bg-fire': this.type === 'fire',
                'bg-water': this.type === 'water',
            }
        },

        classForType(){
            return{
                'type-grass': this.type === 'grass',
                'type-fire': this.type === 'fire',
                'type-water': this.type === 'water',
            }
        },
        
    }
    
}

</script>

<style scoped>

/* HEADER STYLE */
.header{
    width: 100vw;
    height: 30vh;
    position: fixed;
    top: 0px;
    left: 0px;
    color: white;
}

.header .container{
    transform: translateY(35%);
}

.card-pokemon{
    width: 13rem;
    height: 13rem;
    background-color: white;
}

.pokemon-img{
    width: 100%;
    height: auto;
}

.poke-title{
    font-weight: 600;
    text-transform: uppercase;

}

.type, .abilities{
    color: #2c3e50;
    font-weight: 600;
}

.abilities span{
    text-transform: capitalize;
    font-weight: 500;
}

.type-box{
    color: white;
    border-radius: 5px;
    font-size: 18px;
}

/*  END HEADER STYLE */

 /* CONTENT STYLE */
.content{
    margin-top: 52vh;
}
.poke-stats{
    text-transform: capitalize;
}

.progress{
width: 45%;
}

.stats-title{
    width: 5%;
    font-weight: 600;
}

.stats-info{
    width: 20%;
}

.progress-bar{
    background-color: #FFCC33 ;
}

/* END CONTENT STYLE */

/* CSS COLOR */

.grass{
    border: 3px solid #7CEF4E;
}
.fire{
    border: 3px solid #FF4422
}
.water{
    border: 3px solid #3399FF
}

.bg-grass{
    background: linear-gradient(79.45deg, rgba(46, 100, 25, 0.2) 25.46%, rgba(0, 0, 0, 0) 108.75%), #7CEF4E;
}

.bg-fire{
    background: linear-gradient(75.77deg, rgba(84, 26, 15, 0.2) 31.36%, rgba(0, 0, 0, 0) 101.57%), #FF4422;
}

.bg-water{
    background: linear-gradient(75.77deg, rgba(84, 26, 15, 0.2) 31.36%, rgba(0, 0, 0, 0) 101.57%), #3399FF;

}

.type-grass{
    background: #7CEF4E;
}

.type-fire{
    background: #FF4422;
}

.type-water{
    background: #3399FF;
}
</style>