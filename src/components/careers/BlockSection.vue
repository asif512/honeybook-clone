<template>
  <div class="block-section container">
    <h2 class="title title-1">At our core</h2>
    <div class="block-core-cards">
      <div class="block-core-card" v-for="(card, index) in cards" :key="index">
        <div class="media-element">
          <img class="caption" :src="card.caption" alt="caption" />
        </div>
        <div class="content">
          <div class="card-emoji">
            <img class="emoji" :src="card.emoji" alt="emoji" />
          </div>
          <h2 class="card-title">{{ card.title }}</h2>
          <h3 class="card-sub-title">{{ card.subTitle }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockSection",
  data() {
    return {
      cards: [
        {
          title: "People come first",
          subTitle: "As we explore opportunities and work through challenges",
          caption:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-top.png",
          emoji:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-icon.png",
        },
        {
          title: "Raise the bar",
          subTitle: "As we explore opportunities and work through challenges",
          caption:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-top.png",
          emoji:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/raise-the-bar-icon.png",
        },
        {
          title: "Own it",
          subTitle: "As we explore opportunities and work through challenges",
          caption:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-top.png",
          emoji:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/own-it-icon.png",
        },
        {
          title: "We love what we do",
          subTitle: "As we explore opportunities and work through challenges",
          caption:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-top.png",
          emoji:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/we-love-what-we-do-icon.png",
        },
        {
          title: "Keep it real",
          subTitle: "As we explore opportunities and work through challenges",
          caption:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/people-come-first-top.png",
          emoji:
            "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_values/keep-it-real-icon.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.block-section {
  font-family: ProximaNova, sans-serif;
  padding-top: 60px;
  padding-bottom: 60px;

  .title {
    margin-bottom: 50px;
  }

  .block-core-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;

    .block-core-card {
      overflow: hidden;
      max-width: 300px;
      border-radius: 6px;

      .media-element {
        .caption {
          height: 200px;
          width: 100%;
        }
      }

      .content {
        align-items: flex-start;
        background: $light-6;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 0;
        padding: 32px;
        text-align: start;
        .card-emoji {
          .emoji {
            height: 64px;
            width: 64px;
          }
        }

        .card-title {
          font-size: 24px;
          line-height: 1.25em;
          margin: 0;
          padding: 0;
          font-weight: 600;
        }

        .card-sub-title {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.25em;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
</style>
