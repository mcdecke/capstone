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

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/pages/new.js?entry';


var Tokens = function (_Component) {
  (0, _inherits3.default)(Tokens, _Component);

  function Tokens() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tokens);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tokens.__proto__ || (0, _getPrototypeOf2.default)(Tokens)).call.apply(_ref, [this].concat(args))), _this), _this.onNew = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var tokenId, tokenURI;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                tokenId = '1';
                tokenURI = '2tokenURI!!';

                _this.setState({ loading: true });

                _context.prev = 4;

                console.log(_this.state.account, tokenId, tokenURI);
                _context.next = 8;
                return _factory2.default.methods.mintUniqueTokenTo(_this.state.account, tokenId, tokenURI).send({
                  from: _this.state.account
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tokens, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var accounts;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context2.sent;

                // let tokens = []
                //
                // for (var i = 0; i < 6; i++) {
                //   let owner = await factory.methods.ownerOf(i).call()
                //   let data = await factory.methods.tokenURI(i).call()
                //   if (owner == accounts[0]) {
                //     tokens.push(data)
                //   }
                // }
                //
                this.setState({ account: accounts[0], loading: false, errorMessage: 'No Errors' });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()

    // renderRow() {
    //   if(this.state) {
    //     let x = this.state.tokens
    //     console.log(x);
    //     let ownedTokens = x.map((data) => {
    //
    //         return {
    //           header: data,
    //           description: <a>data</a>,
    //           fluid: true
    //         }
    //       })
    //       return <Card.Group items={ownedTokens}/>
    //   }
    // }


  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Create A New Token'), _react2.default.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Meta, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.onNew, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'NEW!')))));
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiTGF5b3V0IiwiVG9rZW5zIiwib25OZXciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9rZW5JZCIsInRva2VuVVJJIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiYWNjb3VudCIsIm1ldGhvZHMiLCJtaW50VW5pcXVlVG9rZW5UbyIsInNlbmQiLCJmcm9tIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFRLEFBQU8sQUFBUTs7QUFDaEMsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFxQ0o7MkZBQVEsaUJBQUEsQUFBTyxPQUFQO3FCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNOO3NCQUFBLEFBQU0sQUFFQTs7QUFIQSwwQkFBQSxBQUdVLEFBQ1Y7QUFKQSwyQkFBQSxBQUlXLEFBRWpCOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQU5ULEFBTU4sQUFBYyxBQUFVOztnQ0FHdEI7O3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsU0FBdkIsQUFBZ0MsU0FUNUIsQUFTSixBQUF5QztnQ0FUckM7eUNBVUUsQUFBUSxRQUFSLEFBQWdCLGtCQUFrQixNQUFBLEFBQUssTUFBdkMsQUFBNkMsU0FBN0MsQUFBc0QsU0FBdEQsQUFBK0QsVUFBL0QsQUFDTDt3QkFDTyxNQUFBLEFBQUssTUFaVCxBQVVFLEFBQ0EsQUFDYTtBQURiLEFBQ0osaUJBRkk7O21CQVZGO2dDQUFBO0FBQUE7O21CQUFBO2dDQUFBO2dEQWlCSjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWpCekIsQUFpQkosQUFBYyxBQUFtQjs7bUJBakI3QjttQkFBQTtnQ0FBQTs7QUFBQTtpQ0FBQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBaENpQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBLHFDQUNOOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO3FCQUFBLEFBQUssU0FBUyxFQUFDLFNBQVMsU0FBVixBQUFVLEFBQVMsSUFBSSxTQUF2QixBQUFnQyxPQUFPLGNBQXJELEFBQWMsQUFBcUQ7Ozs7Ozs7Ozs7Ozs7OztBQUlyRTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7NkJBMEJTO1VBQUEsQUFFQyxTQUZELEFBRW1DLHVCQUZuQyxBQUVDO1VBRkQsQUFFUyxNQUZULEFBRW1DLHVCQUZuQyxBQUVTO1VBRlQsQUFFYyxhQUZkLEFBRW1DLHVCQUZuQyxBQUVjO1VBRmQsQUFFMEIsT0FGMUIsQUFFbUMsdUJBRm5DLEFBRTBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0E7O29CQUFBO3NCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FQUixBQUNFLEFBQ0UsQUFDQSxBQUdFLEFBQ0UsQUFPVDs7Ozs7QUFHSCxBLEFBakZxQjs7a0JBaUZyQixBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjZGVja2VyL3BvcnRmb2xpby90YWtlMi83MjFyZWZhY3RvciJ9