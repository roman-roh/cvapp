import React from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import SectionGroupEditor from './ui/SectionGroupEditor';
import SectionTextEditor from './ui/SectionTextEditor';
import SectionListEditor from './ui/SectionListEditor';


export default function CVForm({ cvdata, handleInputChange, handleQuillChange, onDeleted, onAdd }) {
	return (		
    <div className="">
	  <div className="section--title">
		<h2>{cvdata.title.personal}</h2>
	  </div>   
      <Input name="personal.name.value" placeholder={cvdata.personal.name.label} value={cvdata.personal.name.value || ""} onChange={handleInputChange} />
	  <Input name="personal.address.value" placeholder={cvdata.personal.address.label} value={cvdata.personal.address.value} onChange={handleInputChange} />
	  <Input name="personal.phone.value" placeholder={cvdata.personal.phone.label} value={cvdata.personal.phone.value} onChange={handleInputChange} />
	  <Input name="personal.email.value" placeholder={cvdata.personal.email.label} value={cvdata.personal.email.value} onChange={handleInputChange} />
	  
	  <div className="section--title">
	  <SectionGroupEditor title={cvdata.title.education} name="education" data={cvdata.education} 
	  select_option={cvdata.month_select_option} 
	  onChange={handleInputChange}
	  onDeleted={onDeleted}
	  onAdd={onAdd}
	  handleQuillChange= {handleQuillChange}

	    />		
	  </div> 
	  
	  <div className="section--title">
	  <SectionGroupEditor title={cvdata.title.experience} name="experience" data={cvdata.experience} 
	  select_option={cvdata.month_select_option} 
	  onChange={handleInputChange}
	  onDeleted={onDeleted}
	  onAdd={onAdd}
	  handleQuillChange= {handleQuillChange}
	    />		
	  </div>   
	  
	  
	  <div className="section--title">
		<SectionListEditor title={cvdata.title.skills} name="skills" data={cvdata.skills} 
		select_option={cvdata.skills_select_option} 
		onChange={handleInputChange}
		onDeleted={onDeleted}
		onAdd={onAdd}
		  />		
	  </div>   
	  
	  <div className="section--title">
	  	<SectionListEditor 
		title={cvdata.title.languages} 
		name="languages" data={cvdata.languages} 
		select_option={cvdata.languages_select_option} 
		onChange={handleInputChange} 
		onDeleted={onDeleted}
		onAdd={onAdd}
		 />		
	   </div>  

		 
	  <div className="section--title">
	  	<h2>{cvdata.title.resume}</h2>
		<SectionTextEditor name="resume" value={cvdata.resume} onChange={handleQuillChange('resume')}  />
	  </div>   
	  
	  <div className="section--title">
	  	<h2>{cvdata.title.interests}</h2>
	  	<SectionTextEditor name="interests" value={cvdata.interests} onChange={handleQuillChange('interests')}  />
	  </div>   
	  
     {/*  <Input name="experience" placeholder="Work Experience" value={cv.experience} onChange={handleChange} />
      <Input name="education" placeholder="Education" value={cv.education} onChange={handleChange} />
      <Input name="skills" placeholder="Skills" value={cv.skills} onChange={handleChange} />*/}
    </div>
  );
}