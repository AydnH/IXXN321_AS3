import React from "react";

export default class ProjectSixForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image6: "",
      description6: "",
    };
    this.onProject6ChangeImage = this.onProject6ChangeImage.bind(this);
    this.onProject6ChangeDescription = this.onProject6ChangeDescription.bind(
      this
    );
  }
  onProject6ChangeImage(event) {
    this.setState({
      image6: event.target.value,
    });
  }
  onProject6ChangeDescription(event) {
    this.setState({
      description6: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image6"
            value={this.props.image6}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="description6"
            value={this.props.description6}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
