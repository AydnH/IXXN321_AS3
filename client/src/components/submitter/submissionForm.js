import React from "react";

import Uploader from './formComponents/uploader';
import DisplayImage  from './formComponents/displayImage';

export default class SubmitForm extends React.Component {


  render() {
    return (
      <div className="submissionFormMaster">
          <Uploader />
          <hr/>
          {/* <DisplayImage /> */}
      </div>
    );
  }
}
