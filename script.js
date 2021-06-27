
const panels = document.querySelectorAll('.panel');
const goToTopButton = document.getElementById('go-to-top');
const body = document.getElementById('body');
const interval = document.getElementById('interval');
let width = 0;

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 200) {
        goToTopButton.classList.add('active');
    } else {
        goToTopButton.classList.remove('active');
    }
};




var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const scrollAgent = (width) => {
    const elem = document.querySelector('.nav-link.active');
    const hidden = document.querySelector('#hidden');
    const about = document.querySelector('#about-l');
    const portfolio = document.querySelector('#portfolio-l');
    const experience = document.querySelector('#experience-l');
    const goals = document.querySelector('#goals-l');
    const contact = document.querySelector('#contact-l');
    let scrollPos = window.scrollY;

    if (window.innerWidth >= 1400) {
        width = 1400;
    } else if (window.innerWidth >= 1200) {
        width = 1200;
    } else if (window.innerWidth >= 992) {
        width = 992;
    } else if (window.innerWidth >= 550) {
        width = 550;
    }  else width = 0;

    console.log(scrollPos);

    switch (width) {

        case 1400:

            if (scrollPos < 400) {
                about.classList.remove('active');
                hidden.classList.add('active');
                return;
            } else if (scrollPos < 900) {        //about active
                elem.classList.remove('active');
                about.classList.add('active');
                return;
            } else if (scrollPos < 1750) {     //portfolio active
                elem.classList.remove('active');
                portfolio.classList.add('active');
                return;
            } else if (scrollPos < 2500) {        //experience active
                elem.classList.remove('active');
                experience.classList.add('active');
                return;
            }
            else if (scrollPos < 3330) {          //goals active
                elem.classList.remove('active');
                goals.classList.add('active');
                return;
            }
            else if (scrollPos < 3600) {          //contact active
                elem.classList.remove('active');
                contact.classList.add('active');
                return;
            }
            break;

            case 1200:

            if (scrollPos < 420) {
                about.classList.remove('active');
                hidden.classList.add('active');
                return;
            } else if (scrollPos < 1130) {        //about active
                elem.classList.remove('active');
                about.classList.add('active');
                return;
            } else if (scrollPos < 1800) {     //portfolio active
                elem.classList.remove('active');
                portfolio.classList.add('active');
                return;
            } else if (scrollPos < 2500) {        //experience active
                elem.classList.remove('active');
                experience.classList.add('active');
                return;
            }
            else if (scrollPos < 3330) {          //goals active
                elem.classList.remove('active');
                goals.classList.add('active');
                return;
            }
            else if (scrollPos < 3600) {          //contact active
                elem.classList.remove('active');
                contact.classList.add('active');
                return;
            }
            break;

            case 992:

            if (scrollPos < 420) {
                about.classList.remove('active');
                hidden.classList.add('active');
                return;
            } else if (scrollPos < 1300) {        //about active
                elem.classList.remove('active');
                about.classList.add('active');
                return;
            } else if (scrollPos < 1780) {     //portfolio active
                elem.classList.remove('active');
                portfolio.classList.add('active');
                return;
            } else if (scrollPos < 2500) {        //experience active
                elem.classList.remove('active');
                experience.classList.add('active');
                return;
            }
            else if (scrollPos < 3330) {          //goals active
                elem.classList.remove('active');
                goals.classList.add('active');
                return;
            }
            else if (scrollPos < 3600) {          //contact active
                elem.classList.remove('active');
                contact.classList.add('active');
                return;
            }
            break;

            case 550:

            if (scrollPos < 420) {
                about.classList.remove('active');
                hidden.classList.add('active');
                return;
            } else if (scrollPos < 1700) {        //about active
                elem.classList.remove('active');
                about.classList.add('active');
                return;
            } else if (scrollPos < 2200) {     //portfolio active
                elem.classList.remove('active');
                portfolio.classList.add('active');
                return;
            } else if (scrollPos < 2800) {        //experience active
                elem.classList.remove('active');
                experience.classList.add('active');
                return;
            }
            else if (scrollPos < 3700) {          //goals active
                elem.classList.remove('active');
                goals.classList.add('active');
                return;
            }
            else if (scrollPos < 4600) {          //contact active
                elem.classList.remove('active');
                contact.classList.add('active');
                return;
            }
            break;

            
        default:
            break;

    }
};

window.addEventListener('scroll', scrollAgent);