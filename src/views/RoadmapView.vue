<template>
  <div class="roadmap container">
    <div class="hero-section">
      <div class="content">
        <h2 class="title">Our Roadmap</h2>
        <h4 class="sub-title">
          Here you always have an overview of what we are currently working on
          and can make your own suggestions for development.
        </h4>
        <b-button class="btn trial-btn">submit idea</b-button>
      </div>
    </div>
    <div class="roadmap-programs">
      <div class="program" v-for="(program, index) in programs" :key="index">
        <h2 class="title">{{ program.name }}</h2>
        <div class="program-item" v-for="(item, i) in program.items" :key="i">
          <span class="label">{{ item.label }}</span>
          <div class="amount">
            <b-icon class="icon" icon="hand-thumbs-up" />
            <span class="amount-label">{{ item.amount }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="roadmap-form">
      <h2 class="title">submit you idea</h2>
      <div class="input-wrapper">
        <label class="label">idea title*</label>
        <input type="text" class="input-field" />
      </div>
      <div class="input-wrapper">
        <label class="label">Describe Your Idea</label>
        <textarea class="input-field" cols="8"></textarea>
      </div>
      <div class="idea-btn">
        <b-button class="btn trial-btn">submit idea</b-button>
      </div>
    </div>

    <div class="ideas-section">
      <h2 class="title">all ideas</h2>
      <div class="idea" v-for="(idea, i) in ideas" :key="i">
        <span class="label">{{ idea.label }}</span>
        <div class="amount">
          <b-icon class="icon" icon="hand-thumbs-up" />
          <span class="amount-label">{{ idea.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadmapView",
  data() {
    return {
      programs: [
        {
          name: "in development",
          items: [
            {
              label: "Form Email Designer",
              amount: 24,
            },
            {
              label: "Lottie Element",
              amount: 14,
            },
            {
              label: "Breadcrumbs",
              amount: 20,
            },
          ],
        },
        {
          name: "next*",
          items: [
            {
              label: "Draw SVG Element",
              amount: 29,
            },
            {
              label: "The ability to use tooltips",
              amount: 14,
            },
            {
              label: "Accessibility: Change color contrast",
              amount: 20,
            },
          ],
        },
        {
          name: "planned*",
          items: [
            {
              label: "Extending the Conditional Logic",
              amount: 66,
            },
            {
              label: "Toast Notifications",
              amount: 26,
            },
          ],
        },
      ],
      ideas: [
        {
          label: "Form Email Designer",
          amount: 24,
        },
        {
          label: "Lottie Element",
          amount: 14,
        },
        {
          label: "Breadcrumbs",
          amount: 20,
        },
        {
          label: "Extending the Conditional Logic",
          amount: 66,
        },
        {
          label: "Toast Notifications",
          amount: 26,
        },
        {
          label: "Draw SVG Element",
          amount: 29,
        },
        {
          label: "The ability to use tooltips",
          amount: 14,
        },
        {
          label: "Accessibility: Change color contrast",
          amount: 20,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.roadmap {
  font-family: Aeonik, ProximaNova, sans-serif;
  .hero-section {
    text-align: left;
    height: 80vh;
    display: flex;
    align-items: center;

    .content {
      width: 76%;

      .title {
        font-size: 48px;
        line-height: 1.1em;
        font-weight: 600;
        margin-bottom: 35px;
      }

      .sub-title {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.2;
        margin-bottom: 100px;
      }

      .trial-btn {
        text-transform: uppercase;
      }
    }
  }

  .roadmap-programs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 60px;
    padding-bottom: 60px;
    gap: 30px;
    text-align: left;
    .program {
      min-width: 350px;

      .title {
        font-size: 1.8em;
        line-height: 1.4;
        margin-bottom: 25px;
        font-weight: 600;
        text-transform: capitalize;
      }

      .program-item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 8px 12px;
        border-radius: 6px;
        border: 1px solid $light-4;
        margin-bottom: 12px;
        .label {
          font-size: 14px;
          text-transform: capitalize;
        }

        .amount {
          font-size: 12px;
          background: $light-7;
          border-radius: 4px;
          padding: 4px 8px;
          display: flex;
          align-items: center;
          .icon {
            margin-right: 5px;
          }
        }
      }

      @include forMedium() {
        width: 100%;
      }
    }
  }

  .roadmap-form {
    margin-top: 60px;
    margin-bottom: 60px;
    border: 1px solid $light-4;
    border-radius: 16px;
    padding: 50px;
    text-align: left;

    .title {
      font-size: 1.8em;
      line-height: 1.4;
      margin-bottom: 25px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .input-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      .label {
        font-size: 16px;
        width: max-content;
        text-transform: capitalize;
      }
      .input-field {
        width: 70%;
        border: 1px solid $light-4;
        border-radius: 6px;
        padding: 8px;
        background: $light-6;
      }

      @include forMedium() {
        flex-direction: column;
        align-items: flex-start;

        .input-field {
          width: 100%;
          margin-top: 12px;
        }
      }
    }
    .idea-btn {
      display: flex;
      justify-content: flex-end;
      margin-top: 30px;
    }
  }

  .ideas-section {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: left;

    .title {
      font-size: 1.8em;
      line-height: 1.4;
      margin-bottom: 25px;
      font-weight: 600;
      text-transform: capitalize;
    }

    .idea {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid $light-4;
      margin-bottom: 12px;
      .label {
        font-size: 14px;
        text-transform: capitalize;
      }

      .amount {
        font-size: 12px;
        background: $light-7;
        border-radius: 4px;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        .icon {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
