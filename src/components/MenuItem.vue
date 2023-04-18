<template>
  <div class="menu-item">
    <router-link :to="`/${menu.to}`" v-if="!menu.isSubMenus">{{
      menu.label
    }}</router-link>
    <div v-else class="hero-menu-wrapper">
      <div class="menu-name" :class="menu.label">
        <span>{{ menu.label }}</span>
        <b-icon class="menu-icon" icon="chevron-down" />
      </div>
      <div class="hero-menu" :style="getHeroMenuStyles">
        <router-link
          class="hero-menu__item"
          v-for="(subMenu, i) in menu.subMenus"
          :key="i"
          :to="`${subMenu.to}`"
        >
          <b-icon class="hero-menu__item__icon" icon="dash-square" />
          <div class="hero-menu-item-wrapper">
            <span class="hero-menu__item__label">{{ subMenu.label }}</span>
            <span class="hero-menu__item__slogen">{{ subMenu.slogen }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["menu"],
  computed: {
    getHeroMenuStyles() {
      return {
        width: `${this.menu.width}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.menu-item {
  margin: 0 10px;
  text-transform: capitalize;
  color: $dark-1;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  height: 78px;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: $dark-1;
    opacity: 0.8;
  }

  .hero-menu-wrapper {
    height: 78px;
    display: flex;
    align-items: center;

    // .menu-name {
    // margin: 0 4px;
    // &.apps {
    //   border: 1px solid $light-7;
    //   padding: 8px 23px;
    //   border-radius: 30px;
    // }
    // }

    .menu-icon {
      margin-left: 8px;
    }
    .hero-menu {
      display: none;
    }
  }

  &:hover {
    text-decoration: underline;
    .hero-menu-wrapper {
      .hero-menu {
        display: block;
        transition: all 0.3s ease-in-out 0.1s;
        background: $white;
        border-radius: 2px;
        box-shadow: 0 14px 28px 0 rgba(0, 18, 71, 0.15),
          0 0 10px 0 rgba(0, 18, 71, 0.08);
        padding: 20px;
        position: absolute;
        right: 0;
        top: 78px;
        display: flex;
        flex-wrap: wrap;

        .hero-menu__item {
          width: 50%;
          display: flex;
          border-radius: 4px;
          padding: 0.8rem;

          &:hover {
            background: #eef2f4;
          }

          .hero-menu-item-wrapper {
            margin-left: 12px;
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-top: -7px;

            .hero-menu__item__label {
              font-size: 14px;
              font-weight: 600;
            }
            .hero-menu__item__slogen {
              font-size: 14px;
              font-weight: 400;
              color: $gray-1;
              line-height: 1.2;
              margin-top: 5px;
            }
          }
        }

        &::before {
          border-bottom: 8px solid $white;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          content: "";
          left: 90%;
          position: absolute;
          top: 0;
          -webkit-transform: translate3d(-50%, -100%, 0);
          transform: translate3d(-50%, -100%, 0);
        }
      }
    }
  }
}
</style>
