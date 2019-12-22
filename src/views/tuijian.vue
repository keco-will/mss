<template>
    <div class="container">
        <h1>开始做题了！！！</h1>
        <div v-show="false" id="sss">adfhgjk</div>

        <div class="inner" v-for="(flag,index) in str" :key="index">
            <component :is="flag" 
            :body="mess" 
            :index="index"
            :count="counts"
            :questions="questions[index]"
            @callback="get_anwser"
            ></component>
        </div>
        <el-button type="primary" icon="el-icon-share" @click="submit" style="position:relative; right:0px">提交</el-button>
    </div>
</template>
<script>
import single from '../components/Choice'
import couple from '../components/CheckBox'
export default {
    data(){
        return{
           flags:[],
           a:'single',
           str:['single'],
           answer1:[],  //正确答案
           answer2:[],  //你的答案
           mess:[],
           counts:[],
           questions:[],
           len:'',
           id:'',
           url:'',
           message:'copykkkk',
           userId:'',
           quizId:[]
        }
    },
    methods:{
        submit(){
            alert('提交成功')
        },
        onCopy: function (e) {
            alert('You just copied: ' + e.text)
        },
        onError: function () {
            alert('Failed to copy texts')
        },

       d(){
           this.flags.length=this.len;
           this.str=[...this.flags.map(i=>{
               return i===0 ? 'single' : 'couple'
           })]
       },
       get_anwser(val){
           let a
           if(val.ans===1){
               a='A'
           }
           else if(val.ans===2){
               a='B'
           }
           else if(val.ans===3){
               a='C'
           }
           else if(val.ans===4){
               a='D'
           }
           else if(val.ans===5){
               a='E'
           }
           this.answer2[val.index]=a
        }
    },
    components:{
        single,
        couple
    },
    mounted(){
        this.message=document.location.href+'?token='+this.$route.params.token
    },
    created(){
        this.id=localStorage.getItem('userId')
        this.url='/quizzes/recommend/'+ this.id
        this.$axios.get(this.url)
          .then((res)=>{
              for(let i=0;i<res.data.data.list.length;i++){
                this.counts.push(5)
                this.len=res.data.data.list.length
                this.mess.push(res.data.data.list[i].quizStem)
                let newquestion=[]
                newquestion.push(res.data.data.list[i].quizOpA)
                newquestion.push(res.data.data.list[i].quizOpB)
                newquestion.push(res.data.data.list[i].quizOpC)
                newquestion.push(res.data.data.list[i].quizOpD)
                newquestion.push(res.data.data.list[i].quizOpE)
                this.questions.push(newquestion)
                this.flags.push(res.data.data.list[i].quizType)
                this.answer1.push(res.data.data.list[i].quizAnswer)
                this.quizId.push(res.data.data.list[i].quizId)
              }
              this.d()
          })
        
     },

}
</script>
<style scoped>
h1{
    text-align:center;
}
.container{
    width:1000px; 
    background: rgb(231, 225, 225);
    margin: 50px auto;
    border-radius: 30px; 
}
.inner{
    width: 850px;
    margin: 20px auto;
}
</style>