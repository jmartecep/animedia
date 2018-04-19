"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\React\\anomedia\\pages\\shows.js?entry";


var Shows = function Shows(props) {
  return _react2.default.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Shows Page"), props.shows.map(function (show) {
    return _react2.default.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, show.title);
  }));
};

Shows.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)("http://localhost:3000/api/shows");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log("Show data fetched. Count: " + data.length);

          return _context.abrupt("return", {
            shows: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Shows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzaG93cy5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIlNob3dzIiwicHJvcHMiLCJzaG93cyIsIm1hcCIsInNob3ciLCJ0aXRsZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxRQUFRLFNBQVIsQUFBUSxhQUFBO3lCQUNaLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNDLHFCQUFBLEFBQU0sTUFBTixBQUFZLElBQUksZ0JBQUE7MkJBQVEsY0FBQTs7a0JBQUE7b0JBQUEsQUFBSTtBQUFKO0FBQUEsS0FBQSxPQUFSLEFBQVEsQUFBUztBQUh4QixBQUNaLEFBRUc7QUFITDs7QUFPQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1dBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNKLGlDQURJLEFBQ0osQUFBTTs7YUFBbEI7QUFEZ0IseUJBQUE7MEJBQUE7aUJBRUgsSUFGRyxBQUVILEFBQUk7O2FBQWpCO0FBRmdCLDBCQUl0Qjs7a0JBQUEsQUFBUSxtQ0FBaUMsS0FKbkIsQUFJdEIsQUFBOEM7OzttQkFKeEIsQUFNZixBQUNFO0FBREYsQUFDTDs7YUFQb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCLEFBV0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvd3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvUmVhY3QvYW5vbWVkaWEifQ==