<template>
  <div class="feature-section container">
    <div class="feature-list-wrapper">
      <h2 class="title">Use HoneyBook for</h2>
      <div class="feature-lists">
        <div
          class="feature-list"
          v-for="(feature, index) in features"
          :key="index"
          @mouseover="onMouveover(feature.image)"
        >
          <div class="arrow-wrapper">
            <b-icon icon="chevron-right" />
          </div>
          <div class="feature-list__icon">
            <b-icon :icon="feature.icon" />
          </div>
          <div class="feature-list__info">
            <h3 class="feature-list__title">{{ feature.title }}</h3>
            <p class="feature-list__sub-title">{{ feature.subTitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fearue-list__image-wrapper">
      <img class="image" :src="getImage" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
  data() {
    return {
      selectedImage: "payment.webp",
      image: require("@/assets/images/features/invoice.webp"),
      features: [
        {
          title: "professional invoices",
          subTitle: "Easily create & send invoices. Get paid on time.",
          icon: "dash-circle-dotted",
          image: "invoice",
        },
        {
          title: "secure payments",
          subTitle: "Simple. Fast. Direct. Digital.",
          icon: "dash-circle-dotted",
          image: "payment",
        },
        {
          title: "ironclad contracts",
          subTitle: "Easy-to-use. Ready to sign. And all online.",
          icon: "dash-circle-dotted",
          image: "contract",
        },
        {
          title: "fast scheduling",
          subTitle: "Share availability. Confirm meetings. Get booked.",
          icon: "dash-circle-dotted",
          image: "scheduling",
        },
        {
          title: "powerful automations",
          subTitle: "Trigger actions—replies, follow-ups, tasks.",
          icon: "dash-circle-dotted",
          image: "automation",
        },
      ],
    };
  },
  computed: {
    getImage() {
      return require(`@/assets/images/features/${this.selectedImage}`);
      // return `require("@/assets/images/features/${this.selectedImage}.webp")`;
    },
  },
  methods: {
    onMouveover(image) {
      if (this.selectedImage != `${image}.webp`) {
        this.selectedImage = `${image}.webp`;
        this.image = require(`@/assets/images/features/${this.selectedImage}`);
        // this.selectedImage = `${image}.webp`;
        console.log({ image });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.feature-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;

  .feature-list-wrapper {
    .title {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 24px;
      padding-left: 20px;
      text-align: left;
      color: $dark-1;
    }
    .feature-lists {
      display: flex;
      flex-direction: column;
      width: 450px;

      .feature-list {
        position: relative;
        text-align: left;
        display: flex;
        height: 90px;
        padding: 16px 0;
        padding-left: 20px;
        cursor: pointer;
        border-radius: 6px;

        .arrow-wrapper {
          opacity: 0;
          position: absolute;
          right: -20px;
          top: 28px;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background: $btn-color;
          color: $white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &:hover {
          box-shadow: 0 10px 20px rgba(0, 18, 71, 0.15);

          .arrow-wrapper {
            opacity: 1;
          }
        }

        .feature-list__icon {
          margin-right: 6px;
          height: 24px;
          width: 24px;
          margin-top: 3px;
        }

        .feature-list__info {
          display: flex;
          flex-direction: column;

          .feature-list__title {
            color: $dark-1;
            font-size: 22px;
            font-weight: 400;
            margin-bottom: 2px;
            margin-top: 0;
          }

          .feature-list__sub-title {
            color: $dark-1;
            font-size: 15px;
            line-height: 1.4;
          }
        }
      }
    }
  }
  .fearue-list__image-wrapper {
    margin-left: 5rem;
    margin-top: 44px;
    transition: transform 0.2s ease, -webkit-transform 0.2s ease;
    .image {
      width: 440px;
      height: 480px;
    }
  }
}
</style>
