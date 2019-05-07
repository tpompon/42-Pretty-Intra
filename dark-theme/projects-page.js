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

        let fourTitles = document.getElementsByTagName('h4');
        for (let i = 0; i < fourTitles.length; i++)
          fourTitles[i].style.color = 'white';

        let paragraphs = document.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length; i++)
          paragraphs[i].style.color = 'white';

        let highchartsContainers = document.getElementsByClassName('highcharts-container');
        for (let i = 0; i < highchartsContainers.length; i++)
          for (let j = 0; j < highchartsContainers[i].getElementsByTagName('rect').length; j++)
            highchartsContainers[i].getElementsByTagName('rect')[j].setAttribute('fill', '#243447');

        let projectSummaryItems = document.getElementsByClassName('project-summary-item');
        for (let i = 0; i < projectSummaryItems.length; i++)
          projectSummaryItems[i].style.color = 'white';

      }
    }

  });

}, 1000);
