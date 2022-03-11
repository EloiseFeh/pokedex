<template>
    <div class="Page-container mx-5 d-flex ">

        <div class="Card-pokemon me-5 Elev5 d-flex flex-column justify-content-around align-items-center">
            <h6 class="id">#003</h6>
                <img class="Pokemon-img" src="../assets/img/venosaur.png">
        </div>

        <div class="Info-container text-start">
            <h2 class="Info-title">Venosaur</h2>
            <h5>Type: </h5>
            <h5>Abilities: </h5>
            <h5>Height: </h5>
            <h5>Weight: </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "PokemonInfo",
    setup() {
        
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
}
</style>