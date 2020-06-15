import React from "react";

export default class ProjectFiveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image5: "",
    };
    this.onProject5ChangeImage = this.onProject5ChangeImage.bind(this);
  }
  onProject5ChangeImage(event) {
    this.setState({
      image5: event.target.value,
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
      </div>
    );
  }
}
