import React,  { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import SectionGroupEditor from './ui/SectionGroupEditor';
import SectionTextEditor from './ui/SectionTextEditor';
import SectionListEditor from './ui/SectionListEditor';

import MultiStepForm from './ui/MultiStepForm';


import { useCVData } from "./../providers/CVDataContext"; 

import { useTranslation } from 'react-i18next';
import { Camera, Trash2 } from "lucide-react"; // optional icon library
import { usePhoto } from './../providers/PhotoContext';

export default function CVForm() {
	const { data,  handleInputChange, handleQuillChange, onDeleted, onAdd } = useCVData();
	
	const { t } = useTranslation();
	
	const { photo, handleChange, handleRemove} = usePhoto();
	
	return (	
	<MultiStepForm>	
	<div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-6">
	      
	      {/* Photo section */}
	      <div className="flex flex-col items-center">
	        <label
	          htmlFor="photo-upload"
	          className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition relative overflow-hidden"
	        >
	          {photo ? (
	            <img
	              src={photo}
	              alt="Preview"
	              className="w-full h-full object-cover"
	            />
	          ) : (
	            <>
	              <Camera className="w-8 h-8 text-gray-400" />
	              <span className="mt-2 text-sm text-gray-500 text-center">
	                Add photo<br />(optional)
	              </span>
	            </>
	          )}
	          <input
	            id="photo-upload"
	            type="file"
	            accept="image/*"
	            onChange={handleChange}
	            className="hidden"
	          />
	        </label>

	        {photo && (
	          <button
	            onClick={handleRemove}
	            className="mt-2 text-sm text-red-500 hover:underline flex items-center gap-1"
	          >
	            <Trash2 className="w-4 h-4" />
	            Remove
	          </button>
	        )}
	      </div>

	      {/* Form section */}
	      <div className="md:col-span-2 space-y-4">	      
		    <Input name="personal.firstname.value" placeholder={t(data.personal.firstname.label)} value={data.personal.firstname.value || ""} onChange={handleInputChange} />
			<Input className="uppercase" name="personal.lastname.value" placeholder={t(data.personal.lastname.label)} value={data.personal.lastname.value || ""} 
			onChange={handleInputChange} />

		    <Input name="personal.phone.value" placeholder={t(data.personal.phone.label)} value={data.personal.phone.value} onChange={handleInputChange} />
		    <Input name="personal.email.value" placeholder={t(data.personal.email.label)} value={data.personal.email.value} onChange={handleInputChange} />
			<Input name="personal.address.value" placeholder={t(data.personal.address.label)} value={data.personal.address.value} onChange={handleInputChange} />

	        {/* Add more fields here */}
	      </div>
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