import React from "react";
import ProfileUploadForm from "../../profile/profileUpload";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div>
            <h1> log in</h1>
            <h2> Portfolio graphic</h2>
            <ProfileUploadForm />
          </div>
        </section>

        <section>
          <h2> login form</h2>
        </section>
      </div>
    );
  }
}
