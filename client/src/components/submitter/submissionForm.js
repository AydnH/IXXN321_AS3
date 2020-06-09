import React from "react";
import axios from "axios";

export default class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroImage: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      heroDescription: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
    };
  }
  onHeroChangeImage(event) {
    this.setState({
      heroImage: event.target.value,
    });
  }
  onProject2ChangeImage(event) {
    this.setState({
      image2: event.target.value,
    });
  }
  onProject3ChangeImage(event) {
    this.setState({
      image3: event.target.value,
    });
  }
  onProject4ChangeImage(event) {
    this.setState({
      image4: event.target.value,
    });
  }
  onProject5ChangeImage(event) {
    this.setState({
      image5: event.target.value,
    });
  }
  onProject6ChangeImage(event) {
    this.setState({
      image6: event.target.value,
    });
  }
  onProject7ChangeImage(event) {
    this.setState({
      image7: event.target.value,
    });
  }
  onHeroChangeDescription(event) {
    this.setState({
      heroDescription: event.target.value,
    });
  }
  onProject2ChangeDescription(event) {
    this.setState({
      description2: event.target.value,
    });
  }
  onProject3ChangeDescription(event) {
    this.setState({
      description3: event.target.value,
    });
  }
  onProject4ChangeDescription(event) {
    this.setState({
      description4: event.target.value,
    });
  }
  onProject5ChangeDescription(event) {
    this.setState({
      description5: event.target.value,
    });
  }
  onProject6ChangeDescription(event) {
    this.setState({
      description6: event.target.value,
    });
  }
  onProject7ChangeDescription(event) {
    this.setState({
      description7: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit = () => ({
      heroImage: this.state.heroImage,
      heroDescription: this.state.heroDescription,
      image2: this.state.image2,
      description2: this.state.description2,
      image3: this.state.image3,
      description3: this.state.description3,
      image4: this.state.image4,
      description4: this.state.description4,
      image5: this.state.image5,
      description5: this.state.description5,
      image6: this.state.image6,
      description6: this.state.description6,
      image7: this.state.image7,
      description7: this.state.description7,
    });
    let Projects = {
      heroImage: this.state.heroImage,
      heroDescription: this.state.heroDescription,
      image2: this.state.image2,
      description2: this.state.description2,
      image3: this.state.image3,
      description3: this.state.description3,
      image4: this.state.image4,
      description4: this.state.description4,
      image5: this.state.image5,
      description5: this.state.description5,
      image6: this.state.image6,
      description6: this.state.description6,
      image7: this.state.image7,
      description7: this.state.description7,
    };
    console.log(Projects);
    axios
      .post("http://localhost:3100/api/postProjects", Projects)
      .then((res) => {
        this.setState({ sent: true });
      })
      .catch(() => {
        console.log("FAILED");
      });
    this.setState({
      heroImage: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      image7: "",
      heroDescription: "",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="submissionFormMaster">
        <form
          id="submissionForm"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          {/* Hero */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.heroImage}
                onChange={this.onHeroChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.heroDescription}
                onChange={this.onHeroChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 2 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image2}
                onChange={this.onProject2ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description2}
                onChange={this.onProject2ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 3 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image3}
                onChange={this.onProject3ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description3}
                onChange={this.onProject3ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 4 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image4}
                onChange={this.onProject4ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description4}
                onChange={this.onProject4ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 5 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image5}
                onChange={this.onProject5ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description5}
                onChange={this.onProject5ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 6 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image6}
                onChange={this.onProject6ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description6}
                onChange={this.onProject6ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          {/* project 7 */}
          <div className="form-group">
            {/* Image */}
            <div className="image-Submission">
              <input
                type="file"
                value={this.state.image7}
                onChange={this.onProject7ChangeImage.bind(this)}
                placeholder="Image"
              />
            </div>
            {/* description */}
            <div className="description-Submission">
              <input
                type="Text"
                value={this.state.description7}
                onChange={this.onProject7ChangeDescription.bind(this)}
                placeholder="Descriptino"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
