import React,  { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import SectionGroupEditor from './ui/SectionGroupEditor';
import SectionTextEditor from './ui/SectionTextEditor';
import SectionListEditor from './ui/SectionListEditor';
import MultiStepForm from './ui/MultiStepForm';
import { Photo } from './ui/Photo';

import { useCVData } from "./../providers/CVDataContext"; 

import { useTranslation } from 'react-i18next';

export default function CVForm() {
	
	const { data,  handleInputChange, handleChange, onDeleted, onAdd } = useCVData();
	
	const { t } = useTranslation();
	const [notificationsEnabled, setNotificationsEnabled] = useState(true);

	return (	
	<MultiStepForm>	
	<div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6">
	      <Photo />
		  
	      <div className="md:col-span-2 space-y-4">	      
		    <Input name="personal.firstname.value" placeholder={t(data.personal.firstname.label)} value={data.personal.firstname.value || ""} onChange={handleInputChange} />
			<div className="flex w-full gap-4">
				<div className="flex-3 basis-3/4  ">
					<Input  className={data.personal.lastname.upper_case ? "uppercase" : "normal-case"} name="personal.lastname.value" placeholder={t(data.personal.lastname.label)} value={data.personal.lastname.value || ""} 
					onChange={handleInputChange} />
				</div>
				<div className="flex-1 basis-1/4">	
					<Input name="personal.lastname.upper_case" value={data.personal.lastname.upper_case} 
					onClick={(e)=>{handleChange("personal.lastname.upper_case")(!data.personal.lastname.upper_case)}} 
					type="checkbox" className="w-6 h-10 rounded-full"/>			
				</div>

			</div>
	
			
			<Input name="personal.address.value" placeholder={t(data.personal.address.label)} value={data.personal.address.value} onChange={handleInputChange} />
		    <Input name="personal.phone.value" placeholder={t(data.personal.phone.label)} value={data.personal.phone.value} onChange={handleInputChange} />
		    <Input name="personal.email.value" placeholder={t(data.personal.email.label)} value={data.personal.email.value} onChange={handleInputChange} />

	        {/* Add more fields here */}
	      </div>
	    </div>
	  <div className="">
	  	<h2>{t('title.resume')}</h2>
	  <SectionTextEditor name="resume" value={data.resume} onChange={handleChange('resume')}  />
	  </div>   
	  
	  <div className="">
		  <SectionGroupEditor title={t('title.education')} 
		  name="education" 
		  data={data.education} 
		  select_option={data.month_select_option}
		  />
  	  </div> 
	  
	  <div className="">
		  <SectionGroupEditor title={t('title.experience')} name="experience" data={data.experience} 
		  select_option={data.month_select_option} 
		    />		
	  </div>   
	  
	  
	  <div className="">
		<SectionListEditor 
		    title={t('title.skills')} 
		    name="skills"
			select_option={data.skills_select_option} 
			handleChange={handleChange}
		  />		
	  </div>   
	  
	  <div className="">
	  	<SectionListEditor 
			title={t('title.languages')} 
			name="languages"
			select_option={data.languages_select_option} 
		 />	
	   </div>  
	  
	  <div className="">
	  	<h2>{t('title.interests')}</h2>
	  	<SectionTextEditor name="interests" value={data.interests} onChange={handleChange('interests')}  />
	  </div>   
	
    </MultiStepForm>
  );
}