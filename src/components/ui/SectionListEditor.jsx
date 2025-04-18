import React from "react";
import { Section } from "./Section";
import { Select } from "./Select";
import { Button } from "./Button/Button";
import { ItemCombobox } from "./ItemCombobox";
import { useCVData } from "./../../providers/CVDataContext"; 
import { useSelectData } from "./../../providers/CVSelectDataContext"; 

export default function SectionListEditor({title, name, select_option}) {
	const { onDeleteCategory, data } = useCVData();
	const { getSelectData } = useSelectData();

		return (	
	  <Section name={name} title={title}>	 
	    <ol className="section--list">
	      {Object.entries(data[name]).map((item, idx) => (
			<React.Fragment key={idx}>
	        {item && 
			  <li>
			  
			  <div className="flex ">
			    <div className="flex-1 p-1">			  
					<ItemCombobox className="flex-1" name={name + '.' + idx + '.label'} value={ item[1].label } options={ getSelectData( name )} />
				</div>
			    <div className="flex-1 p-1">
					<Select
					    name={name + '.' + idx + '.value'}
						value={ item[1].value || ""} 
					    placeholder="Select level"
					    options={ getSelectData('select_' +  name ) }
					  />
				</div>
			    <div className="w-40 p-2">				
					<Button name={name + "." + idx }  onClick={onDeleteCategory}>
	  	  		         <div >
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
		    </li>
		    }</React.Fragment>		    
	      ))}
	    </ol>
	  </Section>
	);
}