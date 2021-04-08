<template>
  <div class="pay">
    <div class="p-header">
      <i class="iconfont icon-zuo" @click="$router.go(-1)"/>
      合同信息
    </div>
    <div class="p-tal" v-if="model">
      <table>
        <tr>
          <td>合同编号</td>
          <td>{{model.contract_number}}</td>
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
          <td>起始日期</td>
          <td>{{model.begin_date | dateFormat}}</td>
        </tr>
        <tr>
          <td>结束日期</td>
          <td>{{model.finish_date | dateFormat}}</td>
        </tr>
        <tr>
          <td>合同状况</td>
          <td>{{model.contract_state}}</td>
        </tr>
        <tr>
          <td>租金（元）</td>
          <td>{{model.rent}}</td>
        </tr>
        <tr>
          <td>押金（元）</td>
          <td>{{model.cash_pledge}}</td>
        </tr>

      </table>
    </div>
    <div class="p-tit" v-else>没有合同信息哦</div>
  </div>
</template>

<script>
  export default {
    name: "Contract",
    data() {
      return {
        model: {}
      }
    },
    methods: {
      async getContract() {
        //用户编号
        let num = sessionStorage.getItem('num')
        // 获取该用户的缴费信息
        const res = await this.$http.post('contract', {num})
        this.model = res.data[0]
      }
    },
    created() {
      this.getContract()
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