import React from 'react';

import { Section } from "./Section";

export function SectionComplexList({ name, data }) {
  return (
    <Section title={name}>
      <ol>
        {data.map((item, idx) => (
			<li key={idx} className="section--item">
                <div className="section--heading-group">
                    {item.date && <div className="section--date">{item.date}</div>}
					{item.subheading && <div className="section--sub-heading">{item.subheading}</div>}
					{item.content && <p className="section--sub-heading">{item.content}</p>}
                </div>
            </li>
        ))}
      </ol>
    </Section>
  );
}
    