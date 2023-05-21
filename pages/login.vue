<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.email" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text">
      </div>
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">

import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { LoginData } from '~/types/auth'

export default defineComponent({
  setup () {
    const { $auth } = useContext()
    const login: LoginData = {
      email: '',
      password: ''
    }

    const userLogin = async () => {
      try {
        await $auth.loginWith('local', { data: login })
        $auth.redirect('home')
      } catch (err) {}
    }
    return {
      login,
      userLogin
    }
  }
})

</script>
