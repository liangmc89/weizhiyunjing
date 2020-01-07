<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
          <div class="column fit q-col-gutter-y-sm">
            <div class="col-auto">
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
            <div class="col-auto">
              <div class="bbox">
                <video controls loop autoplay='true' class="bg-transparent" muted='true' width="100%" height="100%" style='display:block' src="statics/videos/gc5.mp4"></video>
              </div>
            </div>
            <div class="col">
              <div class="bbox">
                <div class="fit relative-position">
                  <q-carousel swipeable infinite v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated control-color="primary" class="bg-transparent fit">
                    <q-carousel-slide name="style" class="column no-padding ">
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
                      <div class="col">
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
                    </q-carousel-slide>
                    <q-carousel-slide name="tv" class="column no-padding ">
                    </q-carousel-slide>
                  </q-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
          <div class="column fit ">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6 mobile-map">
              <div class="cbox ">
                <div id="home-map" class="map">
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 ">
              <div class="full-height row  q-pt-xl-sm q-pt-sm q-col-gutter-x-sm q-col-gutter-sm-y-sm q-col-gutter-xs-y-sm">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="bbox">
                    <div class='sec'>
                      <div class='sec-head'>
                        舆情分析
                      </div>
                      <div class="row">
                        <div class="col-6">
                          <q-item dark clickable v-ripple>
                            <q-item-section side top>
                              <img src="statics/icons/ico (1).png" class="im" />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label class="">今日舆情优惠</q-item-label>
                              <q-item-label class="t1">200
                                <span style="font-size:.5em;margin-left:5px">例</span>
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                        </div>
                        <div class="col-6">
                          <q-item dark clickable v-ripple>
                            <q-item-section side top>
                              <img src="statics/icons/ico (2).png" class="im" />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label class="">今日热门话题</q-item-label>
                              <q-item-label class="t2">200
                                <span style="font-size:.5em;margin-left:5px">个</span>
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                        </div>
                      </div>
                      <div class='sec-body comf relative-position'>
                        <div class="absolute-full">
                          <echarts :options='sentiment' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="bbox">
                    <div class='sec'>
                      <div class='sec-head'>
                        精品路线分析
                      </div>
                      <q-item dark clickable v-ripple>
                        <q-item-section side top>
                          <img src="statics/icons/ico (3).png" class="im" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label class="today_line">今日热门线路</q-item-label>
                        </q-item-section>
                      </q-item>
                      <div class='sec-body comf relative-position'>
                        <div class="absolute-full">
                          <echarts :options='todayLine' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 ">
          <div class="column full-height q-col-gutter-sm">
            <div class="col-5">
              <div class="bbox"></div>
            </div>
            <div class="col-7">
              <div class="bbox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import AMap from "AMap";
