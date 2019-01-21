webpackHotUpdate(5,{

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(1192);

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

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

var _factory = __webpack_require__(489);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(453);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(445);

var _Layout = __webpack_require__(547);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/components/EditInput.js';


var CryptoJS = __webpack_require__(750);

var EditInput = function (_Component) {
  (0, _inherits3.default)(EditInput, _Component);

  function EditInput() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, EditInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditInput.__proto__ || (0, _getPrototypeOf2.default)(EditInput)).call(this));

    _this.handleNameChange = function (evt) {
      _this.setState({ name: evt.target.value });
    };

    _this.handlePasswordNameChange = function (idx) {
      return function (evt) {
        var newPasswords = _this.state.passwords.map(function (password, sidx) {
          if (idx !== sidx) return password;
          return (0, _extends3.default)({}, password, { name: evt.target.value });
        });

        _this.setState({ passwords: newPasswords });
      };
    };

    _this.handleSubmit = function (evt) {
      var _this$state = _this.state,
          name = _this$state.name,
          passwords = _this$state.passwords;

      alert('Incorporated: ' + name + ' with ' + passwords.length + ' passwords');
    };

    _this.handleAddPassword = function () {
      _this.setState({
        passwords: _this.state.passwords.concat([{ name: "" }])
      });
    };

    _this.handleRemovePassword = function (idx) {
      return function () {
        _this.setState({
          passwords: _this.state.passwords.filter(function (s, sidx) {
            return idx !== sidx;
          })
        });
      };
    };

    _this.onGo = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, name, passwords, seed, num;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                name = document.getElementById("name").value;
                passwords = _this.state.passwords;
                seed = document.getElementById("seed").value;
                num = parseInt(_this.props.tokenId);

                console.log(num, name, passwords, seed);
                _this.encrypt(num, name, passwords, seed);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.encrypt = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(num, name, pass, seed) {
        var passString, ciphertext, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //create strigified encrypted passwords
                passString = (0, _stringify2.default)(pass);
                ciphertext = CryptoJS.AES.encrypt(passString, seed).toString();
                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                _context2.next = 8;
                return _factory2.default.methods.editToken(num, name + ":" + ciphertext).send({ from: accounts[0] }).catch(console.log('didnt make it'));

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ errorMessage: _context2.t0.message });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 10]]);
      }));

      return function (_x2, _x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      name: "",
      passwords: [{ name: "" }]
    };
    return _this;
  }

  (0, _createClass3.default)(EditInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ counter: 0 });
    }
  }, {
    key: 'onAddPassword',
    value: function onAddPassword() {
      event.preventDefault();
      console.log('hi');
      this.setState({ counter: counter + 2 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('form', {
        id: 'tokenForm',
        onSubmit: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Enter Token Name'), _react2.default.createElement('input', { id: 'name', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Enter Seed Phrase'), _react2.default.createElement('textarea', { id: 'seed', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      })), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Passwords'), this.state.passwords.map(function (password, idx) {
        return _react2.default.createElement('div', { className: 'password', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement('input', {
          type: 'text',
          placeholder: 'Password #' + (idx + 1) + ' name',
          value: password.name,
          onChange: _this3.handlePasswordNameChange(idx),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }), _react2.default.createElement('button', {
          type: 'button',
          onClick: _this3.handleRemovePassword(idx),
          className: 'small',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, '-'));
      }), _react2.default.createElement('button', {
        type: 'button',
        onClick: this.handleAddPassword,
        className: 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'Add Password')), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement('button', { onClick: this.onGo, __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, 'Encrypt Passwords'));
    }
  }]);

  return EditInput;
}(_react.Component);

