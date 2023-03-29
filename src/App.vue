<template>
  <div id="app">
    <the-header v-if="!renderHeader" />
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <main class="main-content">
      <router-view />
    </main>
    <the-footer v-if="!renderFooter" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    "the-header": TheHeader,
    "the-footer": TheFooter,
  },
  computed: {
    renderHeader() {
      return this.$route.meta.isHideHeader;
    },
    renderFooter() {
      return this.$route.meta.isHideFooter;
    },
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
  color: $dark-1;
}

.main-content {
  margin-top: 78px;
}
</style>
