import { Spin } from 'antd';

const CustomSpin = ({ children, spinning, tip='Loading...', ...props }) => {
  return (
    <Spin 
      spinning={spinning} 
      tip={tip}
      className="custom-spinner text-(--color-spin)"
      {...props}
    >
      {children}
    </Spin>
  );
};

export default CustomSpin;
