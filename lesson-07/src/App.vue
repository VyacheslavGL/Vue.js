<template>
  <div id="app">
    <base-layout>

      <template>
        <router-view/>
      </template>

      <template #menu>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link> |
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </template>

    </base-layout>

  </div>
</template>

<script>
  import BaseLayout from "./components/BaseLayout";
  export default {
    components: {BaseLayout}
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
  .container{
    max-width: 600px;
    border: 1px solid black;
    padding: 30px;
    margin: 40px auto;
  }
</style>


