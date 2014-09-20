var urlToVisit = "http://www.tenon.io/#testnow";
chrome.browserAction.onClicked.addListener(function (tab) {
    var current = tab.url;
    chrome.tabs.create({"url": urlToVisit + '?url=' + encodeURIComponent(current)});
});