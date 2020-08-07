const slides = document.querySelectorAll('.slide'),
    nextBtn = document.querySelector('.next-btn'),
    prevBtn = document.querySelector('.prev-btn'),
    dots = document.querySelectorAll('.dot');


let index = 0;

function currentSlide(n) {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    for (dot of dots) {
        dot.classList.remove('activeDot');
    }
    slides[n].classList.add('active');
    dots[n].classList.add('activeDot');
}

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        currentSlide(index);
    } else {
        index++;
        currentSlide(index);
    }
}

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
        currentSlide(index);
    } else {
        index--;
        currentSlide(index);
    }
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('click', event => {
    // console.log(event.target);
    for (dot of dots)
        if (event.target == dot) {
            for (let i = 0; i < dots.length; i++) {
                if (dots[i] == dot) {
                    index = i;
                    currentSlide(i);
                    break;
                }
            }


        }
})