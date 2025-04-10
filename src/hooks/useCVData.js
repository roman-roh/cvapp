import { useState } from 'react';

import { initialCvData } from "./../components/ui/initialCvData";

export function useCVData() {
  const [cvdata, setCV] = useState(initialCvData);

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
  
  /*function setByPath(obj, path, value) {
    path.split('.').reduce((acc, key, i, arr) => {
      if (i === arr.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = acc[key] || {};
      }
      return acc[key];
    }, obj);
  }*/

  const handleQuillChange = (name: string) => (value: string) => {
	console.log(name, value);
	setCV((prev) => {
		return deepCloneAndSet(prev, name, value);
	})
  };
  
  
  const handleInputChange = (e) => {

	const { name, value } = e.target;

	setCV((prev) => {
		return deepCloneAndSet(prev, name, value);
	})
  };
  
  const onDeleted = (name) => {
	setCV((prev) => {
		return deepCloneAndDelete(prev, name);
	})
  }
  
  const onAdd = (name) => {
	setCV((prev) => {
		return deepCloneAndAdd(prev, name, {label: "", value: ""});
	})
  }
  return { cvdata, handleInputChange, handleQuillChange, onDeleted, onAdd };
}