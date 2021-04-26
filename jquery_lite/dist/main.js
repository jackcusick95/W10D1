/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("\n\nclass DOMNodeCollection {\n  constructor(array) {\n    this.array = array; \n  }\n\n  html(str) {\n    if (!str) {\n      return this.array[0].innerHTML; \n    } else {\n      this.array.forEach(el => el.innerHTML = str );  \n    }\n  }\n\n  empty() {\n    this.array.forEach( el => el.innerHTML = \"\" ); \n  }\n\n  append(arg) {\n    // arg is $l, HTML element, or a string\n    if (arg instanceof HTMLElement) {\n      this.array.forEach( el => el.innerHTML += arg.outerHTML );\n\n    } else if (typeof arg === \"string\") {\n      this.array.forEach( el => el.innerHTML += arg );\n\n    } else if (arg.length > 1) {\n      this.array.forEach(el => {\n        for (const argEl of arg) {\n          el.innerHTML += argEl.outerHTML;\n        } \n      });\n    }\n  }\n\n  attr(attribute, val) {\n    if (!val) {\n      return this.array[0].getAttribute(attribute);\n    } else {\n      this.array.forEach( el => el.setAttribute(attribute, val)); \n    }\n  }\n\n  addClass(str) {\n    this.array.forEach( el => el.classList.add(str)); \n  }\n\n  removeClass(str) {\n    this.array.forEach(el => el.classList.remove(str));\n  }\n\n\n\n  // TRAVERSAL\n  children() {\n    const childCollection = this.array.map(el => el.children); \n    let childArr = []; \n\n    childCollection.forEach(el => {\n      childArr = childArr.concat( Array.from(el) )\n    })\n\n    return new DOMNodeCollection(childArr); \n  }\n  \n  parent() {\n    const parentCollection = this.array.map(el => {\n      debugger\n      return el.parentElement\n    }); \n    let parentArr = []; \n\n    parentCollection.forEach(el => parentArr.push(el) )\n  \n    return new DOMNodeCollection(parentArr); \n  }\n\n  find(selector) {\n    const nodeLists = this.array.map( el => {\n      return el.querySelectorAll(`${selector}`); \n    }); \n\n    let selectArr = [];\n\n    nodeLists.forEach( list => {\n      selectArr = selectArr.concat(Array.from(list)); \n    })\n\n    return new DOMNodeCollection(selectArr); \n  }\n\n  remove() {}\n}\n\n\nmodule.exports = DOMNodeCollection; \n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst DOMNode = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\"); \n\n\n\nconst $l = function(el) {\n  if (el instanceof HTMLElement) {\n    return new DOMNode([el]); \n  } else {\n    const nodeArray = document.querySelectorAll(el); \n    return Array.from(nodeArray); \n  }\n}\n\n\n\n\n\n\n\nwindow.$l = $l; \n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;