<template>
  <div id="app__block">
    <NavBar></NavBar>
    <main id="main__content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <footer>
      <div>Create by Antuch Andrey</div>
    </footer>
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
<style scouped lang="scss">
// переход между страницами
// start
.fade-enter,
.fade-leave-to {
  transition: translateX(3em);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
// переход между страницами
// end

//main background
// * START
#app__block {
  background: linear-gradient(-45deg, #ee7752, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
// * END

#app__block {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main__content {
  flex: 1;
}

footer > div {
  text-align: center;
  color: white;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>