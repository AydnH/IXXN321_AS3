import React from "react";

export default class ProjectFiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image5: "",
      description5: "",
    };
    this.onProject5ChangeDescription = this.onProject5ChangeDescription.bind(
      this
    );
    this.onProject5ChangeImage = this.onProject5ChangeImage.bind(this);
  }
  onProject5ChangeImage(event) {
    this.setState({
      image5: event.target.value,
    });
  }
  onProject5ChangeDescription(event) {
    this.setState({
      description5: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image5"
            value={this.props.image5}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="description5"
            value={this.props.description5}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
