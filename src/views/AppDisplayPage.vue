<template>
  <div class="app-display-page">
    <div class="features">
      <div class="feature" v-for="(feature, index) in features" :key="index">
        <div class="container">
          <div class="feature-content">
            <h2 class="title">{{ feature.title }}</h2>
            <h3 class="sub-title">
              {{ feature.subTitle }}
            </h3>
            <b-button class="trial-btn" v-if="feature.buttonLabel">{{
              feature.buttonLabel
            }}</b-button>
            <div class="require-label" v-if="feature.requireLable">
              {{ feature.requireLabel }}
            </div>
          </div>
          <div class="elemnent-media">
            <img class="image" :src="feature.url" alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div class="progess container">
      <h2 class="title">More time to focus on your passion</h2>
      <h4 class="sub-title">
        Free up your time with HoneyBook. Do more of what you love.
      </h4>
      <img class="image" :src="getProgessImage" alt="img" />
      <div class="pro-per"><span>20%</span> time managing your business</div>
    </div>
    <base-banner />
  </div>
</template>

<script>
import BaseBanner from "@/components/Base/BaseBanner.vue";
export default {
  name: "AppDisplayPage",
  components: {
    "base-banner": BaseBanner,
  },
  computed: {
    getProgessImage() {
      return require(`@/assets/images/progress.png`);
    },
  },
  data() {
    return {
      selectedImage: "invoice",
      features: [
        {
          title: "Mission control for your business",
          subTitle:
            "HoneyBook streamlines everything you need to manage your business into one place. Paper, spreadsheets and apps be gone!Now peace of mind comes with just one login.",
          buttonLabel: "Start free trial",
          requireLabel: "No credit card required",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_398/v1/marketing_site/lp/all-in-one/desktop/all-in-one-illustration-hero-rebrand.png",
        },
        {
          title: "Keep track of all your projects",
          subTitle:
            "HoneyBook streamlines everything you need to manage your business into one place. Paper, spreadsheets and apps be gone!Now peace of mind comes with just one login.",
          buttonLabel: "Take control",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_529/v1/marketing_site/lp/all-in-one/mobile/pipeline_3x.png",
        },
        {
          title: "Stay on top of all your files and documents",
          subTitle:
            "HoneyBook streamlines everything you need to manage your business into one place. Paper, spreadsheets and apps be gone!Now peace of mind comes with just one login.",
          buttonLabel: "Get organized",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_493/v1/marketing_site/lp/all-in-one/desktop/animate/img2/files-tab_2x.png",
        },
        {
          title: "Streamline client communication",
          subTitle:
            "HoneyBook streamlines everything you need to manage your business into one place. Paper, spreadsheets and apps be gone!Now peace of mind comes with just one login.",
          buttonLabel: "Never miss a thing",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_493/v1/marketing_site/lp/all-in-one/desktop/animate/img3/files-tab_2x.png",
        },
        {
          title: "Manage bookings and payments",
          subTitle:
            "HoneyBook streamlines everything you need to manage your business into one place. Paper, spreadsheets and apps be gone!Now peace of mind comes with just one login.",
          buttonLabel: "Get pain",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_407/v1/marketing_site/lp/all-in-one/desktop/animate/img4/agreement-template02_2x.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.app-display-page {
  font-family: Montserrat, sans-serif;

  .features {
    .feature {
      .container {
        display: flex;
        align-items: center;
        padding-top: 100px;
        padding-bottom: 100px;
        .feature-content {
          text-align: left;
          width: 50%;
          padding-right: 65px;
          .title {
            font-size: 36px;
            line-height: 1.25;
            padding-bottom: 15px;
            font-weight: 700;
          }

          .sub-title {
            font-size: 20px;
            line-height: 1.4;
          }

          .trial-btn {
            margin-top: 30px;
            font-size: 14px;
            height: 36px;
            line-height: 16px;
            padding: 1px 16px 0;
            background-color: $dark-1;
            color: $white;
          }

          .require-label {
            color: rgb(118, 123, 132);
            font-size: 14px;
            margin-top: 20px;
            margin-bottom: 10;
          }
        }

        .elemnent-media {
          width: 50%;
          .image {
            width: 100%;
          }
        }
      }

      &:nth-child(even) {
        background-color: $light-5;

        .container {
          flex-direction: row-reverse;

          .feature-content {
            padding-right: 0;
            padding-left: 65px;
          }
        }
      }

      &:nth-child(1) {
        .container {
          .feature-content {
            .title {
              font-size: 51px;
            }

            .trial-btn {
              background: $btn-color;
              margin-top: 50px;
            }
          }
        }
      }
    }
  }

  .progess {
    padding-top: 50px;
    padding-bottom: 50px;
    .title {
      font-size: 36px;
      margin: 0 0 8px;
      font-weight: 600;
      line-height: 1.5;

      @include forMedium() {
        font-size: 22px;
      }
    }

    .sub-title {
      font-size: 24px;
      margin: 0;
      font-weight: 400;
      line-height: 1.17;

      @include forMedium() {
        font-size: 16px;
      }
    }
    .image {
      width: 400px;
      margin: 16px 0;
    }

    .pro-per {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 38px;
        font-weight: 700;
      }

      font-size: 14px;
      color: $gray-1;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
}
</style>
