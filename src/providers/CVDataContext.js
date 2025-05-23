import React, { useEffect, createContext, useState, useContext, useRef } from "react";

import { initialCvData } from "./initialCvData";

const CVDataContext = createContext();

export const useCVData = () => {
  return useContext(CVDataContext);
};

export const CVDataProvider = ({ children }) => {

  const [data, setCV] = useState(initialCvData);  
  
  const isFirstRender = useRef(true);

  useEffect(() => {
	const savedData = localStorage.getItem('cvworkingversion');

    if (savedData) {
      setCV(JSON.parse(savedData));
    } else {
		setCV(initialCvData);
    }
  }, []);
  
  useEffect(() => {
	if (isFirstRender.current) {
	  isFirstRender.current = false;
	  return;
	}

  	localStorage.setItem('cvworkingversion', JSON.stringify(data));
  }, [data]);

  
  function deepCloneAndSet(obj, path, value) {
      const keys = path.split('.');
      const clone = structuredClone(obj);

      let current = clone;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!(key in current) || typeof current[key] !== 'object') {
          current[key] = {};
        }

        current = current[key];
      }

	  if(typeof value === "string" && current.upper_case === true){
		value = value.toUpperCase();

	  }
      current[keys.at(-1)] = value;

      return clone;
    }
    
    function deepCloneAndDelete(obj, path) {
      const keys = path.split('.');
      const clone = structuredClone(obj); 

      let current = clone;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!(key in current) || typeof current[key] !== 'object') {
          return clone; 
        }

        current = current[key];
      }

      const lastKey = keys.at(-1);
      if (lastKey in current) {
        current.splice(lastKey, 1);
      }

      return clone;
    }
    
    function deepCloneAndAdd(obj, path, valueToAdd = null) {
      const keys = path.split('.');
      const clone = structuredClone(obj);  
      let current = clone;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];

        if (!(key in current) || typeof current[key] !== 'object') {
          return clone;  
        }

        current = current[key];
      }

      const lastKey = keys.at(-1);

      current[lastKey].push(valueToAdd);
      

      return clone;
    }

	function handleChange(name: string) {

	  return function(value: string) {
		setCV((prev) => {
	  		return deepCloneAndSet(prev, name, value);
	  	});
	  };
	}
   
    const handleInputChange = (e) => {
	  	const { name, value } = e.target;

		setCV((prev) => {
	  		return deepCloneAndSet(prev, name, value);
	  	});
    };
    
    const onDeleteCategory = (name) => {
	  	setCV((prev) => {
	  		return deepCloneAndDelete(prev, name);
	  	});
    }
    
    const onAddCategory = (name) => {  	
	  	setCV((prev) => {
	  		return deepCloneAndAdd(prev, name, prev[name + '_initial']);
	  	});
    }   

  return (
    <CVDataContext.Provider value={{ data, handleInputChange, handleChange, onDeleteCategory, onAddCategory }}>
      {children}
    </CVDataContext.Provider>
  );
};