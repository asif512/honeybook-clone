<template>
  <div class="testimonail-section container">
    <div class="left-section">
      <h2 class="title">Loved by independent professionals everywhere</h2>
      <h3 class="sub-title">
        <strong>93% of members</strong>
        would recommend HoneyBook to a friend
      </h3>
    </div>
    <div class="right-section">
      <div class="testimonials">
        <testimonail-card
          class="card-wrapper"
          v-for="(card, index) in testimonails"
          :key="index"
          :card="card"
        ></testimonail-card>
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";
export default {
  name: "TestimonailSection",
  components: {
    "testimonail-card": TestimonialCard,
  },
  data() {
    return {
      testimonails: [
        {
          name: "danielle j.",
          role: "bussiness consultant",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-5.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-1.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
        {
          name: "mark d.",
          role: "photograper",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-2.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
        {
          name: "mark d.",
          role: "photograper",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-2.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
        {
          name: "mark d.",
          role: "photograper",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-2.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-2.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.testimonail-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 100px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;

  @include forXl() {
    flex-direction: column;
  }

  .left-section {
    max-width: 300px;
    text-align: left;

    @include forXl() {
      text-align: center;
      max-width: 500px;
      margin-bottom: 5rem;
    }

    .title {
      font-size: 40px;
      line-height: 50px;
      font-weight: 600;

      @include forSmall() {
        font-size: 26px;
      }
    }

    .sub-title {
      margin-top: 120px;
      font-size: 20px;
      font-weight: 400;
      max-width: 220px;
      position: relative;

      @include forSmall() {
        font-size: 16px;
      }

      @include forXl() {
        max-width: 100%;
      }

      &::before {
        position: absolute;
        content: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto,w_60/v1676425945/marketing_site/recomended-check.png);
        top: -76px;

        @include forXl() {
          left: 0;
          right: 0;
        }
      }
    }
  }

  .right-section {
    .testimonials {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 36px;

      @include forXl() {
        justify-content: center;
      }

      @include forDesktop() {
        gap: 24px;
      }

      .card-wrapper {
        width: 364px;

        @include forDesktop() {
          width: 314px;
        }
      }
    }
  }
}
</style>
