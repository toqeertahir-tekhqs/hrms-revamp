import { List } from 'antd';

const CustomList = ({ className = '', ...props }) => {
  return (
    <div className={`custom-list-wrapper ${className}`}>
      <List 
        {...props} 
        style={{
          color: 'var(--text-color)',
          ...props.style
        }}
      />
    </div>
  );
};

export default CustomList;
