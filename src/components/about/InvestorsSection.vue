<template>
  <div class="investors">
    <div class="container">
      <h3 class="title">Our investors</h3>
      <div class="media-elements">
        <div
          class="media-element"
          v-for="(logo, index) in investors"
          :key="index"
        >
          <img class="logo" :src="logo.url" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvestorsSection",
  data() {
    return {
      investors: [
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/our_story/norwest_logo.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/our_story/aleph_logo.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/our_story/hillsven_logo.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/our_story/UPW-Logo.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/Citi_Ventures.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/Durable_Capital_Partners.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/tiger.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/battery.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/Zeev_Ventures.png",
        },
        {
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/investors/01A_Logo.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.investors {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 80px;
  padding-bottom: 10px;
  background-color: $light-5;

  .title {
    font-size: 40px;
    margin-bottom: 50px;
    font-weight: 600;
    line-height: 1.18;

    @include forMedium() {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }

  .media-elements {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .media-element {
      margin-bottom: 70px;
      width: 200px;
      opacity: 0.6;
      filter: grayscale(1);

      .logo {
        max-width: 200px;
        max-height: 80px;

        @include forDesktop() {
          max-width: 150px;
        }
      }
    }
  }
}
</style>
