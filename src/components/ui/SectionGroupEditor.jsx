import React, { useState } from "react";
import { Section } from "./Section";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
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
	console.log(name);
	return (	
	  <Section name={name} onAdd={onAdd} title={title}>	 
	    <ol className="section--list">
	      {Object.entries(data).map((item, idx) => (<React.Fragment key={idx}>
	        {item && 
			  <li className={`px-4 py-2 rounded ${
				  activeFormId === idx ? 'bg-gray-100 ' : ''
				}`}> 
			  <div className="flex gap-4">
			    <div className="flex-[3]  p-4 rounded">			 
					<Input name={name + '.' + idx + '.heading'}
				    placeholder="Heading" 
				    value={ item[1].heading } 
				    onChange={handleInputChange} />
				</div>
			    <div className="flex-[1] p-4 rounded">				
					<button
				           key={idx}
				           onClick={() => setActiveFormId(idx)}
				           className={`px-4 py-2 rounded ${
				             activeFormId === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'
				           }`}
				         >
				           Edit
			         </button></div>
			    <div className="flex-[1] p-4 rounded">				
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
				  {activeFormId == idx && <div>
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
