<template>
  <div class="all">
    <div class="index">
      <div class="content clearfix">
        <div class="left">
            <div class="left_content">
              <div class="left_left">
                <h2>机构宝</h2>
              </div>
              <div class="left_middle"></div>
              <div class="left_right">
                <p>对接持牌资产管理公司优质资产，</p>
                <p>为机构理财助力。</p>
              </div>
            </div>
          </div>
          <div class="rights">
            <div class="right_content">
              <div class="rows1">
                <span class="icon"></span><input type="text" placeholder="请输入您的账户" v-model="telphone"></div>
              <div class="rows1">
                <span class="icon"></span><input type="password" placeholder="请输入您的密码" v-model="passwd"></div>
              <div class="rows2"><input type="checkbox">
                <span>记住用户名</span>
                <span class="forget">忘记密码？</span>
              </div>
              <div class="rows" @click="login">
                <button>登录</button>
              </div>
              <div class="rows3">
                <span>快速注册</span>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      telphone: "",
      passwd: ""
    };
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
            
            window.localStorage.setItem("logined", true);
            window.localStorage.setItem("userInfo", JSON.stringify(res.data));
            _self.$router.push({ path: "/wealth" });
          } else {
            alert("用户名或密码错误");
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/index.scss";
.index {
  background: url("../assets/images/bg001.jpg") no-repeat;
}
.content {
  .left {
    background: url("../assets/images/left_bg.png") no-repeat center;
    background-size: 100% 100%;
  }
  .right_content {
    .rows1 {
      span {
        background: url("../assets/images/password.png") no-repeat center;
      }
    }
  }
}
</style>