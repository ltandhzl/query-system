<template>
  <div>
    <div class="library">
      <!--header-->
      <div class="header">
        <span class="header-name">我的图书馆</span>
        <input class="header-input">
        <span class="header-search"></span>
      </div>
      <!--content-->
      <div class="content">
        <!--left-->
        <div class="left">
          <div class="left-header">
            <div class="header-img" @click="handleLogin">
              <img src="../../assets/img/headSuc.png" width="79" height="76">
            </div>
            <div class="header-name">{{loginSuc.dzxm}},欢迎您！</div>
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
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginSuc',
  data () {
    return {
      on:true,
      close:false,
      showLocal: false,
      showCurrent: true,
      local: {},
      current: {},
      loginSuc:{}
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
    axios.get('/static/mock/local.json').then((res) => {
      const data =res.data
      if (data){
        this.local=data.local
      }
    }),
      axios.get('/static/mock/current.json').then((res) => {
        const data = res.data
        if (data) {
          this.current = data.current
        }
      }),
      axios.get('/static/mock/loginSuc.json').then((res) => {
        const data = res.data
        if(data){
          this.loginSuc=data.loginSuc
        }
      })
  }
}
</script>

<style scoped>
  .library{
    position:relative;
    width: 1280px;
    height: 100%;
    font-family: 'SIMHEI';
  }
  .header{
    position: relative;
    height:160px;
    background: rgb(24,109,146);
    padding: 8px 46px 8px 50px;
  }
  .header-name{
    float: left;
    font-size:50px;
    font-family: JLH;
    color: #ffffff;
  }
  .header-input{
    position: absolute;
    width:400px;
    height: 47px;
    border-radius: 15px;
    background: #fff;
    vertical-align: top;
    margin-left: 443px;
  }
  .header-search{
    display: inline-block;
    float: right;
    width: 44px;
    height: 46px;
    margin-right: 38px;
    color: #fff;
    background:url("../../../renderer/assets/img/search.png") no-repeat;
    background-size: 44px 46px;
  }
  .content{
    position: absolute;
    z-index: 100;
    left: 50px;
    top: 62px;
    width: 1184px;
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
  left-header{
    position: relative;
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
    margin-top: 31px;
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
    position: relative;
    display: block;
    font-size: 50px;
    height: 72px;
    line-height: 72px;
    background: rgb(24,109,146);
    text-align: center;
  }
  .footer a{
    color: #fff;
    font-weight: bold;
    font-family: JLH;
  }
  .right{
    position: relative;
    width: 1054px;
    height: 816px;
    margin-left: 128px;
    margin-top: -820px;
    box-shadow:0px 0px 10px #757575;
  }
  .right-header{
    position: relative;
    width: 100%;
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
  .right-content{
    position: relative;
    list-style: number;
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
