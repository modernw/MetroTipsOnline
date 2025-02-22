var data = [
	{
		"title": "如何获取商店应用的安装包",
		"url": "Articles/GetApp/Index.html",
		"background": "Images/win10-hero-logon.jpg"
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
		"title": "5 种为 Windows 8.x 开启 Metro 应用侧载的方法合集与比较 - Li_zip",
		"url": "Articles/5Methods/Index.html",
		"background": "Images/5method-cover.jpg"
	},
	{
		"title": "结语",
		"url": "Articles/End/Index.html",
		"background": "Images/kagamine-rin-and-len.jpg"
	},
];

function loadItems() {  
	const listView = document.getElementById("listView");  
	listView.innerHTML = ''; 
	for (let i = 0; i < data.length; i++) {  
		const item = data[i];  
		const listItem = document.createElement("div");  
		listItem.className = "listView-item win-item";  
		listItem.style.backgroundImage = 'url(' + item.background + ')';
		const title = document.createElement("div");  
		title.className = "title";  
		title.textContent = item.title;  
		listItem.appendChild(title);   
		listItem.addEventListener("click", function() {  
			showContent(item.url, item.background);  
		});  
		listView.appendChild(listItem);  
	}  
}  
