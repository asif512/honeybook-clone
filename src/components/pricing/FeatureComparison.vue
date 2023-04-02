<template>
  <div class="feature-comparison container">
    <div class="feature-header">
      <div class="left-info"></div>
      <div class="package" v-for="(pacakage, index) in pacakages" :key="index">
        <h2 class="name">{{ pacakage.name }}</h2>
        <h4 class="price">{{ pacakage.price }}</h4>
        <p class="duration">{{ pacakage.duration }}</p>
        <b-button class="try-btn">Try for free</b-button>
      </div>
    </div>
    <div class="features-container">
      <div class="feature" v-for="(feature, index) in features" :key="index">
        <div class="feature-title-header">
          <div class="name">
            <h2 class="feature-name">{{ feature.name }}</h2>
          </div>
          <div class="border-right"></div>
          <div class="border-right"></div>
          <div class="border-right"></div>
          <div class="border-right"></div>
          <div class="border-right"></div>
        </div>
        <div
          class="feature-servies"
          v-for="(service, i) in feature.services"
          :key="i"
        >
          <div class="info">
            <h4 class="title">{{ service.title }}</h4>
            <p class="sub-title">{{ service.subTitle }}</p>
          </div>
          <div class="icon-wrapper">
            <b-icon :icon="service.isAvailableInAsia ? 'check2' : 'x'" />
          </div>
          <div class="icon-wrapper">
            <b-icon :icon="service.isAvailableInAfrica ? 'check2' : 'x'" />
          </div>
          <div class="icon-wrapper">
            <b-icon :icon="service.isAvailableInEurope ? 'check2' : 'x'" />
          </div>
          <div class="icon-wrapper">
            <b-icon :icon="service.isAvailableInAmerica ? 'check2' : 'x'" />
          </div>
          <div class="icon-wrapper">
            <b-icon :icon="service.isAvailableInCaneda ? 'check2' : 'x'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureComparison",
  props: ["features", "pacakages"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.feature-comparison {
  font-family: ProximaNova, sans-serif;

  .feature-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    .left-info {
      width: 40%;
    }
    .package {
      width: 10%;

      .name {
        font-size: 20px;
        font-weight: 600;
        text-transform: capitalize;
        margin: 18px 0;
      }

      .price {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
      }

      .duration {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
      }

      .try-btn {
        font-size: 10px;
        margin: 10px 0;
        background: $dark-1;
        color: $white;
      }

      @include forLarge() {
        .name {
          font-size: 16px;
          margin: 14px 0;
        }

        .price {
          font-size: 14px;
        }

        .duration {
          font-size: 14px;
        }

        .try-btn {
          display: none;
        }
      }
    }
  }
  .features-container {
    text-align: left;
    .feature {
      .feature-title-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          padding: 12px 16px;
          width: calc(40% + 18px);
          .feature-name {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
          }
        }

        .border-right {
          height: 64px;
          width: 10%;
        }
      }

      .feature-servies {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 16px;

        &:nth-child(odd) {
          background: $light-9;
        }

        .info {
          width: 40%;
          padding: 12px 16px;

          .title {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
          }

          .sub-title {
            font-size: 14px;
            font-weight: 400;
            margin: 0;
          }
        }
        .icon-wrapper {
          padding: 12px 16px;
          width: 10%;
          height: 64px;
          text-align: center;
        }
      }
    }
  }
}
</style>
