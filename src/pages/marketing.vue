<template>
  <q-page class="my-page">
    <div class="page-box">
      <div
        class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-12">
          <div class="fit sec">
            <div class="q-py-md">
              <div class="sec-head ">营销渠道反馈</div>
            </div>
            <div class="sec-body">
              <div class="cbox"
                style="background: linear-gradient(to bottom, rgba(48, 108, 188, 0.2), rgba(39, 202, 226, 0.2));">
                <q-table dark class="full-height transparent" title="Treats" :data="data" :columns="columns"
                  row-key="name">
                  <template v-slot:top>
                    <div class="row q-col-gutter-md items-center">
                      <div class="col-auto">
                        <q-select style="min-width:200px" dense dark outlined v-model="exportType"
                          :options="['客流量','车辆来源']" />
                      </div>
                      <div class="col-auto">
                        <q-btn-toggle dark v-model="dateType" toggle-color="cyan-61"
                          :options="[{label: '今日', value: 'one'},{label: '本周', value: 'two'}, {label: '本月', value: 'three'}, {label: '全年', value: 'four'}]" />
                      </div>
                      <div class='col-auto'>
                        <q-input dense outlined v-model="startdate" dark>
                          <template v-slot:prepend>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-date v-model="startdate" mask="YYYY-MM-DD HH:mm" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>

                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-time v-model="startdate" mask="YYYY-MM-DD HH:mm" format24h />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                      <div class="col-auto">
                        -
                      </div>
                      <div class='col-auto'>
                        <q-input dense outlined v-model="startdate" dark>
                          <template v-slot:prepend>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-date v-model="startdate" mask="YYYY-MM-DD HH:mm" />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                          <template v-slot:append>
                            <q-icon name="access_time" class="cursor-pointer">
                              <q-popup-proxy transition-show="scale" transition-hide="scale">
                                <q-time v-model="startdate" mask="YYYY-MM-DD HH:mm" format24h />
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                      <div class="col-auto">
                        <q-btn class="bg-cyan-6" label='查询' icon='search'></q-btn>
                      </div>
                      <div class="col-auto">
                        <q-btn class="bg-cyan-6" label='导出' icon='insert_chart'></q-btn>
                      </div>
                    </div>
                  </template>
                </q-table>
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
    data() {
      return {
        startdate:'2020-1-14 10:58:33',
        enddate:'',
        exportType: '客流量',
        dateType: 'one',
        columns: [{
            name: 'name',
            required: true,
            label: '车牌号',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
            sortable: true
          },
          {
            name: 'calories',
            align: 'center',
            label: '车辆来源省份',
            field: 'calories',
            sortable: true
          },
          {
            name: 'fat',
            label: '数量',
            field: 'fat',
            sortable: true,
            style: 'width: 10px'
          },
          {
            name: 'carbs',
            label: 'Carbs (g)',
            field: 'carbs'
          },
          {
            name: 'protein',
            label: 'Protein (g)',
            field: 'protein'
          },
          {
            name: 'sodium',
            label: 'Sodium (mg)',
            field: 'sodium'
          },
          {
            name: 'calcium',
            label: 'Calcium (%)',
            field: 'calcium',
            sortable: true,
            sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
          },
          {
            name: 'iron',
            label: 'Iron (%)',
            field: 'iron',
            sortable: true,
            sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
          }
        ],
        data: [{
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            calcium: '8%',
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            calcium: '6%',
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            calcium: '3%',
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            calcium: '7%',
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
            calcium: '0%',
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            calcium: '0%',
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            calcium: '0%',
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            calcium: '2%',
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            calcium: '12%',
            iron: '6%'
          }
        ]

      }
    },
    components: {

    },
    computed: {

    },


  }

</script>
<style lang="scss">

</style>
