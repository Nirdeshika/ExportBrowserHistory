// Copyright (c) 2017 Nirdeshika Polisetti
// This work is available under the "MIT license".
// Please see the file COPYING in this distribution for license terms.


var numberOfTimesEducationalSitesWasVisited = 0;
var numberOfTimesSocialMediaWasVisited = 0;
var numberOfTimesSearchWasVisited = 0;
var chart;

// This will get the number of educational, social media and searching sites that are visited. When these values are calculated,
// a pie-chart for each of the aforementioned categories is created.
Promise.all([getnumberOfTimesEducationalSitesWasVisitedPromise(), getNumberOfTimesSocialMediaWasVisitedPromise('facebook'),
    getNumberOfTimesSocialMediaWasVisitedPromise('instagram'), getNumberOfTimesSocialMediaWasVisitedPromise('twitter'),
    getNumberOfTimesSearchWasVisitedPromise()]).then(function () {
    createChart()
});

// This is the function used to create a pie-chart.
function createChart() {
    var ctx = document.getElementById("history_analyze_pie_chart").getContext('2d');
    chart = new Chart(ctx, {
        type: 'pie',

        data: {
            labels: ["Educational", "Social Media", "Searching"],
            datasets: [{
                label: "Analysis of your history till date.",
                backgroundColor: ['rgb(0, 200, 0)', 'rgb(200, 0, 0)', 'rgb(0,0,200)'],
                borderColor: 'rgb(0, 0, 0)',
                data: [numberOfTimesEducationalSitesWasVisited, numberOfTimesSocialMediaWasVisited, numberOfTimesSearchWasVisited]
            }]
        },

        options: {"onClick": pieSegmentOnClick, "events": ["click", "mousemove"]}
    });

    $(".loader").fadeOut("slow");
}

// This is called whenever a segment/slice of the pie chart is clicked. Based on the segment that was clicked, the corresponding data is downloaded.
function pieSegmentOnClick(event) {
    var elementsAtTheEvent = chart.getElementsAtEvent(event);
    if (elementsAtTheEvent.length > 0) {
        var labelOfTheSlice = chart.data.labels[elementsAtTheEvent[0]._index];
        if (labelOfTheSlice == "Educational")
            downloadEducationalSites();
        if (labelOfTheSlice == "Searching")
            downloadSearch();
        if (labelOfTheSlice == "Social Media") {
            Promise.all([getSocialMediaHistory("facebook"), getSocialMediaHistory("instagram"), getSocialMediaHistory("twitter")]).
            then(function(){downloadSocialMedia()});
        }
    }
}

// Returns a promise that calculates the number of times educational sites(stackoverflow) were visited.
function getnumberOfTimesEducationalSitesWasVisitedPromise() {
    return new Promise(function (resolve) {
        chrome.history.search({"text": "stackoverflow", "maxResults": 0, "startTime": 0}, function (results) {
            for (var i = 0; i < results.length; i++) {
                numberOfTimesEducationalSitesWasVisited += results[i].visitCount;
            }
            console.log(numberOfTimesEducationalSitesWasVisited);
            resolve();
        });
    });
}

// Returns a promise that calculates the number of times social media sites with the given keyword were visited.
function getNumberOfTimesSocialMediaWasVisitedPromise(keyword) {
    return new Promise(function (resolve) {
        chrome.history.search({"text": keyword, "maxResults": 0, "startTime": 0}, function (results) {
            for (var i = 0; i < results.length; i++) {
                numberOfTimesSocialMediaWasVisited += results[i].visitCount;
            }
            console.log(numberOfTimesSocialMediaWasVisited);
            resolve();
        });
    });
}

// Returns a promise that calculates the number of times search sites(google.com) were visited.
function getNumberOfTimesSearchWasVisitedPromise() {
    return new Promise(function (resolve) {
        chrome.history.search({"text": "google.com/", "maxResults": 0, "startTime": 0}, function (results) {
            for (var i = 0; i < results.length; i++) {
                numberOfTimesSearchWasVisited += results[i].visitCount;
            }
            console.log(numberOfTimesSearchWasVisited);
            resolve();
        });
    });
}

// When the user clicks on the educational sites segment of the slice, this function is called and it downloads that data.
function downloadEducationalSites() {
    chrome.history.search({"text": "stackoverflow", "maxResults": 0, "startTime": 0}, function (results) {
        for (var i = 0; i < results.length; i++) {
            var line = "URL, Last Visited On, Number of Times Visited\r\n\n";
            for (var i = 0; i < results.length; i++) {
                line += "\"" + results[i].url + "\"" + "," + new Date(results[i].lastVisitTime) + ","
                    + results[i].visitCount + "\r\n";
            }
            chrome.downloads.download({"url": "data:text/csv;charset=utf-8," + encodeURI(line)});
        }
    });
}

// When the user clicks on the social media segment of the slice, this function is called and it downloads that data.
function downloadSocialMedia() {
    chrome.downloads.download({"url": "data:text/csv;charset=utf-8," + encodeURI(socialMediaLine)});
}

// When the user clicks on the search sites segment of the slice, this function is called and it downloads that data.
function downloadSearch() {
    chrome.history.search({"text": "google.com/", "maxResults": 0, "startTime": 0}, function (results) {
        for (var i = 0; i < results.length; i++) {
            line = "URL, Last Visited On, Number of Times Visited\r\n\n";
            for (var i = 0; i < results.length; i++) {
                line += "\"" + results[i].url + "\"" + "," + new Date(results[i].lastVisitTime) + ","
                    + results[i].visitCount + "\r\n";
            }
            chrome.downloads.download({"url": "data:text/csv;charset=utf-8," + encodeURI(line)});
        }
    });
}

var socialMediaLine = "URL, Last Visited On, Number of Times Visited\r\n\n";

// Called to collect the social media data based on the keyword.
function getSocialMediaHistory(keyword) {
    return new Promise(function(resolve){
        chrome.history.search({"text": keyword, "maxResults": 0, "startTime": 0}, function (results) {
            for (var i = 0; i < results.length; i++) {
                socialMediaLine += "\"" + results[i].url + "\"" + "," + new Date(results[i].lastVisitTime) + "," + results[i].visitCount + "\r\n";
            }
            resolve();
        });
    });
}
