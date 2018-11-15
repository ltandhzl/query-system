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
          <div class="header-img">
            <img src="../../../renderer/assets/img/headSuc.png" width="79" height="76">
          </div>
          <div class="header-name">{{this.$route.query.DZXM}},欢迎您！</div>
        </div>
        <transition>
          <div
            class="left-current"
            :class="{'isActive': on}"
            @click="currentShow"
          >当前借阅</div>
        </transition>
        <transition>
          <div
            class="left-local"
            :class="{'isActive': close}"
            @click="localShow"
          >历史借阅</div>
        </transition>
      </div>
      <!--right-->
      <div class="right" v-show="showLocal">
        <div class="right-header border-bottom" >
          <span class="header-signal"></span>
          <span class="header-content">历史借阅</span>
        </div>
        <div class="right-content">
          <ul>
            <li class="border-bottom"  v-for="(item,index) of listlocal" :key="index">
              <div class="right-li">
                <span>{{index+1}}.</span>
                <span class="book-name"> {{item.tsmc}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right" v-show="showCurrent">
        <div class="current">
          <div class="right-header border-bottom" >
            <span class="header-signal"></span>
            <span class="header-content">当前借阅</span>
            <div class="current-title border-bottom">
              <span class="title-num">书名</span>
              <span class="title-name">结束日期</span>
              <span class="title-or">续借次数</span>
              <span class="rentd">续借日期</span>
              <span class="backd">应还日期</span>
              <div class="current-content" ref="rightWrapper">
                <ul>
                  <li class="content-li border-bottom" v-for="item of listcurrent">
                    <span class="content-num">{{item.tstm}}</span>
                    <span class="content-name">{{item.jsrq}}</span>
                    <span class="content-or">{{item.xjbs}}</span>
                    <span class="content-rentd">{{item.xjrq}}</span>
                    <span class="content-backd">{{item.yhrq}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--footer-->
      <div class="footer">
        <router-link to="/">返回</router-link>
      </div>
    </div>
    <div id="loading" style="display: block">
      <div class="loading-block show">
        <img src="../../assets/img/index.gif" style="width:400px;height:400px;" >
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'LibrarySuc',
    data() {
      return {
        on: true,
        close: false,
        showLocal: false,
        showCurrent: true,
        listlocal: {},
        listcurrent: {},
        user: this.$route.query.SFRZH
      }
    },
    methods: {
      currentShow() {
        this.on = !this.on;
        this.close = !this.close;
        this.showLocal = !this.showLocal;
        this.showCurrent = !this.showCurrent;
        let _this=this;
        $.ajax({
          type: "GET",
          url:`http://222.195.120.110:8080/select/library/currentborrow/${this.user}`,
          dataType: "jsonp",
          async: true,
          jsonp: "callback",
          success: function(res) {
            if (res.code === 200){
              _this.listcurrent=res.data
            } else {
              alert(res.msg)
            }
          },
          error: function() {
            console.log("获取失败");
          }
        });
      },
      localShow() {
        this.close = !this.close
        this.on = !this.on
        this.showLocal = !this.showLocal
        this.showCurrent = !this.showCurrent
        let _this=this
        $.ajax({
          type: "GET",
          url:`http://222.195.120.110:8080/select/library/historyborrow/${this.user}`,
          beforeSend:function(res){
            $('#loading').show()
          },
          compete:function(){
            $('#loading').hide()
          },
          dataType: "jsonp",
          async: true,
          jsonp: "callback",
          success: function(res) {
            if (res.code === 200){
              _this.listlocal=res.data
            } else {
              alert(res.msg)
            }
          },
          error: function() {
            console.log("获取失败");
          }
        });
      },
      _initScrool () {
        new BScroll(this.$refs.rightWrapper)
      }
    },
    created () {
      this.$nextTick(()=>{
        this._initScrool()
      })
    },
    mounted () {
      new BScroll(this.$refs.rightWrapper)
    }
  }
</script>

<style scoped>
  #loading{
    position: relative;
    margin-top: 10px;
  }
  .loading-block{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: none;
  }
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
    width: 140px;
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
    width: 105px;
    height:38px ;
    line-height: 38px;
    margin-left: 4px;
    margin-top: 40px;
    cursor: pointer;
  }
  .left-local{
    display: inline-block;
    height:38px ;
    width: 105px;
    line-height: 38px;
    font-size: 25px;
    color:rgb(24,109,146);
    margin-left: 3px;
    margin-top: 30px;
    cursor: pointer;
  }
  .isActive{
    display: inline-block;
    height: 38px;
    line-height: 38px;
    margin-left: 3px;
    box-shadow: -3px -2px 4px 2px rgb(24,109,146);
  }
  .footer{
    font-size: 50px;
    width: 100%;
    height: 72px;
    line-height: 72px;
    background: rgb(24,109,146);
    text-align: center;
    margin-top: 10px;
  }
  .footer a{
    color: #fff;
    font-weight: bold;
    font-family: JLH;
  }
  .right{
    position: absolute;
    float: left;
    width: 100%;
    height: 816px;
    overflow: hidden;
    margin-left: 133px;
    padding: 7px;
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
  .content-li{
    width: 100%;
    height: 77px;
    width: 100%;
    line-height: 77px;
    paddding-left:37px;
    color: rgb(161,161,156);
  }
  .right-li{
    width: 100%;
    margin-left: 37px;
    height: 77px;
    line-height: 77px;
  }
  .book-name{
    font-size: 16px;
    color:rgb(24,109,146);
  }
  .current-title{
    width: 100%;
    height: 33px;
    line-height: 33px;
    font-size:16px;
    color: rgb(24,109,146);
  }
  .title-num{
    display: inline-block;
    width: 200px;
    margin-left: 30px;
  }
  .title-name{
    display: inline-block;
    width: 200px;
  }
  .title-or{
    display: inline-block;
    width: 200px;
  }
  .rentd{
    display: inline-block;
    width: 200px;
  }
  .backd{
    display: inline-block;
    width: 200px;
  }
  .current-content{
    position: absolute;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 760px;
  }
  .content-num{
    display: inline-block;
    width: 200px;
    margin-left: 30px;
  }
  .content-name{
    display: inline-block;
    width: 200px;
  }
  .content-or{
    display: inline-block;
    width: 200px;
  }
  .content-rentd{
    display: inline-block;
    width: 200px;
  }
  .content-backd{
    display: inline-block;
    width: 200px;
  }

</style>

