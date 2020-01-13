<template>
  <q-page class="my-page">
    <div class="page-box">
      <div
        class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-auto ">
              <div class="bbox ">
                <div class='sec'>
                  <div class='sec-head'>
                    客流实时分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='carSource' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-auto  ">
              <div
                class="row full-height  q-col-gutter-xs-x-none q-col-gutter-md-x-sm q-col-gutter-sm-none q-col-gutter-lg-x-sm q-col-gutter-xl-x-sm">
                <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="bbox ">
                    <div class='sec'>
                      <div class='sec-head'>
                        景区舒适度
                      </div>
                      <div class='sec-body comf relative-position'>
                        <div class="absolute-full">
                          <echarts :options='comfort' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="bbox ">
                    <div class='sec'>
                      <div class='sec-head'>
                        投诉建议
                      </div>
                      <div class='sec-body comf relative-position'>
                        <div class="absolute-full">
                          <echarts :options='complaint' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-auto ">
              <div class="bbox">
                <div class='sec '>
                  <div class='sec-head'>
                    游客入园时段分析
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='timeSlot' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-auto ">
              <div class="bbox">
                <div class='sec'>
                  <div class='sec-head'>
                    一周停车时长统计
                  </div>
                  <div class='sec-body comf relative-position'>
                    <div class="absolute-full">
                      <echarts :options='parkingDuration' />
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
    data() {
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
      carSource() {
        return {
          title: {
            left: 'left',
            text: '全国车辆来源TOP5',
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color: 'white',
              fontSize: 18,
              fontWeight: '300'
            }
          },
          grid: {
            left: '60%'
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            type: 'value',
          },
          geo: {
            // left:'left',

            map: 'china',
            label: {

              emphasis: {
                show: true,
                textStyle: {
                  color: 'rgba(255,255,255,1)'
                },
              }
            },
            //left:'10%',
            layoutCenter: ['30%', '50%'],
            layoutSize: '130%',
            roam: true,
            itemStyle: {
              normal: {
                borderColor: 'rgba(147, 235, 248, .1)',
                borderWidth: 1,
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(147, 235, 248, 0.02)' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },

              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
              }
            },
          },
          visualMap: [{
            show: false,
            type: 'continuous',
            min: 0,
            max: 400,
            inRange: {
              color: ['#00f5b8', '#2dc9eb'],
              symbolSize: [0, 10],
            }
          }],
          series: [{
              name: '车辆来源地',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                scale: 5,
                period: 4,
                brushType: 'stroke'
              },
              symbol: 'circle',
              label: {
                show: true,
                position: 'bottom',
                "formatter": "{@[2]}"
              },
              itemStyle: {
                opacity: .5
              },
              data: [
                [121.4648, 31.2891, '上海', 800],
                [116.4551, 40.2539, '北京', 200],
                [118.1689, 24.6478, '厦门', 300],
                [113.5107, 23.2196, '广州', 320],
                [106.6992, 26.7682, '贵阳', 226],

              ]

            },
            {
              type: 'bar',
              barWidth: 20,
              data: [
                ['广州', 320],
                ['厦门', 300],
                ['贵阳', 226],
                ['北京', 200],
                ['上海', 800]
              ].sort(function (a, b) {
                return b[1] - a[1]
              })
            },
            {
              type: 'lines',
              coordinateSystem: 'geo',
              effect: {
                show: true,
                symbolSize: 5,
                period: 4,
                symbol: 'arrow',
                trailLength: .4,
                loop: true,
              },
              lineStyle: {
                width: 2,
                curveness: .4,
                color: 'yellow'

              },
              data: [{
                coords: [
                  [116.4551, 40.2539],
                  [121.4648, 31.2891]
                ]
              }, {
                coords: [
                  [118.1689, 24.6478],
                  [121.4648, 31.2891]
                ]
              }, {
                coords: [
                  [116.4551, 40.2539],
                  [121.4648, 31.2891]
                ]
              }, {
                coords: [
                  [113.5107, 23.2196],
                  [121.4648, 31.2891]
                ]
              }, {
                coords: [
                  [106.6992, 26.7682],
                  [121.4648, 31.2891]
                ]
              }],

            }
          ]
        }
      },
      comfort() {
        {
          var value = 0.2;
          var data = [value, value, value, ];
          var option = {
            title: {
              text: (value * 100).toFixed(0) + '{a|%}',
              textStyle: {
                fontSize: 50,
                fontFamily: 'Microsoft Yahei',
                fontWeight: 'normal',
                color: '#bcb8fb',
                rich: {
                  a: {
                    fontSize: 28,
                  }
                }
              },
              x: 'center',
              y: '35%'
            },
            graphic: [{
              type: 'group',
              left: 'center',
              top: '55%',
              children: [{
                type: 'text',
                z: 100,
                left: '10',
                top: 'middle',
                style: {
                  fill: '#0ee272',
                  text: '舒适',
                  font: '48px Microsoft YaHei'
                }
              }]
            }],
            series: [{
              type: 'liquidFill',
              radius: '80%',
              center: ['50%', '50%'],
              //  shape: 'roundRect',
              data: [0.2, 0.18, 0.16, ],
              backgroundStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0.5,
                  y2: 1,
                  colorStops: [{
                    offset: 1,
                    color: 'rgba(68, 145, 253, 0)'
                  }, {
                    offset: 0.5,
                    color: 'rgba(68, 145, 253, .25)'
                  }, {
                    offset: 0,
                    color: 'rgba(68, 145, 253, 1)'
                  }],
                  globalCoord: false
                },
              },
              outline: {
                borderDistance: 0,
                itemStyle: {
                  borderWidth: 20,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(11, 226, 114, 0.1)'
                    }, {
                      offset: 0.5,
                      color: 'rgba(11, 226, 114, .25)'
                    }, {
                      offset: 1,
                      color: 'rgba(11, 226, 114, 1)'
                    }],
                    globalCoord: false
                  },
                  shadowBlur: 10,
                  shadowColor: '#000',
                }
              },
              color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
              label: {
                normal: {
                  formatter: '',
                }
              }
            }, ]
          };
          return option
        }
      },
      timeSlot() {
        return {
          tooltip: {
            show: true,
            trigger: 'axis'
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
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

          }],
          yAxis: [{
            type: 'value',
            splitNumber: 7,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#233e64'
              }
            },
            axisLine: {
              show: false,
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
            name: '入园人数',
            type: 'line',
            symbolSize: 4,
            lineStyle: {
              normal: {
                color: "#8943e9"
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: .5,
                      color: '#8943e9'
                    },
                    {
                      offset: 1,
                      color: '#1e70fc'
                    }
                  ]
                },

                shadowColor: 'rgba(53,142,215, 0.9)',
                shadowBlur: 20
              }
            },
            data: [
              ['09时', 400],
              ['10时', 1105],
              ['11时', 840],
              ['12时', 1125],
              ['13时', 510],
              ['14时', 920],
              ['15时', 398],
              ['16时', 223]
            ]
          }]
        };
      },
      complaint() {
        return {

          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },

          legend: {
            data: ['已处理', '未处理'],
            left: 'center',
            top: 12,
            textStyle: {
              color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
          },
          xAxis: {
            type: 'category',
            data: ['水慢城', '游子山', '高淳老街', '桠溪慢城'],
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#ffffff'
              }
            },
          },

          yAxis: {
            type: 'value',
            max: '120',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#233e64'
              }
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: '#6a9cd5',

              },
            },
          },
          series: [{
              name: '已处理',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                color: {
                  type: 'linear',
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#1ddefd'
                  }, {
                    offset: 1,
                    color: '#1999f0'
                  }]
                },
                barBorderRadius: 12,

              },
              data: [40, 40, 30, 30]
            },
            {
              name: '未处理',
              type: 'bar',
              barWidth: '15%',
              itemStyle: {
                color: {
                  type: 'linear',
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#ea4e1a'
                  }, {
                    offset: 1,
                    color: '#e3400a'
                  }]
                },
                barBorderRadius: 11,
              },
              data: [2, 6, 5, 6]
            },
          ]
        };
      },
      parkingDuration() {
        var data = [
          ['2小时以内', 200],
          ['2-4小时', 300],
          ['4-6小时', 220],
          ['6-12小时', 50],
          ['12-24', 55],
          ['24小时以上', 78]
        ]
        var sumValue = 903
        var series = [];
        data.forEach((item, i) => {
          series.push({
            name: item[0],
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ["30%", "55%"],
            label: {
              show: false
            },
            itemStyle: {
              label: {
                show: false,
              },
              labelLine: {
                show: false
              },
              borderWidth: 5,
            },
            data: [{
              value: data[i][1],
              name: data[i][0]
            }, {
              value: sumValue - data[i][1],
              name: '',
              itemStyle: {
                color: "rgba(0,0,0,0.1)",
                borderWidth: 0
              },
              tooltip: {
                show: false
              },
              hoverAnimation: false
            }]
          });
        });
        var option = {
          color:['#1ddefd','#ea5019','#a655f1','#f7952d','#2070fc','#59eb96',],
          legend: {
            show: true,
            top: "center",
            left: '70%',
            data: 
              ['2小时以内',
                '2-4小时',
                '4-6小时',
                '6-12小时',
                '12-24',
                '24小时以上'              
            ],           
            width: 50,
            padding: [0, 5],
            itemGap: 25,            
            textStyle: {
              rich: {
                title: {
                  fontSize: 10,
                  lineHeight: 10,
                  color: "rgb(255,255,255)"
                },
                value: {
                  fontSize: 14,
                  lineHeight: 18,
                  color: "rgb(255,255,255)"
                }
              }
            },
          },
          series: series
        }
        return option
      },


    },
    methods: {

    },
    mounted() {

    }
  }

</script>
<style lang="scss">
</style>
