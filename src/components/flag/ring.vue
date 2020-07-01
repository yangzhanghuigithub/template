<template>
  <div class="loading">
    <div class="left"></div>
    <div class="right"></div>
    <div class="progress">85%</div>
  </div>
</template>

<script>
    export default {
        name: "ring"
    }
</script>

<style scoped>
  .loading {
    margin: 100px auto;
    width: 8em;
    height: 8em;
    position: relative;
  }

  .loading .progress {
    position: absolute;
    width: 6em;
    height: 6em;
    background-color: white;
    border-radius: 50%;
    left: 1em;
    top: 1em;
    line-height: 6em;
    text-align: center;
  }

  .left,
  .right {
    width: 4em;
    height: 8em;
    overflow: hidden;
    position: relative;
    float: left;
    background-color: #999999
  }

  .left {
    border-radius: 8em 0 0 8em;
  }

  .right {
    border-radius: 0 8em 8em 0;
  }

  .left:after,
  .right:after {
    content: "";
    position: absolute;
    display: block;
    width: 4em;
    height: 8em;
    background-color: white;
    border-radius: 8em 0 0 8em;
    background-color: red;
  }

  .right:after {
    content: "";
    position: absolute;
    display: block;
    border-radius: 0 8em 8em 0;
  }
  .left:after {
    transform-origin: right center;
  }

  .right:after {
    transform-origin: left center;
    transform: rotateZ(45deg);
  }
</style>
