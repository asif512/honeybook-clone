<template>
  <div class="community">
    <hero-section />
    <div class="feature" v-for="(feature, index) in features" :key="index">
      <div class="container">
        <div class="feature-content">
          <h2 class="title">{{ feature.title }}</h2>
          <h3 class="title1">{{ feature.title1 }}</h3>
          <h3 class="sub-title">
            {{ feature.subTitle }}
          </h3>
          <div class="lists">
            <div class="list" v-for="(list, i) in feature.lists" :key="i">
              <b-icon icon="check" class="icon" />
              <span class="label">{{ list }}</span>
            </div>
          </div>
          <b-button class="trial-btn btn" v-if="feature.buttonLabel">{{
            feature.buttonLabel
          }}</b-button>
        </div>
        <div class="elemnent-media">
          <img class="image" :src="feature.url" alt="image" />
        </div>
      </div>
    </div>
    <base-banner buttonLabel="join the community" />
  </div>
</template>

<script>
import HeroSection from "@/components/community/HeroSection.vue";
import BaseBanner from "@/components/Base/BaseBanner.vue";
export default {
  name: "CommunityView",
  components: {
    "hero-section": HeroSection,
    "base-banner": BaseBanner,
  },
  data() {
    return {
      features: [
        {
          title: "Less networking more opportunities",
          subTitle:
            "Stop paying for placement. Harness the power of your own community.",
          lists: [
            "Target opportunities to specific locations & creative types",
            "Get notified of relevant posts",
            "The epicenter of creative collaboration - styled shoots, workshops and more...",
            "No SPAM policy",
          ],
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/community/opportunity-1.png",
        },
        {
          title: "An online community for creatives by creatives",
          subTitle:
            "Find & connect with creative entrepreneurs in your local area and beyond. Discover amazing professionals to work with on your next project. Start collaborating with some of the best creatives in the industry.",
          lists: [
            "Search 50K+ creatives by industry type",
            "Filter by location",
            "Connect with professionals",
            "Invite your favorite creatives",
          ],
          buttonLabel: "search the creative directory",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_530/v1/marketing_site/community/online-big",
        },
        {
          title: "Build a profile fit for you",
          subTitle:
            "Create a professional profile that showcases your brand, affiliations, and highlights your collaborations with fellow creative professionals.",
          lists: [
            "Get discovered as a professional",
            "Get discovered as a professional",
            "Connect with professionals",
            "Easily share your portfolio of work",
            "Increase your SEO",
          ],
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_530/v1/marketing_site/community/natalie",
        },
        {
          title: "Our app makes it easy to work from your phone",
          subTitle:
            "Create a professional profile that showcases your brand, affiliations, and highlights your collaborations with fellow creative professionals.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_600/v1/marketing_site/homepage2/product-design/sec03-image.png",
        },
        {
          title: "Community Over Competition",
          title1:
            "We are wave makers, trailblazers, innovators, and world changers. We are the Rising Tide Society + HoneyBook.",
          subTitle:
            "Together we're on a mission to educate and empower creatives to thrive in the spirit of community over competition. United in business, we power a booming creative economy and a community designed by creatives, for creatives.",
          url: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/community/community-map",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.community {
  font-family: Montserrat, sans-serif;

  // .features {
  .feature {
    .container {
      display: flex;
      align-items: center;
      gap: 0 16px;
      padding-top: 100px;
      padding-bottom: 100px;
      .feature-content {
        text-align: left;
        width: 50%;
        padding-right: 65px;
        .title {
          font-size: 36px;
          line-height: 1.25;
          padding-bottom: 15px;
          font-weight: 700;
        }

        .title1 {
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        .sub-title {
          color: $gray-1;
          font-size: 16px;
          line-height: 1.4;
        }

        .lists {
          margin-top: 16px;
          .list {
            display: flex;
            margin-bottom: 0.75em;

            .icon {
              width: 26px;
              height: 26px;
              margin-right: 0.75em;
              fill: $blue;
              margin-top: -3px;
            }
            .label {
              font-size: 18px;
              color: $gray-2;
              font-weight: 400;
              line-height: 1.2;
            }
          }
        }

        .btn {
          margin-top: 30px;
          font-size: 14px;
          height: 36px;
          line-height: 16px;
          padding: 1px 16px 0;
          text-transform: uppercase;
        }
      }

      .elemnent-media {
        width: 50%;
        .image {
          max-height: 500px;
          width: 100%;
          width: auto;
        }
      }

      @include forLarge() {
        flex-direction: column;

        .elemnent-media {
          margin-top: 60px;
          width: 100%;

          .image {
            max-height: 300px;
            width: auto;
          }
        }
        .feature-content {
          width: 100%;
          text-align: center;
          padding-left: 0;
          padding-right: 0;

          .title {
            font-size: 30px;
          }

          .lists {
            width: 70%;
            margin: 16px auto;
            text-align: left;
          }
        }
      }
      @include forSmall() {
        .feature-content {
          .lists {
            width: 100%;
          }
        }
      }
    }

    &:nth-child(odd) {
      .container {
        flex-direction: row-reverse;

        @include forLarge() {
          flex-direction: column;

          .elemnent-media {
            margin-top: 60px;
            width: 100%;

            .image {
              max-height: 300px;
              width: auto;
            }
          }
          .feature-content {
            text-align: center;
            padding-left: 0;
            padding-right: 0;

            .title {
              font-size: 30px;
            }

            .lists {
              width: 70%;
              margin: 16px auto;
              text-align: left;
            }
          }
        }

        @include forSmall() {
          .feature-content {
            .lists {
              width: 100%;
            }
          }
        }
      }
    }

    // &:nth-child(1) {
    //   .container {
    //     .feature-content {
    //       .title {
    //         font-size: 51px;
    //       }

    //       .trial-btn {
    //         background: $btn-color;
    //         margin-top: 50px;
    //       }
    //     }
    //   }
    // }
  }
  // }
}
</style>
