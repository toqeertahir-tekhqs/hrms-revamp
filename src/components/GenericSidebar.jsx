import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Generic Sidebar Component
 * Reusable scrollable sidebar with menu items
 * 
 * @param {Array} items - Array of menu items { key, icon, label, path, children }
 * @param {string} className - Additional CSS classes
 */
const GenericSidebar = ({ items = [], className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle menu click
  const handleClick = (e) => {
    const item = findItemByKey(items, e.key);
    if (item && item.path) {
      navigate(item.path);
    }
  };

  // Find item by key recursively
  const findItemByKey = (items, key) => {
    for (const item of items) {
      if (item.key === key) return item;
      if (item.children) {
        const found = findItemByKey(item.children, key);
        if (found) return found;
      }
    }
    return null;
  };

  // Get selected key from current path
  const getSelectedKey = () => {
    const item = items.find(item => item.path === location.pathname);
    return item ? [item.key] : [];
  };

  return (
    <div className={`h-full overflow-y-auto ${className}`}>
      <Menu
        mode="inline"
        selectedKeys={getSelectedKey()}
        onClick={handleClick}
        items={items}
        className="h-full border-0"
      />
    </div>
  );
};

export default GenericSidebar;
