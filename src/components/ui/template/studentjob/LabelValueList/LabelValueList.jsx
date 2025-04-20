import React from 'react';

import { useTranslation } from 'react-i18next';

export function LabelValueList({ items, checkmark=false }) {
  const { t } = useTranslation();

  return (
      <ol>
        { Object.entries(items).map((item, idx) => (
           ( (item[1].hide_empty_value === true && item[1].value) || item[1].hide_empty_value !== true)  ?
		   <li key={idx} className="">
			  <strong>{checkmark && '✔'} {t(item[1].label)} {item[1].value && ":"}</strong> {item[1].value}
          </li> : ''
		  
        ))}
      </ol> );
}