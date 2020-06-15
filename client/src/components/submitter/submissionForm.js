import React from "react";
import axios from "axios";
import HeroSubmission from "../submitter/formComponents/hero";
import ProjectTwoForm from "../submitter/formComponents/project2";
import ProjectThreeForm from "../submitter/formComponents/project3";
import ProjectFourForm from "../submitter/formComponents/project4";
import ProjectFiveForm from "../submitter/formComponents/project5";
import ProjectSixForm from "../submitter/formComponents/project6";
import ProjectSevenForm from "../submitter/formComponents/project7";

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
    const {
      heroImage,
      heroDescription,
      image2,
      description2,
      image3,
      description3,
      image4,
      image5,
      image6,
      image7,
    } = this.state;
    let Projects = {
      heroImage: `${heroImage}`,
      heroDescription: `${heroDescription}`,
      image2: `${image2}`,
      description2: `${description2}`,
      image3: `${image3}`,
      description3: `${description3}`,
      image4: `${image4}`,
      image5: `${image5}`,
      image6: `${image6}`,
      image7: `${image7}`,
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
  };

  render() {
    return (
      <div className="submissionFormMaster">
        <form
          id="submissionForm"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <HeroSubmission
            handleChange={this.handleChange}
            heroImage={this.state.heroImage}
            heroDescriptiont={this.state.heroDescription}
          />
          {/* project 2 */}
          <ProjectTwoForm
            handleChange={this.handleChange}
            image2={this.state.image2}
            description2={this.state.description2}
          />
          {/* project 3 */}
          <ProjectThreeForm
            handleChange={this.handleChange}
            image3={this.state.image3}
            description3={this.state.description3}
          />
          {/* project 4 */}
          <ProjectFourForm
            handleChange={this.handleChange}
            image4={this.state.image4}
          />
          {/* project 5 */}
          <ProjectFiveForm
            handleChange={this.handleChange}
            image5={this.state.image5}
          />
          {/* project 6 */}
          <ProjectSixForm
            handleChange={this.handleChange}
            image6={this.state.image6}
          />
          {/* project 7 */}
          <ProjectSevenForm
            handleChange={this.handleChange}
            image7={this.state.image7}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
