<template>
  <div id="app">
    <the-header />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "App",
  components: {
    "the-header": TheHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Aeonik, ProximaNova, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content {
  margin-top: 78px;
}
</style>
