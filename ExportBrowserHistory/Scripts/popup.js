// Copyright (c) 2017 Nirdeshika Polisetti
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution for license terms.

document.getElementById(1).addEventListener("click", function(){
    chrome.history.search({"text" : "","maxResults" : 0, "startTime" : 0},function(results){
    	var line = "URL, Last Visited On, Number of Times Visited\r\n\n";
    	for (var i = 0; i < results.length; i++) {
    		line += "\""+results[i].url + "\"" +"," + new Date(results[i].lastVisitTime) +"," 
    		+ results[i].visitCount +"\r\n";
    	}
    	chrome.downloads.download({"url": "data:text/csv;charset=utf-8,"+encodeURI(line)});
    });
});

document.getElementById(2).addEventListener("click", function(){
    window.open("/Popup_UI/popupOnFilter.html","_self");
});

document.getElementById(3).addEventListener("click", function(){
    window.open("/Popup_UI/popUpOnAnalyze.html","_self");
});