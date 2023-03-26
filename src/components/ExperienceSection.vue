<template>
  <div class="experience-section">
    <iframe
      class="video"
      src="https://player.vimeo.com/video/798848864?badge=0&title=0&autopause=0&autoplay=1&muted=1&loop=1&controls=0&player_id=0&app_id=58479"
    >
    </iframe>
    <div class="content">
      <h2 class="title">Give clients the best experience</h2>
      <h3 class="decription">
        Create interactive experiences that make it easy for clients to select
        services, e-sign contracts, send payments, and more—all in one go.
      </h3>
      <b-button class="trial-btn">Start free trail</b-button>
      <p class="required-label">No credit card required</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.experience-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $light-3;
  padding: 96px 0;
  display: flex;
  align-items: center;
  color: $dark-1;
  justify-content: center;

  @include forMedium() {
    padding: 56px 1.2rem;
  }

  @include forDesktop() {
    flex-direction: column-reverse;
  }

  .video {
    width: 684px;
    height: 452px;

    @include forMedium() {
      width: 600px;
      height: 442px;
    }

    @include forSmall() {
      width: 500px;
      height: 420px;
    }
  }

  .content {
    padding-left: 40px;
    max-width: 40%;
    min-width: 40%;
    text-align: left;

    @include forDesktop() {
      text-align: center;
      max-width: 940px;
    }

    .title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 600;
      margin-bottom: 24px;
      padding-top: 50px;
    }

    .decription {
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
      margin: 0 auto 44px;
    }

    .required-label {
      color: $gray-1;
      font-weight: 400;
      margin-top: 12px;
      font-size: 14px;
    }
  }
}
</style>
