<template>
  <div class="job-list">
    Sorting by {{ order }}
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJob" :key="job.id">
        {{ job.title }} - {{ job.location }} - {{ job.salary }} <br />
      </li>
    </transition-group>
    <button @click="doThis('cab')">Get cab</button>
    <button @click="doThis('plane')">Get plane</button>
    <button @click="doThis('train')">Get Train</button>
    <button @click="doThis('bus')">Get Bus</button>
  </div>
</template>
<script lang="ts">
import Job from "@/types/jobs";
import OrderTerm from "../types/OrderTerm";
import { defineComponent, PropType, computed } from "vue";

export default defineComponent({
  //props: ['jobs'],
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props, context) {
    const orderedJob = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    const doThis = (something: string) => {
      context.emit("tada", something);
    };
    return { orderedJob, doThis };
  },
});
</script>
<style scoped>
.list-move {
  transition: all 1s;
}
</style>
