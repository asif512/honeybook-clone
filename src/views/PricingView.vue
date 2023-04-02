<template>
  <div class="pricing-view">
    <div class="hero-section container">
      <h2 class="title">Plans that scale with your business</h2>
      <h3 class="sub-title">
        Try HoneyBook free for 7 days, no credit card required.
      </h3>
      <b-button class="trial-btn">Start free trial</b-button>
    </div>

    <div class="pricing-details">
      <div class="plan-switcher">
        <div
          class="plan"
          v-for="(plan, index) in plans"
          :key="index"
          @click="seletedPlan(plan.component)"
          :class="{ active: plan.component == activePlan }"
        >
          {{ plan.label }}
        </div>
      </div>
      <div class="plan-details">
        <component :is="renderComponent" />
      </div>
    </div>
    <all-plans />
    <trusted-bussiness />
    <faq-section />
    <div class="banner-section">
      <div class="container">
        <div class="content">
          <h2 class="title">It’s free to try. We hope you do.</h2>
          <h4 class="sub-title">
            93% of members would recommend HoneyBook to a friend.
          </h4>
          <b-button class="trial-btn">Start free trial</b-button>
          <div class="require-label">Start free trial</div>
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
import MonthlyPlans from "@/components/pricing/MonthlyPlans.vue";
import YearlyPlans from "@/components/pricing/YearlyPlans.vue";
import AllPlans from "@/components/pricing/AllPlans.vue";
import TrustedBussiness from "@/components/pricing/TrustedBussiness.vue";
import FaqSection from "@/components/pricing/FaqSection.vue";
export default {
  name: "PricingView",
  components: {
    "monthly-plans": MonthlyPlans,
    "yearly-plans": YearlyPlans,
    "all-plans": AllPlans,
    "trusted-bussiness": TrustedBussiness,
    "faq-section": FaqSection,
  },
  data() {
    return {
      activePlan: "monthly",
      plans: [
        {
          label: "monthly",
          component: "monthly",
        },
        {
          label: "Yearly (2 months free)",
          component: "yearly",
        },
      ],
    };
  },
  computed: {
    renderComponent() {
      return `${this.activePlan}-plans`;
    },
  },
  methods: {
    seletedPlan(plan) {
      this.activePlan = plan;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.pricing-view {
  font-family: Aeonik, ProximaNova, sans-serif;
  .hero-section {
    .title {
      margin-bottom: 16px;
      font-size: 48px;
      font-weight: 600;
      line-height: 1.18;
      padding-top: 50px;
    }

    .sub-title {
      font-size: 24px;
      font-weight: 400;
      margin: 0 auto 40px;
    }

    @include forMedium() {
      .title {
        font-size: 32px;
      }

      .sub-title {
        font-size: 20px;
      }
    }
  }

  .pricing-details {
    margin-top: 60px;
    .plan-switcher {
      align-items: center;
      border: 1px solid $light-7;
      border-radius: 70px;
      display: inline-flex;
      justify-self: center;
      padding: 5px;
      margin-bottom: 32px;

      .plan {
        padding: 10px 30px;
        font-size: 16px;
        line-height: 22px;
        cursor: pointer;
        transition: left 0.2s ease, width 0.2s ease;
        text-transform: capitalize;

        &.active {
          background: $dark-1;
          color: $white;
          border-radius: 70px;
        }
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
