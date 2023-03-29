<template>
  <div class="about-details container">
    <!--what we do  -->
    <div class="details-section who-we-do">
      <div class="element-media">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_470/v1/marketing_site/about_page/erez.png"
          alt="img"
        />
      </div>
      <div class="content">
        <h2 class="title">What We Do</h2>
        <h3 class="description">
          <p class="para">
            HoneyBook is the leading clientflow management platform for
            independent businesses. Offering powerful tools for communication,
            contracts, invoicing, payments, and more, the platform puts
            independent professionals in control of their process and client
            experience. With HoneyBook on their side, business owners can spend
            less time on administrative tasks and more time doing the work they
            love.
          </p>
          <p class="para">
            HoneyBook is trusted by over 100,000 independent businesses that
            have booked more than $9 billion in business on the platform. That’s
            why 93% of our members say they would recommend our software to a
            friend. Learn more about our product
            <a href="#" class="link">features.</a>
          </p>
        </h3>
      </div>
    </div>

    <!--what we are  -->
    <div class="details-section who-we-are">
      <div class="element-media">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_470/v1/marketing_site/about_page/who470.jpg"
          alt="img"
        />
      </div>
      <div class="content">
        <h2 class="title">What We we</h2>
        <h3 class="description">
          <p class="para">
            HoneyBook is the leading clientflow management platform for
            independent businesses. Offering powerful tools for communication,
            contracts, invoicing, payments, and more, the platform puts
            independent professionals in control of their process and client
            experience. With HoneyBook on their side, business owners can spend
            less time on administrative tasks and more time doing the work they
            love.
          </p>
          <p class="para">
            HoneyBook is trusted by over 100,000 independent businesses that
            have booked more than $9 billion in business on the platform. That’s
            why 93% of our members say they would recommend our software to a
            friend. Learn more about our product
          </p>
          <p class="para">
            Interested in joining the team? Check out our
            <a href="#" class="link">carrers page.</a>
          </p>
        </h3>
      </div>
    </div>

    <!-- our core values -->

    <div class="details-section our-core-values">
      <div class="element-media">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_470/v1/marketing_site/about_page/core_values-new.png"
          alt="img"
        />
      </div>
      <div class="content">
        <h2 class="title">Our core values</h2>
        <h3 class="description">
          <p class="para">
            Our core values inform every decision we make, from hiring to
            product development to customer service. At HoneyBook, we live by
            five core values: people come first, raise the bar, keep it real,
            own it, and we love what we do.
          </p>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDetails",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.about-details {
  font-family: Aeonik, ProximaNova, sans-serif;

  .details-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 40px;

    &.who-we-are {
      flex-direction: row-reverse;
      padding-top: 40px;
      padding-bottom: 40px;

      @include forLarge() {
        flex-direction: column;
      }
    }

    @include forLarge() {
      flex-direction: column;
    }

    .element-media {
      width: 50%;

      @include forLarge() {
        width: 100%;
      }

      .image {
        max-width: 470px;

        @include forXl() {
          max-width: 430px;
        }
      }
    }

    .content {
      text-align: left;
      width: 50%;
      padding-left: 40px;

      @include forLarge() {
        width: 80%;
        text-align: center;
        padding-left: 0;
        margin-top: 10px;
      }
      @include forSmall() {
        width: 100%;
      }

      .title {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 24px;
        line-height: 1.18;
      }

      .description {
        font-size: 18px;
        margin: 0;
        font-weight: 400;

        .para {
          margin-bottom: 10px;

          .link {
            color: $pink-1;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
