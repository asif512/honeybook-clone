<template>
  <div class="perks-list">
    <div class="perk-list" v-for="(perk, index) in perksList" :key="index">
      <div class="element-media">
        <img class="logo" :src="perk.url" alt="log" />
      </div>
      <h2 class="title">{{ perk.title }}</h2>
      <h3 class="sub-title">{{ perk.subTitle }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerksList",
  data() {
    return {
      perksList: [
        {
          title: "Hybrid workspaces",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/house-buildings-x2.png",
        },
        {
          title: "Equity incentives",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/money-x2.png",
        },
        {
          title: "Skill building",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/bulb-shapes-x2.png",
        },
        {
          title: "Wellness wellet",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/wallet-flower-x2.png",
        },
        {
          title: "Mind and body",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/lotus-flower-x2.png",
        },
        {
          title: "Parent friendly",
          subTitle: "Work where you work best or switch ‘em up.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/careers_benefits/purple-heart-x2.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.perks-list {
  font-family: Aeonik, ProximaNova, sans-serif;
  margin-top: 140px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px 40px;

  .perk-list {
    text-align: left;
    .element-media {
      margin-bottom: 15px;
      .logo {
        height: 120px;
        width: 160px;
      }
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      margin: 0 0 8px;
      line-height: 1.18;
    }

    .sub-title {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin: 0;
    }
  }
}
</style>
