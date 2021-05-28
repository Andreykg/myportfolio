<template>
  <div id="app__block">
    <NavBar></NavBar>
    <main id="main">
        <!-- <router-view></router-view> -->
    </main>
    <footer>
        <div style="text-align: center; color:white; padding-top: 15px; padding-bottom: 15px;">
             Create by Antuch Andrey
        </div>
        </footer>
    <div class="main-bg">
      <canvas id="c"></canvas>
    </div>
  </div>

  <!-- <div class="container-fluid" style="z-index=1">
      <NavBar></NavBar>
    </div>
    <div class="content" style="z-index=1">
      <router-view></router-view>
    </div>
    <div class="main-bg">
      <canvas id="c"></canvas>
    </div>
    <div class="footer" style="z-index=1">
      <footer style="color: white">FOOTER</footer>
    </div>-->
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component<App>({
  components: {
    NavBar,
  },
  mounted() {
    // geting canvas by Boujjou Achraf
    const c: any = document.getElementById("c");
    if (!c) {
      return;
    }
    const ctx = c.getContext("2d");

    //making the canvas full screen
    const main = document.getElementById("app__block");
    c.height = main?.offsetHeight || 0;
    c.width = main?.offsetWidth || 0;

    //chinese characters - taken from the unicode charset
    let matrix: any =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    const fontSize = 14;
    const columns = c.width / fontSize; //number of columns for the rain
    //an array of drops - one per column
    const drops: any = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters
    function draw() {
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "green"; //green text
      ctx.font = fontSize + "px arial";
      //looping over drops
      for (let i = 0; i < drops.length; i++) {
        //a random chinese character to print
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*fontSize, y = value of drops[i]*fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > c.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }

    setInterval(draw, 35);
  },
})
export default class App extends Vue {}
</script>
<style scouped lang="scss">
//main background
// * START
.main-bg {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: black;
}
canvas {
  display: block;
}
// * END

#app__block {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>