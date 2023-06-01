<template>
  <div id="login-page" class="page-root card">
    <h1>
      <img src="~/static/assets/icon.svg" alt="MailNotes">
      MailNotes
    </h1>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.email" type="text">
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="password">
      </div>
      <div>
        <button type="submit">
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">

import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { LoginData } from '~/types/auth'

export default defineComponent({
  name: 'LoginPage',
  layout: 'simple',
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
<style lang="scss">
main {
  #login-page {
    margin-top: 100px;

    h1 {
      color: rgb(43, 43, 43);
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin-bottom: 15%;

      img {
        max-width: 60px;
      }
    }

    form {
      max-width: 350px;
      display: block;
      margin: 0 auto;

      button {
        width: 100%;
      }

      input[type=text],
      input[type=password] {
        width: 100%;
      }

      label {
        font-size: 12px;
        color: rgb(41, 41, 41);
      }
    }
  }
}
</style>
