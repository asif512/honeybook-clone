<template>
  <div class="integration-app container">
    <h2 class="title">Integrations that make your life easier</h2>
    <h3 class="sub-title">
      HoneyBook works with the tools you already use, so you can work more
      efficiently than ever.
    </h3>
    <div class="integration-app-lists">
      <div
        class="integration-app-list"
        v-for="(app, index) in integrationApps"
        :key="index"
      >
        <label class="label">{{ app.name }}</label>
        <img class="app-image" :src="app.src" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntegrationApp",
  data() {
    return {
      integrationApps: [
        {
          name: "QuickBooks",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/integrations_module/quickbooks.svg",
        },
        {
          name: "Calendly",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/calendly.png",
        },
        {
          name: "Zaiper",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/integrations_module/zapier.svg",
        },
        {
          name: "Zoom",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/zoom2.png",
        },
        {
          name: "Google Calenter",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/integrations_module/google-cal.svg",
        },
        {
          name: "Gmail",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/gmail.png",
        },
        {
          name: "iClould Mail",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/icloud-mail.png",
        },
        {
          name: "Yahoo Mail",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/yahoo-mail.png",
        },
        {
          name: "Outlook Mail",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/outlook-mail.png",
        },
        {
          name: "Aol Mail",
          src: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/features_page/integrations/aol-mail.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.integration-app {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 160px;
  padding-bottom: 160px;
  color: $dark-1;

  @include forMedium() {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .title {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    margin: 33px 0;

    @include forMedium() {
      font-size: 32px;
    }
  }

  .sub-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.44;
    margin: -5px auto 0;
  }

  .integration-app-lists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 55px auto 0;
    max-width: 440px;

    .integration-app-list {
      flex: 1 1 20%;
      margin-bottom: 40px;
      align-self: flex-end;
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      text-align: justify;

      @include forMedium() {
        align-self: flex-end;
        flex: 1 1 33.3333333333%;
        margin-bottom: 40px;
        text-align: center;
      }

      .label {
        opacity: 0;
        transition: transform 0.15s ease-in, opacity 0.15s ease-in,
          -webkit-transform 0.15s ease-in;
        margin-bottom: 10px;
        font-size: 14px;
      }

      &:hover {
        .label {
          opacity: 1;
        }
      }

      .app-image {
        width: 44px;

        @include forMedium() {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
