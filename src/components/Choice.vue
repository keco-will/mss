<template>
    <div class="contain1">
        {{body[index]}}
        <br>
        <br>
        <el-radio-group v-model="radio" v-for="(question,index) in questions" :key="index">
            <el-radio :label="index+1" @change="submit">
              {{questions[index]}}
            </el-radio>
        </el-radio-group>
        <div v-show="show_i">
                <el-button class="i" type="success" icon="el-icon-check" circle v-if="vif"></el-button>
                <el-button class="i" type='danger' icon="el-icon-close" circle v-else></el-button>
                <p>正确答案是：{{answer}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    props:['body','count','questions','index','mess','answer','show_i'],
    data () {
      return {
        radio: '',
        p:1,
        ind:this.index,
       // show_i:false
      };
    },
    computed:{
      vif(){
        let c;
        if(this.radio==1){
            c='A'
            if(this.answer==c)
            return true
        }else if(this.radio==2){
            c='B'
            if(this.answer==c)
            return true
        }else if(this.radio==3){
            c='C'
            if(this.answer==c)
            return true
        }else if(this.radio==4){
            c='D'
            if(this.answer==c)
            return true
        }else if(this.radio==5){
            c='E'
            if(this.answer==c)
            return true
        }
        return false
      }
    },
    methods:{
      submit(){
        this.$emit('callback',{ans:this.radio,index:this.index})
      },
     
    },
    mounted(){

    }
  }
</script>

<style scoped>
.contain1{
    margin:20px;
    border:1px solid grey;
    padding:10px;
    border-radius:10px;
     background: white;
}
.i{
  margin: 10px auto;
  line-height: 10px;
}
</style>