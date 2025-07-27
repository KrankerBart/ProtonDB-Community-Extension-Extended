const DEFAULT_OPTIONS = {
  SHOW_PLATFORM: true,
  SHOW_TRENDING: true,
  RANKING_POSITION: 'header',
}

function loadOptions() {
  chrome.storage.local.get(DEFAULT_OPTIONS, (options) => {
    document.getElementById('showPlatformCheckbox').checked = options.SHOW_PLATFORM
    document.getElementById('showTrendingCheckbox').checked = options.SHOW_TRENDING

    // Set the checked radio button for RANKING_POSITION
    const radioInputs = document.querySelectorAll('input[type="radio"][name="rankingPosition"]')
    radioInputs.forEach((radio) => {
      radio.checked = radio.value === options.RANKING_POSITION
    })
  })
}

function saveShowPlatformOption() {
  const value = document.getElementById('showPlatformCheckbox').checked
  chrome.storage.local.set({ SHOW_PLATFORM: value })
}

function saveShowTrendingOption() {
  const value = document.getElementById('showTrendingCheckbox').checked
  chrome.storage.local.set({ SHOW_TRENDING: value })
}
function saveRankingPosition(event) {
  chrome.storage.local.set({ RANKING_POSITION: event.target.value })
}

window.addEventListener('DOMContentLoaded', function () {
  loadOptions()
  document.getElementById('showPlatformCheckbox').addEventListener('change', saveShowPlatformOption)
  document.getElementById('showTrendingCheckbox').addEventListener('change', saveShowTrendingOption)

  // Add event listener for radio inputs with a specific name
  const radioInputs = document.querySelectorAll('input[type="radio"][name="rankingPosition"]')
  radioInputs.forEach((radio) => {
    radio.addEventListener('change', saveRankingPosition)
  })
})
