<template> 
<div class="back">
    <div class="container">
        <h1>开始做题了！！！</h1>
        <div v-show="false" id="sss">adfhgjk</div>
        <el-button type="primary" icon="el-icon-share" v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">分享！！</el-button>
        <div class="inner" v-for="(flag,index) in str" :key="index">
            <component :is="flag" 
            :body="mess" 
            :index="index"
            :count="counts"
            :questions="questions[index]"
            :answer="answer1[index]" 
            :show_i="show_i" 
            @callback="get_anwser1"
            @callbacking="get_anwser2"
            ></component>
            
        </div>
        <el-button round @click="submit"> 提交</el-button>
        <el-button v-show="show_btn" type="primary" icon="el-icon-share" @click="check" style="position:relative; right:0px" >查看本轮做题情况</el-button>
        <el-button round @click="back">回到主页</el-button>
    </div>
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
           answer1:[],       //正确答案
           answer2:[],       //你的答案
           mess:[],          //每道题的题干
           counts:[],        //题目答案的数目-在答案数量数目不明的时候绑定,暂时还没有使用
           questions:[],     // 以数组的形式，每一个数组包含某一道题的四个答案结构如此：[[],[],[]] 
           message:'sdgd',   //复制内容-分享功能
           len:'',           //题目数量    
           id:'',            //用户上传题目后，会拿到一个改题目的token
           url:'',
           quizId:[],
           errors:0,         //错题个数
           errorslist:[],
           show_btn:false,
           show_i:false
        }
    },
    methods:{
        back(){
            this.$router.push({name:'home',params:{userId:localStorage.getItem('userId')}})
        },
        submit(){
            this.show_btn=!this.show_btn
            this.show_i=!this.show_i
           // localStorage.setItem("show_i",this.show_i)
        },
        check(){
            let len=0;
            for(let i=0;i<this.flags.length;i++){
                if(this.answer2[i]==this.answer1[i] || this.answer2[i]==undefined){
                    if(this.answer2[i]==this.answer1[i]){
                        len++
                    }
                    continue
                }else{
                    len++
                    this.errors++     //将错题收到一个对象里面，从而向后台按格式传值
                    let g={}
                    g.quizStem=this.mess[i]
                    g.quizOpA=this.questions[i][0]
                    g.quizOpB=this.questions[i][1]   
                    g.quizOpC=this.questions[i][2]
                    g.quizOpD=this.questions[i][3]
                    if(this.questions[i].length>4){
                        g.quizOpE=this.questions[i][4]   //可能没有e选项
                    }
                    g.quizAnswer=this.answer1[i]
                    g.quizId=this.quizId[i]
                    g.quizType=this.flags[i]
                    this.errorslist.push(g)
                }
            }
            localStorage.setItem('errors',this.errors)
            localStorage.setItem('size',len)
            this.$router.push({name:'form',params:{token:this.id, quiz:this.errorslist,userId:localStorage.getItem('userId')}})  //上传错题；
        },
        onCopy: function (e) {
            alert('You just copied: ' + e.text)
        },
        onError: function () {
            alert('Failed to copy texts')
        },

       d(){
           this.flags.length=this.len;     //人为的为题目数量赋值，防止数量的不可控
           this.str=[...this.flags.map(i=>{
               return i===0 ? 'single' : 'couple'
           })]
       },
       get_anwser1(val){
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
        },
        get_anwser2(val){
           this.answer2[val.index]=val.ans
        }
    },
    components:{
        single,
        couple
    },
    mounted(){
        this.message=document.location.href+localStorage.getItem("userId")+"/"+ '?token='+this.$route.params.token
    },
    created(){
        this.id=this.$route.params.token
        this.url='/quizzes/onlines/'+ this.id
        this.$axios.get(this.url)
          .then((res)=>{
              for(let i=0;i<res.data.data.list.length;i++){
                this.counts.push(5)
                this.len=res.data.data.list.length
                this.mess.push(res.data.data.list[i].quizStem)
                let newquestion=[]       //第i道题的几个选项暂存
                newquestion.push(res.data.data.list[i].quizOpA)
                newquestion.push(res.data.data.list[i].quizOpB)
                newquestion.push(res.data.data.list[i].quizOpC)
                newquestion.push(res.data.data.list[i].quizOpD)
                if(res.data.data.list[i].quizOpE!=''){
                    newquestion.push(res.data.data.list[i].quizOpE)
                }
                
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
.back{
	position: absolute;
    width: 80%;
    height: auto;
    background: rgb(161, 160, 160);
    padding: 0;
    margin: 0;
}
h1{
    text-align:center;
}
.container{
    width:1000px; 
    background:rgb(243, 243, 219) ;
    background-position:80px -50px;
    opacity: 0.9;
    box-shadow:0 0 10px 5px #aaa inset;
    margin: 50px auto;
    border-radius: 30px; 
    border: 1px solid rgb(230, 221, 154);
}
.inner{
    width: 850px;
    margin: 20px auto;
}
</style>