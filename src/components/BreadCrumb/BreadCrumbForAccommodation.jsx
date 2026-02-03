import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const capitalize = (str) =>
  str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const isDynamicSegment = (segment) =>
  /^\d+$/.test(segment) || /^[0-9a-f]{24}$/i.test(segment); 

const BreadCrumbForAccommodation = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/accommodation-dashboard').filter((i) => i);

  const breadcrumbItems = pathSnippets
    .map((segment, index) => {
      if (isDynamicSegment(segment)) return null; // Skip numeric/ID segments

      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const title = capitalize(segment?.replace(/^\//, ''));
      const isLast =
        index === pathSnippets.length - 1 ||
        isDynamicSegment(pathSnippets[index + 1]);

      return {
        title: isLast ? title : <Link to={url}>{title}</Link>,
      };
    })
    .filter(Boolean);

  const items = [
    {
      title: <Link to="/accommodation-dashboard">Dashboard</Link>,
    },
    ...breadcrumbItems,
  ];
  return <Breadcrumb className="mb-6" items={items} />;
};

export default BreadCrumbForAccommodation;
