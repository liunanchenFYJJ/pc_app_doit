<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 960px;
  font-family: 'Microsoft Yahei';
  font-weight: 700;
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    #app {
      height: 100%;
      background: #f7f7f7;
    }
  }
}
</style>
