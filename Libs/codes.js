const guidebackground = 'Images/black.jpg';

function showContent(url, background) {
	const contentFrame = document.getElementById("contentFrame");
	const backButton = document.getElementById("backButton");
	const nav = document.getElementById("nav");
	const content = document.getElementById("content");
	const backgroundDiv = document.getElementById("background");

	contentFrame.src = url;
	backButton.style.display = "block";
	nav.style.transform = "translateX(-100%)"; /* 滑出导航界面 */
	content.classList.add('show');

	// 更换背景并添加淡入效果
	backgroundDiv.style.opacity = 0;
	setTimeout(function () {
		backgroundDiv.style.backgroundImage = 'url(' + background + ')';
		backgroundDiv.style.opacity = 1;
	}, 500);
	var loadingOverlay = document.getElementById('loading');
	loadingOverlay.style.opacity = 1;
	//loadingOverlay.style.animation = 'fadeIn 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards';
	loadingOverlay.style.visibility = 'visible';
	DisplayLoadingAmineChar('sequential-char-container', true);
	contentFrame.onload = function() {
		loadingOverlay.style.opacity = 0;
		setTimeout (function () {
			loadingOverlay.style.visibility = 'hidden';
			DisplayLoadingAmineChar('sequential-char-container', false);
		}, 500);
	};
}

function showNav() {
	const backButton = document.getElementById("backButton");
	const nav = document.getElementById("nav");
	const content = document.getElementById("content");
	const backgroundDiv = document.getElementById("background");
	const loadingOverlay = document.getElementById('loading');

	backButton.style.display = "none";
	nav.style.transform = "translateX(0)"; /* 滑入导航界面 */
	content.classList.remove('show');
	content.style.opacity = 1;
	//content.classList.add('remove');
	loadingOverlay.style.visibility = 'hidden';
	DisplayLoadingAmineChar('sequential-char-container', false);
	loadingOverlay.style.opacity = 0;
	setTimeout (function () {
		loadingOverlay.style.visibility = 'hidden';
		DisplayLoadingAmineChar('sequential-char-container', false);
	}, 500);

	// 恢复初始背景并添加淡入效果
	backgroundDiv.style.opacity = 0;
	setTimeout(function () {
		backgroundDiv.style.backgroundImage = 'url(' + guidebackground + ')';
		backgroundDiv.style.opacity = 1;
	}, 500);
}

function threadLoadTask() {
	loadItems();
	const backgroundDiv = document.getElementById("background");
	backgroundDiv.style.opacity = 0;
	setTimeout(function () {
		backgroundDiv.style.backgroundImage = 'url(' + guidebackground + ')';
		backgroundDiv.style.opacity = 1;
	}, 500);
	// 添加初始非线性动画
	document.getElementById("listView").style.opacity = 0;
	document.getElementById("guildTitle").style.animation = 'slideIn 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards';
	setTimeout(function () {
		document.getElementById("listView").style.animation = 'slideIn2 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards';
	}, 100);
	setTimeout(function () {
		document.getElementById("guildTitle").style.animation = 'none';
		setTimeout(function () {
			document.getElementById("listView").style.animation = 'none';
			document.getElementById("listView").style.opacity = 1;
		}, 100);
	}, 500);

	document.getElementById("backButton").addEventListener("click", function () {
		showNav();
	});

	// 处理鼠标滚轮滚动
	const listView = document.getElementById("listView");
	listView.addEventListener("wheel", function (event) {
		listView.scrollLeft += event.deltaY;
		event.preventDefault(); // 防止默认滚动行为
	});
	/*
	var startX = 0;
	var scrollLeft = 0;

	// 触摸开始时记录起始点和当前滚动位置
	listView.addEventListener("touchstart", function(event) {
		const touch = event.touches[0];
		startX = touch.pageX - listView.offsetLeft;
		scrollLeft = listView.scrollLeft;
	});

	// 触摸移动时根据移动距离调整滚动位置
	listView.addEventListener("touchmove", function(event) {
		const touch = event.touches[0];
		const x = touch.pageX - listView.offsetLeft;
		const walk = (x - startX) * 2; // 乘以2可以加快滑动速度
		listView.scrollLeft = scrollLeft - walk;
		event.preventDefault(); // 阻止默认行为
	});
	*/
	var audio = document.getElementById('start-play');
	audio.volume = 0.5;
	/*
	audio.play();	
	*/
}

document.addEventListener("DOMContentLoaded", function () {
	//threadLoadTask ();
	setTimeout(function () {
		threadLoadTask();
	}, 300);
});
