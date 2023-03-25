<template>
  <div class="feature-section container">
    <div class="feature-list-wrapper">
      <h2 class="title">Use HoneyBook for</h2>
      <div class="feature-lists web-view">
        <div
          class="feature-list"
          v-for="(feature, index) in features"
          :key="index"
          :class="{ seleted: feature.image == selectedImage }"
          @mouseover="onMouveover(feature.image)"
          @mouseleave="onMouseleave"
        >
          <div class="arrow-wrapper">
            <b-icon icon="chevron-right" />
          </div>
          <div class="feature-list__icon">
            <b-icon scale="1.4" :icon="feature.icon" />
          </div>
          <div class="feature-list__info">
            <h3 class="feature-list__title">{{ feature.title }}</h3>
            <p class="feature-list__sub-title">{{ feature.subTitle }}</p>
          </div>
        </div>
      </div>
      <!-- mobile view -->
      <div class="feature-lists mobile-view">
        <div
          class="feature-list"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div class="collapse-header">
            <div class="feature-list--left">
              <div class="feature-list__icon">
                <b-icon scale="1.4" :icon="feature.icon" />
              </div>
              <div class="feature-list__info">
                <h3 class="feature-list__title">{{ feature.title }}</h3>
                <p class="feature-list__sub-title">{{ feature.subTitle }}</p>
              </div>
            </div>

            <div class="collapse-icon" @click="handleCollapse(feature)">
              <b-icon
                :icon="feature.isCollape ? 'chevron-up' : 'chevron-down'"
              />
            </div>
          </div>
          <div class="collpage-content" v-if="feature.isCollape">
            <img class="image" :src="getFeatureImage(feature.image)" alt="" />
            <b-button class="feature-btn">
              <span>learn about {{ feature.image }}</span>
              <b-icon class="icon" icon="chevron-right" />
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="fearue-list__image-wrapper web-view">
      <img class="image" :src="getImage" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
  data() {
    return {
      timeInterval: null,
      selectedImage: "payment",
      features: [
        {
          id: 1,
          title: "professional invoices",
          subTitle: "Easily create & send invoices. Get paid on time.",
          icon: "check-square",
          image: "invoice",
          isCollape: false,
        },
        {
          id: 2,
          title: "secure payments",
          subTitle: "Simple. Fast. Direct. Digital.",
          icon: "pencil-square",
          image: "payment",
          isCollape: false,
        },
        {
          id: 3,
          title: "ironclad contracts",
          subTitle: "Easy-to-use. Ready to sign. And all online.",
          icon: "play-circle-fill",
          image: "contract",
          isCollape: false,
        },
        {
          id: 4,
          title: "fast scheduling",
          subTitle: "Share availability. Confirm meetings. Get booked.",
          icon: "calendar-check",
          image: "scheduling",
          isCollape: false,
        },
        {
          id: 5,
          title: "powerful automations",
          subTitle: "Trigger actions—replies, follow-ups, tasks.",
          icon: "calendar2-day",
          image: "automation",
          isCollape: false,
        },
      ],
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    getImage() {
      return require(`@/assets/images/features/${this.selectedImage}.webp`);
    },
  },
  methods: {
    init() {
      this.timeInterval = setInterval(() => {
        this.onSeletedFeature();
      }, 2500);
    },
    onSeletedFeature() {
      let index = this.features.findIndex(
        (feature) => feature.image == this.selectedImage
      );
      if (index === this.features.length - 1) {
        index = 0;
      } else {
        index = index + 1;
      }
      this.selectedImage = this.features[index].image;
    },
    onMouveover(image) {
      if (this.selectedImage != image) {
        this.selectedImage = image;
        clearInterval(this.timeInterval);
      }
    },
    onMouseleave() {
      this.init();
    },

    getFeatureImage(image) {
      return require(`@/assets/images/features/${image}.webp`);
    },
    handleCollapse(feature) {
      this.features.forEach((feaItem) => {
        if (feaItem.id == feature.id) {
          feaItem.isCollape = !feature.isCollape;
        }
      });
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

  @include forLarge() {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .feature-list-wrapper {
    .title {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 24px;
      padding-left: 20px;
      text-align: left;
      color: $dark-1;

      @include forLarge() {
        font-size: 32px;
        text-align: center;
      }
    }
    .feature-lists {
      display: flex;
      flex-direction: column;
      width: 450px;

      @include forDesktop() {
        width: 430px;
      }

      .feature-list {
        position: relative;
        text-align: left;
        display: flex;
        height: 90px;
        padding: 16px 0;
        padding-left: 20px;
        cursor: pointer;
        border-radius: 6px;
        transition: opacity 0.5s ease;

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

        &.seleted {
          box-shadow: 0 10px 20px rgba(0, 18, 71, 0.15);

          .arrow-wrapper {
            opacity: 1;
          }
        }

        .feature-list__icon {
          margin-right: 10px;
          height: 24px;
          width: 24px;
          margin-top: 5px;

          @include forDesktop() {
            width: 20px;
            height: 20px;
          }
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
            text-transform: capitalize;

            @include forDesktop() {
              font-size: 18px;
            }
          }

          .feature-list__sub-title {
            color: $dark-1;
            font-size: 15px;
            line-height: 1.4;

            @include forDesktop() {
              font-size: 13px;
            }
          }
        }
      }
    }

    .mobile-view {
      display: none;
    }

    @include forLarge() {
      width: 100%;
      .web-view {
        display: none;
      }
      .mobile-view {
        &.feature-lists {
          display: flex;
          flex-direction: column;
          width: 100%;

          .feature-list {
            display: flex;
            flex-direction: column;
            height: max-content;
            padding: 0 3rem;

            .collapse-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              cursor: pointer;

              .feature-list--left {
                display: flex;
                margin-top: 16px;
              }
            }

            .collpage-content {
              display: flex;
              flex-direction: column;
              margin: 2rem auto;

              .image {
                width: 226px;
                height: 250px;
              }

              .feature-btn {
                background-color: #6024e1;
                line-height: 2.5;
                color: $white;
                font-size: 16px;
                height: 42px;
                font-weight: 600;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                  width: 14px;
                  height: 14px;
                  margin-left: 4px;
                }
              }
            }

            &:nth-child(even) {
              background: $light-2;
            }
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

      @include forDesktop() {
        width: 420px;
        height: 460px;
      }
    }
    @include forLarge() {
      &.web-view {
        display: none;
      }
    }
  }
}
</style>
