(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//UNCOMMENT IF DRUPAL - see components/_meta/_01-foot.twig for attachBehaviors
Drupal.behaviors.rangeSlider = {
    attach: function (context, settings) {
// (function () { // REMOVE IF DRUPAL
        var rangeSlider = require('rangeslider-pure');
// Initialize a new plugin instance for one element or NodeList of elements.
        var slider = document.querySelectorAll('input[type="range"]');
        rangeSlider.create(slider, {
            polyfill: true,     // Boolean, if true, custom markup will be created
            rangeClass: 'rangeSlider',
            disabledClass: 'rangeSlider--disabled',
            fillClass: 'rangeSlider__fill',
            bufferClass: 'rangeSlider__buffer',
            handleClass: 'rangeSlider__handle',
            startEvent: ['mousedown', 'touchstart', 'pointerdown'],
            moveEvent: ['mousemove', 'touchmove', 'pointermove'],
            endEvent: ['mouseup', 'touchend', 'pointerup'],
            vertical: true,    // Boolean, if true slider will be displayed in vertical orientation
            min: null,          // Number , 0
            max: null,          // Number, 100
            step: null,         // Number, 1
            value: null,        // Number, center of slider
            buffer: null,       // Number, in percent, 0 by default
            stick: null,        // [Number stickTo, Number stickRadius] : use it if handle should stick to stickTo-th value in stickRadius
            borderRadius: 10,   // Number, if you use buffer + border-radius in css for looks good,
            onInit: function () {
                console.info('onInit')
            },
            onSlideStart: function (position, value) {
                console.info('onSlideStart', 'position: ' + position, 'value: ' + value);
            },
            onSlide: function (position, value) {
                console.log('onSlide', 'position: ' + position, 'value: ' + value);
            },
            onSlideEnd: function (position, value) {
                console.warn('onSlideEnd', 'position: ' + position, 'value: ' + value);
            }
        });

// update position
        var triggerEvents = true; // or false
        slider.rangeSlider.update({min : 0, max : 20, step : 0.5, value : 1.5, buffer : 70}, triggerEvents);

// })(); // REMOVE IF DRUPAL

// UNCOMMENT IF DRUPAL
    }
};

},{"rangeslider-pure":2}],2:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rangeSlider", [], factory);
	else if(typeof exports === 'object')
		exports["rangeSlider"] = factory();
	else
		root["rangeSlider"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
var delay = exports.delay = function delay(fn, wait) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
var debounce = exports.debounce = function debounce(fn) {
  var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

var isString = exports.isString = function isString(obj) {
  return obj === '' + obj;
};

var isArray = exports.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
  return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
};

var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return null;
  }

  for (var i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

var isObject = exports.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
  var opt = {};

  for (var key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (var _key4 in options) {
    opt[_key4] = options[_key4];
  }

  return opt;
};

var between = exports.between = function between(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(2);

var dom = _interopRequireWildcard(_dom);

var _functions = __webpack_require__(0);

var func = _interopRequireWildcard(_functions);

__webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
var MAX_SET_BY_DEFAULT = 100;
var HANDLE_RESIZE_DELAY = 300;
var HANDLE_RESIZE_DEBOUNCE = 50;

var pluginName = 'rangeSlider';
var pluginIdentifier = 0;
var inputrange = dom.supportsRange();
var defaults = {
  polyfill: true,
  rangeClass: 'rangeSlider',
  disabledClass: 'rangeSlider--disabled',
  fillClass: 'rangeSlider__fill',
  bufferClass: 'rangeSlider__buffer',
  handleClass: 'rangeSlider__handle',
  startEvent: ['mousedown', 'touchstart', 'pointerdown'],
  moveEvent: ['mousemove', 'touchmove', 'pointermove'],
  endEvent: ['mouseup', 'touchend', 'pointerup'],
  min: null,
  max: null,
  step: null,
  value: null,
  buffer: null,
  stick: null,
  borderRadius: 10,
  vertical: false
};

/**
 * Plugin
 * @param {HTMLElement} element
 * @param {this} options
 */

var RangeSlider = function () {
  function RangeSlider(element, options) {
    _classCallCheck(this, RangeSlider);

    var minSetByDefault = void 0;
    var maxSetByDefault = void 0;
    var stepSetByDefault = void 0;
    var stickAttribute = void 0;
    var stickValues = void 0;

    this.element = element;
    this.options = func.simpleExtend(defaults, options);
    this.polyfill = this.options.polyfill;
    this.vertical = this.options.vertical;
    this.onInit = this.options.onInit;
    this.onSlide = this.options.onSlide;
    this.onSlideStart = this.options.onSlideStart;
    this.onSlideEnd = this.options.onSlideEnd;
    this.onSlideEventsCount = -1;
    this.isInteractsNow = false;
    this.needTriggerEvents = false;

    // Plugin should only be used as a polyfill
    if (!this.polyfill) {
      // Input range support?
      if (inputrange) {
        return;
      }
    }

    this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));

    this.identifier = 'js-' + pluginName + '-' + pluginIdentifier++;

    this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);

    this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);

    this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));

    this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));

    this.percent = null;

    if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
      this.stick = this.options.stick;
    } else if (stickAttribute = this.element.getAttribute('stick')) {
      stickValues = stickAttribute.split(' ');
      if (stickValues.length >= 1) {
        this.stick = stickValues.map(parseFloat);
      }
    }
    if (this.stick && this.stick.length === 1) {
      this.stick.push(this.step * 1.5);
    }
    this._updatePercentFromValue();

    this.toFixed = this._toFixed(this.step);

    var directionClass = void 0;

    this.container = document.createElement('div');
    dom.addClass(this.container, this.options.fillClass);

    directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
    dom.addClass(this.container, directionClass);

    this.handle = document.createElement('div');
    dom.addClass(this.handle, this.options.handleClass);

    directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
    dom.addClass(this.handle, directionClass);

    this.range = document.createElement('div');
    dom.addClass(this.range, this.options.rangeClass);
    this.range.id = this.identifier;
    this.range.appendChild(this.handle);
    this.range.appendChild(this.container);

    directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
    dom.addClass(this.range, directionClass);

    if (this.options.bufferClass) {
      this.buffer = document.createElement('div');
      dom.addClass(this.buffer, this.options.bufferClass);
      this.range.appendChild(this.buffer);

      directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
      dom.addClass(this.buffer, directionClass);
    }

    if (func.isNumberLike(this.options.value)) {
      this._setValue(this.options.value, true);
      this.element.value = this.options.value;
    }

    if (func.isNumberLike(this.options.buffer)) {
      this.element.setAttribute('data-buffer', this.options.buffer);
    }

    if (func.isNumberLike(this.options.min) || minSetByDefault) {
      this.element.setAttribute('min', '' + this.min);
    }

    if (func.isNumberLike(this.options.max) || maxSetByDefault) {
      this.element.setAttribute('max', '' + this.max);
    }

    if (func.isNumberLike(this.options.step) || stepSetByDefault) {
      this.element.setAttribute('step', '' + this.step);
    }

    dom.insertAfter(this.element, this.range);

    // hide the input visually
    dom.setCss(this.element, {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'overflow': 'hidden',
      'opacity': '0'
    });

    // Store context
    this._handleDown = this._handleDown.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._startEventListener = this._startEventListener.bind(this);
    this._changeEventListener = this._changeEventListener.bind(this);
    this._handleResize = this._handleResize.bind(this);

    this._init();

    // Attach Events
    window.addEventListener('resize', this._handleResize, false);

    dom.addEventListeners(document, this.options.startEvent, this._startEventListener);

    // Listen to programmatic value changes
    this.element.addEventListener('change', this._changeEventListener, false);
  }

  /* public methods */

  /**
   * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
   * @param {Boolean} triggerEvents
   * @returns {RangeSlider}
   */


  _createClass(RangeSlider, [{
    key: 'update',
    value: function update(obj, triggerEvents) {
      if (triggerEvents) {
        this.needTriggerEvents = true;
      }
      if (func.isObject(obj)) {
        if (func.isNumberLike(obj.min)) {
          this.element.setAttribute('min', '' + obj.min);
          this.min = obj.min;
        }

        if (func.isNumberLike(obj.max)) {
          this.element.setAttribute('max', '' + obj.max);
          this.max = obj.max;
        }

        if (func.isNumberLike(obj.step)) {
          this.element.setAttribute('step', '' + obj.step);
          this.step = obj.step;
          this.toFixed = this._toFixed(obj.step);
        }

        if (func.isNumberLike(obj.buffer)) {
          this._setBufferPosition(obj.buffer);
        }

        if (func.isNumberLike(obj.value)) {
          this._setValue(obj.value);
        }
      }
      this._update();
      this.onSlideEventsCount = 0;
      this.needTriggerEvents = false;
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      dom.removeAllListenersFromEl(this, document);
      window.removeEventListener('resize', this._handleResize, false);
      this.element.removeEventListener('change', this._changeEventListener, false);

      this.element.style.cssText = '';
      delete this.element[pluginName];

      // Remove the generated markup
      if (this.range) {
        this.range.parentNode.removeChild(this.range);
      }
    }

    /**
     * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
     * @param {Element} el
     * @param {Object} options
     */

  }, {
    key: '_toFixed',


    /* private methods */

    value: function _toFixed(step) {
      return (step + '').replace('.', '').length - 1;
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.onInit && typeof this.onInit === 'function') {
        this.onInit();
      }
      this._update();
    }
  }, {
    key: '_updatePercentFromValue',
    value: function _updatePercentFromValue() {
      this.percent = (this.value - this.min) / (this.max - this.min);
    }

    /**
     * This method check if this.identifier exists in ev.target's ancestors
     * @param ev
     * @param data
     */

  }, {
    key: '_startEventListener',
    value: function _startEventListener(ev, data) {
      var _this = this;

      var el = ev.target;
      var isEventOnSlider = false;

      if (ev.which !== 1 && !('touches' in ev)) {
        return;
      }

      dom.forEachAncestors(el, function (el) {
        return isEventOnSlider = el.id === _this.identifier && !dom.hasClass(el, _this.options.disabledClass);
      }, true);

      if (isEventOnSlider) {
        this._handleDown(ev, data);
      }
    }
  }, {
    key: '_changeEventListener',
    value: function _changeEventListener(ev, data) {
      if (data && data.origin === this.identifier) {
        return;
      }

      var value = ev.target.value;
      var pos = this._getPositionFromValue(value);

      this._setPosition(pos);
    }
  }, {
    key: '_update',
    value: function _update() {
      var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';

      this.handleSize = dom.getDimension(this.handle, sizeProperty);
      this.rangeSize = dom.getDimension(this.range, sizeProperty);
      this.maxHandleX = this.rangeSize - this.handleSize;
      this.grabX = this.handleSize / 2;
      this.position = this._getPositionFromValue(this.value);

      // Consider disabled state
      if (this.element.disabled) {
        dom.addClass(this.range, this.options.disabledClass);
      } else {
        dom.removeClass(this.range, this.options.disabledClass);
      }

      this._setPosition(this.position);
      if (this.options.bufferClass && this.options.buffer) {
        this._setBufferPosition(this.options.buffer);
      }
      this._updatePercentFromValue();
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      var _this2 = this;

      return func.debounce(function () {
        // Simulate resizeEnd event.
        func.delay(function () {
          _this2._update();
        }, HANDLE_RESIZE_DELAY);
      }, HANDLE_RESIZE_DEBOUNCE)();
    }
  }, {
    key: '_handleDown',
    value: function _handleDown(e) {
      this.isInteractsNow = true;
      e.preventDefault();
      dom.addEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.addEventListeners(document, this.options.endEvent, this._handleEnd);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
        return;
      }

      var boundingClientRect = this.range.getBoundingClientRect();

      var posX = this._getRelativePosition(e);
      var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var handleX = this._getPositionFromNode(this.handle) - rangeX;
      var position = posX - this.grabX;

      this._setPosition(position);

      if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
        this.grabX = posX - handleX;
      }
      this._updatePercentFromValue();
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(e) {
      var posX = this._getRelativePosition(e);

      this.isInteractsNow = true;
      e.preventDefault();
      this._setPosition(posX - this.grabX);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(e) {
      e.preventDefault();
      dom.removeEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.removeEventListeners(document, this.options.endEvent, this._handleEnd);

      // Ok we're done fire the change event
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
          this.onSlideEnd(this.value, this.percent, this.position);
        }
      }
      this.onSlideEventsCount = 0;
      this.isInteractsNow = false;
    }
  }, {
    key: '_setPosition',
    value: function _setPosition(pos) {
      var position = void 0;
      var stickRadius = void 0;
      var restFromValue = void 0;
      var stickTo = void 0;

      // Snapping steps
      var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX));

      // Stick to stick[0] in radius stick[1]
      if (this.stick) {
        stickTo = this.stick[0];
        stickRadius = this.stick[1] || 0.1;
        restFromValue = value % stickTo;
        if (restFromValue < stickRadius) {
          value = value - restFromValue;
        } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
          value = value - restFromValue + stickTo;
        }
      }
      position = this._getPositionFromValue(value);

      // Update ui
      if (this.vertical) {
        this.container.style.height = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style['msTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style.transform = 'translateY(-' + position + 'px)';
      } else {
        this.container.style.width = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateX(' + position + 'px)';
        this.handle.style['msTransform'] = 'translateX(' + position + 'px)';
        this.handle.style.transform = 'translateX(' + position + 'px)';
      }

      this._setValue(value);

      // Update globals
      this.position = position;
      this.value = value;
      this._updatePercentFromValue();

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
          this.onSlideStart(this.value, this.percent, this.position);
        }

        if (this.onSlide && typeof this.onSlide === 'function') {
          this.onSlide(this.value, this.percent, this.position);
        }
      }

      this.onSlideEventsCount++;
    }
  }, {
    key: '_setBufferPosition',
    value: function _setBufferPosition(pos) {
      var isPercent = true;

      if (isFinite(pos)) {
        pos = parseFloat(pos);
      } else if (func.isString(pos)) {
        if (pos.indexOf('px') > 0) {
          isPercent = false;
        }
        pos = parseFloat(pos);
      } else {
        console.warn('New position must be XXpx or XX%');
        return;
      }

      if (isNaN(pos)) {
        console.warn('New position is NaN');
        return;
      }
      if (!this.options.bufferClass) {
        console.warn('You disabled buffer, it\'s className is empty');
        return;
      }
      var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

      if (bufferSize < 0) {
        bufferSize = 0;
      }
      if (bufferSize > 100) {
        bufferSize = 100;
      }
      this.options.buffer = bufferSize;

      var paddingSize = this.options.borderRadius / this.rangeSize * 100;
      var bufferSizeWithPadding = bufferSize - paddingSize;

      if (bufferSizeWithPadding < 0) {
        bufferSizeWithPadding = 0;
      }

      if (this.vertical) {
        this.buffer.style.height = bufferSizeWithPadding + '%';
        this.buffer.style.bottom = paddingSize * 0.5 + '%';
      } else {
        this.buffer.style.width = bufferSizeWithPadding + '%';
        this.buffer.style.left = paddingSize * 0.5 + '%';
      }

      this.element.setAttribute('data-buffer', bufferSize);
    }

    /**
     *
     * @param {Element} node
     * @returns {*} Returns element position relative to the parent
     * @private
     */

  }, {
    key: '_getPositionFromNode',
    value: function _getPositionFromNode(node) {
      var i = this.vertical ? this.maxHandleX : 0;

      while (node !== null) {
        i += this.vertical ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent;
      }
      return i;
    }

    /**
     *
     * @param {(MouseEvent|TouchEvent)}e
     * @returns {number}
     */

  }, {
    key: '_getRelativePosition',
    value: function _getRelativePosition(e) {
      var boundingClientRect = this.range.getBoundingClientRect();

      // Get the offset relative to the viewport
      var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var pageOffset = 0;

      var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

      if (typeof e[pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
      } else if (typeof e.originalEvent !== 'undefined') {
        if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent[pagePositionProperty];
        } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent.touches[0][pagePositionProperty];
        }
      } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches[0][pagePositionProperty];
      } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
        pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
      }

      if (this.vertical) {
        pageOffset -= window.pageYOffset;
      }

      return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
    }
  }, {
    key: '_getPositionFromValue',
    value: function _getPositionFromValue(value) {
      var percentage = (value - this.min) / (this.max - this.min);
      var pos = percentage * this.maxHandleX;

      return isNaN(pos) ? 0 : pos;
    }
  }, {
    key: '_getValueFromPosition',
    value: function _getValueFromPosition(pos) {
      var percentage = pos / (this.maxHandleX || 1);
      var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;

      return Number(value.toFixed(this.toFixed));
    }
  }, {
    key: '_setValue',
    value: function _setValue(value, force) {
      if (value === this.value && !force) {
        return;
      }

      // Set the new value and fire the `input` event
      this.element.value = value;
      this.value = value;
      dom.triggerEvent(this.element, 'input', { origin: this.identifier });
    }
  }], [{
    key: 'create',
    value: function create(el, options) {
      var createInstance = function createInstance(el) {
        var data = el[pluginName];

        // Create a new instance.
        if (!data) {
          data = new RangeSlider(el, options);
          el[pluginName] = data;
        }
      };

      if (el.length) {
        Array.prototype.slice.call(el).forEach(function (el) {
          createInstance(el);
        });
      } else {
        createInstance(el);
      }
    }
  }]);

  return RangeSlider;
}();

