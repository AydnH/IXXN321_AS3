import React from "react";

export default class ProjectTwoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image2: "",
      desciption2: "",
    };
    this.onProject2ChangeImage = this.onProject2ChangeImage.bind(this);
    this.onProject2ChangeDescription = this.onProject2ChangeDescription.bind(
      this
    );
  }
  onProject2ChangeImage(event) {
    this.setState({
      image2: event.target.value,
    });
  }
  onProject2ChangeDescription(event) {
    this.setState({
      description2: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image2"
            value={this.props.image2}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="description2"
            value={this.props.description2}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
