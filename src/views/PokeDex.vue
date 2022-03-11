<template>
    <div class="Page-container mx-4">
        <h1 class="Page-title mt-5 mb-5">Ellie's PokeDex</h1>

        <div class="mt-5 d-flex justify-content-around flex-wrap">
            <PokemonCard name="Venosaur" :imgPath="require('../assets/img/venosaur.png')" />
            <PokemonCard name="Pikachu" :imgPath="require('../assets/img/pikachu.png')"/>
            <PokemonCard name="Ninetales" :imgPath="require('../assets/img/ninetales.png')"/>
            <PokemonCard name="Vaporeon" :imgPath="require('../assets/img/vaporeon.png')"/>
            <PokemonCard name="Kadabra" :imgPath="require('../assets/img/kadabra.png')"/>
            <PokemonCard name="Gengar" :imgPath="require('../assets/img/gengar.png')"/>
        </div>

    </div>
</template>

<script>
import PokemonCard from '@/components/PokeDex/PokemonCard.vue'

export default {
    name: "PokeDex",
    components: {
    PokemonCard,
  },
}
</script>

<style scoped>

</style>