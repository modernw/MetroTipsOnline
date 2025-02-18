var data = [
	{
		"title": "如何获取商店应用的安装包",
		"url": "Articles/GetApp/Index.html",
		"background": "Images/win10-hero-logon.png"
	},
	{
		"title": "如何安装商店应用的安装包",
		"url": "Articles/InstallApp/Index.html",
		"background": "Images/aurora.jpg"
	},
	{
		"title": "如何重签名或重打包 Metro 应用",
		"url": "Articles/MakePackage/Index.html",
		"background": "Images/sunrise.jpg"
	},
	{
		"title": "结语",
		"url": "Articles/End/Index.html",
		"background": "Images/kagamine-rin-and-len.png"
	},
];

var isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
var basePath = isLocal ? '' : 'https://wintersamu.github.io/MetroTipsOnline/';

function loadItems() {  
	var listView = document.getElementById("listView");  
	listView.innerHTML = ''; 
	for (var i = 0; i < data.length; i++) {  
		var item = data[i];  
		var listItem = document.createElement("div");  
		listItem.className = "listView-item win-item";  
		//listItem.style.backgroundImage = `url(${item.background})`;  
		listItem.style.backgroundImage = 'url(' + (isLocal ? item.background : (basePath + item.background)) + ')';
		var title = document.createElement("div");  
		title.className = "title";  
		title.textContent = item.title;  
		listItem.appendChild(title);  
		listItem.addEventListener("click", function() {  
			showContent(item.url, item.background);  
		});  
		listView.appendChild(listItem);  
	}  
}  
