<template>
  <div class="fit">
    <q-resize-observer @resize="onResize" />
    <div class="chart" ref="myEchart">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';  
  require('echarts-liquidfill')
  import('./echarts_theme.json').then(res => {        
    echarts.registerTheme('abc', res.default)
  })
  
  export default {
    data() {
      return {

      };
    },
    props: ["options"],
    computed: {
      myEchart() {
        return this.$refs.myEchart
      },
      chart() {
        return echarts.init(this.$refs.myEchart,'abc');
      }
    },
    watch: {
      options: function () {
        this.chart.setOption(this.options);
      }
    },
    methods: {
      onResize() {
        this.chart.resize()
      },
      initChart() {
        import('echarts/map/json/china.json').then(res=>{          
          echarts.registerMap('china', res.default);
        })
        this.chart.setOption(this.options);
      },
    },
    mounted() {      
        this.initChart();
        window.onresize = () => {
          this.chart.resize()
        }
      }

    

  };

</script>

<style>
  .chart {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

</style>
