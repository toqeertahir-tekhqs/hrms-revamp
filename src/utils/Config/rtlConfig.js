/**
 * RTL (Right-to-Left) language list and configuration helpers
 */

// List of RTL languages
export const RTL_LANGUAGES = ['ar', 'he', 'ur', 'fa'];

/**
 * Check if a language is RTL
 * @param {string} lang - Language code
 * @returns {boolean}
 */
export const isRTL = (lang) => RTL_LANGUAGES.includes(lang);

/**
 * Update document direction based on language
 * @param {string} lang - Language code
 */
export const updateDirection = (lang) => {
  const dir = isRTL(lang) ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lang;
};

/**
 * Get text direction for a language
 * @param {string} lang - Language code
 * @returns {string} 'rtl' or 'ltr'
 */
export const getDirection = (lang) => {
  return isRTL(lang) ? 'rtl' : 'ltr';
};

export default {
  RTL_LANGUAGES,
  isRTL,
  updateDirection,
  getDirection,
};
