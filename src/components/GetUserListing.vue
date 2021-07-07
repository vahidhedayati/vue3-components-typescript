<template>
  <div class="hell">
    <suspense>
      <template #default>
        {{ userListing }}@userListing
        <AsyncUser
          v-for="user in userListing.data"
          :key="user.id"
          :user="user"
        />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
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
    console.log("a1aaa");
    const { userListing } = await users();
    console.log(" 0aaa0 " + JSON.stringify(userListing));
    return {
      userListing,
    };
  },
  components: {
    AsyncUser,
  },
};
</script>
