//===================ARROW-HOVER======================================
document.querySelectorAll('.slider-services-btn > button > img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.src = "assets/arrow-hover.png";
    });
    img.addEventListener('mouseleave', () => {
        img.src = "assets/arrow.png";
    });
});