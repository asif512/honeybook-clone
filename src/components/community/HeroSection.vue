<template>
  <div class="hero-section">
    <div class="content container">
      <div class="info">
        <h2 class="title">
          The free creative community for sharing opportunities
        </h2>
        <h4 class="sub-title">
          In association with <span class="rising">RISING TIDE</span>
        </h4>
        <div class="contact">
          <input class="input-field" type="text" placeholder="Full name" />
          <input class="input-field" type="text" placeholder="Company email" />
          <b-button class="trial-btn btn">join the community</b-button>
        </div>
      </div>
      <div class="element-media">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_530/v1/marketing_site/community/natalie"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.hero-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $dark-2;
  text-align: left;
  color: $white;

  .content {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      width: 60%;

      .title {
        font-size: 42px;
        line-height: 1.17;
        font-weight: 600;
      }

      .sub-title {
        font-size: 26px;
        font-weight: 300;
        margin-bottom: 40px;
        margin-top: 30px;

        .rising {
          font-weight: 600;
          text-transform: uppercase;
        }
      }

      .contact {
        display: flex;

        .input-field {
          background: $dark-4;
          border-radius: 2px;
          box-shadow: 0 0 0 0 rgba(50, 50, 50, 0);
          color: $light-4;
          display: inline-block;
          font-size: 18px;
          height: 48px;
          padding-left: 11px;
          border: 1px solid transparent;
          margin-right: 6px;
          width: 200px;
        }

        .btn {
          text-transform: uppercase;
          width: 200px;
          font-size: 14px;
        }
      }
    }

    .element-media {
      width: 40%;

      .image {
        height: 500px;
      }
    }

    @include forLarge() {
      .info {
        width: 100%;
      }

      .element-media {
        display: none;
      }
    }

    @include forMedium() {
      .info {
        .contact {
          flex-direction: column;

          .input-field {
            margin-bottom: 10px;
            width: 100%;
          }

          .btn {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
