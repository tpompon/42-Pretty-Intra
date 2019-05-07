// profile.intra.42.fr

setTimeout(() => {

  chrome.storage.sync.get(['colorSetting', 'onoffButton', 'coalitionTheme'], (res) => {

    if (res.onoffButton === 'enabled') {
      if (res.coalitionTheme === 'enabled') {

        let colorDefault = "rgba(0, 0, 0, 0.65)";

        if (res.colorSetting === colorDefault) {

        // Coalitions Colors
        let colorFederation = "rgba(65, 128, 219, 1)";
        let colorAssembly = "rgba(160, 97, 209, 1)";
        let colorOrder = "rgba(255, 105, 80, 1)";
        let colorAlliance = "rgba(51, 196, 127, 1)";

        let colorSelected;

        let coalition = document.getElementsByClassName('coalition-span')[0].innerHTML;
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

        let events = document.getElementsByClassName("event-item");
        for (let i = 0; i < events.length; i++) {
          if (events[i].getAttribute('data-event-category') === 'meet') {
              events[i].style.borderColor = res.colorSetting;
              events[i].getElementsByClassName("event-main")[0].style.color = res.colorSetting;
              events[i].getElementsByClassName("event-left")[0].style.backgroundColor = res.colorSetting;
              events[i].getElementsByClassName("event-overflow")[0].style.color = res.colorSetting;
          }
        }

        let handLikes = document.getElementsByClassName("iconf-hand-like-1");
        for (let i = 0; i < handLikes.length; i++)
          handLikes[i].style.color = res.colorSetting;

        let buttonsTitles = document.getElementsByClassName("simple-link");
        for (let i = 0; i < buttonsTitles.length; i++) {
          buttonsTitles[i].style.color = res.colorSetting;
          buttonsTitles[i].style.borderColor = res.colorSetting;
        }

        let schoolRecordButton = document.getElementsByClassName("school-record-button");
        for (let i = 0; i < schoolRecordButton.length; i++) {
          schoolRecordButton[0].style.color = res.colorSetting;
          schoolRecordButton[0].style.borderColor = res.colorSetting;
        }

        let profileTitles = document.getElementsByClassName("profile-title");
        for (let i = 0; i < profileTitles.length; i++)
          profileTitles[i].style.color = res.colorSetting;

        let projectItems = document.getElementsByClassName("project-item");
        for (let i = 0; i < projectItems.length; i++)
          projectItems[i].style.color = res.colorSetting;

        let expertiseItems = document.getElementsByClassName("expertise-item");
        for (let i = 0; i < expertiseItems.length; i++)
          expertiseItems[i].getElementsByTagName('h5')[0].getElementsByTagName('a')[0].style.color = res.colorSetting;

        let topicAuthors = document.getElementsByClassName("topic-metadata");
        for (let i = 0; i < topicAuthors.length; i++)
          topicAuthors[i].getElementsByTagName('a')[0].style.color = res.colorSetting;

        let rects = document.getElementById("user-locations").getElementsByTagName("rect");
        for (let i = 0; i < rects.length; i++) {
          let rectRGBA = rects[i].getAttribute('fill');
          let rectOpacity = rectRGBA.split(' ');
          if (rectOpacity[3]) {
              rectOpacity = rectOpacity[3].substr(0, rectOpacity[3].length - 1);
              rects[i].setAttribute('fill', res.colorSetting.replace(/[^,]+(?=\))/, rectOpacity));
          }
        }

        let forumTags = document.getElementsByClassName('forum-tag cursus-tag');
        for (let i = 0; i < forumTags.length; i++) {
          forumTags[i].style.color = res.colorSetting;
          forumTags[i].style.borderColor = res.colorSetting;
        }

        let dropTitles = document.getElementsByClassName('menu-drop-title');
        for (let i = 0; i < dropTitles.length; i++) {
          dropTitles[i].style.color = res.colorSetting;
        }

        let bell = document.getElementsByClassName('fal fa-bell')[0];
        bell.style.color = res.colorSetting;
      }
    }

  });
}, 1500);
