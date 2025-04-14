function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function fadeOut(element) {
    element.style.opacity = 1;

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity > 0) {
            requestAnimationFrame(tick);
        } else {
            element.style.display = 'none';
        }
    };

    requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate');

    elementsToAnimate.forEach(element => {
        fadeIn(element);
    });
});