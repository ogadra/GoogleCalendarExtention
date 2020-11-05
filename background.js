chrome.runtime.onInstalled.addListener(function(){
	chrome.contextMenus.create({
	  id: "GCE",
	  type: "normal",
	  contexts: ['all'],
	  "title": "GCE"
	});
  });
  // クリック時の挙動を設定
  chrome.contextMenus.onClicked.addListener(function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {message: "GCE"}, function(response) {
	  });
	});
  });