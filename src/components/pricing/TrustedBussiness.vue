<template>
  <div class="trusted-bussiness container">
    <h2 class="title">Trusted by 100,000+ independent businesses</h2>
    <div class="rating">
      <div
        class="rating-wrapper"
        v-for="(rating, index) in ratings"
        :key="index"
      >
        <h2 class="rating-amout">{{ rating.ratingAmout }}</h2>
        <img class="rating-icons" :src="rating.img" />
        <div class="reviews">{{ rating.reviews }} reviews</div>
      </div>
    </div>
    <div class="testimonials">
      <testimonial-card
        v-for="(testimonial, index) in testimonails"
        :key="index"
        :card="testimonial"
      />
    </div>
  </div>
</template>

<script>
import TestimonialCard from "@/components/TestimonialCard.vue";
export default {
  name: "TrustedBussiness",
  components: {
    "testimonial-card": TestimonialCard,
  },
  data() {
    return {
      ratings: [
        {
          ratingAmout: "4.8",
          img: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/starts-4-8.png",
          reviews: "431",
        },
        {
          ratingAmout: "4.4",
          img: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/starts-4-8.png",
          reviews: "456",
        },
      ],
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
          name: "Angie",
          role: "photograper",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-3.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-4.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
        {
          name: "Dianuh A",
          role: "Artist",
          avator:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/testimonials/member-1.png",
          signature:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,dpr_2.0,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/testimonials/member-logo-3.png",
          bio: "HoneyBook makes my client experience look and feel professional and helps my clients be at peace while working with me",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.trusted-bussiness {
  padding-top: 90px;
  padding-bottom: 90px;
  font-family: Aeonik, ProximaNova, sans-serif;

  .title {
    font-size: 48px;
    margin: 0 auto 72px;
    max-width: 580px;
    line-height: 1.18;
    padding-top: 50px;
    font-weight: 600;
  }

  .rating {
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-bottom: 72px;
    .rating-wrapper {
      .rating-amout {
        font-size: 88px;
        font-weight: 600;
      }

      .rating-icons {
        margin-bottom: 20px;
        max-width: 90px;
      }

      .reviews {
        font-size: 16px;
        text-decoration: underline;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }

  .testimonials {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    .testimonial-card {
      width: 364px;
    }
  }

  @include forMedium() {
    padding-top: 70px;
    padding-bottom: 70px;

    .title {
      font-size: 32px;
    }
  }
}
</style>
