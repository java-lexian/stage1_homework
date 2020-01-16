
//layui加载element模块
layui.use('element', function() {
	var element = layui.element;

	//一些事件监听
	element.on('tab(demo)', function(data) {
		console.log(data);
	});
});

// layui轮播图
layui.use(['carousel', 'form'], function() {
	var carousel = layui.carousel,
		form = layui.form;

	//中间大的图片轮播
	carousel.render({
		elem: '#rotation-div1',
		width: '790px',
		height: '470px',
		interval: 5000
	});

	//事件
	carousel.on('change(test4)', function(res) {
		console.log(res)
	});

	var $ = layui.$,
		active = {
			set: function(othis) {
				var THIS = 'layui-bg-normal',
					key = othis.data('key'),
					options = {};

				othis.css('background-color', '#5FB878').siblings().removeAttr('style');
				options[key] = othis.data('value');
				ins3.reload(options);
			}
		};

	//监听开关
	form.on('switch(autoplay)', function() {
		ins3.reload({
			autoplay: this.checked
		});
	});

	$('.demoSet').on('keyup', function() {
		var value = this.value,
			options = {};
		if (!/^\d+$/.test(value)) return;

		options[this.name] = value;
		ins3.reload(options);
	});
});



