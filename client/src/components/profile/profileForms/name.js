import React from "react";

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.nameOnChange = this.nameOnChange.bind(this);
  }
  nameOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        <div className="text-submission">
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
            placeholder="Enter full Name"
          />
        </div>
      </div>
    );
  }
}
