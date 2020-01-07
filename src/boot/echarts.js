// import something here
import echarts from '../components/Echart.vue'
// "async" is optional
export default async ({
  Vue
}) => {
  Vue.component('echarts', {
    ...echarts
  })
}
