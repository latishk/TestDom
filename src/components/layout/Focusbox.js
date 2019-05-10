import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink} from "react-router-dom";

class Focusbox extends Component {

  state = {
    focussed: false
  };

  focus = () => {
    this.setState({ focussed: true });
  };

  blur = () => {
    this.setState({ focussed: false });
  };

  render() {
    return (
      <div className={"focus-box" + (this.state.focused ? " focus" : "")}>
        <div>
          <input type={this.props.type || "text"} placeholder={this.props.placeholder} onFocus={this.focus} onBlur={this.blur} />
          <div className="focus">
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Focusbox;
