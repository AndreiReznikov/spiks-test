"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var breakpoints = {
    xxl: 1919,
    xl: 1439,
    lg: 1279,
    md: 991,
    sm: 575
  };
  var events = {}; // кастомные события

  var checkboxes = [{
    id: '0',
    title: "Classification",
    checkboxState: [{
      id: '00',
      text: "Vegetables",
      checked: true
    }, {
      id: '01',
      text: "Carbs",
      checked: false
    }, {
      id: '02',
      text: "Fats",
      checked: true
    }]
  }, {
    id: '1',
    title: "Delivery Period",
    checkboxState: [{
      id: '10',
      text: "1 h",
      checked: true
    }, {
      id: '11',
      text: "24 h",
      checked: false
    }, {
      id: '12',
      text: "Today",
      checked: false
    }, {
      id: '13',
      text: "Next Week",
      checked: false
    }]
  }, {
    id: '2',
    title: "Size",
    checkboxState: [{
      id: '20',
      text: "Huge",
      checked: true
    }, {
      id: '21',
      text: "Large",
      checked: false
    }, {
      id: '22',
      text: "Medium",
      checked: false
    }, {
      id: '23',
      text: "Small",
      checked: false
    }, {
      id: '24',
      text: "Tiny",
      checked: false
    }]
  }];
  var state = {
    data: {
      filters: {
        checkboxes: checkboxes
      }
    },
    listeners: [],
    setState: function setState(newState) {
      this.data = _objectSpread({}, newState);
      this.notify();
    },
    subscribe: function subscribe(callback) {
      this.listeners.push(callback);
    },
    notify: function notify() {
      var _this = this;
      this.listeners.forEach(function (callback) {
        return callback(_this.data);
      });
    }
  };
  window.app.config = {
    events: events,
    state: state,
    breakpoints: breakpoints
    // ...
  };
})(window);
(function (window) {
  if (!window.app) {
    window.app = {};
  }
  var checkResponse = function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430 ".concat(res.status));
  };
  var checkResponseSuccess = function checkResponseSuccess(res) {
    if (res && res.success) {
      return res;
    }
    return Promise.reject("\u041E\u0442\u0432\u0435\u0442 \u043D\u0435 success: ".concat(res));
  };
  var buildHttpClient = function buildHttpClient(baseUrl) {
    return function (endpoint) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return fetch("".concat(baseUrl).concat(endpoint), options).then(checkResponse).then(checkResponseSuccess);
    };
  };
  var setObserver = function setObserver(element, handleObserve) {
    var manualConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var config = _objectSpread({
      childList: true
    }, manualConfig);
    var observer = new MutationObserver(function () {
      return handleObserve(element);
    });
    observer.observe(element, config);
  };
  var findAncestorsByClassName = function findAncestorsByClassName(el, className) {
    var stopElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var ancestorEls = [];
    var currentParent = el.parentElement;
    if (!currentParent) {
      return ancestorEls;
    }
    while (currentParent !== null && currentParent !== stopElement) {
      if (currentParent.classList.contains(className)) {
        ancestorEls = [].concat(_toConsumableArray(ancestorEls), [currentParent]);
      }
      currentParent = currentParent.parentElement;
    }
    return ancestorEls;
  };
  var findAncestorByClassName = function findAncestorByClassName(el, className) {
    var ancestorEl = el.parentElement;
    while (!ancestorEl.classList.contains(className)) {
      ancestorEl = ancestorEl.parentElement;
      if (!ancestorEl) {
        return null;
      }
    }
    return ancestorEl;
  };
  var buildComponentLogger = function buildComponentLogger(componentName) {
    return function (text) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var msg = context ? "".concat(componentName, ":").concat(context, ":").concat(text) : "".concat(componentName, ":").concat(text);
      console.debug(msg);
      if (data) {
        console.dir(data);
      }
    };
  };
  var debounce = function debounce(callee, timeoutMs) {
    return function perform() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var previousCall = this.lastCall;
      this.lastCall = Date.now();
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer);
      }
      this.lastCallTimer = setTimeout(function () {
        return callee.apply(void 0, args);
      }, timeoutMs);
    };
  };
  var throttle = function throttle(callee, timeout) {
    var timer = null;
    return function perform() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (timer) return;
      timer = setTimeout(function () {
        callee.apply(void 0, args);
        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  };
  window.app.lib = {
    setObserver: setObserver,
    findAncestorsByClassName: findAncestorsByClassName,
    findAncestorByClassName: findAncestorByClassName,
    buildComponentLogger: buildComponentLogger,
    debounce: debounce,
    throttle: throttle,
    checkResponse: checkResponse,
    checkResponseSuccess: checkResponseSuccess,
    buildHttpClient: buildHttpClient
  };
})(window);
var Slider = /*#__PURE__*/function () {
  function Slider() {
    _classCallCheck(this, Slider);
    _defineProperty(this, "defaultOptions", {
      start: 50,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  _createClass(Slider, [{
    key: "init",
    value: function init(containerName, options) {
      this._findElements(containerName);
      this._initializePlugin(options);
      this._setLimitsValues();
    }
  }, {
    key: "_findElements",
    value: function _findElements(containerName) {
      this.sliderContainer = document.querySelector(containerName);
      this.limitMin = document.querySelector('.slider__limit-min');
      this.limitMax = document.querySelector('.slider__limit-max');
    }
  }, {
    key: "_initializePlugin",
    value: function _initializePlugin() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultOptions;
      noUiSlider.create(this.sliderContainer, options);
    }
  }, {
    key: "_setLimitsValues",
    value: function _setLimitsValues() {
      var _this2 = this;
      this.sliderContainer.noUiSlider.on('update', function () {
        var _this2$sliderContaine = _this2.sliderContainer.noUiSlider.get(),
          _this2$sliderContaine2 = _slicedToArray(_this2$sliderContaine, 2),
          _ = _this2$sliderContaine2[0],
          to = _this2$sliderContaine2[1];
        var max = _this2.sliderContainer.noUiSlider.options.range.max;
        _this2.limitMin.textContent = to;
        _this2.limitMax.textContent = max + ' $';
      });
    }
  }]);
  return Slider;
}();
var CheckboxList = /*#__PURE__*/function () {
  function CheckboxList() {
    _classCallCheck(this, CheckboxList);
  }
  _createClass(CheckboxList, [{
    key: "init",
    value: function init() {
      this._findElements();
      this._toggleLists();
      this._checkListsItem();
      this._addObserverListeners();
      this._setCheckboxStatus(window.app.config.state.data);
    }
  }, {
    key: "_findElements",
    value: function _findElements() {
      this.listsCollection = document.querySelectorAll('.checkbox-list');
      this.itemsCollection = document.querySelectorAll('.checkbox-list__item');
    }
  }, {
    key: "_toggleLists",
    value: function _toggleLists() {
      var _this3 = this;
      this.listsCollection.forEach(function (list) {
        list.addEventListener('click', function (event) {
          return _this3._handleTitleToggleList(event, list);
        });
      });
    }
  }, {
    key: "_setCheckboxStatus",
    value: function _setCheckboxStatus(data) {
      var checkboxStates = data.filters.checkboxes.map(function (item) {
        return item.checkboxState;
      }).flat();
      this.itemsCollection.forEach(function (item) {
        var itemId = item.dataset.id;
        var itemInput = item.querySelector('.checkbox-list__item-input');
        var checkboxState = checkboxStates.find(function (state) {
          return state.id === itemId;
        });
        if (!checkboxState) return;
        itemInput.checked = checkboxState.checked;
      });
    }
  }, {
    key: "_checkListsItem",
    value: function _checkListsItem() {
      this.listsCollection.forEach(function (list) {
        var listId = list.dataset.id;
        var currentState = window.app.config.state.data;
        var checkboxList = currentState.filters.checkboxes.find(function (list) {
          return list.id === listId;
        });
        list.addEventListener('click', function (event) {
          event.preventDefault();
          var item = event.target.closest('.checkbox-list__item');
          if (!item) return;
          var itemId = item.dataset.id;
          var checkboxItem = checkboxList.checkboxState.find(function (item) {
            return item.id === itemId;
          });
          checkboxItem.checked = !checkboxItem.checked;
          window.app.config.state.setState(currentState);
        });
      });
    }
  }, {
    key: "_handleTitleToggleList",
    value: function _handleTitleToggleList(event, list) {
      var target = event.target;
      if (!target.classList.contains('checkbox-list__title')) return;
      list.classList.toggle('checkbox-list_opened');
    }
  }, {
    key: "_addObserverListeners",
    value: function _addObserverListeners() {
      window.app.config.state.subscribe(this._setCheckboxStatus.bind(this));
    }
  }]);
  return CheckboxList;
}();
var Badge = /*#__PURE__*/function () {
  function Badge() {
    var _this4 = this;
    _classCallCheck(this, Badge);
    _defineProperty(this, "_handleBadgeClick", function (event) {
      var badge = event.target.closest('.badge');
      if (!badge) return;
      var closeBtn = event.target.closest('.badge__close');
      if (closeBtn) {
        event.preventDefault();
        var checkboxId = badge.dataset.id;
        _this4._toggleCheckboxState(checkboxId);
      }
    });
    _defineProperty(this, "_renderBadges", function (data) {
      var layoutTemplate = '';
      var checkboxStates = data.filters.checkboxes.map(function (item) {
        return item.checkboxState;
      }).flat();
      checkboxStates.forEach(function (state) {
        if (state.checked) {
          layoutTemplate += "\n          <div class=\"badge\" data-id=\"".concat(state.id, "\">\n            <span class=\"badge__text\">").concat(state.text, "</span>\n            <button class=\"badge__close\">\n              <span class=\"badge__close-icon\"></span>\n            </button>\n          </div>\n        ");
        }
      });
      _this4.badgesContainer.innerHTML = layoutTemplate;
    });
  }
  _createClass(Badge, [{
    key: "init",
    value: function init(containerName) {
      this._findElements(containerName);
      this._addListeners();
      this._addObserverListeners();
      this._renderBadges(window.app.config.state.data);
    }
  }, {
    key: "_findElements",
    value: function _findElements(containerName) {
      this.badgesContainer = document.querySelector(containerName);
      this.badgesCollection = document.querySelectorAll('.badge');
    }
  }, {
    key: "_toggleCheckboxState",
    value: function _toggleCheckboxState(checkboxId) {
      var _iterator = _createForOfIteratorHelper(window.app.config.state.data.filters.checkboxes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var group = _step.value;
          var checkbox = group.checkboxState.find(function (item) {
            return item.id === checkboxId;
          });
          if (checkbox) {
            checkbox.checked = !checkbox.checked;
            window.app.config.state.setState(window.app.config.state.data);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_addObserverListeners",
    value: function _addObserverListeners() {
      window.app.config.state.subscribe(this._renderBadges);
    }
  }, {
    key: "_addListeners",
    value: function _addListeners() {
      this.badgesContainer.addEventListener('click', this._handleBadgeClick);
    }
  }]);
  return Badge;
}();
var checkboxList = new CheckboxList();
checkboxList.init();
var slider = new Slider();
slider.init('.slider-no-ui', {
  start: [0, 5042],
  connect: true,
  step: 1,
  range: {
    'min': 234,
    'max': 9999
  },
  tooltips: [false, true],
  format: {
    to: function to(value) {
      return Math.round(value) + ' $';
    },
    from: function from(value) {
      return value;
    }
  }
});
var badge = new Badge();
badge.init('.main__badge-wrapper');