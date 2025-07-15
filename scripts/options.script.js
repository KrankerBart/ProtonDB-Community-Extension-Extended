const DEFAULT_OPTIONS = {
    SHOW_PLATFORM: true,
    SHOW_TRENDING: true,
};

function loadOptions() {
    chrome.storage.local.get(DEFAULT_OPTIONS, (options) => {
        document.getElementById('showPlatformCheckbox').checked = options.SHOW_PLATFORM;
        document.getElementById('showTrendingCheckbox').checked = options.SHOW_TRENDING;
    });
}

function saveShowPlatformOption() {
    const value = document.getElementById('showPlatformCheckbox').checked;
    chrome.storage.local.set({ SHOW_PLATFORM: value });
}

function saveShowTrendingOption() {
    const value = document.getElementById('showTrendingCheckbox').checked;
    chrome.storage.local.set({ SHOW_TRENDING: value });
}

window.addEventListener("DOMContentLoaded", function () {
    loadOptions();
    document.getElementById('showPlatformCheckbox').addEventListener('change', saveShowPlatformOption);
    document.getElementById('showTrendingCheckbox').addEventListener('change', saveShowTrendingOption);
});