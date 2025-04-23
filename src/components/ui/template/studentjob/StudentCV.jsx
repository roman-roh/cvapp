import React from "react";
import "./style.css";

import { DescriptionText } from "./../../DescriptionText/DescriptionText";
import { LabelValueList } from './LabelValueList/LabelValueList'
import { SectionGroup } from './LabelValueList/SectionGroup'

const StudentCV = ({data}) => {
  return (
    <div className="cv">
      <div className="header">
        <h1>{data.personal.firstname.value}</h1>
        <h2>{data.personal.lastname.value}</h2>
        <div className="job-title">RECHERCHÉ JOB ÉTUDIANT</div>
      </div>

      <div className="left-section">
        <div className="box">
          <h3>CONTACT</h3>
          <p>📞 {data.personal.phone.value}</p>
          <p>📍 {data.personal.address.value}</p>
          <p>📧 {data.personal.email.value}</p>
        </div>

        <div className="box">
          <h3>MON PROFIL</h3>
		  	<DescriptionText data={data.resume} />
        </div>

        <div className="box">
          <h3>LOGICIELS</h3>
		  <LabelValueList items={data.skills} checkmark={true} />

        </div>

        <div className="box">
          <h3>LANGUES</h3>
		  <LabelValueList items={data.languages}/>
        </div>
      </div>

      <div className="right-section">
        <div className="box">
		<h3>EXPERIENCE</h3>

		  <SectionGroup data={data.experience}/>
		
        </div>

        <div className="box">
          <h3>FORMATION</h3>
		  <SectionGroup data={data.education}/>
        </div>
      </div>
    </div>
  );
};

export default StudentCV;
