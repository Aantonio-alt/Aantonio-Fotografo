document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".portafolio-eventos .imagen");
    const popup = document.querySelector(".popup-image");
    const popupImg = document.querySelector(".popup-image img");
    const closeBtn = document.querySelector(".popup-image span");

    images.forEach(image => {
        image.addEventListener("click", () => {
            popup.style.display = "flex";
            popupImg.src = image.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target !== popupImg) {
            popup.style.display = "none";
        }
    });
});
