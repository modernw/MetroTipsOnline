const data = [
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

/*
function loadItems() {
	const listView = document.getElementById("listView");
	listView.innerHTML = ''; // 清空现有内容以避免重复

	data.forEach(function(item) {
		const listItem = document.createElement("div");
		listItem.className = "listView-item";
		listItem.style.backgroundImage = `url(${item.background})`;

		const title = document.createElement("div");
		title.className = "title";
		title.textContent = item.title;

		listItem.appendChild(title);
		listItem.addEventListener("click", function() {
			showContent(item.url, item.background);
		});

		listView.appendChild(listItem);
	});
}
*/
  
function loadItems() {  
	const listView = document.getElementById("listView");  
	listView.innerHTML = ''; // 清空现有内容以避免重复  
  
	// 使用 for 循环代替 forEach  
	for (let i = 0; i < data.length; i++) {  
		const item = data[i];  
		const listItem = document.createElement("div");  
		listItem.className = "listView-item win-item";  
		//listItem.style.backgroundImage = `url(${item.background})`;  
		listItem.style.backgroundImage = 'url(' + item.background + ')';

		const title = document.createElement("div");  
		title.className = "title";  
		title.textContent = item.title;  
  
		listItem.appendChild(title);  
		// 添加点击事件监听器  
		listItem.addEventListener("click", function() {  
			showContent(item.url, item.background);  
		});  
  
		listView.appendChild(listItem);  
	}  
}  
