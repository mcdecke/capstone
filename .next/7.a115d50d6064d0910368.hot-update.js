webpackHotUpdate(7,{

/***/ 1179:
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

var _factory = __webpack_require__(738);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(539);

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = __webpack_require__(497);

var _Layout = __webpack_require__(1170);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1180);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/macdecker/portfolio/take2/721refactor/pages/tokens.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/macdecker/portfolio/take2/721refactor/pages/tokens.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tokens")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hMTE1ZDUwZDYwNjRkMDkxMDM2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9rZW5zLmpzPzE3NTZjMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJ1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSwgSGVhZGVyLCBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnXG5cbmNsYXNzIFRva2VucyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gdGhpcy52aWV3VG9rZW5zKClcblxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBsZXQgdG9rZW5zID0gW11cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICBsZXQgb3duZXIgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMub3duZXJPZihpKS5jYWxsKClcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLnRva2VuVVJJKGkpLmNhbGwoKVxuXG4gICAgICBjb25zb2xlLmxvZyhvd25lcik7XG4gICAgICBpZiAob3duZXIgPT0gYWNjb3VudHNbMF0pIHtcbiAgICAgICAgdG9rZW5zLnB1c2goZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyh0b2tlbnMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Rva2VuczogdG9rZW5zfSlcblxuICB9XG5cbiAgcmVuZGVyUm93KCkge1xuICAgIGlmKHRoaXMuc3RhdGUpIHtcbiAgICAgIGxldCB4ID0gdGhpcy5zdGF0ZS50b2tlbnNcbiAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgbGV0IG93bmVkVG9rZW5zID0geC5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgbGV0IG5hbWUgPSBkYXRhLnNwbGl0KCc6JylcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcjogbmFtZVswXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT57bmFtZVsxXX08L2E+LFxuICAgICAgICAgICAgZmx1aWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17b3duZWRUb2tlbnN9Lz5cbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPENhcmQ+e3RoaXMucmVuZGVyUm93KCl9PC9DYXJkPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2Vuc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdG9rZW5zLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7QUFOQTs7Ozs7QUFVQTtBQUNBO0FBREE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7Ozs7QUFHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=