const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 5042],
    connect: true,
    step: 1,
    range: {
        'min': 234,
        'max': 9999,
    },
    tooltips: [false, true],
    format: {
        to: (value) => Math.round(value) + ' $',
        from: (value) => value,
    }
});

// slider.noUiSlider.on('update', function () {
//     console.log(slider.noUiSlider.get())
// });