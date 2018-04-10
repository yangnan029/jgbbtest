<template>
    <div class="product">
        <c-header></c-header>
        <div class="main clearfix">
            <c-list></c-list>
            <div class="right_show">
                <div class="top-nav">
                    <span class="active">活期产品</span>
                    <span>定期产品</span>
                </div>
                <div class="huo">
                    <div class="first">
                        <div class="tit">
                            <span>券商资管</span>
                        </div>
                        <div class="content">
                            <div class="item" v-for="(item,index) in data1" :key="index">
                                <div class="top">
                                    <span>
                                        <i><img src="../assets/images/product1.png" alt=""></i> {{item.name}}</span>
                                </div>
                                <div class="bottom">
                                    <div class="block block1">
                                        <p class="intro">七日年化收益率</p>
                                        <p class="num">{{(item.seventhYearYield*100).toFixed(4)}}%</p>
                                    </div>
                                    <div class="block block1">
                                        <p class="intro">万份收益</p>
                                        <p class="num">{{item.yieldPerMillion}}元</p>
                                    </div>
                                    <div class="blocks">
                                        <p>投资期限:
                                            <span>每日申赎</span>
                                        </p>
                                        <p>更新日期:
                                            <span>2018.04.09</span>
                                        </p>
                                        <p>爱心值:
                                            <span>225/亿元(日终存量)</span>
                                        </p>

                                    </div>
                                    <div class="btns">
                                        <a href="#">申购</a>
                                        <a href="#">赎回</a>
                                        <a href="#" class="gets">开户</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second">
                        <div class="tit">
                            <span>场内基金</span>
                            <a href="#">什么是确权</a>
                        </div>
                        <div class="content">
                            <div class="item">
                                <div class="top">
                                    <span>
                                        <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</span>
                                </div>
                                <div class="bottom">
                                    <div class="block block1">
                                        <p class="intro">七日年化收益率</p>
                                        <p class="num">3.6060%</p>
                                    </div>
                                    <div class="block block1">
                                        <p class="intro">万份收益</p>
                                        <p class="num">0.9004元</p>
                                    </div>
                                    <div class="blocks">
                                        <p>投资期限:
                                            <span>每日申赎</span>
                                        </p>
                                        <p>更新日期:
                                            <span>2018.04.09</span>
                                        </p>
                                        <p>爱心值:
                                            <span>225/亿元(日终存量)</span>
                                        </p>

                                    </div>
                                    <div class="btns">
                                        <a href="#">场内确权</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="top">
                                    <span>
                                        <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</span>
                                </div>
                                <div class="bottom">
                                    <div class="block block1">
                                        <p class="intro">七日年化收益率</p>
                                        <p class="num">3.6060%</p>
                                    </div>
                                    <div class="block block1">
                                        <p class="intro">万份收益</p>
                                        <p class="num">0.9004元</p>
                                    </div>
                                    <div class="blocks">
                                        <p>投资期限:
                                            <span>每日申赎</span>
                                        </p>
                                        <p>更新日期:
                                            <span>2018.04.09</span>
                                        </p>
                                        <p>爱心值:
                                            <span>225/亿元(日终存量)</span>
                                        </p>

                                    </div>
                                    <div class="btns">
                                        <a href="#">场内确权</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="third">
                        <div class="tit">
                            <span>场外基金</span>
                            <a href="#">长信开户</a>
                        </div>
                        <div class="content">
                            <div class="item">
                                <div class="top">
                                    <span>
                                        <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</span>
                                </div>
                                <div class="bottom">
                                    <div class="block block1">
                                        <p class="intro">七日年化收益率</p>
                                        <p class="num">3.6060%</p>
                                    </div>
                                    <div class="block block1">
                                        <p class="intro">万份收益</p>
                                        <p class="num">0.9004元</p>
                                    </div>
                                    <div class="blocks">
                                        <p>投资期限:
                                            <span>每日申赎</span>
                                        </p>
                                        <p>更新日期:
                                            <span>2018.04.09</span>
                                        </p>
                                        <p>爱心值:
                                            <span>225/亿元(日终存量)</span>
                                        </p>

                                    </div>
                                    <div class="btns">
                                        <a href="#">场外确权</a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="top">
                                    <span>
                                        <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</span>
                                </div>
                                <div class="bottom">
                                    <div class="block block1">
                                        <p class="intro">七日年化收益率</p>
                                        <p class="num">3.6060%</p>
                                    </div>
                                    <div class="block block1">
                                        <p class="intro">万份收益</p>
                                        <p class="num">0.9004元</p>
                                    </div>
                                    <div class="blocks">
                                        <p>投资期限:
                                            <span>每日申赎</span>
                                        </p>
                                        <p>更新日期:
                                            <span>2018.04.09</span>
                                        </p>
                                        <p>爱心值:
                                            <span>225/亿元(日终存量)</span>
                                        </p>

                                    </div>
                                    <div class="btns">
                                        <a href="#">申购</a>
                                        <a href="#">赎回</a>
                                        <a href="#" class="gets">开户</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ding">
                    <div class="item">
                        <div class="top">
                            <span>
                                <i><img src="../assets/images/product1.png" alt=""></i> 广发钱袋子货币（000509）</span>
                        </div>
                        <div class="bottom">
                            <div class="block block1">
                                <p class="intro">持有资产（元）</p>
                                <p class="num">test</p>
                            </div>
                            <div class="block">
                                <p class="intro">昨日收益（元）</p>
                                <p class="num">test</p>
                            </div>
                            <div class="block">
                                <p class="intro">累计收益（元）</p>
                                <p class="num">test</p>
                            </div>
                            <div class="blocks">
                                <p>七日年化:
                                    <span>test</span>
                                </p>
                                <p>七日年化:
                                    <span>test</span>
                                </p>
                                <p>七日年化:
                                    <span>4.4100%</span>
                                </p>

                            </div>
                            <div class="btns">
                                <a href="#">申购</a>
                                <a href="#">赎回</a>
                                <a href="#" class="gets">开户</a>
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
import cFooter from "./footer.vue";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      data1: [],
      data2: [],
      data3: []
    };
  },
  components: {
    cHeader,
    cList,
    cFooter
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      const _self = this;
      axios.get("/jgb-web/v1/products").then(function(res) {
        var info = res.data.data;
        for (let index = 0; index < info.length; index++) {
          if (info[index].issueId == "4") {
            _self.data1.push(info[index]);
          } else if (info[index].issueId == "1") {
            _self.data2.push(info[index]);
          }
        }
        console.log(_self.data1);
        console.log(_self.data2);        
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/product.scss";
</style>
