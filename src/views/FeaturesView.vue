<template>
  <div class="featrues-view">
    <feature-block />
    <div
      class="feature-page container"
      v-for="(feature, index) in features"
      :key="index"
    >
      <div class="feature-content">
        <h2 class="title">{{ feature.title }}</h2>
        <h3 class="sub-title" v-if="feature.subTitle">
          {{ feature.subTitle }}
        </h3>
        <div class="features-list" v-if="feature.featuresList">
          <div
            class="feature-list"
            v-for="(list, i) in feature.featuresList"
            :key="i"
          >
            <b-icon class="icon" icon="check"></b-icon>
            <span class="label">{{ list }}</span>
          </div>
        </div>
        <b-button class="more-btn"> Tell me more</b-button>
        <div class="description" v-if="feature.description">
          {{ feature.description }}
        </div>
        <div class="user-info" v-if="feature.avatar">
          <img class="avatar" :src="feature.avatar" alt="avatar" />
          <div class="name-role">
            <h2 class="name">{{ feature.name }}</h2>
            <h4 class="role">{{ feature.role }}</h4>
          </div>
        </div>
      </div>
      <div class="elemnent-media">
        <img
          v-if="feature.image"
          class="image"
          :src="feature.image"
          alt="image"
        />
      </div>
    </div>
    <div class="banner-section">
      <div class="container">
        <div class="content">
          <h2 class="title">It’s free to try. We hope you do.</h2>
          <h4 class="sub-title">
            93% of members would recommend HoneyBook to a friend.
          </h4>
          <b-button class="trial-btn">Start free trial</b-button>
          <div class="require-label">No credit card required</div>
        </div>
        <div class="element-media">
          <img
            class="img"
            src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/moneystack.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeatureBlock from "@/components/FeatureBlock.vue";
export default {
  name: "FeaturesView",
  components: {
    "feature-block": FeatureBlock,
  },
  data() {
    return {
      features: [
        {
          title: "Invoices",
          subTitle: "More cha-chings for you",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description:
            "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_405/v1/marketing_site/features_page/light-brows.png",
        },
        {
          title: "Proposal",
          subTitle: "Professional and flexible",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description:
            "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_370/v1/marketing_site/features-hub/Proposal_2x.png",
        },
        {
          title: "Scheduling",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_490/v1/marketing_site/features-hub/desktop/full_images/scheduling_calendar.png",
        },
        {
          title: "Contracts",
          subTitle: "Legit and ready-to-go",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description:
            "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_450/v1/marketing_site/features-hub/contract-brows.png",
        },
        {
          title: "Automation",
          subTitle: "Productivity on overdrive",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description:
            "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_450/v1/marketing_site/features-hub/contract-brows.png",
        },
        {
          title: "All-in-one",
          subTitle: "Simpler, smarter business",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description:
            "HoneyBook invoicing is a way to get paid extremely easy, fast and without any troubles.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_360/v1/marketing_site/features_page/all-in-one-rebrand.png",
        },
        {
          title: "Integrations",
          subTitle: "Efficient and easy to use",
          featuresList: [
            "Secure and easy digital payments",
            "Payment schedules and reminders",
            "Auto-saved item bank",
          ],
          description: "It’s the overall package that makes my life easier.",
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_face,q_auto,w_40/v1/marketing_site/features-hub/testimonial_headshots/mark_dickinson.png",
          name: "Mark Dickinson",
          role: "Mark Dickinson Photography",
          image:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/home_page/features_list/Feature-4-new.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.featrues-view {
  .feature-page {
    display: flex;
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: left;
    justify-content: space-between;

    .feature-content {
      width: 50%;

      .title {
        font-size: 36px;
        line-height: 1.25;
        margin: 0;
        font-weight: 700;
      }

      .sub-title {
        font-size: 30px;
        font-weight: 400;
        color: #767b84;
      }
      .features-list {
        margin-bottom: 50px;
        margin-top: 16px;
        .feature-list {
          display: flex;
          align-items: center;
          margin-bottom: 0.75em;

          .icon {
            fill: $blue-2;
            width: 20px;
            height: 20px;
          }
          .label {
            font-size: 20px;
            font-weight: 400;
            margin-left: 16px;
            color: #383f49;
          }
        }
      }
      .more-btn {
        background-color: transparent;
        border: 1px solid;
        box-shadow: none;
        color: #131416;
        line-height: 2.5;
        font-size: 16px;
        height: 42px;
        padding: 1px 20px 0;
        margin-bottom: 50px;
      }
      .description {
        margin-bottom: 20px;
        font-size: 20px;
        line-height: 1.25;
        font-style: italic;
        font-weight: 300;
        margin: 0 auto 20px;
      }
      .user-info {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          overflow: hidden;
        }
        .name-role {
          margin-left: 12px;
          .name {
            color: #767b84;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 0;
            margin-top: 0;
          }
          .role {
            color: #767b84;
            font-size: 14px;
            line-height: 1.2;
          }
        }
      }
    }
    .elemnent-media {
      width: 45%;
      display: flex;
      justify-content: flex-end;
      .image {
        width: 100%;
        max-width: 420px;
        margin: 0 auto;
      }
    }

    @include forLarge() {
      flex-direction: column;
      .feature-content {
        width: 100%;
      }

      .elemnent-media {
        width: 100%;
      }
    }
  }
  .banner-section {
    background: $light-8;
    text-align: left;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 96px;
      padding-bottom: 64px;
      max-width: 900px;

      .content {
        max-width: 600px;
        .title {
          font-size: 48px;
          max-width: 400px;
          line-height: 1.18;
          padding-top: 50px;
          font-weight: 600;
          margin-bottom: 50px;
        }

        .sub-title {
          font-size: 32px;
          margin: 0 auto 40px;
          font-weight: 400;
        }

        .require-label {
          font-size: 14px;
          margin-top: 20px;
        }
      }

      .element-media {
        // width: 50%;
        .img {
          max-width: 200px;
        }
      }
    }

    @include forMedium() {
      .container {
        flex-direction: column;
        align-items: center;
        .content {
          max-width: 340px;
          text-align: center;
          .title {
            font-size: 32px;
            max-width: 100%;
          }

          .sub-title {
            font-size: 24px;
          }
        }

        .element-media {
          margin-top: 24px;
          .img {
            max-width: 150px;
            height: 100px;
          }
        }
      }
    }
  }
}
</style>
