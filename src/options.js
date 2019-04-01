function saveSettings () {
    var settings = {};

    var apiKey = document.querySelector('#apiKey').value;
    var inline = document.querySelector('#inline').checked;

    if (apiKey !== undefined) {
        settings.apiKey = apiKey;
    }

    settings.inline = !!inline;

    chrome.storage.sync.set(settings, function () {
        console.debug('Tenon-Check: settings saved');
    });
}

function setupForm () {
    const MAX_SOURCE_LENGTH = 120000;

    chrome.storage.sync.get(null, function (settings) {
        settings.maxSourceLength = MAX_SOURCE_LENGTH;

        if (settings.apiKey !== undefined) {
            document.querySelector('#apiKey').value = settings.apiKey;
        }
        document.querySelector('#inline').checked = !!settings.inline;
    });

    document.querySelector('button').addEventListener('click', saveSettings);
}

document.addEventListener('DOMContentLoaded', setupForm);