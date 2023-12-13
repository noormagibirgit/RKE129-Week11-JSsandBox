const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToSchooseFrom = document.querySelectorAll(".gallery img");

imagesToSchooseFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
    

    imagesToSchooseFrom.forEach(img => img.style.opacity =1);
    currentMainImage.src = e.target.src;

    e.target.style.opacity = 0.5;


}