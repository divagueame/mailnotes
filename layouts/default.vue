<template>
  <div id="__layout_root">
    <TheHeader />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
