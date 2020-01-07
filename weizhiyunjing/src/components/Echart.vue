<template>
  <div class="fit">
    <q-resize-observer @resize="onResize" />
    <div class="chart" ref="myEchart">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  
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
        this.chart.setOption(this.options);
      },
    },
    mounted() {
      setTimeout(() => {
        this.initChart();
        window.onresize = () => {
          this.chart.resize()
        }
      }, 100);

    },

  };

</script>

<style>
  .chart {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

</style>
