<template>
  <div class="MainHome1">
    MainHome1

    <router-link to="/">to home</router-link>
    <router-link to="/mainhome/mainhomechild">to mainhomechild</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "MainHome1",
    data: function () {
      return {}
    },
    methods: {},
    mounted() {

    },
  }
</script>

<style lang='less' scoped>
  .MainHome1 {

  }

</style>