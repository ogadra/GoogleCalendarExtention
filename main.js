window.onload = function(){
	chrome.tabs.getSelected(null, function(tab) {
		var url = tab.url;
		var BG =chrome.extension.getBackgroundPage();
		BG.updateUrl(url);
	});
};