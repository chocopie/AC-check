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
    chrome.storage.sync.get(null, function (settings) {
        if (settings.apiKey !== undefined) {
            document.querySelector('#apiKey').value = settings.apiKey;
        }
        document.querySelector('#inline').checked = !!settings.inline;
    });

    document.querySelector('button').addEventListener('click', saveSettings);
}

document.addEventListener('DOMContentLoaded', setupForm);