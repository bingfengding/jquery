//html方法，类似innerHTML
//获取
console.log($("body").html());
//设置
$("body").html("<p>22333<a>666</a></p>");
//text方法，类似innerText
//获取
console.log($("body").text());
//设置
console.log($("body").text("<p>666233</p>"));

//append方法，向子级的最后添加文本或或字符串形式的标签或dom对象
$("body").append("&lt;a&gt;哈哈&lt;/a&gt;").append("<a>哈哈</a>").append("<a>哈哈</a>").prepend(document.createElement("a"));
//appendTo方法，append方法的被动形式
$("<b>666</b>").appendTo("html>body/*选择器*/");
//prepend方法，向子级的最前添加文本或字符串形式的标签或dom对象
$("body").prepend("&lt;cf&gt;哈哈&lt;/cf&gt;").prepend("<cf>哈哈</cf>").prepend(document.createElement("a"));
//prependTo方法，prepend的被动形式
$("<cf>666</cf>").prependTo("html>body/*选择器*/");
//after,为被选中的每一个标签后添加1个文本或字符串形式的标签或dom对象
$("cf").after("after");
//before,为被选中的每一个标签后添加1个文本或字符串形式的标签或dom对象
$("cf").before("before");
//如果第二个参数传入整个JQ选择器，则会剪切这个标签，粘贴到每一个目标标签中
//所有的JQ对dom操作的方法都拥有这个特性
$("cf").append($("b"));
$("a").append($("cf"));
//在目标标签外面包1个对应标签
$("p").wrap("<div></div>");
//删除标签
$("a b").remove();
//clone方法,复制标签
$("body").append($("a").clone());
console.log($("a").clone());
//清空标签
//$("body").empty();

