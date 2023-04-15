<template>
  <div class="post-details">
    <div class="top-bar">
      <b-breadcrumb style="margin: 0" :items="breadcrumb"></b-breadcrumb>
    </div>
    <div class="content container">
      <div class="details">
        <h2 class="title">{{ post.title }}</h2>
        <div class="authore-info">
          <span class="name">{{ post.author }}</span>
          <span class="pulished-on">Published on {{ post.published }}</span>
        </div>

        <img :src="post.image" class="post-image" alt="" />
        <p class="description">{{ post.description }}</p>

        <div class="features">
          <h2 class="title">Important sections of the conversation</h2>
          <ul class="feature-lists">
            <li
              class="feature-item"
              v-for="(feature, index) in post.featues"
              :key="index"
            >
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="share">
          <h2 class="title">Share To:</h2>
          <div class="buttons">
            <b-button class="btn fb-btn">Facebook</b-button>
            <b-button class="btn twitter-btn">Twitter</b-button>
            <b-button class="btn linked-btn">LinkedIn</b-button>
          </div>
        </div>
      </div>
      <div class="categories">
        <h2 class="title">categories</h2>
        <div class="category-wrapper">
          <div class="category" v-for="(category, index) in posts" :key="index">
            <h4 class="category-type">{{ category.type }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="related-posts container">
      <div class="menu">
        <h2 class="title">Related posts</h2>
        <div class="line"></div>
      </div>
      <div class="posts">
        <div class="post" v-for="(post, index) in posts[0].posts" :key="index">
          <img :src="post.image" alt="image" class="image" />
          <div class="content">
            <h2 class="title">{{ post.title }}</h2>
            <p class="published">{{ post.published }}</p>
            <span class="read-more">Read more</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "@/JSON/blogs.json";
export default {
  name: "PostDetails",
  data() {
    return {
      post: null,
      posts: null,
      breadcrumb: [
        {
          text: "blog",
          href: "#",
        },
      ],
    };
  },
  created() {
    const blogs = json.blogs;
    this.posts = blogs;
    blogs.forEach((blog) => {
      blog.posts.forEach((post) => {
        if (post.href === this.$route.params.id) {
          this.post = post;
        }
      });
    });

    this.breadcrumb.push({ text: this.post.href, href: "#" });
    console.log({ route: this.$route, blogs, post: this.post });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.post-details {
  font-family: "Aekon", Sans-serif;
  padding-top: 30px;
  padding-bottom: 60px;
  .top-bar {
    height: 50px;
    background: $light-9;
    display: flex;
    align-items: center;
    padding-left: 42px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-top: 100px;
    .details {
      width: calc(100% - 350px);
      .title {
        font-size: 30px;
        font-weight: 600;
        line-height: 37px;
        margin-bottom: 20px;
      }
      .authore-info {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin-bottom: 30px;
        .name {
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }
        .pulished-on {
          margin-left: 8px;
        }
      }
      .post-image {
        height: 550px;
        width: 100%;
        margin-bottom: 20px;
      }
      .description {
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
      }

      .features {
        margin-top: 30px;
        .title {
          font-size: 22px;
          font-weight: 600;
          line-height: 37px;
          margin-bottom: 20px;
        }
        .feature-lists {
          .feature-item {
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
        }
      }
      .share {
        margin-top: 40px;
        .title {
          font-size: 22px;
          font-weight: 600;
          line-height: 37px;
          margin-bottom: 10px;
        }

        .buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          .btn {
            background-color: #3b5998;
            overflow: hidden;
            font-size: 12px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 4.5em;
            cursor: pointer;
            margin-right: 6px;
            height: 45px;
            text-transform: uppercase;
            border: none;

            &.twitter-btn {
              background-color: #1da1f2;
            }
            &.linkedin-btn {
              background-color: #0077b5;
            }
          }
        }
      }
    }

    .categories {
      width: 300px;
      margin-top: 100px;

      .title {
        font-size: 24px;
        font-weight: 600;
        line-height: 26px;
        border-bottom: 1px solid $light-7;
        padding-bottom: 20px;
        text-transform: capitalize;
      }

      .category-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        .category {
          .category-type {
            padding: 10px 0px 10px 0px;
            font-size: 14px;
            font-weight: 600;
            line-height: 17px;
            letter-spacing: 0.5px;
            cursor: pointer;
            text-transform: capitalize;
          }
        }
      }
    }

    @include forLarge() {
      .details {
        width: 100%;
      }
      .categories {
        display: none;
        width: 0;
      }
    }
  }

  .related-posts {
    padding-top: 80px;
    padding-bottom: 40px;

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

    .posts {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      .post {
        border: 1px solid $light-7;
        border-radius: 6px;
        max-width: 340px;
        overflow: hidden;

        .image {
          width: 100%;
          height: 250px;
        }

        .content {
          padding: 10px 20px 10px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 18px;
            margin-top: 12px;
          }

          .published {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 10px;
          }

          .read-more {
            font-size: 14px;
            font-weight: 600;
            text-decoration: underline;
            cursor: pointer;
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
