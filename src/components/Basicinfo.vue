<template>
	<div class="PathInner" id="PathMenu" style=" margin:250px auto;">
		<div class="PathMain">
			<div class="Tmain" @click="tc()">
				<div class="rotate"><span class="cover"></span></div>
			</div>
		</div>
		<div class="PathItem">
			<a class="link" href="#" title="更多图片"> 
				<span class="item" style="background-image:url(../assets/Navigation/moment_icn_pic.png);"></span>
			</a>
		</div>
		<div class="PathItem"> 
			<a class="link" href="#" title="详细参数"> 
				<span class="item" style="background-image:url(../assets/Navigation/moment_icn_info.png);"></span> 
			</a>
		</div>
		<div class="PathItem"> 
			<a class="link" href="#" title="玛百莉官方专卖店地址"> 
				<span class="item" style="background-image: url(../assets/Navigation/moment_icn_address.png);"></span> 
			</a>
		</div>
		<div class="PathItem"> 
			<a class="link" href="#"> 
				<span class="item" style="background-image: url(../assets/Navigation/moment_icn_price.png);"></span> 
			</a>
		</div>
	</div>
</template>

<script>
import Navi from "../js/lanrenzhijia";
export default {
  name: 'Basicinfo',
  data() {
    return {
      
    }
  },
  methods:{
  	tc(){
  		Navi.PathRun();
  	}
  }
}
</script>
<style scoped>
.Row {
  background-color: powderblue;
  text-align: center;
  padding: 5px;
}
.PathMenu {
	position:absolute;
	right: 0px;
	bottom: 0px;
	width: 60px;
	height: 60px;
}
.PathInner {
	position:relative;
	width: 60px;
	height: 60px;
}
.PathInner .PathItem {
	position:absolute;
	left: 0px;
	bottom: 0px;
}
.PathInner a {/* position:absolute; */
	display:block;/* overflow:hidden; */
	background-position:center;
	background-repeat:no-repeat;
	z-index:999;
}
.PathInner a .item, .rotate {
	width:100%;
	height:100%;
	background-position:center;
	background-repeat:no-repeat;
	display:block;
	overflow:hidden;
	text-align:center;
	vertical-align:middle;
	position:absolute;
}
.PathInner .PathMain {
	z-index:1000;
	position:absolute;
	display:block;/* overflow:hidden; */
	background-position:center;
	background-repeat:no-repeat;
	bottom:0;
	left:0;
}
.PathInner .PathMain .Tmain {
	background-image: url(../assets/Navigation/bg-2x.png);
	width: 60px;
	height: 60px;
}
.PathInner .PathMain .Tmain .rotate {
	background-image: url(../assets/Navigation/icon-2x.png);
	-moz-transform: rotate(0deg);
	position:absolute;
	bottom:0;
	left:0;
}
.PathInner .cover {
	width:100%;
	height:100%;
	display:block;
	background:url(../assets/Navigation/bg-hl-2x.png) center no-repeat;
	cursor: pointer;
*filter:alpha(opacity=0);
	filter:alpha(opacity=0)\0;
	opacity:0;
-webkit-transition:opacity .2s ease-out;
-moz-transition:opacity .2s ease-out;
-ms-transition:opacity .2s ease-out;
-o-transition:opacity .2s ease-out;
}
.PathInner .cover:hover {
	opacity:0.2;
*filter:alpha(opacity=20);
	filter:alpha(opacity=20)\0;
}
.PathItem .link {
	position:absolute;
	bottom:0;
	left:0;
	width: 60px;
	height: 60px;
	background-image: url(../assets/Navigation/bg-item-2x.png);
}
.PathItem .link .item {
	bottom:0;
	left:0;
}
.metaicondetail {
	background:#fff;
	color:#fff;
	border-radius:6px;
	border:1px #333 solid;
	min-width:100px;
	max-width:300px;
	overflow:hidden;
	text-align: center;
	position:absolute;
	display:none;
	top:-115px;
	left:-22px;
}
.metaicondetail .inner {
	border:2px #fff solid;
	border-radius:6px;
	background:#272727;
	font-size:14px;
	padding:5px;
}
.metaicondetail span {
	font-family:candara, arail;
	font-size:18px;
}
.metaicondetail s {
	border-color:#333 transparent transparent;
	border-style: solid dashed dashed;
	border-width:5px;
	clear: both;
	display: inline-block;
	font-size: 0;
	height: 0;
	margin-left:3px;
	overflow: hidden;
	position: absolute;
	right:50%;
	top:44px;
	width:0;
}
</style>
