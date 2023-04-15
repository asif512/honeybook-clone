<template>
  <div class="blog-view">
    <div class="blog-section">
      <div class="blog-wrapper">
        <div class="blog-tabs">
          <div
            class="blog-tab"
            v-for="(blog, index) in blogs"
            :key="index"
            :class="{ seleted: blog.type === selectedBlog.type }"
            @click="handleSeletedPost(blog)"
          >
            <span class="blog-type">{{ blog.type }}</span>
          </div>
        </div>
        <div class="blog-content">
          <div class="media-element">
            <router-link :to="selectedBlog.posts[0].href">
              <img
                class="image"
                :src="selectedBlog.posts[0].image"
                alt="image"
              />
            </router-link>
          </div>
          <div class="posts-list">
            <div
              class="post-list"
              v-for="(post, index) in selectedBlog.posts"
              :key="index"
            >
              <img :src="post.image" alt="image" class="post-image" />
              <div class="info">
                <h2 class="title">{{ post.title }}</h2>
                <router-link class="read-more" :to="post.href"
                  >Read more</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section container">
      <div class="element-media">
        <img
          class="image"
          src="https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/03/Knowyourclientflowcover-777x1024.png.webp"
          alt="image"
        />
      </div>
      <div class="content-info">
        <h2 class="title">
          86% of clients hire the business that responds first
        </h2>
        <h4 class="sub-title">Want more insights? This report covers:</h4>
        <div class="list-items">
          <div class="list-item" v-for="item in 3" :key="item">
            <div class="icon-wrapper">
              <b-icon class="icon" icon="arrow-right-short" />
            </div>
            <span class="label">The best ways to win and wow clients</span>
          </div>
        </div>
        <b-button class="report-btn">Get the report</b-button>
      </div>
    </div>
    <div class="section container learn-more">
      <div class="content-info">
        <h2 class="title">
          Read our report on the state of independent businesses in the U.S.
        </h2>
        <p class="sub-title">
          We gathered data from more than 2,500 U.S. adults to understand how
          attitudes toward independent work have changed. What we learned might
          surprise you.
        </p>
        <b-button class="report-btn">learn more</b-button>
      </div>
      <div class="element-media">
        <img
          class="image"
          src="https://www.honeybook.com/blog/wp-content/webp-express/webp-images/uploads/2023/03/Blog-Header-NEW-BRAND-1-1536x1189.png.webp"
          alt="image"
        />
      </div>
    </div>
    <div class="slider-section container">
      <div class="menu">
        <h2 class="title">Our editors picks</h2>
        <div class="line"></div>
      </div>
      <slider-items />
    </div>
    <div class="videos-wrapper container">
      <div class="menu">
        <h2 class="title">Watch our videos</h2>
        <div class="line"></div>
      </div>
      <div class="videos">
        <div class="video-preview">
          <iframe
            width="580"
            height="350"
            :src="seletedVideo.src"
            :title="seletedVideo.title"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="videos-list">
          <div class="video-list" v-for="(video, index) in videos" :key="index">
            <iframe
              width="100"
              height="100"
              :src="video.src"
              :title="video.title"
            ></iframe>
            <h2 class="title" @click="handleSelect(video)">
              {{ video.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="news-letter">
      <div class="content container">
        <h2 class="title">Join our newsletter</h2>
        <h4 class="sub-title">
          Subscribe to get the latest tips for independent business owners and
          product updates right to your inbox.
        </h4>
        <div class="form-wrapper">
          <input
            type="text"
            class="input-field"
            placeholder="Enter your email address"
          />
          <b-button class="subssribe-btn">Subscribe</b-button>
        </div>
      </div>
    </div>

    <div class="social-posts container">
      <div class="menu">
        <h2 class="title">Get social</h2>
        <div class="line"></div>
      </div>
      <div class="posts-wrapper">
        <div class="social-post" v-for="post in 4" :key="post"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderItems from "@/components/SliderItems.vue";
import json from "@/JSON/blogs.json";
export default {
  name: "BlogView",
  components: {
    "slider-items": SliderItems,
  },
  data() {
    return {
      blogs: [],
      selectedBlog: {},
      seletedVideo: {},
      videos: [
        {
          title:
            "Sales Strategies for Independent Business Owners with Erika Tebbens",
          src: "https://www.youtube.com/embed/yQAaFiYccDE",
        },
        {
          title:
            "Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",
          src: "https://www.youtube.com/embed/9R-tk4D1aNo",
        },
        {
          title:
            "HoneyBook HotSeat: Bring Your Process to Life with Smart Files",
          src: "https://www.youtube.com/embed/yQAaFiYccDE",
        },
        {
          title:
            "Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",
          src: "https://www.youtube.com/embed/yQAaFiYccDE",
        },
        {
          title:
            "Sales Strategies for Independent Business Owners with Erika Tebbens",
          src: "https://www.youtube.com/embed/yQAaFiYccDE",
        },
        {
          title:
            "Efficiency & Streamlining Your Business Processes - October 2022 Global Virtual TuesdaysTogether",
          src: "https://www.youtube.com/embed/yQAaFiYccDE",
        },
      ],
    };
  },
  created() {
    this.blogs = json.blogs;
    this.selectedBlog = this.blogs[0];
    this.seletedVideo = this.videos[0];
  },
  methods: {
    handleSeletedPost(blog) {
      this.selectedBlog = blog;
    },
    handleSelect(video) {
      this.seletedVideo = video;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.blog-view {
  text-align: left;
  .blog-section {
    background: $light-9;
  }

  .blog-wrapper {
    max-width: 1370px;
    margin: 0 auto;
    display: flex;
    padding: 80px 0;

    .blog-tabs {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-right: 1px solid $gray-2;
      padding-right: 16px;
      .blog-tab {
        position: relative;
        color: $gray-2;
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        cursor: pointer;
        text-transform: capitalize;
        margin: 0px 0px 32px 0px;

        .blog-type {
        }

        &.seleted {
          &::after {
            content: "";
            width: 14px;
            height: 15px;
            top: 2px;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE4NCA2Ljc5QzExLjQ3NzcgNi45NjgzMyAxMS43MjA0IDcuMjE5MyAxMS44ODg5IDcuNTE4NzNDMTIuMDU3NCA3LjgxODE1IDEyLjE0NTkgOC4xNTU5MyAxMi4xNDU5IDguNDk5NUMxMi4xNDU5IDguODQzMDcgMTIuMDU3NCA5LjE4MDg1IDExLjg4ODkgOS40ODAyOEMxMS43MjA0IDkuNzc5NyAxMS40Nzc3IDEwLjAzMDcgMTEuMTg0IDEwLjIwOUwzLjAzOCAxNS4xNTVDMi43MzQ3NSAxNS4zMzkxIDIuMzg3OTggMTUuNDM5MyAyLjAzMzI2IDE1LjQ0NTJDMS42Nzg1NCAxNS40NTExIDEuMzI4NjMgMTUuMzYyNSAxLjAxOTQyIDE1LjE4ODZDMC43MTAyMTggMTUuMDE0NiAwLjQ1Mjg0NiAxNC43NjE2IDAuMjczNzA0IDE0LjQ1NTRDMC4wOTQ1NjE0IDE0LjE0OTEgOS43Mjg0MmUtMDUgMTMuODAwOCAwIDEzLjQ0NlYzLjU1NEMtOC4wMTE4MmUtMDUgMy4xOTkxNSAwLjA5NDI1NDggMi44NTA2NiAwLjI3MzMyNSAyLjU0NDNDMC40NTIzOTUgMi4yMzc5NCAwLjcwOTc1MiAxLjk4NDczIDEuMDE4OTkgMS44MTA2OEMxLjMyODIyIDEuNjM2NjIgMS42NzgyIDEuNTQ3OTcgMi4wMzMwMSAxLjU1MzgyQzIuMzg3ODIgMS41NTk2OCAyLjczNDY4IDEuNjU5ODMgMy4wMzggMS44NDRMMTEuMTg0IDYuNzlaIiBmaWxsPSIjNUUzMEUzIi8+Cjwvc3ZnPgo=);
            background-repeat: no-repeat;
            position: absolute;
            right: -30px;
            top: 3px;
          }
          color: $dark-1;
          font-weight: 600;
        }
      }
    }
    .blog-content {
      width: calc(100% - 300px);
      display: flex;
      margin-left: 40px;

      .media-element {
        width: 55%;
        cursor: pointer;
        .image {
          width: 100%;
          border-radius: 6px;
        }
      }
      .posts-list {
        margin-left: 30px;
        width: 45%;
        .post-list {
          display: flex;
          margin-bottom: 30px;
          .post-image {
            margin-right: 20px;
            border-radius: 6px;
            width: 160px;
            height: 124px;
          }
          .info {
            .title {
              margin-bottom: 10px;
              font-weight: 400;
              color: $dark-1;
              font-size: 18px;
            }
            .read-more {
              font-size: 16px;
              font-weight: 600;
              text-transform: none;
              letter-spacing: 0.2px;
              text-decoration: none;
              color: $gray-2;
            }
          }
        }
      }

      @include forXl() {
        flex-direction: column;
        padding: 0 30px;
        margin-left: 0;

        .media-element {
          width: 100%;
        }
        .posts-list {
          width: 100%;
          margin-top: 50px;
          margin-left: 0;

          .info {
            .title {
              font-size: 16px;
            }
            .read-more {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @include forLarge() {
    margin-top: -78px;
  }

  .section {
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    max-width: 1140px;
    margin: 0 auto;
    .element-media {
      width: 40%;
      text-align: center;
      .image {
        width: 287px;
        margin: 0 auto;
      }
    }

    .content-info {
      width: 60%;
      .title {
        font-size: 32px;
        font-weight: 700;
        line-height: 34px;
        margin-bottom: 16px;
      }
      .sub-title {
        font-weight: 400;
        margin-bottom: 1rem;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 24px;
      }

      .list-items {
        display: flex;
        flex-direction: column;
        .list-item {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          .icon-wrapper {
            background: rgb(254, 206, 72);
            width: 30px;
            height: 30px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              width: 30px;
              height: 30px;
            }
          }
          .label {
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
            margin-left: 16px;
          }
        }
      }

      .report-btn {
        background: transparent;
        color: $dark-1;
        border: 2px solid $dark-1;
        font-size: 16px;
        font-weight: 400;
        padding: 8px 24px;
        text-transform: capitalize;
        margin-top: 16px;

        &:hover {
          background: $grey-5;
        }
      }
    }

    @include forLarge() {
      flex-direction: column;
      .element-media {
        width: 100%;
        .image {
          width: 250px;
          margin-bottom: 30px;
        }
      }
      .content-info {
        width: 100%;
        max-width: 500px;
      }
    }

    &.learn-more {
      .element-media {
        width: 40%;
        margin: 0 auto;
        .image {
          width: 100%;
        }
      }

      .content-info {
        width: 50%;
        .title {
          margin-bottom: 26px;
        }
      }

      @include forLarge() {
        flex-direction: column-reverse;
        .element-media {
          width: 100%;
          .image {
            width: 400px;
            margin-bottom: 30px;
          }
        }
        .content-info {
          width: 100%;
          max-width: 500px;
        }
      }
    }
  }

  .slider-section {
    padding-top: 60px;
    padding-bottom: 60px;

    .menu {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 34px;
      }

      .line {
        height: 1px;
        background: #ccc;
        width: calc(100% - 280px);
      }
    }
  }

  .videos-wrapper {
    padding-top: 60px;
    padding-bottom: 60px;

    .menu {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 34px;
      }

      .line {
        height: 1px;
        background: #ccc;
        width: calc(100% - 280px);
      }
    }

    .videos {
      display: flex;
      .video-preview {
      }

      .videos-list {
        padding-left: 16px;
        background: $light-9;
        height: 350px;
        overflow-x: auto;
        width: 100%;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-thumb {
          background: $gray-2;
          border-radius: 4px;
        }

        .video-list {
          display: flex;
          align-items: center;
          margin: 10px;

          .title {
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
            letter-spacing: 0.5px;
            margin-left: 16px;
            cursor: pointer;

            &:hover {
              color: $black;
            }
          }
        }
      }

      @include forLarge() {
        flex-direction: column-reverse;
        align-items: center;

        .videos-list {
          width: 580px;
        }
      }
    }
  }

  .news-letter {
    font-family: "Aeonik Regular", sans-serif;
    background: $black;
    padding-top: 100px;
    padding-bottom: 100px;
    color: rgb(255, 255, 255);
    margin-top: 50px;

    .content {
      width: 614px;
      margin: 0 auto;
      text-align: center;

      .title {
        font-weight: 600;
        font-style: normal;
        font-size: 44px;
        line-height: 50px;
      }
      .sub-title {
        font-weight: 400;
        font-style: normal;
        text-decoration: none;
        font-size: 16px;
      }
      .form-wrapper {
        margin-top: 20px;
        .input-field {
          border-color: rgb(102, 102, 102);
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
          background: rgb(255, 255, 255);
          font-weight: normal;
          font-style: normal;
          text-decoration: none;
          text-align: left;
          font-size: 16px;
          color: rgb(0, 0, 0);
          width: 300px;
          height: 60px;
          box-sizing: border-box;
          padding-left: 5px;
          padding-right: 5px;
          margin-right: 20px;
        }
        .subssribe-btn {
          font-weight: 400;
          font-style: normal;
          text-align: center;
          font-size: 18px;
          color: rgb(0, 0, 0);
          border-color: rgba(60, 120, 216, 0);
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
          background: rgb(255, 213, 82);
          width: 176px;
          height: 60px;
        }
      }
    }
  }

  .social-posts {
    padding-top: 60px;
    padding-bottom: 100px;

    .menu {
      margin-bottom: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 34px;
      }

      .line {
        height: 1px;
        background: #ccc;
        width: calc(100% - 200px);
      }
    }

    .posts-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
      .social-post {
        height: 255px;
        background-image: url(https://www.honeybook.com/blog/wp-content/uploads/sb-instagram-feed-images/341195315_532754412270453_5173329251687203855_nlow.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 1;
        width: 23%;
        min-width: 255px;
        cursor: pointer;
      }
    }
  }
}
</style>
