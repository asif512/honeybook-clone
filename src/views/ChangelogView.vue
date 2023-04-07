<template>
  <div class="changelog container">
    <div class="hero-section">
      <div class="content">
        <h2 class="title">Our changelog</h2>
        <h4 class="sub-title">
          Here you always have an overview of what we are currently working on
          and can make your own suggestions for development.
        </h4>
      </div>
    </div>
    <div class="versions-section">
      <h2 class="title">all ideas</h2>
      <div class="version" v-for="(version, index) in versions" :key="index">
        <h3 class="version-no">Versions: {{ version.versionNo }}</h3>
        <h5 class="date">{{ version.data }}</h5>
        <div class="issues">
          <div class="issue" v-for="(issue, i) in version.issues" :key="i">
            <div class="info">
              <h2 class="issue-title">{{ issue.title }}</h2>
              <h4 class="issue-sub-title">{{ issue.subTitle }}</h4>
            </div>
            <div class="type" :class="issue.type">{{ issue.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangelogView",
  data() {
    return {
      versions: [
        {
          versionNo: "0.9.8.1",
          data: "5 April 2023",
          issues: [
            {
              title: "Pro Forms: Create Post Taxonomy Support",
              subTitle:
                "You can now pre-select taxonomies for your new created post.",
              type: "new",
            },
            {
              title: "Pro Forms: Important Update Post Meta Fix",
              subTitle:
                "This Hotfix includes an important fix when working with the Pro Forms Action Update Meta Data. In some cases other actions were not executed when this action was selected.",
              type: "fix",
            },
          ],
        },
        {
          versionNo: "0.9.7",
          data: "2 April 2023",
          issues: [
            {
              title: "Backend Designer Fix",
              subTitle:
                "Fixed a bug that caused the backend designer to produce unwanted results in the dashboard and login area since the last released version.",
              type: "important",
            },
          ],
        },
        {
          versionNo: "0.9.7.1",
          data: "1 April 2023",
          issues: [
            {
              title: "Animation Controls",
              subTitle:
                "Fixed a bug that caused the backend designer to produce unwanted results in the dashboard and login area since the last released version.",
              type: "fix",
            },
            {
              title: "Form Submissions",
              subTitle:
                "Fixed a bug that caused the backend designer to produce unwanted results in the dashboard and login area since the last released version.",
              type: "new",
            },
            {
              title: "Pro Forms: hCaptcha Support",
              subTitle:
                "Fixed a bug that caused the backend designer to produce unwanted results in the dashboard and login area since the last released version.",
              type: "important",
            },
            {
              title: "Pro Forms: New Submit Button Conditions",
              subTitle:
                "Fixed a bug that caused the backend designer to produce unwanted results in the dashboard and login area since the last released version.",
              type: "fix",
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
.changelog {
  font-family: Aeonik, ProximaNova, sans-serif;
  .hero-section {
    text-align: left;
    padding-top: 150px;
    padding-bottom: 60px;

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
        // margin-bottom: 100px;
      }
    }
  }

  .versions-section {
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

    .version {
      margin: 50px 0;
      .version-no {
        margin-bottom: 5px;
        font-weight: 600;
        line-height: 1.4;
        font-size: 1.8em;
      }

      .date {
        font-size: 1rem;
        font-weight: 400;
      }

      .issues {
        margin-top: 30px;

        .issue {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid $light-4;
          margin-bottom: 12px;

          .info {
            width: 60%;
            .issue-title {
              font-size: 20px;
              margin-bottom: 5px;
              font-weight: 600;
              line-height: 1.4;
            }

            .issue-sub-title {
              margin-bottom: 15px;
              font-size: 16px;
              font-weight: 400;
            }

            @include forMedium() {
              width: 80%;
            }
          }
          .type {
            font-size: 14px;
            background: $light-7;
            border-radius: 4px;
            padding: 4px 8px;
            display: flex;
            text-transform: uppercase;

            &.new {
              background-color: #0c441361;
            }

            &.important {
              background-color: rgba(255, 218, 71, 0.32);
            }
          }
        }
      }
    }
  }
}
</style>
