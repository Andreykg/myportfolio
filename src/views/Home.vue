<template>
  <div>
    <div class="d-flex flex-wrap">
      <SkillItem :itemClass="'icon-vue'"></SkillItem>
      <SkillItem :itemClass="'icon-sass'"></SkillItem>
      <SkillItem :itemClass="'icon-html'"></SkillItem>
      <SkillItem :itemClass="'icon-css3'"></SkillItem>
      <SkillItem :itemClass="'icon-git'"></SkillItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SkillItem from "@/components/SkillItem.vue";

@Component({
  components: {
    SkillItem,
  },
})
export default class Home extends Vue {}
</script>
