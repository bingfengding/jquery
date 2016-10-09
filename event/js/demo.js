//普通事件
$("li").click( function () {
	console.log(123);
});
$("li:nth-child(even)").mouseenter( function () {
	console.log("enter even");
}).next().mouseenter( function () {
	console.log("enter odd");
});
/*
$(window).scroll(function () {
	console.log("scroll");
}).resize(function () {
	console.log("resize");
}).click(function () {
	$("body").css("background-color","red");
}).click(function () {//事件的重写
	console.log("click");
});

//事件重写
onclick = function () {
	console.log(123);
};
onclick = function () {
	console.log(321);
};

//事件重载
window.addEventListener("click",function () {
	console.log(456);
},0);
window.addEventListener("click",function () {
	console.log(654);
},0);
*/

//on事件,事件也会重载
$("p").on("click",function () {
	console.log(789);
}).on("click",function () {
	console.log(987);
}).on("click",function () {
	console.log(this.innerHTML,$(this).html());
});
/*!!!后添加到页面的元素是不会拥有前面监听的事件!!!*/
$("body").append("<p>5555555</p>");
setTimeout(function () {
	$("body").append("<a>哈哈</a>");
	$("a").click(function () {
		console.log($(this).text());
	})
},200);
//事件代理 只能被父级或父级以上代理，无法被兄弟与子级代理
$("body").delegate("a","click",function () {
	console.log($(this).html()+1);
});

//触发1次
$(".c").one("click",function () {
	console.log($(this).text());
});
