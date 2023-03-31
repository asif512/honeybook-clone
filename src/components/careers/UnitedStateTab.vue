<template>
  <div class="united-state-tab">
    <h2 class="title">Open positions in United States</h2>
    <available-positions :availablePositions="availablePositions" />
  </div>
</template>

<script>
import availablePositions from "@/components/careers/AvailablePositions.vue";
export default {
  name: "UnitedStateTab",
  components: {
    "available-positions": availablePositions,
  },
  data() {
    return {
      availablePositions: [
        {
          department: "development",
          roles: [
            { name: "devOps engineer" },
            { name: "full stack developer" },
          ],
        },
        {
          department: "operations",
          roles: [{ name: "bookkeeper" }],
        },
        {
          department: "products",
          roles: [{ name: "senior data analyst" }],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.united-state-tab {
  font-family: Aeonik, ProximaNova, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  padding-top: 50px;
}
</style>
