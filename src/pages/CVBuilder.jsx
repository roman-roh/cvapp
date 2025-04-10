import React, { useRef, useState } from 'react';
import {useReactToPrint} from "react-to-print";

import Card from './../components/ui/Card';
import CardContent from '../components/ui/CardContent';

import { useCVData } from '../hooks/useCVData';
import CVForm from '../components/CVForm';

import { CVPreview } from "./../components/CVPreview";

import { initialCvData } from "./../components/ui/initialCvData";

export default function CVBuilder() {
  const { cvdata, handleInputChange, handleQuillChange, onDeleted, onAdd} = useCVData();
  
  const previewRef = useRef();

  const handlePrint = useReactToPrint({
     documentTitle: 'Title',
     contentRef: previewRef,
  })

    return (
	
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Card className="shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">CV Builder</h1>
          <CVForm cvdata={cvdata} handleInputChange={handleInputChange} handleQuillChange={handleQuillChange} onDeleted={onDeleted} onAdd={onAdd}/>
        </CardContent>
      </Card>
	  <button onClick={handlePrint}>Print</button>

	  <div ref={previewRef}>
	      <CVPreview data={cvdata} />
	  </div>
	 
    </div>
  );
}
