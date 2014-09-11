var urlToVisit = "http://www.tenon.io/testnow?url=";
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({"url": urlToVisit + encodeURIComponent(tab.url}));
});