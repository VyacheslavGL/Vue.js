<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/favorites">Favorites ({{ favoriteCount }})</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {LOAD_BREEDS, LOAD_FAVORITES} from "./store/action.types";

  export default {
    async created(){
      // dispatch - запускает метод
      //Promise.all - пишем если нужено параллельное выполнение функции
      await Promise.all([
        this.$store.dispatch(LOAD_BREEDS),
        this.$store.dispatch(LOAD_FAVORITES),
      ])
    },
    computed:{
      favoriteCount(){
        return this.$store.state.favorites.length
      }
    },

  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
