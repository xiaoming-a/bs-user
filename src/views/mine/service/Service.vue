<template>
  <div class="service">
    <div class="s-header">
      <i class="iconfont icon-zuo" @click="$router.go(-1)"/>
      上报维修
    </div>
    <div class="s-main">
      <form @submit.prevent="postMain">
        <ul>

          <li class="li-o">

            <div class="icon" v-if="model.service_icon.icon">
              <img :src="model.service_icon.icon" alt="">
            </div>

            <div class="o-box">
              <i>+</i>
              <label>
                <input type="file" accept="image/*" @change="fileChange($event)">
              </label>
            </div>

          </li>

          <li class="li-t">
            <label for="h-num">房屋编号:</label>
            <input type="text" id="h-num" v-model="model.house_number">
          </li>

          <li class="h-user">
            <label for="h-name">提交人:</label>
            <input type="text" id="h-name" v-model="model.tenant_name">
          </li>

          <li class="h-tel">
            <label for="h-tel">联系电话:</label>
            <input type="number" id="h-tel" v-model="model.telephone">
          </li>

          <li class="h-text">
            <textarea placeholder="备注" id="h-remark" v-model="model.remark">备注</textarea>
          </li>

          <li class="h-btn">
            <button type="submit">提交</button>
          </li>

        </ul>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Service",
    data() {
      return {
        model: {
          house_number: '',
          tenant_name: '',
          telephone: null,
          service_icon: {icon: ''},
          remark: ''
        },
        icon: '',
        file: ''
      }
    },
    methods: {
      //上传图片
      async fileChange(e) {
        let that = this
        this.file = e.target.files[0]
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', this.file)
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        const res = await this.$http.post('http://localhost:3000/user/api/upload', formData, config)
        this.model.service_icon.icon = res.data.url
        this.icon = res.data.url
      },

      //上报维修
      async postMain() {
        const res = await this.$http.post('put_service', this.model)
        await this.$router.push('/mine')
        this.$toast({
          text: '提交成功',
          type: 'success',
          duration: 1000
        })
        this.model = {}
      }
    }
  }
</script>

<style scoped>
  .s-header {
    width: 100vw;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 700;
    background-color: #dedede;
    position: relative;
  }

  .s-header i {
    position: absolute;
    left: 0;
    font-size: 30px;
  }

  .s-main {
    width: 360px;
    padding: 10px;
  }

  /*上传图片*/
  .li-o {
    width: 100%;
    height: 200px;
    border: 1px solid #dedede;
    display: flex;
    flex-wrap: wrap;
  }

  .li-o .icon {
    width: 100px;
    height: 80px;
    margin-left: 10px;
    margin-top: 11px;
  }

  .li-o .icon img {
    width: 100%;
    height: 100%;
  }

  .li-o .o-box {
    position: relative;
    width: 100px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    margin-left: 10px;
    margin-top: 11px;
    border: 1px dashed deepskyblue;
  }


  .li-o .o-box i {
    font-size: 25px;
    color: #dedede;
  }

  .o-box label {
    width: 100px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: inline-block;
  }

  .o-box label input {
    display: none;
  }

  /*电话....*/
  .li-t,
  .h-user,
  .h-tel {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c6c3c3;
  }

  .li-t label,
  .h-user label,
  .h-tel label {
    flex: 1;
    height: 30px;
    text-align: left;
    line-height: 30px;
  }

  .li-t input,
  .h-user input,
  .h-tel input {
    flex: 3;
    height: 30px;
    padding-left: 2px;
    outline: none;
    border: 0;
  }

  /* 备注*/
  .h-text {
    width: 100%;
    margin-top: 20px;
  }

  .h-text textarea {
    display: inline-block;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 5px;
    font-size: 12px;
    color: #999999;
    z-index: 100;
    border: 1px solid deepskyblue;
  }

  /*提交按钮*/
  .h-btn button {
    width: 150px;
    height: 35px;
    margin-top: 20px;
    margin-left: 95px;
    outline: none;
    border: 0;
    background-color: #409EFF;
    color: #ffffff;
    border-radius: 4px;
  }
</style>