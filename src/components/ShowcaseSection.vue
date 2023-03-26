<template>
  <div class="showcase-section container">
    <h2 class="title">Showcase your services, your way</h2>
    <h3 class="sub-title">
      Use customizable, interactive proposals to present your brand and impress
      your clients.
    </h3>
    <div class="media-element">
      <video
        poster="https://res.cloudinary.com/honeybook/video/upload/c_scale,w_960/v1/marketing_site/homepage2/your-services.jpg"
        class=""
        alt="valuePropsHero.title"
        autoplay=""
        muted=""
        loop=""
        playsinline=""
        loading="lazy"
      >
        <source
          src="https://res.cloudinary.com/honeybook/video/upload/c_scale,w_960/v1/marketing_site/homepage2/your-services.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/honeybook/video/upload/c_scale,w_960/v1/marketing_site/homepage2/your-services.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/honeybook/video/upload/c_scale,w_960/v1/marketing_site/homepage2/your-services.ogv"
          type="video/ogg"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowcaseSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.showcase-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding: 96px 0;

  .title {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    margin-bottom: 24px;

    @include forMedium() {
      font-size: 32px;
    }
  }

  .sub-title {
    color: $gray-1;
    font-size: 20px;
    font-weight: 400;
    margin: 0 auto 44px;
    max-width: 765px;
  }

  .media-element {
    margin: 0 auto 32px;
    width: 90%;

    video {
      width: 100%;
    }
  }
}
</style>
