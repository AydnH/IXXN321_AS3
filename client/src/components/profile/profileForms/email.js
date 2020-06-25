import React from "react";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.emailOnChange = this.emailOnChange.bind(this);
  }
  emailOnChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        <div className="text-submission">
          <input
            type="text"
            name="email"
            value={this.props.email}
            onChange={this.props.handleChange}
            placeholder="email"
          />
        </div>
      </div>
    );
  }
}
