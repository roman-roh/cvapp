import React from 'react';
import { usePhoto } from './../../providers/PhotoContext';
import { Camera, Trash2 } from "lucide-react";

import { useTranslation } from 'react-i18next';

export function Photo() {

  const { photo, handleChange, handleRemove} = usePhoto();
  
  const { t } = useTranslation();

  return (
	<div className="flex flex-col items-center">
	        <label
	          htmlFor="photo-upload"
	          className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition relative overflow-hidden"
	        >
	          {photo ? (
	            <img
	              src={photo}
	              alt="Preview"
	              className="w-full h-full object-cover"
	            />
	          ) : (
	            <>
	              <Camera className="w-8 h-8 text-gray-400" />
	              <span className="mt-2 text-sm text-gray-500 text-center">
	                {t("add_photo")}<br />({t("optional")})
	              </span>
	            </>
	          )}
	          <input
	            id="photo-upload"
	            type="file"
	            accept="image/*"
	            onChange={handleChange}
	            className="hidden"
	          />
	        </label>

	        {photo && (
	          <button
	            onClick={handleRemove}
	            className="mt-2 text-sm text-red-500 hover:underline flex items-center gap-1"
	          >
	            <Trash2 className="w-4 h-4" />
	            {t("button.remove")}
	          </button>
	        )}
	      </div>
  );
}