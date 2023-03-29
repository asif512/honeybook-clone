<template>
  <div class="about">
    <hero-section />
    <mission-section />
    <about-details />
    <investors-section />
    <recent-press />
  </div>
</template>

<script>
import HeroSection from "@/components/about/HeroSection.vue";
import MissionSection from "@/components/about/MissionSection.vue";
import AboutDetails from "@/components/about/AboutDetails.vue";
import InvestorsSection from "@/components/about/InvestorsSection.vue";
import RecentPress from "@/components/about/RecentPress.vue";
export default {
  name: "AboutView",
  components: {
    "hero-section": HeroSection,
    "mission-section": MissionSection,
    "about-details": AboutDetails,
    "investors-section": InvestorsSection,
    "recent-press": RecentPress,
  },
};
</script>
