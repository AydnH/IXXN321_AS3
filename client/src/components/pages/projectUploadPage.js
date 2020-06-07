import React from "react";
import SubmitForm from "../submitter/submissionForm";

export default class projectUploaderPage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h1> projectUploaderPage </h1>
        </section>
        <section>
          <h2> upload form</h2>
          <SubmitForm />
        </section>
      </div>
    );
  }
}
