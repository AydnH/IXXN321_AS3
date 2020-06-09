import React from "react";
import axios from "axios";

export default class ProfileUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: "",
      firstName: "",
      lastName: "",
      profession: "",
      biography: "",
    };
  }
  profilePictureOnChange(event) {
    this.setState({
      profilePicture: event.target.value,
    });
  }
  firstNameOnChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  lastNameOnChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  professionOnChange(event) {
    this.setState({
      profession: event.target.value,
    });
  }
  biographyOnChange(event) {
    this.setState({
      biography: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSubmit = () => ({
      profilePicture: this.profilePicture,
      firstName: this.firstName,
      lastName: this.lastName,
      profession: this.profession,
      biography: this.biography,
    });
    let Profile = {
      profilePicture: this.profilePicture,
      firstName: this.firstName,
      lastName: this.lastName,
      profession: this.profession,
      biography: this.biography,
    };
    axios
      .post("http://localhost:3100/api/postProfile", Profile)
      .then((res) => {
        this.setState({ sent: true });
      })
      .catch(() => {
        console.log("FAILED TO SEND");
      });
    this.setState({
      profilePicture: "",
      firstName: "",
      lastName: "",
      profession: "",
      biography: "",
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="submissionFormMaster">
        <form
          id="profile"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <div className="image-submission">
              <input
                type="file"
                value={this.state.profilePicture}
                onChange={this.profilePictureOnChange.bind(this)}
                placeholder="Profile Picture"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="text-submission">
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.firstNameOnChange.bind(this)}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="text-submission">
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.lastNameOnChange.bind(this)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="text-submission">
              <input
                type="text"
                value={this.state.profession}
                onChange={this.professionOnChange.bind(this)}
                placeholder="Profession"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="text-submission">
              <textarea
                type="text"
                rows="8"
                value={this.state.biography}
                onChange={this.biographyOnChange.bind(this)}
                placeholder="Write a short biography aboput yourself"
              />
            </div>
          </div>
          <button type="submit">set</button>
        </form>
      </div>
    );
  }
}
