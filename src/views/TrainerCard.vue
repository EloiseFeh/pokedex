<template>
    <div class="Page-container mx-4">
        <h1 class="Page-title mt-5 mb-5">Trainer's Card</h1>

        <div class="Info-container mt-5 me-5 d-flex">

        <div class="Card-profile Elev5 d-flex align-items-center justify-content-center">
                <img class="Profile-img align-self-center" src="../assets/img/profile-pic.png">
        </div>

        <div class="Info-container text-start">
            <h2 class="Info-title">Eloise Ferreira</h2>
            <h5 class="mb-3">Level: 20 </h5>
            <h5 class="mb-3">Abilities: Front-End </h5>
            <h5 class="mb-3">You can find me <a class="link" href="https://linktr.ee/eloiseferreira">Here</a>! </h5>
        </div>
    </div>
        </div>
</template>

<script>

export default {
    name: "TrainerCard",
    components: {
  },
}
</script>

<style scoped>

.Card-profile{
    width: 20rem;
    height: 20rem;
    border: 3px solid #ED317C
}

.Profile-img{
    width: 75%;
    height: auto;
}

.Info-container{
    margin-left: 4rem ;
    margin-right: 4rem ; 
}

.link{
    font-weight: bold;
    text-decoration: none !important;
    color: #000;
}

</style>