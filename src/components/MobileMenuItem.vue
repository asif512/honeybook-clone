<template>
  <div class="mobile-menu-item">
    <div class="menu-label" v-if="!menu.isSubMenus">
      <span @click="redirctRoute(menu)">{{ menu.label }}</span>
    </div>
    <div v-else class="hero-menu-wrapper">
      <span class="menu-label">{{ menu.label }} </span>
      <b-icon
        class="menu-icon"
        icon="chevron-down"
        @click="handleCollapse(menu)"
      />

      <div class="hero-menu" v-if="menu.isCollape">
        <div
          class="hero-menu__item"
          v-for="(subMenu, i) in menu.subMenus"
          :key="i"
          @click="redirctRoute(subMenu)"
        >
          <b-icon class="hero-menu__item__icon" icon="dash-square" />
          <span class="hero-menu__item__label">{{ subMenu.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenuItem",
  props: ["menu"],
  methods: {
    handleCollapse(menu) {
      this.$emit("collapse-menu", menu);
    },
    redirctRoute(menu) {
      this.$router.push(menu.to);
      this.$emit("collapse-menus");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.mobile-menu-item {
  text-transform: capitalize;
  color: $dark-1;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: 14px 22px;
  // padding: 12px 22px;
  // background: $white;
  // padding-right: 6px;

  .menu-label {
    font-size: 20px;
    font-weight: 600;
    outline: none;
  }

  .hero-menu-wrapper {
    .menu-icon {
      margin-left: 8px;
    }
    .hero-menu {
      display: flex;
      flex-direction: column;
      padding-left: 20px;

      .hero-menu__item {
        padding: 10px 0;
        .hero-menu__item__icon {
          margin-right: 8px;
        }
        .hero-menu__item__label {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
