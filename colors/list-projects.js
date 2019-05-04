// projects.intra.42.fr/projects/list

setTimeout(() => {

    // Coalitions Colors
    let colorFederation = "rgba(65, 128, 219, 1)";
    let colorAssembly = "rgba(160, 97, 209, 1)";
    let colorOrder = "rgba(255, 105, 80, 1)";
    let colorAlliance = "rgba(51, 196, 127, 1)";

    let colorDefault = "rgba(0, 0, 0, 0.65)";
    let colorSelected = colorFederation;

    // let coalition = document.getElementsByClassName('coalition-span')[0].innerHTML;
    // if (coalition === 'The Federation')
    //     colorSelected = colorFederation;
    // else if (coalition === 'The Assembly')
    //     colorSelected = colorAssembly;
    // else if (coalition === 'The Order')
    //     colorSelected = colorOrder;
    // else if (coalition === 'The Alliance')
    //     colorSelected = colorAlliance;

    let projectNames = document.getElementsByClassName('project-name');
    for (let i = 0; i < projectNames.length; i++)
        projectNames[i].getElementsByTagName('a')[0].style.color = colorSelected;

    let settingsLogo = document.getElementsByClassName('iconf-setting-gear');
    for (let i = 0; i < settingsLogo.length; i++)
        settingsLogo[i].style.color = colorSelected;

}, 0);