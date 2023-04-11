<template>
  <div class="help-center">
    <div class="hero-section">
      <div class="container">
        <div class="topbar">
          <img
            class="logo"
            src="https://downloads.intercomcdn.com/i/o/391633/01ad6591d10f3aed80f0aec4/9068fd1bda5d9128faca6591737065b1.png"
          />
          <router-link class="go-back-btn" to="/">Go to HoneyBook</router-link>
        </div>
        <div class="sub-title">
          Find advice and answers to help you get the most out of HoneyBook,
          including step-by-step courses, video walkthroughs, and more.
        </div>
        <div class="input-wrapper">
          <b-icon class="icon" icon="search" />
          <b-form-input
            class="input-control"
            v-model="inputField"
            placeholder="Search for articles"
          ></b-form-input>
        </div>
      </div>
    </div>

    <div class="help-cards container">
      <div class="help-card" v-for="(article, index) in articles" :key="index">
        <div class="icon-wrapper">
          <b-icon class="icon" :icon="article.logo" />
        </div>
        <div class="info-content">
          <h2 class="title">{{ article.title }}</h2>
          <h4 class="sub-title">{{ article.subTitle }}</h4>
          <div class="writter-info">
            <span class="no">{{ article.noOfArticles }} articles </span>
            <img class="writter-logo" :src="article.writtenBy.writter1Logo" />
            <img class="writter-logo" :src="article.writtenBy.writter2Logo" />
            <span class="written-by"
              >wrtten by
              <span class="name">{{ article.writtenBy.writter1Name }}</span> and
              <span class="name">{{
                article.writtenBy.writter2Name
              }}</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelpCenterView",
  data() {
    return {
      inputField: "",
      articles: [
        {
          logo: "circle",
          title: "Training & Video Tutorials",
          subTitle:
            "Step-by-step video walkthroughs and recorded webinars to help get the most out of HoneyBook",
          noOfArticles: 40,
          writtenBy: {
            writter1Logo:
              "https://static.intercomassets.com/avatars/3676611/square_128/DSC_6592-1576184197.jpg",
            writter2Logo:
              "https://static.intercomassets.com/avatars/2653186/square_128/38930700_10212356120918168_3816649604426891264_o-1539628389.jpg",
            writter1Name: "MacKenzie Hughes",
            writter2Name: "Marika Tabilio",
          },
        },
        {
          logo: "circle",
          title: "Getting Started",
          subTitle: "Setting up your account to get started with HoneyBook",
          noOfArticles: 40,
          writtenBy: {
            writter1Logo:
              "https://static.intercomassets.com/avatars/3676611/square_128/DSC_6592-1576184197.jpg",
            writter2Logo:
              "https://static.intercomassets.com/avatars/2653186/square_128/38930700_10212356120918168_3816649604426891264_o-1539628389.jpg",
            writter1Name: "MacKenzie Hughes",
            writter2Name: "Elli Neeldo",
          },
        },
        {
          logo: "circle",
          title: "My Accounts",
          subTitle:
            "Managing your personal and company-wide account settings in HoneyBook",
          noOfArticles: 40,
          writtenBy: {
            writter1Logo:
              "https://static.intercomassets.com/avatars/3676611/square_128/DSC_6592-1576184197.jpg",
            writter2Logo:
              "https://static.intercomassets.com/avatars/2653186/square_128/38930700_10212356120918168_3816649604426891264_o-1539628389.jpg",
            writter1Name: "Elli Neelds",
            writter2Name: "Marika Tabilio",
          },
        },
        {
          logo: "circle",
          title: "My Workflow",
          subTitle:
            "Managing your personal and company-wide account settings in HoneyBook",
          noOfArticles: 40,
          writtenBy: {
            writter1Logo:
              "https://static.intercomassets.com/avatars/3676611/square_128/DSC_6592-1576184197.jpg",
            writter2Logo:
              "https://static.intercomassets.com/avatars/2653186/square_128/38930700_10212356120918168_3816649604426891264_o-1539628389.jpg",
            writter1Name: "MacKenzie Hughes",
            writter2Name: "Marika Tabilio",
          },
        },
        {
          logo: "circle",
          title: "Using Smart Files",
          subTitle: "Everything you need to know about HoneyBook's smart files",
          noOfArticles: 40,
          writtenBy: {
            writter1Logo:
              "https://static.intercomassets.com/avatars/3676611/square_128/DSC_6592-1576184197.jpg",
            writter2Logo:
              "https://static.intercomassets.com/avatars/2653186/square_128/38930700_10212356120918168_3816649604426891264_o-1539628389.jpg",
            writter1Name: "Marika Tabilis",
            writter2Name: "Marika Tabilio",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.help-center {
  .hero-section {
    background: url("https://downloads.intercomcdn.com/i/o/391634/2c64ec7ff31ac739d431acb4/f391f807c15a929c46d804df24e9ae97.png");
    background-size: cover;
    background-position: 50%;
    height: 300px;
    color: $white;

    .container {
      padding-top: 35px;
      padding-bottom: 35px;
      max-width: 900px;

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
        line-height: 1;

        .logo {
          max-width: 360px;
          max-height: 35px;
        }
        .go-back-btn {
          font-size: 14px;
          text-decoration: none;
          font-weight: 600;
          color: $white;
        }
      }

      .sub-title {
        font-size: 28px;
        font-weight: 300;
        margin: 0 0 27px;
        line-height: 1.24;
        text-align: left;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        padding: 20px 32px 21px 20px;
        background: hsla(0, 0%, 100%, 0.2);
        border: none;
        outline: none;
        font-size: 18px;
        border-radius: 4px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
        color: $white;

        .input-control {
          background: transparent;
          border: none;
          outline: none;
          color: $white;

          &:focus {
            outline: none;
            box-shadow: none;
          }
          &::placeholder {
            color: $white;
          }
        }

        .icon {
          fill: $white;
        }
      }
    }
  }

  .help-cards {
    max-width: 900px;
    padding-top: 24px;

    .help-card {
      display: flex;
      border-radius: 10px;
      padding: 16px;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -2px rgba(0, 0, 0, 0.1);
      border: 1px solid $light-2;
      margin-bottom: 22px;

      .icon-wrapper {
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 50px;
          height: 50px;
          fill: $pink-1;
        }
      }

      .info-content {
        padding: 16px;
        text-align: left;
        .title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 13px;
        }

        .sub-title {
          font-size: 16px;
          font-weight: 400;
          margin: 4px 0 12px 0;
        }

        .writter-info {
          font-size: 14px;

          .no {
            margin-right: 16px;
          }

          .writter-logo {
            width: 24px;
            height: 24px;
            border-radius: 12px;
            overflow: hidden;
          }

          .written-by {
            margin-left: 10px;

            .name {
              color: $gray-3;
            }
          }
        }
      }

      &:hover {
        border-color: $pink-1;
      }
    }
  }
}
</style>
