(function (window) {
  if (!window.app) {
    window.app = {};
  }

  const breakpoints = {
    xxl: 1919,
    xl: 1439,
    lg: 1279,
    md: 991,
    sm: 575,
  };

  const events = {}; // кастомные события

  const state = {
    data: {
      filters: {
        checkboxes: [
          {
            id: '0',
            title: "Classification",
            checkboxState: [
              {
                id: '00',
                text: "Vegetables",
                checked: true,
              },
              {
                id: '01',
                text: "Carbs",
                checked: false,
              },
              {
                id: '02',
                text: "Fats",
                checked: true,
              },
            ],
          },
          {
            id: '1',
            title: "Classification",
            checkboxState: [
              {
                id: '10',
                text: "Vegetables",
                checked: true,
              },
              {
                id: '11',
                text: "Carbs",
                checked: false,
              },
              {
                id: '12',
                text: "Fats",
                checked: true,
              },
            ],
          },
        ]
      },
    },
    listeners: [],

    setState(newState) {
      this.data = { ...newState };
      this.notify();
    },

    subscribe(callback) {
      this.listeners.push(callback);
    },

    notify() {
      this.listeners.forEach((callback) => callback(this.data));
    },
  };


  window.app.config = {
    events,
    state,
    breakpoints,
    // ...
  };
})(window);