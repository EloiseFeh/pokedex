<template>
    <div class="SideMenu Elev5 d-flex flex-column justify-content-around">

        <img class="ImgProfile mb-4 align-self-center" alt="Profile Picture" src="../assets/img/profile-pic.png">

        <ul class="SideMenu-List py-4 px-4 d-flex flex-column align-items-start">
            <li class="SideMenu-Item mb-3 d-flex w-100">
                <router-link to="/">PokeDex</router-link>
            </li>
            <li class="SideMenu-Item mb-4 d-flex w-100">
                <router-link to="/trainercard">Trainer Card</router-link>
            </li>
            <li class="SideMenu-Item mb-4 d-flex w-100">
                <a to="https://github.com/EloiseFeh/pokedex" target="_blank">Github</a>
            </li>
        </ul>

        <div class="GithubCredits d-flex flex-column">
            <a href="https://github.com/EloiseFeh" target="_blank">
            <span>Created by EloiseFeh</span>
            <figure>
                <img class="IconGithub mb-4" alt="Github Icon" src="../assets/img/github-icon.png">
            </figure>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    name: "SideMenu",
    setup() {
        
    },
}
</script>

<style scoped>
    .ImgProfile{
        width: 50%;
        height: auto;
    }

    .SideMenu{
        width: 20vw;
        height: 100vh;
        background-color: #FFFFFF;
        float: right;
        display: block;
        position: fixed;
        top: 0;
        right: 0;

    }

    .SideMenu-List{
        list-style: none;
    }

    .SideMenu-List .SideMenu-Item:first-child{
        border-bottom: 5px solid #F1BC1C;
    }

    .SideMenu-List .SideMenu-Item:nth-child(even){
        border-bottom: 5px solid #ED317C;
    }

    .SideMenu-List .SideMenu-Item:last-child{
        border-bottom: 5px solid #2683E1;
    }

    .SideMenu-Item a{
        text-decoration: none;
        color: #000;
        font-size: 1.3rem;
        font-weight: bold;
    }

    .GithubCredits a{
        text-decoration: none;
        color: rgba(0, 0, 0, 0.678);
    }

</style>