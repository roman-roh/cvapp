import React, { useState } from 'react';

import CVForm from '../components/CVForm';
import { CVPreview } from "./../components/CVPreview";

import { Input } from './../components/ui/Input';
import LanguageToggle from './../components/ui/LanguageToggle';

import { CVDataProvider } from "./../providers/CVDataContext"; 
import { PhotoProvider } from './../providers/PhotoContext';
import { CVSelectDataProvider } from "./../providers/CVSelectDataContext"; 

import "./styles.css";

export default function CVBuilder() {	
    return (
		<>
		<LanguageToggle />
		<CVDataProvider>
			<PhotoProvider>	
				<CVSelectDataProvider>
					<CVForm />
				</CVSelectDataProvider>
				<CVPreview/>		
	        </PhotoProvider>
		</CVDataProvider>
		</>
	);
}