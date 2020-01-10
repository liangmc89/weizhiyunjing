<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-auto">
              <div class="bbox ">
                <div class="fit column ">
                  <div class="col-7">
                    <clock />
                  </div>
                  <div class="col-5">
                    <div class="q-mt-sm" @mouseenter='showForecast=true' @mouseout="showForecast=false">
                      <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tg&skin=sogou&fontsize=12&color=05cdff&&city=上海" frameborder="0" width="100%" height="50" allowtransparency="true"></iframe>
                      <q-menu style="background:#0064a9" v-model="showForecast">
                        <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tw&skin=cucumber&color=2ecdf3&city=上海" frameborder="0" width="300" height="500" allowtransparency="true"></iframe>
                      </q-menu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-xl-3 col-md-3 col-sm-auto col-auto">
              <div class="bbox">
                <div class="column full-height">
                  <div class="col-auto">
                    <div class='sec'>
                      <div class='sec-head'>
                        客流量
                      </div>
                      <div class='sec-body'>
                        <div class="row items-center tourist">
                          <div class="col">
                            <p>
                              <count-to class="co" :endVal='flow.now_tourist' />
                            </p>
                            <p class='fp'>当前游客数</p>
                          </div>
                          <div class="col">
                            <p>
                              <count-to class="cg" :endVal='flow.day_tourist' />
                            </p>
                            <p>今日游客数</p>
                          </div>
                          <div class="col">
                            <p>
                              <count-to class="cb" :endVal='flow.day_car' />
                            </p>
                            <p>今日入园车辆</p>
                          </div>
                          <div class="col">
                            <p>
                              <count-to class="cg" :endVal='flow.now_car' />
                            </p>
                            <p>当前在园车辆</p>
                          </div>
                          <div class="col">
                            <p>
                              <count-to class="co" :endVal='flow.parking_lot' />
                            </p>
                            <p class="lp">当前剩余车位</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-auto col ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    景区舒适度
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='comfortDegree' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    网络传播分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='net' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    广告投放效果分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='advertisement' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
          <div class="column full-height q-col-gutter-sm">
            <div class="col-6">
              <div class="bbox">
                <div class='sec '>
                  <div class='sec-head'>
                    上海4A旅游景区市场竞合监测分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='competition' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    事件营销效果分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='marketing' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import clock from '../components/clock.vue'

