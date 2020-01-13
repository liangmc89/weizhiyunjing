<template>
  <q-page class="my-page">
    <div class="page-box">
      <div class="row  q-px-md-sm q-px-lg-md q-px-sm-xs q-px-xs-sm full-height q-col-gutter-xs-y-sm q-col-gutter-xs-x-none q-col-gutter-md-sm q-col-gutter-sm-none q-col-gutter-lg-sm q-col-gutter-xl-sm ">
        <div class="col-12">
          <div class="fit sec">
            <div class="q-py-md">
              <div class="sec-head ">问题实时解答</div>
            </div>
            <div class="sec-body">
              <div class="cbox">
                <q-scroll-area class="fit" style="background: linear-gradient(to bottom, rgba(48, 108, 188, 0.2), rgba(39, 202, 226, 0.2));">
                  <q-list dark>
                    <q-item class="no-padding" v-for="(item,index) in qa" :key="index">
                      <q-item-section>
                        <q-item-label class="question">{{item.question}}</q-item-label>
                        <q-item-label class="qdate">发布时间：{{item.qdate}}</q-item-label>
                        <q-item-label class="qtbox">
                          <p class="qt">专家解答</p>
                          <p class="adate">解答时间：{{item.adate}}</p>
                          <p class="answer">{{item.answer}}</p>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-scroll-area>
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
      qa: [{
        question: '景区位置不好找，导航出错、指示标示不全或不明显',
        qdate: '2020-1-13 21:53:52',
        adate: '2020-1-13 21:53:52',
        answer: `很多景区大多建在城市郊区，只有辗转偏僻的支线道路才能到达，这对于许多游客的耐心是一大考验。如果没有连续的清晰指示牌，或者导航上有明确的景区名字，很多游客就会抓狂。
           我都想，连个指示牌都不能连贯，你就敢开门迎客，你真是把自己看的太高了！你是在欺负游客弱智吗？真是把自己当成酒香不怕巷子深了。。。`
      },
      {
        question: '停车场不够用，人车不分流',
        qdate: '2020-1-13 21:53:52',
        adate: '2020-1-13 21:53:52',
        answer: `很多景区投资人在做规划之前根本没有预留适度的停车场位置，做1-2百个停车位就觉得大的不得了，坐井观天。你都没有分析下，每天停车场停满你一天能接待几个游客？你的巨额投资何时才能回本？停车场的大小不光是堵车的问题，更是让人堵心的问题。“每逢假日难停车”成了各大景区心里的痛，一到节假日，与巨大的客流量对应的是停车位的数量无法满足，停车场总是车位紧俏，而且停车费也水涨船高。
客户对于一个景区的评价有时候是很难以捉摸的，他可能在这里吃得好、玩得好，高高兴兴准备走时，却发现“停车费这么贵”，于是差评就在所难免。
景区管理者要想清楚，车辆的价值有多大，游客到你处买的门票值几何，若车辆得不到很好的看管和停靠，游客哪有心思在景区内游山玩水？
再有甚者，规划时未考虑到人车分流，结果到旺季，景区内外人喧车鸣好不热闹！苦了保安大哥，你就是长三头六臂也指挥不过来啊。更别谈出现车祸，影响的又岂止是两家人的旅游兴致？`
      },
      {
        question: '景区厕所配套差',
        qdate: '2020-1-13 21:53:52',
        adate: '2020-1-13 21:53:52',
        answer: `曾有一位管理者说：‘看一个企业的好坏就看三个地方，一看水房，二看账房，三看库房。看水房（或厕所）就知道员工的敬业程度。作为景区，个人认为对厕所的建设投入大小可以看出景区投资人对待游客的尊重程度，而厕所卫生保持程度则一定程度上反映了团队的工作状态。现在绝大部分景区厕所存在诸多的问题，一是脏乱差，苍蝇乱飞，卫生条件不达标；二是数量少，分布不均衡；三是男女厕坑比例不均衡；四是没有充分照顾到老人和小孩儿的实际需求，立便蹲便设置高度千奇百怪；五是投入不重视，大投资造酒店商城，厕所则相形见绌。`
      }
      ]
    }
  },

  mounted () {

  }
}

</script>
<style lang="scss">
.question {
  padding: 16px;
  font-family: shsn;
  font-size: 1.25rem;
  color: #b3f4ff;
}
.qdate {
  padding: 0 16px 8px;
  font-family: shsn;
  font-size: 0.875rem;
  color: #b3f4ff;
  opacity: 0.7;
}
.qtbox {
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
}
.qt {
  font-family: shsn;
  font-size: 1.25rem;
  color: #b3f4ff;
}
.adate {
  font-family: shsn;
  font-size: 0.875rem;
  color: #b3f4ff;
  opacity: 0.7;
}
.answer {
  line-height: 2rem;
  font-family: shsn;
  font-size: 1rem;
}
</style>
