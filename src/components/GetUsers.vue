<template>
  <div v-for="user in userListing.data" :key="user.id">
    {{ user.email }} {{ user.first_name }} --<br />
  </div>
</template>
<script lang="ts">
import users from "../services/users";
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    const { userListing } = await users();
    if (userListing.value) {
      return {
        userListing,
      };
    }
  },
});
</script>
