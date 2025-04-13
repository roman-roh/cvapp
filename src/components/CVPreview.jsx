import React, { useRef } from 'react';
import {useReactToPrint} from "react-to-print";

import { SectionGroup } from "./ui/SectionGroup";
import { SectionList } from "./ui/SectionList";
import { SectionText } from "./ui/SectionText";

import Window from "./../components/ui/Window";
import { useCVData } from "./../providers/CVDataContext"; 

import { useTranslation } from 'react-i18next';

export function CVPreview() {
	
  const { data } = useCVData();
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
	documentTitle: 'cv',
	contentRef: previewRef,
  });  
  
  const { t } = useTranslation();

  return (	
	<div >	
		<Window >					
		    <button onClick={handlePrint}>{t('button.print')} </button>	
		    <div className='cvform' ref={previewRef}>
			   <section className={'sections'}>
			      <div className="section--name">
				  	<h1>{t('title.main')}</h1>
				  </div>	      
			      <SectionList name={t('title.personal')} data={data.personal} />
				  <SectionText name={t('title.resume')} data={data.resume} />
			      <SectionGroup name={t('title.education')} data={data.education} />
			      <SectionGroup name={t('title.experience')} data={data.experience} />
			      <SectionList name={t('title.skills')} data={data.skills} />
			      <SectionText name={t('title.interests')} data={data.interests} />
				  <SectionList name={t('title.languages')} data={data.languages} />		
			    </section>
			</div>
		</Window>
	</div>
  );
}
