<template>
  <div class="testimonial-card">
    <div class="card-header">
      <img :src="card.avator" class="avator" />
      <img :src="card.signature" class="signature" />
    </div>
    <div class="card-content">
      <p class="bio">{{ card.bio }}</p>
    </div>
    <div class="card-footer">
      <h2 class="name">{{ card.name }}</h2>
      <h3 class="role">{{ card.role }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: ["card"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.testimonial-card {
  background: $light-3;
  border-radius: 6px;
  box-shadow: none;
  color: $dark-1;
  text-align: left;
  padding: 32px;

  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    .avator {
      width: 80px;
      height: 80px;
      border-radius: 40px;

      @include forDesktop() {
        width: 65px;
        height: 65px;
      }
    }

    .signature {
      max-width: 150px;
      max-height: 50px;

      @include forDesktop() {
        max-width: 130px;
        max-height: 35px;
      }
    }
  }
  .card-content {
    .bio {
      font-size: 18px;
      margin-bottom: 16px;
      font-weight: 400;

      @include forDesktop() {
        font-size: 16px;
      }
    }
  }

  .card-footer {
    .name {
      font-size: 16px;
      font-weight: 700;
    }

    .role {
      color: #767b84;
      font-size: 16px;
    }
  }
}
</style>
