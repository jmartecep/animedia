"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _MyLayout = require("../components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _MetaBlock = require("../components/MetaBlock");

var _MetaBlock2 = _interopRequireDefault(_MetaBlock);

var _ScrollSpyBlock = require("../components/ScrollSpyBlock");

var _ScrollSpyBlock2 = _interopRequireDefault(_ScrollSpyBlock);

var _data = require("../components/MetaBlock/data.json");

var _data2 = _interopRequireDefault(_data);

var _YoutubeVideo = require("../components/YoutubeVideo");

var _YoutubeVideo2 = _interopRequireDefault(_YoutubeVideo);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _Episode = require("../components/Episode");

var _Episode2 = _interopRequireDefault(_Episode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\React\\anomedia\\pages\\shows.js?entry";


var Shows = function Shows(props) {
  return _react2.default.createElement(_link2.default, { as: "/api/shows/" + props.id, href: "/shows?id=" + props.id, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("h1", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.show.title), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_ScrollSpyBlock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement("p", {
    className: "jsx-4267579454" + " " + "flow-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, props.description), _react2.default.createElement("hr", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement("h2", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.show.title, " Episode Guide"), _react2.default.createElement(_Episode2.default, { title: props.show.title, episodes: props.episodes, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_MetaBlock2.default, { title: props.title, show: props.show, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement(_YoutubeVideo2.default, { allowFullScreen: true, width: "100%", height: "350", youtubeTrailerId: props.youtubeTrailerId, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: "4267579454",
    css: ".flow-text.jsx-4267579454{font-size:1.15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3lCLGtCQUNwQiIsImZpbGUiOiJwYWdlc1xcc2hvd3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvUmVhY3QvYW5vbWVkaWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XHJcbmltcG9ydCBNZXRhQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YUJsb2NrXCI7XHJcbmltcG9ydCBTY3JvbGxTcHlCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxTcHlCbG9ja1wiO1xyXG5pbXBvcnQgaW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhQmxvY2svZGF0YS5qc29uXCI7XHJcbmltcG9ydCBZb3V0dWJlVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9Zb3V0dWJlVmlkZW8nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEVwaXNvZGVzIGZyb20gJy4uL2NvbXBvbmVudHMvRXBpc29kZSdcclxuXHJcbmNvbnN0IFNob3dzID0gcHJvcHMgPT4gKFxyXG4gIDxMaW5rIGFzPXtgL2FwaS9zaG93cy8ke3Byb3BzLmlkfWB9IGhyZWY9e2Avc2hvd3M/aWQ9JHtwcm9wcy5pZH1gfT5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGgxPntwcm9wcy5zaG93LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbTJcIj5cclxuICAgICAgICAgIDxTY3JvbGxTcHlCbG9jayAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG02XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8aDI+e3Byb3BzLnNob3cudGl0bGV9IEVwaXNvZGUgR3VpZGU8L2gyPlxyXG4gICAgICAgICAgPEVwaXNvZGVzIHRpdGxlPXtwcm9wcy5zaG93LnRpdGxlfSBlcGlzb2Rlcz17cHJvcHMuZXBpc29kZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbTRcIj5cclxuICAgICAgICAgIDxNZXRhQmxvY2sgdGl0bGU9e3Byb3BzLnRpdGxlfSBzaG93PXtwcm9wcy5zaG93fSAvPlxyXG4gICAgICAgICAgPFlvdXR1YmVWaWRlbyBhbGxvd0Z1bGxTY3JlZW4gd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMzUwXCIgeW91dHViZVRyYWlsZXJJZD17cHJvcHMueW91dHViZVRyYWlsZXJJZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5mbG93LXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICA8L0xpbms+XHJcbik7XHJcblxyXG5TaG93cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAocHJvcHMpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2hvd3MvXCIgKyBwcm9wcy5xdWVyeS5pZCk7XHJcbiAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGVwaSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3dzLyR7cHJvcHMucXVlcnkuaWR9L2VwaXNvZGVzYCk7XHJcbiAgbGV0IGVwaUZldGNoZWQgPSBhd2FpdCBlcGkuanNvbigpO1xyXG5cclxuICBsZXQgZGF0YSA9IGZldGNoZWRbMF07XHJcblxyXG4gIGxldCBzaG93ID0ge1xyXG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICBhdmVyYWdlUmF0aW5nOiBkYXRhLmF2ZXJhZ2VSYXRpbmcsXHJcbiAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxyXG4gICAgZW5kRGF0YTogZGF0YS5lbmREYXRlLFxyXG4gICAgYWdlUmF0aW5nOiBkYXRhLmFnZVJhdGluZyxcclxuICAgIGFpcmVkT246IGRhdGEuYWlyZWRPbixcclxuICAgIHJhdGluZ1Jhbms6IGRhdGEucmF0aW5nUmFuayxcclxuICAgIGFpcmVkT246IGRhdGEuYWlyZWRPblxyXG4gIH07XHJcblxyXG4gIGxldCBlcGlzb2RlcyA9IGVwaUZldGNoZWQubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9KTtcclxuXHJcbiAgbGV0IHlvdXR1YmVUcmFpbGVySWQgPSBkYXRhLnlvdXR1YmVUcmFpbGVySWRcclxuICBsZXQgZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzaG93czogZmV0Y2hlZCxcclxuICAgIHNob3c6IHNob3csXHJcbiAgICBpZDogcHJvcHMucXVlcnkuaWQsXHJcbiAgICB0aXRsZTogc2hvdy50aXRsZSArIFwiIEluZm9cIixcclxuICAgIHlvdXR1YmVUcmFpbGVySWQsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGVwaXNvZGVzXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dzO1xyXG4iXX0= */\n/*@ sourceURL=pages\\shows.js?entry */"
  })));
};

Shows.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var res, fetched, epi, epiFetched, data, show, episodes, youtubeTrailerId, description;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/shows/" + props.query.id);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            fetched = _context.sent;
            _context.next = 8;
            return (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/shows/" + props.query.id + "/episodes");

          case 8:
            epi = _context.sent;
            _context.next = 11;
            return epi.json();

          case 11:
            epiFetched = _context.sent;
            data = fetched[0];
            show = (0, _defineProperty3.default)({
              title: data.title,
              averageRating: data.averageRating,
              startDate: data.startDate,
              endData: data.endDate,
              ageRating: data.ageRating,
              airedOn: data.airedOn,
              ratingRank: data.ratingRank
            }, "airedOn", data.airedOn);
            episodes = epiFetched.map(function (element) {
              return element;
            });
            youtubeTrailerId = data.youtubeTrailerId;
            description = data.description;
            return _context.abrupt("return", {
              shows: fetched,
              show: show,
              id: props.query.id,
              title: show.title + " Info",
              youtubeTrailerId: youtubeTrailerId,
              description: description,
              episodes: episodes
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Shows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIkxheW91dCIsIk1ldGFCbG9jayIsIlNjcm9sbFNweUJsb2NrIiwiaW5mbyIsIllvdXR1YmVWaWRlbyIsIkxpbmsiLCJFcGlzb2RlcyIsIlNob3dzIiwicHJvcHMiLCJpZCIsInNob3ciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZXBpc29kZXMiLCJ5b3V0dWJlVHJhaWxlcklkIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZCIsImVwaSIsImVwaUZldGNoZWQiLCJkYXRhIiwiYXZlcmFnZVJhdGluZyIsInN0YXJ0RGF0ZSIsImVuZERhdGEiLCJlbmREYXRlIiwiYWdlUmF0aW5nIiwiYWlyZWRPbiIsInJhdGluZ1JhbmsiLCJtYXAiLCJlbGVtZW50Iiwic2hvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsSUFBTSxRQUFRLFNBQVIsQUFBUSxhQUFBO3lCQUNaLEFBQUMsZ0NBQUssb0JBQWtCLE1BQXhCLEFBQThCLElBQU0scUJBQW1CLE1BQXZELEFBQTZEO2dCQUE3RDtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFNLEtBRGIsQUFDRSxBQUFnQixBQUNoQix3QkFBQSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUM7O2dCQUFEO2tCQUhKLEFBRUUsQUFDRSxBQUVGO0FBRkU7QUFBQSx1QkFFRixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBYTs7Z0JBQWI7a0JBQUEsQUFBMEI7QUFBMUI7QUFBQSxXQURGLEFBQ0UsQUFBZ0MsQUFDaEM7ZUFBQTs7Z0JBQUE7a0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxLQUFYLEFBQWdCLE9BSGxCLEFBR0UsQUFDQSxtQ0FBQSxBQUFDLG1DQUFTLE9BQU8sTUFBQSxBQUFNLEtBQXZCLEFBQTRCLE9BQU8sVUFBVSxNQUE3QyxBQUFtRDtnQkFBbkQ7a0JBVEosQUFLRSxBQUlFLEFBRUY7QUFGRTt1QkFFRixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMscUNBQVUsT0FBTyxNQUFsQixBQUF3QixPQUFPLE1BQU0sTUFBckMsQUFBMkM7Z0JBQTNDO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLEFBQUMsd0NBQWEsaUJBQWQsTUFBOEIsT0FBOUIsQUFBb0MsUUFBTyxRQUEzQyxBQUFrRCxPQUFNLGtCQUFrQixNQUExRSxBQUFnRjtnQkFBaEY7a0JBZE4sQUFDRSxBQVdFLEFBRUU7QUFBQTs7YUFkTjtTQUZVLEFBQ1osQUFDRTtBQUFBO0FBRko7O0FBNEJBLE1BQUEsQUFBTSw4QkFBTjtzRkFBd0IsaUJBQUEsQUFBZ0IsT0FBaEI7K0VBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFBQTs0QkFBQTttQkFDSixpQ0FBTSxxQ0FBcUMsTUFBQSxBQUFNLE1BRDdDLEFBQ0osQUFBdUQ7O2VBQW5FO0FBRGdCLDJCQUFBOzRCQUFBO21CQUVBLElBRkEsQUFFQSxBQUFJOztlQUFwQjtBQUZnQiwrQkFBQTs0QkFBQTttQkFJSixzRUFBeUMsTUFBQSxBQUFNLE1BQS9DLEFBQXFELEtBSmpEOztlQUloQjtBQUpnQiwyQkFBQTs0QkFBQTttQkFLQyxJQUxELEFBS0MsQUFBSTs7ZUFBdkI7QUFMa0Isa0NBT2xCO0FBUGtCLG1CQU9YLFFBUFcsQUFPWCxBQUFRLEFBRWY7QUFUa0I7cUJBVWIsS0FWYSxBQVVSLEFBQ1o7NkJBQWUsS0FYSyxBQVdBLEFBQ3BCO3lCQUFXLEtBWlMsQUFZSixBQUNoQjt1QkFBUyxLQWJXLEFBYU4sQUFDZDt5QkFBVyxLQWRTLEFBY0osQUFDaEI7dUJBQVMsS0FmVyxBQWVOLEFBQ2Q7MEJBQVksS0FoQlEsQUFnQkg7QUFOakIsMEJBT1MsS0FqQlcsQUFpQk4sQUFHWjtBQXBCa0Isa0NBb0JQLEFBQVcsSUFBSSxtQkFBVyxBQUN2QztxQkFBQSxBQUFPLEFBQ1I7QUF0QnFCLEFBb0JQLEFBSVgsYUFKVztBQXBCTywrQkF3QkMsS0F4QkQsQUF3Qk0sQUFDeEI7QUF6QmtCLDBCQXlCSixLQXpCSSxBQXlCQzs7cUJBRWhCLEFBQ0UsQUFDUDtvQkFGSyxBQUVDLEFBQ047a0JBQUksTUFBQSxBQUFNLE1BSEwsQUFHVyxBQUNoQjtxQkFBTyxLQUFBLEFBQUssUUFKUCxBQUllLEFBQ3BCO2dDQUxLLEFBTUw7MkJBTkssQUFPTDt3QkFsQ29CLEFBMkJmO0FBQUEsQUFDTDs7ZUE1Qm9CO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBeEI7O3VCQUFBOzRCQUFBO0FBQUE7QUFzQ0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvUmVhY3QvYW5vbWVkaWEifQ==