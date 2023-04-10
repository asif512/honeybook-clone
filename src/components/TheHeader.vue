<template>
  <div class="header">
    <router-link class="logo" to="/">honeybook clone </router-link>
    <div class="desktop" style="display: flex; align-items: center">
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
    <div class="mobile">
      <div class="icon-wrapper" @click="handleCollapse">
        <b-icon
          class="menu-icon"
          :icon="isCollapse ? 'x' : ' blockquote-left'"
        />
      </div>
      <div class="menu-items" v-if="isCollapse">
        <mobile-menu-item
          v-for="(menu, index) in menus"
          :key="index"
          :menu="menu"
          @collapse-menu="handleCollpaseMenu"
          @collapse-menus="handleCollapse"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
import MobileMenuItem from "@/components/MobileMenuItem.vue";
export default {
  name: "TheHeader",
  components: {
    "menu-item": MenuItem,
    "mobile-menu-item": MobileMenuItem,
  },
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          id: 1,
          isCollape: true,
          label: "company",
          isSubMenus: true,
          width: 400,
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
          id: 2,
          isCollape: false,
          label: "apps",
          isSubMenus: true,
          width: 520,
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
          id: 3,
          isCollape: false,
          label: "pricing",
          to: "pricing",
          isSubMenus: false,
        },
        {
          id: 4,
          isCollape: false,
          label: "resources",
          isSubMenus: true,
          width: 400,
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
              label: "knowledgebase",
              to: "knowledgebase",
              isSubMenus: false,
            },
            {
              label: "referrals",
              to: "referrals",
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
  methods: {
    handleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleCollpaseMenu(menu) {
      this.menus.forEach((item) => {
        if (item.id == menu.id) {
          item.isCollape = !item.isCollape;
        }
      });
    },
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
  background: $white;
  z-index: 10;

  @include forLarge() {
    position: inherit;
  }

  .logo {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.001rem;
    color: $dark-1;
  }

  .desktop {
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

    @include forLarge() {
      display: none !important;
    }
  }

  .mobile {
    display: none;
    text-align: left;
    transition: opacity 1s ease-out;
    opacity: 0;

    @include forLarge() {
      display: block;
      opacity: 1;
      .icon-wrapper {
        accent-color: $light-7;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        .menu-icon {
          cursor: pointer;
          width: 20px;
          height: 20px;
        }

        &:hover {
          background: $light-7;
        }
      }

      .menu-items {
        position: absolute;
        background: $light-9;
        inset: 80px 0 0 0;
        z-index: 10;
        padding: 24px;
      }
    }
  }
}
</style>
