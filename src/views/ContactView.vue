<template>
  <div class="contact-us">
    <hero-section />
    <div class="contact__description container">
      <p class="label">
        Questions? Concerns? We’re here to support you every step of the way. We
        have real, live people available to chat 7 days a week, and online help
        resources that are available 24 hours a day.
      </p>
      <div class="contacts">
        <div class="contact" v-for="(contact, index) in contacts" :key="index">
          <img class="contact-logo" :src="contact.logo" alt="logo" />
          <h2 class="title">{{ contact.title }}</h2>
          <p class="description">{{ contact.description }}</p>
          <p class="mail">Email: {{ contact.email }}</p>
          <p class="billing" v-if="contact.billing">
            Billing: {{ contact.billing }}
          </p>
        </div>
      </div>
      <div class="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212634.32909001596!2d72.94615089853579!3d33.620573644001915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa17c956c1d%3A0xb6380dbc6614a792!2sIslamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680343041315!5m2!1sen!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="security">
        <img
          class="security-logo"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/contact_us_page/security"
          alt="logo"
        />
        <h2 class="title">security</h2>
        <h3 class="sub-title">
          Questions for our security team? No worries. We’ve got you.
        </h3>
        <p class="email">Eail: security@email.com</p>
      </div>

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
    <base-banner />
  </div>
</template>

<script>
import HeroSection from "@/components/contact/HeroSection.vue";
import BaseBanner from "@/components/Base/BaseBanner.vue";
export default {
  name: "ContactView",
  components: {
    "hero-section": HeroSection,
    "base-banner": BaseBanner,
  },
  data() {
    return {
      contacts: [
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/contact_us_page/sales",
          title: "sales",
          description:
            "Haven’t signed up yet, but need more info on how HoneyBook can help your business? Our team is happy to chat!",
          email: "sales@email.com",
        },
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/contact_us_page/support",
          title: "support",
          description:
            "Haven’t signed up yet, but need more info on how HoneyBook can help your business? Our team is happy to chat!",
          email: "support@email.com",
          billing: "12-3334-4",
        },
        {
          logo: "https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/contact_us_page/grow.png",
          title: "community",
          description:
            "Haven’t signed up yet, but need more info on how HoneyBook can help your business? Our team is happy to chat!",
          email: "community@email.com",
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

<style lang="scss" scoped>
@import "@/scss/app.scss";
.contact-us {
  font-family: Montserrat, sans-serif;

  .contact__description {
    margin: 0 auto;
    max-width: 850px;

    .label {
      font-size: 24px;
      line-height: 1.4;
      padding-top: 80px;
      padding-bottom: 40px;
    }

    .contacts {
      padding-bottom: 80px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;

      .contact {
        max-width: 260px;
        text-align: left;
        .contact-logo {
          height: 84px;
          width: 84px;
        }

        .title {
          font-weight: 600;
          font-size: 20px;
          padding: 20px 0;
          text-transform: capitalize;
        }

        .description,
        .mail,
        .billing {
          font-size: 16px;
          color: #383f49;
          line-height: 1.4;
        }

        // .mail {
        //   font-size: 16px;
        //   line-height: 1.4;
        //   color: #383f49;
        // }
      }
    }

    .location {
      margin-bottom: 80px;

      iframe {
        width: 700px;
        height: 350px;

        @include forMedium() {
          width: 500px;
          height: 280px;
        }
      }
    }

    .security {
      width: 300px;
      margin: 0 auto;
      .security-logo {
        height: 84px;
        width: 84px;
      }

      .title {
        font-size: 20px;
        font-weight: 600;
        padding: 20px 0;
      }

      .sub-title,
      .emil {
        color: #383f49;
        font-size: 16px;
        line-height: 1.4;
        margin-bottom: 10px;
      }
    }

    .questions {
      text-align: left;
      margin-top: 100px;
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
</style>
