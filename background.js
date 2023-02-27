var newURL = "http://achecker.ca/checker/index.php",
    tabID,
    currentUrl;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.getSelected(null, function(tab) {
        currentURL = tab.url;
    });

    chrome.tabs.create({url: newURL}, function (tab){
        var tabID = tab.id,
            firstLoad = true;
        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if (firstLoad && tabId == tabID && changeInfo.status == 'complete') {
                chrome.tabs.executeScript(tabId, {
                    code: "document.getElementById('checkuri').value='" + currentURL + "';"
                        + "document.getElementById('div_options').style.display = 'block';"
                        + "document.getElementById('radio_gid_9').checked = true;"
                        + "document.getElementById('validate_uri').click();"
                });
                firstLoad = false;
            }
        });
    });
});
