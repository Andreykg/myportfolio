<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="nav-brand" :to="{ name: 'home' }">
        Antuch Andrey
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="icon-f icon-bars" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link nav-brand current" :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component<NavBar>({})
export default class NavBar extends Vue {}
</script>

<style scoped lang="scss">
#navbarSupportedContent li .nav-link {
  color: #ffffff;
}
.navbar-brand {
  color: #ffffff !important;
}
ul {
  margin-left: 20px;
  > li {
    margin: 0 20px;
  }
}
.navbar-toggler {
  border: 2px solid #ffffff !important;
}
.nav-brand {
  color: #ffffff;
  &:hover {
    text-decoration: none !important;
  }
}
.navbar .current {
  border: 1px solid #ffffff;
  border-radius: 5px;
}
</style>