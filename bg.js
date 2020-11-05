var updateUrl = function(url){
		var regex = /https:\/\/atcoder.jp\/contests\/\w+/;
		if (regex.test(url)){
			window.open(url + "/tasks_print");
			window.open(url + "/submit");
			var urls = ["/tasks_print", "/submit"];
			for (let i = 0; i < urls.length; i++){
				chrome.tabs.create({
					index:tab.index+i+1,
					url:url + urls[i],
					active: false,
					selected: false,
					openerTabId: tab.index
				});
			}
		}else{
			;
		}
		
	}