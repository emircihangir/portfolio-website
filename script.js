function chevronClicked(chevronType){
    var container = document.querySelector("#my-projects-page-main-div");

    if(chevronType == "left"){
        container.scrollBy({  left: container.scrollWidth * (-1/3),
            behavior: 'smooth'});
    } else {
        container.scrollBy({  left: container.scrollWidth * (1/3),
            behavior: 'smooth'});
    }
}