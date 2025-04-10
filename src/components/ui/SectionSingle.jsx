import React from 'react';
import { Section } from "./Section";

export function SectionSingle({ name, data }) {
  return (
    <Section title={name}>
	  <div className="section--content section--content-single-textarea">
	  <div
	    dangerouslySetInnerHTML={{ __html: data }}	  />		  
	  </div>
    </Section>
  );
}