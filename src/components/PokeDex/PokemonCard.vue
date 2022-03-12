<template>
    <div v-if="id <= 3" :class="'Fill-div Grass'">
        <h4 class="Card-title">{{ name }}</h4>
    </div>
    <div v-else-if="id > 3 && id <=6" :class="'Fill-div Fire'">
        <h4 class="Card-title">{{ name }}</h4>
    </div>
    <div v-else-if="id > 6 && id <=9" :class="'Fill-div Water'">
        <h4 class="Card-title">{{ name }}</h4>
    </div>
</template>

<script>
export default {
    name:"PokemonCard",
    setup(){

    },
    props: {
    name: String,
    id: String,
  }
}
</script>
<style>

.Fill-div{
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.Card-title{
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 600;
}

.Grass{
    background: linear-gradient(79.45deg, rgba(46, 100, 25, 0.2) 25.46%, rgba(0, 0, 0, 0) 108.75%), #7CEF4E;
}

.Fire{
    background: linear-gradient(75.77deg, rgba(84, 26, 15, 0.2) 31.36%, rgba(0, 0, 0, 0) 101.57%), #FF4422;
}

.Water{
    background: linear-gradient(67.86deg, rgba(21, 56, 91, 0.2) 26.83%, rgba(0, 0, 0, 0) 74.39%), #3399FF;
}

</style>