/* eslint new-cap:0 no-unused-vars:0 */
import React from "react";

const Editor = React.createClass({
  propTypes: {
    theme: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    external: React.PropTypes.bool,
    codeText: React.PropTypes.string,
    selectedLines: React.PropTypes.array,
    onChange: React.PropTypes.func,
    style: React.PropTypes.object,
    className: React.PropTypes.string
  },

  render() {
    return (
      <div>
        COMPONENT PLAYGROUND!!
      </div>
    );
  }
});

export default Editor;
