import { pageSizeOptions } from '@/constants';
import { Table } from 'antd';

const applyGlobalColumnDefaults = (columns = []) => {
  return columns
    ?.filter((col) => !col?.hideColumn)
    ?.map((col) => {
      const newCol = {
        showSorterTooltip:
          col?.showSorterTooltip !== undefined
            ? col?.showSorterTooltip
            : false,

        ellipsis:
          col?.ellipsis !== undefined
            ? col?.ellipsis
            : true,

        align: col?.align ?? 'left',

        ...col,
      };

      if (col?.children?.length) {
        const children = applyGlobalColumnDefaults(col.children);
        if (children?.length) {
          newCol.children = children;
        } else {
          return null;
        }
      }
      return newCol;
    })
    ?.filter(Boolean);
};


const CustomTable = ({ className = '', columns = [], showSizeChanger = true, showQuickJumper = true, showTotal = true, ...props }) => {
  const updatedColumns = applyGlobalColumnDefaults(columns);
  return (
    <div className={`w-full custom-table-wrapper ${className}`}>
      <Table
        {...props}
        columns={updatedColumns}
        size={props.size || 'middle'}
        scroll={{ x: 'max-content', ...props.scroll }}
        pagination={{
          pageSizeOptions: pageSizeOptions,
          showSizeChanger: showSizeChanger || false,
          showQuickJumper: showQuickJumper || false,
          showTotal: showTotal ? (total) => `Total ${total} items` : undefined,
          ...(props.pagination || {}),
        }}

      />
    </div>
  );
};

export default CustomTable;
