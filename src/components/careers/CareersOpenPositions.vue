<template>
  <div class="careers-open-position">
    <div class="open-positions container">
      <div class="positions">
        <div class="switcher-position">
          <div
            class="position tel-aviv"
            v-for="(position, index) in positions"
            :key="index"
            @click="seletedPosition(position)"
            :class="{ active: position.label == activePosition }"
          >
            {{ position.label }}
          </div>
        </div>
      </div>
      <div class="availables-positions">
        <component :is="renderComponent" />
      </div>
      <perks-list />
    </div>
  </div>
</template>

<script>
import TelAvivTab from "@/components/careers/TelAvivTab.vue";
import UnitedStateTab from "@/components/careers/UnitedStateTab.vue";
import PerksList from "@/components/careers/PerksList.vue";
export default {
  name: "CareersOpenPositions",
  components: {
    "tel-aviv-tab": TelAvivTab,
    "united-state-tab": UnitedStateTab,
    "perks-list": PerksList,
  },
  data() {
    return {
      activePosition: "tel aviv",
      activeCoponent: "tel-aviv",
      positions: [
        {
          label: "tel aviv",
          component: "tel-aviv",
        },
        {
          label: "united state",
          component: "united-state",
        },
      ],
    };
  },
  computed: {
    renderComponent() {
      return `${this.activeCoponent}-tab`;
    },
  },
  methods: {
    seletedPosition(position) {
      this.activePosition = position.label;
      this.activeCoponent = position.component;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.careers-open-position {
  background: $dark-1;
  color: $white;

  .open-positions {
    padding-top: 100px;
    padding-bottom: 100px;

    .positions {
      .switcher-position {
        align-items: center;
        border: 1px solid $light-7;
        border-radius: 70px;
        display: inline-flex;
        justify-self: center;
        padding: 5px;
        margin-bottom: 32px;

        .position {
          padding: 10px 30px;
          font-size: 20px;
          line-height: 22px;
          color: $light-4;
          cursor: pointer;
          transition: left 0.2s ease, width 0.2s ease;
          text-transform: capitalize;

          &.active {
            color: $dark-1;
            background: $white;
            border-radius: 70px;
          }
        }
      }
    }
  }
}
</style>
