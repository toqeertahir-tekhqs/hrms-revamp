import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const capitalize = (str) =>
  str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const isDynamicSegment = (segment = '') => {
  const isNumber = /^\d+$/.test(segment);

  // UUID v1–v5
  const isUUID =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      segment
    );

  return isNumber || isUUID;
};
const BreadCrumbForPayroll = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  // const pathSnippets = location.pathname.split('/payroll').filter((i) => i);

  const breadcrumbItems = pathSnippets
    .map((segment, index) => {
      if (isDynamicSegment(segment)) return null; // Skip numeric IDs & UUIDs

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
    // {
    //   title: <Link to="/payroll">Payroll</Link>,
    // },
    ...breadcrumbItems,
  ];
  return <Breadcrumb className="mb-6" items={items} />;
};

export default BreadCrumbForPayroll;
