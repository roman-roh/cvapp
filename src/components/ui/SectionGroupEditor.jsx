import React, { useState } from "react";
import { Section } from "./Section";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button/Button";
import SectionTextEditor from "./SectionTextEditor"

import { useCVData } from "./../../providers/CVDataContext"; 
import { useSelectData } from "./../../providers/CVSelectDataContext"; 


export default function SectionGroupEditor({title, name, data, select_option}) {
	const { handleChange, handleInputChange, onAdd, onDeleteCategory} = useCVData();
	const { getSelectData } = useSelectData();

	const [activeFormId, setActiveFormId] = useState(Object.entries(data) - 1); 
	
	let years = Array.from({ length: 71 }, (_, i) => { 
		return {value: new Date().getFullYear() - i}
	});

	return (	
	  <Section name={name} onAdd={onAdd} title={title}>	 
	    <ol className="section--list">
	      {Object.entries(data).map((item, idx) => (<React.Fragment key={idx}>
	        {item && 
			  <li className={`px-4 rounded ${
				  activeFormId === idx ? 'bg-gray-100 ' : ''
				}`}> 
			  <div className="flex gap-2">
			    <div className="flex-1  p-4 rounded">			 
					<Input name={name + '.' + idx + '.heading'}
				    placeholder="Heading" 
				    value={ item[1].heading } 
				    onChange={handleInputChange} />
				</div>
			    <div className="flex-3 p-4 rounded">				
					<button
				           key={idx}
				           onClick={() => setActiveFormId(idx)}
				           className={`px-4 py-2 rounded ${
				             activeFormId === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'
				           }`}
				         >
						 <svg
						   xmlns="http://www.w3.org/2000/svg"
						   width="16"
						   height="16"
						   fill="currentColor"
						   viewBox="0 0 20 20"
						   aria-hidden="true"
						 >
						   <path d="M17.414 2.586a2 2 0 00-2.828 0L7.05 10.122a.5.5 0 00-.121.196l-2 6a.5.5 0 00.605.605l6-2a.5.5 0 00.196-.12l7.536-7.536a2 2 0 000-2.828zM15.793 4.207L13.793 2.207l1-1a1 1 0 011.414 1.414l-1 1zm-3 3L15.793 7.207l-7.086 7.086-2.586.862.862-2.586 7.086-7.086z"/>
						 </svg>
			         </button></div>
			    <div className="flex-3 p-4 rounded">				
					<Button name={name + "." + idx }  onClick={onDeleteCategory}>
			           <div className="">
			             <svg
			               stroke="currentColor"
			               fill="currentColor"
			               viewBox="0 0 24 24"
			               className="svg--delete"
			               height="1em"
			               width="1em"
			               xmlns="http://www.w3.org/2000/svg"
			             >
			               <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
			             </svg>
			           </div>					         
			        </Button></div>
			  </div>
				  {activeFormId === idx && <div>
					  <div className="grid grid-cols-2 gap-4">
						<div className="grid grid-cols-2 gap-4">
						     <Select
							    name={name + '.' + idx + '.date_start_month'}
								value={ item[1].date_start_month || ""} 
							    onChange={handleInputChange}
							    placeholder="-"
							    options={getSelectData('select_month')}
							  />
							  <Select
						  	    name={name + '.' + idx + '.date_start_year'}
						  		value={ item[1].date_start_year || ""} 
						  	    onChange={handleInputChange}
						  	    placeholder="-"
						  	    options={years}
						  	  />			
						</div>
						<div className="grid grid-cols-2 gap-4">		
						   <Select
				  		    name={name + '.' + idx + '.date_end_month'}
				  			value={ item[1].date_end_month || ""} 
				  		    onChange={handleInputChange}
				  		    placeholder="-"
				  		    options={getSelectData('select_month')}
				  		  />				  
						  <Select
			    		    name={name + '.' + idx + '.date_end_year'}
			    			value={ item[1].date_end_year || ""} 
			    		    onChange={handleInputChange}
			    		    placeholder="-"
			    		    options={years}
			    		  />
						</div>
			
				  </div>
				
				  <Input name={name + '.' + idx + '.subheading'}
				  	  placeholder="Subheading" 
				  	  value={ item[1].subheading } 
				  	  onChange={handleInputChange} />
					  
	     		  <SectionTextEditor name={name} value={item[1].content} onChange={(value)=> (handleChange(name + '.' + idx + '.content')(value))}  />
			  </div>}
	        </li>
		    }</React.Fragment>
		    
	      ))}
	    </ol>
	  </Section>
	);
}
