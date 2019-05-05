chrome.storage.sync.get(['fixedNav'], (res) => {

  if (res.fixedNav === 'enabled') {

    let nav = document.getElementsByClassName("main-navbar")[0];
    nav.style.position = 'fixed';
    nav.style.width = '100%';

    let div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "60px";

    document.getElementsByTagName('body')[0].insertBefore(div, document.getElementsByTagName('body')[0].getElementsByClassName('page')[0]);

  }

});
