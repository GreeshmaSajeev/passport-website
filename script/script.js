document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your images
    const texts = ["Creative Designs", "Innovative Solutions", "User-Friendly Interfaces"];
    let index = 0;

    function changeSlide() {
        index = (index + 1) % images.length;
        document.getElementById("slider-image").src = images[index];
        document.getElementById("slider-text").textContent = texts[index];
    }

    setInterval(changeSlide, 3000); // Change image every 3 seconds
});