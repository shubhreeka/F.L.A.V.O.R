document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Hide all slides
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}  // Reset to 1 if we reach the end of the images
        slides[slideIndex - 1].style.display = "block";  // Show current slide
        setTimeout(showSlides, 2000);  // Change image every 2 seconds (2000ms)
    }
});
