'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditInput.__proto__ || (0, _getPrototypeOf2.default)(EditInput)).call.apply(_ref, [this].concat(args))), _this), _this.onGo = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
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
                passwords = document.getElementById("passwords").value;
                seed = document.getElementById("seed").value;
                num = parseInt(_this.props.tokenId);

                console.log(num);
                console.log(name + ":" + passwords + ":" + seed);

                _this.encrypt(num, name, passwords, seed);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.encrypt = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(num, name, pass, seed) {
        var ciphertext, accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //create strigified encrypted passwords
                ciphertext = CryptoJS.AES.encrypt(pass, seed).toString();

                console.log(ciphertext);
                //
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
          lineNumber: 43
        }
      }, _react2.default.createElement('form', { id: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Enter Token Name'), _react2.default.createElement('input', { id: 'name', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Enter Passwords'), _react2.default.createElement('textarea', { id: 'passwords', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Enter Seed Phrase'), _react2.default.createElement('textarea', { id: 'seed', rows: '4', form: 'tokenForm', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('button', { onClick: this.onGo, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'Encrypt Passwords'))));
    }
  }]);

  return EditInput;
}(_react.Component);

exports.default = EditInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWRpdElucHV0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJCdXR0b24iLCJUYWJsZSIsIkhlYWRlciIsIkNhcmQiLCJDb250YWluZXIiLCJMYXlvdXQiLCJDcnlwdG9KUyIsInJlcXVpcmUiLCJFZGl0SW5wdXQiLCJvbkdvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwicGFzc3dvcmRzIiwic2VlZCIsIm51bSIsInBhcnNlSW50IiwicHJvcHMiLCJ0b2tlbklkIiwiY29uc29sZSIsImxvZyIsImVuY3J5cHQiLCJwYXNzIiwiY2lwaGVydGV4dCIsIkFFUyIsInRvU3RyaW5nIiwibWV0aG9kcyIsImVkaXRUb2tlbiIsInNlbmQiLCJmcm9tIiwiY2F0Y2giLCJzZXRTdGF0ZSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFPLEFBQVEsQUFBTTs7QUFDdEMsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxXQUFOLEFBQU0sQUFBVzs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFFTjsyRkFBTyxpQkFBQSxBQUFPLE9BQVA7NkNBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ0g7c0JBREcsQUFDSCxBQUFNO2dDQURIO3VCQUVvQixjQUFBLEFBQUssSUFGekIsQUFFb0IsQUFBUzs7bUJBQTFCO0FBRkgsb0NBSUc7QUFKSCx1QkFJVSxTQUFBLEFBQVMsZUFBVCxBQUF3QixRQUpsQyxBQUkwQyxBQUN2QztBQUxILDRCQUtlLFNBQUEsQUFBUyxlQUFULEFBQXdCLGFBTHZDLEFBS29ELEFBQ2pEO0FBTkgsdUJBTVUsU0FBQSxBQUFTLGVBQVQsQUFBd0IsUUFObEMsQUFNMEMsQUFDdkM7QUFQSCxzQkFPUyxTQUFTLE1BQUEsQUFBSyxNQVB2QixBQU9TLEFBQW9CLEFBRWhDOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFBLEFBQVEsSUFBSSxPQUFBLEFBQUssTUFBTCxBQUFTLFlBQVQsQUFBbUIsTUFBL0IsQUFBbUMsQUFFbkM7O3NCQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsTUFBbEIsQUFBd0IsV0FackIsQUFZSCxBQUFtQzs7bUJBWmhDO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7O2UsQUFlTDsyRkFBVSxrQkFBQSxBQUFPLEtBQVAsQUFBWSxNQUFaLEFBQWtCLE1BQWxCLEFBQXdCLE1BQXhCO3dCQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUNSO0FBQ0k7QUFGSSw2QkFFUyxTQUFBLEFBQVMsSUFBVCxBQUFhLFFBQWIsQUFBcUIsTUFBckIsQUFBMkIsTUFGcEMsQUFFUyxBQUFpQyxBQUNsRDs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtBQUpRO2lDQUFBO2lDQUFBO3VCQU1pQixjQUFBLEFBQUssSUFOdEIsQUFNaUIsQUFBUzs7bUJBQTFCO0FBTkEscUNBQUE7aUNBQUE7dUJBUUEsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFVBQWhCLEFBQTBCLEtBQUssT0FBQSxBQUFNLE1BQXJDLEFBQTBDLFlBQTFDLEFBQXNELEtBQUssRUFBQyxNQUFNLFNBQWxFLEFBQTJELEFBQU8sQUFBUyxNQUEzRSxBQUFnRixNQUFNLFFBQUEsQUFBUSxJQVI5RixBQVFBLEFBQXNGLEFBQVk7O21CQVJsRztpQ0FBQTtBQUFBOzttQkFBQTtpQ0FBQTtrREFXTjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxhQVh2QixBQVdOLEFBQWMsQUFBbUI7O21CQVgzQjttQkFBQTtpQ0FBQTs7QUFBQTtrQ0FBQTtBOzs7Ozs7Ozs7OzZCQWVILEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFFRTtBQUZGO0FBQUEsT0FBQSxrQkFFRSxjQUFBLFVBQU0sSUFBTixBQUFTO29CQUFUO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsOERBQU8sSUFBUCxBQUFVLFFBQU8sTUFBakIsQUFBc0IsS0FBSSxNQUExQixBQUErQjtvQkFBL0I7c0JBRkYsQUFFRSxBQUVBO0FBRkE7MEJBRUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLGdFQUFVLElBQVYsQUFBYSxhQUFZLE1BQXpCLEFBQThCLEtBQUksTUFBbEMsQUFBdUM7b0JBQXZDO3NCQUxGLEFBS0UsQUFFQTtBQUZBOzBCQUVBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVBGLEFBT0UsQUFDQSxrRUFBVSxJQUFWLEFBQWEsUUFBTyxNQUFwQixBQUF5QixLQUFJLE1BQTdCLEFBQWtDO29CQUFsQztzQkFUSixBQUNFLEFBUUUsQUFFRjtBQUZFOzJCQUVGLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCO29CQUF0QjtzQkFBQTtBQUFBO1NBZlIsQUFDRSxBQUVFLEFBV0UsQUFDRSxBQVFQOzs7OztBQUdILEEsQUEzRHdCOztrQkEyRHhCLEFBQWUiLCJmaWxlIjoiRWRpdElucHV0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNkZWNrZXIvcG9ydGZvbGlvL3Rha2UyLzcyMXJlZmFjdG9yIn0=