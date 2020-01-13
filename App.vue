<template>
  <div id="app">
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/schedule">Schedule</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/blog">Blog</router-link>

    </nav>

    <router-view/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Todo
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

body {
  background-color: rgb(172, 232, 243);
  font-family: 'Montserrat', sans-serif;
  color: black;
  display: grid;
  grid-template-rows: auto;
  justify-items: left;
  align-items: left;
}
body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 50%;
}

body {
  background-color: rgb(217, 241, 245);
  font-family: 'Montserrat', sans-serif;
  color:black;
  display: grid;
  grid-template-rows: auto;
  justify-items: left;
  padding-top: 50px;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background: rgb(241, 217, 217);
  border-radius: 3px;
  color:brown;
  font-weight: bold;
  margin-right: 15px;
}

</style>