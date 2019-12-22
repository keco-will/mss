<template>
    <div>
       <el-container>
            <el-header>
                <el-tabs v-model="activeName" type="card">
                    <el-tab-pane label="我的错题率" name="errors" >我的错题率</el-tab-pane>
                    <el-tab-pane label="我的正确率" name="right" >我的正确率</el-tab-pane>
                    <el-tab-pane label="我的心情记录" name="mood">我的心情记录</el-tab-pane>
                    <el-tab-pane label="我给自己的留言记录" name="markdown">我给自己的留言记录</el-tab-pane>
                </el-tabs>
            </el-header>
            <el-main>
                <component :is="activeName"></component>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import errors from '../components/myerror'
import right from '../components/myRightness'
import mood from '../components/mymood'
import markdown from '../components/markdown'
  export default {
    data() {
      return {
        activeName: 'errors',
    
      };
    },
    methods: {
    },
    components:{
        errors,
        right,
        mood,
        markdown
    }
  };
</script>
<style scoped>
.el-container{
    width:1100px;
    margin: 40px auto;
}
 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
background-color: #E9EEF3;
color: #333;
text-align: center;
line-height: 750px;
height: 750px;
}
</style>