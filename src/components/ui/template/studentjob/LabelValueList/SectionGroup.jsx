import React from 'react';


export function SectionGroup({data }) {
 const getShortMonthName = (fullMonthName) => {
	const date = new Date(`${fullMonthName} 1, 2023`);
		return date.toLocaleString('default', { month: 'short' });
    };
	
	const show = (item) => {
		return Boolean(item.date_start_month + item.date_start_year + item.date_end_month + item.date_end_year);
	};
	
    return (
      <ol>
        {data.map((item, idx) => (
			<li key={idx} >
                <div>
					{item.heading && <strong>{item.heading} </strong>} 
					{show(item) && "("}
					{item.date_start_month && getShortMonthName(item.date_start_month) + ' '} 
					{item.date_start_year && item.date_start_year + ' -'} 
					{item.date_end_month && ' ' + getShortMonthName(item.date_end_month)} 
					{item.date_end_year && ' ' + item.date_end_year}
					{show(item) && ")"}
					{item.subheading && <div>{item.subheading}</div>}
					{item.content && 					
						<div dangerouslySetInnerHTML={{ __html: item.content }}	  />		  
				    }
                </div>
            </li>
        ))}
      </ol>
  );
}