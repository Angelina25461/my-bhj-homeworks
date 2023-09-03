const revealElement = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    for (let i = 0; i < revealElement.length; i++) {
        let element = revealElement[i];
        let elementPosition = element.getBoundingClientRect();

    if (elementPosition.top < window.innerHeight) {
    element.classList.add('reveal_active');
    } else {
    element.classList.remove('reveal_active');
    }
    }
});