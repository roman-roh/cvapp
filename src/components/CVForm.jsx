import React from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import SectionGroupEditor from './ui/SectionGroupEditor';
import SectionTextEditor from './ui/SectionTextEditor';
import SectionListEditor from './ui/SectionListEditor';

import MultiStepForm from './ui/MultiStepForm';


import { useCVData } from "./../providers/CVDataContext"; 

import { useTranslation } from 'react-i18next';


export default function CVForm() {
	const { data,  handleInputChange, handleQuillChange, onDeleted, onAdd } = useCVData();
	
	const { t } = useTranslation();

	return (	
	<MultiStepForm>	
	  <div className="">
		  <h2>{t('title.personal')}</h2>
	      <Input name="personal.name.value" placeholder={t(data.personal.name.label)} value={data.personal.name.value || ""} onChange={handleInputChange} />
		  <Input name="personal.address.value" placeholder={t(data.personal.address.label)} value={data.personal.address.value} onChange={handleInputChange} />
		  <Input name="personal.phone.value" placeholder={t(data.personal.phone.label)} value={data.personal.phone.value} onChange={handleInputChange} />
		  <Input name="personal.email.value" placeholder={t(data.personal.email.label)} value={data.personal.email.value} onChange={handleInputChange} />
	  </div>   
	   
	  <div className="">
	  	<h2>{t('title.resume')}</h2>
	  <SectionTextEditor name="resume" value={data.resume} onChange={handleQuillChange('resume')}  />
	  </div>   
	  
	  <div className="">
		  <SectionGroupEditor title={t('title.education')} name="education" data={data.education} 
		  select_option={data.month_select_option} 
		  onChange={handleInputChange}
		  onDeleted={onDeleted}
		  onAdd={onAdd}
		  handleQuillChange= {handleQuillChange}/>		
	  </div> 
	  
	  <div className="">
		  <SectionGroupEditor title={t('title.experience')} name="experience" data={data.experience} 
		  select_option={data.month_select_option} 
		  onChange={handleInputChange}
		  onDeleted={onDeleted}
		  onAdd={onAdd}
		  handleQuillChange= {handleQuillChange}
		    />		
	  </div>   
	  
	  
	  <div className="">
		<SectionListEditor title={t('title.skills')} name="skills" data={data.skills} 
		select_option={data.skills_select_option} 
		onChange={handleInputChange}
		onDeleted={onDeleted}
		onAdd={onAdd}
		  />		
	  </div>   
	  
	  <div className="">
	  	<SectionListEditor 
		title={t('title.languages')} 
		name="languages" data={data.languages} 
		select_option={data.languages_select_option} 
		onChange={handleInputChange} 
		onDeleted={onDeleted}
		onAdd={onAdd}
		 />		
	   </div>  
	  
	  <div className="">
	  	<h2>{t('title.interests')}</h2>
	  	<SectionTextEditor name="interests" value={data.interests} onChange={handleQuillChange('interests')}  />
	  </div>   
	
    </MultiStepForm>
  );
}