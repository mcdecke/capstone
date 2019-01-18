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
                  _context.next = 20;
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

                console.log(owner);
                if (owner == accounts[0]) {
                  tokens.push(data + (':' + i));
                }

              case 17:
                i++;
                _context.next = 8;
                break;

              case 20:

                console.log(tokens);
                this.setState({ tokens: tokens });

              case 22:
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
        var ownedTokens = x.map(function (data, index) {
          var name = data.split(':');
          console.log(name);
          return {
            header: name[0],
            description: _react2.default.createElement(_routes.Link, {
              route: '/tokens/' + name[name.length - 1], __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            }, _react2.default.createElement('a', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            }, 'Edit Data')),
            fluid: true
          };
        });
        return _react2.default.createElement(_semanticUiReact.Card.Group, { items: ownedTokens, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
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
          lineNumber: 61
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.renderRow()));
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rva2Vucy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJ3ZWIzIiwiQnV0dG9uIiwiVGFibGUiLCJIZWFkZXIiLCJDYXJkIiwiTGF5b3V0IiwiTGluayIsIlJvdXRlciIsIlRva2VucyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0VG9rZW5Db3VudCIsImNhbGwiLCJ0b2tlbkNvdW50IiwidG9rZW5zIiwiaSIsIm93bmVyT2YiLCJvd25lciIsInRva2VuVVJJIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic2V0U3RhdGUiLCJzdGF0ZSIsIngiLCJvd25lZFRva2VucyIsIm1hcCIsImluZGV4IiwibmFtZSIsInNwbGl0IiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJmbHVpZCIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTyxBQUFROztBQUNoQyxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLcUIsY0FBQSxBQUFLLEksQUFBTCxBQUFTOzttQkFBMUI7QTs7dUJBQ2lCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixnQixBQUFoQixBQUFnQzs7bUJBQW5EO0Esc0NBQ0E7QSx5QixBQUFTLEFBRUo7QSxvQixBQUFJOzs7c0JBQUcsSSxBQUFJOzs7Ozs7dUJBQ0Esa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFFBQWhCLEFBQXdCLEcsQUFBeEIsQUFBMkI7O21CQUF6QztBOzt1QkFDYSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsU0FBaEIsQUFBeUIsRyxBQUF6QixBQUE0Qjs7bUJBQXpDO0EsZ0NBRUo7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7b0JBQUksU0FBUyxTQUFiLEFBQWEsQUFBUyxJQUFJLEFBQ3hCO3lCQUFBLEFBQU8sS0FBSyxjQUFaLEFBQVksQUFBUyxBQUN0Qjs7O21CQVA2QjtBOzs7O21CQVVoQzs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtxQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFmLEFBQWMsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUliLEFBQ1Y7VUFBRyxLQUFILEFBQVEsT0FBTyxBQUNiO1lBQUksSUFBSSxLQUFBLEFBQUssTUFBYixBQUFtQixBQUNuQjtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1lBQUksZ0JBQWMsQUFBRSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUN2QztjQUFJLE9BQU8sS0FBQSxBQUFLLE1BQWhCLEFBQVcsQUFBVyxBQUN0QjtrQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNWOztvQkFDVSxLQURILEFBQ0csQUFBSyxBQUNiO3lDQUNFLEFBQUM7a0NBQ21CLEtBQUssS0FBQSxBQUFLLFNBRDlCLEFBQ29CLEFBQW1COzBCQUR2Qzs0QkFBQSxBQUVFO0FBRkY7QUFDRSxhQURGLGtCQUVFLGNBQUE7OzBCQUFBOzRCQUFBO0FBQUE7QUFBQSxlQUxDLEFBR0gsQUFFRSxBQUdKO21CQVJGLEFBQU8sQUFRRSxBQUVWO0FBVlEsQUFDTDtBQUpOLEFBQWtCLEFBY2hCLFNBZGdCOzZDQWNULEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7c0JBQW5CO3dCQUFQLEFBQU8sQUFDVjtBQURVO1NBQUE7QUFFWjs7Ozs2QkFHUTtVQUFBLEFBRUMsU0FGRCxBQUVtQyx1QkFGbkMsQUFFQztVQUZELEFBRVMsTUFGVCxBQUVtQyx1QkFGbkMsQUFFUztVQUZULEFBRWMsYUFGZCxBQUVtQyx1QkFGbkMsQUFFYztVQUZkLEFBRTBCLE9BRjFCLEFBRW1DLHVCQUZuQyxBQUUwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUZKLEFBQ0UsQUFDRSxBQUFNLEFBQUssQUFHaEI7Ozs7O0FBR0gsQSxBQTNEcUI7O2tCQTJEckIsQUFBZSIsImZpbGUiOiJ0b2tlbnMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hY2RlY2tlci9wb3J0Zm9saW8vdGFrZTIvNzIxcmVmYWN0b3IifQ==