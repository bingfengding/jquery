//attr方法
// 获取属性,如果选择器匹配了多个标签，则只会返回首个被匹配的标签的这个属性
console.log($("meta").attr("charset"));
//设置属性
var i=0,
	len =$("li").length;
while(i<len){
	$("li").eq(i).attr("name","test"+i);
	console.log($("li:eq("+i+")").attr("name"));
	i++;
}
console.log($("li").attr("name"));
$("a").attr("href","https://www.baidu.com");
console.log($("a").attr("href"));

$("input").attr("readonly","readonly").attr("disabled","disabled");
console.log($("input").attr("readonly"));
console.log($("input").attr("disabled"));


$("option:eq(1)").attr("selected","selected");
console.log($("option:eq(1)").attr("selected"));

//prop方法  专门处理disabled，readonly,checked,selected特征
 $("option:eq(1)").prop("selected","selected");
 console.log($("option:eq(1)").prop("selected"));
console.log($("select")[0].value);

//css方法
$("div.b").css("border","1px solid").css("height","200px").css({
	backgroundColor:"red",
	//boxShadow :"0 0 20px 10px white inset",
	"box-shadow" :"0 0 20px 10px white inset"
});
//获取
console.log($("div.b").css("box-shadow"));
console.log($("div.b").css("boxShadow"));
console.log($("div.b").css("border"));
console.log($("div.b").css("width"));
//等同于
console.log(document.defaultView.getComputedStyle(document.querySelector("div.b"),null).width);

//添加类，从而添加样式
$("p").addClass("blue").addClass("big");

//删除类，从而删除样式
$("p").removeClass("blue");

//切换类,从而切换样式
$("p").toggleClass("blue").toggleClass("blue").toggleClass("blue");

//是否包含类
console.log($("p").hasClass("big"));

$("p")[0].onclick = function () {
	$(this).toggleClass("blue");
};