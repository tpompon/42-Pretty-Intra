let colorDefault = "rgba(0, 0, 0, 0.65)";
let darkModeDefault = 'disabled';
let fixedNavDefault = 'enabled';

chrome.storage.sync.get(['colorSetting'], (res) => {
  if (!res.colorSetting) {
    chrome.storage.sync.set({colorSetting: colorDefault}, () => {
      console.log('Color setting is set to ' + colorSelected);
    });
  }
});

chrome.storage.sync.get(['darkMode'], (res) => {
  if (!res.darkMode) {
    chrome.storage.sync.set({darkMode: darkModeDefault}, () => {
      console.log('Dark Mode setting is set to ' + darkModeDefault);
    });
  }
});

chrome.storage.sync.get(['fixedNav'], (res) => {
  if (!res.fixedNav) {
    chrome.storage.sync.set({fixedNav: fixedNavDefault}, () => {
      console.log('Fixed Nav setting is set to ' + fixedNavDefault);
    });
  }
});
