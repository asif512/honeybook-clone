<template>
  <div class="knowledgebase-view">
    <div class="hero-section">
      <div class="container content">
        <h2 class="title">How can we help you?</h2>
        <h4 class="sub-title">Ask Questions. Browse Articles. Find Answers</h4>
        <input
          class="input-field"
          type="text"
          placeholder="Enter your question or keyword here"
          v-model="questionKeyword"
        />
      </div>
    </div>
    <div class="knowlegebase-items container">
      <div
        v-for="(knowlegebase, index) in knowlegebases"
        class="knowlegebase"
        :key="index"
      >
        <h2 class="knowlegebase-title">{{ knowlegebase.title }}</h2>
        <div class="knowlegebase-items-wrapper">
          <div
            v-for="(item, i) in knowlegebase.items"
            :key="i"
            class="knowlegebase-item"
          >
            <h2 class="item-title">
              {{ item.label }} ({{ item.methods.length }})
            </h2>
            <div
              class="item-method"
              v-for="(method, j) in item.methods"
              :key="j"
            >
              <b-icon class="item-icon" icon="file-earmark-text" />
              <span class="item-label">{{ method.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KnowledgebaseView",
  data() {
    return {
      questionKeyword: "",
      knowlegebases: [
        {
          title: "Getting Started",
          items: [
            {
              label: "installation",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
            },
            {
              label: "billing",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
            },
            {
              label: "shipping",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
            },
          ],
        },
        {
          title: "shipping methods",
          items: [
            {
              label: "shipping",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
            },
            {
              label: "introduction",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
            },
            {
              label: "installation",
              methods: [
                { label: "Getting Started & What is next.", href: "#" },
                { label: "Multiple installs on one domain", href: "#" },
                {
                  label: "How do I change or update account passwords?",
                  href: "#",
                },
                { label: "Can I Use My Android Phone?", href: "#" },
              ],
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

.knowledgebase-view {
  font-family: Aeonik, ProximaNova, sans-serif;
  .hero-section {
    background-image: url(https://bedesk.vebto.com/client/assets/images/pattern.svg);
    background-color: $blue-1;

    background-position: center top;
    color: $white;
    padding: 65px;

    .content {
      .title {
        font-size: 58px;
        font-weight: 600;

        @include forXl() {
          font-size: 54px;
        }

        @include forLarge() {
          font-size: 44px;
          margin: 0;
        }
      }
      .sub-title {
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 25px;
      }
      .input-field {
        height: 60px;
        border-radius: 50px;
        font-size: 16px;
        padding: 0 30px;
        border: none;
        outline: none;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px rgba(0, 0, 0, 0.141), 0 1px 5px rgba(0, 0, 0, 0.122);
        background: $white;
        width: 100%;
        max-width: 800px;
      }
    }
  }

  @include forLarge() {
    margin-top: -78px;
  }

  .knowlegebase-items {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: left;

    .knowlegebase {
      padding-bottom: 30px;
      .knowlegebase-title {
        font-size: 30px;
        font-weight: 400;
        cursor: pointer;
        text-transform: capitalize;
      }
      .knowlegebase-items-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .knowlegebase-item {
          width: 350px;
          margin: 30px 0;
          .item-title {
            border-bottom: 1px solid #ccc;
            padding-bottom: 12px;
            cursor: pointer;
            font-weight: 400;
            font-size: 1.3rem;
            text-transform: capitalize;
          }
          .item-method {
            display: flex;
            align-items: center;
            margin-top: 10px;
            .item-icon {
              margin-right: 8px;
              fill: $gray-4;
            }
            .item-label {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 320px;
              color: $gray-4;
            }
          }
        }
      }
    }
  }
}
</style>
