<template>
  <div class="social-block">
    <div class="container">
      <h2 class="title">Get to know us better</h2>
      <div class="social-icon">
        <b-icon class="icon" icon="facebook" />
        <b-icon class="icon" icon="linkedin" />
        <b-icon class="icon" icon="instagram" />
        <b-icon class="icon" icon="twitter" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBlock",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.social-block {
  background-color: $yellow;
  padding-bottom: 160px;
  padding-top: 60px;
  font-family: Aeonik, ProximaNova, sans-serif;
  position: relative;

  .title {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 65px;
    line-height: 1.18;
  }

  .social-icon {
    .icon {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }
  }

  &::after {
    background-image: url(https://res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1678731148/marketing_site/careers_page/career_social/checks-pile.png);
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 0;
    content: "";
    height: 77px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 380px;
  }
}
</style>
