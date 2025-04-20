import React from 'react';
import { Section } from "./Section";

import { useTranslation } from 'react-i18next';

export function SectionList({ name, data }) {
  const { t } = useTranslation();

  return (
    <Section title={name}>
      <ol className="section--list">
        {Object.entries(data).map((item, idx) => (
           ( (item[1].hide_empty_value === true && item[1].value) || item[1].hide_empty_value !== true)  ? <li key={idx} className="section--item">
			  <div className="section--heading-group">
	              <div className="section--date">
				      {t(item[1].label)}
	              </div>
	              <div className="section--heading">
	                  <h3>
	                      {item[1].value}
	                  </h3>
	              </div>
	          </div>
          </li> : ''
		  
        ))}
      </ol>
	  
    </Section>
  );
}
