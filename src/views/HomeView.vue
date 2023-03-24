<template>
  <div class="home-page">
    <feature-block />
    <status-container />
    <feature-section />
  </div>
</template>

<script>
import FeatureBlock from "@/components/FeatureBlock.vue";
import StatusContainer from "@/components/StatusContainer.vue";
import FeatureSection from "@/components/FeatureSection.vue";

export default {
  name: "HomeView",
  components: {
    "feature-block": FeatureBlock,
    "status-container": StatusContainer,
    "feature-section": FeatureSection,
  },
};
</script>
