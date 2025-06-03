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

  const checkboxes = [
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
      title: "Delivery Period",
      checkboxState: [
        {
          id: '10',
          text: "1 h",
          checked: true,
        },
        {
          id: '11',
          text: "24 h",
          checked: false,
        },
        {
          id: '12',
          text: "Today",
          checked: true,
        },
        {
          id: '13',
          text: "Next Week",
          checked: true,
        },
      ],
    },
    {
      id: '2',
      title: "Size",
      checkboxState: [
        {
          id: '20',
          text: "Huge",
          checked: true,
        },
        {
          id: '21',
          text: "Large",
          checked: false,
        },
        {
          id: '22',
          text: "Medium",
          checked: true,
        },
        {
          id: '23',
          text: "Small",
          checked: true,
        },
        {
          id: '24',
          text: "Tiny",
          checked: true,
        },
      ],
    },
  ];

  const state = {
    data: {
      filters: {
        checkboxes,
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