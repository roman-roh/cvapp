import React from 'react';
import { Template } from "./standart/Template"; 
import { useCVData } from "./../../../providers/CVDataContext"; 

export default function TemplateSelector() { 
  const { data } = useCVData();

  return (
	<Template data={data} />
  );
}

