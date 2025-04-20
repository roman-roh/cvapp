import React from 'react';
import { usePhoto } from './../../../../providers/PhotoContext';
import { useTranslation } from 'react-i18next';


import CristinaCV from "./CristinaCV";


export function StudentTemplate({ data }) { 
  const { photo } = usePhoto();
  const { t } = useTranslation();
  
  
  return (
	<section className={'sections'}>	
		<CristinaCV data={data} />
	 </section>
  );
}
