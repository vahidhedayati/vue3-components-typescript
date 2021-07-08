<template>
  <div class="hell">
    <AsyncUser v-for="user in userListing.data" :key="user.id" :user="user" />
  </div>
</template>
<script lang="ts">
import { defineAsyncComponent } from "vue";
import users from "../services/users";
import Loading from "./Loading.vue";
const AsyncUser = defineAsyncComponent({
  loader: () => import("./User.vue" /* webpackChunkName: "user" */),
  loadingComponent: Loading,
  delay: 200,
  suspensible: true,
});

export default {
  async setup() {
    const { userListing } = await users();
    return {
      userListing,
    };
  },
  components: {
    AsyncUser,
  },
};
</script>
