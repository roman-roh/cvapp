import React from 'react';
import { Template } from "./standart/Template"; 
import { StudentTemplate } from "./studentjob/Template"; 

import { useCVData } from "./../../../providers/CVDataContext"; 

export default function TemplateSelector( { name }) { 
  const { data } = useCVData();

    return (
	<>
	 {name === "standart" &&  <Template data={data} />}
	 {name === "studentjob" && <StudentTemplate data={data} />}
	</>  
);
}

