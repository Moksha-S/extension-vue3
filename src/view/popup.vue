<template>
  <div class="main_app">
    <h1>Hello {{ msg }}</h1>
    <button id="replace-button" @click="replace">Replace</button>
    <!-- <script src="popupclick.js"></script> -->
  </div>
</template>

<script>
export default {
  name: "popupView",
  data() {
    return {
      msg: "popup",
    };
  },
  methods: {
    replace() {
      console.log("check");
      document.addEventListener("DOMContentLoaded", function () {
        let replaceButton = document.getElementById("replace-button");
        replaceButton.addEventListener("click", function () {
          chrome.runtime.sendMessage({ replace: true });
        });
      });
    },
  },
};
</script>

<style>
.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
