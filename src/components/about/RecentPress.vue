<template>
  <div class="recent-press">
    <div class="container">
      <h3 class="title">Recent press</h3>
      <div class="recent-press__items">
        <div
          class="recent-press__item"
          v-for="(recent, index) in recents"
          :key="index"
        >
          <div class="media-element">
            <img class="logo" :src="recent.url" alt="logo" />
          </div>
          <div class="title">
            {{ recent.title }}
          </div>
        </div>
      </div>
      <div class="footer-label">
        For media inquiries, please visit our
        <a href="#" class="link">press page</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvestorsSection",
  data() {
    return {
      recents: [
        {
          title:
            "HoneyBook doubles valuation with new round as it helps independent workers get paid.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/press_page/logo-tech_2x.png",
        },
        {
          title:
            "Business software firm HoneyBook valued at $2.4 bln after Tiger Global-led funding",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/press_page/featured_in_logos/reuters-logo.png",
        },
        {
          title:
            "Focusing on Values Profits a Tech Company Serving Solopreneurs",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/press_page/featured_in_logos/forbes-women2.png",
        },
        {
          title:
            "5 Actions Freelancers Should Take Right Now to Protect Against Crises Like COVID-19",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/press_page/logo-cnbc_2x.png",
        },
        {
          title:
            "5 Actions Freelancers Should Take Right Now to Protect Against Crises Like COVID-19",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/press_page/logo-cnbc_2x.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.recent-press {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 40px;
  padding-bottom: 40px;

  .title {
    font-size: 40px;
    margin-bottom: 50px;
    font-weight: 600;
    line-height: 1.18;
    padding-top: 50px;

    @include forMedium() {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }

  .recent-press__items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    // justify-content: space-evenly;
    .recent-press__item {
      max-width: 285px;
      text-align: center;
      margin: 25px;

      .title {
        color: #767b84;
        font-size: 14px;
        margin: auto;
        padding: 10px;
        line-height: 1.4;
        font-weight: 500;
      }
      .media-element {
        // margin-bottom: 70px;
        // width: 200px;
        // opacity: 0.6;
        // filter: grayscale(1);

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

  .footer-label {
    padding-bottom: 0;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 500;

    .link {
      color: $pink-1;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
