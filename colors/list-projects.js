// projects.intra.42.fr/projects/list

setTimeout(() => {
  chrome.storage.sync.get(['colorSetting'], (res) => {

    let projectNames = document.getElementsByClassName('project-name');
    for (let i = 0; i < projectNames.length; i++)
    projectNames[i].getElementsByTagName('a')[0].style.color = res.colorSetting;

    let settingsLogo = document.getElementsByClassName('iconf-setting-gear');
    for (let i = 0; i < settingsLogo.length; i++)
    settingsLogo[i].style.color = res.colorSetting;

  });
}, 0);
