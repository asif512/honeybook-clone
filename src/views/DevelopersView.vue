<template>
  <div class="developers-view">
    <div class="content container">
      <div class="info">
        <h2 class="title">Introduction to Developers</h2>
        <div class="description">
          <p class="text">
            Vercel is the platform for frontend developers, providing the speed
            and reliability innovators need to create at the moment of
            inspiration.
          </p>
          <p class="text">
            We enable teams to iterate quickly and develop, preview, and ship
            delightful user experiences. Vercel has zero-configuration support
            for 35+ frontend frameworks and integrates with your headless
            content, commerce, or database of choice..
          </p>
        </div>
      </div>
      <div class="info quick-start">
        <h2 class="title">Quickstart</h2>
        <div class="description">
          <p class="text">
            Get started with Vercel in a few minutes by deploying one of our
            framework quickstart templates. You can also view all templates and
            filter by database, CMS, and more. ent, commerce, or database of
            choice..
          </p>
        </div>

        <div class="technologies">
          <div
            class="technology"
            v-for="(technology, index) in technologies"
            :key="index"
          >
            <img class="logo" :src="technology.logo" alt="logo" />
            <h2 class="name">{{ technology.name }}</h2>
            <p class="description">{{ technology.description }}</p>
            <div class="buttons">
              <b-button class="deploy-btn btn">
                <b-icon class="icon" icon="circle"></b-icon>
                <span>Deploy</span>
              </b-button>
              <b-button class="example-btn btn">live example</b-button>
            </div>
          </div>
        </div>
      </div>
      <div class="info features">
        <h2 class="title">Products and features</h2>
        <div class="description">
          <p class="text">
            Learn more about some of the Products and features Vercel offers:
          </p>
        </div>
        <div class="features-cards">
          <div
            class="features-card"
            v-for="(feature, index) in features"
            :key="index"
          >
            <h2 class="feature-title">{{ feature.title }}</h2>
            <h4 class="feature-sub-title">{{ feature.subTitle }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevelopersView",
  data() {
    return {
      technologies: [
        {
          logo: "https://vercel.com/static/topics/icons/next.svg",
          name: "Next.js",
          description: "Deploy our Next.js template, or view a live example.",
        },
        {
          logo: "https://vercel.com/static/topics/icons/nuxt.svg",
          name: "nuxt",
          description: "Deploy our Nuxt template, or view a live example.",
        },
        {
          logo: "https://vercel.com/static/topics/icons/svelte.svg",
          name: "SvelteKit",
          description: "Deploy our SvelteKit, or view a live example.",
        },
        {
          logo: "https://vercel.com/static/topics/icons/react.svg",
          name: "Create reaact app",
          description: "Deploy our CRA template, or view a live example.",
        },
        {
          logo: "https://vercel.com/static/topics/icons/nuxt.svg",
          name: "nuxt",
          description: "Deploy our Nuxt template, or view a live example.",
        },
        {
          logo: "https://vercel.com/static/topics/icons/svelte.svg",
          name: "SvelteKit",
          description: "Deploy our SvelteKit, or view a live example.",
        },
      ],
      features: [
        {
          title: "Build and Deploy",
          subTitle: "Deploy your Project with automatic CI/CD.",
        },
        {
          title: "Automatic Git Integration",
          subTitle: "Get a Preview Deployment for every git push.",
        },
        {
          title: "Vercel Functions",
          subTitle: "Run server-side code on-demand.",
        },
        {
          title: "Vercel Functions",
          subTitle: "Run server-side code before a request.",
        },
        {
          title: "Incremental Static Regeneration",
          subTitle: "Run server-side code on-demand.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.developers-view {
  text-align: left;
  padding-top: 60px;
  padding-bottom: 60px;
  max-width: 900px;
  margin: 0 auto;
  .content {
    .info {
      .title {
        font-size: 2.3rem;
        letter-spacing: -0.058125rem;
        font-weight: 600;
        line-height: 3.5rem;
      }

      .description {
        margin-top: 16px;
        .text {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
        }
      }
    }

    .quick-start {
      margin-top: 30px;

      .technologies {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px 20px;
        justify-content: space-between;

        .technology {
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 48%;

          .logo {
            width: 48px;
            height: 48px;
            border-radius: 24px;
          }

          .name {
            font-weight: 600;
            font-size: 1rem;
            margin: 16px 0 4px 0;
            line-height: 1.5rem;
          }

          .description {
            font-size: 1rem;
            line-height: 1.5em;
            font-weight: 400;
            margin: 0;
          }

          .buttons {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
            gap: 0 16px;
            .btn {
              background: transparent;
              color: $dark-1;
              width: 48%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1rem;
              font-weight: 400;
              text-transform: capitalize;
              border-color: $light-7;
              .icon {
                margin-right: 10px;
                width: 16px;
                height: 16px;
              }
              &.deploy-btn {
                background-color: $dark-1;
                color: $white;

                &:hover {
                  background: $white;
                  color: $dark-1;
                }
              }
              &.example-btn {
                &:hover {
                  border-color: $dark-1;
                }
              }
            }
          }

          @include forMedium() {
            width: 100%;
          }
        }
      }
    }

    .features {
      margin-top: 50px;

      .features-cards {
        .features-card {
          box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 20px;

          .feature-title {
            font-weight: 600;
            font-size: 1rem;
            margin: 0 0 8px 0;
            line-height: 1.5rem;
          }
          .feature-sub-title {
            font-size: 1rem;
            line-height: 1.5em;
            font-weight: 400;
            margin: 0;
          }
        }
      }
    }
  }

  @include forLarge() {
    margin-top: -78px;
  }
}
</style>
