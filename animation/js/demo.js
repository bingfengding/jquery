$("body").prepend("<div class=\"test\"></div>");

//fadeOut渐渐消失,参数接受动画时间（单位：毫秒）,或者fast快，slow慢
$(".test").fadeOut(1000);
//fadeIn渐渐出现
$(".test").fadeIn(1000);
//slideUp向上收起
$(".test").slideUp(1000);
//slideDown向下伸展
$(".test").slideDown(1000);

//delay动画延迟,参数接受动画时间（单位：毫秒）,只能放在动画链中
$(".test").fadeOut().delay(1000).fadeIn();

//animate自定义动画 第二参数接受动画的时间
$(".test").after("<div class=\"demo\"></div>");
$(".demo").css("background-color","red").animate({
	width:"400px",
	height:"200px",
},2000).delay(1000).slideUp();