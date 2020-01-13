<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-12 ">
          <q-scroll-area class="fit">            
            <q-tree  class="col-12 col-sm-6 text-tx" control-color='tx' text-color='tx' :nodes="simple" node-key="label" tick-strategy="leaf"  :ticked.sync="ticked" />
          </q-scroll-area>
        </div>
        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-6 col-xs-12 ">
          <div class="cbox ">
            <div id="home-map" class="map">
            </div>
            <MultiPreviewCtrl></MultiPreviewCtrl>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import AMap from "AMap";
import AMapUI from "AMapUI";
import MultiPreviewCtrl from '../components/MultiPreviewCtrl'
export default {
  name: 'PageIndex',
  data () {
    return {
      infoWindow:new AMap.InfoWindow(),
      markers:[],
      simple: [{
        label: '上海南翔古猗园',
        children: [{
          label: '游客中心',
          children: [{
            label: '询问台'
          },
          {
            label: '入口1'
          }
          ]
        },
        {
          label: '动物园',
          children: [{
            label: '入口2'
          },
          {
            label: '入口3'
          }
          ]
        },
        {
          label: '外围',
          children: [{
            label: '东门'
          },
          {
            label: '南门'
          },
          {
            label: '出口'
          }
          ]
        }
        ]
      }],
      ticked: [],
      map: {},

    }
  },
  components: {
    MultiPreviewCtrl
  },
  computed: {

  },
  watch:{
    ticked(newVal,oldVal){
      if(newVal.length>0){
        this.markers.forEach(f=>{
           if(newVal.indexOf(f.C.title)!=-1){
             f.show()
           }else{
             f.hide()
           }
         })
      }else{
        this.markers.forEach(f=>{
          f.hide()
        })
      }
    }
  },
  methods: {
    initMap () {
      let _this = this
      AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {
        var map = new AMap.Map('home-map', {
          zoom: 18, //级别
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
       var  points=[{
          title:'询问台',
          "lng": 121.316625,
          "lat": 31.291803,
          "count": 100
        },
        {
          title:'入口1',
          "lng": 121.316725,
          "lat": 31.291603,
          "count": 600
        },
        {
          title:'入口2',
          "lng": 121.316665,
          "lat": 31.292803,
          "count": 300
        },
        {
          title:'入口3',
          "lng": 121.316625,
          "lat": 31.29216,
          "count": 200
        },
        { 
          title:'东门',
          "lng": 121.311625,
          "lat": 31.29416,
          "count": 200
        },
        { 
          title:'南门',
          "lng": 121.316655,
          "lat": 31.29218,
          "count": 400
        },
        { 
          title:'出口',
          "lng": 121.316625,
          "lat": 31.26216,
          "count": 200
        }        
        ]

        points.forEach(f=>{
          var marker= new AMap.Marker({
             position: new AMap.LngLat(f.lng, f.lat),   
             title: f.title,
             visible:false,
             animation:'AMAP_ANIMATION_DROP',
             map:map
          })
          marker.on('click',(e)=>{
            console.log(e)
            var content=`<div class="q-markup-table q-table__container q-table__card bg-indigo-8 q-table--horizontal-separator q-table--dark q-table__card--dark q-dark q-table--no-wrap"><table class="q-table"><thead><tr><th class='text-h6 text-center' colspan="2">${e.target.C.title}</th></tr></thead><tbody><tr><td class="text-right">状态</td><td class="text-left">在线</td></tr><tr><td class="text-right">类型</td><td class="text-left">枪机</td></tr><tr><td class="text-right">经度</td><td class="text-left">${e.lnglat.lng}</td></tr><tr><td class="text-right">纬度</td><td class="text-left">${e.lnglat.lat}</td></tr></tbody></table></div>`
            _this.infoWindow.setContent(content)
             _this.infoWindow.open(map,e.lnglat)
          })
          map.add(marker)
          _this.markers.push(marker)
        })
         
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
.text-tx{
  color:#00f6b8;
}
.amap-info-content{
  padding:0;
}
</style>
