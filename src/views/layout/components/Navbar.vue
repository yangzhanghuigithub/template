<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <span style="display: flex">
      <span style="display: flex;flex-direction: row; justify-content: space-between;width: 100%">
        <span style="display: flex">
          <i style="height: 50px;line-height: 50px;font-size: 24px;font-weight: bold;margin-right: 10px">疾病队列仓库</i>
          <breadcrumb></breadcrumb>
        </span>
        <span style="margin-right: 1%;width: 31%;display: flex; flex-direction: row;justify-content: space-around">
          <el-dropdown class="icon-box avatar-container" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" :src="avatar">
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
              <router-link class="inlineBlock" to="/">
                <el-dropdown-item>
                  首页
                </el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span @click="logout" style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <i class="iconfont icontubiaozhizuo-" style="color: gray;font-size: 30px;"></i>
          <i class="icon-box iconfont iconhome" style="color: cadetblue;font-size: 30px;"></i>
          <i class="iconfont icontubiaozhizuo-" style="color: gray;font-size: 30px;"></i>
          <i class="icon-box iconfont iconliebiao2" style="color: cadetblue;font-size: 30px;"></i>
          <i class="iconfont icontubiaozhizuo-" style="color: gray;font-size: 30px;"></i>
          <i class="icon-box iconfont iconlingdang" style="color: cadetblue;font-size: 30px;"></i>
          <i class="iconfont icontubiaozhizuo-" style="color: gray;font-size: 30px;"></i>
          <i class="icon-box iconfont iconhuihua" style="color: cadetblue;font-size: 30px;"></i>
          <i class="iconfont icontubiaozhizuo-" style="color: gray;font-size: 30px;"></i>
          <i class="icon-box iconfont iconguanbi" @click="logout" style="color: darkred;font-size: 30px;"></i>
        </span>
      </span>
    </span>
  </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Breadcrumb from '@/components/Breadcrumb'
  import Hamburger from '@/components/Hamburger'

  export default {
    components: {
      Breadcrumb,
      Hamburger
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .icon-box :focus {
    color: red;
  }

  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;

    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }

    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }

    .avatar-container {
      height: 50px;

      .avatar-wrapper {
        cursor: pointer;
        position: relative;

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>

