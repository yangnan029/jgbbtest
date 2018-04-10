<template>
    <div class="echarts">
        <div class="one">
            <div class="row">
                <span>*我的爱心值：通过机构宝平台交易即可获得爱心值</span>
            </div>
            <div class="row">
                <span>我的爱心值</span>
                <em>{{totalPoint}}</em>
            </div>
            <div class="row">
                <span>可用爱心值</span>
                <em class="used">{{availPoint}}</em>
            </div>
            <div class="row">
                <span>在途爱心值</span>
                <em class="forze">{{frozePoint}}</em>
            </div>
        </div>
        <div class="two">
            <IEcharts :option="pie" :loading="loading" @ready="onReady" @click="onClick"></IEcharts>
        </div>
    </div>
</template>
 
<script type="text/babel">
import IEcharts from "vue-echarts-v3/src/full.js";
import axios from "axios";
export default {
  name: "view",
  components: {
    IEcharts
  },
  props: {},
  data() {
    return {
      availPoint: "",
      frozePoint: "",
      totalPoint: "",
      loading: false,
      pie: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   // orient: "vertical",
        //   // x: "left",
        //   // y: "middle",
        //   // data: ["在途爱心值", "可用爱心值"]
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: "123", name: "在途爱心值" },
              { value: "", name: "可用爱心值" }
            ]
          }
        ],
        color: ["#fb565c", "#1b65ce", "#dddddd"]
      }
    };
  },
  created() {
    // console.log(JSON.parse(localStorage.getItem("userInfo")).organName)
    this.getProList();
    this.updateData();
  },
  beforeMount() {},
  methods: {
    getProList() {
      const _self = this;
      axios
        .get("/jgb-web/v1/points/point")
        .then(function(res) {
          //console.log(res);
          _self.totalPoint = res.data.data.totalPoint;
          _self.frozePoint = res.data.data.frozePoint;
          _self.availPoint = res.data.data.availPoint;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    updateData() {
      const _self = this;
      axios
        .get("/jgb-web/v1/points/point")
        .then(function(res) {
          console.log(res.data.data.totalPoint);
          // _self.totalPoint = res.data.data.totalPoint;
          // _self.frozePoint = res.data.data.frozePoint;
          // _self.availPoint = res.data.data.availPoint;
          _self.pie.series[0].data[0].value = res.data.data.availPoint;
          _self.pie.series[0].data[1].value = res.data.data.frozePoint;
          console.log();
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    onReady(instance) {
      // console.log(instance);
    },
    onClick(event, instance, echarts) {
      // console.log(arguments);
    }
  }
};
</script>
 
<style scoped>
.echarts {
    background: #ffffff;
    border-top: 1px solid #dddddd;
  width: 100%;
  height: 270px;
}
.echarts .one {
  display: inline-block;
  vertical-align: top;
  padding: 25px 0 0 40px;
  text-align: left;
  color: #333333;
}
.echarts .one .row {
  font-size: 16px;
  line-height: 2;
}
.echarts .one .row span {
  margin: 0 80px 0 20px;
}
.echarts .one .row em {
  font-size: 30px;
  font-style: normal;
}
.echarts .one .row .used {
  color: red;
}
.echarts .one .row .forze {
  color: #1b65ce;
}
.echarts .two {
  width: 40%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
}
/* .echarts .two canvas{
  width: 200px;
  height: 200px;
} */
</style>