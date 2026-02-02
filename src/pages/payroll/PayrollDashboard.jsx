import PayrollLayout from '@/layouts/PayrollLayout';
import { Card, Table } from 'antd';
import { useTranslation } from 'react-i18next';

/**
 * Payroll Dashboard Page
 * Example page using PayrollLayout
 */
const PayrollDashboard = () => {
  const { t } = useTranslation();

  const dataSource = [
    { key: '1', employee: 'John Doe', salary: '$5000', status: 'Paid' },
    { key: '2', employee: 'Jane Smith', salary: '$4500', status: 'Pending' },
  ];

  const columns = [
    { title: 'Employee', dataIndex: 'employee', key: 'employee' },
    { title: 'Salary', dataIndex: 'salary', key: 'salary' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  return (
    <PayrollLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">{t('payroll.title')}</h1>
        
        <Card title={t('payroll.employees_list')}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    </PayrollLayout>
  );
};

export default PayrollDashboard;
