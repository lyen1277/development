<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">1</router-link> |
      <router-link to="/about">2</router-link>
    </div> -->
    <!-- <router-view /> -->
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import bottomBar from "./components/bottomBar";
export default {
  name: "app",
  components: {
    bottomBar
  }
};
</script>

<style lang="less"></style>
