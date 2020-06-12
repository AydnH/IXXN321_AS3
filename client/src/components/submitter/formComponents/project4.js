import React from "react";

export default class ProjectFourForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image4: "",
      description3: "",
    };
    this.onProject4ChangeDescription = this.onProject4ChangeDescription.bind(
      this
    );
    this.onProject4ChangeImage = this.onProject4ChangeImage.bind(this);
  }
  onProject4ChangeImage(event) {
    this.setState({
      image4: event.target.value,
    });
  }
  onProject4ChangeDescription(event) {
    this.setState({
      description4: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image4"
            value={this.props.image4}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="description4"
            value={this.props.description4}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
