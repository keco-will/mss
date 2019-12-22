<template>
    <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox :label="1">box.quizOpA</el-checkbox>
      <el-checkbox :label="2">box.quizOpB</el-checkbox>
      <el-checkbox :label="3">box.quizOpC</el-checkbox>
      <el-checkbox :label="4">box.quizOpD</el-checkbox>
      <el-checkbox :label="5">box.quizOpE</el-checkbox>
    </el-checkbox-group>
    </div>
</template>
<script>
export default {
    props:['box']
}
</script>