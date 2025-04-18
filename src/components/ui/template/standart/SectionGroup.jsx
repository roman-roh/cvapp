import React from 'react';

import { Section } from "./Section";

export function SectionGroup({ name, data }) {
 const getShortMonthName = (fullMonthName) => {
	const date = new Date(`${fullMonthName} 1, 2023`);
	
	return date.toLocaleString('default', { month: 'short' });
  };

    return (
    <Section title={name}>
      <ol className="section--list">
        {data.map((item, idx) => (
			<li key={idx} className="section--item">
                <div className="section--heading-group">
                     <div className="section--date">
					 		{item.date_start_month && getShortMonthName(item.date_start_month)} {item.date_start_year && item.date_start_year + ' -'}  {item.date_end_month && getShortMonthName(item.date_end_month)} {item.date_end_year && item.date_end_year}
					 </div>
					 <div className="section--heading">
                         <h3>{item.heading}</h3>
                     </div>
					{item.subheading && <div className="section--sub-heading">{item.subheading}</div>}
					{item.content && 					
						<div dangerouslySetInnerHTML={{ __html: item.content }}	  />		  
				    }
                </div>
            </li>
        ))}
      </ol>
    </Section>
  );
}