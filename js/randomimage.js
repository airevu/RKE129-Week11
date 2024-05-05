const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ['pexels-7inchs-6702549.jpg', 'pexels-jonathanborba-3076509.jpg', 'pexels-linkedin-1251833.jpg', 'pexels-olly-3771112.jpg'];

myButton.addEventListener('click', changeImage);

function changeImage(){
    
    const randomIndex = Math.floor(Math.random() * images.length);

    image.src= 'img/' + images[randomIndex];
}