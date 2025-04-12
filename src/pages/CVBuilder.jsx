import React, { useState } from 'react';

import Card from './../components/ui/Card';
import CardContent from '../components/ui/CardContent';

import { useCVData } from '../hooks/useCVData';
import CVForm from '../components/CVForm';

import { CVPreview } from "./../components/CVPreview";

import { initialCvData } from "./../components/ui/initialCvData";

//import root  from 'react-shadow';

import "./styles.css";



export default function CVBuilder() {
  const { cvdata, handleInputChange, handleQuillChange, onDeleted, onAdd} = useCVData()
   
    return (	
    <>
		<CVPreview data={cvdata} />
		<Card className="shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">CV Builder</h1>
          <CVForm cvdata={cvdata} handleInputChange={handleInputChange} handleQuillChange={handleQuillChange} onDeleted={onDeleted} onAdd={onAdd}/>
        </CardContent>
      </Card>

    </>


  );
}
