"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("babel-polyfill");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _editor = require("./editor");

var _editor2 = _interopRequireDefault(_editor);

var _preview = require("./preview");

var _preview2 = _interopRequireDefault(_preview);

var _es6Preview = require("./es6-preview");

var _es6Preview2 = _interopRequireDefault(_es6Preview);

var _doc = require("./doc");

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars:0 */

var ReactPlayground = _react2.default.createClass({
  displayName: "ReactPlayground",

  propTypes: {
    codeText: _react2.default.PropTypes.string.isRequired,
    scope: _react2.default.PropTypes.object.isRequired,
    collapsableCode: _react2.default.PropTypes.bool,
    docClass: _react2.default.PropTypes.func,
    propDescriptionMap: _react2.default.PropTypes.object,
    theme: _react2.default.PropTypes.string,
    selectedLines: _react2.default.PropTypes.array,
    noRender: _react2.default.PropTypes.bool,
    es6Console: _react2.default.PropTypes.bool,
    context: _react2.default.PropTypes.object,
    initiallyExpanded: _react2.default.PropTypes.bool,
    previewComponent: _react2.default.PropTypes.node
  },

  getDefaultProps: function getDefaultProps() {
    return {
      theme: "monokai",
      noRender: true,
      context: {},
      initiallyExpanded: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      code: this.props.codeText,
      expandedCode: this.props.initiallyExpanded,
      external: true
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      code: nextProps.codeText,
      external: true
    });
  },
  _handleCodeChange: function _handleCodeChange(code) {
    this.setState({
      code: code,
      external: false
    });
  },
  _toggleCode: function _toggleCode() {
    this.setState({
      expandedCode: !this.state.expandedCode
    });
  },
  render: function render() {
    if (this.props.noRender === false) {
      if (process.env.NODE_ENV !== "production") {
        /* eslint-disable no-console, no-undef, max-len */
        if (typeof console !== "undefined" && console.warn) {
          console.warn("\n            Deprecation warning: noRender is being deprecated in favor of wrapped components and will be removed in the 1.x release.\n            https://github.com/FormidableLabs/component-playground/issues/19 for details.\n          ");
        }
        /* eslint-enable no-console, no-undef, max-len */
      }
    }

    return _react2.default.createElement(
      "div",
      { className: "playground" + (this.props.collapsableCode ? " collapsableCode" : "") },
      this.props.docClass ? _react2.default.createElement(_doc2.default, {
        componentClass: this.props.docClass,
        propDescriptionMap: this.props.propDescriptionMap }) : "",
      _react2.default.createElement(
        "div",
        { className: "playgroundCode" + (this.state.expandedCode ? " expandedCode" : "") },
        _react2.default.createElement(_editor2.default, {
          onChange: this._handleCodeChange,
          className: "playgroundStage",
          codeText: this.state.code,
          external: this.state.external,
          theme: this.props.theme,
          selectedLines: this.props.selectedLines })
      ),
      this.props.collapsableCode ? _react2.default.createElement(
        "div",
        { className: "playgroundToggleCodeBar" },
        _react2.default.createElement(
          "span",
          { className: "playgroundToggleCodeLink", onClick: this._toggleCode },
          this.state.expandedCode ? "collapse" : "expand"
        )
      ) : "",
      _react2.default.createElement(
        "div",
        { className: "playgroundPreview" },
        this.props.es6Console ? _react2.default.createElement(_es6Preview2.default, {
          code: this.state.code,
          scope: this.props.scope }) : _react2.default.createElement(_preview2.default, {
          context: this.props.context,
          code: this.state.code,
          scope: this.props.scope,
          noRender: this.props.noRender,
          previewComponent: this.props.previewComponent })
      )
    );
  }
});

exports.default = ReactPlayground;