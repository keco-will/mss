<template>
    <div class="home">
        <h2>指难</h2>
        <div class="submitwork">
            <a  class="wenjian" @click="tofiles">上传文件</a>
        </div>
        <div class="tiku">
            <a  class="tikuk" @click="toku">查看题库</a>
        </div>
        <div class="qingkuang">
            <a  class="qingkuangtongji" @click="tosituation">我的情况统计</a>
        </div>
        <!-- <div class="xueyou">
            <router-link  class="yunxueyou" to="/ku">我的云学友</router-link>
        </div> -->
    </div>
</template>

<script>

export default {
    data(){
        return{
            binding:'555555555555555555',
            isshow:false,
            userId:''
        }
    },
    methods:{
        tofiles(){
            this.$router.push({name: 'files', params: {userId: localStorage.getItem('userId')}})
        },
        toku(){
            this.$router.push({name: 'tiku', params: {userId: localStorage.getItem('userId')}})
        },
        tosituation(){
            this.$router.push({name: 'situation', params: {userId: localStorage.getItem('userId')}})
        },
        changeopatic1(){
            let w=document.getElementsByClassName('wenjian')[0];
            w.addEventListener('mouseover',function(){
                w.style.fontSize= '45px';
                w.style.transition='all .4s'
                w.style.opacity=0.9;
            })
            w.addEventListener('mouseout',function(){
                w.style.fontSize= '35px';
                w.style.opacity=0.4;
            })
        },
        changeopatic2(){
            let w=document.getElementsByClassName('tikuk')[0];
            w.addEventListener('mouseover',function(){
                w.style.fontSize= '45px';
                w.style.transition='all .4s'
                w.style.opacity=0.9;
            })
            w.addEventListener('mouseout',function(){
                w.style.fontSize= '35px';
                w.style.opacity=0.4;
            })
        },
        changeopatic3(){
            let w=document.getElementsByClassName('qingkuangtongji')[0];
            w.addEventListener('mouseover',function(){
                w.style.fontSize= '45px';
                w.style.transition='all .4s'
                w.style.opacity=0.9;
            })
            w.addEventListener('mouseout',function(){
                w.style.fontSize= '35px';
                w.style.opacity=0.4;
            })
        },
        changeopatic4(){
            let w=document.getElementsByClassName('qingkuangtongji')[0];
            w.addEventListener('mouseover',function(){
                w.style.fontSize= '45px';
                w.style.transition='all .4s'
                w.style.opacity=0.9;
            })
            w.addEventListener('mouseout',function(){
                w.style.fontSize= '35px';
                w.style.opacity=0.4;
            })
        }
    },
    mounted(){ 
        this.changeopatic1();
        this.changeopatic2();
        this.changeopatic3();
        //alert(localStorage.getItem('userId'))   
        //在页面协议中，建立一个数据的暂存管理。设置后便不会删除，直到关闭页面
        //vue中自带状态管理的vuex，所以不提倡这种方法
    }
}
</script>

<style scoped>
.home{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(194, 220, 235);
    padding: 0;
    margin: 0;
}
h2{
    box-shadow: 0 2px 4px rgba(245, 245, 242, 0.12), 0 0 100px rgba(233, 238, 215, 0.04);
    opacity: 0.8;
    display: block;
    width: 650px;
    height: 80px;
    text-align: center;
    color: rgb(10, 41, 100);
    margin:35px auto;
    font-size: 50px;
    position: relative;
    transition:all 2s;
}

.wenjian{
     text-decoration:none;
     float: left;
     color: rgb(216, 202, 185);
     font-size: 38px;
     display: block;
     -moz-border-radius: 140px;
     -webkit-border-radius: 140px;
     border-radius: 140px;
     opacity: 0.4;
     background: url('../img/black.jpg') 800px -350px;
     width: 100%;
     height: 100%;
     cursor:pointer;
 }
.tiku{
    width: 290px;
    height: 270px;
    position: relative;
    line-height: 270px;
    text-align: center;
    top:0px;
    left:620px;
    animation: 
      scale 5s infinite alternate;
}
.tikuk{
    text-decoration:none;
     float: left;
     color: rgb(179, 179, 212);
     font-size: 38px;
     display: block;
     -moz-border-radius: 140px;
     -webkit-border-radius: 140px;
     border-radius: 140px;
     opacity: 0.4;
     background: url('../img/black.jpg') 800px -350px;
     width: 100%;
     height: 100%;
     cursor:pointer;
}
.submitwork{
    width: 290px;
    height: 270px;
    position: relative;
    line-height: 270px;
    text-align: center;
    top:50px;
    left:280px;
    animation: 
      scale 5s infinite alternate;
  }
.qingkuang{
    width: 290px;
    height: 270px;
    position: absolute;
    line-height: 270px;
    text-align: center;
    top:250px;
    right:400px;
    animation: 
      scale 5s infinite alternate;
}
.qingkuangtongji{
    text-decoration:none;
     float: left;
     color: rgb(179, 179, 212);
     font-size: 38px;
     display: block;
     -moz-border-radius: 140px;
     -webkit-border-radius: 140px;
     border-radius: 140px;
     opacity: 0.4;
     background: url('../img/black.jpg') 800px -350px;
     width: 100%;
     height: 100%;
     cursor:pointer;
}
</style>
