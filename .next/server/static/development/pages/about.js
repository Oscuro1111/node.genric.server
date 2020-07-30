module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function About() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/font-awesome.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/templatemo-blue.css"
  })), __jsx("main", null, __jsx("body", {
    "data-spy": "scroll",
    "data-target": ".navbar-collapse",
    style: {
      backgroundColor: "black"
    }
  }, __jsx("header", null, __jsx("div", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-12 col-sm-12"
  }, __jsx("img", {
    src: "images/tm-easy-profile.png",
    class: "img-responsive img-circle tm-border",
    alt: "templatemo easy profile"
  }), __jsx("hr", null), __jsx("h1", {
    class: "tm-title bold shadow"
  }, "Hi, I am Sahil"), __jsx("h1", {
    class: "white bold shadow"
  }, "Developer"))))), __jsx("section", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-6 col-sm-12"
  }, __jsx("div", {
    class: "about"
  }, __jsx("h3", {
    class: "accent"
  }, "About Me"), __jsx("p", null, "This is my personal blog.I am web developer and like to work on projects and backand tech."))), __jsx("div", {
    class: "col-md-6 col-sm-12"
  }, __jsx("div", {
    class: "skills"
  }, __jsx("h2", {
    class: "white"
  }, "Skills"), __jsx("strong", null, "Javascript"), __jsx("span", {
    class: "pull-right"
  }, "95%"), __jsx("div", {
    class: "progress"
  }, __jsx("div", {
    class: "progress-bar progress-bar-primary",
    role: "progressbar",
    "aria-valuenow": "70",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      width: "95%"
    }
  })), __jsx("strong", null, "React"), __jsx("span", {
    class: "pull-right"
  }, "70%"), __jsx("div", {
    class: "progress"
  }, __jsx("div", {
    class: "progress-bar progress-bar-primary",
    role: "progressbar",
    "aria-valuenow": "85",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      width: "70%"
    }
  })), __jsx("strong", null, "Nodejs"), __jsx("span", {
    class: "pull-right"
  }, "80%"), __jsx("div", {
    class: "progress"
  }, __jsx("div", {
    class: "progress-bar progress-bar-primary",
    role: "progressbar",
    "aria-valuenow": "85",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      width: "80%"
    }
  })), __jsx("strong", null, "Bootstrap"), __jsx("span", {
    class: "pull-right"
  }, "85%"), __jsx("div", {
    class: "progress"
  }, __jsx("div", {
    class: "progress-bar progress-bar-primary",
    role: "progressbar",
    "aria-valuenow": "95",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: {
      width: "85%"
    }
  })))))), __jsx("section", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-8 col-sm-12"
  }, __jsx("div", {
    class: "education"
  }, __jsx("h2", {
    class: "white"
  }, "Education"), __jsx("div", {
    class: "education-content"
  }, __jsx("h4", {
    class: "education-title accent"
  }, "New Web Design"), __jsx("div", {
    class: "education-school"
  }, __jsx("h5", null, "High school"), __jsx("span", null), __jsx("h5", null, "2015 March - 2017 March")), __jsx("p", {
    class: "education-description"
  }, "Studied Science And High school Mathematics. In Colleage Studied computer programming.")))), __jsx("div", {
    class: "col-md-4 col-sm-12"
  }, __jsx("div", {
    class: "languages"
  }, __jsx("h2", null, "Languages"), __jsx("ul", null, __jsx("li", null, "English"), __jsx("li", null, "Hindi")))))), __jsx("section", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-4 col-sm-12"
  }, __jsx("div", {
    class: "contact"
  }, __jsx("h2", null, "Contact"), __jsx("p", null, __jsx("i", {
    class: "fa fa-map-marker"
  }), "India ,HP"), __jsx("p", null, __jsx("i", {
    class: "fa fa-envelope"
  }), " sahiljarial1999@gmail.com"), __jsx("p", null, __jsx("i", {
    class: "fa fa-globe"
  }), "www.tech-inventory.com"))), __jsx("div", {
    class: "col-md-8 col-sm-12"
  }, __jsx("div", {
    class: "experience"
  }, __jsx("h2", {
    class: "white"
  }, "Experiences"), __jsx("div", {
    class: "experience-content"
  }, __jsx("h4", {
    class: "experience-title accent"
  }, "Website Development"), __jsx("h5", null, "2019 Feb - current"))))), __jsx("div", {
    onClick: e => location.assign("/"),
    style: {
      "font-size": "30px"
    },
    className: "btn btn-primary"
  }, "Back")), __jsx("footer", null, __jsx("div", {
    class: "container"
  }, __jsx("div", {
    class: "row"
  }, __jsx("div", {
    class: "col-md-12 col-sm-12"
  }, __jsx("p", null, "Copyright \xA9 2020 Tech-Inventory"), __jsx("ul", {
    class: "social-icons"
  }, __jsx("li", null, __jsx("a", {
    href: "https://www.facebook.com/sahiljC1999",
    class: "fa fa-facebook"
  })), __jsx("li", null, __jsx("a", {
    href: "https://github.com/Oscuro1111",
    class: "fa fa-github"
  })), __jsx("li", null, __jsx("a", {
    href: "https://twitter.com/Oscuro17578004",
    class: "fa fa-twitter"
  }))))))), __jsx("script", {
    src: "js/jquery.js"
  }), __jsx("script", {
    src: "js/bootstrap.min.js"
  }), __jsx("script", {
    src: "js/jquery.backstretch.min.js"
  }), __jsx("script", {
    src: "js/custom.js"
  }))));
}

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/about/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\web.projects\node.genric.server\pages\about\index.js */"./pages/about/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map