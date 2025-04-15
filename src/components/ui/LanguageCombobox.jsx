import { Combobox } from '@headlessui/react'
import { useState } from 'react'

import { useCVData } from "./../../providers/CVDataContext"; 

import languages from './../../language/languageList.json';


export function LanguageCombobox({value, name, className = ''}) {
  const {handleChange, handleInputChange} = useCVData();
	
  const languageList = Object.entries(languages); 	 
  const [query, setQuery] = useState('')

  const filteredLanguages =
    query === ''
      ? languageList
      : languageList.filter((lang) =>
		 {
			return lang[1].toLowerCase().includes(query.toLowerCase())}
        )

		  return (
    <div className="${className}"> 
      <Combobox value={value} onChange={(value)=>{handleChange(name)(value);}}>
        <div className="relative">
          <Combobox.Input
            className="m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all "
            onChange={(e)=>{ setQuery(e.target.value); handleInputChange(e)}}
			name={name}
            displayValue={(lang) => lang}
            placeholder="Search or type ..."
          />
		  <Combobox.Options className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
		       {filteredLanguages.length > 0 ? (
		         filteredLanguages.map((lang, i) => (
		           <Combobox.Option
		             key={i}
		             value={lang[1]}
		             className={({ active }) =>
		               `cursor-pointer px-4 py-2 ${
		                 active ? 'bg-blue-100 text-blue-900' : ''
		               }`
		             }
		           >
		             {lang[1]}
		           </Combobox.Option>
		         ))
		       ) : (
		         <div className="px-4 py-2 text-gray-500">Nothing found.</div>
		       )}
		     </Combobox.Options>
        </div>
      </Combobox>

    </div>
  )
}
