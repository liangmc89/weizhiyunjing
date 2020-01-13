<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="column full-height  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-y-sm q-col-gutter-sm-y-none q-col-gutter-lg-y-sm q-col-gutter-xl-y-sm">
        <div class="col-6">
          <div class="row full-height q-col-gutter-xs-x-xs q-col-gutter-sm-x-sm q-col-gutter-md-x-sm q-col-gutter-lg-x-sm q-col-gutter-xl-x-sm">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="bbox">
                <div class="sec">
                  <div class="sec-head">游客口碑分析</div>
                  <div class="sec-body">
                    <echarts :options='publicPraise'></echarts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="bbox">
                <div class="sec">
                  <div class="sec-head">评价热词分析</div>
                  <div class="sec-body">
                    <echarts :options='hotEvalute'></echarts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="bbox">
                <div class="sec">
                  <div class="sec-head">游客评分热力图</div>
                  <div class="sec-body">
                    <echarts :options='hotmap'></echarts>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="bbox">
            <div class="sec">
              <div class="sec-head">情感倾诉描述</div>
              <div class="sec-body">
                <echarts :options='emotion'></echarts>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  computed: {
    hotmap () {
      return {
        tooltip: {},
        legend: {
          top: 10,
          left: 'right',
          data: ['维度正面', '维度负面'],
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          //selectedMode: 'single'
        },
        radar: {
          indicator: [{
            name: '景区管理',
            max: 10000
          }, {
            name: '服务水平',
            max: 10000
          },

          {
            name: '服务设施',
            max: 10000
          },
          {
            name: '清洁卫生',
            max: 10000
          },
          {
            name: '客流状况',
            max: 10000
          },
          {
            name: '景点景色',
            max: 10000
          },
          {
            name: '旅游交通',
            max: 10000
          },
          {
            name: '门票物价',
            max: 10000
          },
          {
            name: '厕所',
            max: 10000
          },
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
            // show: false,
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
                'rgba(40,163,206, 0.1)', 'rgba(40,163,206, 0.2)',
                'rgba(40,163,206, 0.3)', 'rgba(40,163,206, 0.6)',
                'rgba(40,163,206, 0.8)', 'rgba(40,163,206, .9)'
              ].reverse()
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00dce3'
            }
          }
        },
        series: [
          {
            name: '维度正面',
            type: 'radar',
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: '#856efc',
                fontSize: 14
              }
            },
            lineStyle: {
              normal: {
                color: '#0394f4',
                width: 2,
                opacity: 1
              }
            },
            data: [
              [5500, 9890, 5600, 4600, 1800, 6000, 1000, 6570, 5550]
            ],
            symbol: 'emptycircle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#0394f4'
              }
            },

          },
          {
            name: '维度负面',
            type: 'radar',
            label: {
              show: false,
              position: "top",
              textStyle: {
                color: '#c6b84f',
                fontSize: 14
              }
            },
            lineStyle: {
              normal: {
                color: '#956efc',
                width: 2,
                opacity: 1
              }
            },
            data: [
              [1800, 6000, 1000, 6570, 5550, 5500, 9890, 5600, 4600]
            ],
            symbol: 'emptycircle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                color: '#F9713C'
              }
            },

          },

        ]
      };
    },
    publicPraise () {
      return {
        backgroundColor: "#05224d",
        title: {
          left: 'center',
          top: 10,
          text: '景区好评量月度趋势',
          textStyle: {
            color: 'white'
          }
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#233e64'
            },
          },
          axisLabel: {
            textStyle: {
              color: '#6a9cd5',
              margin: 15,
            },
          },
          axisTick: {
            show: false,
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月',],
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0a3256'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#233e64'
            },
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#6a9cd5',
            },
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '注册总量',
          type: 'line',
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 6,
          lineStyle: {
            color: "#28ffb3",
            borderColor: '#f0f'
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
            }
          },
          itemStyle: {
            color: "#28ffb3",
          },
          tooltip: {
            show: false
          },
          areaStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#00cfff'
              },
              {
                offset: 1,
                color: '#00cfff'
              }
              ]
            },
            shadowColor: 'rgba(53,142,215, 0.9)',
            shadowBlur: 20
          },
          data: [393, 438, 485, 631, 689, 824, 987]
        }]
      };
    },
    emotion () {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['好评', '一般', '差评']
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
              color: '#233e64'
            },
          },
          axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
              color: '#6a9cd5',
              margin: 15,
            },
          },
          axisTick: {
            show: false,
          },
          data: ['1', '2', '3', '4', '5', '6', '7', 8, 9, 10, 11, 12, 13, 14, 15],
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          max: 140,
          splitNumber: 7,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0a3256'
            }
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            margin: 20,
            textStyle: {
              color: '#007eff',

            },
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '好评',
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: "#1970fc"
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#986efc'
              }, {
                offset: .6,
                color: '#1970fc'
              }]
            },
            shadowColor: 'rgba(53,142,215, 0.9)',
            shadowBlur: 20
          },
          data: [90, 105, 84, 125, 110, 92, 98, 90, 105, 84, 125, 110, 92, 98, 100]
        }, {
          name: '差评',
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: "#00f6b8"
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#00cfff'
              }, {
                offset: .6,
                color: '#00f6b8'
              }]
            },
            shadowColor: 'rgba(53,142,215, 0.9)',
            shadowBlur: 20
          },
          data: [10, 9, 8, 5, 1, 2, 0, 6, 5, 2, 7, 3, 0, 5, 9,]
        }, {
          name: '一般',
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: "#7a7ff9"
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#2dc9eb'
              }, {
                offset: .6,
                color: '#7a7ff9'
              }]
            },
            shadowColor: 'rgba(53,142,215, 0.9)',
            shadowBlur: 20
          },
          data: [10, 20, 20, 30, 20, 15, 14, 12, 13, 5, 8, 9, 12, 0, 15]
        }]
      };
    },
    hotEvalute () {
      return {
        yAxis: [{
          type: 'category',
          data: [
            '客流状况',
            '食品卫生',
            '门票物价',
            '服务设施',
            '门票物价',
            '食品卫生',
            '客流状况',
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: "#063374",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#00c7ff",
            }
          },
        },],
        xAxis: [{
          type: 'value',
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#00c7ff",
              width: 1,
              type: "solid"
            },
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          data: [20, 50, 80, 58, 83, 68, 57, 80],
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: 'white'
            }
          },
          itemStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                color: '#018bec',
                offset: 0
              }, {
                color: '#8fe7ff',
                offset: 1
              }]
            }
          }
        }]
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
