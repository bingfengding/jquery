
$.fn.extend({
	code:function(duration){
		var num= 1;
		var _this = this;
		var index = duration;
		this.click ( function () {
			if(num) {
				num = 0;
				_this[0].value = index + "秒后重新发送验证码";
				//this.disabled = true;
				var time1 = setInterval(function () {
					--index;
					_this[0].value = index + "秒后重新发送验证码";
					if (index == 0) {
						clearInterval(time1);
						_this[0].value = "点击发送验证码";
						//_this.disabled = false;
						num = 1;
						index = 60;
					}
					return index;
				}, 100);
			}
		});
	}
});

$(".ipt").code(60);
