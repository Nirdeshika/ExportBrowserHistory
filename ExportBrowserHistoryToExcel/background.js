chrome.tabs.onActivated.addListener(function(activeInfo){
	chrome.tabs.get(activeInfo.tabId,function(tab){
		if(tab.url == "chrome://history/"){
			chrome.browserAction.setPopup({"tabId" : activeInfo.tabId,"popup" : "popupOnHistory.html"});
	}
	});
});

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo){
	if(changeInfo.url == "chrome://history/"){
		chrome.browserAction.setPopup({"tabId" : tabId,"popup" : "popupOnHistory.html"});
	}
});