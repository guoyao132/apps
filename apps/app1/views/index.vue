<template>
  <div class="home">
    homeq12222222222222
    <br><br><br>
    <router-link to="/">to home</router-link>
    <br><br><br>
    <router-link :to="{name: ROUTER_TYPE + 'child'}">to {{ ROUTER_TYPE + 'child'}}</router-link>
    <br><br><br><br><br><br>
    <router-view></router-view>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    computed: {
    },
    components: {
    }
  }
</script>
