import { Box } from '@mui/material';

import './style.scss';

const languages = [
  {
    languageIcon: '🇺🇸',
    language: 'English',
  },
];

export default function GlobalLanguageSupport() {
  return (
    <Box className="global-language-support">
      <div className="title">Global Language Support</div>
      <Box className="language-list">
        {languages.map(({ language, languageIcon }, index) => {
          return (
            <Box key={index} className="language-item">
              <Box className="language-item__icon">{languageIcon}</Box>
              <Box className="language-item__title">{language}</Box>
            </Box>
          );
        })}
      </Box>
      <p className="language-count-supports">+ 44 more languages</p>
    </Box>
  );
}
