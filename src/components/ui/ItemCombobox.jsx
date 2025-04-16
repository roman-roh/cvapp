import { Combobox } from '@headlessui/react'
import { useState } from 'react'

import { useCVData } from "./../../providers/CVDataContext"; 

//import languages from './../../data/languageList.json';

//import skills from './../../data/skills.json';


export function ItemCombobox({value, name, className = '', options = []}) {
  const {handleChange, handleInputChange} = useCVData();
	
  //const languageList = Object.entries(languages); 	 
  const [query, setQuery] = useState('')

  const filteredOptions =
    query === ''
      ? options
      : options.filter((item) =>
		 {
			return item.value.toLowerCase().includes(query.toLowerCase())
		 }
        );
		console.log(filteredOptions);
		
	  return (
    <div className="${className}"> 
      <Combobox value={value} onChange={(value)=>{handleChange(name)(value);}}>
        <div className="relative">
          <Combobox.Input
            className="m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all "
            onChange={(e)=>{ setQuery(e.target.value); handleInputChange(e)}}
			name={name}
            displayValue={(item) => item}
            placeholder="Search or type ..."
          />
		  {options.length > 0 && <Combobox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
		       {filteredOptions.length > 0 ? (
		         filteredOptions.map((item, i) => (
		           <Combobox.Option
		             key={i}
		             value={item.value}
		             className={({ active }) =>
		               `cursor-pointer px-4 py-2 ${
		                 active ? 'bg-blue-100 text-blue-900' : ''
		               }`
		             }
		           >
		             {item.value}
		           </Combobox.Option>
		         ))
		       ) : (
		         <div className="px-4 py-2 text-gray-500">Nothing found.</div>
		       )}
		     </Combobox.Options>}
        </div>
      </Combobox>

    </div>
  )
}
