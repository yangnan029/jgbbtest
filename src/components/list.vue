<template>
  <div class="lists">
      <ul>
          <li><router-link to="wealth">我的资产</router-link></li>
          <li><router-link to="product">产品列表</router-link></li>
          <li><router-link to="trade">交易记录</router-link></li>
          <li><router-link to="loveValue">爱心值</router-link></li>
          <li>
              <dl>
                  <dt>系统管理</dt>
                  <dd>企业信息</dd>
                  <dd>广发基金开户</dd>
                  <dd>华信现金宝开户</dd>
                  <dd>账户信息</dd>
                  <dd>修改密码</dd>
                  <dd>反馈信息</dd>
              </dl>
          </li>
      </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/css/list.scss"
</style>

