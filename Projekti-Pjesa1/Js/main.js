
function hideBox1(){
    var sliderList = document.getElementsByClassName('content');
    
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

function hidebox2(){
    var sliderList = document.getElementsByClassName('content2');
     
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

function hidebox3(){
    var sliderList = document.getElementsByClassName('content3');
     
    sliderList[0].classList.add('show');
    sliderList[1].classList.add('hide');
    sliderList[2].classList.add('hide');
    sliderList[3].classList.add('hide');
}

window.onLoad = hideBox1(),hidebox2(),hidebox3();

var slideIndex = 1;
showSlides(slideIndex);

function next(n){
    showSlides(slideIndex +=n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("content");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

function next2(n){
    showSlides2(slideIndex2 +=n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("content2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}

var slideIndex3 = 1;
showSlides3(slideIndex3);

function next3(n){
    showSlides3(slideIndex3 +=n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("content3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3-1].style.display = "block";
}