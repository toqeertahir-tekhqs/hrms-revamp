import { Steps } from 'antd';

const CustomSteps = ({ className = '', ...props }) => {
  return (
    <div className={`custom-steps-wrapper ${className}`}>
      <Steps 
        {...props} 
      />
      <style jsx global>{`
        .custom-steps-wrapper .ant-steps-item-title {
          color: var(--text-color) !important;
        }
        .custom-steps-wrapper .ant-steps-item-description {
          color: var(--text-color) !important;
          opacity: 0.7;
        }
        .custom-steps-wrapper .ant-steps-item-process .ant-steps-item-icon {
          background-color: var(--color-primary) !important;
          border-color: var(--color-primary) !important;
        }
        .custom-steps-wrapper .ant-steps-item-finish .ant-steps-item-icon {
          border-color: var(--color-primary) !important;
        }
        .custom-steps-wrapper .ant-steps-item-finish .ant-steps-item-icon .ant-steps-icon {
          color: var(--color-primary) !important;
        }
        .custom-steps-wrapper .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
          background-color: var(--color-primary) !important;
        }
      `}</style>
    </div>
  );
};

export default CustomSteps;
