<template>
  <div class="feature container">
    <div class="feature-intro">
      <h2 class="title">
        The all-in-one clientflow platform for those who do it all
      </h2>
      <h3 class="sub-title">What do you want to do with HoneyBook?</h3>
    </div>
    <div class="feature-checklist">
      <!-- <div class="back-button navigation-btn">
        <b-icon class="icon back-icon" icon="chevron-double-left" />
      </div> -->
      <feature-checklist-card
        v-for="(feature, index) in features"
        :key="index"
        :feature="feature"
      />
      <!-- <div class="right-button navigation-btn">
        <b-icon class="icon next-icon" icon="chevron-double-right" />
      </div> -->
    </div>
    <b-button class="trial-btn">Start free trial</b-button>
    <p class="card-required--no">No credit card required</p>
  </div>
</template>

<script>
import FeatureChecklistCard from "./FeatureChecklistCard.vue";
export default {
  name: "FeatureBlock",
  components: {
    "feature-checklist-card": FeatureChecklistCard,
  },
  data() {
    return {
      features: [
        {
          icon: "currency-dollar",
          label: "send invoices",
          color: "#659675",
        },
        {
          icon: "pencil-square",
          label: "sign contracts",
          color: "#131416",
        },
        {
          icon: "journal-bookmark",
          label: "book & schedule",
          color: "#e0673a",
        },
        {
          icon: "bar-chart-steps",
          label: "automate workflows",
          color: "#8097f3",
        },
        {
          icon: "calendar2-range",
          label: "manage projects",
          color: "#11768d",
        },
        {
          icon: "currency-dollar",
          label: "accept online payments",
          color: "#11768d",
        },
        {
          icon: "three-dots",
          label: "not sure",
          color: "#585757",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.feature {
  font-family: Aeonik, ProximaNova, sans-serif;

  .feature-intro {
    padding-top: 50px;
    margin: 0 auto 24px;
    width: 650px;

    @include forMedium() {
      max-width: 350px;
    }

    .title {
      font-size: 36px;
      font-weight: 600;
      line-height: 1.18;
      color: $dark-1;
      margin: 0 auto 24px;

      @include forMedium() {
        font-size: 30px;
        max-width: 350px;
      }

      @include forSmall() {
        font-size: 27px;
      }
    }

    .sub-title {
      font-size: 24px;
      font-weight: 400;
      line-height: 32px;
      margin: 0 auto 45px;
    }
  }

  .feature-checklist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 52px;
    position: relative;

    // .navigation-btn {
    //   width: 40px;
    //   height: 40px;
    //   border-radius: 20px;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    //   background: $white;
    //   border: 1px solid $white;
    //   cursor: pointer;
    // }
  }

  .card-required--no {
    color: $gray-1;
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
  }
}
</style>
