const currentMainimage = document.querySelector ('.gallery-image-4 img');
const imagesToChooseFrom = document.querySelectorAll('.gallery img');

imagesToChooseFrom.forEach(img => img.addEventListener('click',imageClick));

function imageClick(e) {
    imagesToChooseFrom.forEach(img => img.style.opacity = 1);

    currentMainimage.src = e.target.src;
    e.target.style.opacity - 0.5;
}