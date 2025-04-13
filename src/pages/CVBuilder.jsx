import React, { useState } from 'react';

import CVForm from '../components/CVForm';
import { CVPreview } from "./../components/CVPreview";

import Card from './../components/ui/Card';
import CardContent from '../components/ui/CardContent';
import { Input } from './../components/ui/Input';
import LanguageToggle from './../components/ui/LanguageToggle';

import { CVDataProvider } from "./../providers/CVDataContext"; 

import "./styles.css";

export default function CVBuilder() {	
    return (
		<CVDataProvider>	
			<CVPreview/>			
			<LanguageToggle />
			<CVForm />

	    </CVDataProvider>
	);
}