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
    <smarter-system-section />
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
import SmarterSystemSection from "@/components/SmarterSystemSection.vue";
import MobileReviewSection from "@/components/MobileReviewSection.vue";
import TestimonialSection from "@/components/TestimonailSection.vue";
import TruestedCompanies from "@/components/TruestedCompanies.vue";
import DiscoverSection from "@/components/DiscoverSection.vue";
import PromotionSection from "@/components/PromotionSection.vue";
export default {
  name: "HomeView",
  components: {
    "feature-block": FeatureBlock,
    "status-container": StatusContainer,
    "feature-section": FeatureSection,
    // "the-testimonial": TheTestimonial,
    "experience-section": ExperienceSection,
    "showcase-section": ShowcaseSection,
    "promo-section": PromoSection,
    "integration-app": IntegrationApp,
    "smarter-system-section": SmarterSystemSection,
    "mobile-review-section": MobileReviewSection,
    "testimonial-section": TestimonialSection,
    "truested-companies": TruestedCompanies,
    "discover-section": DiscoverSection,
    "promotion-section": PromotionSection,
  },
};
</script>
