// Copyright (c) 2017 Nirdeshika Polisetti
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution for license terms.

document.getElementById("Download").addEventListener("click", function () {
    var keywordString = document.getElementById("keyword").value;
    var keywords = keywordString.split("|");
    var promises = [];

    for(var i = 0 ; i<keywords.length;i++)
    {
        promises.push(getSearchHistory(keywords[i]));
    }

    Promise.all(promises).then(function(){chrome.downloads.download({"url": "data:text/csv;charset=utf-8,"+encodeURI(line)})})

});
var line = "URL, Last Visited On, Number of Times Visited\r\n\n";

function getSearchHistory(keyword) {
    return new Promise(function (resolve) {
        console.log(keyword);
        chrome.history.search({"text": keyword, "maxResults": 0, "startTime": 0}, function (results) {
            for (var i = 0; i < results.length; i++) {
                line += "\"" + results[i].url + "\"" + "," + new Date(results[i].lastVisitTime) + ","
                    + results[i].visitCount + "\r\n";
            }
            resolve();
        });
    });
}