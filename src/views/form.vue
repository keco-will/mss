<template>
<div class="cont"> 
    <div class="c">
        <div class="my_info">
            <h2>
                您的做题情况如下(没做不算分)：
            </h2>
            <ul>
                <li>我一共完成了：{{this.size}}题</li>
                <li>我的做错了：{{this.errors}}题</li>
                <li>我的正确率：{{right_percent}}</li>
                <li>我自己的评价是：</li>
            </ul>
        </div>
        <div class="cuocuocuo">
            <h1>错题：</h1>
            <ul v-for="(x,index) in entity" :key="index">
                <li>{{x.quizStem}}<br>
                    你的答案是：
                    正确答案是：{{x.quizAnswer}}
                </li>
            </ul>
        </div>
        <div class="ti">
            <h1>已根据我的错题，自动生成推荐题目</h1>
            <el-button round @click="submit">查看我的推荐题目</el-button>
            <el-button round @click="back_front">重做</el-button>
            <el-button round @click="back">取消</el-button>
        </div>
    </div></div>
</template>
<script>
export default {
    data(){
        return{
            errors:0,
            size:0,
            entity:[]
        }
    },
    mounted(){
        this.entity=this.$route.params.quiz
        this.errors=localStorage.getItem('errors')
        this.size=localStorage.getItem('size')
         this.$axios.post('/records/details',
         {
             userId:1,
             recordWrongs:this.entity,
             errors:0
         })
    },
    computed:{
        right_percent(){
            if(this.size==0){
                return 0 +'%'
            }else{
                let i=((this.size-this.errors)/this.size).toFixed(4)
                return i*100+'%'
            }
        }
    },
    methods:{
        back_front(){
            if(this.$store.state.makechoise===0){
                this.$router.push({name: 'single', params: {token: this.$store.state.token,userId:localStorage.getItem('userId')}})
            }else{
                this.$router.push({name: 'couple', params: {token: this.$store.state.token,userId:localStorage.getItem('userId')}})
            }
        },
        back(){
            this.$router.push({name:'home',params:{userId:localStorage.getItem('userId')}})
        },
        submit(){
            this.$router.push({name: 'tuijian', params: {userId:localStorage.getItem('userId')}})
        }
    }

}
</script>
<style scoped>
.cuocuocuo{
    width: 550px;
    margin: 50px auto;
    font-size: 17px;
    color: rgb(167, 125, 20);
}
.my_info{
    width: 350px;
    margin: 50px auto;
    font-size: 24px;
    color: rgb(2, 77, 83);
}
.c{
    background: white;
    width:1250px;
    background-size:cover;
    background-position:80px -50px;
    box-shadow:0 0 10px 5px #aaa inset;
    margin: 110px auto;
    border-radius: 30px; 
    opacity: 0.8;
    border: 1px solid rgb(230, 221, 154);
}
.cont{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(182, 181, 181);
    padding: 0;
    margin: 0;
}
.ti{
    width: 550px;
    margin: 50px auto;
    color: rgb(2, 77, 83);
}
</style>