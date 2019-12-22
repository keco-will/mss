<template>
    <div class="contain2">
        {{body[index]}}
        <br>
        <br>
        <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(question,index) in questions" :label="index+1" :key="index+1" @change="submit">{{question}}</el-checkbox>
            <!-- <el-checkbox prop='quizOpA'>{{question.quizOpA}}</el-checkbox> -->
        </el-checkbox-group>
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
        checkList: [],
        show:true
      }
    },
    methods:{
      submit(){
        let a=''
        for(let i=0;i<this.checkList.length;i++){
          if(this.checkList[i]===1){
               a+='A'
           }else if(this.checkList[i]===2){
                   a+='B'
           }else if(this.checkList[i]===3){
                   a+='C'
           }else if(this.checkList[i]===4){
                   a+='D'
           }else if(this.checkList[i]===5){
                   a+='E'
           }
        }
        this.$emit('callbacking',{ans:a, index:this.index})
      }
    },
    computed:{
       vif(){
         let a='';
         for(let i=0;i<this.checkList.length;i++){
          if(this.checkList[i]===1){
               a+='A'
           }else if(this.checkList[i]===2){
                   a+='B'
           }else if(this.checkList[i]===3){
                   a+='C'
           }else if(this.checkList[i]===4){
                   a+='D'
           }else if(this.checkList[i]===5){
                   a+='E'
           }
        }
        if(this.answer==a){
          return true
        }
        return false
       }
    }

  };
</script>

<style>
.contain2{
    border:1px solid rgb(127, 133, 133);
    padding:10px;
    margin:20px;
    border-radius:10px;
    background: white;
}
.i{
  margin: 10px auto;
  line-height: 10px;
}

</style>