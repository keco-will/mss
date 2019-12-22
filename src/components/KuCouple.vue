<template>
  <div>
    <el-radio-group v-model="radio" >
        <el-radio :label="1">{{box.quizOpA}}</el-radio>
        <el-radio :label="2">{{box.quizOpB}}</el-radio>
        <el-radio :label="3">{{box.quizOpC}}</el-radio>
        <el-radio :label="4">{{box.quizOpD}}</el-radio>
        <el-radio :label="5">{{box.quizOpE}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
props:['box'],
data(){
    return{
        radio:''
    }
}
}
</script>

<style>
.el-radio{
    font-size:20px; 
}
</style>