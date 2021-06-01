<template>
  <div>
    <div class="d-flex flex-wrap">
      <SkillItem :itemClass="'icon-vue lg'"></SkillItem>
      <SkillItem :itemClass="'icon-sass lg'"></SkillItem>
      <SkillItem :itemClass="'icon-html lg'"></SkillItem>
      <SkillItem :itemClass="'icon-css3 lg'"></SkillItem>
      <SkillItem :itemClass="'icon-git lg'"></SkillItem>
      <SkillItem :itemClass="'icon-mssql xlg'">
          <span class="icon-mssql path1"></span>
          <span class="icon-mssql path2"></span>
          <span class="icon-mssql path3"></span>
          <span class="icon-mssql path4"></span>
      </SkillItem>
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
