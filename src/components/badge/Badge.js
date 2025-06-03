class Badge {
  init(containerName) {
    this._findElements(containerName);
    this._addListeners();
    this._renderBadges(window.app.config.state.data);
    window.app.config.state.subscribe((data) => console.log(data));
  }

  _findElements(containerName) {
    this.badgesContainer = document.querySelector(containerName);
  }

  _renderBadges(data) {
    let layoutTemplate = '';

    const checkboxStates = data.filters.checkboxes
      .map(item => item.checkboxState)
      .flat();

    checkboxStates.forEach((state) => {
      if (state.checked) {
        layoutTemplate += `
          <button class="badge" data-id=${state.id}>
            <span class="badge__text">${state.text}</span>
            <span class="badge__close">x</span>
          </button>
        `;
      }
    });

    this.badgesContainer.innerHTML = layoutTemplate;
  }

  _addListeners() {
    window.app.config.state.subscribe(this._renderBadges.bind(this));
  }
}