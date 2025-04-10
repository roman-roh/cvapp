import React from 'react';
import { Button } from "./Button";

export function Section({ title, children, onAdd, name}) {
  return (
    <div className="section">
	    <div className="section--title">
	       <h2>{title}
		   { onAdd &&<Button name={name} className="" onClick={onAdd}>
      	       <div className="">
      	         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" classClass="svg-add-circle-outline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
      	       </div>					         
      	    </Button> } 
		   </h2>
		  
	    </div>
	     
      {children}
    </div>
  );
}