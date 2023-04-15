<template>
  <div class="slider-wrapper">
    <div
      class="btn previous"
      @click="handlePrevious"
      :class="{ disablesd: isDisablesPrevioustButton }"
    >
      <b-icon class="icon" icon="caret-left-fill" />
    </div>
    <div class="slider-items">
      <div
        class="slider-item"
        v-for="(item, index) in items"
        :key="index"
        :style="getTranslate"
      >
        <img :src="item.image" alt="image" class="element-media" />
        <h2 class="title">{{ item.title }}</h2>
      </div>
    </div>
    <div
      class="btn next"
      @click="handleNext"
      :class="{ disablesd: isDisablesNextButton }"
    >
      <b-icon class="icon" icon="caret-right-fill" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderItems",
  data() {
    return {
      items: [
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",
          title: "A new look for HoneyBook: why we rebranded",
        },

        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",
          title:
            "25 powerful mission statement examples that make good companies great",
        },

        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",
          title: "A new look for HoneyBook: why we rebranded",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/01/Feature-Images-16-1024x793.jpg.webp",
          title: "A new look for HoneyBook: why we rebranded",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",
          title:
            "How to use a welcome packet to successfully onboard new clients ",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2021/10/brochure-templates-feature-1024x793.jpg.webp",
          title: "Customize these free brochure templates to send to clients ",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2021/10/brochure-templates-feature-1024x793.jpg.webp",
          title: "How to remind someone to pay you: 7 tips & examples ",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",
          title: "How to leverage AI to get unstuck",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",
          title: "A new look for HoneyBook: why we rebranded",
        },
        {
          image:
            "https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/02/client-welcome-packet-feature-1024x793.jpg.webp",
          title: "A new look for HoneyBook: why we rebranded",
        },
      ],
      translate: 0,
      initialTranslate: 255,
    };
  },
  computed: {
    getTranslate() {
      return `transform: translateX(${this.translate}px;`;
    },
    isDisablesNextButton() {
      return this.translate === 0 ? true : false;
    },
    isDisablesPrevioustButton() {
      return this.translate ===
        -(this.initialTranslate * (this.items.length - 4))
        ? true
        : false;
    },
  },
  methods: {
    handlePrevious() {
      let count = this.initialTranslate * (this.items.length - 1 - 4);
      if (count >= this.translate * -1) {
        this.translate = this.translate - this.initialTranslate;
      }
    },
    handleNext() {
      let count = this.translate + this.initialTranslate;
      if (count <= 0) {
        this.translate = count;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.slider-wrapper {
  font-family: "proxima-nova", Sans-serif;
  position: relative;

  .slider-items {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 90%;
    margin: 0 auto;

    .slider-item {
      margin-right: 20px;
      transition: all 1.5s ease;
      .element-media {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        max-height: 142px;
        overflow: hidden;
        border-radius: 5px;
        width: 235px;
      }
      .title {
        font-size: 22px;
        font-weight: 500;
        line-height: 26px;
        margin-bottom: 20px;
      }
    }
  }
  .btn {
    background: #5e30e3;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;

    .icon {
      fill: $white;
    }

    &.previous {
      position: absolute;
      left: 0;
      top: 60px;
    }
    &.next {
      position: absolute;
      right: 0;
      top: 60px;
    }

    &.disablesd {
      cursor: not-allowed;
      background: #ccc;
    }
  }
}
</style>
