<template>
    <div class="loveValue">
        <div class="main clearfix">
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
                                <td>{{dateFormat(item.time,"yyyy-MM-dd")}}</td><td>{{item.actionDesc}}</td><td>{{item.investorName}}</td><td class="love-val">{{item.point}}</td><td>产品：{{item.productName}}金额：{{item.memo}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
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
      dateFormat(date, fmt) {
      if (!isNaN(date) && date != null) {
        let str = new Date(date);
        let obj = {
          "M+": str.getMonth() + 1,
          "d+": str.getDate(),
          "h+": str.getHours(),
          "m+": str.getMinutes(),
          "s+": str.getSeconds(),
          "q+": Math.floor((str.getMonth() + 3) / 3),
          S: str.getMilliseconds()
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (str.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (let k in obj)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? obj[k]
                : ("00" + obj[k]).substr(("" + obj[k]).length)
            );
        return fmt;
      } else {
        return "";
      }
    },
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
