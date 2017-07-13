chrome.tabs.query({"currentWindow" : true, "active" : true},function(tabs){
	var tab = tabs[0];
	chrome.runtime.sendMessage({"url" : tab.url},function(response){
		console.log("from popup.js");
		console.log(response);})});