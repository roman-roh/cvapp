import React from 'react';
import { Section } from "./Section";

export function SectionList({ name, data }) {
  return (
    <Section title={name}>
      <ol className="section--list">
        {Object.entries(data).map((item, idx) => (
          <li key={idx} className="section--item">
			  <div className="section--heading-group">
	              <div className="section--date">
	                  {item[1].label}
	              </div>
	              <div className="section--heading">
	                  <h3>
	                      {item[1].value} 
	                  </h3>
	              </div>
	          </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
