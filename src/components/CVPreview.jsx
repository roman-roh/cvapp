import React, { useRef, useState } from 'react';
import {useReactToPrint} from "react-to-print";
import { useTranslation } from 'react-i18next';

import { Button } from "./ui/Button/Button";

import Window from "./../components/ui/Window";
import TemplateSelector  from "./../components/ui/template/TemplateSelector.jsx";


export function CVPreview() {
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
		    <Button onClick={handlePrint}>{t('button.print')} </Button>	
			<Button onClick={(e) => {
				setNameTemplate((Math.random() < 0.5 ? 'standart' : 'studentjob'));	
			}}>Change Template </Button>	

		    <div className='cvform' ref={previewRef}>					
			  <TemplateSelector name={nameTemplate} />
			</div>
		</Window>
	</>
  );
}



