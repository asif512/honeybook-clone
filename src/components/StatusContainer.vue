<template>
  <div class="status-container container">
    <div class="status" v-for="(status, index) in status" :key="index">
      <span class="staus-amount-label">
        <strong class="status--amount">{{ status.amount }}</strong>
        {{ status.label }}
      </span>
      <div class="status--text">
        {{ status.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusContainer",
  data() {
    return {
      status: [
        {
          amount: "$8B+",
          text: "earned by HoneyBook members",
        },
        {
          amount: "90%",
          label: "of invoice",
          text: "are paid on time or early",
        },
        {
          amount: "95%",
          label: "of members",
          text: "feel more organized with HoneyBook",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.status-container {
  font-family: Aeonik, ProximaNova, sans-serif;
  display: flex;
  padding: 80px 70px;
  justify-content: space-between;

  @include forLarge() {
    flex-direction: column;
    padding: 80px 1.2rem;
  }

  .status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @include forMedium() {
      margin-bottom: 20px;
    }

    @include forLarge() {
      margin-bottom: 20px;
    }

    .staus-amount-label {
      font-size: 26px;
      font-weight: 600;
      padding: 0.2px;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-image: linear-gradient(90deg, $dark-1 0, $dark-1 0);
      background-size: 100%;

      @include forLarge() {
        font-size: 20px;
      }

      .status--amount {
        font-size: 46px;
        font-weight: 900;

        @include forLarge() {
          font-size: 34px;
          font-weight: 600;
        }
      }
    }

    .status--text {
      font-size: 18px;
      font-weight: 300;

      @include forMedium() {
        font-size: 16px;
      }
    }
  }
}
</style>
