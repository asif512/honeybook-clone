<template>
  <div class="discover-section container">
    <h2 class="title">Get started with HoneyBook</h2>
    <div class="dicrover-cards">
      <div
        class="dicrover-card"
        v-for="(card, index) in cards"
        :key="index"
        :style="`border-bottom: 8px solid ${card.color}`"
      >
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-text">
          {{ card.text }}
        </p>
        <div class="more">
          {{ card.more }}
          <b-icon class="icon" icon="chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverSection",
  data() {
    return {
      cards: [
        {
          title: "Find tutorials, tips, & more",
          text: "Everything you need to know to get up and running with HoneyBook.",
          more: "Read more",
          color: "#11768d",
        },
        {
          title: "Send us your existing files",
          text: "Our team will turn proposals, contracts, and invoices into ready-to-use templates.",
          more: "Get started",
          color: "#e0673a",
        },
        {
          title: "Hire a HoneyBook Pro",
          text: "Certified Pros are here to help with just about anything your business needs.",
          more: "Browse services",
          color: "#8097f3",
        },
        {
          title: "Hire a HoneyBook Pro",
          text: "Certified Pros are here to help with just about anything your business needs.",
          more: "Browse services",
          color: "#659675;",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.discover-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  padding-top: 96px;
  padding-bottom: 84px;
  color: $dark-1;

  .title {
    font-size: 40px;
    margin-bottom: 48px;
    font-weight: 600;
  }

  .dicrover-cards {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: center;

    @include forLarge() {
      flex-wrap: wrap;
      width: 80%;
      text-align: center;
      margin: auto;
    }

    @include forMedium() {
      width: 96%;
    }

    .dicrover-card {
      background: $white;
      border-radius: 6px;
      box-shadow: 0 10px 20px rgba(0, 18, 71, 0.15);
      padding: 24px 20px;
      text-align: left;

      @include forLarge() {
        width: 270px;
      }

      @include forMedium() {
        width: 100%;
      }

      .card-title {
        font-size: 24px;
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 24px;
      }

      .card.text {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 16px;
        font-weight: 300;
      }

      .more {
        font-size: 18px;
        font-weight: 600;

        .icon {
          margin-left: 4px;
        }
      }

      &:hover {
        background: $light-3;
      }
    }
  }
}
</style>
