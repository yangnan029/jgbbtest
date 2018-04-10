<template>
    <div class="login">
        <c-header></c-header>
        <div class="main">
            <div class="title">
                <span>登录</span>
            </div>
            <div class="content clearfix">
                <div class="left">
                    <div class="head">
                        <p>登录</p>
                    </div>
                    <div class="row">
                        <span>手机号码:</span><input type="text" v-model="telphone"></div>
                    <div class="row">
                        <span>登录密码:</span><input type="text" v-model="passwd"></div>
                    <div class="row">
                        <button @click="login">登录</button>
                    </div>
                    <div class="register">没有账号？
                        <a href="#">立即注册</a>
                    </div>
                </div>
                <div class="right">
                    <div class="text">
                        <p>机构宝-机构个性化现金管理工具</p>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                        <div class="row">对接持牌资产管理公司优质资产，为机构理财助理</div>
                    </div>
                    <div class="img">
                        <img src="http://51jigoubao.com/static/img/qrcode.93c21f4.jpg" alt="">
                        <span>关注机构宝微信:jigoubao</span>
                    </div>
                </div>
            </div>
        </div>
        <c-footer></c-footer>
    </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import cHeader from "./header.vue";
import cFooter from "./footer.vue"

export default {
  data() {
    return {
      telphone: "",
      passwd: ""
    };
  },
  components:{
      cHeader,
      cFooter
  },
  methods: {
    login() {
      const _self = this;
      if (!_self.telphone) {
        alert("用户名不能为空");
      } else if (!_self.passwd) {
        alert("密码不能为空");
      }
      axios
        .post("/jgb-web/v1/organ/login", {
          telphone: this.telphone,
          passwd: this.passwd
        })
        .then(function(res) {
          console.log(res.data.status);
          if (res.data.status == "1") {
            _self.$router.push({ path: "/wealth" });
          }
        });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/css/login.scss";
</style>
