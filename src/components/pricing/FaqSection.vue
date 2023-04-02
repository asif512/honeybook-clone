<template>
  <div class="faq-section container">
    <h2 class="title">Pricing FAQs</h2>
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
          <div block v-b-toggle="`accordion-${index}`" class="collapse-header">
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
</template>

<script>
export default {
  name: "FaqSection",
  data() {
    return {
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

.faq-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 50px;
  padding-bottom: 100px;

  .title {
    font-size: 48px;
    margin-bottom: 50px;
    line-height: 1.18;
    font-weight: 600;
  }

  .questions {
    text-align: left;
    max-width: 800px;
    margin: 0 auto;
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

  @include forMedium() {
    padding-top: 70px;
    padding-bottom: 70px;

    .title {
      font-size: 32px;
    }
  }
}
</style>
