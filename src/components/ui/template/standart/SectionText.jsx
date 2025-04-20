import React from 'react';
import { Section } from "./Section";

import { DescriptionText } from "./../../DescriptionText/DescriptionText";


export function SectionText({ name, data }) {
  return (
    <Section title={name}>
	  <div className="section--content section--content-single-textarea">
	  	<DescriptionText data={data} />		  
	  </div>
    </Section>
  );
}