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
                            <input type="text"><span>-</span><input type="text"><button>搜索</button>
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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="right_bottom">
                    <a href="#" class="one">1</a><a href="#">共1页</a>
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

export default {
  data() {
    return {};
  },
  components: {
    cHeader,
    cFooter,
    cList
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/css/trade.scss";
</style>
