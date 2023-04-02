<template>
  <div class="roadmap container">
    <div class="hero-section">
      <h2 class="title">Our Roadmap</h2>
      <h4 class="sub-title">
        Here you always have an overview of what we are currently working on and
        can make your own suggestions for development.
      </h4>
      <b-button class="trial-btn">submit idea</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapView",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.roadmap {
  font-family: Aeonik, ProximaNova, sans-serif;
  .hero-section {
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: left;

    .title {
      font-size: 48px;
      line-height: 1.1em;
      font-weight: 600;
      margin-bottom: 35px;
    }

    .sub-title {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 100px;
    }

    .trial-btn {
      text-transform: uppercase;
    }
  }
}
</style>
