let loadingScreen = document.createElement("div");
let loadingScreenStyle = document.createElement("style");
let html = document.getElementsByTagName('html')[0];
let head = document.getElementsByTagName('head')[0];

loadingScreen.classList.add('top');
html.insertBefore(loadingScreen, head);
html.insertBefore(loadingScreenStyle, head);

loadingScreen.innerHTML =
  '<img class="logo animated css" style="filter: invert(100%)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/512px-42_Logo.svg.png"></img>' +
  '<div class="creator">' +
    '<span id="ext-name">42 Pretty Intra</span> - <span id="made-by">Made by tpompon</span>' +
  '</div>'

loadingScreenStyle.innerHTML =
  "@import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,700');" +
  'html { overflow: hidden; }' +
  '.top {' +
    'position: fixed;' +
    'top: 0;' +
    'left: 0;' +
    'z-index: 999;' +
    'width: 100%;' +
    'height: 100%;' +
    'background-color: rgb(20, 29, 38);' +
  '}' +
  '.creator {' +
  	'position: absolute;' +
  	'bottom: 5%;' +
  	'text-align: center;' +
  	'width: 100%;' +
  	'color: white;' +
    'font-size: 1.5em;' +
  	"font-family: 'Roboto', sans-serif;" +
  '}' +
  '.creator #ext-name { font-weight: bold; }' +
  '.creator #made-by { font-style: italic; }' +
  '.logo {' +
    'position: absolute;' +
    'top: 50%;' +
    'left: 50%;' +
    'width: 300px;' +
    'height: 300px;' +
    'margin-top: -150px; /* Half the height */' +
    'margin-left: -150px; /* Half the width */' +
    '-webkit-transform: scale(1);' +
    '-ms-transform: scale(1);' +
    '-o-transform: scale(1);' +
    '-moz-transform: scale(1);' +
    'transform: scale(1);' +
    '-webkit-transform-origin: center center;' +
    '-moz-transform-origin: center center;' +
    '-ms-transform-origin: center center;' +
    '-o-transform-origin: center center;' +
    'transition: all 1s;' +
    'transition: transform 0s;' +
  '}' +
  '.logo.css {' +
    '-webkit-animation-delay:1s;' +
    '-moz-animation-delay:1s;' +
    '-ms-animation-delay:1s;' +
    '-o-animation-delay:1s;' +
    'animation-dely:1s;' +
  '}' +
  '.logo.animated {' +
    '-webkit-animation: 1600ms pulsate infinite alternate ease-in-out;' +
    '-moz-animation: 1600ms pulsate infinite alternate ease-in-out;' +
    '-ms-animation: 1600ms pulsate infinite alternate ease-in-out;' +
    '-o-animation: 1600ms pulsate infinite alternate ease-in-out;' +
    'animation: 1600ms pulsate infinite alternate ease-in-out;' +
  '}' +
  '.logo:before,' +
  '.logo:after {' +
    'position: absolute;' +
    'content: "";' +
    'left: 50px;' +
    'top: 0;' +
    'width: 50px;' +
    'height: 80px;' +
    'background: red;' +
    '-moz-border-radius: 50px 50px 0 0;' +
    'border-radius: 50px 50px 0 0;' +
    '-webkit-transform: rotate(-45deg);' +
       '-moz-transform: rotate(-45deg);' +
        '-ms-transform: rotate(-45deg);' +
         '-o-transform: rotate(-45deg);' +
            'transform: rotate(-45deg);' +
    '-webkit-transform-origin: 0 100%;' +
       '-moz-transform-origin: 0 100%;' +
        '-ms-transform-origin: 0 100%;' +
         '-o-transform-origin: 0 100%;' +
            'transform-origin: 0 100%;' +
  '}' +
  '.logo:after {' +
    'left: 0;' +
    '-webkit-transform: rotate(45deg);' +
       '-moz-transform: rotate(45deg);' +
        '-ms-transform: rotate(45deg);' +
         '-o-transform: rotate(45deg);' +
            'transform: rotate(45deg);' +
    '-webkit-transform-origin: 100% 100%;' +
       '-moz-transform-origin: 100% 100%;' +
        '-ms-transform-origin: 100% 100%;' +
         '-o-transform-origin: 100% 100%;' +
            'transform-origin :100% 100%;' +
  '}' +
  '@keyframes pulsate {' +
    '0% { transform: scale(1); }' +
    '50% { transform: scale(1.3); }' +
    '100% { transform: scale(1); }' +
  '}' +
  '@-webkit-keyframes pulsate {' +
    '0% { -webkit-transform: scale(1); }' +
    '50% { -webkit-transform: scale(1.3); }' +
    '100% { -webkit-transform: scale(1); }' +
  '}' +
  '@-moz-keyframes pulsate {' +
    '0% { -moz-transform: scale(1); }' +
    '50% { -moz-transform: scale(1.3); }' +
    '100% { -moz-transform: scale(1); }' +
  '}' +
  '@-ms-keyframes pulsate {' +
    '0% { -ms-transform: scale(1); }' +
    '50% { -ms-transform: scale(1.3); }' +
    '100% { -ms-transform: scale(1); }' +
  '}' +
  '@-o-keyframes pulsate {' +
    '0% { -o-transform: scale(1); }' +
    '50% { -o-transform: scale(1.3); }' +
    '100% { -o-transform: scale(1); }' +
  '}'

setTimeout(() => { loadingScreen.style.display = 'none'; }, 2000);

let colorDefault = "rgba(0, 0, 0, 0.65)";
let darkModeDefault = 'disabled';
let fixedNavDefault = 'enabled';
let onoffDefault = 'enabled';
let coalitionThemeDefault = 'enabled';

chrome.storage.sync.get(['colorSetting'], (res) => {
  if (!res.colorSetting) {
    chrome.storage.sync.set({colorSetting: colorDefault}, () => {
      console.log('Color setting is set to ' + colorDefault);
    });
  }
});

chrome.storage.sync.get(['onoffButton'], (res) => {
  if (!res.onoffButton) {
    chrome.storage.sync.set({onoffButton: onoffDefault}, () => {
      console.log('Dark Mode setting is set to ' + onoffDefault);
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

chrome.storage.sync.get(['coalitionTheme'], (res) => {
  if (!res.coalitionTheme) {
    chrome.storage.sync.set({coalitionTheme: coalitionThemeDefault}, () => {
      console.log('Coalition Theme setting is set to ' + coalitionThemeDefault);
    });
  }
});
