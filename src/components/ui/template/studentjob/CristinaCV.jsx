import React from "react";
import "./style.css";

import { DescriptionText } from "./../../DescriptionText/DescriptionText";
import { LabelValueList } from './LabelValueList/LabelValueList'
const CristinaCV = ({data}) => {
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
          <p><strong>AUBANGE (ATHUS), Belgique</strong></p>
          <ul>
            <li>Expérience dans les tâches ménagères</li>
            <li>Babysitting</li>
            <li>À l’aise avec les ordinateurs</li>
            <li>Fiable, responsable et prête à apprendre</li>
            <li>Expérience à l'école en cuisine et informatique</li>
            <li>Prépare des gâteaux et plats principaux</li>
          </ul>
        </div>

        <div className="box">
          <h3>FORMATION</h3>
          <ul>
            <li><strong>Athénée Royal Athus</strong>, Aubange, Belgique (2021–2024)</li>
            <li><strong>Ecole Päesch</strong>, Rodange, Luxembourg (2021)</li>
            <li><strong>Ecole Josep James</strong>, Barcelone, Espagne (jusqu’en 2021)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CristinaCV;
