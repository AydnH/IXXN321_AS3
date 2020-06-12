import React from "react";

export default class ProjectSevenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image7: "",
      description7: "",
    };
    this.onProject7ChangeImage = this.onProject7ChangeImage.bind(this);
    this.onProject7ChangeDescription = this.onProject7ChangeDescription.bind(
      this
    );
  }

  onProject7ChangeImage(event) {
    this.setState({
      image7: event.target.value,
    });
  }
  onProject7ChangeDescription(event) {
    this.setState({
      description7: event.target.value,
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
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="description7"
            value={this.props.description7}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
