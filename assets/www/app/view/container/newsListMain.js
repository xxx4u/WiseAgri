Ext.define("Project.view.container.newsListMain", {
	extend : "Ext.List",
	xtype : "newsListMain",
	config : {
		store : "newsStore",
		emptyText : "没有更多信息 ...",
		loadingText : "正在获取信息...",
		itemTpl : "<img class = newsListIcon onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = {iconUrl} />"
		 + "<div class = newsListTitle><b>{newsTitle}</b></div>"
		 + "<div class = newsListDatePubliser>时间：{dateTime}</div>"
		 + "<div class = newsListDatePubliser>来源：{newsPublisher}</div>",
	},
});
