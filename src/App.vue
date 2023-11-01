<script>
import AppBanner from './components/AppBanner.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  setup() {
    return {};
  },
  components: { AppBanner, AppHeader }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppBanner title="GourmetGo"></AppBanner>

  <section class="vue-home">
    <router-view></router-view>
  </section>
</template>

<style lang="scss">
// @use './styles/general.scss';
</style>
