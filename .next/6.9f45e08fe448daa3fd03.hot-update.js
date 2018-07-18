webpackHotUpdate(6,{

/***/ "./node_modules/web3/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Gav Wood <gav@parity.io>
 *   Jeffrey Wilcke <jeffrey.wilcke@ethereum.org>
 *   Marek Kotewicz <marek@parity.io>
 *   Marian Oancea <marian@ethereum.org>
 * @date 2017
 */




var version = __webpack_require__("./node_modules/web3/package.json").version;
var core = __webpack_require__("./node_modules/web3-core/src/index.js");
var Eth = __webpack_require__("./node_modules/web3-eth/src/index.js");
var Net = __webpack_require__("./node_modules/web3-net/src/index.js");
var Personal = __webpack_require__("./node_modules/web3-eth-personal/src/index.js");
var Shh = __webpack_require__("./node_modules/web3-shh/src/index.js");
var Bzz = __webpack_require__("./node_modules/web3-bzz/src/index.js");
var utils = __webpack_require__("./node_modules/web3-utils/src/index.js");

var Web3 = function Web3() {
    var _this = this;

    // sets _requestmanager etc
    core.packageInit(this, arguments);

    this.version = version;
    this.utils = utils;

    this.eth = new Eth(this);
    this.shh = new Shh(this);
    this.bzz = new Bzz(this);

    // overwrite package setProvider
    var setProvider = this.setProvider;
    this.setProvider = function (provider, net) {
        setProvider.apply(_this, arguments);

        this.eth.setProvider(provider, net);
        this.shh.setProvider(provider, net);
        this.bzz.setProvider(provider);

        return true;
    };
};

Web3.version = version;
Web3.utils = utils;
Web3.modules = {
    Eth: Eth,
    Net: Net,
    Personal: Personal,
    Shh: Shh,
    Bzz: Bzz
};

core.addProviders(Web3);

module.exports = Web3;



/***/ }),

/***/ "./src/ethereum/web3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web3__);
 // const web3 = new Web3(window.web3.currentProvider)

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //In the browser and metamask is running
  web3 = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a(window.web3.currentProvider);
} else {
  //On the server or metamask isn't running
  var provider = new __WEBPACK_IMPORTED_MODULE_0_web3___default.a();
}

/* harmony default export */ __webpack_exports__["a"] = (web3);

/***/ })

})
//# sourceMappingURL=6.9f45e08fe448daa3fd03.hot-update.js.map