exports.default = RangeSlider;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

var _functions = __webpack_require__(0);

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENT_LISTENER_LIST = 'eventListenerList';

var detectIE = exports.detectIE = function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');

    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var ieVersion = detectIE();
var eventCaptureParams = window.PointerEvent && !ieVersion ? { passive: false } : false;

/**
 * Check if a `element` is visible in the DOM
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
var isHidden = exports.isHidden = function isHidden(element) {
  return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
};

/**
 * Get hidden parentNodes of an `element`
 *
 * @param {Element} element
 * @return {Element[]}
 */
var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
  var parents = [];
  var node = element.parentNode;

  while (isHidden(node)) {
    parents.push(node);
    node = node.parentNode;
  }
  return parents;
};

/**
 * Returns dimensions for an element even if it is not visible in the DOM.
 *
 * @param  {Element} element
 * @param  {string}  key     (e.g. offsetWidth …)
 * @return {Number}
 */
var getDimension = exports.getDimension = function getDimension(element, key) {
  var hiddenParentNodes = getHiddenParentNodes(element);
  var hiddenParentNodesLength = hiddenParentNodes.length;
  var displayProperty = [];
  var dimension = element[key];

  // Used for native `<details>` elements
  var toggleOpenProperty = function toggleOpenProperty(element) {
    if (typeof element.open !== 'undefined') {
      element.open = !element.open;
    }
  };

  if (hiddenParentNodesLength) {
    for (var i = 0; i < hiddenParentNodesLength; i++) {
      // Cache the display property to restore it later.
      displayProperty[i] = hiddenParentNodes[i].style.display;

      hiddenParentNodes[i].style.display = 'block';
      hiddenParentNodes[i].style.height = '0';
      hiddenParentNodes[i].style.overflow = 'hidden';
      hiddenParentNodes[i].style.visibility = 'hidden';
      toggleOpenProperty(hiddenParentNodes[i]);
    }

    dimension = element[key];

    for (var j = 0; j < hiddenParentNodesLength; j++) {
      toggleOpenProperty(hiddenParentNodes[j]);
      hiddenParentNodes[j].style.display = displayProperty[j];
      hiddenParentNodes[j].style.height = '';
      hiddenParentNodes[j].style.overflow = '';
      hiddenParentNodes[j].style.visibility = '';
    }
  }
  return dimension;
};

