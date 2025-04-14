import React, { useState } from "react";

import { useTranslation } from 'react-i18next';

export default function MultiStepForm({ children }) {
  const [step, setStep] = useState(0); 

  const next = () => setStep((prev) => Math.min(prev + 1, children.length - 1));
  const prev = () => setStep((prev) => Math.max(prev - 1, 0));

  const isLast = step === children.length - 1;

  const { t } = useTranslation();
  
  return (
    <div className="max-w-2xl p-6 bg-white rounded-xl shadow-md">
      <div className="relative mb-6 h-2 bg-gray-200 rounded-full">
        <div
          className={`absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300`}
          style={{ width: `${((step + 1) / children.length) * 100}%` }}
        />
      </div>

      <div>{children[step]}</div>

      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button onClick={prev} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
            {t('button.back')}
          </button>
        )}
		
		{step == 0 && (<div></div>)}
		
        {!isLast ? (
          <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded-lg mr-auto">
            {t('button.next')}
          </button>
        ) : (
          <button
            onClick={() => alert("Happy!")}
            className="px-4 hidden py-2 bg-green-600 text-white rounded-lg ml-auto"
          >
            {t('button.print')}
          </button>
        )}
      </div>
    </div>
  );
}
