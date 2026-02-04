import PropTypes from 'prop-types';
import { useEffect } from 'react';

const SEO = ({ 
  title = 'Tekhqs HRMS', 
  description = 'Tekhqs Human Resource Management System', 
  name = 'Tekhqs', 
  type = 'website' 
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    
    // Facebook
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    
    // Twitter
    setMeta('name', 'twitter:creator', name);
    setMeta('name', 'twitter:card', type);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

  }, [title, description, name, type]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};

export default SEO;
