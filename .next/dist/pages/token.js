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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/macdecker/portfolio/take2/721refactor/pages/token.js?entry';


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
        var num, accounts, token, owner, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // this.viewTokens()

                num = this.props.url.asPath.split('/')[2];

                console.log(num);

                _context.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context.sent;
                token = [];
                _context.next = 8;
                return _factory2.default.methods.ownerOf(num).call();

              case 8:
                owner = _context.sent;
                _context.next = 11;
                return _factory2.default.methods.tokenURI(num).call();

              case 11:
                data = _context.sent;

                if (owner == accounts[0]) {
                  token.push(data);
                }

                console.log(owner);
                console.log(accounts[0]);

                this.setState({ token: token });

              case 16:
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
        var x = this.state.token;
        console.log(x);
        // let parsedData = x.split(':')
        // console.log(parsedData);
        var ownedToken = x.map(function (data) {
          var parsedData = data.split(':');
          console.log(parsedData);
          return {
            header: parsedData[0],
            description: parsedData[1] || 'No data encrypted yet!',
            fluid: true
          };
        });
        return _react2.default.createElement(_semanticUiReact.Card.Group, { items: ownedToken, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
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
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.renderRow()));
    }
  }]);

  return Tokens;
}(_react.Component);

exports.default = Tokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Rva2VuLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJCdXR0b24iLCJUYWJsZSIsIkhlYWRlciIsIkNhcmQiLCJMYXlvdXQiLCJ3aXRoUm91dGVyIiwiVG9rZW5zIiwibnVtIiwicHJvcHMiLCJ1cmwiLCJhc1BhdGgiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidG9rZW4iLCJtZXRob2RzIiwib3duZXJPZiIsImNhbGwiLCJvd25lciIsInRva2VuVVJJIiwiZGF0YSIsInB1c2giLCJzZXRTdGF0ZSIsInN0YXRlIiwieCIsIm93bmVkVG9rZW4iLCJtYXAiLCJwYXJzZWREYXRhIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVEsQUFBTyxBQUFROztBQUNoQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUdGO0FBRUk7O0Esc0JBQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsT0FBZixBQUFzQixNQUF0QixBQUE0QixLLEFBQTVCLEFBQWlDLEFBRTNDOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7O3VCQUVXLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7bUJBQTFCO0Esb0NBQ0Y7QSx3QixBQUFROzt1QkFFUSxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsUUFBaEIsQUFBd0IsSyxBQUF4QixBQUE2Qjs7bUJBQTNDO0E7O3VCQUNhLGtCQUFBLEFBQVEsUUFBUixBQUFnQixTQUFoQixBQUF5QixLLEFBQXpCLEFBQThCOzttQkFBM0M7QSxnQ0FDSjs7b0JBQUksU0FBUyxTQUFiLEFBQWEsQUFBUyxJQUFJLEFBQ3hCO3dCQUFBLEFBQU0sS0FBTixBQUFXLEFBQ1o7QUFFSDs7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjt3QkFBQSxBQUFRLElBQUksU0FBWixBQUFZLEFBQVMsQUFFckI7O3FCQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBSVosQUFDVjtVQUFHLEtBQUgsQUFBUSxPQUFPLEFBQ2I7WUFBSSxJQUFJLEtBQUEsQUFBSyxNQUFiLEFBQW1CLEFBQ25CO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDQTtBQUNBO1lBQUksZUFBYSxBQUFFLElBQUksVUFBQSxBQUFDLE1BQVMsQUFDL0I7Y0FBSSxhQUFhLEtBQUEsQUFBSyxNQUF0QixBQUFpQixBQUFXLEFBQzVCO2tCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1Y7O29CQUNVLFdBREgsQUFDRyxBQUFXLEFBQ25CO3lCQUFjLFdBQUEsQUFBVyxNQUZwQixBQUUwQixBQUMvQjttQkFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFKTixBQUFpQixBQVNmLFNBVGU7NkNBU1IsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtzQkFBbkI7d0JBQVAsQUFBTyxBQUNWO0FBRFU7U0FBQTtBQUVaOzs7OzZCQUdRO1VBQUEsQUFFQyxTQUZELEFBRW1DLHVCQUZuQyxBQUVDO1VBRkQsQUFFUyxNQUZULEFBRW1DLHVCQUZuQyxBQUVTO1VBRlQsQUFFYyxhQUZkLEFBRW1DLHVCQUZuQyxBQUVjO1VBRmQsQUFFMEIsT0FGMUIsQUFFbUMsdUJBRm5DLEFBRTBCLEFBRWpDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQU87QUFBUDtBQUFBLGNBRkosQUFDRSxBQUNFLEFBQU8sQUFBSyxBQUdqQjs7Ozs7QSxBQXREa0IsQUF5RHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6InRva2VuLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWNkZWNrZXIvcG9ydGZvbGlvL3Rha2UyLzcyMXJlZmFjdG9yIn0=