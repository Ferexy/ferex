const pages = document.querySelectorAll(".page");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log (rect)
    return (
        rect.right >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight = 1300) &&
        rect.top <= (window.innerWidth = 1400 )
    );
}

function jumper(run){
  let x = run.getBoundingClientRect();
    console.log (x)
}
document.addEventListener("scroll", jumper);

function toggleActiveClass() {
    pages.forEach((page) => {
        if (isInViewport(page)) {
            page.classList.add('animate');
        }
    })  
}
document.addEventListener('scroll', toggleActiveClass);

toggleActiveClass();

function openMenu() {
    document.getElementById("Menu").style.display = "block"
    document.getElementById("Menu").style.left = "0"
    document.getElementById("Menu").style.transition = "0.5s"
    document.getElementById("Menu").style.animation = "SlideInFromRight 0.5s ease-in"
}
function closeMenu() {
    document.getElementById("Menu").style.left = "-100%"
    document.getElementById("Menu").style.transition = "0.5s"
    document.getElementById("Menu").style.animation = "SlideOutFromLeft 1s ease-in-out"
}