/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/events */ \"./src/modules/events.js\");\n/* eslint-disable no-alert */\r\n\r\n\r\n_modules_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clickListener();\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\r\n  function openTab() {\r\n    const tabLinks = document.querySelectorAll('.tab-link');\r\n    const tabContents = document.querySelectorAll('.tab-contents');\r\n   \r\n    tabLinks.forEach((link) => link.classList.toggle('active-link'));\r\n    tabContents.forEach((tab) => {\r\n      tab.classList.toggle('hide');\r\n    });\r\n  }\r\n\r\n  function openMenuLink(link) {\r\n    const menuLinks = document.querySelectorAll('.menu-link');\r\n    menuLinks.forEach((menuLink) => menuLink.classList.remove('active-link'));\r\n    link.classList.add('active-link');\r\n  }\r\n\r\n  return {\r\n    openTab,openMenuLink\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* eslint-disable no-alert */\r\n/* eslint-disable no-plusplus */\r\n/* eslint-disable no-console */\r\n\r\n\r\nconst events = (() => {\r\n  const menu = document.querySelector('.menu');\r\n  const sections = document.querySelectorAll('section');\r\n  const menuLinks = document.querySelectorAll('.menu-link');\r\n\r\n  function clickListener() {\r\n    const copy = document.querySelector('.icons-list').cloneNode(true);\r\n    document.querySelector('.skills-carousel').appendChild(copy);\r\n\r\n    document.addEventListener('click', (event) => {\r\n      const { target } = event;\r\n      // Click on About tab link\r\n      if (target.classList.contains('tab-link')) {\r\n        if (!target.classList.contains('active-link')) {\r\n          _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openTab();\r\n        }\r\n      }\r\n\r\n      if (target.classList.contains('menu-link')) {\r\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openMenuLink(target);\r\n      }\r\n\r\n      // Navbar manipulation\r\n      if (target.classList.contains('menu-btn')) {\r\n        menu.style.right = '0';\r\n      } else if (target.classList.contains('close-btn')) {\r\n        menu.style.right = '-200px';\r\n      }\r\n    });\r\n  }\r\n\r\n  window.onscroll = () =>{\r\n    sections.forEach((section)=>{\r\n      let top = window.scrollY;\r\n      let offset = section.offsetTop - 150;\r\n      let height = section.offsetHeight;\r\n      let id = section.getAttribute('id');\r\n\r\n      if( top >= offset && top < offset+ height){\r\n        menuLinks.forEach(link=>{\r\n          link.classList.remove('active-link');\r\n          if (link.getAttribute('href').includes(id)) {\r\n              link.classList.add('active-link');\r\n          }\r\n        })\r\n      }\r\n    })\r\n  }\r\n\r\n  return {\r\n    clickListener,\r\n  };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\r\n\n\n//# sourceURL=webpack://my-portfolio/./src/modules/events.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;