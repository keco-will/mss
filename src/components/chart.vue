<template>
  <div class="l">
    <div class="dd" id="show">
	</div>
	<input type="text" size="80" id="msg" name="msg" placeholder="输入聊天内容" class="d"/>
		<input type="button" value="发送!" id="sendBn" name="sendBn" class="btn"/>
		<br>
  </div>
</template>
<script>
export default {
props:['userId'],
  data(){
      return{
          
      }
  },
  mounted(){
    // 创建WebSocket对象
	var webSocket = new WebSocket("ws://imlehr.com:8080/mss/chat");
	var sendMsg = function() {
		
		//获取输入的信息
		var inputElement = document.getElementById('msg');
 
		if (inputElement.value == '')
			alert("输入内容不为空");
		else {
			// 发送消息
			webSocket.send(inputElement.value);
			// 清空单行文本框
			inputElement.value = "";
		}
	}
	var send = function(event) {
		//设置回车发送消息
		if (event.keyCode == 13) {
			sendMsg();
		}
	};
	webSocket.onopen = function() {
 
		let n = localStorage.getItem('userId') //取个名字
 
		if (n != '' && n != null)
			webSocket.send(n);
		else
			//设置游客登录
			webSocket.send("游客" + Math.random() * 100000000000000000);
		document.getElementById('msg').onkeydown = send;
		document.getElementById('sendBn').onclick = sendMsg;
	};
	// 为onmessage事件绑定监听器，接收消息
	webSocket.onmessage = function(event) {
		var show = document.getElementById('show')
		// 接收、并显示消息
		show.innerHTML += new Date() + "<br/>" + event.data + "<br/>";
		//让聊天框滚动条始终显示新消息
		show.scrollTop = show.scrollHeight;
	}
 
	webSocket.onclose = function() {
		document.getElementById('msg').onkeydown = null;
		document.getElementById('sendBn').onclick = null;
	};
  }
}
</script>

<style>
.l{
	width: 450px;
	margin-top: 50px;
}
.dd{
	width: 100%; height: 600px; overflow-y: auto; border: 1px solid #333;
	background:rgb(220, 243, 243);
}
.d{
	position: relative;
	top:0px;
	height: 25px;
	background:rgb(229, 241, 241);
}
.btn{
	height: 32px;
	float: right;
	top:0px;
}
</style>