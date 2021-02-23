<template>
  <article class="hello">
    <h1>{{ msg }}</h1>
    <h2>Welkom in my App over Track</h2>
  </article>
</template>

<script>
export default {
  name: 'Een',
  data () {
    return {
      msg: 'Hier is client side of my app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
