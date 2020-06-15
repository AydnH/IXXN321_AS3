import React from "react";

export default class ProfessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profession: "",
    };
    this.professionOnChange = this.professionOnChange.bind(this);
  }
  professionOnChange(event) {
    this.setState({
      profession: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-group">
        <div className="text-submission">
          <select
            type="text"
            name="profession"
            value={this.props.profession}
            onChange={this.props.handleChange}
            placeholder="Profession"
          >
            <option value="Industrial">Industrial</option>
            <option value="Media">Media</option>
            <option value="Communicaton">Communicaton</option>
            <option value="UserExperience">User Experience</option>
            <option value="SocialInnovation">Social Innovation</option>
          </select>
        </div>
      </div>
    );
  }
}
