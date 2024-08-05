let opacityindex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    slides[opacityindex].style.opacity = 0;  // Fade out the current slide
    opacityindex = (index + totalSlides) % totalSlides;
    slides[opacityindex].style.opacity = 1;  // Fade in the new slide
}

function moveSlide(direction) {
    showSlide(opacityindex + direction);
}

function autoSlide() {
    showSlide(opacityindex + 1);
}

setInterval(autoSlide, 3000);
window.onload = () => {
    const slides = document.querySelectorAll('.slide');
    slides[opacityindex].style.opacity = 1;  // Initially show the first slide
};


document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('projcount');
    const targetValue = 1789;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 1); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('teamcount');
    const targetValue = 647;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 1); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('workcount');
    const targetValue = 4000;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 1); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById('concount');
    const targetValue = 44;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 100); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});

let teamCurrentIndex = 0;
const teamSlides = document.querySelectorAll('.team-slide');
const teamTotalSlides = teamSlides.length;

document.querySelector('.team-nav.left').addEventListener('click', () => {
    if (teamCurrentIndex > 0) {
        teamCurrentIndex -= 1;
        updateTeamSlider();
    }
});

document.querySelector('.team-nav.right').addEventListener('click', () => {
    if (teamCurrentIndex < teamTotalSlides - 4) {
        teamCurrentIndex += 1;
        updateTeamSlider();
    }
});

function updateTeamSlider() {
    const teamSlideTrack = document.querySelector('.team-slide-track');
    const teamSlideWidth = teamSlides[0].offsetWidth;
    teamSlideTrack.style.transform = `translateX(-${teamCurrentIndex * (teamSlideWidth + 50)}px)`; // 50px is the total margin (25px on each side)
}


//so navbar follows 

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  var scrollPosition = document.documentElement.scrollTop;
  console.log('scrollPosition:', scrollPosition);
  console.log('navbar.offsetTop (sticky):', sticky);

  if (scrollPosition >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


