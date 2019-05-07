// projects.intra.42.fr/projects/*

setTimeout(() => {
  chrome.storage.sync.get(['colorSetting', 'onoffButton', 'coalitionTheme'], (res) => {

    if (res.onoffButton === 'enabled') {
      if (res.coalitionTheme === 'enabled') {

      }
    }

  });
}, 0);
