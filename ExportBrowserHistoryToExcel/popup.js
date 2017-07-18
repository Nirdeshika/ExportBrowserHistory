document.getElementById(1).addEventListener("click", function(){
    chrome.history.search({"text" : "","maxResults" : 1000000, 
    	"startTime" : new Date(1970,1,1).getTime()},function(results){
    	var line = "";
    	for (var i = 0; i < results.length; i++) {
    		line += "\""+results[i].url + "\"" +"," + new Date(results[i].lastVisitTime) + "\r\n";
    	}
    	chrome.downloads.download({"url": "data:text/csv;charset=utf-8,"+encodeURI(line)});
    });
});

document.getElementById(2).addEventListener("click", function(){
    chrome.tabs.create({"url":"chrome://history"});
});