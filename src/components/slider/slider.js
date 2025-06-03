class Slider {
  defaultOptions = {
    start: 50, range: {
      min: 0,
      max: 100,
    }
  };

  init(containerName, options) {
    this._findElements(containerName);
    this._initializePlugin(options);
    this._setLimitsValues();
  }

  _findElements(containerName) {
    this.sliderContainer = document.querySelector(containerName);
    this.limitMin = document.querySelector('.slider__limit-min');
    this.limitMax = document.querySelector('.slider__limit-max');
  }

  _initializePlugin(options = this.defaultOptions) {
    noUiSlider.create(this.sliderContainer, options);
  }

  _setLimitsValues() {
    this.sliderContainer.noUiSlider.on('update', () => {
      const [_, to] = this.sliderContainer.noUiSlider.get();
      const max = this.sliderContainer.noUiSlider.options.range.max;

      this.limitMin.textContent = to;
      this.limitMax.textContent = max + ' $';
    });
  }
}