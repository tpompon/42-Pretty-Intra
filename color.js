// Coalitions Colors
let colorFederation = "rgba(65, 128, 219, 1)";
let colorAssembly = "rgba(160, 97, 209, 1)";
let colorOrder = "rgba(255, 105, 80, 1)";
let colorAlliance = "rgba(51, 196, 127, 1)";

let colorDefault = "rgba(0, 0, 0, 1)";
let colorSelected = colorFederation;

// profile.intra.42.fr

let events = document.getElementsByClassName("event-item");
for (let i = 0; i < events.length; i++) {
  if (events[i].getElementsByClassName("event-main")[0].getElementsByClassName('event-button')[0].dataset.class === 'event-modal') {
      events[i].style.borderColor = colorSelected;
      events[i].getElementsByClassName("event-main")[0].style.color = colorSelected;
      events[i].getElementsByClassName("event-left")[0].style.backgroundColor = colorSelected;
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

let projectItems = document.getElementsByClassName("project-item");
for (let i = 0; i < projectItems.length; i++)
  projectItems[i].style.color = colorSelected;

let expertiseItems = document.getElementsByClassName("expertise-item");
for (let i = 0; i < expertiseItems.length; i++)
  expertiseItems[i].getElementsByTagName('h5')[0].getElementsByTagName('a')[0].style.color = colorSelected;

let topicAuthors = document.getElementsByClassName("topic-metadata");
for (let i = 0; i < topicAuthors.length; i++)
  topicAuthors[i].getElementsByTagName('a')[0].style.color = colorSelected;

// let test = document.getElementsByTagName("rect")[44];
// test.setAttribute('fill', 'rgba(255, 0, 0, 1)');

// let rects = document.getElementsByTagName("rect");
// for (let i = 0; i < rects.length; i++)
//   rects[i].setAttribute('fill', 'rgba(255, 0, 0, 0.8)');

// projects.intra.42.fr

let projectBoxes = document.getElementsByClassName("project-status-box");
for (let i = 0; i < projectBoxes.length; i++)
  projectBoxes[i].style.backgroundColor = colorSelected;
