<template>
  <div class="mobile-review-section">
    <div class="review-wrapper container">
      <div class="review-content">
        <h2 class="title">Grow on the go</h2>
        <h3 class="sub-title">
          Run your business from anywhere with the HoneyBook app.
        </h3>
        <div class="rating">
          <b-icon
            class="rating-icon"
            v-for="i in 5"
            :key="i"
            icon="star-fill"
            variant="warning"
          />
          <span class="rating-label">4.7,5.6K Ratings</span>
        </div>
        <div class="available">
          <b-icon class="icon" icon="cup" />
          <b-icon class="icon" icon="heptagon" />
          <span class="label">Available on iOS and Android</span>
        </div>
        <div class="review-quotes">
          <div class="quotes quotes--one">This app is life changing!</div>
          <div class="quotes quotes--two">
            Streamlined my sales and service process.
          </div>
          <div class="quotes quotes--three">
            Simple, intuitive and client friendly!
          </div>
        </div>
      </div>
      <div class="media-content">
        <img
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/mobile_reviews/phones-light.png"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileReviewSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.mobile-review-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 96px;
  padding-bottom: 96px;
  color: $dark-1;

  @include forMedium() {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .review-wrapper {
    display: flex;
    flex-direction: row-reverse;
    background: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1676497436/marketing_site/mobile_reviews/phones-arrow.svg)
      no-repeat;
    background-position: 95% 86%;
    background-size: auto;

    @include forLarge() {
      background-position: 95% 66%;
    }

    .media-content {
      width: 50%;

      @include forLarge() {
        width: 440px;
        height: 520px;
        margin: 0 auto;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .review-content {
      padding-left: 80px;
      width: 50%;
      text-align: left;

      .title {
        font-size: 40px;
        line-height: 48px;
        margin-top: 50px;
        font-weight: 600;
        margin-bottom: 24px;

        @include forLarge() {
          font-size: 32px;
        }
      }

      .sub-title {
        margin: 0 0 25px;
        font-size: 20px;
        font-weight: 400;
      }

      .rating {
        margin-bottom: 37px;
        display: flex;
        align-items: center;

        .rating-icon {
          margin-right: 2px;
          width: 12px;
          height: 12px;
        }

        .rating-label {
          font-size: 20px;
          font-weight: 400;
          margin-left: 6px;
        }
      }

      .available {
        display: flex;
        align-items: center;

        .icon {
          margin-right: 5px;
        }
        .label {
          font-size: 14px;
          font-weight: 300;
        }
      }

      .review-quotes {
        margin: 58px 0 38px;
        .quotes {
          font-size: 18px;
          font-weight: 400;
          background: $white;
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 18, 71, 0.15);
          padding: 12px 16px;
          width: max-content;
          left: 10px;
          margin-bottom: 50px;

          &.quotes--one {
            will-change: transform;
            transform: translateX(24.37382%);
          }

          &.quotes--two {
            will-change: transform;
            transform: translateX(-10.62618%);
            margin-bottom: 42px;
          }
          &.quotes--three {
            will-change: transform;
            transform: translateX(29.85392%);
          }
        }
      }

      @include forLarge() {
        width: 100%;
      }
    }

    @include forLarge() {
      flex-direction: column-reverse;
    }
  }
}
</style>
