import { Combobox } from '@headlessui/react'
import { useState } from 'react'

import { useCVData } from "./../../providers/CVDataContext"; 

export function ItemCombobox({value, name, className = '', options = [], placeholder = 'Search or type ...', afterChange=(value)=>{}}) {
  const {handleChange, handleInputChange} = useCVData();
  const [query, setQuery] = useState('')

    const filteredOptions =
    query === ''
      ? options
      : options.filter((item) =>
		 {
			return item.value.toLowerCase().includes(query.toLowerCase())
		 }
        );
		
	  return (
    <div> 
      <Combobox value={value} onChange={(item)=>{handleChange(name)(item?.value); if(item?.context){afterChange(item?.context)}}}>
        <div className="relative">
          <Combobox.Input
            className={`m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all ${className}`}
            onChange={(e)=>{ setQuery(e.target.value); handleInputChange(e);}}
			name={name}
            displayValue={(item) => {return item || "";}}
            placeholder={placeholder}
          />
		  {options.length > 0 && <Combobox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 ">
		       {filteredOptions.length > 0 ? (
		         filteredOptions.map((item, i) => (
		           <Combobox.Option
		             key={i}
		             value={item}
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
