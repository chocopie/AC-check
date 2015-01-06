var urlToVisit = "http://tenon.io/testNow.php";
chrome.browserAction.onClicked.addListener(function (tab) {
    var current = tab.url;
    chrome.tabs.create({"url": urlToVisit + '?url=' + encodeURIComponent(current)});
});
