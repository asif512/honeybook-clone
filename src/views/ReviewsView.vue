<template>
  <div class="reviews-view container">
    <div class="left-menu">
      <div class="review-card rating-card">
        <h2 class="title">rating</h2>
        <div class="types">
          <div
            class="type"
            v-for="(type, index) in ratingType"
            :key="index"
            :class="{ seleted: selectedRatingType == type.label }"
            @click="handleRatingTye(type.label)"
          >
            <b-icon v-if="type.label !== 'any'" icon="star-fill" class="icon" />
            <span class="label">{{ type.label }}</span>
          </div>
        </div>
        <h2 class="title">location</h2>
        <b-form-select
          class="select-field"
          id="input-3"
          v-model="seletedCountry"
          :options="countries"
        ></b-form-select>

        <b-input-group size="sm" class="search-field">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="search"
            placeholder="City or Zip code"
          ></b-form-input>
        </b-input-group>

        <h2 class="title">Company status</h2>
        <div class="checkbox-wrapper">
          <label class="checkbox-label"> Verified</label>
          <input type="checkbox" class="checkbox-field" value="" />
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-label"> Claimed</label>
          <input type="checkbox" class="checkbox-field" value="" />
        </div>
      </div>
      <div class="review-card related-category-card">
        <h2 class="title">related category</h2>
        <div class="categories">
          <div
            class="category"
            v-for="(category, index) in stores"
            :key="index"
          >
            <span class="name">{{ category.categoryName }}</span>
            <span class="total-reviews">{{ category.reviews.length }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content-menu">
      <div class="top-bar">
        <div class="label">1-10 of 20 results</div>
        <div class="right-wrapper">
          <span class="label">Sort by</span>
          <b-form-select
            class="select-field"
            id="input-3"
            v-model="seletedSortType"
            :options="sortBy"
          ></b-form-select>
        </div>
      </div>
      <b-alert class="alert-wrapper" show>
        <b-icon class="icon" icon="exclamation-circle" />
        <span class="label"
          >What does sorting by relevance mean? <strong>Read more</strong></span
        >
      </b-alert>
      <div class="stores-wrapper">
        <div
          class="store review-card"
          v-for="(store, index) in stores"
          :key="index"
        >
          <div class="store-information">
            <div class="content">
              <img class="logo" :src="store.logo" alt="logo" />
              <div class="content-details">
                <h2 class="name">{{ store.storeName }}</h2>
                <div class="reviews-wrapper">
                  <img class="rating-img" :src="store.rating" alt="" />
                  <span class="trust-store"
                    >TrustScore {{ store.trustScore }}</span
                  >
                  <span class="total-reviews"
                    >{{ store.totalReviews }} reviews</span
                  >
                </div>
              </div>
              <div class="most-relevent" v-if="store.badge">
                {{ store.badge }}
              </div>
            </div>
          </div>
          <div class="latest-reviews-wrapper">
            <div class="top-bar">
              <div class="left-side">
                <div class="contact">
                  <b-icon
                    :id="`address-${index}`"
                    href="#"
                    tabindex="0"
                    class="icon"
                    icon="egg"
                  />

                  <b-popover
                    :target="`address-${index}`"
                    triggers="focus"
                    placement="bottom"
                  >
                    Danger variant popover
                  </b-popover>
                </div>
                <div class="contact">
                  <b-icon
                    :id="`location-${index}`"
                    href="#"
                    tabindex="0"
                    class="droplet-fill"
                    icon="circle"
                  />

                  <b-popover
                    :target="`location-${index}`"
                    triggers="focus"
                    placement="bottom"
                  >
                    Danger variant popover
                  </b-popover>
                </div>
                <span class="provider-coupon-label provider">{{
                  store.serviesType
                }}</span>
                <span class="provider-coupon-label coupon">{{
                  store.coupon
                }}</span>
              </div>
              <div class="right-side">
                <span class="label">latest review</span>
                <b-icon
                  @click="handleCollapse(store)"
                  :icon="
                    store.isCollpased ? 'caret-up-fill' : 'caret-down-fill'
                  "
                  class="icon"
                />
              </div>
            </div>
            <div class="latest-reviews" v-if="store.isCollpased">
              <review-card
                class="latest-review"
                v-for="(review, i) in store.reviews"
                :review="review"
                :key="i"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <b-pagination
          size="lg"
          v-model="currentPage"
          total-rows="9"
          per-page="3"
          aria-controls="my-table"
        ></b-pagination>
      </div>

      <div class="recent-reviews">
        <h2 class="title">Recently reviewed companies</h2>
        <div
          class="btn previous"
          @click="handlePrevious"
          v-if="isDisablesPrevioustButton"
        >
          <b-icon class="icon" icon="caret-left-fill" />
        </div>
        <div class="recent-reviews-card">
          <div
            class="recent-review-card review-card"
            v-for="(reviewcard, index) in recentReview"
            :key="index"
            :style="getTranslate"
          >
            <h2 class="name">{{ reviewcard.name }}</h2>
            <div class="reviews">
              <img
                class="review-image"
                :src="reviewcard.reviewImage"
                alt="img"
              />
              <span class="total-reviews">{{ reviewcard.totalReviews }}</span>
              <div class="info">
                <span class="coupon">{{ reviewcard.coupon }}</span>
                <span class="provider">{{ reviewcard.provider }}</span>
              </div>
              <review-card class="review-sub-card" :review="reviewcard" />
            </div>
          </div>
        </div>
        <div class="btn next" @click="handleNext" v-if="isDisablesNextButton">
          <b-icon class="icon" icon="caret-right-fill" />
        </div>
      </div>
      <div class="recent-reviews newest">
        <h2 class="title">Newest companies</h2>
        <div
          class="btn previous"
          @click="handlePreviousNew"
          v-if="isDisablesPrevioustButtonNew"
        >
          <b-icon class="icon" icon="caret-left-fill" />
        </div>
        <div class="recent-reviews-card">
          <div
            class="recent-review-card review-card"
            v-for="(newReview, index) in newest"
            :key="index"
            :style="getTranslateNew"
          >
            <h2 class="name">{{ newReview.name }}</h2>
            <div class="reviews">
              <img
                class="review-image"
                :src="newReview.reviewImage"
                alt="img"
              />
              <span class="total-reviews">{{ newReview.totalReviews }}</span>
              <div class="info">
                <span class="coupon">{{ newReview.coupon }}</span>
                <span class="provider">{{ newReview.provider }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="btn next"
          @click="handleNextNew"
          v-if="isDisablesNextButtonNew"
        >
          <b-icon class="icon" icon="caret-right-fill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from "@/components/reviews/ReviewCard.vue";
export default {
  name: "ReviewsView",
  components: {
    "review-card": ReviewCard,
  },
  data() {
    return {
      currentPage: 1,
      selectedRatingType: "",
      ratingType: [
        {
          label: "any",
        },
        {
          label: "3.0+",
        },
        {
          label: "4.0+",
        },
        {
          label: "4.5+",
        },
      ],
      seletedCountry: null,
      countries: [
        { text: "United state", value: null },
        "Chicago",
        "Caneda",
        "England",
        "Australia",
        "Europe",
      ],
      seletedSortType: null,
      sortBy: [
        { text: "Most relevant", value: null },
        "Hightest numbers of review",
        "Most recent review",
      ],
      stores: [
        {
          id: 1,
          categoryName: "bazar",
          storeName: "SimplyBestCoupons.com",
          logo: "https://consumersiteimages.trustpilot.net/business-units/6032026870af14000184e446-198x149-1x.jpg",
          rating:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg",
          trustScore: "4.3",
          totalReviews: 98,
          contact: {
            email: "simplebestcoupon@info.com",
            domain: "SimplyBestCoupons.com",
            location: "united state",
          },
          serviesType: "Non-Bank Financial Service",
          coupon: "coupon services",
          badge: "most relevant",
          isCollpased: false,
          reviews: [
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
          ],
        },
        {
          id: 2,
          categoryName: "doller store",
          storeName: "fetch",
          logo: "https://consumersiteimages.trustpilot.net/business-units/5ec39918e9cae40001f09fb8-198x149-1x.jpg",
          rating:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg",
          trustScore: "4.3",
          totalReviews: 98,
          contact: {
            email: "fetch@info.com",
            domain: "SimplyBestCoupons.com",
            location: "united state",
          },
          serviesType: "Non-Bank Financial Service",
          coupon: "coupon services",
          badge: "most relevant",
          isCollpased: false,
          reviews: [
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
          ],
        },
        {
          id: 3,
          categoryName: "doller store",
          storeName: "fetch",
          logo: "https://consumersiteimages.trustpilot.net/business-units/5ec39918e9cae40001f09fb8-198x149-1x.jpg",
          rating:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg",
          trustScore: "4.3",
          totalReviews: 98,
          contact: {
            email: "fetch@info.com",
            domain: "SimplyBestCoupons.com",
            location: "united state",
          },
          serviesType: "Non-Bank Financial Service",
          coupon: "coupon services",
          badge: "most relevant",
          isCollpased: false,
          reviews: [
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
          ],
        },
        {
          id: 4,
          categoryName: "doller store",
          storeName: "fetch",
          logo: "https://consumersiteimages.trustpilot.net/business-units/5ec39918e9cae40001f09fb8-198x149-1x.jpg",
          rating:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg",
          trustScore: "4.3",
          totalReviews: 98,
          contact: {
            email: "fetch@info.com",
            domain: "SimplyBestCoupons.com",
            location: "united state",
          },
          serviesType: "Non-Bank Financial Service",
          coupon: "coupon services",
          badge: "most relevant",
          isCollpased: false,
          reviews: [
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
            {
              date: "april 8, 2023",
              logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
              review:
                "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
              description:
                "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
            },
          ],
        },
      ],
      recentReview: [
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
      ],
      newest: [
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
        {
          name: "eliterebate.com",
          reviewImage:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg",
          totalReviews: "4.1 564",
          coupon: "price comparison site",
          provider: "discount store",
          date: "10 hour ago",
          logo: "https://user-images.trustpilot.com/6434bbea5d1c3800149e2530/73x73.png",
          review:
            "https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg",
          description:
            "It's easy they apply coupon codes to your order at checkout, it doesn't get easier!",
        },
      ],
      translate: 0,
      initialTranslate: 260,
      translateNew: 0,
      initialTranslateNew: 260,
    };
  },
  computed: {
    isDisablesNextButton() {
      return this.translate === 0 ? false : true;
    },
    isDisablesNextButtonNew() {
      return this.translateNew === 0 ? false : true;
    },
    isDisablesPrevioustButton() {
      return this.translate ===
        -(this.initialTranslate * (this.recentReview.length - 3))
        ? false
        : true;
    },
    isDisablesPrevioustButtonNew() {
      return this.translateNew ===
        -(this.initialTranslateNew * (this.newest.length - 3))
        ? false
        : true;
    },
    getTranslate() {
      return `transform: translateX(${this.translate}px;`;
    },
    getTranslateNew() {
      return `transform: translateX(${this.translateNew}px;`;
    },
  },
  methods: {
    handleRatingTye(type) {
      this.selectedRatingType = type;
    },
    handleCollapse(store) {
      this.stores.forEach((s) => {
        if (s.id === store.id) {
          s.isCollpased = !store.isCollpased;
        }
      });
    },
    handlePrevious() {
      let count = this.initialTranslate * (this.recentReview.length - 1 - 3);
      if (count >= this.translate * -1) {
        this.translate = this.translate - this.initialTranslate;
      }
    },
    handlePreviousNew() {
      let count = this.initialTranslateNew * (this.newest.length - 1 - 3);
      if (count >= this.translateNew * -1) {
        this.translateNew = this.translateNew - this.initialTranslateNew;
      }
    },
    handleNext() {
      let count = this.translate + this.initialTranslate;
      if (count <= 0) {
        this.translate = count;
      }
    },
    handleNextNew() {
      let count = this.translateNew + this.initialTranslateNew;
      if (count <= 0) {
        this.translateNew = count;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.reviews-view {
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  text-align: left;
  .left-menu {
    width: 330px;

    .rating-card {
      padding: 32px 24px;

      .title {
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.17px;
        margin-bottom: 16px;
        font-weight: 600;
        text-transform: capitalize;
      }

      .types {
        border: 1px solid $gray-1;
        display: flex;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 24px;
        .type {
          padding: 8px 0;
          text-align: center;
          border-right: 1px solid $gray-1;
          width: 25%;
          cursor: pointer;
          .label {
            font-size: 14px;
            line-height: 1.2;
            letter-spacing: -0.15px;
            font-weight: 600;
            text-transform: capitalize;
          }
          &:nth-child(4) {
            border-right: none;
          }

          .icon {
            margin-right: 6px;
          }

          &.seleted {
            color: $blue-2;
            background-color: $light-10;

            &.icon {
              fill: $blue-2;
            }
          }
        }
      }

      .select-field {
        margin-bottom: 16px;
      }

      .search-field {
        border-radius: 4px;
        display: block;
        width: 100%;
        background: transparent;
        cursor: progress;
        margin-bottom: 12px;
        height: 48px;
        display: flex;
        align-items: center;
        border: 1px solid $gray-1;
        margin-bottom: 24px;

        .input-group-prepend {
          .input-group-text {
            background: transparent;
            border: none;
          }
        }

        .form-control {
          color: $grey-6;
          letter-spacing: 0.5px;
          font-weight: 400;
          font-size: 16px;
          border: none;
          background: transparent;

          &:focus {
            box-shadow: none;
          }
        }
      }

      .checkbox-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid $light-7;
        padding: 16px 0;
        .checkbox-label {
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.18px;
        }
        .checkbox-field {
          width: 20px;
          height: 20px;
        }
      }
    }

    .related-category-card {
      margin-top: 16px;
      padding: 32px 24px;

      .title {
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: -0.17px;
        margin-bottom: 16px;
        font-weight: 600;
        text-transform: capitalize;
      }

      .categories {
        margin-top: 10px;
        .category {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid $light-7;
          padding: 12px 0;
          .name {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
            letter-spacing: 0.18px;
            text-transform: capitalize;
          }

          .total-reviews {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
            letter-spacing: 0.18px;
          }
        }
      }
    }
  }
  .content-menu {
    width: calc(100% - 350px);
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .label {
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
        letter-spacing: 0.15px;
      }

      .right-wrapper {
        display: flex;
        align-items: center;

        .label {
          margin-right: 8px;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: 0.15px;
        }
        .select-field {
          width: 300px;
          margin-bottom: 0;
        }
      }
    }

    .alert-wrapper {
      background: $blue-3;
      margin-top: 20px;
      color: $dark-1;
      .icon {
        margin-right: 12px;
        fill: $dark-1;
      }
    }

    .stores-wrapper {
      margin-top: 16px;
      position: relative;

      .store {
        margin-bottom: 16px;
        .store-information {
          padding: 16px 16px 24px;

          .content {
            display: flex;
            margin-left: 30px;
            .logo {
              width: 72px;
              height: auto;
            }

            .content-details {
              display: flex;
              flex-direction: column;
              margin-left: 12px;
              .name {
                margin-bottom: 8px;
                font-size: 16px;
                font-weight: 600;
                line-height: 1.2;
                letter-spacing: -0.17px;
                text-transform: capitalize;
              }
              .reviews-wrapper {
                display: flex;
                align-items: center;
                .rating-img {
                  height: 20px;
                  line-height: 20px;
                  width: auto;
                }
                .trust-store {
                  margin-left: 12px;
                  font-size: 14px;
                  font-weight: 400;
                  letter-spacing: 0.15px;
                }
                .total-reviews {
                  font-size: 14px;
                  font-weight: 400;
                  letter-spacing: 0.15px;
                  margin-left: 16px;
                }
              }
            }

            .most-relevent {
              position: absolute;
              top: 16px;
              right: 12px;
              background-color: $light-11;
              padding: 4px 8px;
              border-radius: 2px;
              text-transform: uppercase;
              font-size: 10px;
              line-height: 0.75rem;
              font-weight: 400;
            }
          }
        }

        .latest-reviews-wrapper {
          padding: 0 16px 8px;
          border-top: 1px solid #ccc;

          .top-bar {
            display: flex;
            justify-content: space-between;
            .left-side {
              display: flex;
              align-items: center;
              padding: 12px 16px;

              .contact {
                .icon {
                  margin: 0 6px;
                }
              }

              .provider-coupon-label {
                font-size: 12px;
                line-height: 1.4;
                letter-spacing: 0.13px;
                font-weight: 400;
                margin-left: 16px;
                text-transform: capitalize;
              }
            }
            .right-side {
              display: flex;
              align-items: center;
              .label {
                font-size: 0.875rem;
                line-height: 1.25rem;
                padding: 8px;
                color: $blue-2;
                text-transform: capitalize;
                margin-right: 4px;
              }
              .icon {
                fill: $blue-2;
                cursor: pointer;
              }
            }
          }
          .latest-reviews {
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 16px;
            overflow-x: auto;

            .latest-review {
              min-width: 228px;
              width: 228px;
            }

            &::-webkit-scrollbar {
              height: 6px;
            }

            &::-webkit-scrollbar-thumb {
              background: $light-7;
              border-radius: 4px;
            }
          }
        }

        &:hover {
          box-shadow: 0 0 8px 0 #0000004d;
        }
      }
    }
    .pagination {
      margin: 30px;
      display: flex;
      justify-content: center;
    }
    .recent-reviews {
      position: relative;
      .title {
        margin-bottom: 32px;
        letter-spacing: -0.2px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.2;
      }
      .recent-reviews-card {
        overflow: hidden;
        display: flex;
        gap: 16px;
        .recent-review-card {
          padding: 16px;
          width: 244px;
          min-width: 244px;
          max-width: 244px;
          transition: all 1.5s ease;
          .name {
            margin-bottom: 8px;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.17px;
            text-transform: capitalize;
          }

          .reviews {
            .review-image {
              width: 88px;
              height: 16px;
            }
            .total-reviews {
              margin-left: 12px;
              font-size: 14px;
              font-weight: 400;
              letter-spacing: 0.15px;
            }

            .info {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .coupon {
                font-size: 12px;
                font-weight: 400;
                letter-spacing: 0.15px;
                text-transform: capitalize;
              }
              .provider {
                font-size: 12px;
                font-weight: 400;
                letter-spacing: 0.15px;
                text-transform: capitalize;
              }
            }
            .review-sub-card {
              margin-top: 16px;
            }
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
        z-index: 10;

        .icon {
          fill: $white;
        }

        &.previous {
          position: absolute;
          left: -60px;
          top: 160px;
        }
        &.next {
          position: absolute;
          right: -60px;
          top: 160px;
        }
      }

      &.newest {
        margin-top: 50px;

        .btn {
          &.previous {
            position: absolute;
            left: -60px;
            top: 86px;
          }
          &.next {
            position: absolute;
            right: -60px;
            top: 86px;
          }
        }
      }
    }
  }

  @include forLarge() {
    margin-top: -78px;
    flex-direction: column;

    .left-menu {
      width: 100%;
      margin-bottom: 60px;
    }

    .content-menu {
      width: 100%;

      .recent-reviews {
        .btn {
          &.previous {
            top: auto;
            left: 0;
            bottom: -50px;
          }
          &.next {
            top: auto;
            right: auto;
            left: 50px;
            bottom: -50px;
          }
        }

        &.newest {
          .title {
            margin-top: 40px;
          }
          .btn {
            &.previous {
              top: auto;
              left: 0;
              bottom: -50px;
            }
            &.next {
              top: auto;
              right: auto;
              left: 50px;
              bottom: -50px;
            }
          }
        }
      }
    }
  }
}
</style>
