var fullScreenGallery = document.querySelector(".fullscreen-gallery-div");

document.querySelectorAll(".project-gallery-div > img").forEach(img => {
    img.onclick = function () {
        const imgSrc = img.getAttribute("src").substring(9).trim();
        const arr = document.querySelectorAll('.fullscreen-image');
        let matchingEl;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (getComputedStyle(element).backgroundImage.includes(imgSrc)) {
                matchingEl = element;
                fullScreenGallery.style.display = "flex";
                matchingEl.scrollIntoView();
                break;
            }
        }
    };
});

document.querySelectorAll(".store-badge-div").forEach(div => {
    div.onclick = function () {
        const link = div.getAttribute("data-link");
        window.open(link, '_blank');
    };
});

document.querySelector("#close-fullscreen-button").onclick = () => fullScreenGallery.style.display = "none";