import AMapUI from "AMapUI";
import clock from '../components/clock.vue'
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      showForecast: false,
      map: {},
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
    clock
  },
  computed: {
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
          radius: "80%",
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
    todayLine () {
      let option = {
        color: ['#0576bc'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            show: false
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          type: 'category',
          data: ['巴西', '印尼', '美国',]
        },
        series: [{
          barWidth: 15,
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#ffffff',
                fontSize: '16',
              },
              formatter: () => { }
            }
          },
        },

        ]
      };
      return option;
    },
    sentiment () {
      return {
        color: ['#0693de', '#0e73b1', '#004a77'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },

        xAxis: [{
          type: 'value',
          show: false
        }

        ],
        yAxis: [{
          type: 'category',
          data: ['舆情'],
          show: false
        }],
        series: [

          {
            name: '百度',
            type: 'bar',
            barWidth: 50,
            stack: '搜索引擎',
            data: [220],
            "itemStyle": {
              "normal": {
                "barBorderRadius": 0,
                "label": {
                  "show": true,
                  "position": "bottom",
                  formatter: "{a}{c}"
                }
              }
            },


          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120],
            "itemStyle": {
              "normal": {
                "barBorderRadius": 0,
                "label": {
                  "show": true,
                  "position": "bottom",
                  formatter: "{a}{c}"
                }
              }
            },
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60],
            "itemStyle": {
              "normal": {
                "barBorderRadius": 0,
                "label": {
                  "show": true,
                  "position": "bottom",
                  formatter: "{a}{c}"
                }
              }
            },
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62],
            "itemStyle": {
              "normal": {
                "barBorderRadius": 0,
                "label": {
                  "show": true,
                  "position": "bottom",
                  formatter: "{a}{c}"
                }
              }
            },
          }
        ]
      };
    },
  },
  methods: {
    initMap () {
      let _this = this
      AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {

        var map = new AMap.Map('home-map', {
          zoom: 17, //级别
          center: [121.316705, 31.29193], //中心点坐标
          viewMode: '3D' //使用3D视图
        });

        //缩放控件
        map.addControl(new BasicControl.Zoom({
          position: 'lt', //left top，左上角
          showZoomNum: true //显示zoom值
        }));

        //图层切换控件
        map.addControl(new BasicControl.LayerSwitcher({
          position: 'rt' //right top，右上角
        }));

        //实时交通控件
        map.addControl(new BasicControl.Traffic({
          position: 'lb' //left bottom, 左下角
        }));
        var heatmap;
        var points = [{
          "lng": 121.316625,
          "lat": 31.291803,
          "count": 100
        },
        {
          "lng": 121.316725,
          "lat": 31.291603,
          "count": 600
        },
        {
          "lng": 121.316665,
          "lat": 31.292803,
          "count": 300
        },
        {
          "lng": 121.316625,
          "lat": 31.29216,
          "count": 200
        },
        {
          "lng": 121.311625,
          "lat": 31.29416,
          "count": 200
        },
        {
          "lng": 121.316655,
          "lat": 31.29218,
          "count": 400
        },
        {
          "lng": 121.316625,
          "lat": 31.26216,
          "count": 200
        },
        {
          "lng": 121.31699,
          "lat": 31.291995,
          "count": 222
        },
        {
          "lng": 121.316249,
          "lat": 31.291848,
          "count": 313
        },
        {
          "lng": 121.315493,
          "lat": 31.292101,
          "count": 140
        },
        {
          "lng": 121.316351,
          "lat": 31.290991,
          "count": 55
        },
        {
          "lng": 121.31538,
          "lat": 31.290991,
          "count": 1680
        },
        {
          "lng": 121.31548,
          "lat": 31.290791,
          "count": 1680
        }
        ];
        map.plugin(["AMap.Heatmap"], function () { //加载热力图插件
          heatmap = new AMap.Heatmap(map, {
            radius: 25, //给定半径
            opacity: [0, 0.8]
          }); //在地图对象叠加热力图
          heatmap.setDataSet({
            data: points,
            max: 500,

          }); //设置热力图数据集
          //具体参数见接口文档
        });
        _this.map = map
      });

    }
  },
  mounted () {
    this.initMap()
  }
}

</script>
<style lang="scss">
.bbox {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 15px solid transparent;
  border-image: url("../statics/images/bbox.png") 15 15;
  position: relative;
}

.cbox {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 15px solid transparent;
  border-image: url("../statics/images/cbox.png") 15 15;
  position: relative;
}

.bbox > div {
  background: linear-gradient(
    to bottom,
    rgba(48, 108, 188, 0.2),
    rgba(39, 202, 226, 0.2)
  );
}

.tourist .col {
  text-align: center;

  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  p:first-child {
    font-size: 2.4vh;
    font-weight: 700;
    margin-top: 1vh;
  }

  p:last-child {
    margin-bottom: 5px;
    padding: 5px 3px;
    font-size: 12px;
    color: #00cfff;
    background: linear-gradient(
      to bottom,
      rgba(48, 108, 188, 0.2),
      rgba(39, 202, 226, 0.2)
    );
  }

  .fp {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .lp {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}

#home-map {
  width: 100%;
  height: 100%;
}

.mobile {
  .comf {
    flex: initial;
    height: 25vh;
  }

  .map {
    height: 80vh !important;
  }
}

.today_line {
  font-size: 2vh;
  font-weight: 500;
  font-family: shsn;
}

.t1 {
  font-size: 2.2vh;
  color: #0086ff;
  font-family: shsn;
}

.t2 {
  font-size: 2.2vh;
  font-family: shsn;
  color: #6aebb6;
}

.im {
  width: 3.6rem;
}
</style>
