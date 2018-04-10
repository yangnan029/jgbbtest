<template>
    <div class="loveValue">
        <c-header></c-header>
        <div class="main clearfix">
            <c-list></c-list>
            <div class="right_show">
                <c-bingtu></c-bingtu>
                <div class="tables">
                    <table>
                        <thead>
                            <tr>
                                <td>日期</td>
                                <td>行为</td>
                                <td>投资人</td>
                                <td>爱心值</td>
                                <td>备注</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="(item,index) in arr1" :key="index">
                                <td>{{item.time}}</td><td>{{item.actionDesc}}</td><td>{{item.investorName}}</td><td class="love-val">{{item.point}}</td><td>产品：{{item.productName}}金额：{{item.memo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <c-footer></c-footer>
    </div>
</template>
<script>
import cHeader from "./header.vue";
import cFooter from "./footer.vue";
import cBingtu from "./bingtu.vue";
import cList from "./list.vue";
import axios from "axios";
export default {
  data() {
    return {
      arr1: []
    };
  },
  components: {
    cHeader,
    cFooter,
    cBingtu,
    cList
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const _self = this;
      axios.get("/jgb-web/v1/points?type=-1&pageNo=1").then(function(res) {
        _self.arr1=res.data.data.resultList;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/loveValue.scss";
</style>
