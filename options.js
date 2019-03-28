function saveSettings () {
    var settings = {};

    var tenonApiKey = document.querySelector('#tenon-api-key').value;

    if (tenonApiKey !== undefined) {
        settings['tenon-api-key'] = tenonApiKey;
    }

    chrome.storage.sync.set(settings, function () {
        console.debug('Tenon-Check: settings saved');
    });
}

function setupForm () {
    chrome.storage.sync.get(null, function (settings) {
        if (settings['tenon-api-key'] !== undefined) {
            document.querySelector('#tenon-api-key').value = settings['tenon-api-key'];
        }
    });

    document.querySelector('button').addEventListener('click', saveSettings);
}

document.addEventListener('DOMContentLoaded', setupForm);