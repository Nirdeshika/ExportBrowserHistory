// chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
// 	if(message.url == "chrome://history/")
// 		console.log("history");
// 	else
// 		chrome.tabs.create({url : "chrome://history/"});
// });


chrome.browserAction.onClicked.addListener(function(tab){
	if(tab.url == "chrome://history/")
	{
		console.log("history");
	}
	else{
		console.log(tab.url);
		chrome.tabs.create({url : "chrome://history/"});	
	}
});