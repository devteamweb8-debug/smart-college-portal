const images = [
"..\\media\\slider\\slide1.png",
"..\\media\\slider\\slide2.png",
"..\\media\\slider\\slide3.png",
"..\\media\\slider\\slide4.png",
"..\\media\\slider\\slide5.png",
"..\\media\\slider\\slide6.png",
"..\\media\\slider\\slide7.png",
"..\\media\\slider\\slide8.png",
"..\\media\\slider\\slide9.png",
"..\\media\\slider\\slide10.png"
];


let currentSlide = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showSlide(index){
sliderImage.src = images[index];
}

function nextSlide(){
currentSlide = (currentSlide + 1) % images.length;
showSlide(currentSlide);
}

function prevSlide(){
currentSlide = (currentSlide - 1 + images.length) % images.length;
showSlide(currentSlide);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide,60000);