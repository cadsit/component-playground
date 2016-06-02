"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = _react2.default.createClass({
  displayName: "Editor",

  propTypes: {
    theme: _react2.default.PropTypes.string,
    readOnly: _react2.default.PropTypes.bool,
    external: _react2.default.PropTypes.bool,
    codeText: _react2.default.PropTypes.string,
    selectedLines: _react2.default.PropTypes.array,
    onChange: _react2.default.PropTypes.func,
    style: _react2.default.PropTypes.object,
    className: _react2.default.PropTypes.string
  },

  render: function render() {
    return _react2.default.createElement(
      "div",
      null,
      "COMPONENT PLAYGROUND!!"
    );
  }
}); /* eslint new-cap:0 no-unused-vars:0 */


exports.default = Editor;