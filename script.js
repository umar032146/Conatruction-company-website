function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');
    if (searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
        searchIcon.classList.remove('fa-times');
        searchIcon.classList.add('fa-search');
    } else {
        searchBar.style.display = 'block';
        searchIcon.classList.remove('fa-search');
        searchIcon.classList.add('fa-times');
    }
}

document.getElementById('nav-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

window.onload = function () {
    const currentPath = window.location.pathname;
    const navButtons = document.querySelectorAll('.nav-links .dropbtn');
    navButtons.forEach(button => {
        if (button.getAttribute('href') === currentPath) {
            button.classList.add('active');
        }
    });
}


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }


    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));



    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');


}

function nextSlide() {
    showSlide(currentIndex + 1);
    // slides.style.transform = `translateX(-${index * 50}%)`;

}

function prevSlide() {
    showSlide(currentIndex - 1);
    // slides.style.transform = `translateX(-${index * -50}%)`;

}

dots.forEach(dot => {
    dot.addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('data-index'));
        showSlide(index);
    });
});

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

showSlide(currentIndex, () => {

});


document.querySelectorAll('.value-heading').forEach(heading => {
    heading.addEventListener('click', () => {
        const content = heading.nextElementSibling;
        const arrow = heading.querySelector('.arrow');
        const head = document.getElementsByClassName('.value-heading');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;

            arrow.innerHTML = '&#9660;';

            arrow.classList.remove('up');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.innerHTML = '&#9650;';

            arrow.classList.add('up');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
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


document.addEventListener("DOMContentLoaded", function () {
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


document.addEventListener("DOMContentLoaded", function () {
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


document.addEventListener("DOMContentLoaded", function () {
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



const filterButtons = document.querySelectorAll('.filter-btn');
const images = document.querySelectorAll('.image-container');

console.log(filterButtons);




filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        console.log(button.classList)

        const filter = button.getAttribute('data-filter');

        images.forEach(image => {
            image.classList.remove('visible');
            if (filter === 'all') {
                setTimeout(() => {
                    image.style.display = 'block';
                    image.classList.add('visible');
                }, 50);
            } else if (image.getAttribute('data-category').includes(filter)) {
                setTimeout(() => {
                    image.style.display = 'block';
                    image.classList.add('visible');
                }, 50);
            } else {
                setTimeout(() => {
                    image.style.display = 'none';
                }, 50);
            }
        });

        // Adjust the layout for different filters
        if (filter === 'infrastructure' || filter === 'education' || filter === 'healthcare') {
            adjustLayout(2);
        } else if (filter === 'all') {
            adjustLayout(3);
        } else {
            adjustLayout(1);
        }
    });
});

function adjustLayout(columns) {
    const gallery = document.querySelector('.gallery');
    gallery.style.gridTemplateColumns = `repeat(${columns}, 300px)`;
}

// Initialize with "Show All" selected
document.querySelector('.filter-btn[data-filter="all"]').click();


let tcurrentIndex = 0;
const tslides = document.querySelector('.tslides');
const tdots = document.querySelectorAll('.tdot');

function tshowSlide(index) {
    const tslideWidth = document.querySelector('.tslide').clientWidth;
    tslides.style.transform = `translateX(${-tslideWidth * index}px)`;
    tdots.forEach(tdot => tdot.classList.remove('tactive'));
    tdots[index].classList.add('tactive');
}

function tcurrentSlide(index) {
    tcurrentIndex = index - 1;
    tshowSlide(tcurrentIndex);
}

// Initialize the slider
tshowSlide(tcurrentIndex);

// Optionally, add automatic sliding
// setInterval(() => {
//     tcurrentIndex = (tcurrentIndex + 1) % tdots.length;
//     tshowSlide(tcurrentIndex);
// }, 3000);

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    var scrollPosition = document.documentElement.scrollTop;
    //   console.log('scrollPosition:', scrollPosition);
    //   console.log('navbar.offsetTop (sticky):', sticky);

    if (scrollPosition >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}