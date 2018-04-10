<template>
    <div class="trade">
        <c-header></c-header>
        <div class="main clearfix">
            <c-list></c-list>
            <div class="right_show">
                <div class="right_list">
                    <div class="top clearfix">
                        <div class="left">
                            <span class="active">交易</span>
                            <span>收益</span>
                        </div>
                        <div class="middle">
                            <span>申购</span>
                            <span>赎回</span>
                        </div>
                        <div class="right">
                            <input type="text">
                            <span>-</span><input type="text">
                            <button @click="getTrade">搜索</button>
                        </div>
                    </div>
                    <div class="content">
                        <table>
                            <thead>
                                <tr>
                                    <td>交易日期</td>
                                    <td>交易类型</td>
                                    <td>产品名称</td>
                                    <td>交易金额</td>
                                    <td>交易份额</td>
                                    <td>备注</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="(item,index) in data1" :key="index">
                                    <td>{{item.crtTime}}</td>
                                    <td>{{item.productType}}</td>
                                    <td>{{item.prodName}}</td>
                                    <td>{{item.txnAmount}}</td>
                                    <td>{{item.txnType}}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="right_bottom">
                    <a href="#" class="one">1</a>
                    <a href="#">共1页</a>
                </div>
            </div>
        </div>
        <c-footer></c-footer>
    </div>
</template>
<script>
import cHeader from "./header.vue";
import cFooter from "./footer.vue";
import cList from "./list.vue";
import axios from "axios";
export default {
  data() {
    return {
        data1:[],
        data2:[]
    };
  },
  components: {
    cHeader,
    cFooter,
    cList
  },
  created() {},
  methods: {
      getTrade(){
          const _self=this;
          axios.get("/jgb-web/v1/tradelist",{params:{startDate: "2015-11-08",endDate: "2018-04-10",pageNo: "1",txnType:"" }}).then(function (res) {
              _self.data1=res.data.data.resultList;
              console.log(_self.data1);
          })
      },
      getIncome(){
          const _self=this;
          axios.get("/jgb-web/v1/income",{params:{startDate: "2016-12-04",endDate: "2018-04-10",pageNo: "1",txnType:"" }}).then(function (res) {
                _self.data2=res.data.data.resultList;
                console.log(_self.data2);
          })
      }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/trade.scss";
</style>
