var urlToVisit = "http://www.tenon.io";
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({"url": urlToVisit}, function (newTab){
        chrome.tabs.executeScript({
            //@TODO this is where we would append the code for our bookmarkable parameters
            code: "document.getElementById('checkuri').value='" + tab.url + "';"
        });
    });
});