exports.default = EditInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdElucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJCdXR0b24iLCJUYWJsZSIsIkhlYWRlciIsIkNhcmQiLCJDb250YWluZXIiLCJMYXlvdXQiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJFZGl0SW5wdXQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwic2V0U3RhdGUiLCJuYW1lIiwiZXZ0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZE5hbWVDaGFuZ2UiLCJuZXdQYXNzd29yZHMiLCJzdGF0ZSIsInBhc3N3b3JkcyIsIm1hcCIsInBhc3N3b3JkIiwic2lkeCIsImlkeCIsImhhbmRsZVN1Ym1pdCIsImFsZXJ0IiwibGVuZ3RoIiwiaGFuZGxlQWRkUGFzc3dvcmQiLCJjb25jYXQiLCJoYW5kbGVSZW1vdmVQYXNzd29yZCIsImZpbHRlciIsInMiLCJvbkdvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VlZCIsIm51bSIsInBhcnNlSW50IiwicHJvcHMiLCJ0b2tlbklkIiwiY29uc29sZSIsImxvZyIsImVuY3J5cHQiLCJwYXNzIiwicGFzc1N0cmluZyIsImNpcGhlcnRleHQiLCJBRVMiLCJ0b1N0cmluZyIsIm1ldGhvZHMiLCJlZGl0VG9rZW4iLCJzZW5kIiwiZnJvbSIsImNhdGNoIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFRLEFBQU8sQUFBUSxBQUFNOztBQUN0QyxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFdB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QUFBLFNBWEYsQUFXRSxBQUVDLG1CQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsVUFBRCxBQUFXLEtBQVg7K0JBQ3hCLGNBQUEsU0FBSyxXQUFMLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGO1NBQUE7Z0JBQ0UsQUFDTyxBQUNMO3VDQUEwQixNQUExQixBQUFnQyxLQUZsQyxBQUdFO2lCQUFPLFNBSFQsQUFHa0IsQUFDaEI7b0JBQVUsT0FBQSxBQUFLLHlCQUpqQixBQUlZLEFBQThCOztzQkFKMUM7d0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSw0QkFLRixjQUFBO2dCQUFBLEFBQ08sQUFDTDttQkFBUyxPQUFBLEFBQUsscUJBRmhCLEFBRVcsQUFBMEIsQUFDbkM7cUJBSEYsQUFHWTs7c0JBSFo7d0JBQUE7QUFBQTtBQUNFLFdBVG9CLEFBQ3hCLEFBT0U7QUFyQk4sQUFhRyxBQWlCRCwwQkFBQSxjQUFBO2NBQUEsQUFDTyxBQUNMO2lCQUFTLEtBRlgsQUFFZ0IsQUFDZDttQkFIRixBQUdZOztvQkFIWjtzQkFBQTtBQUFBO0FBQ0UsU0FqQ0wsQUFFQyxBQThCRSxBQVFGOztvQkFBQTtzQkF4Q0QsQUF3Q0MsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0ExQ0gsQUFDRSxBQXlDQyxBQUtGOzs7OztBQUdILEEsQUE3SHdCOztrQkE2SHhCLEFBQWUiLCJmaWxlIjoiRWRpdElucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNkZWNrZXIvcG9ydGZvbGlvL3Rha2UyLzcyMXJlZmFjdG9yIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/macdecker/portfolio/take2/721refactor/components/EditInput.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/macdecker/portfolio/take2/721refactor/components/EditInput.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43MWE5ZTgxZjg4NzRkNDY1MGNkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FZGl0SW5wdXQuanM/N2VkYjlhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSdcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlLCBIZWFkZXIsIENhcmQsIENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcblxuY29uc3QgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpXG5cbmNsYXNzIEVkaXRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIHN1cGVyKCk7XG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgbmFtZTogXCJcIixcbiAgICBwYXNzd29yZHM6IFt7IG5hbWU6IFwiXCIgfV1cbiAgICB9O1xuICB9XG5cbmhhbmRsZU5hbWVDaGFuZ2UgPSBldnQgPT4ge1xuICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGV2dC50YXJnZXQudmFsdWUgfSk7XG4gfTtcblxuIGhhbmRsZVBhc3N3b3JkTmFtZUNoYW5nZSA9IGlkeCA9PiBldnQgPT4ge1xuICAgY29uc3QgbmV3UGFzc3dvcmRzID0gdGhpcy5zdGF0ZS5wYXNzd29yZHMubWFwKChwYXNzd29yZCwgc2lkeCkgPT4ge1xuICAgICBpZiAoaWR4ICE9PSBzaWR4KSByZXR1cm4gcGFzc3dvcmQ7XG4gICAgIHJldHVybiB7IC4uLnBhc3N3b3JkLCBuYW1lOiBldnQudGFyZ2V0LnZhbHVlIH07XG4gICB9KTtcblxuICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkczogbmV3UGFzc3dvcmRzIH0pO1xuIH07XG5cbiBoYW5kbGVTdWJtaXQgPSBldnQgPT4ge1xuICAgY29uc3QgeyBuYW1lLCBwYXNzd29yZHMgfSA9IHRoaXMuc3RhdGU7XG4gICBhbGVydChgSW5jb3Jwb3JhdGVkOiAke25hbWV9IHdpdGggJHtwYXNzd29yZHMubGVuZ3RofSBwYXNzd29yZHNgKTtcbiB9O1xuXG4gaGFuZGxlQWRkUGFzc3dvcmQgPSAoKSA9PiB7XG4gICB0aGlzLnNldFN0YXRlKHtcbiAgICAgcGFzc3dvcmRzOiB0aGlzLnN0YXRlLnBhc3N3b3Jkcy5jb25jYXQoW3sgbmFtZTogXCJcIiB9XSlcbiAgIH0pO1xuIH07XG5cbiBoYW5kbGVSZW1vdmVQYXNzd29yZCA9IGlkeCA9PiAoKSA9PiB7XG4gICB0aGlzLnNldFN0YXRlKHtcbiAgICAgcGFzc3dvcmRzOiB0aGlzLnN0YXRlLnBhc3N3b3Jkcy5maWx0ZXIoKHMsIHNpZHgpID0+IGlkeCAhPT0gc2lkeClcbiAgIH0pO1xuIH07XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IDB9KVxuICB9XG5cbiAgb25HbyA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlXG4gICAgY29uc3QgcGFzc3dvcmRzID0gdGhpcy5zdGF0ZS5wYXNzd29yZHNcbiAgICBjb25zdCBzZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWVkXCIpLnZhbHVlXG4gICAgY29uc3QgbnVtID0gcGFyc2VJbnQodGhpcy5wcm9wcy50b2tlbklkKVxuICAgIGNvbnNvbGUubG9nKG51bSwgbmFtZSwgcGFzc3dvcmRzLCBzZWVkKTtcbiAgICB0aGlzLmVuY3J5cHQobnVtLCBuYW1lLCBwYXNzd29yZHMsIHNlZWQpXG4gIH1cblxuICBvbkFkZFBhc3N3b3JkKCl7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKCdoaScpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IGNvdW50ZXIgKyAyfSlcbiAgfVxuXG4gIGVuY3J5cHQgPSBhc3luYyAobnVtLCBuYW1lLCBwYXNzLCBzZWVkKSA9PiB7XG4gICAgLy9jcmVhdGUgc3RyaWdpZmllZCBlbmNyeXB0ZWQgcGFzc3dvcmRzXG4gICAgbGV0IHBhc3NTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShwYXNzKVxuICAgIGxldCBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQocGFzc1N0cmluZywgc2VlZCkudG9TdHJpbmcoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kcy5lZGl0VG9rZW4obnVtLCBuYW1lICtcIjpcIisgY2lwaGVydGV4dCkuc2VuZCh7ZnJvbTogYWNjb3VudHNbMF19KS5jYXRjaChjb25zb2xlLmxvZygnZGlkbnQgbWFrZSBpdCcpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZX0pXG4gICAgfVxuICB9XG5cblxucmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG5cbiAgICAgPGZvcm1cbiAgICAgIGlkPVwidG9rZW5Gb3JtXCJcbiAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgIDxkaXY+XG4gICAgICAgPGg0PkVudGVyIFRva2VuIE5hbWU8L2g0PlxuICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiByb3dzPVwiNFwiIGZvcm09XCJ0b2tlbkZvcm1cIj48L2lucHV0PlxuXG4gICAgICAgPGg0PkVudGVyIFNlZWQgUGhyYXNlPC9oND5cbiAgICAgICA8dGV4dGFyZWEgaWQ9XCJzZWVkXCIgcm93cz1cIjRcIiBmb3JtPVwidG9rZW5Gb3JtXCI+PC90ZXh0YXJlYT5cbiAgICAgPC9kaXY+XG5cbiAgICAgICA8aDQ+UGFzc3dvcmRzPC9oND5cblxuICAgICAgIHt0aGlzLnN0YXRlLnBhc3N3b3Jkcy5tYXAoKHBhc3N3b3JkLCBpZHgpID0+IChcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgUGFzc3dvcmQgIyR7aWR4ICsgMX0gbmFtZWB9XG4gICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm5hbWV9XG4gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmROYW1lQ2hhbmdlKGlkeCl9XG4gICAgICAgICAgIC8+XG4gICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVBhc3N3b3JkKGlkeCl9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwic21hbGxcIlxuICAgICAgICAgICA+XG4gICAgICAgICAgICAgLVxuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICkpfVxuICAgICAgIDxidXR0b25cbiAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRQYXNzd29yZH1cbiAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsXCJcbiAgICAgICA+XG4gICAgICAgICBBZGQgUGFzc3dvcmRcbiAgICAgICA8L2J1dHRvbj5cbiAgICAgPC9mb3JtPlxuICAgICA8aHIvPlxuICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Hb30+XG4gICAgICAgRW5jcnlwdCBQYXNzd29yZHNcbiAgICAgPC9idXR0b24+XG4gICAgPC9Db250YWluZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRJbnB1dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9FZGl0SW5wdXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBTkE7QUFaQTtBQUNBO0FBb0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQXZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUFBO0FBNUJBO0FBQ0E7QUErQkE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFGQTtBQWhDQTtBQUNBO0FBeUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQVRBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBMUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBMERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTNEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBaUNBO0FBQUE7Ozs7QUFlQTtBQUNBO0FBQUE7QUFDQTs7OztBQWdCQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFGQTtBQUdBO0FBSEE7QUFDQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==