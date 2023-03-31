<template>
  <div class="stories-section-wrapper">
    <div class="stories-section container">
      <div class="title">our stories</div>
      <div class="stories-lsit">
        <div class="story" v-for="(stroy, index) in stories" :key="index">
          <div class="stories-header">
            <img class="avatar" :src="stroy.avatar" alt="avator" />
            <div class="personal-info">
              <h2 class="name">{{ stroy.name }}</h2>
              <h3 class="role">{{ stroy.role }}</h3>
              <h4 class="address">{{ stroy.address }}</h4>
            </div>
          </div>
          <div class="description" v-html="stroy.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoriesSection",
  data() {
    return {
      stories: [
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being part of the best design team I have ever been on, and being the most present and attentive mom I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being part of the best design team I have ever been on, and being the most present and attentive mom I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being part of the best design team I have ever been on, and being the most present and attentive mom I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being part of the best design team mom I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being part of the best design team I have ever been on, and being the most present and attentive mom I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
        {
          avatar:
            "https://res.cloudinary.com/honeybook/image/upload/c_thumb,dpr_2.0,f_auto,fl_lossy,g_faces,h_80,q_auto,r_max,w_80/v1/marketing_site/careers_page/careers_testimonials/hannah.png",
          name: "hannah",
          role: "design manager",
          address: "tel avv",
          description:
            "Working at HoneyBook for me is the perfect combination of living up to my full potential, making a huge impact and being I can be.<br><br> I feel so lucky to be building a product that truly betters peoples lives, while enjoying amazing workplace culture and flexible working options.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.stories-section-wrapper {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $sliver;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;

  .stories-section {
    .title {
      font-size: 48px;
      margin-bottom: 40px;
      font-weight: 600;
      line-height: 1.18;
      color: $white;
    }

    .stories-lsit {
      align-content: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 20px;
      margin: auto;
      max-height: 900px;

      @include forLarge() {
        max-height: 1150px;
      }

      @include forMedium() {
        max-height: 100%;
      }

      .story {
        background: $white;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin: 0;
        max-width: 300px;
        padding: 20px;
        max-height: 900px;
        box-shadow: 0 12px 40px rgba(0, 18, 71, 0.1);
        z-index: 10;
        position: relative;

        &:nth-child(1) {
          margin-top: 100px;
          &::before {
            background-image: url(https://res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1678721201/marketing_site/careers_page/careers_testimonials/cat.png);
            background-repeat: no-repeat;
            background-size: contain;
            bottom: 100%;
            content: "";
            height: 48px;
            position: absolute;
            width: 110px;
            top: -14.4%;
            left: 50%;
            z-index: 2;
          }
        }
        &:nth-child(5) {
          margin-top: 40px;
        }
        &:nth-child(4) {
          &::before {
            background-image: url(https://res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1678721353/marketing_site/careers_page/careers_testimonials/speech-bubbles.png);
            background-repeat: no-repeat;
            background-size: contain;
            content: "";
            height: 72px;
            position: absolute;
            width: 113px;
            bottom: -16%;
            left: 64%;
          }

          @include forMedium() {
            &::before {
              display: none;
            }
          }
        }

        &:nth-child(6) {
          @include forMedium() {
            &::before {
              background-image: url(https://res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1678721353/marketing_site/careers_page/careers_testimonials/speech-bubbles.png);
              background-repeat: no-repeat;
              background-size: contain;
              content: "";
              height: 72px;
              position: absolute;
              width: 113px;
              bottom: -16%;
              left: 64%;
            }
          }
        }

        .stories-header {
          display: flex;
          align-items: center;
          gap: 12px;

          .avatar {
            height: 80px;
            width: 80px;
            border-radius: 40px;
          }

          .personal-info {
            text-align: left;
            .name {
              font-size: 16px;
              font-weight: 600;
              line-height: 22px;
              margin-bottom: 2px;
              text-transform: capitalize;
            }
            .role {
              font-size: 14px;
              font-weight: 400;
              margin: 0;
              text-transform: capitalize;
            }
            .address {
              color: $gray-1;
              font-size: 12px;
              line-height: 15px;
              font-weight: 400;
              text-transform: uppercase;
            }
          }
        }

        .description {
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          margin: 0;
          padding: 0;
          text-align: start;
          white-space: break-spaces;
        }
      }
    }
  }
}
</style>
