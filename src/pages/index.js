// =require ../components/slider/Slider.js
// =require ../components/checkbox-list/CheckboxList.js
// =require ../components/badge/Badge.js

const checkboxList = new CheckboxList();

checkboxList.init();

const slider = new Slider();

slider.init('.slider-no-ui', {
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

const badge = new Badge();

badge.init('.main__badge-wrapper');