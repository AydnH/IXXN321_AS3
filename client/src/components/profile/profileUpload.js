import React from "react";
import axios from "axios";
import NameForm from "../profile/profileForms/name";
import EmailForm from "../profile/profileForms/email";
import BiographyForm from "../profile/profileForms/biography";
import ProfessionForm from "../profile/profileForms/profession";

export default class ProfileUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      profession: "",
      biography: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, profession, biography } = this.state;

    let accountProfile = {
      name: `${name}`,
      email: `${email}`,
      profession: `${profession}`,
      biography: `${biography}`,
    };
    console.log(accountProfile);
    axios
      .post("http://localhost:3100/api/postProfile", accountProfile)
      .then((res) => {
        this.setState({ sent: true });
      })
      .catch(() => {
        console.log("FAILED TO SEND");
      });
  };

  render() {
    return (
      <div className="submissionFormMaster">
        <form
          id="profile"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <NameForm handleChange={this.handleChange} name={this.state.name} />
          <EmailForm
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <ProfessionForm
            handleChange={this.handleChange}
            profession={this.state.profession}
          />
          <BiographyForm
            handleChange={this.handleChange}
            biography={this.state.biography}
          />

          <button type="submit">set</button>
        </form>
      </div>
    );
  }
}
