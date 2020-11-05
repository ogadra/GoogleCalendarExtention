chrome.runtime.onInstalled.addListener(function(){
	chrome.contextMenus.create({
	  id: "hideTitleM",
	  type: "normal",
	  contexts: ['all'],
	  "title": "予定を隠す(月)"
	});
	chrome.contextMenus.create({
		id: "hideReminderM",
		type: "normal",
		contexts: ['all'],
		"title": "リマインダーを隠す(月)"
	});
	chrome.contextMenus.create({
		id: "hideTaskM",
		type: "normal",
		contexts: ['all'],
		"title": "タスクを隠す(月)",
	});
	chrome.contextMenus.create({
		id: "hideTitleW",
		type: "normal",
		contexts: ['all'],
		"title": "予定を隠す(週)"
	  });
	  chrome.contextMenus.create({
		  id: "hideReminderW",
		  type: "normal",
		  contexts: ['all'],
		  "title": "リマインダーを隠す(週)"
	  });
	  chrome.contextMenus.create({
		  id: "hideTaskW",
		  type: "normal",
		  contexts: ['all'],
		  "title": "タスクを隠す(週)",
	  });
  });

  chrome.contextMenus.onClicked.addListener(function(info, tab){
	const selectedMenu = info.menuItemId;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {message: selectedMenu}, function(response) {
	  });
	});
  });

