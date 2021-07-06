<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Name: {{ name }} Age: {{ age }}<br />
      Name: {{ name1 }} Age: {{ age1 }}
      <br />

      Our list<br />

      <button @click="handleClick('title')">Title</button>
      <button @click="handleClick('location')">location</button>
      <button @click="handleClick('salary')">salary</button>
      <job-list :jobs="jobs" :order="order" @tada="doLocal" />
      <br />
      JobList sent : {{ locallySent }} <br />
      Watched sent item: {{ watchedItem }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import Job from "../types/jobs";
import OrderTerm from "../types/OrderTerm";

import JobList from "./JobList.vue";
export default defineComponent({
  name: "HelloWorld",
  components: { JobList },
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      name: "test",
      age: 25 as string | number,
    });

    const locallySent = ref("");
    const watchedItem = ref("");
    state.name = "asd";

    watch(locallySent, function (val, oldValue) {
      watchedItem.value = "Old " + oldValue + " Current " + val;
    });
    function doLocal(content: string) {
      locallySent.value = content;
    }
    const name1 = ref("Test");
    const age1 = ref<string | number>(25);

    const jobs = ref<Job[]>([
      { title: "aellie", location: "north street", salary: 2.4, id: 2 },
      { title: "dandd", location: "down town", salary: 12.22, id: 1 },
      { title: "zzz", location: "ziggy sat", salary: 1.1, id: 3 },
      ///{1title: '253', location: 'aaa',salary: 12.22 ,id: 1},
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return {
      ...toRefs(state),
      name1,
      age1,
      jobs,
      handleClick,
      order,
      locallySent,
      doLocal,
      watchedItem,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
