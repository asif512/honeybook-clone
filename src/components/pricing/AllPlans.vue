<template>
  <div class="all-plans">
    <div class="container">
      <h2 class="title">All plans include</h2>
      <div class="plans">
        <div class="plan" v-for="(plan, index) in allPlans" :key="index">
          <img class="plan-logo" :src="plan.logo" alt="logo" />
          <h2 class="plan-title">{{ plan.title }}</h2>
          <p class="plan-sub-title">{{ plan.subTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllPlans",
  data() {
    return {
      allPlans: [
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/invoices.png",
          title: "Invoicing & payments",
          subTitle: "Send invoices and get paid fast with online payments.",
        },
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/contracts.png",
          title: "Contracts",
          subTitle: "Send invoices and get paid fast with online payments.",
        },
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/setup.png",
          title: "Free file setup",
          subTitle: "Send invoices and get paid fast with online payments.",
        },
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/pricing/support.png",
          title: "Support 7 days a week",
          subTitle: "Send invoices and get paid fast with online payments.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.all-plans {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $light-8;

  .container {
    padding-top: 100px;
    padding-bottom: 100px;

    .title {
      font-size: 48px;
      line-height: 1.18;
      padding-top: 50px;
      margin-bottom: 50px;
      font-weight: 600;
    }

    .plans {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .plan {
        margin: 15px auto;
        text-align: center;
        width: 270px;
        .plan-logo {
          max-width: 84px;
        }
        .plan-title {
          font-size: 24px;
          font-weight: 600;
          color: $dark-3;
          margin: 24px 0;
        }
        .plan-sub-title {
          font-size: 18px;
          color: $gray-2;
          line-height: 1.4;
          font-weight: 400;
        }
      }
    }

    @include forMedium() {
      .title {
        font-size: 32px;
      }
    }
  }
}
</style>
