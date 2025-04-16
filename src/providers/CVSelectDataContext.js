import React, { createContext, useState, useContext } from "react";

const CVSelectDataContext = createContext();

export const useSelectData = () => {
  return useContext(CVSelectDataContext);
};

export const CVSelectDataProvider = ({ children }) => {
  
  const jsonContext = require.context('./../data', false, /\.json$/);

  
  const allJsonData = jsonContext.keys().map((key) => {
    return {
      fileName: key.replace('./', ''),
      content: jsonContext(key),
    };
  });

  const mergedContent = allJsonData.reduce((acc, file) => {
    return { ...acc, ...file.content };
  }, {});
  
  const [selectData, setSelectData] = useState(mergedContent);  

  const getSelectData = (name) => {
	return selectData[name];	
  }
   
  return (
    <CVSelectDataContext.Provider value={{ getSelectData }}>
      {children}
    </CVSelectDataContext.Provider>
  );
};