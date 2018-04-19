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
  }, _react2.default.createElement("img", { src: props.coverImage, className: "jsx-1429287233" + " " + "coverimage responsive-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement("div", {
    className: "jsx-1429287233" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("h1", {
    className: "jsx-1429287233" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, props.show.title), _react2.default.createElement("div", {
    className: "jsx-1429287233" + " " + "col m2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("div", { id: "side", className: "jsx-1429287233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_ScrollSpyBlock2.default, { title: props.show.title, episodes: props.episodes, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }))), _react2.default.createElement("div", {
    className: "jsx-1429287233" + " " + "col m6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement("p", {
    className: "jsx-1429287233" + " " + "flow-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, props.description), _react2.default.createElement("hr", {
    className: "jsx-1429287233",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement(_Episode2.default, { id: "episode-guide", title: props.show.title, episodes: props.episodes, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement("div", {
    className: "jsx-1429287233" + " " + "col m4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_MetaBlock2.default, { title: props.title, show: props.show, __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement(_YoutubeVideo2.default, { allowFullScreen: true, width: "100%", height: "350", youtubeTrailerId: props.youtubeTrailerId, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: "1429287233",
    css: ".title.jsx-1429287233{text-align:center;font-size:4rem;margin:0;padding:0;position:relative;left:-6vw;background-image:linear-gradient(rgba(0,0,0,0.7) 50%,red 75% ,black 100%);border-radius:5% 5% 0 0;width:106vw;top:-40px;background-blend-mode:hard-light;color:white;z-index:30;}.flow-text.jsx-1429287233{font-size:1.15rem;}.coverimage.jsx-1429287233{max-height:40vh;width:100vw;object-fit:cover;object-position:center;margin:auto;position:absolute;top:0;z-index:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBRzZCLEFBZUEsQUFHRixnQkFDSixFQWxCRyxBQWVqQixVQUltQixLQWxCUixTQUNDLEdBa0JhLE9BakJMLGdCQWtCTixFQWpCRixVQUNrRSxBQWlCMUQsa0JBQ1osTUFDRyxVQUNYLHdDQW5CMEIsd0JBQ1osWUFDRixVQUN1QixpQ0FDckIsWUFDRCxXQUNiIiwiZmlsZSI6InBhZ2VzXFxzaG93cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Qcm9qZWN0cy9SZWFjdC9hbm9tZWRpYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcclxuaW1wb3J0IE1ldGFCbG9jayBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhQmxvY2tcIjtcclxuaW1wb3J0IFNjcm9sbFNweUJsb2NrIGZyb20gXCIuLi9jb21wb25lbnRzL1Njcm9sbFNweUJsb2NrXCI7XHJcbmltcG9ydCBZb3V0dWJlVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9Zb3V0dWJlVmlkZW8nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEVwaXNvZGVzIGZyb20gJy4uL2NvbXBvbmVudHMvRXBpc29kZSdcclxuXHJcbmNvbnN0IFNob3dzID0gcHJvcHMgPT4gKFxyXG4gIDxMaW5rIGFzPXtgL2FwaS9zaG93cy8ke3Byb3BzLmlkfWB9IGhyZWY9e2Avc2hvd3M/aWQ9JHtwcm9wcy5pZH1gfT5cclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY292ZXJpbWFnZSByZXNwb25zaXZlLWltZ1wiIHNyYz17cHJvcHMuY292ZXJJbWFnZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuc2hvdy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZVwiPlxyXG4gICAgICAgICAgICA8U2Nyb2xsU3B5QmxvY2sgdGl0bGU9e3Byb3BzLnNob3cudGl0bGV9IGVwaXNvZGVzPXtwcm9wcy5lcGlzb2Rlc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG02XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbG93LXRleHRcIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8RXBpc29kZXMgaWQ9XCJlcGlzb2RlLWd1aWRlXCIgdGl0bGU9e3Byb3BzLnNob3cudGl0bGV9IGVwaXNvZGVzPXtwcm9wcy5lcGlzb2Rlc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtNFwiPlxyXG4gICAgICAgICAgPE1ldGFCbG9jayB0aXRsZT17cHJvcHMudGl0bGV9IHNob3c9e3Byb3BzLnNob3d9IC8+XHJcbiAgICAgICAgICA8WW91dHViZVZpZGVvIGFsbG93RnVsbFNjcmVlbiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIzNTBcIiB5b3V0dWJlVHJhaWxlcklkPXtwcm9wcy55b3V0dWJlVHJhaWxlcklkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbGVmdDogLTZ2dztcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNykgNTAlLCByZWQgNzUlICwgYmxhY2sgMTAwJSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1JSA1JSAwIDA7XHJcbiAgICAgICAgICB3aWR0aDogMTA2dnc7XHJcbiAgICAgICAgICB0b3A6IC00MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBoYXJkLWxpZ2h0O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMzA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbG93LXRleHQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY292ZXJpbWFnZSB7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA0MHZoO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHotaW5kZXg6MDtcclxuICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICA8L0xpbms+XHJcbik7XHJcblxyXG5TaG93cy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAocHJvcHMpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2hvd3MvXCIgKyBwcm9wcy5xdWVyeS5pZCk7XHJcbiAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIGNvbnN0IGVwaSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Nob3dzLyR7cHJvcHMucXVlcnkuaWR9L2VwaXNvZGVzYCk7XHJcbiAgbGV0IGVwaUZldGNoZWQgPSBhd2FpdCBlcGkuanNvbigpO1xyXG5cclxuICBsZXQgZGF0YSA9IGZldGNoZWRbMF07XHJcblxyXG4gIGxldCBzaG93ID0ge1xyXG4gICAgdGl0bGU6IGRhdGEudGl0bGUsXHJcbiAgICBhdmVyYWdlUmF0aW5nOiBkYXRhLmF2ZXJhZ2VSYXRpbmcsXHJcbiAgICBzdGFydERhdGU6IGRhdGEuc3RhcnREYXRlLFxyXG4gICAgZW5kRGF0YTogZGF0YS5lbmREYXRlLFxyXG4gICAgYWdlUmF0aW5nOiBkYXRhLmFnZVJhdGluZyxcclxuICAgIGFpcmVkT246IGRhdGEuYWlyZWRPbixcclxuICAgIHJhdGluZ1Jhbms6IGRhdGEucmF0aW5nUmFuayxcclxuICAgIGFpcmVkT246IGRhdGEuYWlyZWRPblxyXG4gIH07XHJcblxyXG4gIGxldCBlcGlzb2RlcyA9IGVwaUZldGNoZWQubWFwKGVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICB9KTtcclxuXHJcbiAgbGV0IHlvdXR1YmVUcmFpbGVySWQgPSBkYXRhLnlvdXR1YmVUcmFpbGVySWRcclxuICBsZXQgZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uXHJcbiAgbGV0IGNvdmVySW1hZ2UgPSBkYXRhLmNvdmVySW1hZ2VcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNob3dzOiBmZXRjaGVkLFxyXG4gICAgc2hvdzogc2hvdyxcclxuICAgIGlkOiBwcm9wcy5xdWVyeS5pZCxcclxuICAgIHRpdGxlOiBzaG93LnRpdGxlICsgXCIgSW5mb1wiLFxyXG4gICAgeW91dHViZVRyYWlsZXJJZCxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgZXBpc29kZXMsXHJcbiAgICBjb3ZlckltYWdlXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dzO1xyXG4iXX0= */\n/*@ sourceURL=pages\\shows.js?entry */"
  })));
};

Shows.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
    var res, fetched, epi, epiFetched, data, show, episodes, youtubeTrailerId, description, coverImage;
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
            coverImage = data.coverImage;
            return _context.abrupt("return", {
              shows: fetched,
              show: show,
              id: props.query.id,
              title: show.title + " Info",
              youtubeTrailerId: youtubeTrailerId,
              description: description,
              episodes: episodes,
              coverImage: coverImage
            });

          case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIkxheW91dCIsIk1ldGFCbG9jayIsIlNjcm9sbFNweUJsb2NrIiwiWW91dHViZVZpZGVvIiwiTGluayIsIkVwaXNvZGVzIiwiU2hvd3MiLCJwcm9wcyIsImlkIiwiY292ZXJJbWFnZSIsInNob3ciLCJ0aXRsZSIsImVwaXNvZGVzIiwiZGVzY3JpcHRpb24iLCJ5b3V0dWJlVHJhaWxlcklkIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJqc29uIiwiZmV0Y2hlZCIsImVwaSIsImVwaUZldGNoZWQiLCJkYXRhIiwiYXZlcmFnZVJhdGluZyIsInN0YXJ0RGF0ZSIsImVuZERhdGEiLCJlbmREYXRlIiwiYWdlUmF0aW5nIiwiYWlyZWRPbiIsInJhdGluZ1JhbmsiLCJtYXAiLCJlbGVtZW50Iiwic2hvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7OztBQUVyQixJQUFNLFFBQVEsU0FBUixBQUFRLGFBQUE7eUJBQ1osQUFBQyxnQ0FBSyxvQkFBa0IsTUFBeEIsQUFBOEIsSUFBTSxxQkFBbUIsTUFBdkQsQUFBNkQ7Z0JBQTdEO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDRDQUM2QyxLQUFLLE1BQWhELEFBQXNELGdEQUF0RCxBQUFlOztnQkFBZjtrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7d0NBQUEsQUFBYzs7Z0JBQWQ7a0JBQUEsQUFBdUI7QUFBdkI7QUFBQSxXQUF1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