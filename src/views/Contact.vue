<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mr-auto">
        <div class="mb-5">
          <h3 class="text-white mb-4">Contact Info</h3>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus blanditiis, perferendis aliquam.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-white h5 mb-3">London</h3>
            <ul class="list-unstyled mb-5">
              <li class="d-flex text-white mb-2">
                <span class="mr-3"><span class="icon-map"></span></span> 34
                Street Name, City Name Here, United States
              </li>
              <li class="d-flex text-white mb-2">
                <span class="mr-3"><span class="icon-phone"></span></span> +1
                (222) 345 6789
              </li>
              <li class="d-flex text-white">
                <span class="mr-3"><span class="icon-envelope-o"></span></span>
                info@mywebsite.com
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <h3 class="text-white h5 mb-3">New York</h3>
            <ul class="list-unstyled mb-5">
              <li class="d-flex text-white mb-2">
                <span class="mr-3"><span class="icon-map"></span></span> 34
                Street Name, City Name Here, United States
              </li>
              <li class="d-flex text-white mb-2">
                <span class="mr-3"><span class="icon-phone"></span></span> +1
                (222) 345 6789
              </li>
              <li class="d-flex text-white">
                <span class="mr-3"><span class="icon-envelope-o"></span></span>
                info@mywebsite.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="box">
          <h3 class="heading">Send us a message</h3>
          <form class="mb-5" method="post" id="contactForm" name="contactForm">
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-12 form-group">
                <label for="message" class="col-form-label">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-center">
                <button type="button" class="btn send-msg-btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          <!-- <div id="form-message-warning mt-4"></div>
          <div id="form-message-success">Your message was sent, thank you!</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.heading,
.col-form-label {
  color: #ffffff;
}
.send-msg-btn {
  color: #ffffff;
  border-color: #ffffff;
  &:hover {
    color: #23afcd;
    border-color: #ffffff;
    background-color: #ffffff;
  }
}
</style>
