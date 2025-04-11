import React from 'react';

import { SectionGroup } from "./ui/SectionGroup";
import { SectionList } from "./ui/SectionList";
import { SectionText } from "./ui/SectionText";

export function CVPreview({ data }) {
  return (
    <div className="c--333333 custom-reset">
	   <section className="sections">
	      <div className="section--name">
		  	<h1>{data.title.main}</h1>
		  </div>	      
	      <SectionList name={data.title.personal} data={data.personal} />
		  <SectionText name={data.title.resume} data={data.resume} />
	      <SectionGroup name={data.title.education} data={data.education} />
	      <SectionGroup name={data.title.experience} data={data.experience} />
	      <SectionList name={data.title.skills} data={data.skills} />
	      <SectionText name={data.title.interests} data={data.interests} />
		  <SectionList name={data.title.languages} data={data.languages} />

	    </section>
	</div>
  );
}
