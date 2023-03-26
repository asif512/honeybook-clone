<template>
  <div class="truested-companies">
    <div class="container">
      <h2 class="title">Featured in</h2>
      <div class="companies-wrapper">
        <div
          class="media-elemnet"
          v-for="(logo, index) in companies"
          :key="index"
        >
          <img :src="logo" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TruestedCompanies",
  data() {
    return {
      companies: [
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/fortune-dark.png",
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/cnbc-dark.png",
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/fast-company-dark.png",
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/forbes-dark.png",
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/reuters-dark.png",
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/featured_in/tc-dark.png",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.truested-companies {
  background: $light-5;
  padding: 72px 20px;
  color: $dark-1;

  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 32px;
  }

  .companies-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    @include forSmall() {
      flex-wrap: wrap;
      gap: 16px;
    }

    .media-elemnet {
      img {
        max-height: 44px;
        max-width: 100%;

        @include forDesktop() {
          max-height: 32px;
        }

        @include forLarge() {
          max-height: 26px;
        }

        @include forSmall() {
          max-height: 22px;
        }
      }
    }
  }
}
</style>
