import './../../i18n';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
	{ code: 'fr', label: '🇫🇷 FR' },
    { code: 'en', label: '🇬🇧 EN' },
  ];

  return (
    <div className="flex gap-2 p-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-3 py-1 rounded-full text-sm font-medium border
            ${
              i18n.language === code
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
