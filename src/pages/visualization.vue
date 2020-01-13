<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="column full-height  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-y-sm q-col-gutter-sm-y-none q-col-gutter-lg-y-sm q-col-gutter-xl-y-sm">
        <div class="col-6">
          <div class="row full-height q-col-gutter-xs-x-xs q-col-gutter-sm-x-sm q-col-gutter-md-x-sm q-col-gutter-lg-x-sm q-col-gutter-xl-x-sm">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="bbox">
                <div class="sec">
                  <div class="sec-head">季度可视化报告</div>
                  <div class="sec-body">
                    <echarts :options='visualizationQuarter'></echarts>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div class="bbox">
                <div class="sec">
                  <div class="sec-head">年度可视化报告</div>
                  <div class="sec-body">
                    <echarts :options='visualizationYear'></echarts>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="bbox">
            <div class="sec">
              <div class="sec-head">月度可视化报告</div>
              <div class="sec-body">
                <echarts :options='visualizationMonth'></echarts>
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
  methods: {
    getRadom (m, n) {

      var num = Math.floor(Math.random() * (m - n + 1) + n)
      return num
    },
    getRadomArray (m, n, l) {
      var arr = []
      for (let i = 0; i < l; i++) {
        arr.push(this.getRadom(m, n))
      }
      return arr
    }
  },
  computed: {
    visualizationQuarter () {
      let _this = this
      var color = ['#00f6b8', '#b08fff', '#b08fff', '#ff7b8b', '#ff7b8b']
      var data = ['游客量', '车流量', '酒店入住量', '餐饮', '娱乐']
      var xData = ['第一季度', '第二季度', '第三季度', '第四季度']
      var series = []
      var legendData = []
      data.forEach((item, index) => {
        legendData.push({
          name: item,
          textStyle: {
            color: color[index]
          }
        })
        series.push({
          name: item,
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: color[index]
            }
          },
          data: _this.getRadomArray(1000, 5000, xData.length)
        })
      })
      return {
        color: color,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendData
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
          data: xData,
        }],
        yAxis: [{
          type: 'value',

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
        series: series
      };
    },
    visualizationMonth () {
      let _this = this
      var color = ['#00f6b8', '#b08fff', '#b08fff', '#ff7b8b', '#ff7b8b']
      var data = ['游客量', '车流量', '酒店入住量', '餐饮', '娱乐']
      var xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      ]
      var series = []
      var legendData = []
      data.forEach((item, index) => {
        legendData.push({
          name: item,
          textStyle: {
            color: color[index]
          }
        })
        series.push({
          name: item,
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: color[index]
            }
          },
          data: _this.getRadomArray(10, 350, xData.length)
        })
      })
      return {
        color: color,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendData
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
          data: xData,
        }],
        yAxis: [{
          type: 'value',

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
        series: series
      };
    },
    visualizationYear () {
      let _this = this
      var color = ['#00f6b8', '#b08fff', '#b08fff', '#ff7b8b', '#ff7b8b']
      var data = ['游客量', '车流量', '酒店入住量', '餐饮', '娱乐']
      var xData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      var series = []
      var legendData = []
      data.forEach((item, index) => {
        legendData.push({
          name: item,
          textStyle: {
            color: color[index]
          }
        })
        series.push({
          name: item,
          type: 'line',
          smooth: true,
          symbolSize: 0,
          lineStyle: {
            normal: {
              color: color[index]
            }
          },
          data: _this.getRadomArray(2000, 5000, xData.length)
        })
      })
      return {
        color: color,
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legendData
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
          data: xData,
        }],
        yAxis: [{
          type: 'value',

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
        series: series
      };
    },
  },
  mounted () {

  }
}

</script>
<style lang="scss">
</style>
