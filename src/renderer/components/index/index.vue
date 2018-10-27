<template>
  <div class="index">
    <div class="bg">
      <img src="../../assets/bg.jpg">
      <div class="center">
        <div class="index-header">
          巢湖学院教务系统
        </div>
        <div class="index-center">
          <ul>
            <li><router-link :to="{path:'/login-card'}" class="index-content">校园卡</router-link></li>
            <li><router-link :to="{path:'/login-class'}" class="index-content">课程表</router-link></li>
            <li><router-link :to="{path:'/login-card'}" class="index-content">图书馆</router-link></li>
            <li><router-link :to="{path:'/login-card'}" class="index-content">请期待</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>

<style>
  @import '../../assets/font/font.css';
   .index .bg{
    width: 100%;
    height: 100%;
    position: relative;
    overflow:hidden;
  }
  .index img{
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .index .center{
    position: absolute;
    top: 0;
    left: 0;
  }
  .index-header{
    position: relative;
    top: 41px;
    text-align:center;
    font-family: 'JLH';
    font-size: 10vw;
    color: #fff;
    text-align: center;
  }
  .index-center{
    display: flex;
    width: 100%;
    height: 51.1vw;
    position: relative;
    background: url("../../assets/border-shade.png") no-repeat;
    background-size: 100% 100%;
  }
  .index-center ul li{
    position: relative;
    flex: 1;
    float: left;
    width: 24vw;
    height: 23vw;
    left: 7vw;
    top: 17vw;
    background: url("../../assets/circu.png") no-repeat;
    list-style: none;
  }
  .index-center ul li a{
    color: rgba(28,100,149,1);
    -webkit-text-fill-color: rgb(28,100,149);
    -webkit-text-stroke: 2px rgb(28,100,149);
    display: block;
    font-size: 58px;
    font-family: JLH;
    margin-left: 20px;
    margin-top: 68px;
    text-decoration: none;
  }
</style>
