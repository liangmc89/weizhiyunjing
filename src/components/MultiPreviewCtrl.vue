<template>
  <div :class='["monitor-box", windowSize]'>
    <div class=" " style="display:-webkit-flex;-webkit-flex-direction:column;-webkit-flex-wrap: no-wrap;">
      <div id="ocxContainer" class="col-auto  overflow-hidden">       
        <div  class="fit row" style="display:-webkit-flex;">
          <div class="col-6">
            <div class="bg-black fit">
              <video class='fit' src="statics/videos/m1.mp4" webkit-playsinline="true" playsinline autoplay controls muted preload loop></video>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-black fit">
              <video class='fit' src="statics/videos/m2.mp4" webkit-playsinline="true" playsinline  autoplay controls muted preload loop></video>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-black fit">
              <video class='fit' src="statics/videos/m3.mp4" webkit-playsinline="true" playsinline autoplay controls muted preload loop></video>
            </div>
          </div>
          <div class="col-6">
            <div class="bg-black fit">
              <video class='fit' src="statics/videos/m3.mp4" webkit-playsinline="true" playsinline autoplay controls muted preload loop></video>
            </div>
          </div>
        </div>
      </div>
      <div class="col-auto ">
        <div class="row ctt justify-between items-end">
          <div class="col-auto">
            <q-btn label="视频监控" dense flat icon='camera' text-color='mp'>             
            </q-btn>
          </div>
          <div class="col-auto">
            <q-btn dense flat text-color='mp' icon="minimize" @click="windowState='min'"  />
            <q-btn dense flat text-color='mp' icon="crop_square" @click="windowState='max'"  />
            <q-btn dense flat text-color='mp' icon="close" @click="windowState='close'"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MultiPreviewCtrl",
  data () {
    return {
      src: "",
      windowState:'min'
    };
  }, 
  computed: {
    windowSize(){
      switch (this.windowState) {
        case 'max':
          return 'monitor-max'
          break;
        case 'min':
          return 'monitor-min'
          break;
        case 'close':
          return 'monitor-close'
          break;  
        default:
          return 'min'
          break;
      }
    },
   
   
  },
  methods: {
   
  },
  mounted () { }
};
</script>

<style lang='scss'>
#ocxContainer {
  padding:16px 16px 0;
  background:rgb(12,67,129);
  // flex: 1;
}


.text-mp{
  color:rgb(84,205,248);
}

.monitor-box {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0px;
  z-index: 161;
  // border: 2px solid transparent;
  // border-image: $lin 20 20;
  transition: .5s width, height linear;
}

.monitor-close{
  #ocxContainer{height: 0;padding: 0;width: 0;}
}
.ctt{
  padding:8px 16px;
  background:rgb(12,67,129);
}


.monitor-min {
  // height: 20vh !important;
  width: 50vh !important;
}

.monitor-max {
  // height: 88vh !important;
  width: 100% !important;
  //height: 100%;
}
</style>
