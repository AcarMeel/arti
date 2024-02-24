const items = [
    '#lineas', '#b', '#a', '#c', '#k1', '#k2', '#t1', '#t2',
    '#o1', '#s', '#c2', '#h', '#o2', '#o3', '#l',
    '#uno', '#dos', '#tres', '#cuatro', '#cinco', '#seis'];

const startTextAnimation = () => {
    items.map(item => {
        let duration = 1500;
        if (item === '#lineas') {
            duration = 5000;
        }
        KUTE.fromTo(
            item,
            { draw: '0% 0%' },
            { draw: '0% 100%' },
            { duration, easing: "easingCubicIn", offset: 250 })
            .start();
    });
}

startTextAnimation();

