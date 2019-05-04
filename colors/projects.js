// projects.intra.42.fr

setTimeout(() => {
    chrome.storage.sync.get(['colorSetting'], (res) => {

      let openProjectBoxes = document.getElementsByClassName('row')[1].getElementsByClassName("project-status-box");
      for (let i = 0; i < openProjectBoxes.length; i++)
          openProjectBoxes[i].style.backgroundColor = res.colorSetting;

      let recProjectBoxes = document.getElementsByClassName('row')[2].getElementsByClassName("project-status-box");
      for (let i = 0; i < recProjectBoxes.length; i++)
          recProjectBoxes[i].style.backgroundColor = res.colorSetting.replace(/[^,]+(?=\))/, 0.3);

      let holyGraphButton = document.querySelectorAll("a[href='/projects/graph']")[1];
      holyGraphButton.style.backgroundColor = res.colorSetting;
      holyGraphButton.style.borderColor = res.colorSetting;

      let listButton = document.querySelectorAll("a[href='/projects/list']")[1];
      listButton.style.backgroundColor = res.colorSetting;
      listButton.style.borderColor = res.colorSetting;

    });
}, 500);
