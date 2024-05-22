function changeColor(){
    document.getElementById('b1').addEventListener('click', function() {
        // Показ сообщения
        alert('Ваша заявка принята! Скоро с вами свяжется оператор');
    });
}

let currentImageIndex = 0;
        const images = [
        "content/gallary3.png",
        "content/gallary2.png",
        "content/gallary1.png",
        "content/gallary4.jpg",
        "content/gallary5.jpg",
        "content/gallary6.jpg"
        ];

        document.addEventListener("DOMContentLoaded", () => {
    // Initial update when the DOM content is loaded
        document.getElementById("img1").src = images[0];
        document.getElementById("img2").src = images[1];
        document.getElementById("img3").src = images[2];
});

function photogalleryPrev() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGallery();
}

function photogalleryNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
}

function updateGallery() {
    document.getElementById("img1").src = images[currentImageIndex];
    document.getElementById("img2").src = images[(currentImageIndex + 1) % images.length];
    document.getElementById("img3").src = images[(currentImageIndex + 2) % images.length];
}

    