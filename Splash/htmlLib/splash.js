function setResponsiveDivSplashScreen() {  
	const dpr = window.devicePixelRatio || 1; 
	var divElement = document.getElementById("splash-picture");  
	var viewportWidth = window.innerWidth; 
	var viewportHeight = window.innerHeight; 
	if (viewportWidth > 800 && viewportHeight > 600) {  
		divElement.style.backgroundImage = 'url(\'./htmlLib/Images/Splash.png\')';  
	} else {  
		if (dpr >= 4) {  
			divElement.style.backgroundImage = 'url(\'./htmlLib/Images/TipsSplashScreen.scale-400.png\')';  
		} else if (dpr >= 2) {  
			divElement.style.backgroundImage = 'url(\'./htmlLib/Images/TipsSplashScreen.scale-200.png\')';  
		} else if (dpr >= 1.5) {  
			divElement.style.backgroundImage = 'url(\'./htmlLib/Images/TipsSplashScreen.scale-150.png\')';  
		} else if (dpr >= 1.25) {  
			divElement.style.backgroundImage = 'url(\'./htmlLib/Images/TipsSplashScreen.scale-125.png\')';  
		} else {  
			divElement.style.backgroundImage = 'url(\'./htmlLib/Images/TipsSplashScreen.scale-100.png\')';  
		}  
	}  
}  

function EventResize() {
	setResponsiveDivSplashScreen();
}

if (window.addEventListener) {
	window.addEventListener('resize', EventResize);
} else if (window.attachEvent) { // IE8及以下使用attachEvent
	window.attachEvent('onresize', EventResize);
}