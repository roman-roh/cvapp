import React from 'react';
import { Section } from "./Section";
import { usePhoto } from './../../../../providers/PhotoContext';
import { useTranslation } from 'react-i18next';

import { SectionGroup } from "./SectionGroup";
import { SectionList } from "./SectionList";
import { SectionText } from "./SectionText";

export function Template({ data }) { 
  const { photo } = usePhoto();
  const { t } = useTranslation();

  return (
	<section className={'sections'}>	
			<div className="section--name has--avatar">	  						
		   	    {photo && (
		             <img
		               src={photo}
		               alt="Preview"
		               className="section--avatar object-cover rounded-full border mx-auto"
		             />
		        )}
		   		
		     	<h1>{t('title.main')}</h1>
		     </div>
		 <SectionList name={t('title.personal')} data={data.personal} />
		 {data.resume.replace(/<[^>]*>/g, '').length > 0 && <SectionText name={t('title.resume')} data={data.resume} />}
		 {data.education.length > 0 && <SectionGroup name={t('title.education')} data={data.education} />}
		 {data.experience.length > 0 && <SectionGroup name={t('title.experience')} data={data.experience} />}
		 {data.skills.length > 0 && <SectionList name={t('title.skills')} data={data.skills} />}
		 {data.interests.replace(/<[^>]*>/g, '').length > 0 && <SectionText name={t('title.interests')} data={data.interests} />}
		 {data.languages.length > 0 && <SectionList name={t('title.languages')} data={data.languages} />}	
	 </section>
  );
}

