export function fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = 'block';
    let last = +new Date();
    const tick = () => {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();
        if (+el.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}