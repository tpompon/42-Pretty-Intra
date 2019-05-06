// Dark Theme

setTimeout(() => {

  chrome.storage.sync.get(['darkMode'], (res) => {

    if (res.darkMode === 'enabled') {

      let navbar = document.getElementsByClassName('main-navbar')[0];
      navbar.style.backgroundColor = '#243447';

      if (document.getElementsByClassName('icon-smiley-relax very-big-icon').length != 0) {
        let smiley = document.getElementsByClassName('icon-smiley-relax very-big-icon')[0];
        smiley.style.color = 'white';
      }

      let noteTitle = document.getElementsByClassName('note-title')[0];
      noteTitle.style.color = 'white';

      let backgroundPage = document.getElementsByClassName('row');
      for (let i = 0; i < backgroundPage.length; i++)
        backgroundPage[i].style.backgroundColor = '#141d26';

      let backgroundBoxes = document.getElementsByClassName('container-inner-item boxed');
      for (let i = 0; i < backgroundBoxes.length; i++) {
        backgroundBoxes[i].style.backgroundColor = '#243447';
        backgroundBoxes[i].style.borderColor = '#243447';
      }

      let rects = document.getElementById("user-locations").getElementsByTagName("rect");
      for (let i = 0; i < rects.length; i++) {
        if (rects[i].getAttribute('fill') === '#fafafa')
          rects[i].setAttribute('fill', '#243447');
        rects[i].setAttribute('stroke', '#243447');
      }

      let schoolRecordButton = document.getElementsByClassName('school-record-button dropdown-toggle')[0];
      schoolRecordButton.style.backgroundColor = '#243447';

      let achievementItems = document.getElementsByClassName('achievement-item--content');
      for (let i = 0; i < achievementItems.length; i++)
        achievementItems[i].getElementsByTagName('h1')[0].style.color = 'white';

      let achievementItemsContainers = document.getElementsByClassName('achievement-item--container mini');
      for (let i = 0; i < achievementItemsContainers.length; i++)
        achievementItemsContainers[i].style.borderColor = '#141d26';

      let achievementItemsImages = document.getElementsByClassName('achievement-item--image');
      for (let i = 0; i < achievementItemsImages.length; i++)
        achievementItemsImages[i].style.backgroundColor = '#141d26';

      let topicItems = document.getElementsByClassName('topic-item');
      for (let i = 0; i < topicItems.length; i++)
        topicItems[i].style.borderColor = '#141d26';

      let footer = document.getElementsByTagName('footer')[0];
      footer.backgroundColor = '#141d26';

    }

  });

}, 1000);
