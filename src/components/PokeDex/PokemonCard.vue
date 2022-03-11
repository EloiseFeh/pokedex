<template>
    <div class="Card Elev4 d-flex align-items-center justify-content-around grass">
        <img class="Card-img" :src="imgPath">

        <h4 class="Card-title">{{ name }}</h4>
    </div>
</template>

<script>
export default {
    name:"PokemonCard",
    props: {
    imgPath: String,
    name: String,
    type: String,
  }
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

.grass{
    background: linear-gradient(79.45deg, rgba(46, 100, 25, 0.2) 25.46%, rgba(0, 0, 0, 0) 108.75%), #7CEF4E;
}

</style>