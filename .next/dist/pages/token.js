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

var _index = require('next/dist/lib/router/index.js');

var _EditInput = require('../components/EditInput');

var _EditInput2 = _interopRequireDefault(_EditInput);

var _Decrypt = require('../components/Decrypt');

var _Decrypt2 = _interopRequireDefault(_Decrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/pages/token.js?entry';


var Tokens = function (_Component) {
  (0, _inherits3.default)(Tokens, _Component);

  function Tokens() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tokens);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tokens.__proto__ || (0, _getPrototypeOf2.default)(Tokens)).call.apply(_ref, [this].concat(args))), _this), _this.onEdit = function () {
      _this.setState({ showInput: !_this.state.showInput });
    }, _this.onDecrypt = function () {
      _this.setState({ showDecrypt: !_this.state.showDecrypt });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tokens, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var num, accounts, token, owner, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                num = this.props.url.asPath.split('/')[2];

                // console.log(num);

                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                token = [];
                _context.next = 7;
                return _factory2.default.methods.ownerOf(num).call();

              case 7:
                owner = _context.sent;
                _context.next = 10;
                return _factory2.default.methods.tokenURI(num).call();

              case 10:
                data = _context.sent;

                if (owner == accounts[0]) {
                  token.push(data);
                }

                this.setState({ token: token, data: '', showInput: false, showDecrypt: false, num: num, decrypted: 'asdf' });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderRow',
    value: function renderRow() {
      if (this.state) {
        var x = this.state.token;
        console.log(x);
        var ownedToken = x.map(function (data) {
          var parsedData = data.split(':');
          return {
            header: parsedData[0],
            description: _react2.default.createElement('div', { style: { overflow: "auto" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            }, ' ', parsedData[1], ' ') || 'No data encrypted yet!',
            fluid: true
          };
        });
        return _react2.default.createElement(_semanticUiReact.Card.Group, { items: ownedToken, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      if (this.state) {
        console.log(this.state);
        return _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, this.renderRow(), this.state.showInput ? _react2.default.createElement(_EditInput2.default, { tokenId: this.state.num, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }) : null, this.state.showDecrypt ? _react2.default.createElement(_Decrypt2.default, {
          tokenId: this.state.num,
          data: this.state.token,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }) : null, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onDecrypt, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, 'Decrypt Data'), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onEdit, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, 'Edit Data')));
      } else {
        return _react2.default.createElement(_Layout2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement(_semanticUiReact.Card, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, 'Loading!'));
      }
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rva2VuLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJCdXR0b24iLCJUYWJsZSIsIkhlYWRlciIsIkNhcmQiLCJMYXlvdXQiLCJ3aXRoUm91dGVyIiwiRWRpdElucHV0IiwiRGVjcnlwdCIsIlRva2VucyIsIm9uRWRpdCIsInNldFN0YXRlIiwic2hvd0lucHV0Iiwic3RhdGUiLCJvbkRlY3J5cHQiLCJzaG93RGVjcnlwdCIsIm51bSIsInByb3BzIiwidXJsIiwiYXNQYXRoIiwic3BsaXQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidG9rZW4iLCJtZXRob2RzIiwib3duZXJPZiIsImNhbGwiLCJvd25lciIsInRva2VuVVJJIiwiZGF0YSIsInB1c2giLCJkZWNyeXB0ZWQiLCJ4IiwiY29uc29sZSIsImxvZyIsIm93bmVkVG9rZW4iLCJtYXAiLCJwYXJzZWREYXRhIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJvdmVyZmxvdyIsImZsdWlkIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFPLEFBQVE7O0FBQ2hDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBR2Q7Ozs7Ozs7Ozs7Ozs7OzRNLEFBcUNKLFNBQVMsWUFBTSxBQUNiO1lBQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxDQUFDLE1BQUEsQUFBSyxNQUFoQyxBQUFjLEFBQXdCLEFBQ3ZDO0EsYSxBQUVELFlBQVksWUFBTSxBQUNoQjtZQUFBLEFBQUssU0FBUyxFQUFDLGFBQWEsQ0FBQyxNQUFBLEFBQUssTUFBbEMsQUFBYyxBQUEwQixBQUN6QztBOzs7Ozs7Ozs7OzttQkF2Q0s7QSxzQkFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxPQUFmLEFBQXNCLE1BQXRCLEFBQTRCLEssQUFBNUIsQUFBaUMsQUFFM0M7Ozs7O3VCQUV1QixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBLG9DQUNGO0Esd0IsQUFBUTs7dUJBRVEsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFFBQWhCLEFBQXdCLEssQUFBeEIsQUFBNkI7O21CQUEzQztBOzt1QkFDYSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsU0FBaEIsQUFBeUIsSyxBQUF6QixBQUE4Qjs7bUJBQTNDO0EsZ0NBQ0o7O29CQUFJLFNBQVMsU0FBYixBQUFhLEFBQVMsSUFBSSxBQUN4Qjt3QkFBQSxBQUFNLEtBQU4sQUFBVyxBQUNaO0FBRUg7O3FCQUFBLEFBQUssU0FBUyxFQUFDLE9BQUQsQUFBUSxPQUFPLE1BQWYsQUFBcUIsSUFBSSxXQUF6QixBQUFvQyxPQUFPLGFBQTNDLEFBQXdELE9BQU8sS0FBL0QsQUFBb0UsS0FBSyxXQUF2RixBQUFjLEFBQW9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSXhGLEFBQ1Y7VUFBRyxLQUFILEFBQVEsT0FBTyxBQUNiO1lBQUksSUFBSSxLQUFBLEFBQUssTUFBYixBQUFtQixBQUNuQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUksZUFBYSxBQUFFLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDL0I7Y0FBSSxhQUFhLEtBQUEsQUFBSyxNQUF0QixBQUFpQixBQUFXLEFBQzFCOztvQkFDVSxXQURILEFBQ0csQUFBVyxBQUNuQjt5Q0FBYyxjQUFBLFNBQUssT0FBTyxFQUFDLFVBQWIsQUFBWSxBQUFZOzBCQUF4Qjs0QkFBQTtBQUFBO2FBQUEsRUFBb0MsZ0JBQXBDLEFBQW9DLEFBQVcsSUFBL0MsUUFGVCxBQUVzRSxBQUMzRTttQkFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFITixBQUFpQixBQVFmLFNBUmU7NkNBUVIsQUFBQyxzQkFBRCxBQUFNLFNBQU8sT0FBYixBQUFvQjtzQkFBcEI7d0JBQVAsQUFBTyxBQUNWO0FBRFU7U0FBQTtBQUVaOzs7OzZCQVdRO1VBQUEsQUFFQyxTQUZELEFBRW1DLHVCQUZuQyxBQUVDO1VBRkQsQUFFUyxNQUZULEFBRW1DLHVCQUZuQyxBQUVTO1VBRlQsQUFFYyxhQUZkLEFBRW1DLHVCQUZuQyxBQUVjO1VBRmQsQUFFMEIsT0FGMUIsQUFFbUMsdUJBRm5DLEFBRTBCLEFBRWpDOztVQUFJLEtBQUosQUFBUyxPQUFPLEFBQ2Q7Z0JBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFDYjsrQkFDRSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSxTQUFBLGtCQUNFLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGdCQUFBLEFBQ0csQUFBSyxBQUNMLGtCQUFBLEFBQUssTUFBTCxBQUFXLDRCQUFZLEFBQUMscUNBQVUsU0FBVyxLQUFBLEFBQUssTUFBM0IsQUFBaUM7c0JBQWpDO3dCQUF2QixBQUF1QjtBQUFBO1NBQUEsSUFGMUIsQUFFcUUsQUFDbEUsV0FBQSxBQUFLLE1BQUwsQUFBVyw4QkFBYyxBQUFDO21CQUNkLEtBQUEsQUFBSyxNQURRLEFBQ0YsQUFDdEI7Z0JBQVEsS0FBQSxBQUFLLE1BRlcsQUFFTDs7c0JBRks7d0JBQXpCLEFBQXlCO0FBQUE7QUFDeEIsU0FEd0IsSUFINUIsQUFNUSxBQUNOLHNCQUFBLEFBQUMseUNBQU8sU0FBUyxLQUFqQixBQUFzQjtzQkFBdEI7d0JBQUE7QUFBQTtXQVBGLEFBT0UsQUFDQSxpQ0FBQSxBQUFDLHlDQUFPLFNBQVMsS0FBakIsQUFBc0I7c0JBQXRCO3dCQUFBO0FBQUE7V0FWTixBQUNFLEFBQ0UsQUFRRSxBQUtYO0FBakJELGFBaUJPLEFBQ0w7K0JBQ0UsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDOztzQkFBRDt3QkFBQTtBQUFBO0FBQUEsV0FGSixBQUNFLEFBQ0UsQUFHTDtBQUVGOzs7OztBQUdILEEsQUE5RXFCOztrQkE4RXJCLEFBQWUiLCJmaWxlIjoidG9rZW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hY2RlY2tlci9wb3J0Zm9saW8vdGFrZTIvNzIxcmVmYWN0b3IifQ==