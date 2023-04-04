<template>
  <div class="referrals-view">
    <hero-section class="earning-section" :info="earningInfo" />
    <div class="mind-section">
      <div class="content container">
        <h2 class="title">Built with you in mind</h2>
        <h4 class="sub-title">
          As a HoneyBook member, you tell our story better than any
          advertisement or marketing stunt. When you give us your ultimate stamp
          of approval and bring in a new member, it means the world to us. Our
          referral program is our way of saying thank you, and meaning it.
        </h4>
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/referrals_page/trophy"
        />
      </div>
    </div>
    <hero-section class="network-section" :info="networkInfo" />
    <hero-section class="premium-section" :info="premiumInfo" />
    <div class="member-section">
      <div class="content container">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/referrals_page/module4.svg"
        />
        <div class="title">
          So far, we’ve given our members
          <strong class="amount">$298,000</strong>
        </div>
        <h4 class="sub-title">That’s what we call money well spent.</h4>
        <b-button class="trial-btn">Start free trial</b-button>
      </div>
    </div>
    <hero-section class="discount-section" :info="discountInfo" />
    <hero-section class="invites-section" :info="inviteInfo" />
    <div class="work-section">
      <div class="content container">
        <h2 class="title">How it works</h2>
        <div class="works">
          <div class="work" v-for="(work, index) in howToWrok" :key="index">
            <img class="work-logo" :src="work.logo" />
            <h2 class="work-title">{{ work.title }}</h2>
            <h4 class="work-sub-title">
              {{ work.subTitle }}
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="banner container">
      <h2 class="title">Not a member yet?</h2>
      <h4 class="sub-title">Join HoneyBook today and start earning</h4>
      <b-button class="trial-btn">Start free trial</b-button>
    </div>

    <div class="fags-section">
      <div class="container">
        <h2 class="title">faqs</h2>
        <div class="questions">
          <b-card
            no-body
            class="mb-3"
            style="background: #f6f7f8; border: none"
            v-for="(question, index) in questions"
            :key="index"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
              style="border: none"
            >
              <div
                block
                v-b-toggle="`accordion-${index}`"
                class="collapse-header"
              >
                <span class="question">{{ question.question }}</span>
                <b-icon width="28" height="28" icon="plus" />
              </div>
            </b-card-header>
            <b-collapse
              :id="`accordion-${index}`"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body style="background: #f6f7f8">
                <b-card-text style="background: #f6f7f8" class="answer">{{
                  question.answer
                }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>

    <div class="award-section">
      <div class="conatiner">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/member-love/trophy_2x.png"
        />
        <h2 class="title">We’re rated “First Class”</h2>
        <h4 class="sub-title">
          93% of our members said they would recommend HoneyBook to a friend
        </h4>
        <b-button class="trial-btn">Start free trial</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from "@/components/referrals/HeroSection.vue";
export default {
  name: "ReferralsView",
  components: {
    "hero-section": HeroSection,
  },
  data() {
    return {
      earningInfo: {
        title: "Earn extra cash when you refer friends to HoneyBook",
        subTitle:
          "Give friends 25% off their first year on HoneyBook and earn up to $200 for each one who joins. Terms apply.",
        buttonText: "Start earning",
        label: "Not a member yet?",
        image:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/referrals_page/gift",
      },
      networkInfo: {
        title: "Empower your network",
        subTitle:
          "If you believe HoneyBook can help your fellow entrepreneurs, let your referral link run wild. Unlimited invites. Big potential.",
        buttonText: "Start referring",
        image:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_800/v1/marketing_site/referrals_page/module2.gif",
      },
      premiumInfo: {
        title: "Unlock Premium Referrals",
        subTitle:
          "Already booking clients on HoneyBook? Once you transact $2,000 as a business, you'll be auto-enrolled in our Premium Referral program. That means earning up to $200 for every referral.",
        image:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_430/v1/marketing_site/referrals_page/module3.gif",
        buttonText: "Unlock Premium",
      },
      discountInfo: {
        title: "Give an amazing discount",
        subTitle:
          "Know someone who would love HoneyBook? Give a little something to get started. You'll be repaid in cash and good karma.",
        image:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_400/v1/marketing_site/referrals_page/module5.png",
        buttonText: "Start referring",
      },
      inviteInfo: {
        title: "Track your invites",
        subTitle:
          "View pending invites, send reminders, see who joins HoneyBook, and check your earnings all from your personal referral dashboard.",
        image:
          "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_800/v1/marketing_site/referrals_page/module6",
        buttonText: "Go to my dashboard",
      },
      howToWrok: [
        {
          title: "Invite your network",
          subTitle: "Share your unique referral link.",
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_170/v1/marketing_site/referrals_page/gift-email",
        },
        {
          title: "Track your invites",
          subTitle: "See who uses your referral link.",
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_170/v1/marketing_site/referrals_page/track-invitees",
        },
        {
          title: "Earn big",
          subTitle: "Get cash when you bring a new member!",
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_170/v1/marketing_site/referrals_page/money",
        },
      ],
      questions: [
        {
          question: "What is HoneyBook and how does it work?",
          answer:
            "HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place.",
        },
        {
          question: "What type of support do you offer?",
          answer:
            "HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place.",
        },
        {
          question: "Is HoneyBook a CRM?",
          answer:
            "HoneyBook is the leading clientflow management platform for independent service-based businesses. By combining essential tools for client communication, booking, and payments, HoneyBook lets independents manage their front-end client experience and back-end workflows in one place.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/app.scss";

.referrals-view {
  font-family: ProximaNova, sans-serif;
  .earning-section {
    align-items: center;
    max-width: 900px;

    .element-media {
      .image {
        max-width: 300px;
      }

      @include forMedium() {
        margin-top: 50px;
      }
    }
  }

  .mind-section {
    padding: 25px 0 50px 0;
    background: $light-5;

    .content {
      margin: 0 auto;
      max-width: 640px;
      .title {
        font-size: 40px;
        font-weight: 600;
        line-height: 1.18;
        padding-top: 50px;
        margin: 0 0 0.5em;
      }
      .sub-title {
        font-size: 20px;
        line-height: 1.4;
        font-weight: 400;

        margin-bottom: 10px;
        margin-top: 0;
      }
      .image {
        width: 125px;
        margin-top: 2em;
      }
    }

    @include forMedium() {
      .content {
        .title {
          font-size: 32px;
        }

        .sub-title {
          font-size: 18px;
        }
      }
    }
  }

  .network-section {
    .info {
      margin-top: 100px;
      .title {
        padding-top: 50px;
      }
    }

    .element-media {
      .image {
        max-width: 100%;
      }
    }
  }

  .premium-section {
    flex-direction: row-reverse;

    .element-media {
      .image {
        max-width: 100%;
      }
    }

    @include forMedium() {
      flex-direction: column;

      .element-media {
        margin-top: 50px;
      }
    }
  }

  .member-section {
    padding: 65px 0;
    background: $light-5;
    position: relative;
    margin-top: 120px;

    .content {
      margin: 0 auto;

      .image {
        top: -70px;
        width: 150px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }

      .title {
        font-size: 40px;
        font-weight: 300;
        margin-bottom: 5px;
        line-height: 1.18;
        padding-top: 50px;
      }

      .sub-title {
        font-size: 40px;
        font-weight: 300;
        line-height: 1.18;
        margin-bottom: 40px;
      }
    }

    @include forMedium() {
      .content {
        .image {
          width: 100px;
          top: -50px;
        }
        .title {
          font-size: 26px;
        }
        .sub-title {
          font-size: 26px;
        }
      }
    }
  }

  .discount-section {
    padding-top: 80px;
    padding-bottom: 80px;
    align-items: center;

    .element-media {
      .image {
        max-width: 100%;
      }

      @include forMedium() {
        margin-top: 50px;
      }
    }
  }
  .invites-section {
    padding-top: 80px;
    padding-bottom: 80px;
    align-items: center;
    flex-direction: row-reverse;

    .element-media {
      .image {
        max-width: 100%;
      }
    }
    @include forMedium() {
      flex-direction: column;

      .element-media {
        margin-top: 50px;
      }
    }
  }

  .work-section {
    padding: 25px 0 50px 0;
    background: $light-5;

    .content {
      .title {
        font-size: 40px;
        font-weight: 600;
        margin: 0 0 0.5em;
        line-height: 1.18;
        padding-top: 50px;
      }
      .works {
        display: flex;
        flex-wrap: wrap;

        .work {
          margin: 28px auto;
          min-width: 320px;
          .work-logo {
            width: 170px;
          }
          .work-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 10px;
          }

          .work-sub-title {
            color: $gray-2;
            font-size: 16px;
            line-height: 1.4;
          }
        }
      }
    }

    @include forMedium() {
      .content {
        .title {
          font-size: 32px;
        }
      }
    }
  }

  .banner {
    padding-bottom: 35px;
    padding-top: 35px;

    .title {
      font-size: 40px;
      line-height: 1.18;
      padding-top: 50px;
      font-weight: 600;
      margin-bottom: 0.5em;
    }

    .sub-title {
      font-size: 24px;
      margin-bottom: 30px;
      font-weight: 400;
      line-height: 1.4;
    }

    @include forMedium {
      .title {
        font-size: 27px;
      }
    }
  }

  .fags-section {
    padding-top: 50px;
    padding-bottom: 50px;
    text-align: left;

    .container {
      max-width: 945px;

      .title {
        font-size: 40px;
        line-height: 1.18;
        font-weight: 600;
        margin-bottom: 60px;
        padding-top: 50px;
        text-transform: uppercase;

        @include forMedium() {
          font-size: 27px;
          text-align: center;
        }
      }

      .questions {
        text-align: left;
        .collapse-header {
          display: flex;
          justify-content: space-between;
          padding: 16px;

          .question {
            font-size: 24px;
            font-weight: 600;
          }
        }
        .answer {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }

  .award-section {
    background-color: $dark-2;
    min-height: 335px;
    padding-top: 80px;
    padding-bottom: 80px;
    color: $white;

    .image {
      width: 150px;
    }

    .title {
      font-size: 40px;
      line-height: 1.18;
      font-weight: 600;
      margin: 0 0 0.5em;
    }

    .sub-title {
      line-height: 1.4;
      font-size: 20px;
      margin: 0 auto 50px;
      max-width: 400px;
      font-weight: 400;
    }

    @include forMedium() {
      .image {
        width: 80px;
      }
      .title {
        margin: 1em 0 0.5em;
        font-size: 27px;
      }

      .sub-title {
        font-size: 18px;
      }
    }
  }
}
</style>
