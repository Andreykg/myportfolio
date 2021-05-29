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
          <li class="nav-item">
            <router-link
              class="nav-link nav-brand"
              :class="{ current: currentRouteName == 'home' }"
              :to="{ name: 'home' }"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link nav-brand"
              :class="{ current: currentRouteName == 'about' }"
              :to="{ name: 'about' }"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link nav-brand"
              :class="{ current: currentRouteName == 'portfolio' }"
              :to="{ name: 'portfolio' }"
            >
              Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link nav-brand"
              :class="{ current: currentRouteName == 'contact' }"
              :to="{ name: 'contact' }"
            >
              Contact
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

@Component<NavBar>({
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
})
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
    width: fit-content;
    border: 2px solid transparent;
    border-radius: 5px;
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
  border: 2px solid #ffffff;
  border-radius: 5px;
  color: #ffffff !important;
}

@media (max-width: 991px) {
  ul > li {
    width: fit-content;
    a {
      padding: 8px !important;
      // padding-right: 10px!important;
    }
  }
}
</style>