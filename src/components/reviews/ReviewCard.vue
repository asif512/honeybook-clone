<template>
  <div class="review-card">
    <div class="date">{{ review.date }}</div>
    <div class="logo-and-rating">
      <img :src="review.logo" class="review-logo" alt="logo" />
      <img :src="review.review" class="rating-logo" alt="logo" />
    </div>
    <div class="description">{{ review.description }}</div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    review: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.review-card {
  padding: 16px;
  // width: 248px;
  width: 100%;
  border: 1px solid #e5e5dd;
  border-radius: 8px;
  .date {
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.4;
    color: #696a6a;
  }
  .logo-and-rating {
    display: flex;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 8px;

    .review-logo {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      overflow: hidden;
      margin-right: 12px;
    }
    .rating-logo {
      width: 88px;
      height: 16px;
    }
  }
  .description {
    display: -webkit-box;
    word-break: break-all;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 4.75rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.15px;
  }
}
</style>
