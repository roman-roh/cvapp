import React, { useRef, useState } from 'react';
import {useReactToPrint} from "react-to-print";
import { useTranslation } from 'react-i18next';

import { Button } from "./ui/Button/Button";
import { Select } from "./ui/Select";

import Window from "./../components/ui/Window";
import TemplateSelector  from "./../components/ui/template/TemplateSelector.jsx";


export function CVPreview({}) {
  const { t } = useTranslation();

  const previewRef = useRef();
  const handlePrint = useReactToPrint({
	documentTitle: 'cv',
	contentRef: previewRef,
  });    

  const [nameTemplate, setNameTemplate] = useState('standart'); 
  
  return (	
	<>	

		<Window >					
		    <div>
				<Select
				    name="template"
					className={'no-drag'}
					value={nameTemplate}
				    onChange={(e)=>{
						setNameTemplate(e.target.value);					
					}}
				    options={[{"value": "standart", "label": t('Standard')},{"value": 'studentjob', "label" : t('Student')}]}
				  />
				  <Button onClick={handlePrint}>{t('button.print')} </Button>
			 </div>
			
		    <div className='cvform' ref={previewRef}>					
			  <TemplateSelector name={nameTemplate} />
			</div>
		</Window>
	</>
  );
}



