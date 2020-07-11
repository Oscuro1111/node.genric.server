webpackHotUpdate("static\\development\\pages\\search\\[pattern].js",{

/***/ "./pages/search/[pattern].js":
/*!***********************************!*\
  !*** ./pages/search/[pattern].js ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_commonHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app_components/commonHeader */ "./app_components/commonHeader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Post(_ref) {
  var post = _ref.post;
  return __jsx("div", {
    "class": "card mb-4"
  }, __jsx("img", {
    "class": "card-img-top",
    src: post.thum,
    alt: "Card image cap"
  }), __jsx("div", {
    "class": "card-body"
  }, __jsx("h2", {
    "class": "card-title"
  }, post.title), __jsx("p", {
    "class": "card-text"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/Blog/post/[id].js",
    as: "/Blog/post/".concat(post.postId, "?thum=").concat(post.thum, "&title=").concat(post.title, "&author=").concat(post.author, "&date=").concat(post.date)
  }, __jsx("a", {
    "class": "btn btn-primary"
  }, "Read More \u2192"))), __jsx("div", {
    "class": "card-footer text-muted"
  }, post.date, __jsx("a", {
    href: "#"
  }, post.author)));
}

var __N_SSP = true;
function Home(_ref2) {
  var latest = _ref2.latest,
      home = _ref2.home;
  console.log(latest, home);
  var ref_ = null;
  return __jsx(_app_components_commonHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("body", null, __jsx("nav", {
    "class": "navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
  }, __jsx("div", {
    "class": "container"
  }, __jsx("a", {
    "class": "navbar-brand",
    href: "#"
  }, "Tech-Inventory"), __jsx("button", {
    "class": "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarResponsive",
    "aria-controls": "navbarResponsive",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, __jsx("span", {
    "class": "navbar-toggler-icon"
  })), __jsx("div", {
    "class": "collapse navbar-collapse",
    id: "navbarResponsive"
  }, __jsx("ul", {
    "class": "navbar-nav ml-auto"
  }, __jsx("li", {
    "class": "nav-item active"
  }, __jsx("a", {
    "class": "nav-link",
    href: "#"
  }, "Home", __jsx("span", {
    "class": "sr-only"
  }, "(current)"))), __jsx("li", {
    "class": "nav-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    "class": "nav-link",
    href: "#"
  }, "About"))))))), __jsx("div", {
    "class": "container"
  }, __jsx("div", {
    "class": "row"
  }, __jsx("div", {
    "class": "col-md-8"
  }, __jsx("h1", {
    "class": "my-4 ",
    style: {
      backgroundColor: "#a805da",
      color: "white",
      padding: "0.3rem"
    }
  }, "Blog Posts", __jsx("small", null)), home && home.length == 0 && "No result Found!", home && home.map(function (post, index) {
    return __jsx(Post, {
      key: index,
      post: post
    });
  }), __jsx("ul", {
    "class": "pagination justify-content-center mb-4"
  }, __jsx("li", {
    "class": "page-item"
  }, __jsx("a", {
    "class": "page-link",
    href: "#"
  }, "\u2190 Older")), __jsx("li", {
    "class": "page-item disabled"
  }, __jsx("a", {
    "class": "page-link",
    href: "#"
  }, "Newer \u2192")))), __jsx("div", {
    "class": "col-md-4"
  }, __jsx("div", {
    "class": "card my-4"
  }, __jsx("h5", {
    "class": "card-header"
  }, "Search"), __jsx("div", {
    "class": "card-body"
  }, __jsx("div", {
    "class": "input-group"
  }, __jsx("input", {
    type: "text",
    "class": "form-control",
    placeholder: "Search for...",
    ref: function ref(_ref3) {
      ref_ = _ref3;
    }
  }), __jsx("span", {
    "class": "input-group-append"
  }, __jsx("button", {
    onClick: function onClick(e) {
      if (ref_ && ref_.value) {
        window.location.assign("/search/".concat(ref_.value));
      }
    },
    type: "submit",
    "class": "btn btn-secondary"
  }, "Search"))))), __jsx("div", {
    "class": "card my-4"
  }, __jsx("h5", {
    "class": "card-header"
  }, "Latest"), __jsx("div", {
    "class": "card-body"
  }, __jsx("div", {
    "class": "row"
  }, __jsx("div", {
    "class": "col-lg-6"
  }, __jsx("ul", {
    "class": "list-unstyled mb-0"
  }, latest && latest.map(function (post, index) {
    return __jsx("li", {
      key: index
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/Blog/post/[id].js",
      as: "/Blog/post/".concat(post.postId, "?thum=").concat(post.thum, "&title=").concat(post.title, "&author=").concat(post.author, "&date=").concat(post.date)
    }, __jsx("a", null, post.title)));
  })))))), __jsx("div", {
    "class": "card my-4"
  }, __jsx("h5", {
    "class": "card-header"
  }, "Side Widget"), __jsx("div", {
    "class": "card-body"
  }, "ADS"))))), __jsx("footer", {
    "class": "py-5 bg-dark"
  }, __jsx("div", {
    "class": "container"
  }, __jsx("p", {
    "class": "m-0 text-center text-white"
  }, "Copyright \xA9 Your Website 2020")))));
}

/***/ })

})
//# sourceMappingURL=[pattern].js.fb84d5963e84ce591279.hot-update.js.map