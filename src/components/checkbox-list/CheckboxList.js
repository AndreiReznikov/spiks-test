class CheckboxList {
  init() {
    this._findElements();
    this._toggleLists();
  }

  _findElements() {
    this.listsCollection = document.querySelectorAll('.checkbox-list');
  }

  _toggleLists() {
    this.listsCollection.forEach((list) => {
      list.addEventListener('click', (event) => this._handleTitleToggleList(event, list));
    });
  }

  _handleTitleToggleList(event, list) {
    const target = event.target;
    if (!target.classList.contains('checkbox-list__title')) return;

    list.classList.toggle('checkbox-list_opened');
  };
}