// PhotoContext.js
import { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setPhoto(null);
  };
  
  return (
    <PhotoContext.Provider value={{ photo, handleChange, handleRemove }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
