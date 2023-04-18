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
      <b-dropdown
        id="dropdown-right"
        right
        text="Apps"
        variant="outline-primary"
        class="m-2"
      >
        <div class="feature-wrapper">
          <div
            v-for="(feature, index) in features"
            class="feature"
            :key="index"
          >
            <img class="feature-logo" :src="feature.logo" alt="logo" />
            <span class="feature-label">{{ feature.label }}</span>
          </div>
        </div>
      </b-dropdown>
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
          width: 520,
          subMenus: [
            {
              label: "about us",
              to: "about-us",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "careers",
              to: "careers",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "contact us",
              to: "contact-us",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
          ],
        },
        {
          id: 2,
          isCollape: false,
          label: "features",
          isSubMenus: true,
          width: 520,
          subMenus: [
            {
              label: "app display page",
              slogen: "Everything you need to run your business in one place.",
              to: "app-display-page",
              isSubMenus: false,
            },
            {
              label: "roadmap",
              to: "roadmap",
              slogen: "Powerful features built for small businesses.",
              isSubMenus: false,
            },
            {
              label: "changelog",
              to: "changelog",
              slogen: "Powerful features built for small businesses.",
              isSubMenus: false,
            },
            {
              label: "reviews",
              to: "reviews",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "features",
              to: "features",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
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
          width: 520,
          subMenus: [
            {
              label: "blog",
              to: "blog",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "community",
              to: "community",
              isSubMenus: false,
              slogen: "Find experts to help grow your business.",
            },
            {
              label: "help center",
              to: "help-center",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "knowledgebase",
              to: "knowledgebase",
              isSubMenus: false,
              slogen: "Find experts to help grow your business.",
            },
            {
              label: "referrals",
              to: "referrals",
              isSubMenus: false,
              slogen: "Everything you need to run your business in one place.",
            },
            {
              label: "developers",
              to: "developers",
              isSubMenus: false,
              slogen: "Find experts to help grow your business.",
            },
          ],
        },
      ],
      features: [
        {
          label: "account",
          logo: "https://media.istockphoto.com/id/1092806334/photo/smiling-businesswoman-at-work.jpg?s=612x612&w=0&k=20&c=hHGzCTROxU1iNU9ehlt4dsdvvCnu0KF9ayGBz1zXNds=",
        },
        {
          label: "github",
          logo: "https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png",
        },
        {
          label: "gmail",
          logo: "https://e7.pngegg.com/pngimages/158/639/png-clipart-spotify-streaming-media-logo-playlist-spotify-app-icon-logo-music-download.png",
        },
        {
          label: "account",
          logo: "https://www.citypng.com/public/uploads/preview/mail-email-address-round-outline-red-icon-transparent-png-11637079483awtlikdw1f.png",
        },
        {
          label: "discord",
          logo: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png",
        },
        {
          label: "xbox",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png",
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

    #dropdown-right {
      #dropdown-right__BV_toggle_ {
        // border: 1px solid $light-7;
        border: none;
        padding: 8px 23px;
        border-radius: 30px;
        color: $dark-1;
        font-weight: 600;

        &:focus-visible {
          box-shadow: none;
          background: transparent;
        }
        &:active {
          background: transparent;
        }

        &:hover {
          background: transparent;
          color: $dark-1;
        }
      }
      .dropdown-menu {
        top: 18px !important;
        width: 240px;
        box-shadow: 0px 7px 17px 1px #ccc;
        border: 1px solid $white;
        border-radius: 8px;

        .feature-wrapper {
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px 22px;
          align-items: center;
          justify-content: center;
          .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            .feature-label {
              font-size: 16px;
              font-weight: 400;
              text-transform: capitalize;
            }
            .feature-logo {
              width: 40px;
              height: 40px;
              border-radius: 25px;
              overflow: hidden;
            }
          }
        }
        &::before {
          content: "";
          width: 16px;
          height: 16px;
          position: absolute;
          top: -9px;
          right: 19px;
          transform: rotate(45deg);
          border-left: 1px solid #ccc;
          border-top: 1px solid #ccc;
        }
      }
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
