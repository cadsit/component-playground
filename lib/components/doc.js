"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypesArray = [{
  key: "array",
  test: _react2.default.PropTypes.array,
  isRequired: _react2.default.PropTypes.array.isRequired
}, {
  key: "boolean",
  test: _react2.default.PropTypes.bool,
  isRequired: _react2.default.PropTypes.bool.isRequired
}, {
  key: "function",
  test: _react2.default.PropTypes.func,
  isRequired: _react2.default.PropTypes.func.isRequired
}, {
  key: "number",
  test: _react2.default.PropTypes.number,
  isRequired: _react2.default.PropTypes.number.isRequired
}, {
  key: "object",
  test: _react2.default.PropTypes.object,
  isRequired: _react2.default.PropTypes.array.isRequired
}, {
  key: "string",
  test: _react2.default.PropTypes.string,
  isRequired: _react2.default.PropTypes.string.isRequired
}, {
  key: "node",
  test: _react2.default.PropTypes.node,
  isRequired: _react2.default.PropTypes.node.isRequired
}, {
  key: "element",
  test: _react2.default.PropTypes.element,
  isRequired: _react2.default.PropTypes.element.isRequired
}];

var getReactPropType = function getReactPropType(propTypeFunc) {
  var propType = {
    name: "custom",
    isRequired: false
  };

  for (var i = 0; i < propTypesArray.length; i++) {
    if (propTypeFunc === propTypesArray[i].test) {
      propType.name = propTypesArray[i].key;

      break;
    }

    if (propTypeFunc === propTypesArray[i].isRequired) {
      propType.name = propTypesArray[i].key;
      propType.isRequired = true;

      break;
    }
  }

  return propType;
};

exports.default = _react2.default.createClass({
  displayName: "doc",

  propTypes: {
    componentClass: _react2.default.PropTypes.func,
    propDescriptionMap: _react2.default.PropTypes.object,
    ignore: _react2.default.PropTypes.array
  },
  getDefaultProps: function getDefaultProps() {
    return {
      propDescriptionMap: {},
      ignore: []
    };
  },
  render: function render() {
    var propTypes = [];
    var propName = void 0;

    for (propName in this.props.componentClass.propTypes) {
      if (this.props.ignore.indexOf(propName)) {
        propTypes.push({
          propName: propName,
          type: getReactPropType(this.props.componentClass.propTypes[propName]),
          description: this.props.propDescriptionMap[propName] || ""
        });
      }
    }

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        null,
        propTypes.map(function (propObj) {
          return _react2.default.createElement(
            "li",
            { key: propObj.propName },
            _react2.default.createElement(
              "b",
              null,
              propObj.propName
            ),
            _react2.default.createElement(
              "i",
              null,
              ": " + propObj.type.name
            ),
            propObj.description && " - " + propObj.description,
            _react2.default.createElement(
              "b",
              null,
              propObj.type.isRequired ? " required" : ""
            )
          );
        })
      )
    );
  }
});