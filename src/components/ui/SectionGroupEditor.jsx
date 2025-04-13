import React, { useState } from "react";
import { Section } from "./Section";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import SectionTextEditor from "./SectionTextEditor"

export default function SectionGroupEditor({title, name, data, select_option, onChange, onDeleted, onAdd, handleQuillChange}) {

	let years = Array.from({ length: 71 }, (_, i) => { 
		return {value: new Date().getFullYear() - i}
	});
	return (	
	  <Section name={name} onAdd={onAdd} title={title}>	 
	    <ol className="section--list">
	      {Object.entries(data).map((item, idx) => (<React.Fragment key={idx}>
	        {item && 
			  <li className="">
			  <div className="form__fields-group">
			    <div className="form-element col-2" name="position-work.items[1].function">
			      <div style={{ position: "relative" }}>
			
					<Input name={name + '.' + idx + '.heading'}
					  placeholder={title} 
					  value={ item[1].heading || ""} 
					  onChange={onChange} />
					</div>
			    </div>
		
			  </div>


			  <div className="form__fields-group col-2">
			    <div className="form-element col-2" name="position-work.items[1].startMonth">
			      <label>Start Date</label>
				  <Select
		  		    name={name + '.' + idx + '.date_start_month'}
		  			value={ item[1].date_start_month || ""} 
		  		    onChange={onChange}
		  		    placeholder="Select month"
		  		    options={select_option}
		  		  />				  
				  <Select
	    		    name={name + '.' + idx + '.date_start_year'}
	    			value={ item[1].date_start_year || ""} 
	    		    onChange={onChange}
	    		    placeholder="Select year"
	    		    options={years}
	    		  />
			    </div>
			  </div>

			  <div className="form__fields-group col-2">
			    <div className="form-element col-2" name="position-work.items[1].endMonth">
			      <label>End Date</label>
				  <Select
  		  		    name={name + '.' + idx + '.date_end_month'}
  		  			value={ item[1].date_end_month || ""} 
  		  		    onChange={onChange}
  		  		    placeholder="Select month"
  		  		    options={select_option}
  		  		  />				  
  				  <Select
  	    		    name={name + '.' + idx + '.date_end_year'}
  	    			value={ item[1].date_end_year || ""} 
  	    		    onChange={onChange}
  	    		    placeholder="Select year"
  	    		    options={years}
  	    		  />
			    </div>
     			<SectionTextEditor name={name} value={item[1].content} onChange={(e) => { handleQuillChange(name + '.' . idx + '.content' )}}  />

			  </div>

			  <div className="form__fields-group form__fields-group--buttons">
			    <button className="button--white button--delete-section-item">
			      <div className="icon--delete">
			        <i className="svg--delete"></i> Delete
			      </div>
			    </button>
			  </div>
	        </li>
		    }</React.Fragment>
		    
	      ))}
	    </ol>
	  </Section>
	);
}
