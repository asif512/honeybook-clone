<template>
  <div class="base-smarter-system" :style="getStyles">
    <div class="bg-image-wrapper container">
      <div class="bg-image">
        <div class="content">
          <slot>
            <h2 class="title title-1">{{ info.title }}</h2>
            <h3 class="sub-title title-2">
              {{ info.subTitle }}
            </h3>
            <b-button v-if="info.buttonLabel" class="trial-btn">
              {{ info.buttonLabel }}
            </b-button>
            <div v-if="info.requireLabel" class="requie-label">
              {{ info.requireLable }}
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSmartSystem",
  props: {
    info: {
      type: Object,
    },
  },
  computed: {
    getStyles() {
      return {
        "--largeImage": `url(${this.info.largeImage})`,
        "--smallImage": `url(${this.info.smallImage})`,
        "--backgroundColor": this.info.backgroundColor,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.base-smarter-system {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: var(--backgroundColor);
  padding-top: 96px;
  padding-bottom: 96px;
  color: $dark-1;

  @include forMedium() {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .bg-image-wrapper {
    .bg-image {
      background: var(--largeImage) no-repeat;
      background-position: bottom;
      background-size: auto 575px;
      height: 575px;
      margin: 0 auto;
      widows: 100%;
      position: relative;
      max-width: 968px;

      .content {
        position: absolute;
        top: 0;
        left: 3px;
        text-align: left;
        max-width: 475px;
        margin: 0 auto 32px;

        .title {
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .sub-title {
          font-size: 20px;
          font-weight: 400;
          margin: 0 auto 26px;
        }

        .requie-label {
          font-size: 14px;
          font-weight: 400;
          margin-top: 12px;
        }

        @include forLarge() {
          left: 0;
          right: 0;
          text-align: center;
          margin: 0 auto 32px;
          max-width: 380px;

          .title {
            font-size: 32px;
            line-height: 38px;
          }
        }
      }

      @include forLarge() {
        background: var(--smallImage) no-repeat;
        background-position: bottom;
        background-size: auto 278px;
        height: 580px;
      }
    }
  }
}
</style>
