import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

// Utility to capitalize each word
const capitalize = (str) =>
  str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

// Utility to detect if a segment is a dynamic ID (number or UUID-like)
const isDynamicSegment = (segment) =>
  /^\d+$/.test(segment) || /^[0-9a-f]{24}$/i.test(segment); // or adjust for UUID format

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets
    .map((segment, index) => {
      if (isDynamicSegment(segment)) return null; // Skip numeric/ID segments

      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const title = capitalize(segment);
      const isLast =
        index === pathSnippets.length - 1 ||
        isDynamicSegment(pathSnippets[index + 1]);

      return {
        title: isLast ? title : <Link to={url}>{title}</Link>,
      };
    })
    .filter(Boolean); // Remove null items

  const items = [
    {
      title: <Link to="/">Dashboard</Link>,
    },
    ...breadcrumbItems,
  ];

  return <Breadcrumb className="mb-6" items={items} />;
};

export default Breadcrumbs;
