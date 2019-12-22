<template>
  <div>
      <div class="left">
          <manypeople :userId='userId'></manypeople>
      </div>

      <div class="right">
          <chart :userId='userId'></chart>
      </div>
  </div>
</template>

<script>
import manypeople from '../components/CoupleWord'
import chart from '../components/chart'
export default {
    data(){
        return{
            userId:''
        }
    },
    mounted(){
        this.userId=this.$route.params.userId
    },
    components:{
        manypeople,
        chart
    }
}
</script>

<style>

.left{
    float: left;
    border: 1px solid rgb(207, 191, 191);
}
.right{
    position: fixed;
    right:0px;

    height: 800px;
    /* float: left; */
}
</style>