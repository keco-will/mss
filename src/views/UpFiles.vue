<template>
  <div class="back">
    <div class="container">
		<h1>上传你的文件吧</h1>
		<el-upload
			class="upload-demo"
			ref="upload"
			action="https://imlehr.com/mss/quizzes/files"
			:limit="1"
			:on-exceed="handleExceed"
			:file-list="fileList"
			:on-success="success"
			accept=".doc">
			<el-button class="upload" slot="trigger" size="small" type="primary">选取文件</el-button>
			<div slot="tip" class="el-upload__tip">只能上传doc文件，且不超过1G!</div>
		</el-upload>
		<el-button round class="danren" @click="submitone">单人做题</el-button>
		<el-button round class="duoren" @click="submitmany">多人做题</el-button>
	</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
		fileList: [],
		id:'',
		userId:''
      };
    },
    methods: {
	submit(){
		this.$refs.upload.submit();
	},
	success(res){
		this.id=res.data.token
	},
	submitone(){
		this.$store.state.makechoise=0
		this.$store.state.token=this.id
		this.$router.push({name: 'single', params: {token: this.id,userId:localStorage.getItem('userId')}})
	},
	submitmany(){
		this.$store.state.makechoise=1
		this.$store.state.token=this.id
		this.$router.push({name: 'couple', params: {token: this.id,userId:localStorage.getItem('userId')}})
	},
	handleExceed(files, fileList) {
       this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
	},
	mounted(){
		this.userId=this.$route.params.userId
	}
  }
</script>

<style scoped>
.back{
	position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(161, 160, 160);
    padding: 0;
    margin: 0;
}
h1{
	display: block;
	width: 400px;
	height: 40px;
	padding-top:50px; 
	margin: 10px auto;
	text-align: center;
}
.container{
	background-color: rgb(72, 98, 112);
	width: 800px;
	height: 450px;
	margin: 200px auto;
	border-radius:20px; 
	opacity: 0.7;
}
.upload-demo{
	width: 700px;
	height: 150px;
	background: #50798a;
	margin: 50px auto;
	border-radius:20px; 
	color: rgb(239, 241, 241);
}
.el-upload__tip{
	color: antiquewhite;
	font-size: 20px;
	margin-top: 25px;
}
.upload{
	border-radius: 20px;
	margin: 7px 10px;
	color: rgb(61, 52, 52);
	font-size: 15px;
	background: rgb(199, 206, 209);
}
.upload :hover{
	color: rgb(68, 111, 175);
}
.danren{
	margin-left: 150px;
	font-size: 15px;
}
.duoren{
	margin-left: 320px;
	font-size: 15px;
}
</style>