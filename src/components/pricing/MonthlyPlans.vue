<template>
  <div class="monthly-plans container">
    <div class="pricing-card-wrapper">
      <pricing-card
        class="monthly-price-card"
        v-for="(card, index) in pacakages"
        :key="index"
        :card="card"
      />
    </div>
    <div class="compares-plan-features">
      <b-button @click="handleComparePlanCollapse" class="compare-plan__btn">
        Compare plan features
        <b-icon
          class="icon"
          :icon="
            comparePlanCollapse ? 'chevron-double-up' : 'chevron-double-down'
          "
        />
      </b-button>
      <div class="compares-wrapper" v-if="comparePlanCollapse">
        <feature-comparison :features="features" :pacakages="pacakages" />
      </div>
    </div>
  </div>
</template>

<script>
import PricingCard from "@/components/Base/PricingCard.vue";
import FeatureComparison from "@/components/pricing/FeatureComparison.vue";
export default {
  name: "MonthlyPlans",
  components: {
    "pricing-card": PricingCard,
    "feature-comparison": FeatureComparison,
  },
  data() {
    return {
      comparePlanCollapse: false,
      pacakages: [
        {
          name: "asia",
          label: "Easily create seamless client experiences.",
          price: "$16",
          duration: "per month",
          extra: "What's included",
          benefits: [
            "Unlimited clients and projects",
            "Invoices and payments",
            "Scheduler",
            "Automations",
            "Calendar",
            "Client portal",
            "Basic reports",
          ],
        },
        {
          name: "Africa",
          label: "Easily create seamless client experiences.",
          price: "$20",
          duration: "per month",
          extra: "What's included",
          isPapular: true,
          benefits: [
            "Unlimited clients and projects",
            "Invoices and payments",
            "Scheduler",
            "Automations",
            "Calendar",
            "Client portal",
            "Basic reports",
          ],
        },
        {
          name: "Europe",
          label: "Easily create seamless client experiences.",
          price: "$10",
          duration: "per month",
          extra: "What's included",
          benefits: [
            "Unlimited clients and projects",
            "Invoices and payments",
            "Scheduler",
            "Automations",
            "Calendar",
            "Client portal",
            "Basic reports",
          ],
        },
        {
          name: "America",
          label: "Easily create seamless client experiences.",
          price: "$16",
          duration: "per month",
          extra: "What's included",
          benefits: [
            "Unlimited clients and projects",
            "Invoices and payments",
            "Scheduler",
            "Automations",
            "Calendar",
            "Client portal",
            "Basic reports",
          ],
        },
        {
          name: "Canada",
          label: "Easily create seamless client experiences.",
          price: "$12",
          duration: "per month",
          extra: "What's included",
          benefits: [
            "Unlimited clients and projects",
            "Invoices and payments",
            "Scheduler",
            "Automations",
            "Calendar",
            "Client portal",
            "Basic reports",
          ],
        },
      ],
      features: [
        {
          name: "Clientflow management",
          services: [
            {
              title: "Unlimited clients and projects",
              subTitle:
                "Keep all your client info and projects organized under one roof.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: true,
            },
            {
              title: "Project pipeline",
              subTitle: "See where projects stand, from inquiry to completed.",
              isAvailableInAsia: true,
              isAvailableInAfrica: false,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: false,
            },
            {
              title: "Project pipeline",
              subTitle: "See where projects stand, from inquiry to completed.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: false,
              isAvailableInAmerica: true,
              isAvailableInEurope: true,
            },
            {
              title: "Project pipeline",
              subTitle: "See where projects stand, from inquiry to completed.",
              isAvailableInAsia: false,
              isAvailableInAfrica: true,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: false,
            },
          ],
        },
        {
          name: "Scheduling",
          services: [
            {
              title: "Scheduler",
              subTitle:
                "Manage availability, let clients book online, and automate reminders.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: true,
            },
            {
              title: "Schedule and pay",
              subTitle: "Let clients book a session and pay in one go.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: false,
              isAvailableInAmerica: true,
              isAvailableInEurope: true,
            },
            {
              title: "Schedule and pay",
              subTitle: "Let clients book a session and pay in one go.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: true,
            },
            {
              title: "Schedule and pay",
              subTitle: "Let clients book a session and pay in one go.",
              isAvailableInAsia: true,
              isAvailableInAfrica: true,
              isAvailableInCaneda: true,
              isAvailableInAmerica: true,
              isAvailableInEurope: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleComparePlanCollapse() {
      this.comparePlanCollapse = !this.comparePlanCollapse;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.monthly-plans {
  .pricing-card-wrapper {
    display: flex;
    // flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 100px;
    overflow-x: auto;
    scrollbar-width: none;

    .monthly-price-card {
      width: 350px;
      min-width: 350px;
      max-width: 350px;

      @include forMedium() {
        width: 100%;
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .compares-plan-features {
    margin-bottom: 60px;

    .compare-plan__btn {
      background-color: transparent;
      border: 1px solid;
      box-shadow: none;
      color: $dark-1;
      font-weight: 400;
      margin: 0 auto 50px;
      height: 56px;
      line-height: 2.5;
      font-size: 18px;
      padding: 0 2.2rem;
      .icon {
        margin-left: 6px;
      }
    }
  }
}
</style>
