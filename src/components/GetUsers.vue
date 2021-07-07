<template>
  <div v-for="user in userListing.data" :key="user.id">
    {{ user.email }} --<br />
  </div>
  <Suspense>
    <template #default>
      BBBBBBBb
      <div v-for="user in userListing.data" :key="user.id">
        {{ user.email }} {{ user.first_name }} --<br />
      </div>
    </template>
    <template #fallback>
      <span>Loading... sasssssssssssssssssssssssssssssssssssssssss </span>
    </template>
  </Suspense>
</template>
<script lang="ts">
import users from "../services/users";
import { defineComponent } from "vue";

export default defineComponent({
  async setup() {
    console.log("a1");
    const { userListing } = await users();
    if (userListing.value) {
      console.log(" -aaaa->... " + userListing.value.data[0].email);

      console.log(" 00 " + JSON.stringify(userListing));
      return {
        userListing,
      };
    }
  },
});
</script>
