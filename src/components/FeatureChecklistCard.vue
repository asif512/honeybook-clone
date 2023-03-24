<template>
  <div
    class="feature-checklist__card"
    :class="{ selected: selected }"
    :style="getCardStyles"
    @click="onSelect"
  >
    <input type="checkbox" class="checklist-checkbox" v-model="selected" />
    <div class="checklist-icon" :style="getIconStyles">
      <b-icon class="icon" :icon="feature.icon" />
    </div>
    <p class="checklist-name">{{ feature.label }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureChecklistCard",
  props: ["feature"],
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    getIconStyles() {
      return {
        backgroundColor: this.feature.color,
      };
    },
    getCardStyles() {
      return {
        "--color": this.feature.color,
      };
    },
  },
  methods: {
    onSelect() {
      this.selected = !this.selected;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.feature-checklist__card {
  height: 146px;
  max-height: max-content;
  align-items: center;
  background: $white;
  border: 1px solid $white;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 120px;
  padding: 21px 6px 6px;
  position: relative;
  text-align: center;
  width: 120px;

  &:hover {
    border: 1px solid var(--color);
  }

  &.selected {
    background: rgba(101, 150, 117, 0.08);
    border: 2px solid var(--color);
  }

  .checklist-checkbox {
    position: absolute;
    left: 7px;
    top: 5px;
    width: 16px;
    height: 16px;
    width: 20px;
    height: 20px;
    display: grid;
    place-content: center;

    &:checked {
      width: 20px;
      height: 20px;
    }
  }

  .checklist-checkbox[type="checkbox"]::before {
    content: "";
  }

  .checklist-icon {
    height: 54px;
    width: 54px;
    margin-bottom: 12px;
    color: $white;
    border-radius: 27px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
    }
  }
  .checklist-name {
    font-size: 16px;
    font-weight: 600;
    color: $dark-1;
    max-width: 96%;
    line-height: 1;
    opacity: 0.8;
  }
}
</style>
