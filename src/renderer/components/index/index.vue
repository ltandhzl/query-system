<template>
  <div>
    <div class="bg">
      <img src="../../assets/img/bg.jpg">
    </div>
    <div class="index">
      <div class="index-header">
        巢湖学院查询系统
      </div>
      <div class="center">
        <div class="index-center">
          <ul>
            <li><router-link :to="{path:'/login-card'}" class="index-content">校园卡</router-link></li>
            <li><router-link :to="{path:'/login-class'}" class="index-content">课程表</router-link></li>
            <li><router-link :to="{path:'/library'}" class="index-content">图书馆</router-link></li>
            <li><router-link :to="{path:'/login-card'}" class="index-content">新期待</router-link></li>
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
   .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    overflow:hidden;
  }
  .bg img{
    background: center center no-repeat;
    width: 100%;
    height: 100%;
  }
  .index-header{
    position: absolute;
    font-family: 'JLH';
    font-size: 166px;
    color: #fff;
    margin-top:83px;
    margin-left:200px;
  }
  .index .center{
    position:absolute;
    width: 100%;
    height:100%;
    background: url("../../assets/img/border-shade.png") no-repeat;
    background-size:100% 100%;
    margin-top: 173px;
  }
  .index ul{
    margin-left: 144px;
  }
  .index-center ul li{
    position: relative;
    display: inline-block;
    float: left;
    width:218px;
    height:224px;
    background-size:218px 224px;
    background: url("../../assets/img/circu.png") no-repeat;
    margin-left: 135px;
    margin-top:400px;
  }
  .index-center ul li a{
    position: relative;
    display: block;
    color: rgba(28,100,149,1);
    -webkit-text-fill-color: rgb(28,100,149);
    -webkit-text-stroke: 2px rgb(28,100,149);
    font-size: 50px;
    font-family: JLH;
    margin-left: 30px;
    height: 224px;
    line-height: 224px;
  }
</style>
