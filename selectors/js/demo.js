//同querySelectorAll
console.log($("li:not(:last-child)+li")[3]);

//选择方法

//eq方法,索引
console.log($("li").eq(3)[0]);
console.log($("li:eq(3)"));
console.log($("ul li:eq(3)").eq(0).eq(0).eq(0).eq(0).eq(0).eq(0));//链式调用

function People(){
	this.walk = function () {
		console.log("walk");
		return this;
	};
	this.run = function () {
		console.log("run");
		return this;
	};
	this.laugh = function () {
		console.log("laugh");
		return this;
	};
}
console.log(new People().walk().run().laugh().laugh().laugh().laugh().laugh().laugh().laugh());
//find方法，查找子级
console.log("-------find--------");
console.log($("body").find(/*筛选条件，空的为0*/));
console.log($("html").find("body").find("li"));
//children方法,查找子级 找直接子级，夸子级找不到，
console.log("-------children方法--------");
console.log($("body").children(/*筛选条件，空的为全部*/));
console.log($("html").children("body").children("li"));
//siblings方法 查找同级兄弟
console.log("-------siblings方法--------");
console.log($(".c").siblings(/*筛选条件*/));
console.log($(".c").siblings(".d"));
//prev方法，查找前一个兄弟标签
console.log("-------prev方法--------");

console.log($(".b").prev(/*筛选条件*/));
//prevAll方法，查找前面所有的兄弟标签
console.log("-------prevAll方法--------");
console.log($(".c").prevAll(/*筛选条件*/));
//next 方法，查找后1个兄弟标签
console.log("-------next方法--------");
console.log($(".b").next(/*筛选条件*/));
//nextAll 方法，查找后所有兄弟标签
console.log("-------nextAll方法--------");
console.log($(".b").nextAll(/*筛选条件*/));
//parent方法，查找当前标签的父级标签
console.log("-------parent方法--------");
console.log($(".b").parent(/*筛选条件*/));


