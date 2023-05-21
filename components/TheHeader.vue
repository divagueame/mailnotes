<template>
  <header>
    <nav>
      <ul v-if="$auth.loggedIn">
        <NuxtLink to="/">Home</NuxtLink>
      </ul>
      <ul v-else>
        <NuxtLink to="/login">Log in</NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
}
</script>
