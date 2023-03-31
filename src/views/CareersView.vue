<template>
  <div class="careers">
    <hero-section />
    <base-smart-system class="smart-system" :info="systemInfo">
      <template>
        <h2 class="title title-1">What we do</h2>
        <h3 class="sub-title title-2">
          <p>
            HoneyBook is a clientflow management platform that lets independent
            businesses manage their work and cash flows, and client experience
            all in one place.
          </p>
          <p>
            We give anyone with a skill, and the passion to pursue it, what they
            need to succeed. We stand behind them every step of the way, boldly
            championing their success.
          </p>
        </h3>
      </template>
    </base-smart-system>
    <block-section />
    <careers-open-positions />
    <stories-section />
    <social-block />
  </div>
</template>

<script>
import HeroSection from "@/components/careers/HeroSection.vue";
import BlockSection from "@/components/careers/BlockSection.vue";
import BaseSmartSystem from "@/components/Base/BaseSmartSystem.vue";
import CareersOpenPositions from "@/components/careers/CareersOpenPositions.vue";
import StoriesSection from "@/components/careers/StoriesSection.vue";
import SocialBlock from "@/components/careers/SocialBlock.vue";
export default {
  name: "CareersView",
  components: {
    "hero-section": HeroSection,
    "base-smart-system": BaseSmartSystem,
    "block-section": BlockSection,
    "careers-open-positions": CareersOpenPositions,
    "stories-section": StoriesSection,
    "social-block": SocialBlock,
  },
  data() {
    return {
      systemInfo: {
        title: "What we do",
        backgroundColor: "#ffd952",
        largeImage:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/what-we-do-desktop.png",
        smallImage:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/what-we-do-mobile.png",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.careers {
  .smart-system {
    .title {
      margin-bottom: 0.75em !important;
    }
    .sub-title {
      font-size: 18px !important;
      margin: 0 auto 26px !important;
    }
  }
}
</style>
