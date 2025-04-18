import React from 'react';

export function Section({ title, children, name}) {	  
  return (
    <div className="section">
	    <div className="section--title">
	       <h2>{title}				         
		   </h2>		  	  
	    </div>	     
      {children}
    </div>
  );
}