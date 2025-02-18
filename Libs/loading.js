/*
// Polyfill for String.prototype.repeat for IE compatibility
if (!String.prototype.repeat) {
	String.prototype.repeat = function(count) {
		'use strict';
		if (this == null) {
			throw new TypeError('can\'t convert ' + this + ' to object');
		}
		var str = '' + this;
		count = +count;
		if (count != count) {
			count = 0;
		}
		if (count < 0) {
			throw new RangeError('repeat count must be non-negative');
		}
		if (count == Infinity) {
			throw new RangeError('repeat count must be less than infinity');
		}
		count = Math.floor(count);
		if (str.length == 0 || count == 0) {
			return '';
		}
		// Ensuring count is a 31-bit integer allows us to heavily optimize the
		// main part. But anyway, most current (August 2014) browsers can't handle
		// strings 1 << 28 chars or longer, so:
		if (str.length * count >= 1 << 28) {
			throw new RangeError('repeat count must not overflow maximum string size');
		}
		var rpt = '';
		for (var i = 0; i < count; i++) {
			rpt += str;
		}
		return rpt;
	};
}

function DisplayLoadingAmineChar(containerId, shouldAnimate) {
	var container = document.getElementById(containerId);
	var chars = ''.repeat(10); // 重复字符以超过121个
	var index = 0; // 当前字符的索引
	var charGroupSize = 120; // 每组字符的数量
	var showCharInterval; // 定时器变量，用于后面清除定时器

	// 显示下一个字符的函数
	function showNextChar() {
		if (index < chars.length) {
			container.innerText = chars.charAt(index); // 更新HTML元素的内容
			index++; // 增加索引以准备显示下一个字符

			// 如果显示完一组字符，等待200毫秒再继续
			if (index % charGroupSize === 0) {
				clearInterval(showCharInterval); // 清除当前的定时器
				setTimeout(startAnimation, 200); // 200毫秒后重新开始动画
			}
		} else {
			index = 0; // 重置索引以重新开始
			container.innerText = chars.charAt(index);
		}
	}

	// 启动动画的函数
	function startAnimation() {
		if (shouldAnimate) {
			showCharInterval = setInterval(showNextChar, 30); // 每30毫秒更新一次字符
		} else {
			clearInterval(showCharInterval); // 停止动画
			container.innerText = chars.charAt(chars.length - 1); // 设置为字符数组的最后一个字符
		}
	}

	// 立即开始动画
	startAnimation();
}
*/
// Polyfill for String.prototype.repeat for IE compatibility
if (!String.prototype.repeat) {
	String.prototype.repeat = function(count) {
		'use strict';
		if (this == null) {
			throw new TypeError('can\'t convert ' + this + ' to object');
		}
		var str = '' + this;
		count = +count;
		if (count != count) {
			count = 0;
		}
		if (count < 0) {
			throw new RangeError('repeat count must be non-negative');
		}
		if (count == Infinity) {
			throw new RangeError('repeat count must be less than infinity');
		}
		count = Math.floor(count);
		if (str.length == 0 || count == 0) {
			return '';
		}
		if (str.length * count >= 1 << 28) {
			throw new RangeError('repeat count must not overflow maximum string size');
		}
		var rpt = '';
		for (var i = 0; i < count; i++) {
			rpt += str;
		}
		return rpt;
	};
}

// 将定时器的映射设置为外部变量
var timers = {};

function DisplayLoadingAmineChar(containerId, shouldAnimate) {
	var container = document.getElementById(containerId);
	var chars = ''.repeat(10); // 重复字符以超过121个
	var index = 0; // 当前字符的索引
	var charGroupSize = 120; // 每组字符的数量

	// 显示下一个字符的函数
	function showNextChar() {
		if (index < chars.length) {
			container.innerText = chars.charAt(index); // 更新HTML元素的内容
			index++; // 增加索引以准备显示下一个字符

			// 如果显示完一组字符，等待200毫秒再继续
			if (index % charGroupSize === 0) {
				clearInterval(timers[containerId]); // 清除当前的定时器
				setTimeout(startAnimation, 200); // 200毫秒后重新开始动画
			}
		} else {
			index = 0; // 重置索引以重新开始
			container.innerText = chars.charAt(index);
		}
	}

	// 启动动画的函数
	function startAnimation() {
		// 在启动动画前，确保清除已有定时器
		if (timers[containerId]) {
			clearInterval(timers[containerId]);
		}

		if (shouldAnimate) {
			timers[containerId] = setInterval(showNextChar, 30); // 每30毫秒更新一次字符，并记录定时器
		} else {
			clearInterval(timers[containerId]); // 停止动画
			container.innerText = chars.charAt(chars.length - 1); // 设置为字符数组的最后一个字符
		}
	}

	// 立即开始动画
	startAnimation();
}

