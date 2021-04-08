<template>
  <div class="pay">
    <div class="p-header">
      <i class="iconfont icon-zuo" @click="$router.go(-1)"/>
      缴费单
    </div>
    <div class="p-tal" v-if="model">
      <table>
        <tr>
          <td>缴费单号</td>
          <td>{{model.pay_number}}</td>
        </tr>
        <tr>
          <td>房屋编号</td>
          <td>{{model.house_number}}</td>
        </tr>
        <tr>
          <td>学生编号</td>
          <td>{{model.student_number}}</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>{{model.name}}</td>
        </tr>
        <tr>
          <td>租金（元）</td>
          <td>{{model.rent}}</td>
        </tr>
        <tr>
          <td>水费（元）</td>
          <td>{{model.water_rate}}</td>
        </tr>
        <tr>
          <td>电费（元）</td>
          <td>{{model.electric_charge}}</td>
        </tr>
        <tr>
          <td>燃气费（元）</td>
          <td>{{model.gas_fee}}</td>
        </tr>
        <tr>
          <td>处理垃圾费用（元）</td>
          <td>{{model.garbage_fees}}</td>
        </tr>
      </table>
    </div>
    <div class="p-tit" v-else>没有缴费信息哦</div>
  </div>
</template>

<script>
  export default {
    name: "Pay",
    data() {
      return {
        model: {}
      }
    },
    methods: {
      async getPay() {
        //用户编号
        let num = sessionStorage.getItem('num')
        // 获取该用户的缴费信息
        const res = await this.$http.post('pay', {num})
        this.model = res.data[0]
        console.log(this.model)
      }
    },
    created() {
      this.getPay()
    }
  }
</script>

<style scoped>
  .p-header {
    width: 100vw;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    background-color: #dedede;
    position: relative;
  }

  .p-header i {
    position: absolute;
    left: 0;
    font-size: 30px;
  }


  /*表格*/
  .p-tal {
    margin-top: 20px;
  }

  table {
    width: 340px;
    margin-left: 9px;
    border: 1px solid #b3adad;
  }

  table tr {
    display: inline-block;
    width: 100%;
  }

  table tr:nth-child(odd) {
    background-color: #b2f8b0;
  }


  table tr td {
    width: 170px;
    height: 40px;
    padding-left: 6px;
    border-top: 1px solid #b3adad;
  }

  table tr:first-child td {
    border-top: 0;
  }


  table tr td:first-child {
    border-right: 1px solid #b3adad;
  }

  .p-tit{
    width: 150px;
    height: 40px;
    /*background-color: #409EFF;*/
    margin: 20px auto;
    text-align: center;
    line-height: 40px;
  }

</style>