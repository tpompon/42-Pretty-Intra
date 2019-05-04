// elearning.intra.42.fr

setTimeout(() => {
  chrome.storage.sync.get(['colorSetting'], (res) => {

    let titles = document.getElementsByClassName('main-title');
    for (let i = 0; i < titles.length; i++)
      titles[i].style.color = res.colorSetting;

    let videoNames = document.getElementsByClassName('video-item-name');
    for (let i = 0; i < videoNames.length; i++)
      videoNames[i].style.color = res.colorSetting;

    let buttonsText = document.getElementsByClassName('btn btn-default');
    for (let i = 0; i < buttonsText.length; i++)
      buttonsText[i].style.color = res.colorSetting;

  });
}, 0);
