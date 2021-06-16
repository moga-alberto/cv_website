
const panels = document.querySelectorAll('.panel');
const goToTopButton = document.getElementById('go-to-top');
const body = document.getElementById('body');

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


// window.onresize = () => {
//     window.location.href = '#top';
//     // document.getElementById('top').scrollIntoView();
//     setTimeout(() => {location.reload();}, 1000);
// }

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})