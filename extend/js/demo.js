//trim方法，清除前后空格
console.log($.trim("  fdsf  sfd  kl a "));

//map方法，遍历
console.log($.map([4,2,0,9],function (item,index) {
	console.log(item,index);
	return Math.pow(item-index,3)
}));

//isArray 判断是否是数组 是返回true，否返回false
console.log($.isArray([1,2,3]),$.isArray("1,2,3"));
//contains方法 判断参数2的dom节点是否是参数1的dom节点内
console.log($.contains(document.body,$("p")[0]));

//编写工具 自己编写属性
$.extend({
	max:function (a,b) {
		return Math.max(a,b);
	},
	toStarryString: function (tel) {
		tel = tel+"";
		var len = tel.length;
		return tel.substring(0,3) +function (){
				var i =0;
				var temp ="";
				while(i<len-6){
					temp +="*";
					i++;
				}
				return temp;
			}() + tel.substring(len-3);
	},

});
console.log($.max(10,20));
console.log($.toStarryString(12345673213128901));
$.extend({
	na:function ( num ) {
		var temp ="ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefhigjklnmopqrstuvwxyz1234567890";
		var i =0;
		while (i <num.length){
			console.log(num[i]);
			if (temp.indexOf(num[i]) == -1){
				return false
			}
			i++
		}
		return true
	}
});
/*$("#myInput")[0].keyup = function() {
	var arr = $(this)[0].value;
	if(!$.na(arr)){
		$(this).css("border-color","red");
		console.log(!$.na(arr));
	}else if($.na(arr)){
		$(this).css("border-color","green");
	}
	if(arr.length == 0){
		$(this).css("border-color","");
	}
};*/
//组合对象 拓展对象字面量
console.log($.extend({
	a:1
},{
	b:2
},{
	a:3
},{
}));
//源生的拓展对象字面量 IE9以下不支持
console.log(Object.assign({
	a:1
},{
	b:2,
	c:3
}));
//同名工具（属性）覆盖
$.extend({
	max:function (a,b) {
		return Math.min(a,b);
	},
	trim:1
});
console.log($.max(1,2));

$.abc = function () {
	console.log(this.trim)
};
$.abc();
$.map=2;
console.log($.map);
//fill
console.log(new Array(5).fill("*").join(""));

//repeat
console.log("*".repeat("5"));


function People() {
	this.name = "人";
}
People.prototype.age = 20;
var man = new People();
console.log(man.name,man.age);


//$.fn.extend方法
$.fn.extend({
	getHTML:function () {
		return this.html();
	},
	setHTML:function (html) {
		return this.html(html);
	}
});
//console.log($("body").setHTML("<p>233</p>").getHTML());

$.fn.extend({
	validateUser:function () {
		//对象的validate属性被调用，下一行的this自然就指向的是调用属性的对象
		return this.keyup(function() {
			//因为这是在事件的处理方法内，所以下一行的this指向的是事件的触发者
			var arr = $(this)[0].value;
			//na为预先在$.extend中添加的na工具
			if(!$.na(arr)){
				//以$包装的this为了执行后的返回值能去条用$.fn上的其他方法
				$(this).css("outline-color","red");
				console.log(!$.na(arr));
			}else if($.na(arr)){
				$(this).css("outline-color","green");
			}
			if(arr.length == 0){
				$(this).css("outline-color","");
			}
		})
	}
});
$("#myInput").validateUser().css({
	width:"500px",
	height:"50px",
	fontSize:"30px"
});