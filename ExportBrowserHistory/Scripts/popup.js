// Copyright (c) 2017 Nirdeshika Polisetti
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution for license terms.

// This the script that is run when the extension is clicked. This adds event listener to the three buttons of popup.html.

// This listens for the button click on Complete History. When it is clicked, the entire history is downloaded.
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

// This listens for the button click on Filtered History. When it is clicked, it takes you to popupOnFilter.html
document.getElementById(2).addEventListener("click", function(){
    window.open("/Popup_UI/popupOnFilter.html","_self");
});

// This listens for the button click on Analyze History. When it is clicked, it takes you to popUpOnAnalyze.html
document.getElementById(3).addEventListener("click", function(){
    window.open("/Popup_UI/popUpOnAnalyze.html","_self");
});