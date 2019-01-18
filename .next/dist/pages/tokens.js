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
        var accounts, tokens, i, owner, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                accounts = _context.sent;
                tokens = [];
                i = 0;

              case 5:
                if (!(i < 1)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 8;
                return _factory2.default.methods.ownerOf(i).call();

              case 8:
                owner = _context.sent;
                _context.next = 11;
                return _factory2.default.methods.tokenURI(i).call();

              case 11:
                data = _context.sent;

                console.log(owner);
                if (owner == accounts[0]) {
                  tokens.push(data);
                }

              case 14:
                i++;
                _context.next = 5;
                break;

              case 17:

                console.log(tokens);
                this.setState({ tokens: tokens });

              case 19:
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
        console.log(x);
        var ownedTokens = x.map(function (data) {
          var name = data.split(':');
          console.log(name);
          return {
            header: name[0],
            description: _react2.default.createElement('a', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            }, name[1]),
            fluid: true
          };
        });
        return _react2.default.createElement(_semanticUiReact.Card.Group, { items: ownedTokens, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
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
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.renderRow()));
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rva2Vucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiTGF5b3V0IiwiTGluayIsIlJvdXRlciIsIlRva2VucyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJ0b2tlbnMiLCJpIiwibWV0aG9kcyIsIm93bmVyT2YiLCJjYWxsIiwib3duZXIiLCJ0b2tlblVSSSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInNldFN0YXRlIiwic3RhdGUiLCJ4Iiwib3duZWRUb2tlbnMiLCJtYXAiLCJuYW1lIiwic3BsaXQiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFPLEFBQVE7O0FBQ2hDLEFBQU8sQUFBWTs7OztBQUVuQixBQUFTLEFBQU0sQUFBYzs7Ozs7OztJLEFBRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtxQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUExQjtBLG9DQUNGO0EseUJBRUssQSxBQUZJO0Esb0IsQUFFQTs7O3NCQUFHLEksQUFBSTs7Ozs7O3VCQUNBLGtCQUFBLEFBQVEsUUFBUixBQUFnQixRQUFoQixBQUF3QixHLEFBQXhCLEFBQTJCOzttQkFBekM7QTs7dUJBQ2Esa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFNBQWhCLEFBQXlCLEcsQUFBekIsQUFBNEI7O21CQUF6QztBLGdDQUVKOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO29CQUFJLFNBQVMsU0FBYixBQUFhLEFBQVMsSUFBSSxBQUN4Qjt5QkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiOzs7bUJBUG9CO0E7Ozs7bUJBVXZCOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3FCQUFBLEFBQUssU0FBUyxFQUFDLFFBQWYsQUFBYyxBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSWIsQUFDVjtVQUFHLEtBQUgsQUFBUSxPQUFPLEFBQ2I7WUFBSSxJQUFJLEtBQUEsQUFBSyxNQUFiLEFBQW1CLEFBQ25CO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7WUFBSSxnQkFBYyxBQUFFLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDaEM7Y0FBSSxPQUFPLEtBQUEsQUFBSyxNQUFoQixBQUFXLEFBQVcsQUFDdEI7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDVjs7b0JBQ1UsS0FESCxBQUNHLEFBQUssQUFDYjt5Q0FBYSxjQUFBOzswQkFBQTs0QkFBQSxBQUFJO0FBQUo7QUFBQSxhQUFBLE9BRlIsQUFFUSxBQUFJLEFBQUssQUFDdEI7bUJBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBSk4sQUFBa0IsQUFTaEIsU0FUZ0I7NkNBU1QsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtzQkFBbkI7d0JBQVAsQUFBTyxBQUNWO0FBRFU7U0FBQTtBQUVaOzs7OzZCQUdRO1VBQUEsQUFFQyxTQUZELEFBRW1DLHVCQUZuQyxBQUVDO1VBRkQsQUFFUyxNQUZULEFBRW1DLHVCQUZuQyxBQUVTO1VBRlQsQUFFYyxhQUZkLEFBRW1DLHVCQUZuQyxBQUVjO1VBRmQsQUFFMEIsT0FGMUIsQUFFbUMsdUJBRm5DLEFBRTBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBRkosQUFDRSxBQUNFLEFBQU8sQUFBSyxBQUdqQjs7Ozs7QSxBQWxEa0IsQUFxRHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6InRva2Vucy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjZGVja2VyL3BvcnRmb2xpby90YWtlMi83MjFyZWZhY3RvciJ9