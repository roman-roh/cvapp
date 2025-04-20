import React, { createContext, useState, useContext, useEffect } from "react";

import { useTranslation } from 'react-i18next';

const CVSelectDataContext = createContext();

export const useSelectData = () => {
  return useContext(CVSelectDataContext);
};

export const CVSelectDataProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language; 

  const [selectData, setSelectData] = useState(null);  

  useEffect(() => {
	const jsonContext = require.context('./../data/', true, /\.json$/);
	const allJsonData = jsonContext.keys().map((key) => {
		if(!key.includes(`/${lang}/`)){
			return null;
		}

		return {
		    fileName: key.replace('./', ''),
		    content: jsonContext(key),
		  };
	}).filter(Boolean);

	const mergedContent = allJsonData.reduce((acc, file) => {
	  return { ...acc, ...file.content };
	}, {});

	setSelectData(mergedContent);
  }, [lang]); 
  
  
  const getSelectData = (name) => {

	return selectData[name];	
  }
   
  return (
    <CVSelectDataContext.Provider value={{ selectData, getSelectData }}>
      {children}
    </CVSelectDataContext.Provider>
  );
};