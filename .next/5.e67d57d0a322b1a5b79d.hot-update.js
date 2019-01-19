webpackHotUpdate(5,{

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(548);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(488);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(462);

var _Layout = __webpack_require__(745);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/components/Decrypt.js';


var CryptoJS = __webpack_require__(1206);

var EditInput = function (_Component) {
  (0, _inherits3.default)(EditInput, _Component);

  function EditInput() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditInput.__proto__ || (0, _getPrototypeOf2.default)(EditInput)).call.apply(_ref, [this].concat(args))), _this), _this.onGo = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, deseed, num;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ decrypted: 'asdf' });
                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;

                // const name = document.getElementById("name").value
                // const passwords = document.getElementById("passwords").value
                deseed = document.getElementById("deseed").value;
                num = parseInt(_this.props.tokenId);

                console.log(num);
                console.log(deseed);

                _this.decrypt(deseed);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.decrypt = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(deseed) {
        var ciphertext, bytes, decryptedData;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ciphertext = _this.props.data[0].split(':')[1];

                console.log(ciphertext);

                bytes = CryptoJS.AES.decrypt(ciphertext, deseed);

                console.log(bytes);
                decryptedData = bytes.toString(CryptoJS.enc.Utf8);

                console.log(decryptedData);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EditInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('form', { id: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Enter Seed Phrase'), _react2.default.createElement('textarea', { id: 'deseed', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('button', { onClick: this.onGo, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Decrypt Data'))));
    }
  }]);

  return EditInput;
}(_react.Component);

exports.default = EditInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVjcnlwdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiRWRpdElucHV0Iiwib25HbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRlY3J5cHRlZCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkZXNlZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJudW0iLCJwYXJzZUludCIsInByb3BzIiwidG9rZW5JZCIsImNvbnNvbGUiLCJsb2ciLCJkZWNyeXB0IiwiY2lwaGVydGV4dCIsImRhdGEiLCJzcGxpdCIsImJ5dGVzIiwiQUVTIiwiZGVjcnlwdGVkRGF0YSIsInRvU3RyaW5nIiwiZW5jIiwiVXRmOCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFRLEFBQU8sQUFBUSxBQUFNOztBQUN0QyxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFdBQU4sQUFBTSxBQUFXOztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7OztrTixBQUlOOzJGQUFPLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDSDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FGWixBQUVILEFBQWMsQUFBWTtnQ0FGdkI7dUJBR29CLGNBQUEsQUFBSyxJQUh6QixBQUdvQixBQUFTOzttQkFBMUI7QUFISCxvQ0FLSDs7QUFDQTtBQUNNO0FBUEgseUJBT1ksU0FBQSxBQUFTLGVBQVQsQUFBd0IsVUFQcEMsQUFPOEMsQUFDM0M7QUFSSCxzQkFRUyxTQUFTLE1BQUEsQUFBSyxNQVJ2QixBQVFTLEFBQW9CLEFBR2hDOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O3NCQUFBLEFBQUssUUFkRixBQWNILEFBQWE7O21CQWRWO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7O2UsQUFrQkw7MkZBQVUsa0JBQUEsQUFBTyxRQUFQOytCQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUVOO0FBRk0sNkJBRU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLEdBQWhCLEFBQW1CLE1BQW5CLEFBQXlCLEtBRmhDLEFBRU8sQUFBOEIsQUFDL0M7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBRVI7O0FBTE0sd0JBS0UsU0FBQSxBQUFTLElBQVQsQUFBYSxRQUFiLEFBQXFCLFlBTHZCLEFBS0UsQUFBaUMsQUFDN0M7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1I7QUFQTSxnQ0FPVSxNQUFBLEFBQU0sU0FBUyxTQUFBLEFBQVMsSUFQbEMsQUFPVSxBQUE0QixBQUNoRDs7d0JBQUEsQUFBUSxJQVJFLEFBUVYsQUFBWTs7bUJBUkY7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QTs7Ozs7Ozs7Ozs2QkFXSCxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBRUU7QUFGRjtBQUFBLE9BQUEsa0JBRUUsY0FBQSxVQUFNLElBQU4sQUFBUztvQkFBVDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLGtFQUFVLElBQVYsQUFBYSxVQUFTLE1BQXRCLEFBQTJCLEtBQUksTUFBL0IsQUFBb0M7b0JBQXBDO3NCQUpKLEFBQ0UsQUFHRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FWUixBQUNFLEFBRUUsQUFNRSxBQUNFLEFBUVA7Ozs7O0FBR0gsQSxBQXZEd0I7O2tCQXVEeEIsQUFBZSIsImZpbGUiOiJEZWNyeXB0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNkZWNrZXIvcG9ydGZvbGlvL3Rha2UyLzcyMXJlZmFjdG9yIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/macdecker/portfolio/take2/721refactor/components/Decrypt.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/macdecker/portfolio/take2/721refactor/components/Decrypt.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lNjdkNTdkMGEzMjJiMWE1Yjc5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZWNyeXB0LmpzPzE4NzE5NjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJ1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSwgSGVhZGVyLCBDYXJkLCBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5cbmNvbnN0IENyeXB0b0pTID0gcmVxdWlyZShcImNyeXB0by1qc1wiKVxuXG5jbGFzcyBFZGl0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cblxub25HbyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB0aGlzLnNldFN0YXRlKHtkZWNyeXB0ZWQ6ICdhc2RmJ30pXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG5cbiAgICAvLyBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlXG4gICAgLy8gY29uc3QgcGFzc3dvcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZHNcIikudmFsdWVcbiAgICBjb25zdCBkZXNlZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2VlZFwiKS52YWx1ZVxuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHRoaXMucHJvcHMudG9rZW5JZClcblxuXG4gICAgY29uc29sZS5sb2cobnVtKTtcbiAgICBjb25zb2xlLmxvZyhkZXNlZWQpO1xuXG4gICAgdGhpcy5kZWNyeXB0KGRlc2VlZClcbiAgfVxuXG5cbiAgZGVjcnlwdCA9IGFzeW5jIChkZXNlZWQpID0+IHtcblxuICBsZXQgY2lwaGVydGV4dCA9IHRoaXMucHJvcHMuZGF0YVswXS5zcGxpdCgnOicpWzFdXG4gIGNvbnNvbGUubG9nKGNpcGhlcnRleHQpO1xuXG4gIGxldCBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNpcGhlcnRleHQsIGRlc2VlZCk7XG4gIGNvbnNvbGUubG9nKGJ5dGVzKTtcbiAgbGV0IGRlY3J5cHRlZERhdGEgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOClcbiAgY29uc29sZS5sb2coZGVjcnlwdGVkRGF0YSlcbn1cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGlkPVwidG9rZW5Gb3JtXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0PkVudGVyIFNlZWQgUGhyYXNlPC9oND5cblxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2VlZFwiIHJvd3M9XCI0XCIgZm9ybT1cInRva2VuRm9ybVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkdvfT5cbiAgICAgICAgICAgIERlY3J5cHQgRGF0YVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0SW5wdXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRGVjcnlwdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBR0E7QUFDQTtBQURBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUNBO0FBS0E7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVlBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUFHQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9