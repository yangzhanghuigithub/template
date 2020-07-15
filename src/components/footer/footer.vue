<template>
    <div class="foot-box">
      <div class="footer-box">
        <span>
          <img src="../../static/img/footer.png" />
        </span>
        <span class="foot-con">
          <span class="item-box">
            <span class="color444 size16 bold item-first">关于我们</span>
            <span class="size12">企业介绍</span>
            <span class="size12">联系我们</span>
            <span class="size12">加入我们</span>
          </span>
          <span class="item-box">
            <span class="color444 size16 bold item-first">关于我们</span>
            <span class="size12">企业介绍</span>
            <span class="size12">联系我们</span>
            <span class="size12">加入我们</span>
          </span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .item-first {
    margin-bottom: 10px;
  }
  .footer-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
  .foot-con {
    display: flex;
    flex-direction: row;
  }
  .item-box {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    align-items: center;
  }
</style>
