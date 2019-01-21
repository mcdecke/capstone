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

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/components/Decrypt.js';


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

                // console.log(num);

                console.log(deseed);

                _this.decrypt(deseed);

              case 9:
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
        var ciphertext, bytes, decrypted;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(_this.props);
                ciphertext = _this.props.data[0].split(':')[1];

                console.log(ciphertext);

                bytes = CryptoJS.AES.decrypt(ciphertext, deseed);

                console.log(bytes);
                decrypted = bytes.toString(CryptoJS.enc.Utf8);

                _this.setState({ decrypted: decrypted });

              case 7:
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
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ decrypted: 'asdf' });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.decrypted !== 'asdf') {
        return _react2.default.createElement(_semanticUiReact.Container, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, ' ', this.state.decrypted, ' '));
      } else {
        return _react2.default.createElement(_semanticUiReact.Container, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement('form', { id: 'tokenForm', __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, _react2.default.createElement('h4', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, 'Enter Seed Phrase'), _react2.default.createElement('textarea', { id: 'deseed', rows: '4', form: 'tokenForm', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        })), _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement('button', { onClick: this.onGo, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Decrypt Data'))));
      }
    }
  }]);

  return EditInput;
}(_react.Component);

exports.default = EditInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGVjcnlwdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiRWRpdElucHV0Iiwib25HbyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRlY3J5cHRlZCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJkZXNlZWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJudW0iLCJwYXJzZUludCIsInByb3BzIiwidG9rZW5JZCIsImNvbnNvbGUiLCJsb2ciLCJkZWNyeXB0IiwiY2lwaGVydGV4dCIsImRhdGEiLCJzcGxpdCIsImJ5dGVzIiwiQUVTIiwidG9TdHJpbmciLCJlbmMiLCJVdGY4Iiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFPLEFBQVEsQUFBTTs7QUFDdEMsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxXQUFOLEFBQU0sQUFBVzs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFRTjsyRkFBTyxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ0g7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFDLFdBRlosQUFFSCxBQUFjLEFBQVk7Z0NBRnZCO3VCQUdvQixjQUFBLEFBQUssSUFIekIsQUFHb0IsQUFBUzs7bUJBQTFCO0FBSEgsb0NBS0g7O0FBQ0E7QUFDTTtBQVBILHlCQU9ZLFNBQUEsQUFBUyxlQUFULEFBQXdCLFVBUHBDLEFBTzhDLEFBQzNDO0FBUkgsc0JBUVMsU0FBUyxNQUFBLEFBQUssTUFSdkIsQUFRUyxBQUFvQixBQUdoQzs7QUFDQTs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7c0JBQUEsQUFBSyxRQWRGLEFBY0gsQUFBYTs7bUJBZFY7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QTs7Ozs7ZSxBQWtCTDsyRkFBVSxrQkFBQSxBQUFPLFFBQVA7K0JBQUE7d0VBQUE7b0JBQUE7K0NBQUE7bUJBQ1Y7d0JBQUEsQUFBUSxJQUFJLE1BQVosQUFBaUIsQUFDYjtBQUZNLDZCQUVPLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixHQUFoQixBQUFtQixNQUFuQixBQUF5QixLQUZoQyxBQUVPLEFBQThCLEFBQy9DOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUVSOztBQUxNLHdCQUtFLFNBQUEsQUFBUyxJQUFULEFBQWEsUUFBYixBQUFxQixZQUx2QixBQUtFLEFBQWlDLEFBQzdDOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNSO0FBUE0sNEJBT00sTUFBQSxBQUFNLFNBQVMsU0FBQSxBQUFTLElBUDlCLEFBT00sQUFBNEIsQUFFNUM7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFdBVEwsQUFTVixBQUFjLEFBQVk7O21CQVRoQjttQkFBQTtpQ0FBQTs7QUFBQTtxQkFBQTtBOzs7Ozs7Ozs7O3lDQXhCVyxBQUNuQjtXQUFBLEFBQUssU0FBUyxFQUFDLFdBQWYsQUFBYyxBQUFZLEFBQzNCOzs7OzZCQWtDUSxBQUNQO1VBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFkLEFBQTRCLFFBQVEsQUFDbEM7K0JBQ0UsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBTyxVQUFBLEFBQUssTUFBWixBQUFrQixXQUZ0QixBQUNFLEFBQ0UsQUFHTDtBQU5ELGFBTU8sQUFDTDsrQkFDRSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLGNBQUEsVUFBTSxJQUFOLEFBQVM7c0JBQVQ7d0JBQUEsQUFDRTtBQURGOzJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQURGLEFBQ0UsQUFDQSxrRUFBVSxJQUFWLEFBQWEsVUFBUyxNQUF0QixBQUEyQixLQUFJLE1BQS9CLEFBQW9DO3NCQUFwQzt3QkFISixBQUNFLEFBRUUsQUFFRjtBQUZFOzZCQUVGLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUEsWUFBUSxTQUFTLEtBQWpCLEFBQXNCO3NCQUF0Qjt3QkFBQTtBQUFBO1dBUlIsQUFDRSxBQUNFLEFBS0UsQUFDRSxBQU9UO0FBQ0Y7Ozs7O0FBSUgsQSxBQWxFd0I7O2tCQWtFeEIsQUFBZSIsImZpbGUiOiJEZWNyeXB0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNkZWNrZXIvcG9ydGZvbGlvL3Rha2UyLzcyMXJlZmFjdG9yIn0=