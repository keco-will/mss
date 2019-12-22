<template>
  <div class="back">
    <div class="kuku">
        <h1>Something about my questions</h1>
        
        <el-collapse  v-for="(box,index) in boxes" :key="index" >
            <el-collapse-item title="question" name='1' class="l" >
              {{box.quizStem}} 
              <el-button type="primary" icon="el-icon-edit" circle class="bttn" @click="study"></el-button>
              <el-button type="primary" icon="el-icon-share">分享给小伙伴</el-button>
              <div v-if="show" class="show" :box='box'>
            <p>题目：{{box.quizStem}}</p>
             <single :box="box"></single>
            
            <i class="el-icon-circle-close el-close" @click="quit"></i>
          </div>
            </el-collapse-item>
           
        </el-collapse>
    </div>
    </div>
</template>
<script>
import single from '../components/KuCouple'

  export default {
    data() {
      return {
        activeNames: ['1'],
        boxes:[],       //传回来的题库
        count:0,
        show:false,
        questions:[],
        checkList: [],
        radio:'',
      }
    },
    methods: {
      study(){
        this.show=!this.show;
      },
      quit(){
        this.show=!this.show
      }

    },
    components:{
      
      single,
      // couple
    },
    computed:{
    },
    created(){
      this.$axios.get('/quizzes/repos/'+localStorage.getItem('userId'))
          .then((res)=>{
              for(let i=0;i<res.data.data.list.length;i++){
                this.boxes.push(res.data.data.list[i]);
                let newquestion=[]       //第i道题的几个选项暂存
                newquestion.push(res.data.data.list[i].quizOpA)
                newquestion.push(res.data.data.list[i].quizOpB)
                newquestion.push(res.data.data.list[i].quizOpC)
                newquestion.push(res.data.data.list[i].quizOpD)
                if(res.data.data.list[i].quizOpE!=''){
                    newquestion.push(res.data.data.list[i].quizOpE)
                }
                this.questions.push(newquestion)
              }
          })
     }
  }
</script>
<style scoped>
.back{
  position: absolute;
    width: 100%;
    height: 100%;
  background: rgb(204, 204, 204);
}
.kuku{
    width: 950px;
    margin: 100px auto;
    padding: 10px;
    background: rgb(214, 231, 231);
    border: 2px solid rgb(238, 221, 224);
    border-radius:10px;
}
.l{
  width: 950px;
}
.bttn{
  height: 35px;
  width: 35px;
  background: rgb(113, 181, 236);
}
.show{
  position: fixed;
  top:150px;
  font-size:20px; 
  left: 500px;
  width: 900px;
  height: 600px;
  background: url('../img/sakura.jpg') ;
  background-position:55px -10px; 
  border-radius: 44px;
  opacity: 1;
  border: 2px solid rgb(195, 231, 195);
}
p{
  display: inline-block;
  line-height: 50px;
  padding: 50px 100px;
  font-size:18px; 
}
.el-close{
  cursor: pointer;
  position: fixed;
  top:200px;
  right: 650px;
}
</style>