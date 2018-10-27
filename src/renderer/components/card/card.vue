<template>
  <div class="card">
    <div class="bg">
      <span class="title">学生卡服务</span>
    </div>
    <div class="main">
      <div class="center">
        <div class="menu-card">
          <div class="menu">
            <h1>我的学生卡</h1>
            <span>卡号：111111</span>
            <span>余额：000000</span>
          </div>
          <div class="detailed">
            <span>账单明细</span>
          </div>
        </div>
        <div class="wapper-card">
          <h1>我的学生卡</h1>
        </div>
      </div>
      <div class="bottom">
        <span class="return" @click="_back">返回</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    methods: {
      _back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
@import '../../assets/font/font.css';

.card .bg{
  width: 100%;
  height: 160px;
  background: #135677;
  position: absolute;
  left: 0;
}
.card .title {
  display: block;
  margin-left: 54px;
  height: 70px;
  line-height: 70px;
  color: white;
  font-size: 62px;
  font-family: JLH;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 2px #fff;
}
.card .center{
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 80px;
  margin-left: 54px;
  bottom: 160px;
  width: 90%;
  background: #fff;
  box-shadow: 1px 13px 25px #949494;

}
.card .menu-card{
  flex: 0 0 180px;
  width: 180px;

}
.card .menu{
  text-align: center;
}
.card .menu h1{
   color: #858585;
   font-size: 25px;
   height: 80px;
   line-height: 80px;
}
.card .menu span{
  display: block;
  font-family: Microsoft YaHei;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
  font-weight: 700;
}
.card .detailed span{
  color: #135677;
  font-size: 25px;
  font-family: Microsoft YaHei;
  display: block;
  box-shadow: -6px 0px 18px #949494;
  margin-left:46px;
  margin-top: 3px;
  background:white;
  position: absolute;
  padding-right: 34px;

}
.card .wapper-card{
   flex: 1;
   box-shadow: -2px 0px 10px #949494;
}
.card .wapper-card h1{
  color: #858585;
  font-size: 25px;
  height: 80px;
  line-height: 80px;
  margin-left: 25px;
  padding-left: 11px;
  box-shadow: -12px 0px 0px #949494;
}
.card .bottom{
  position: absolute;
  width: 90%;
  height: 80px;
  background: #135677;
  bottom: 80px;
  margin-left: 54px;

}
.bottom .return{
  display: block;
  text-align: center;
  height: 80px;
  line-height: 80px;
  color: white;
  font-size: 62px;
  font-family: JLH;
  -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 2px #fff;
  box-shadow: 0px 6px 21px #545454;

}
</style>
