<template>
  <article>
      <h1>Register</h1>
      <input type="email" name="email" id="email" placeholder="Email" v-model="email"><br>
      <input type="password" name="password" id="password" placeholder="Password" v-model="password"><br>
      <button class="btn" @click="register" type="submit">Register</button>
  </article>
</template>

<script>
// Awordane Authentication wa estefadeh ye aan
import Authentication from '@/service/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'Hooman',
      password: 1234567
    }
  },

  methods: {
    async register () {
      await Authentication.register({
        email: this.email,
        password: this.password
      })
    //   console.log(this.email, this.password)
    }
  }

  // Negah kardane variable haye bala
/*   watch: {
    email (value) {
      console.log('Email is veranderd', value)
    }
  }, */
  // Taghir dadane variable haye bala
/*   mounted () {
    setTimeout(() => {
      this.email = 'Annemee'
    }, 2000)
  } */
}
</script>

<style scoped>
    article{
        background-color: blue;
        color: #fff;
        padding: 10px;
    }
</style>
