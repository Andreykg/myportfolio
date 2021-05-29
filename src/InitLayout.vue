<template>
  <div id="init__block">
    <div id="main">
      <div>
        <div style="flex: 1">
          <div>Hello! <i class="icon-f icon-chat" /></div>
          <div>
            I'm <span>Antuch Andrey</span> I'm a full-stack web developer
          </div>
        </div>
        <router-link
          :to="{ name: 'home' }"
          class="btn-flip"
          data-go="Go"
          data-front="View my work"
        ></router-link>
      </div>
    </div>
    <div class="main-bg">
      <canvas id="c"></canvas>
    </div>
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
  mounted() {
    // geting canvas by Boujjou Achraf
    const c: any = document.getElementById("c");
    if (!c) {
      return;
    }
    const ctx = c.getContext("2d");

    //making the canvas full screen
    const main = document.getElementById("init__block");
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
canvas {
  display: block;
}

#init__block {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;

  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  > div {
    padding: 15px;
    font-size: 30px;
    color: #ffffff;
    span {
      color: #d41b68;
      font-size: 34px;
    }
  }
}

//button
$speed: 0.5s;

.btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";
  text-transform: uppercase;
  // border-radius: 5px;

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #323237;
    display: block;
    transition: $speed;
    position: absolute;
    background: #adadaf;
    content: attr(data-go);
    transform: translateY(-50%) rotateX(90deg);
    border-radius: 5px;
  }

  &:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: #adadaf;
    display: block;
    padding: 0 30px;
    line-height: 40px;
    transition: $speed;
    position: relative;
    background: #323237;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);

    border-radius: 5px;
  }
}
</style>