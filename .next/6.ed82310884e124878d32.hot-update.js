webpackHotUpdate(6,{

/***/ "./src/ethereum/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
 // const web3 = new Web3(window.web3.currentProvider)

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //In the browser and metamask is running
  web3 = new web3(window.web3.currentProvider);
} else {}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ })

})
//# sourceMappingURL=6.ed82310884e124878d32.hot-update.js.map