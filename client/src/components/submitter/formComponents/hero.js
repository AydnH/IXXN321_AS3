import React from "react";

export default class HeroSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroImage: "",
      heroDescription: "",
    };
    this.onHeroChangeImage = this.onHeroChangeImage.bind(this);
    this.onHeroChangeDescription = this.onHeroChangeDescription.bind(this);
  }

  onHeroChangeImage(event) {
    this.setState({
      heroImage: event.target.value,
    });
  }
  onHeroChangeDescription(event) {
    this.setState({
      heroDescription: event.target.value,
    });
  }

  render() {
    return (
      <div className="form-group">
        {/* Image */}
        <div className="image-Submission">
          <input
            id="heroImage"
            type="file"
            name="heroImage"
            value={this.props.heroImage}
            onChange={this.props.handleChange}
            placeholder="Image"
          />
        </div>
        {/* description */}
        <div className="description-Submission">
          <input
            type="Text"
            name="heroDescription"
            value={this.props.heroDescription}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        </div>
      </div>
    );
  }
}
