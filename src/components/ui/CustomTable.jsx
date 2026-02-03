import { Table } from 'antd';

const CustomTable = ({ className = '', ...props }) => {
  return (
    <div className={`custom-table-wrapper w-full ${className}`}>
      <Table 
        {...props} 
        size={props.size || 'middle'}
        scroll={{ x: 'max-content', ...props.scroll }}
      />
    </div>
  );
};

export default CustomTable;