/**
 *
 * @param {HTMLElement} el
 * @param {Object} cssObj
 * @returns {*}
 */
var setCss = exports.setCss = function setCss(el, cssObj) {
  for (var key in cssObj) {
    el.style[key] = cssObj[key];
  }
  return el.style;
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var hasClass = exports.hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var addClass = exports.addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var removeClass = exports.removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

/**
 *
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {boolean} andForElement - apply callback for el
 * @returns {HTMLElement}
 */
var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
  if (andForElement) {
    callback(el);
  }

  while (el.parentNode && !callback(el)) {
    el = el.parentNode;
  }

  return el;
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} name event name
 * @param {Object} data
 */
var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
  if (!func.isString(name)) {
    throw new TypeError('event name must be String');
  }
  if (!(el instanceof HTMLElement)) {
    throw new TypeError('element must be HTMLElement');
  }
  name = name.trim();
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);
  el.dispatchEvent(event);
};

/**
 * @param {Object} referenceNode after this
 * @param {Object} newNode insert this
 */
var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Add event listeners and push them to el[EVENT_LISTENER_LIST]
 * @param {HTMLElement|Node|Document} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    if (!el[EVENT_LISTENER_LIST]) {
      el[EVENT_LISTENER_LIST] = {};
    }
    if (!el[EVENT_LISTENER_LIST][eventName]) {
      el[EVENT_LISTENER_LIST][eventName] = [];
    }

    el.addEventListener(eventName, listener, eventCaptureParams);
    if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
      el[EVENT_LISTENER_LIST][eventName].push(listener);
    }
  });
};

/**
 * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
 * @param {HTMLElement} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    var index = void 0;

    el.removeEventListener(eventName, listener, false);

    if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
      el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
    }
  });
};

/**
 * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
 * @param instance
 * @param {HTMLElement} el DOM element
 */
var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
  if (!el[EVENT_LISTENER_LIST]) {
    return;
  }

  /* jshint ignore:start */

  /**
   *
   * @callback listener
   * @this {Object} event name
   */
  function rm(listener) {
    if (listener === instance._startEventListener) {
      this.el.removeEventListener(this.eventName, listener, false);
    }
  }

  for (var eventName in el[EVENT_LISTENER_LIST]) {
    el[EVENT_LISTENER_LIST][eventName].forEach(rm, { eventName: eventName, el: el });
  }

  el[EVENT_LISTENER_LIST] = {};
  /* jshint ignore:end */
};

/**
 * Range feature detection
 * @return {Boolean}
 */
var supportsRange = exports.supportsRange = function supportsRange() {
  var input = document.createElement('input');

  input.setAttribute('type', 'range');
  return input.type !== 'text';
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});

},{}]},{},[1]);
