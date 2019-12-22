<template>
<div class="backg">
    <div class="t">
        <h2>用户登陆</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input type="username" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
         } 
       callback();
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
         }       
        callback()
      };
      return {
        userId:'',
        ruleForm: {
          name: '',
          checkPass: '',
        },
        rules: {
          name: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        let data = {
            "username": formName.name,
            "password": formName.checkPass
        }

        this.$axios({
            headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            url: 'https://imlehr.com/mss/users/login',
            data: this.qs.stringify(data)
        }).then((res)=>{
               if(res.data.code==1000){
                  alert('该用户不存在')
                  return false
                }else{
                  this.userId=res.data.data.id
                  alert('欢迎登陆宝贝'+this.userId)
                  localStorage.setItem('userId', this.userId);
                  this.$router.push({name: 'home', params: {userId: this.userId}})  //router path的匹配
                }
            })
          } 
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      mounted(){
       // this.$store.state.userId="keco"
       // alert(this.$store.state.userId)
      }
    }
</script>
<style scoped>
.backg{
  position: absolute;
  top: 0;
  background: url('../img/black.jpg');
  background-size:100% 900px;
  width: 100%;
  height: 920px;
  opacity: 0.7;
}
h2{
    display: block;
    width: 150px;
    font-size: 26px;
    margin: 25px auto;
}
.t{
    width: 600px;
    height: 300px;
    position: relative;
    top: 200px;
    margin: 0 auto;
    background: rgb(185, 184, 199);
    border-radius: 10px;
    border: 2px solid rgb(22, 26, 27);
    opacity: 1;
}
.demo-ruleForm{
    width: 450px;
}

</style>