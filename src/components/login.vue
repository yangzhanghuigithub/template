<template>
  <button @click="toIndex()">11111111111111111111</button>
</template>

<script>
    export default {
        name: "login",
        data: {

        },
        methods: {
          toIndex(){
            this.$router.push("/index");
          }
        }
    }
</script>

<style scoped>

</style>
