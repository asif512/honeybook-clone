<template>
  <div class="header">
    <div class="logo">
      <h2>honeybook clone</h2>
    </div>
    <div style="display: flex; align-items: center">
      <div class="munu-items">
        <menu-item
          class="hover-class"
          v-for="(menu, index) in menus"
          :key="index"
          :menu="menu"
        />
      </div>
      <b-button class="trail-btn">Start trail free</b-button>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
export default {
  name: "TheHeader",
  components: {
    "menu-item": MenuItem,
  },
  data() {
    return {
      menus: [
        {
          label: "company",
          isSubMenus: true,
          subMenus: [
            {
              label: "about us",
              to: "about-us",
              isSubMenus: false,
            },
            {
              label: "careers",
              to: "careers",
              isSubMenus: false,
            },
            {
              label: "contact us",
              to: "contact-us",
              isSubMenus: false,
            },
          ],
        },
        {
          label: "apps",
          isSubMenus: true,
          subMenus: [
            {
              label: "app display page",
              to: "app-display-page",
              isSubMenus: false,
            },
            {
              label: "request feature",
              to: "request-feature",
              isSubMenus: false,
            },
            {
              label: "roadmap",
              to: "roadmap",
              isSubMenus: false,
            },
            {
              label: "changelog",
              to: "changelog",
              isSubMenus: false,
            },
            {
              label: "reviews",
              to: "reviews",
              isSubMenus: false,
            },
          ],
        },
        {
          label: "pricing",
          to: "pricing",
          isSubMenus: false,
        },
        {
          label: "resources",
          isSubMenus: true,
          subMenus: [
            {
              label: "blog",
              to: "blod",
              isSubMenus: false,
            },
            {
              label: "community",
              to: "community",
              isSubMenus: false,
            },
            {
              label: "help center",
              to: "help-center",
              isSubMenus: false,
            },
            {
              label: "khowledgebase",
              to: "khowledgebase",
              isSubMenus: false,
            },
            {
              label: "referals",
              to: "referals",
              isSubMenus: false,
            },
            {
              label: "developers",
              to: "developers",
              isSubMenus: false,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";
.header {
  font-family: ProximaNova, sans-serif;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 33, 0.16);
  position: fixed;
  top: -1px;
  z-index: 1000;
  height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  .munu-items {
    display: flex;
  }

  .trail-btn {
    background-color: $dark-1;
    border-color: transparent;
    box-shadow: none;
    color: $white;
    font-size: 16px;
    border: 5px;
    height: 36px;
    line-height: 16px;
    padding: 1px 16px 0;
    margin-left: 10px;

    &:hover {
      background-color: $dark-1;
      box-shadow: none;
      color: $light-1;
    }
  }
}
</style>
