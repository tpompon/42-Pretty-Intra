function setColorSelect(coalition) {

  let colorFederation = "rgba(65, 128, 219, 1)";
  let colorAssembly = "rgba(160, 97, 209, 1)";
  let colorOrder = "rgba(255, 105, 80, 1)";
  let colorAlliance = "rgba(51, 196, 127, 1)";

  let colorDefault = "rgba(0, 0, 0, 0.65)";
  let colorSelected = colorDefault;

  if (coalition === 'The Federation')
    colorSelected = colorFederation;
  else if (coalition === 'The Assembly')
    colorSelected = colorAssembly;
  else if (coalition === 'The Order')
    colorSelected = colorOrder;
  else if (coalition === 'The Alliance')
    colorSelected = colorAlliance;

  chrome.storage.sync.set({colorSetting: colorSelected}, () => {
    console.log('Color setting is set to ' + colorSelected);
  });

}

function resetButtons(onlyCoalitions) {

  let darkmode_btn = document.getElementById('darkmode-btn');
  let fixednav_btn = document.getElementById('fixednav-btn');

  let federation_btn = document.getElementById('federation-btn');
  let assembly_btn = document.getElementById('assembly-btn');
  let order_btn = document.getElementById('order-btn');
  let alliance_btn = document.getElementById('alliance-btn');

  if (onlyCoalitions === 'no') {
    if (darkmode_btn.classList.contains('darkmode-btn-enabled'))
      darkmode_btn.classList.remove('darkmode-btn-enabled')
    if (fixednav_btn.classList.contains('fixednav-btn-enabled'))
      fixednav_btn.classList.remove('fixednav-btn-enabled')
  }
  if (federation_btn.classList.contains('federation-btn-enabled'))
    federation_btn.classList.remove('federation-btn-enabled')
  if (assembly_btn.classList.contains('assembly-btn-enabled'))
    assembly_btn.classList.remove('assembly-btn-enabled')
  if (order_btn.classList.contains('order-btn-enabled'))
    order_btn.classList.remove('order-btn-enabled')
  if (alliance_btn.classList.contains('alliance-btn-enabled'))
    alliance_btn.classList.remove('alliance-btn-enabled')

}

function setButtons() {

  let darkmode_btn = document.getElementById('darkmode-btn');
  let fixednav_btn = document.getElementById('fixednav-btn');

  let federation_btn = document.getElementById('federation-btn');
  let assembly_btn = document.getElementById('assembly-btn');
  let order_btn = document.getElementById('order-btn');
  let alliance_btn = document.getElementById('alliance-btn');

  let colorFederation = "rgba(65, 128, 219, 1)";
  let colorAssembly = "rgba(160, 97, 209, 1)";
  let colorOrder = "rgba(255, 105, 80, 1)";
  let colorAlliance = "rgba(51, 196, 127, 1)";

  resetButtons('no');

  chrome.storage.sync.get(['colorSetting'], (res) => {
    if (res.colorSetting === colorFederation)
      federation_btn.classList.add('federation-btn-enabled');
    else if (res.colorSetting === colorAssembly)
      assembly_btn.classList.add('assembly-btn-enabled');
    else if (res.colorSetting === colorOrder)
      order_btn.classList.add('order-btn-enabled');
    else if (res.colorSetting === colorAlliance)
      alliance_btn.classList.add('alliance-btn-enabled');
  });

  chrome.storage.sync.get(['darkMode'], (res) => {
    if (res.darkMode === 'enabled')
      darkmode_btn.classList.add('darkmode-btn-enabled');
  });

  chrome.storage.sync.get(['fixedNav'], (res) => {
    if (res.fixedNav === 'enabled')
      fixednav_btn.classList.add('fixednav-btn-enabled');
  });
}

document.addEventListener('DOMContentLoaded', () => {

    let darkmode_btn = document.getElementById('darkmode-btn');
    let fixednav_btn = document.getElementById('fixednav-btn');

    let federation_btn = document.getElementById('federation-btn');
    let assembly_btn = document.getElementById('assembly-btn');
    let order_btn = document.getElementById('order-btn');
    let alliance_btn = document.getElementById('alliance-btn');

    setButtons();

    darkmode_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        if (darkmode_btn.classList.contains('darkmode-btn-enabled')) {
          darkmode_btn.classList.remove('darkmode-btn-enabled');
          chrome.storage.sync.set({darkMode: 'disabled'}, () => {
            console.log('Dark Mode setting is set to ' + 'disabled');
          });
        }
        else {
          darkmode_btn.classList.add('darkmode-btn-enabled');
          chrome.storage.sync.set({darkMode: 'enabled'}, () => {
            console.log('Dark Mode setting is set to ' + 'enabled');
          });
        }
    });

    fixednav_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        if (fixednav_btn.classList.contains('fixednav-btn-enabled')) {
          fixednav_btn.classList.remove('fixednav-btn-enabled');
          chrome.storage.sync.set({fixedNav: 'disabled'}, () => {
            console.log('Fixed Navbar setting is set to ' + 'disabled');
          });
        }
        else {
          fixednav_btn.classList.add('fixednav-btn-enabled');
          chrome.storage.sync.set({fixedNav: 'enabled'}, () => {
            console.log('Fixed Navbar setting is set to ' + 'enabled');
          });
        }
    });

    federation_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        resetButtons('yes');
        setColorSelect('The Federation');
        if (federation_btn.classList.contains('federation-btn-enabled'))
          federation_btn.classList.remove('federation-btn-enabled');
        else
          federation_btn.classList.add('federation-btn-enabled');
    });

    assembly_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        resetButtons('yes');
        setColorSelect('The Assembly');
        if (assembly_btn.classList.contains('assembly-btn-enabled'))
          assembly_btn.classList.remove('assembly-btn-enabled');
        else
          assembly_btn.classList.add('assembly-btn-enabled');
    });

    order_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        resetButtons('yes');
        setColorSelect('The Order');
        if (order_btn.classList.contains('order-btn-enabled'))
          order_btn.classList.remove('order-btn-enabled');
        else
          order_btn.classList.add('order-btn-enabled');
    });

    alliance_btn.addEventListener('click', () => {
        chrome.tabs.reload();
        resetButtons('yes');
        setColorSelect('The Alliance');
        if (alliance_btn.classList.contains('alliance-btn-enabled'))
          alliance_btn.classList.remove('alliance-btn-enabled');
        else
          alliance_btn.classList.add('alliance-btn-enabled');
    });

});
