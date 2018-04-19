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
      lineNumber: 10
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("h1", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.show.title), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_ScrollSpyBlock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("p", {
    className: "jsx-4267579454" + " " + "flow-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, props.description), _react2.default.createElement("hr", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement("h2", {
    className: "jsx-4267579454",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, props.show.title, " Episode Guide"), _react2.default.createElement(_Episode2.default, { title: props.show.title, episodes: props.episodes, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })), _react2.default.createElement("div", {
    className: "jsx-4267579454" + " " + "col m4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_MetaBlock2.default, { title: props.title, show: props.show, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(_YoutubeVideo2.default, { allowFullScreen: true, width: "100%", height: "350", youtubeTrailerId: props.youtubeTrailerId, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: "4267579454",
    css: ".flow-text.jsx-4267579454{font-size:1.15rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmtCLEFBR3lCLGtCQUNwQiIsImZpbGUiOiJwYWdlc1xcc2hvd3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvUmVhY3QvYW5vbWVkaWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XHJcbmltcG9ydCBNZXRhQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YUJsb2NrXCI7XHJcbmltcG9ydCBTY3JvbGxTcHlCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxTcHlCbG9ja1wiO1xyXG5pbXBvcnQgWW91dHViZVZpZGVvIGZyb20gJy4uL2NvbXBvbmVudHMvWW91dHViZVZpZGVvJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBFcGlzb2RlcyBmcm9tICcuLi9jb21wb25lbnRzL0VwaXNvZGUnXHJcblxyXG5jb25zdCBTaG93cyA9IHByb3BzID0+IChcclxuICA8TGluayBhcz17YC9hcGkvc2hvd3MvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Nob3dzP2lkPSR7cHJvcHMuaWR9YH0+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMT57cHJvcHMuc2hvdy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0yXCI+XHJcbiAgICAgICAgICA8U2Nyb2xsU3B5QmxvY2sgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtNlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxvdy10ZXh0XCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGgyPntwcm9wcy5zaG93LnRpdGxlfSBFcGlzb2RlIEd1aWRlPC9oMj5cclxuICAgICAgICAgIDxFcGlzb2RlcyB0aXRsZT17cHJvcHMuc2hvdy50aXRsZX0gZXBpc29kZXM9e3Byb3BzLmVwaXNvZGVzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG00XCI+XHJcbiAgICAgICAgICA8TWV0YUJsb2NrIHRpdGxlPXtwcm9wcy50aXRsZX0gc2hvdz17cHJvcHMuc2hvd30gLz5cclxuICAgICAgICAgIDxZb3V0dWJlVmlkZW8gYWxsb3dGdWxsU2NyZWVuIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjM1MFwiIHlvdXR1YmVUcmFpbGVySWQ9e3Byb3BzLnlvdXR1YmVUcmFpbGVySWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAuZmxvdy10ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC9MaW5rPlxyXG4pO1xyXG5cclxuU2hvd3MuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3dzL1wiICsgcHJvcHMucXVlcnkuaWQpO1xyXG4gIGNvbnN0IGZldGNoZWQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBjb25zdCBlcGkgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zaG93cy8ke3Byb3BzLnF1ZXJ5LmlkfS9lcGlzb2Rlc2ApO1xyXG4gIGxldCBlcGlGZXRjaGVkID0gYXdhaXQgZXBpLmpzb24oKTtcclxuXHJcbiAgbGV0IGRhdGEgPSBmZXRjaGVkWzBdO1xyXG5cclxuICBsZXQgc2hvdyA9IHtcclxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxyXG4gICAgYXZlcmFnZVJhdGluZzogZGF0YS5hdmVyYWdlUmF0aW5nLFxyXG4gICAgc3RhcnREYXRlOiBkYXRhLnN0YXJ0RGF0ZSxcclxuICAgIGVuZERhdGE6IGRhdGEuZW5kRGF0ZSxcclxuICAgIGFnZVJhdGluZzogZGF0YS5hZ2VSYXRpbmcsXHJcbiAgICBhaXJlZE9uOiBkYXRhLmFpcmVkT24sXHJcbiAgICByYXRpbmdSYW5rOiBkYXRhLnJhdGluZ1JhbmssXHJcbiAgICBhaXJlZE9uOiBkYXRhLmFpcmVkT25cclxuICB9O1xyXG5cclxuICBsZXQgZXBpc29kZXMgPSBlcGlGZXRjaGVkLm1hcChlbGVtZW50ID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfSk7XHJcblxyXG4gIGxldCB5b3V0dWJlVHJhaWxlcklkID0gZGF0YS55b3V0dWJlVHJhaWxlcklkXHJcbiAgbGV0IGRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2hvd3M6IGZldGNoZWQsXHJcbiAgICBzaG93OiBzaG93LFxyXG4gICAgaWQ6IHByb3BzLnF1ZXJ5LmlkLFxyXG4gICAgdGl0bGU6IHNob3cudGl0bGUgKyBcIiBJbmZvXCIsXHJcbiAgICB5b3V0dWJlVHJhaWxlcklkLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBlcGlzb2Rlc1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG93cztcclxuIl19 */\n/*@ sourceURL=pages\\shows.js?entry */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIkxheW91dCIsIk1ldGFCbG9jayIsIlNjcm9sbFNweUJsb2NrIiwiWW91dHViZVZpZGVvIiwiTGluayIsIkVwaXNvZGVzIiwiU2hvd3MiLCJwcm9wcyIsImlkIiwic2hvdyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlcGlzb2RlcyIsInlvdXR1YmVUcmFpbGVySWQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlcyIsImpzb24iLCJmZXRjaGVkIiwiZXBpIiwiZXBpRmV0Y2hlZCIsImRhdGEiLCJhdmVyYWdlUmF0aW5nIiwic3RhcnREYXRlIiwiZW5kRGF0YSIsImVuZERhdGUiLCJhZ2VSYXRpbmciLCJhaXJlZE9uIiwicmF0aW5nUmFuayIsIm1hcCIsImVsZW1lbnQiLCJzaG93cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTzs7OztBQUNQLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLElBQU0sUUFBUSxTQUFSLEFBQVEsYUFBQTt5QkFDWixBQUFDLGdDQUFLLG9CQUFrQixNQUF4QixBQUE4QixJQUFNLHFCQUFtQixNQUF2RCxBQUE2RDtnQkFBN0Q7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxLQURiLEFBQ0UsQUFBZ0IsQUFDaEIsd0JBQUEsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDOztnQkFBRDtrQkFISixBQUVFLEFBQ0UsQUFFRjtBQUZFO0FBQUEsdUJBRUYsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBO3dDQUFBLEFBQWE7O2dCQUFiO2tCQUFBLEFBQTBCO0FBQTFCO0FBQUEsV0FERixBQUNFLEFBQWdDLEFBQ2hDO2VBQUE7O2dCQUFBO2tCQUZGLEFBRUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQU0sS0FBWCxBQUFnQixPQUhsQixBQUdFLEFBQ0EsbUNBQUEsQUFBQyxtQ0FBUyxPQUFPLE1BQUEsQUFBTSxLQUF2QixBQUE0QixPQUFPLFVBQVUsTUFBN0MsQUFBbUQ7Z0JBQW5EO2tCQVRKLEFBS0UsQUFJRSxBQUVGO0FBRkU7dUJBRUYsY0FBQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHFDQUFVLE9BQU8sTUFBbEIsQUFBd0IsT0FBTyxNQUFNLE1BQXJDLEFBQTJDO2dCQUEzQztrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLHdDQUFhLGlCQUFkLE1BQThCLE9BQTlCLEFBQW9DLFFBQU8sUUFBM0MsQUFBa0QsT0FBTSxrQkFBa0IsTUFBMUUsQUFBZ0Y7Z0JBQWhGO2tCQWROLEFBQ0UsQUFXRSxBQUVFO0FBQUE7O2FBZE47U0FGVSxBQUNaLEFBQ0U7QUFBQTtBQUZKOztBQTRCQSxNQUFBLEFBQU0sOEJBQU47c0ZBQXdCLGlCQUFBLEFBQWdCLE9BQWhCOytFQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ0osaUNBQU0scUNBQXFDLE1BQUEsQUFBTSxNQUQ3QyxBQUNKLEFBQXVEOztlQUFuRTtBQURnQiwyQkFBQTs0QkFBQTttQkFFQSxJQUZBLEFBRUEsQUFBSTs7ZUFBcEI7QUFGZ0IsK0JBQUE7NEJBQUE7bUJBSUosc0VBQXlDLE1BQUEsQUFBTSxNQUEvQyxBQUFxRCxLQUpqRDs7ZUFJaEI7QUFKZ0IsMkJBQUE7NEJBQUE7bUJBS0MsSUFMRCxBQUtDLEFBQUk7O2VBQXZCO0FBTGtCLGtDQU9sQjtBQVBrQixtQkFPWCxRQVBXLEFBT1gsQUFBUSxBQUVmO0FBVGtCO3FCQVViLEtBVmEsQUFVUixBQUNaOzZCQUFlLEtBWEssQUFXQSxBQUNwQjt5QkFBVyxLQVpTLEFBWUosQUFDaEI7dUJBQVMsS0FiVyxBQWFOLEFBQ2Q7eUJBQVcsS0FkUyxBQWNKLEFBQ2hCO3VCQUFTLEtBZlcsQUFlTixBQUNkOzBCQUFZLEtBaEJRLEFBZ0JIO0FBTmpCLDBCQU9TLEtBakJXLEFBaUJOLEFBR1o7QUFwQmtCLGtDQW9CUCxBQUFXLElBQUksbUJBQVcsQUFDdkM7cUJBQUEsQUFBTyxBQUNSO0FBdEJxQixBQW9CUCxBQUlYLGFBSlc7QUFwQk8sK0JBd0JDLEtBeEJELEFBd0JNLEFBQ3hCO0FBekJrQiwwQkF5QkosS0F6QkksQUF5QkM7O3FCQUVoQixBQUNFLEFBQ1A7b0JBRkssQUFFQyxBQUNOO2tCQUFJLE1BQUEsQUFBTSxNQUhMLEFBR1csQUFDaEI7cUJBQU8sS0FBQSxBQUFLLFFBSlAsQUFJZSxBQUNwQjtnQ0FMSyxBQU1MOzJCQU5LLEFBT0w7d0JBbENvQixBQTJCZjtBQUFBLEFBQ0w7O2VBNUJvQjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXhCOzt1QkFBQTs0QkFBQTtBQUFBO0FBc0NBOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3dzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL1JlYWN0L2Fub21lZGlhIn0=