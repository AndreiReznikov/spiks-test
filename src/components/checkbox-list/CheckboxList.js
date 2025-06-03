class CheckboxList {
  init() {
    this._findElements();
    this._toggleLists();
    this._checkListsItem();
  }

  _findElements() {
    this.listsCollection = document.querySelectorAll('.checkbox-list');
  }

  _toggleLists() {
    this.listsCollection.forEach((list) => {
      list.addEventListener('click', (event) => this._handleTitleToggleList(event, list));
    });
  }

  _checkListsItem() {
    this.listsCollection.forEach((list) => {
      const listId = list.dataset.id;
      const currentState = window.app.config.state.data;
      const checkboxList = currentState.filters.checkboxes.find((list) => list.id === listId);

      list.addEventListener('click', (event) => {
        event.preventDefault();

        const item = event.target.closest('.checkbox-list__item');
        if (!item) return;

        const itemId = item.dataset.id;
        const checkboxItem = checkboxList.checkboxState.find((item) => item.id === itemId);
        checkboxItem.checked = !checkboxItem.checked;

        window.app.config.state.setState(currentState);
      });
    });
  }

  _handleTitleToggleList(event, list) {
    const target = event.target;
    if (!target.classList.contains('checkbox-list__title')) return;

    list.classList.toggle('checkbox-list_opened');
  };
}