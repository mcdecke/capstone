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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/pages/tokens.js?entry';


var Tokens = function (_Component) {
  (0, _inherits3.default)(Tokens, _Component);

  function Tokens() {
    (0, _classCallCheck3.default)(this, Tokens);

    return (0, _possibleConstructorReturn3.default)(this, (Tokens.__proto__ || (0, _getPrototypeOf2.default)(Tokens)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tokens, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var accounts, tokenCount, tokens, i, owner, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                _context.next = 5;
                return _factory2.default.methods.getTokenCount().call();

              case 5:
                tokenCount = _context.sent;
                tokens = [];
                i = 0;

              case 8:
                if (!(i < tokenCount)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 11;
                return _factory2.default.methods.ownerOf(i).call();

              case 11:
                owner = _context.sent;
                _context.next = 14;
                return _factory2.default.methods.tokenURI(i).call();

              case 14:
                data = _context.sent;

                if (owner == accounts[0]) {
                  tokens.push(data + (':' + i));
                }

              case 16:
                i++;
                _context.next = 8;
                break;

              case 19:
                this.setState({ tokens: tokens });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderRow',
    value: function renderRow() {
      if (this.state) {
        var x = this.state.tokens;
        var ownedTokens = x.map(function (data, index) {
          var name = data.split(':');
          return {
            header: name[0],
            description: _react2.default.createElement(_routes.Link, {
              route: '/tokens/' + name[name.length - 1], __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            }, _react2.default.createElement('a', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            }, 'Edit Data')),
            fluid: true
          };
        });
        return _react2.default.createElement(_semanticUiReact.Card.Group, { items: ownedTokens, __source: {
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

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.renderRow()));
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rva2Vucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiTGF5b3V0IiwiTGluayIsIlJvdXRlciIsIlRva2VucyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0VG9rZW5Db3VudCIsImNhbGwiLCJ0b2tlbkNvdW50IiwidG9rZW5zIiwiaSIsIm93bmVyT2YiLCJvd25lciIsInRva2VuVVJJIiwiZGF0YSIsInB1c2giLCJzZXRTdGF0ZSIsInN0YXRlIiwieCIsIm93bmVkVG9rZW5zIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwic3BsaXQiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsImZsdWlkIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFPLEFBQVE7O0FBQ2hDLEFBQU8sQUFBWTs7OztBQUVuQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUdxQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBOzt1QkFDaUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGdCLEFBQWhCLEFBQWdDOzttQkFBbkQ7QSxzQ0FDQTtBLHlCLEFBQVMsQUFFSjtBLG9CLEFBQUk7OztzQkFBRyxJLEFBQUk7Ozs7Ozt1QkFDQSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsUUFBaEIsQUFBd0IsRyxBQUF4QixBQUEyQjs7bUJBQXpDO0E7O3VCQUNhLGtCQUFBLEFBQVEsUUFBUixBQUFnQixTQUFoQixBQUF5QixHLEFBQXpCLEFBQTRCOzttQkFBekM7QSxnQ0FFSjs7b0JBQUksU0FBUyxTQUFiLEFBQWEsQUFBUyxJQUFJLEFBQ3hCO3lCQUFBLEFBQU8sS0FBSyxjQUFaLEFBQVksQUFBUyxBQUN0Qjs7O21CQU42QjtBOzs7O21CQVFoQztxQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFmLEFBQWMsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUliLEFBQ1Y7VUFBRyxLQUFILEFBQVEsT0FBTyxBQUNiO1lBQUksSUFBSSxLQUFBLEFBQUssTUFBYixBQUFtQixBQUNuQjtZQUFJLGdCQUFjLEFBQUUsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDdkM7Y0FBSSxPQUFPLEtBQUEsQUFBSyxNQUFoQixBQUFXLEFBQVcsQUFDcEI7O29CQUNVLEtBREgsQUFDRyxBQUFLLEFBQ2I7eUNBQ0UsQUFBQztrQ0FDbUIsS0FBSyxLQUFBLEFBQUssU0FEOUIsQUFDb0IsQUFBbUI7MEJBRHZDOzRCQUFBLEFBRUU7QUFGRjtBQUNFLGFBREYsa0JBRUUsY0FBQTs7MEJBQUE7NEJBQUE7QUFBQTtBQUFBLGVBTEMsQUFHSCxBQUVFLEFBR0o7bUJBUkYsQUFBTyxBQVFFLEFBRVY7QUFWUSxBQUNMO0FBSE4sQUFBa0IsQUFhaEIsU0FiZ0I7NkNBYVQsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtzQkFBbkI7d0JBQVAsQUFBTyxBQUNWO0FBRFU7U0FBQTtBQUVaOzs7OzZCQUdRO1VBQUEsQUFFQyxTQUZELEFBRW1DLHVCQUZuQyxBQUVDO1VBRkQsQUFFUyxNQUZULEFBRW1DLHVCQUZuQyxBQUVTO1VBRlQsQUFFYyxhQUZkLEFBRW1DLHVCQUZuQyxBQUVjO1VBRmQsQUFFMEIsT0FGMUIsQUFFbUMsdUJBRm5DLEFBRTBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBRkosQUFDRSxBQUNFLEFBQU0sQUFBSyxBQUdoQjs7Ozs7QSxBQWpEa0IsQUFvRHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6InRva2Vucy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjZGVja2VyL3BvcnRmb2xpby90YWtlMi83MjFyZWZhY3RvciJ9