export default {
  name: 'PageIndex',
  data () {
    return {
      showForecast: false,
      flow: {
        now_tourist: 10,
        day_tourist: 100,
        day_car: 200,
        now_car: 50,
        parking_lot: 500
      },
    }
  },
  components: {
    clock,

  },
  computed: {
    net () {
      return {
        "animation": true,
        "legend": {
          "left": "center",
          "textStyle": {
            "color": "#fff",
            "fontSize": 14
          },
          "icon": "circle",
          "right": "0",
          "top": "20",
          // "padding": [30, 60],
          // "itemGap": 40,
          "data": ["客户端", "微信", "微博", "网站", "携程", "去哪儿", "飞猪", "其它"]
        },
        "series": [{
          "type": "pie",
          "center": ["50%", "50%"],
          "radius": ["0%", "45%"],
          "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
          "startAngle": 135,
          "labelLine": {
            "normal": {
              "length": 25
            }
          },
          "label": {
            "normal": {
              "formatter": "{b|{b}:}  {per|{d}%} ",
              "backgroundColor": "rgba(255, 147, 38, 0)",
              "borderColor": "transparent",
              "borderRadius": 4,
              "rich": {
                "a": {
                  "color": "#999",
                  "lineHeight": 22,
                  "align": "center"
                },
                "hr": {
                  "borderColor": "#aaa",
                  "width": "100%",
                  "borderWidth": 1,
                  "height": 0
                },
                "b": {
                  "color": "#b3e5ff",
                  "fontSize": 16,
                  "lineHeight": 33
                },
                "c": {
                  "fontSize": 14,
                  "color": "#eee"
                },
                "per": {
                  "color": "#FDF44E",
                  "fontSize": 14,
                  "padding": [5, 8],
                  "borderRadius": 2
                }
              },
              "textStyle": {
                "color": "#fff",
                "fontSize": 16
              }
            }
          },
          "emphasis": {
            "label": {
              "show": true,
              "formatter": "{b|{b}:}  {per|{d}%}  ",
              "backgroundColor": "rgba(255, 147, 38, 0)",
              "borderColor": "transparent",
              "borderRadius": 4,
              "rich": {
                "a": {
                  "color": "#999",
                  "lineHeight": 22,
                  "align": "center"
                },
                "hr": {
                  "borderColor": "#aaa",
                  "width": "100%",
                  "borderWidth": 1,
                  "height": 0
                },
                "b": {
                  "color": "#fff",
                  "fontSize": 18,
                  "lineHeight": 33
                },
                "c": {
                  "fontSize": 14,
                  "color": "#eee"
                },
                "per": {
                  "color": "#FDF44E",
                  "fontSize": 25,
                  "padding": [5, 6],
                  "borderRadius": 2
                }
              }
            }
          },

          "data": [{
            "name": "客户端",
            "value": 3
          }, {
            "name": "微信",
            "value": 2
          }, {
            "name": "微博",
            "value": 26
          }, {
            "name": "网站",
            "value": 24
          }, {
            "name": "携程",
            "value": 12
          }, {
            "name": "去哪儿",
            "value": 11
          }, {
            "name": "飞猪",
            "value": 3
          }, {
            "name": "其它",
            "value": 2
          }]
        }]
      }
    },
    comfortDegree () {
      let max = 0;
      max = 26000;
      let level = [{
        name: "舒适",
        axisValue: max * 0.1,
        comfortValue: max * 0.2
      },
      {
        name: "较舒适",
        axisValue: max * 0.3,
        comfortValue: max * 0.4
      },
      {
        name: "一般",
        axisValue: max * 0.5,
        comfortValue: max * 0.6
      },
      {
        name: "较拥挤",
        axisValue: max * 0.7,
        comfortValue: max * 0.8
      },
      {
        name: "拥挤",
        axisValue: max * 0.9,
        comfortValue: max
      }
      ];
      let _this = this
      let option = {
        title: [{
          x: "65%",
          top: "45%",
          textStyle: {
            fontSize: 24
          },
          text: this.flow.now_tourist
        },
        {
          x: "60%",
          top: "25%",
          text: "当前入园人数",
          textStyle: {
            color: "#fffeee",
            fontSize: 18
          }
        }
        ],
        tooltip: {
          show: true
        },
        series: [{
          name: "当前入园人数",
          type: "gauge",
          min: 0,
          max: max,
          radius: "70%",
          center: ["32%", "50%"],
          axisLine: {
            show: true,
            lineStyle: {
              width: 8,
              shadowBlur: 2,
              color: [
                [0.2, "#7CBB55"],
                [0.4, "#9CD6CE"],
                [0.6, "#DDBD4D"],
                [0.8, "#E98E2C"],
                [1, "#E43F3D"]
              ]
            }
          },
          axisTick: {
            show: false,
            splitNumber: 1
          },
          splitLine: {
            show: true,
            length: 10,
            lineStyle: {
              //color:'black'
            }
          },
          axisLabel: {
            formatter: function (e) {
              if (e == level[0].axisValue) {
                return "舒适";
              } else if (e == level[1].axisValue) {
                return "较舒适";
              } else if (e == level[2].axisValue) {
                return "一般";
              } else if (e == level[3].axisValue) {
                return "较拥挤";
              } else if (e == level[4].axisValue) {
                return "拥挤";
              } else {
                return e;
              }
            },
            textStyle: {
              fontSize: 10,
              fontWeight: ""
            }
          },
          pointer: {
            show: true
          },
          detail: {
            //show:false,
            formatter: function (param) {
              var comfort = "";
              if (param < level[0].comfortValue) {
                comfort = level[0].name;
              } else if (param < level[1].comfortValue) {
                comfort = level[1].name;
              } else if (param < level[2].comfortValue) {
                comfort = level[2].name;
              } else if (param < level[3].comfortValue) {
                comfort = level[3].name;
              } else if (param < level[4].comfortValue) {
                comfort = level[4].name;
              }
              return comfort;
            },
            //offsetCenter: ['40%', '80%'],
            textStyle: {
              fontSize: 14,
              fontWeight: 900
            }
          },
          data: [{
            name: "",
            value: this.flow.now_tourist
          }]
        }]
      };
      return option
    },
    marketing () {

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },

        legend: {
          data: ['满意', '不满意'],
          left: 'center',
          top: 12,
          textStyle: {
            color: "#fff"
          },


        },
        xAxis: {
          type: 'category',
          data: ['荷花节', '螃蟹节', '玫瑰节', '赏枫骑行', '灯会', '国风漫展'],
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#27b4c2'
            }
          },

        },

        yAxis: {
          type: 'value',
          max: 1000,
          axisLine: {
            lineStyle: {
              color: '#27b4c2'
            }
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#11366e'
            }
          }
        },
        series: [{
          name: '满意',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#fccb05' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#f5804d' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              },

              barBorderRadius: 12,
            },
          },
          data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
        },
        {
          name: '不满意',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#8bd46e'
                }, {
                  offset: 1,
                  color: '#09bcb7'
                }]
              },
              barBorderRadius: 11,
            }

          },
          data: [400, 500, 500, 500, 500, 400, 400, 500, 500]
        },
        ]
      };;
      return option;
    },
    advertisement () {
      return {
        tooltip: {
          show: true,
          trigger: 'item'
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#30eee9'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#397cbc'
            }
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#195384'
            }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
          type: 'value',

          axisLine: {
            lineStyle: {
              color: '#27b4c2'
            }
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#11366e'
            }
          }
        },],
        series: [{
          name: '投放效果',
          type: 'line',
          symbol: 'emptyCircle',
          symbolSize: 8,
          label: {
            show: true,
            color: 'red'
          },
          itemStyle: {
            normal: {
              lineStyle: {
                color: "red",
                width: 2
              },
            }
          },
          data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
        },]
      };;
    },
    competition () {
      return {
        tooltip: {},
        legend: {
          top: 10,
          left: 'right',
          data: ['游客量'],
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          selectedMode: 'single'
        },
        radar: {
          indicator: [{
            name: '嘉定南翔古漪园',
            max: 10000
          }, {
            name: '金茂大厦88层观光厅',
            max: 10000
          },

          {
            name: '朱家角古镇',
            max: 10000
          },
          {
            name: '上海海湾国家森林公园',
            max: 10000
          },
          {
            name: '上海月湖雕塑公园',
            max: 10000
          },
          {
            name: '上海欢乐谷',
            max: 10000
          },
          {
            name: '上海影视乐园',
            max: 10000
          }
          ],
          // shape: 'circle',
          splitNumber: 5,
          name: {
            textStyle: {
              color: '#fff',
              fontSize: 14,
            }
          },
          splitLine: {
            lineStyle: {
              width: 2,
              color: [
                'rgba(0,220,227, 0.1)', 'rgba(0,220,227, 0.2)',
                'rgba(0,220,227, 0.4)', 'rgba(0,220,227, 0.6)',
                'rgba(0,220,227, 0.8)', 'rgba(0,220,227, 1)'
              ].reverse()
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                'rgba(0,220,227, 0.1)', 'rgba(0,220,227, 0.2)',
                'rgba(0,220,227, 0.3)', 'rgba(0,220,227, 0.4)',
                'rgba(0,220,227, 0.5)', 'rgba(0,220,227, .6)'
              ].reverse()
            }
          },
          axisLine: {
            lineStyle: {
              color: '#00dce3'
            }
          }
        },
        series: [{
          name: '游客量',
          type: 'radar',
          label: {
            show: true,
            position: "top",
            textStyle: {
              color: '#c6b84f',
              fontSize: 14
            }
          },
          lineStyle: {
            normal: {
              color: '#c6b84f',
              width: 2,
              opacity: 1
            }
          },
          data: [
            [5500, 9890, 5600, 4600, 1800, 6000, 10000]
          ],
          symbol: 'emptycircle',
          symbolSize: 10,
          itemStyle: {
            normal: {
              color: '#F9713C'
            }
          },

        },

        ]
      };
    }
  },
  methods: {

  },
  mounted () {

  }
}

</script>
<style lang="scss">
</style>
