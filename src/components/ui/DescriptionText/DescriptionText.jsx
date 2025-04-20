import React from 'react';

export function DescriptionText( { data }) {
  return (
		<div
		    dangerouslySetInnerHTML={{ __html: data }}	  />		  
  );
}