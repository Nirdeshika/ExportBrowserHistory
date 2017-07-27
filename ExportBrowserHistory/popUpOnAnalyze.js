var numberOfTimesEducationalSitesWasVisited = 0;
var numberOfTimesSocialMediaWasVisited = 0;
var numberOfTimesSearchWasVisited = 0;

function createChart() {
    console.log("from createChart" + numberOfTimesEducationalSitesWasVisited);

    var ctx = document.getElementById("history_analyze_pie_chart").getContext('2d');
    var chart = new Chart(ctx, {
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

        options: {}
    });

}

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

function getNumberOfTimesSocialMediaWasVisited(keyword) {
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

function getNumberOfTimesSearchWasVisited() {
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

Promise.all([getnumberOfTimesEducationalSitesWasVisitedPromise(), getNumberOfTimesSocialMediaWasVisited('facebook'),
    getNumberOfTimesSocialMediaWasVisited('instagram'), getNumberOfTimesSocialMediaWasVisited('twitter'),
    getNumberOfTimesSearchWasVisited()]).then(function(){createChart()});



