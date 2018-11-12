<template>
  <div class="library">
    <!--header-->
    <div class="header">
        <span class="header-name">我的图书馆</span>
      </div>
    <!--content-->
    <div class="content">
      <!--left-->
      <div class="left">
        <div class="left-header">
          <div class="header-img" @click="handleLogin">
            <img src="../../../renderer/assets/img/head.png" width="79" height="76">
          </div>
          <div class="header-name">XXX,欢迎您！</div>
        </div>
          <div  class="left-current" :class="{'isActive': on}" @click="currentShow">当前借阅</div>
          <div  class="left-local"  :class="{'isActive': close}"  @click="localShow">历史借阅</div>
      </div>
      <!--right-->
      <div class="right" v-show="showLocal">
        <div class="right-header border-bottom" >
          <span class="header-signal"></span>
          <span class="header-content">历史借阅</span>
        </div>
        <div class="right-content">
          <ul>
            <li class="border-bottom"  v-for="(item,index) of local" :key="index">
            <div class="right-li">
              <span>{{index+1}}.</span>
              <span class="book-name"> {{item.tsmc}}</span>
            </div>
            </li>
          </ul>
        </div>
        <div class="right-footer"></div>
      </div>
      <div class="right" v-show="showCurrent">
        <div class="current">
          <div class="right-header border-bottom" >
            <span class="header-signal"></span>
            <span class="header-content">当前借阅</span>
          </div>
          <div class="current-title border-bottom">
            <span class="title-num">条码号</span>
            <span class="title-name">书名</span>
            <span class="title-or">责任者</span>
            <span class="rentd">借阅日期</span>
            <span class="backd">应还日期</span>
          </div>
          <div class="current-content">
            <ul>
              <li class="border-bottom" v-for="item of current">
                <span class="content-num">{{item.tstxm}}</span>
                <span class="content-name">《{{item.tm}}》</span>
                <span class="content-or">{{item.dyzz}}</span>
                <span class="content-rentd">{{item.rdrq}}</span>
                <span class="content-backd">{{item.rdrq}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-footer"></div>
      </div>
      <!--footer-->
      <div class="footer ">
        <router-link to="/">返回</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Library',
  data () {
    return {
      on:true,
      close:false,
      showLocal: false,
      showCurrent: true,
      local: {},
      current: {}
    }
  },
  methods: {
    handleLogin () {
      this.$router.push( '/login-library')
    },
    currentShow () {
      this.on = !this.on
      this.close = !this.close
      this.showLocal=!this.showLocal
      this.showCurrent=!this.showCurrent
    },
    localShow () {
      this.close = !this.close
      this.on = !this.on
      this.showLocal=!this.showLocal
      this.showCurrent=!this.showCurrent
    }
  },
  created () {
    axios.get('/static/mock/library/local.json').then((res) => {
      const data =res.data
      if (data){
        this.local=data.local
      }
    }),
   axios.get('/static/mock/library/current.json').then((ret) => {
     const data = ret.data
     if (data) {
       this.current = data.current
     }

   })
  }
}
</script>

<style scoped>
  .library{
    position: relative;
    width: 100%;
    font-family: 'SIMHEI';
  }
  .header{
    height:160px;
    background: rgb(24,109,146);
    padding: 8px 46px 8px 50px;
  }
  .header-name{
    font-size:50px;
    color: #ffffff;
  }
  .content{
    position: absolute;
    z-index: 100;
    left: 50px;
    top: 62px;
    width: 100%;
    height: 888px;
    background: #ffffff;
    border-top: 1px solid black;
    box-shadow:0px 0px 10px #757575;
  }
  .left{
    position: relative;
    width: 130px;
    height: 816px;
    margin-left: 25px;
    margin-top: 4px;
  }
  .header-img{
    width: 79px;
    height: 76px;
    background-repeat: no-repeat;
    background-size: 79px 76px;
  }
  .library .left .header-name{
    font-size: 12px;
    background: #fff;
    color: #565656;
    font-weight: bold;
    margin-left: 4px;
    margin-top: 2px;
  }
   .left-current{
    display: inline-block;
    font-size: 25px;
    color:rgb(24,109,146);
    height:38px ;
    line-height: 38px;
    margin-left: 3px;
    margin-top: 40px;
    cursor: pointer;
  }
  .isActive{
    display: inline-block;
    height: 38px;
    line-height: 38px;
    margin-left: 3px;
    box-shadow: -5px 0px 18px #949494;
  }
  .left-local{
    display: inline-block;
    height:38px ;
    line-height: 38px;
    margin-left: 3px;
    margin-top: 30px;
    font-size: 25px;
    color:rgb(24,109,146);
    cursor: pointer;
  }
  .footer{
    font-size: 50px;
    width: 100%;
    height: 72px;
    line-height: 72px;
    background: rgb(24,109,146);
    text-align: center;
    margin-top: -3px;
  }
  .footer a{
    color: #fff;
    font-weight: bold;
    font-family: JLH;
  }
  .right{
    position: relative;
    float: left;
    width: 100%;
    height: 816px;
    margin-left: 128px;
    margin-top: -820px;
    box-shadow:0px 0px 10px #757575;
  }
  .right-header{
    position: relative;
    height: 55px;
    line-height: 55px;
    left: 0px;
    top: 0px;
  }
  .header-signal{
    position: relative;
    display:inline-block;
    width: 5px;
    height: 17px;
    background:rgb(24,109,146);
    left: 25px;
    top: 2px;
  }
  .header-content{
    position: relative;
    display: inline-block;
    font-size: 16px;
    color: rgb(161,161,156);
    left:28px
  }
  .right-content li{
    width: 100%;
    height: 77px;
    line-height: 77px;
    paddding-left:37px;
    color: rgb(161,161,156);
  }
  .right-li{
    margin-left: 37px;
  }
  .book-name{
    font-size: 16px;
    color:rgb(24,109,146);
  }
  .current-title{
    height: 33px;
    line-height: 33px;
    font-size:16px;
    color: rgb(24,109,146);
  }
  .title-num{
    margin-left: 30px;
  }
  .title-name{
    margin-left: 163px;
  }
  .title-or{
    margin-left: 164px;
  }
  .rentd{
    margin-left:138px ;
  }
  .backd{
    margin-left: 127px;
  }
  .current-content li{
    height: 55px;
    line-height: 55px;
  }
  .content-num{
    margin-left: 30px;
  }
  .content-name{
    margin-left: 143px;
  }
  .content-or{
    margin-left: 112px;
  }
  .content-rentd{
    margin-left: 85px;
  }
  .content-backd{
    margin-left: 130px;
  }
</style>
