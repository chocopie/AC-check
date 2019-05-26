function saveSettings () {
    var settings = {};
    var instanceUrl = document.querySelector('#instanceUrl').value;
    var apiKey = document.querySelector('#apiKey').value;
    var inline = document.querySelector('#inline').checked;

    if (apiKey !== undefined) {
        settings.apiKey = apiKey;
    }

    if (instanceUrl === undefined) {
        settings.instanceUrl = 'https://www.tenon.io';
    }
    settings.instanceUrl = instanceUrl;

    settings.inline = !!inline;

    chrome.storage.sync.set(settings, function () {
        console.debug('Tenon-Check: settings saved');
    });
}

function setupForm () {
    const MAX_SOURCE_LENGTH = 120000;

    chrome.storage.sync.get(null, function (settings) {
        settings.maxSourceLength = MAX_SOURCE_LENGTH;

        if (settings.instanceUrl !== undefined) {
            document.querySelector('#instanceUrl').value = settings.instanceUrl;
        }
        else{
          document.querySelector('#instanceUrl').value = 'https://www.tenon.io';
        }

        if (settings.apiKey !== undefined) {
            document.querySelector('#apiKey').value = settings.apiKey;
        }
        document.querySelector('#inline').checked = !!settings.inline;
    });

    document.querySelector('button').addEventListener('click', saveSettings);
}

document.addEventListener('DOMContentLoaded', setupForm);
