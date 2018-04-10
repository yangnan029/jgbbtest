<template>
  <div class="wealth">
    <c-header></c-header>
    <div class="main clearfix">
      <c-list></c-list>
      <div class="right_show">
        <div class="info clearfix">
          <span class="welcome">欢迎您，晓市测试账户</span>
          <span>上次登录IP：192.168.1.1</span>
          <span class="time">上次登录时间：2018年4月1日</span>
        </div>
        <c-bingtu></c-bingtu>
        <div class="profit">
          <table>
            <thead>
              <tr>
                <td>总资产（元）</td>
                <td>昨日收益（元）</td>
                <td>累计收益（元）</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{info.totalAsset}}</td>
                <td>{{info.nowdayIncome}}</td>
                <td>{{info.totalIncome}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="tishi">
          <p>*本数据仅供参考，实际数据以基金公司发布为准。</p>
        </div>
        <div class="third">
          <div class="titles">
            <p>持有资产
              <span> (*机构宝平台所显示的持有资产为经基金公司确认的资产，在途资产可以登录基金公司官网查看。)</span>
            </p>
          </div>
          <div class="content">
            <div :class="['organ',{active:activeNum===index}]"  v-for="(items,index) in info.orgTaAcctlist" :key="index">
              <div class="name clearfix">
                <span>{{items.investorName}}</span>
                <a href="javascrpt:void(0)" @click="changeShow(index)">
                  <em>展开</em>
                </a>
              </div>
              <div class="products" v-for="(item,indexx) in items.taWealthAcctlist" :key="indexx">
                <div class="top">
                  <p>
                    <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</p>
                </div>
                <div class="bottom" >
                  <div class="block block1">
                    <p class="intro">持有资产（元）</p>
                    <p class="num">{{item.availAsset}}</p>
                  </div>
                  <div class="block">
                    <p class="intro">昨日收益（元）</p>
                    <p class="num">{{item.nowdayIncome}}</p>
                  </div>
                  <div class="block">
                    <p class="intro">累计收益（元）</p>
                    <p class="num">{{item.totalIncome}}</p>
                  </div>
                  <div class="blocks">
                    <p>七日年化:<span>{{item.seventhYearYield*100}}%</span>
                    </p>
                    <p>七日年化:<span>{{item.yieldPerMillion*100}}</span>
                    </p>
                    <p>七日年化:<span>4.4100%</span>
                    </p>

                  </div>
                  <div class="btns">
                    <a href="#">申购</a>
                    <a href="#" class="gets">赎回</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import cHeader from "./header.vue";
import cList from "./list.vue";
import cBingtu from "./bingtu.vue";
import cFooter from "./footer.vue"
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      info:{

      },
      nowdayIncome:"",
      totalAsset:"",
      totalIncome:"",
      arr1:[],
      arr2:[],
      activeNum:''
    };
  },
  components: {
    cHeader,
    cList,
    cBingtu,
    cFooter
  },
  created(){
    this.getWealth();
  },
  methods: {
    getWealth(){
      const _self=this;
      axios
      .get('/jgb-web/v1/wealth/taAcctDetail')
      .then(function (res) {
        _self.info=res.data.data;
        // _self.nowdayIncome=res.data.data.nowdayIncome;
        // _self.totalAsset=res.data.data.totalAsset;
        // _self.totalIncome=res.data.data.totalIncome;
        // _self.arr1=res.data.data.orgTaAcctlist;
        // _self.arr2=res.data.data[0].taWealthAcctlist;
        // console.log(_self.info);
      })
    },
    changeShow(index){
      this.activeNum=(this.activeNum===index)?'':index;
      // const x=event.target;
      // x.parentNode.parentNode.parentNode
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/header.scss";
@import "../assets/css/wealth.scss";
</style>