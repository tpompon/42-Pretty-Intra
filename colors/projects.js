// projects.intra.42.fr

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

    let openProjectBoxes = document.getElementsByClassName('row')[1].getElementsByClassName("project-status-box");
    for (let i = 0; i < openProjectBoxes.length; i++)
        openProjectBoxes[i].style.backgroundColor = colorSelected;

    let recProjectBoxes = document.getElementsByClassName('row')[2].getElementsByClassName("project-status-box");
    for (let i = 0; i < recProjectBoxes.length; i++)
        recProjectBoxes[i].style.backgroundColor = colorSelected.replace(/[^,]+(?=\))/, 0.3);

    let holyGraphButton = document.querySelectorAll("a[href='/projects/graph']")[1];
    holyGraphButton.style.backgroundColor = colorSelected;
    holyGraphButton.style.borderColor = colorSelected;

    let listButton = document.querySelectorAll("a[href='/projects/list']")[1];
    listButton.style.backgroundColor = colorSelected;
    listButton.style.borderColor = colorSelected;

}, 0);
