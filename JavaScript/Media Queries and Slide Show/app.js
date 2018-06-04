var sliderImages = document.getElementsByClassName('slider-img')
var sliderImageIndex = 0;
startSlide();
function startSlide() {
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
    sliderImages[sliderImageIndex].style.display = 'block';
    sliderImageIndex = sliderImageIndex + 1;
    if (sliderImageIndex + 1 > sliderImages.length) {
        sliderImageIndex = 0;
    }
}
setInterval(startSlide, 1000);