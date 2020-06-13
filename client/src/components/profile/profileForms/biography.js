import React from "react";

export default class BiographyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      biography: "",
    };
    this.biographyOnChange = this.biographyOnChange.bind(this);
  }
  biographyOnChange(event) {
    this.setState({
      biography: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-group">
        <div className="text-submission">
          <textarea
            type="text"
            name="biography"
            rows="8"
            value={this.props.biography}
            onChange={this.props.handleChange}
            placeholder="Write a short biography aboput yourself"
          />
        </div>
      </div>
    );
  }
}
