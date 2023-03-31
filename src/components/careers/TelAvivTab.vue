<template>
  <div class="tel-aviv-tab">
    <h2 class="title">Open positions in Tel Aviv</h2>
    <available-positions :availablePositions="availablePositions" />
  </div>
</template>

<script>
import AvailablePositions from "@/components/careers/AvailablePositions.vue";
export default {
  name: "TelAvivTab",
  components: {
    "available-positions": AvailablePositions,
  },
  data() {
    return {
      availablePositions: [
        {
          department: "development",
          roles: [
            { name: "devOps engineer" },
            { name: "full stack developer" },
            { name: "front end developer" },
            { name: "back end developer" },
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
.tel-aviv-tab {
  font-family: Aeonik, ProximaNova, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  padding-top: 50px;
}
</style>
