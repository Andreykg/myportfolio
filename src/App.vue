<template>
  <div>
    <div class="container-fluid">
        <NavBar></NavBar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component<App>({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>