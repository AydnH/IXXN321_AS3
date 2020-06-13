import React from "react";

export default class ProjectSevenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image7: "",
    };
    this.onProject7ChangeImage = this.onProject7ChangeImage.bind(this);
  }

  onProject7ChangeImage(event) {
    this.setState({
      image7: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image7"
            value={this.props.image7}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
      </div>
    );
  }
}
