// Dark Theme

setTimeout(() => {

  chrome.storage.sync.get(['darkMode', 'onoffButton'], (res) => {

    if (res.onoffButton === 'enabled') {
      if (res.darkMode === 'enabled') {

        let navbar = document.getElementsByClassName('main-navbar')[0];
        navbar.style.backgroundColor = '#243447';

        let containerItems = document.getElementsByClassName('container-item')[0];
        containerItems.style.backgroundColor = '#243447';
        containerItems.style.borderColor = '#243447';

        let pageContent = document.getElementsByClassName('page-content')[0];
        pageContent.style.backgroundColor = '#141d26';

      }
    }

  });

}, 1000);
