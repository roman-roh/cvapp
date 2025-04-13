import React, { useState } from "react";
import { Section } from "./Section";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";

export default function SectionListEditor({title, name, data, select_option, onChange, onDeleted, onAdd}) {
	return (	
	  <Section name={name} onAdd={onAdd} title={title}>	 
	    <ol className="section--list">
	      {Object.entries(data).map((item, idx) => (<React.Fragment key={idx}>
	        {item && 
			  <li className="">
			  <div className="">
	              <div className="">
					  <Input name={name + '.' + idx + '.label'}
						  placeholder={title} 
						  value={ item[1].label || ""} 
						  onChange={onChange} />
					  
					  <Select
					    name={name + '.' + idx + '.value'}
						value={ item[1].value || ""} 
					    onChange={onChange}
					    placeholder="Select level"
					    options={select_option}
					  />
					  <Button name={name + "." + idx } className="" onClick={onDeleted}>
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
				       </Button>
					  
	              </div>	        
	          </div>
	        </li>
		    }</React.Fragment>
		    
	      ))}
	    </ol>
	  </Section>
	);
}