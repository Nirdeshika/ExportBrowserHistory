document.getElementById("Download").addEventListener("click",function(){
	console.log(document.getElementById("keyword").value);
	chrome.history.search({"text" : document.getElementById("keyword").value,"maxResults" : 0, "startTime" : 0},function(results){
    	var line = "URL, Last Visited On, Number of Times Visited\r\n\n";
    	for (var i = 0; i < results.length; i++) {
    		line += "\""+results[i].url + "\"" +"," + new Date(results[i].lastVisitTime) +"," 
    		+ results[i].visitCount +"\r\n";
    	}
    	chrome.downloads.download({"url": "data:text/csv;charset=utf-8,"+encodeURI(line)});
    });
});