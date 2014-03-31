// oh god how did this get here i am not good with computers

var urlToCheck;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	var urlToVisit = "http://achecker.ca/checker/index.php";
	urlToCheck = tab.url;
	var newTab;

  // now i understand callbacks a bit better
  // thanks, http://stackoverflow.com/questions/10221124/chrome-extension-create-tab-with-callback-function-crashes
  // and http://www.impressivewebs.com/callback-functions-javascript/
  chrome.tabs.create({url: urlToVisit}, function(tab){

  	newTab = tab;
  	// alert(newTab.id + ' url: ' + urlToCheck);

  });

  // this makes the script happen at all: http://stackoverflow.com/questions/4996194/chrome-tabs-executescript-not-working
  // i don't get why this works on the new tab. why is the opener tab not affected?
  // oh well, it does what i want it to...
  // and how to simulate a click:
  // http://stackoverflow.com/questions/13319097/simulated-click-in-chrome-extension
  chrome.tabs.executeScript({
    code: "document.getElementById('checkuri').value='" + urlToCheck + "';"
    		+ "document.getElementById('validate_uri').click();"
  });

});
