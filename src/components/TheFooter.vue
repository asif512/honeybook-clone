<template>
  <div class="footer">
    <div class="container">
      <h2 class="logo">honeybook</h2>
      <div class="footer-menus" v-for="(menu, index) in menus" :key="index">
        <h2 class="menu-title">{{ menu.label }}</h2>
        <div class="footer-menu" v-for="(page, i) in menu.pages" :key="i">
          <router-link class="page-title" :to="page.href">
            {{ page.label }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      menus: [
        {
          label: "company",
          pages: [
            {
              label: "about us",
              href: "about-us",
            },
            {
              label: "contact us",
              href: "contact-us",
            },
            {
              label: "careers",
              href: "careers",
            },
          ],
        },
        {
          label: "apps",
          pages: [
            {
              label: "roadmap",
              href: "roadmap",
            },
            {
              label: "reviews",
              href: "review",
            },
            {
              label: "app display page",
              href: "app-display-page",
            },
            {
              label: "changelog",
              href: "changelog",
            },
          ],
        },
        {
          label: "resources",
          pages: [
            {
              label: "blog",
              href: "blog",
            },
            {
              label: "help center",
              href: "help-center",
            },
            {
              label: "referals",
              href: "referrals",
            },
            {
              label: "community",
              href: "community",
            },
            {
              label: "knowledgebase",
              href: "khowledgebase",
            },
            {
              label: "developers",
              href: "developers",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.footer {
  padding-top: 60px;
  padding-bottom: 60px;
  font-family: ProximaNova, sans-serif;
  color: $dark-1;
  text-align: left;

  .container {
    display: flex;
    justify-content: space-between;

    @include forMedium() {
      flex-direction: column;
    }

    .logo {
      font-size: 32px;
      font-weight: 700;
    }

    .footer-menus {
      .menu-title {
        font-size: 14px;
        margin-top: 15px;
        font-weight: 700;
        line-height: 1.6;
        text-transform: capitalize;
      }

      .footer-menu {
        .page-title {
          font-size: 16px;
          line-height: 1.6;
          font-weight: 400;
          text-transform: capitalize;
          color: $dark-1;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
