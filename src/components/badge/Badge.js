class Badge {
  init(containerName) {
    this._findElements(containerName);
    this._addListeners();
    this._addObserverListeners();
    this._renderBadges(window.app.config.state.data);
  }

  _findElements(containerName) {
    this.badgesContainer = document.querySelector(containerName);
    this.badgesCollection = document.querySelectorAll('.badge');
  }

  _toggleCheckboxState(checkboxId) {
    for (const group of window.app.config.state.data.filters.checkboxes) {
      const checkbox = group.checkboxState.find((item) => item.id === checkboxId);
      if (checkbox) {
        checkbox.checked = !checkbox.checked;

        window.app.config.state.setState(window.app.config.state.data);
      }
    }
  }

  _handleBadgeClick = (event) => {
    const badge = event.target.closest('.badge');
    if (!badge) return;

    const closeBtn = event.target.closest('.badge__close');
    if (closeBtn) {
      event.preventDefault();
      const checkboxId = badge.dataset.id;

      this._toggleCheckboxState(checkboxId);
    }
  }

  _renderBadges = (data) => {
    let layoutTemplate = '';

    const checkboxStates = data.filters.checkboxes
      .map(item => item.checkboxState)
      .flat()

    checkboxStates.forEach((state) => {
      if (state.checked) {
        layoutTemplate += `
          <button class="badge" data-id="${state.id}">
            <span class="badge__text">${state.text}</span>
            <span class="badge__close">x</span>
          </button>
        `;
      }
    });

    this.badgesContainer.innerHTML = layoutTemplate;
  }

  _addObserverListeners() {
    window.app.config.state.subscribe(this._renderBadges);
  }

  _addListeners() {
    this.badgesContainer.addEventListener('click', this._handleBadgeClick);
  }
}