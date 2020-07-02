<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <div style="display: flex">
      <span style="display: flex;flex-direction: row; justify-content: space-between;width: 100%;">
        <span style="display: flex">
          <span style="height: 50px;line-height: 50px;font-size: 24px;font-weight: bold;margin-right: 10px">疾病队列仓库</span>
          <breadcrumb></breadcrumb>
        </span>
        <span style="margin-right: 1%;width: 40%;display: flex; flex-direction: row;justify-content: space-around">
          <el-dropdown class="avatar-container" style="margin-top: 5px" trigger="click">
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
          <span class="name-box"><span>{{name}}</span></span>
          <i class="iconfont icontubiaozhizuo-"></i>
          <i class="icon-box iconfont iconhome"></i>
          <i class="iconfont icontubiaozhizuo-"></i>
          <i class="icon-box iconfont iconliebiao2"></i>
          <i class="iconfont icontubiaozhizuo-"></i>
          <el-badge value="9+" class="item" style="margin-top: 20px">
            <i class="icon-box iconfont iconlingdang"></i>
          </el-badge>
          <i class="iconfont icontubiaozhizuo-"></i>
          <i class="icon-box iconfont iconhuihua"></i>
          <i class="iconfont icontubiaozhizuo-"></i>
          <i class="icon-box-shut iconfont iconguanbi" @click="logout" style="color: darkred;font-size: 25px;margin-top: 20px"></i>
        </span>
      </span>
    </div>
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
        'avatar',
        'name'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
      logout() {
        this.$confirm('确定退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消登出操作'
          });
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .name-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    color: darkgreen;
  }
  .icon-box {
    color: cadetblue;
    font-size: 26px;
    margin-top: 20px;
  }
  .icon-box:hover {
    cursor: pointer;
    color: greenyellow !important;
  }
  .icon-box-shut:hover{
    cursor: pointer;
    color: red !important;
  }

  .icontubiaozhizuo- {
    color: gray;
    font-size: 30px;
    margin-top: 20px;
  }

  .navbar {
    height: 50px;
    line-height: 18px;
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

