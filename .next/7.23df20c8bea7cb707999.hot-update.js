webpackHotUpdate(7,{

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = __webpack_require__(742);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(539);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(497);

var _Layout = __webpack_require__(1174);

var _Layout2 = _interopRequireDefault(_Layout);

var _index = __webpack_require__(99);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/macdecker/portfolio/take2/721refactor/pages/token.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/macdecker/portfolio/take2/721refactor/pages/token.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/token")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4yM2RmMjBjOGJlYTdjYjcwNzk5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9rZW4uanM/NzJmZjBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSdcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlLCBIZWFkZXIsIENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNsYXNzIFRva2VucyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gdGhpcy52aWV3VG9rZW5zKClcblxuICAgIGxldCBudW0gPSB0aGlzLnByb3BzLnVybC5hc1BhdGguc3BsaXQoJy8nKVsyXVxuXG4gICAgY29uc29sZS5sb2cobnVtKTtcblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBsZXQgdG9rZW4gPSBbXVxuXG4gICAgICBsZXQgb3duZXIgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMub3duZXJPZihudW0pLmNhbGwoKVxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMudG9rZW5VUkkobnVtKS5jYWxsKClcbiAgICAgIGlmIChvd25lciA9PSBhY2NvdW50c1swXSkge1xuICAgICAgICB0b2tlbi5wdXNoKGRhdGEpXG4gICAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhvd25lcik7XG4gICAgY29uc29sZS5sb2coYWNjb3VudHNbMF0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7dG9rZW46IHRva2VufSlcblxuICB9XG5cbiAgcmVuZGVyUm93KCkge1xuICAgIGlmKHRoaXMuc3RhdGUpIHtcbiAgICAgIGxldCB4ID0gdGhpcy5zdGF0ZS50b2tlblxuICAgICAgY29uc29sZS5sb2coeCk7XG4gICAgICAvLyBsZXQgcGFyc2VkRGF0YSA9IHguc3BsaXQoJzonKVxuICAgICAgLy8gY29uc29sZS5sb2cocGFyc2VkRGF0YSk7XG4gICAgICBsZXQgb3duZWRUb2tlbiA9IHgubWFwKChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBwYXJzZWREYXRhID0gZGF0YS5zcGxpdCgnOicpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZERhdGEpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWFkZXI6IHBhcnNlZERhdGFbMF0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogIHBhcnNlZERhdGFbMV0gfHwgJ05vIGRhdGEgZW5jcnlwdGVkIHlldCEnLFxuICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17b3duZWRUb2tlbn0vPlxuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGVcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q2FyZD57dGhpcy5yZW5kZXJSb3coKX08L0NhcmQ+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5zXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy90b2tlbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUpBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7Ozs7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=