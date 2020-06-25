import React from "react";
import ProjectUpload1 from "../ProjectUpload/ProjectUpload1";
import ProjectUpload2 from "../ProjectUpload/ProjectUpload2";
import ProjectUpload3 from "../ProjectUpload/ProjectUpload3";

export default class projectUploaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: "1" };
    this.handleClick = this.handleClick.bind(this);
    this.templateButtons = (<div className="container selectContainer">
      <button
        className="prof-buttons layoutButtons"
        value="1"
        onClick={this.handleClick}
      >
        Layout One
      </button>
      <button
        className="prof-buttons layoutButtons"
        value="2"
        onClick={this.handleClick}
      >
        Layout Two
      </button>
      <button
        className="prof-buttons layoutButtons"
        value="3"
        onClick={this.handleClick}
      >
        Layout Three
      </button>
    </div>)
    const data = [this.state];
    console.log(data);
  }


  handleClick = (e) => {
    this.setState({
      mounted: e.target.value,
    });
  };

  buttons = () => {};
  OnShow = () => {
    switch (this.state.mounted) {
      case "1":
        return <div>{this.templateButtons}<ProjectUpload1 /></div>;
      case "2":
        return <div>{this.templateButtons}<ProjectUpload2 /></div>;
      case "3":
        return <div>{this.templateButtons}<ProjectUpload3 /></div>;
      default:
        return (
          <div className="container">
            <button
              className="prof-buttons"
              value="1"
              onClick={this.handleClick}
            >
              Layout One
            </button>
            <button
              className="prof-buttons"
              value="2"
              onClick={this.handleClick}
            >
              Layout Two
            </button>
            <button
              className="prof-buttons"
              value="3"
              onClick={this.handleClick}
            >
              Layout Three
            </button>
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        <this.OnShow />
        <div>
          <button className="prof-buttons" onClick={this.handleSend}>
            Save
          </button>
        </div>
      </div>
    );
  }
}
