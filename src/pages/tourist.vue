<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-auto ">
              <div class="bbox ">
                <div class='sec'>
                  <div class='sec-head'>
                    基本信息分析（年龄段分析）
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='age' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-auto  ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    线上应用偏好分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='onlineApp' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-4 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-auto ">
              <div class="bbox">
                <div class='sec transparent'>
                  <div class='sec-head'>
                    归属地分析（游客来源）
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='touristSource' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-auto ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    抵达工具分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='vehicle' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 ">
          <div class="column full-height q-col-gutter-sm">
            <div class="col-6">
              <div class="bbox">
                <div class='sec '>
                  <div class='sec-head'>
                    线下消费分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='consumption' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    本地游客逗留时间分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='stay' />
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
    vehicle () {
      var total = 1453,
        color = ['#fd3fb2', '#6e5eff', '#ff9745', '#22ced4'],
        dataItem = [{
          name: '大巴',
          value: 200,
        }, {
          name: '动车',
          value: 400
        }, {
          name: '飞机',
          value: 350
        }, {
          name: '自驾游',
          value: 503
        }],
        series = [];
      dataItem.forEach(function (item, index) {
        var per = (1 / dataItem.length) * 100
        var radius1 = (per - 3);
        var radius2 = per;
        var x = per * index + 0.5 * per
        var y = '35%'
        series.push({
          type: 'pie',
          radius: [radius1 * 1.7 + '%', radius2 * 1.7 + '%'],
          center: [x + '%', y],
          markPoint: {
            data: [{
              symbol: 'triangle',
              symbolSize: 15,
              symbolRotate: 0,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)'
                }
              },
              name: item.name,
              value: dataItem[index].value,
              x: x + '%',
              y: (0.5 + (1 / dataItem.length) * 0.5) * 100 + '%',
              label: {
                show: true,
                position: 'bottom',
                formatter: '{a|{c}}\n{b|{b}}',
                rich: {
                  a: {
                    color: '#22ced4',
                    fontSize: 24,
                    fontWeight: 'bold',
                    lineHeight: 40,
                    fontFamily: ''
                  },
                  b: {
                    color: color[index],
                    align: 'center',
                    fontWeight: 'bold',
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei'

                  },
                }
              },

            }]
          },
          data: [{
            name: item.name,
            value: item.value,
            labelLine: {
              show: true,
            },
            itemStyle: {
              color: color[index],
            },
            emphasis: {
              label: {
                show: true,
              },
              labelLine: {
                show: false,
              }
            },
            label: {
              show: true,
              position: 'center',
              textStyle: {
                color: color[index],
                fontSize: 20,
                fontWeight: '700'
              },
              formatter: function (p) {
                return p.percent + '%'
              }
            },

          }, {
            value: total - item.value,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: 'rgba(0,0,0,.1)'
            },
            emphasis: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              }
            }
          }]
        })
      })

      return {
        series: series
      }
    },
    touristSource () {
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
          "data": ["省内游客", "其他游客", "本市游客", "省外游客"]
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
            "name": "省内游客",
            "value": 3
          }, {
            "name": "其他游客",
            "value": 2
          }, {
            "name": "本市游客",
            "value": 26
          }, {
            "name": "省外游客",
            "value": 24
          },]
        }]
      }
    },
    onlineApp () {
      return {
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['抖音', '美团', '大众点评', '携程', '途牛', '去哪儿', '小红书']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#00a0de' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0660b9' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      };

    },
    age () {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['18岁以下', '18-25岁', '26-45岁', '46岁已上']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '18岁以下',
          type: 'line',
          stack: '总量',
          symbol: 'none',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '18-25岁',
          type: 'line',
          stack: '总量',
          symbol: 'none',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '26-45岁',
          type: 'line',
          stack: '总量',
          symbol: 'none',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '46岁已上',
          type: 'line',
          stack: '总量',
          symbol: 'none',
          data: [320, 332, 301, 334, 390, 330, 320]
        },

        ]
      };

    },
    stay () {

      return {

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

        yAxis: {
          type: 'category',
          axisLine: {
            show: false
          }

        },
        xAxis: {
          axisLine: {
            show: false
          }
        },
        series: [{
          tooltip: {
            show: false
          },
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 25,
          itemStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                offset: 0.5,
                color: 'rgba(1,245,185,1)'
              },
              {
                offset: 0.1,
                color: 'rgba(1,245,185,.6)'
              },
              ]
            }
          },
          z: -12,
          data: [
            [100, '1小时'],
            [200, '3小时'],
            [205, '5小时'],
            [500, '7小时'],
            [450, '9小时'],
            [249, '12小时'],
            [550, '12小时以上']
          ]
        }, {
          name: '消费金额',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f'
          },
          symbolRepeat: true,
          symbolSize: [5, 25],
          symbolMargin: 3,
          z: -10,
          data: [
            [100, '1小时'],
            [200, '3小时'],
            [205, '5小时'],
            [500, '7小时'],
            [450, '9小时'],
            [249, '12小时'],
            [550, '12小时以上']
          ]
        }]
      };
    },
    consumption () {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          }

        },
        yAxis: {
          axisLine: {
            show: false
          }
        },
        series: [{
          tooltip: {
            show: false
          },
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 25,
          itemStyle: {
            color: {
              type: 'linear',
              x1: 0,
              y1: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(1,245,185,1)'
              },
              {
                offset: 0.2,
                color: 'rgba(1,245,185,.6)'
              },
              {
                offset: 1,
                color: 'rgba(20,200,212,0.1)'
              }
              ]
            }
          },
          z: -12,
          data: [
            ['娱乐', 100],
            ['服装', 200],
            ['教育', 205],
            ['餐饮', 500],
            ['酒店', 450],
            ['特产', 249],
            ['套票', 550]
          ]
        }, {
          name: '消费金额',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f'
          },
          symbolRepeat: true,
          symbolSize: [25, 4],
          symbolMargin: 3,
          z: -10,
          data: [
            ['娱乐', 100],
            ['服装', 200],
            ['教育', 205],
            ['餐饮', 500],
            ['酒店', 450],
            ['特产', 249],
            ['套票', 550]
          ]
        }]
      };
    },

  },
  methods: {

  },
  mounted () {

  }
}

</script>
<style lang="scss">
</style>
