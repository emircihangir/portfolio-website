function chevronClicked(chevronType) {
    var container = document.querySelector("#my-projects-page-main-div");

    if (chevronType == "left") {
        container.scrollBy({
            left: container.scrollWidth * (-1 / 3),
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: container.scrollWidth * (1 / 3),
            behavior: 'smooth'
        });
    }
}

document.querySelectorAll(".app-div").forEach(div => {
    div.onclick = function () {
        var divAppName = div.getAttribute("data-appname");
        window.location.href = "/projects/" + divAppName + "/" + divAppName + ".html";
    };
});

document.querySelector('#close-contact-modal-button').onclick = closeContactModal;

document.querySelectorAll("a.contact-link").forEach(a => {
    a.onclick = openContactModal;
});

function closeContactModal(){
    document.querySelector('#contact-modal').style.opacity = '0';
    setTimeout(() => {
          document.querySelector('#contact-modal').style.display='none';
    }, 300);
}

function openContactModal(){
    document.querySelector('#contact-modal').style.display='flex';
    requestAnimationFrame(()=> document.querySelector('#contact-modal').style.opacity = '1');
}