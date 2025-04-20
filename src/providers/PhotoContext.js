// PhotoContext.js
import { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState(localStorage.getItem('cvphoto') || '');

  const handleChange = (e) => {
    const file = e.target.files[0];
	
	const reader = new FileReader();

  	reader.onloadend = () => {
    	const base64String = reader.result;
    	setPhoto(base64String);
    	localStorage.setItem('cvphoto', base64String);
  	};
	
    if (file) {
      reader.readAsDataURL(file);    
    }
  };

  const handleRemove = () => {
    setPhoto(null);
	localStorage.setItem('cvphoto', '');
  };
  
  return (
    <PhotoContext.Provider value={{ photo, handleChange, handleRemove }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
