import React, { useRef } from 'react';
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

  return (	
	<>	
		<Window >					
		    <Button onClick={handlePrint}>{t('button.print')} </Button>	
		    <div className='cvform' ref={previewRef}>					
			  <TemplateSelector />
			</div>
		</Window>
	</>
  );
}



