<template>
  <div class="available-positions">
    <div
      class="departments"
      v-for="(department, index) in availablePositions"
      :key="index"
    >
      <h3 class="title">{{ department.department }}</h3>
      <div class="roles">
        <div class="role" v-for="(role, i) in department.roles" :key="i">
          <a class="role-name" href="#">{{ role.name }}</a>
          <b-icon
            class="icon"
            width="20"
            height="20"
            icon="arrow-up-right-circle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailablePositions",
  props: {
    availablePositions: {
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.available-positions {
  max-width: 720px;
  text-align: left;
  margin: 0 auto;

  .departments {
    .title {
      font-size: 20px;
      font-weight: 400;
      margin-top: 48px;
      margin-bottom: 20px;
    }

    .roles {
      .role {
        border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
        border-top: 1px solid hsla(0, 0%, 100%, 0.08);
        padding: 14px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .role-name {
          font-size: 16px;
          font-weight: 300;
          color: $white;
          text-decoration: none;
          text-transform: capitalize;

          &:hover {
            color: $yellow;
          }
        }

        .icon {
          cursor: pointer;
          &:hover {
            fill: $yellow;
          }
        }
      }
    }
  }
}
</style>
