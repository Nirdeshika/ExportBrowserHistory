document.getElementById(1).addEventListener("click", function(){
    chrome.history.search({"text" : "","maxResults" : 0, "startTime" : 0},function(results){
    	var line = "URL, Last Visted On, Number of Times Visted\r\n\n";
    	for (var i = 0; i < results.length; i++) {
    		line += "\""+results[i].url + "\"" +"," + new Date(results[i].lastVisitTime) +"," 
    		+ results[i].visitCount +"\r\n";
    	}
    	chrome.downloads.download({"url": "data:text/csv;charset=utf-8,"+encodeURI(line)});
    });
});

document.getElementById(2).addEventListener("click", function(){
    window.open("popupOnFilter.html","_self");
});