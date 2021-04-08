<template>
  <div class="register">
    <!--  头部  -->
    <div class="l-header">编辑资料</div>

    <!--  登录主体 学生  -->
    <div class="l-main" v-if="status==='0'">
      <form @submit.prevent="postZl">
        <ul>

          <li>
            <div class="f-label">
              <label for="st-name">姓名</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-lunkuohua2_yonghu"></span>
              <input type="text" id="st-name" placeholder="请输入姓名" v-model.trim="model.name">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="st-age">年龄</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-lunkuohua2_yonghu"></span>
              <input type="number" id="st-age" placeholder="请输入年龄" v-model.number.trim="model.age">
            </div>
          </li>

          <li class="top">
            <span class="span-st">
              <label class="iconfont icon-nan2" for="st-man">男</label>
              <input type="radio" id="st-man" checked name="gender" value="男" v-model="model.gender">
           </span>
            <span class="span-ld">
              <label class="iconfont icon-nv" for="st-women">女</label>
              <input type="radio" id="st-women" name="gender" value="女" v-model="model.gender">
            </span>
          </li>


          <li>
            <div class="f-label">
              <label for="st-password">密码</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-mima"></span>
              <input type="password" id="st-password" placeholder="请输入密码" v-model.trim="model.password">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="clo">所属大学</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-daxue"></span>
              <input type="text" id="clo" placeholder="请输入所属大学" v-model.trim="model.college">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="st-tel">联系电话</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-dianhua"></span>
              <input type="tel" id="st-tel" placeholder="请输入联系电话" v-model.number.trim="model.telephone">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="st-iden">身份证号码</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-credentials_icon"></span>
              <input type="text" id="st-iden" placeholder="请输入身份证号码" v-model.trim="model.identity_number">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="st-add">家庭住址</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-jia"></span>
              <input type="text" id="st-add" placeholder="请输入家庭住址" v-model.trim="model.address">
            </div>
          </li>


          <li>
            <button class="f-btn" type="submit">提交</button>
          </li>
        </ul>
      </form>
    </div>

    <!--  登录主体 业主  -->
    <div class="l-main" v-if="status==='1'">
      <form @submit.prevent="postZl">
        <ul>

          <li>
            <div class="f-label">
              <label for="ld-name">姓名</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-lunkuohua2_yonghu"></span>
              <input type="text" id="ld-name" placeholder="请输入姓名" v-model.trim="model1.name">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="ld-age">年龄</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-lunkuohua2_yonghu"></span>
              <input type="number" id="ld-age" placeholder="请输入年龄" v-model.number.trim="model1.age">
            </div>
          </li>

          <li class="top">
            <span class="span-st">
              <label class="iconfont icon-nan2" for="ld-man">男</label>
              <input type="radio" id="ld-man" checked name="gender" value="男" v-model="model1.gender">
           </span>
            <span class="span-ld">
              <label class="iconfont icon-nv" for="ld-women">女</label>
              <input type="radio" id="ld-women" name="gender" value="女" v-model="model1.gender">
            </span>
          </li>

          <li>
            <div class="f-label">
              <label for="ld-tel">联系电话</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-dianhua"></span>
              <input type="tel" id="ld-tel" placeholder="请输入联系电话" v-model.number.trim="model1.telephone">
            </div>
          </li>


          <li>
            <div class="f-label">
              <label for="ld-password">密码</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-mima"></span>
              <input type="password" id="ld-password" placeholder="请输入密码" v-model.trim="model1.password">
            </div>
          </li>


          <li>
            <div class="f-label">
              <label for="ld-iden">身份证号码</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-credentials_icon"></span>
              <input type="text" id="ld-iden" placeholder="请输入身份证号码" v-model.trim="model1.identity_number">
            </div>
          </li>

          <li>
            <div class="f-label">
              <label for="ld-add">家庭住址</label>
            </div>
            <div class="f-inp">
              <span class="iconfont icon-jia"></span>
              <input type="text" id="ld-add" placeholder="请输入家庭住址" v-model.trim="model1.address">
            </div>
          </li>

          <li>
            <button class="f-btn" type="submit">提交</button>
          </li>
        </ul>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "zl",
    data() {
      return {
        //学生的数据源
        model: {
          name: '',
          age: null,
          gender: '',
          password: '',
          college: '',
          telephone: null,
          identity_number: '',
          address: '',
        },
        //房东的数据源
        model1: {
          name: '',
          age: null,
          gender: '',
          telephone: null,
          password: '',
          identity_number: '',
          address: '',
        },
        // 判断是不是学生或房东
        status: '',
        id: ''
      }
    },
    methods: {
      //提交数据
      async postZl() {
        if (this.status === '0') {
          const res = await this.$http.put(`student_zl/${this.id}`, this.model)
        } else if (this.status === '1') {
          const res = await this.$http.put(`landlord_zl/${this.id}`, this.model1)
        }
        await this.$router.push('/mine')
        this.$toast({
          text: '提交成功',
          type: 'success',
          duration: 1000
        })
      },

      //获取数据
      async getUser() {
        this.status = sessionStorage.getItem('userStatus')
        this.id = sessionStorage.getItem('userId')
        //status 0 学生 1 业主
        if (this.status === '0') {
          const res = await this.$http.get(`student_zl/${this.id}`)
          this.model = res.data
        } else if (this.status === '1') {
          const res = await this.$http.get(`landlord_zl/${this.id}`)
          this.model1 = res.data
        }
      }
    },
    created() {
      this.getUser()
    }
  }
</script>

<style scoped>
  .l-header {
    width: 100vw;
    height: 49px;
    text-align: center;
    line-height: 49px;
    font-size: 18px;
    font-weight: 800;
    background-color: #ececec;
  }


  /*登录主体*/

  .l-main {
    margin-top: 20px;
    width: 80vw;
    /*background-color: #409EFF;*/
    margin-left: 5vw;
  }

  li {
    margin-top: 20px;
  }

  .l-main li:nth-child(2) {
    margin-top: 20px;
  }

  .l-main li:nth-child(3) {
    margin-top: 10px;
  }


  .f-label {
    font-size: 15px;
  }

  .f-inp {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999797;
    /*background-color: #ff8198;*/
  }


  .f-inp input {
    width: 85%;
    height: 50%;
    outline: none;
    border: none;
  }

  .f-inp input::placeholder {
    font-size: 12px;
    color: #cbc8c8;
  }

  .f-inp span {
    margin-right: 10px;
    font-size: 18px;
  }

  .span-na {
    font-size: 14px;
  }

  .span-ld label,
  .span-st label {
    font-size: 14px;
    vertical-align: top;
  }

  .span-ld {
    margin-left: 20px;
  }

  .f-btn {
    margin-top: 20px;
    margin-left: 60px;
    outline: none;
    border: 0;
    width: 200px;
    height: 30px;
    background-color: skyblue;
    margin-bottom: 20px;
  }

  .stu,
  .lad {
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 50px;
    margin-left: 59px;
    line-height: 50px;
    margin-top: 10px;
    border-radius: 10px;
  }

  .stu {
    background-color: deepskyblue;
  }

  .lad {
    background-color: #00ee6b;
  }

</style>