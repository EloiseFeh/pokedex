<template>
  <div class="container">
  <router-view/>
</div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
}

h1{
  font-weight: bold !important;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.Page-title{
  text-align: left;
}

/* 4 elev */
.Elev4{
  box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12);
}
/* 5 elev */
.Elev5 {
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 8px;
}
</style>
