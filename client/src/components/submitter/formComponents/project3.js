import React from "react";

export default class projectThreeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image3: "",
      description3: "",
    };
    this.onProject3ChangeImage = this.onProject3ChangeImage.bind(this);
    this.onProject3ChangeDescription = this.onProject3ChangeDescription.bind(
      this
    );
  }
  onProject3ChangeImage(event) {
    this.setState({
      image3: event.target.value,
    });
  }
  onProject3ChangeDescription(event) {
    this.setState({
      description3: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            type="file"
            name="image3"
            value={this.props.image3}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <textarea
            rows="8"
            type="Text"
            name="description3"
            value={this.props.description3}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
