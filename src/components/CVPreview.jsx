import React, { useRef, useState } from 'react';
import {useReactToPrint} from "react-to-print";

import { SectionGroup } from "./ui/SectionGroup";
import { SectionList } from "./ui/SectionList";
import { SectionText } from "./ui/SectionText";
import { Button } from "./ui/Button/Button";

import Window from "./../components/ui/Window";

import { useCVData } from "./../providers/CVDataContext"; 
import { usePhoto } from './../providers/PhotoContext';

import { useTranslation } from 'react-i18next';


export function CVPreview() {
	
  const { data } = useCVData();
  const previewRef = useRef();
 // provider 
  const handlePrint = useReactToPrint({
	documentTitle: 'cv',
	contentRef: previewRef,
  });  
  
  const { t } = useTranslation();

  const { photo} = usePhoto();

  return (	
	< >	
		<Window >					
		    <Button onClick={handlePrint}>{t('button.print')} </Button>	
		    <div className='cvform' ref={previewRef}>			
			
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
			</div>
		</Window>
	</>
  );
}



