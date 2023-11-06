/* eslint-disable no-restricted-syntax */
/* eslint-disable no-multi-assign */
/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-eval */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => {
  // webpackBootstrap
  /** *** */ 

  /** *** */ let __webpack_modules__ = {
    /***/ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/events */ "./src/modules/events.js");\n\r\n\r\n_modules_events__WEBPACK_IMPORTED_MODULE_0__["default"].clickListener()\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/index.js?',
        );

        /***/
      },

    /***/ './src/modules/dom.js':
      /*! ****************************!*\
  !*** ./src/modules/dom.js ***!
  \*************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\r\n  function openTab() {\r\n    const tabLinks = document.querySelectorAll('.tab-link')\r\n    const tabContents = document.querySelectorAll('.tab-contents')\r\n\r\n    tabLinks.forEach((link) => link.classList.toggle('active-link'))\r\n    tabContents.forEach((tab) => {\r\n      tab.classList.toggle('hide')\r\n    })\r\n  }\r\n\r\n  return {\r\n    openTab,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/modules/dom.js?",
        );

        /***/
      },

    /***/ './src/modules/events.js':
      /*! *******************************!*\
  !*** ./src/modules/events.js ***!
  \****************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-console */\r\n\r\n\r\nconst events = (() => {\r\n  const menu = document.querySelector('.menu')\r\n\r\n  function clickListener() {\r\n    document.addEventListener('click', (event) => {\r\n      const { target } = event\r\n\r\n      // Click on About tab link\r\n      if (target.classList.contains('tab-link')) {\r\n        if (!target.classList.contains('active-link')) {\r\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openTab()\r\n        }\r\n      }\r\n\r\n      if (target.classList.contains('menu-btn')) {\r\n        menu.style.right = '0'\r\n      } else if (target.classList.contains('close-btn')) {\r\n        menu.style.left = '-200px'\r\n      }\r\n    })\r\n  }\r\n\r\n  return {\r\n    clickListener,\r\n  }\r\n})()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/modules/events.js?",
        );

        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ let __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ let cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ let module = (__webpack_module_cache__[moduleId] = {
      /** *** */ // no module.id needed
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (let key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ // startup
  /** *** */ // Load entry module and return exports
  /** *** */ // This entry module can't be inlined because the eval devtool is used.
  /** *** */ let __webpack_exports__ = __webpack_require__('./src/index.js');
  /** *** */
  /** *** */
})();
