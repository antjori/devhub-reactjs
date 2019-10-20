import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import classes from "./Person.css";
import withClazz from "../../../hoc/withClazz";
import AuthContext from "../../../context/auth-context";

/*const person = props => {
  console.log("[Person.js] rendering...");
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};*/

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
        <p key="par1">{this.props.children}</p>
        <input
          key="input1"
          // ref={inputEl => { this.inputElement = inputEl; }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClazz(Person, classes.Person);
