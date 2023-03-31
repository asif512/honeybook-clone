<template>
  <div class="home-page">
    <feature-block />
    <status-container />
    <feature-section />
    <!-- <the-testimonial /> -->
    <experience-section />
    <showcase-section />
    <promo-section />
    <integration-app />
    <base-smarter-system :info="systemInfo" />
    <mobile-review-section />
    <testimonial-section />
    <truested-companies />
    <discover-section />
    <promotion-section />
  </div>
</template>

<script>
import FeatureBlock from "@/components/FeatureBlock.vue";
import StatusContainer from "@/components/StatusContainer.vue";
import FeatureSection from "@/components/FeatureSection.vue";
// import TheTestimonial from "@/components/TheTestimonial.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ShowcaseSection from "@/components/ShowcaseSection.vue";
import PromoSection from "@/components/PromoSection.vue";
import IntegrationApp from "@/components/IntegrationApp.vue";
import BaseSmartSystem from "@/components/Base/BaseSmartSystem.vue";
import MobileReviewSection from "@/components/MobileReviewSection.vue";
import TestimonialSection from "@/components/TestimonailSection.vue";
import TruestedCompanies from "@/components/TruestedCompanies.vue";
import DiscoverSection from "@/components/DiscoverSection.vue";
import PromotionSection from "@/components/PromotionSection.vue";
export default {
  name: "HomeView",
  data() {
    return {
      systemInfo: {
        title: "A smarter system that puts you in control",
        subTitle:
          "With your workflow and cashflow all in one place, you can focus on getting the most out of work and life.",
        buttonLabel: "Start free trial",
        requireLabel: "No credit card required",
        backgroundColor: "#faf5f0",
        largeImage:
          "//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1677950938/marketing_site/home_page/Desktop_Better_System_2x.png",
        smallImage:
          "//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1677950937/marketing_site/home_page/Mobile_Better_System_2x.png",
      },
    };
  },
  components: {
    "feature-block": FeatureBlock,
    "status-container": StatusContainer,
    "feature-section": FeatureSection,
    // "the-testimonial": TheTestimonial,
    "experience-section": ExperienceSection,
    "showcase-section": ShowcaseSection,
    "promo-section": PromoSection,
    "integration-app": IntegrationApp,
    "base-smarter-system": BaseSmartSystem,
    "mobile-review-section": MobileReviewSection,
    "testimonial-section": TestimonialSection,
    "truested-companies": TruestedCompanies,
    "discover-section": DiscoverSection,
    "promotion-section": PromotionSection,
  },
};
</script>
