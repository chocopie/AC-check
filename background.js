var urlToVisit = "http://achecker.ca/checker/index.php";
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({"url": urlToVisit}, function (newTab){
        chrome.tabs.executeScript({
            code: "document.getElementById('checkuri').value='" + tab.url + "';"
                + "document.getElementById('validate_uri').click();"
        });
    });
});