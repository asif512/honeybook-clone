<template>
  <div class="pricing-card" :class="{ 'papular-package': card.isPapular }">
    <label v-if="card.isPapular" class="label">most popular</label>
    <h2 class="title">{{ card.name }}</h2>
    <h4 class="sub-title">{{ card.label }}</h4>
    <div class="price">{{ card.price }}</div>
    <div class="duration">{{ card.duration }}</div>
    <div class="extra">{{ card.extra }}</div>
    <div class="benefits">
      <div
        class="benefit"
        v-for="(benefit, index) in card.benefits"
        :key="index"
      >
        <b-icon width="18" height="18" icon="check2" />
        <label>{{ benefit }}</label>
      </div>
    </div>
    <b-button class="trial-btn" :class="{ normal: !card.isPapular }"
      >Start free trial</b-button
    >
  </div>
</template>

<script>
export default {
  name: "PricingCard",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.pricing-card {
  font-family: Aeonik, ProximaNova, sans-serif;
  border: 1px solid $light-7;
  border-radius: 6px;
  box-shadow: none;
  padding: 56px 20px 40px;
  position: relative;
  text-align: center;
  width: 100%;
  background: $white;

  &.papular-package {
    border: 2px solid #6024e1;
    box-shadow: 0 10px 30px rgba(19, 20, 22, 0.1);
  }

  .label {
    background: rgba(96, 36, 225, 0.08);
    color: $btn-color;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    padding: 12px;
    position: absolute;
    text-transform: uppercase;
    top: 0;
    left: 0;
    right: 0;
  }

  .title {
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .sub-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0 auto 22px auto;
    max-width: 200px;
  }

  .price {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .duration {
    font-size: 14px;
    margin-bottom: 24px;
    font-weight: 400;
  }

  .extra {
    color: $gray-1;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .benefits {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;

    margin: 0 auto 24px;
    max-width: 280px;

    .benefit {
      color: $gray-2;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 0.75em;
      display: flex;
      align-items: center;

      label {
        margin-left: 10px;
      }
    }
  }

  .trial-btn {
    margin-top: 25px;

    &.normal {
      background-color: transparent;
      border: 1px solid;
      box-shadow: none;
      color: $dark-1;
    }
  }
}
</style>
