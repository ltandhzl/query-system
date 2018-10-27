<template>
  <div class="login-card">
    <div class="bg">
      <img src="../../assets/bg.jpg">
      <div class="return">
        <span @click="_back">返回</span>
      </div>
      <div class="content">
        <div class="title"><span>学生卡服务</span></div>
        <div class="table">
          <label class="user">
            <span>用户:</span>
            <input type="type">
          </label><br>
          <label class="pass">
            <span>密码:</span>
            <input type="password" maxlength="6">
          </label>
          <div class="search">
            <router-link to="/card" tag="button">查询</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login-card',
    methods: {
      _back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  @import '../../assets/font/font.css';

  .login-card .bg{
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }
  .login-card img{
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
  .login-card .return{
    width: 115px;
    height: 55px;
    background: linear-gradient(to right, rgba(0,34,52,0.4), rgba(54,191,255,1));
    box-shadow: 0px 0px 8px #fff;
    position: absolute;
    top: 9%;
    left: 7%;
    line-height: 55px;
    text-align: center;
    border-radius: 15px;
  }
  .login-card span{
    text-decoration: none;
    color: white;
    font-size: 40px;
    font-family: JLH;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke: 2px #fff;
  }
  .login-card .content{
    width: 589px;
    height: 798px;
    background: rgba(9,59,85,0.33);
    position:absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 0px 14px #fff;
  }
  .login-card .title{
    text-align: center;
    margin-top: 110px;
  }
  .login-card .title span{
    font-size: 80px;
  }
  .login-card .table{
    text-align: center;
  }
  .login-card .user input{
    width: 273px;
    height: 40px;
    border-radius: 15px;
    margin: 114px 0 0 10px;
    padding: 0;
    outline: none;
  }
  .login-card .pass input{
    width: 273px;
    height: 40px;
    border-radius: 15px;
    margin: 75px 0 99px 10px;
    outline: none;
  }
  .login-card .search{
    margin: 0 auto;
    border-radius: 15px;
    height: 70px;
    width: 388px;
  }
  .search button{
    color: rgb(4,40,57);
    height: 100%;
    width: 100%;
    font-size: 40px;
    border-radius: 15px;
    font-family: JLH;
    -webkit-text-fill-color: rgb(4,40,57);
    -webkit-text-stroke: 2px rgb(4,40,57);
    outline: none;
  }
</style>
