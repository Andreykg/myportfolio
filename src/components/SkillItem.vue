<template>
  <div class="skill__item">
    <i class="icon-f" :class="itemClass">
        <slot></slot>
    </i>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: { itemClass: String },
  components: {},
})
export default class SkillItem extends Vue {}
</script>
<style scoped>
.skill__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #ffffff;
    margin: 5px;
    border-radius: 50%;
}
</style>
