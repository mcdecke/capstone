'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/components/EditInput.js';


var CryptoJS = require('crypto-js');

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