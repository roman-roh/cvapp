import React from 'react';
import { usePhoto } from './../../../../providers/PhotoContext';
import { useTranslation } from 'react-i18next';


import StudentCV from "./StudentCV";


export function StudentTemplate({ data }) { 
  const { photo } = usePhoto();
  const { t } = useTranslation();
  
  
  return (
	<section className={'sections'}>	
		<StudentCV data={data} />
	 </section>
  );
}
