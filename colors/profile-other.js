// profile.intra.42.fr/users/*

setTimeout(() => {

  chrome.storage.sync.get(['onoffButton', 'coalitionTheme'], (res) => {

    if (res.onoffButton === 'enabled') {
      if (res.coalitionTheme === 'enabled') {
        // Coalitions Colors
        let colorFederation = "rgba(65, 128, 219, 1)";
        let colorAssembly = "rgba(160, 97, 209, 1)";
        let colorOrder = "rgba(255, 105, 80, 1)";
        let colorAlliance = "rgba(51, 196, 127, 1)";

        let colorDefault = "rgba(0, 0, 0, 0.65)";
        let colorSelected = colorDefault;

        let coalition = document.getElementsByClassName('coalition-span')[0].innerHTML;
        if (coalition === 'The Federation')
          colorSelected = colorFederation;
        else if (coalition === 'The Assembly')
          colorSelected = colorAssembly;
        else if (coalition === 'The Order')
          colorSelected = colorOrder;
        else if (coalition === 'The Alliance')
          colorSelected = colorAlliance;

        let events = document.getElementsByClassName("event-item");
        for (let i = 0; i < events.length; i++) {
          if (events[i].getAttribute('data-event-category') === 'meet') {
              events[i].style.borderColor = colorSelected;
              events[i].getElementsByClassName("event-main")[0].style.color = colorSelected;
              events[i].getElementsByClassName("event-left")[0].style.backgroundColor = colorSelected;
              events[i].getElementsByClassName("event-overflow")[0].style.color = colorSelected;
          }
        }

        let handLikes = document.getElementsByClassName("iconf-hand-like-1");
        for (let i = 0; i < handLikes.length; i++)
          handLikes[i].style.color = colorSelected;

        let buttonsTitles = document.getElementsByClassName("simple-link");
        for (let i = 0; i < buttonsTitles.length; i++) {
          buttonsTitles[i].style.color = colorSelected;
          buttonsTitles[i].style.borderColor = colorSelected;
        }

        let schoolRecordButton = document.getElementsByClassName("school-record-button");
        for (let i = 0; i < schoolRecordButton.length; i++) {
          schoolRecordButton[0].style.color = colorSelected;
          schoolRecordButton[0].style.borderColor = colorSelected;
        }

        let profileTitles = document.getElementsByClassName("profile-title");
        for (let i = 0; i < profileTitles.length; i++)
          profileTitles[i].style.color = colorSelected;

        let expertiseItems = document.getElementsByClassName("expertise-item");
        for (let i = 0; i < expertiseItems.length; i++)
          expertiseItems[i].getElementsByTagName('h5')[0].getElementsByTagName('a')[0].style.color = colorSelected;

        let topicAuthors = document.getElementsByClassName("topic-metadata");
        for (let i = 0; i < topicAuthors.length; i++)
          topicAuthors[i].getElementsByTagName('a')[0].style.color = colorSelected;

        let rects = document.getElementById("user-locations").getElementsByTagName("rect");
        for (let i = 0; i < rects.length; i++) {
          let rectRGBA = rects[i].getAttribute('fill');
          let rectOpacity = rectRGBA.split(' ');
          if (rectOpacity[3]) {
              rectOpacity = rectOpacity[3].substr(0, rectOpacity[3].length - 1);
              rects[i].setAttribute('fill', colorSelected.replace(/[^,]+(?=\))/, rectOpacity));
          }
        }

        let forumTags = document.getElementsByClassName('forum-tag cursus-tag');
        for (let i = 0; i < forumTags.length; i++) {
          forumTags[i].style.color = colorSelected;
          forumTags[i].style.borderColor = colorSelected;
        }

        let markedTitles = document.getElementsByClassName("marked-title");
        if (markedTitles)
          for (let i = 0; i < markedTitles.length; i++)
              markedTitles[i].getElementsByTagName('a')[0].style.color = colorSelected;
      }
    }

  });

}, 1000);
