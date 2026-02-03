import { CustomSpin, CustomTable } from '@/components/ui';
import { DashboardOutlined, PlusOutlined, ReloadOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Card, Steps, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

/**
 * Dashboard Page
 * Example dashboard with Ant Design components
 * Features:
 * - Table with mock data
 * - Steps component
 * - Cards
 * - Buttons
 */
const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: t('navigation.dashboard'),
      path: '/dashboard',
    },
    {
      key: 'employees',
      icon: <TeamOutlined />,
      label: t('navigation.employees'),
      path: '/employees',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: t('navigation.settings'),
      path: '/settings',
    },
  ];

  // Mock table data
  const dataSource = [
    {
      key: '1',
      name: 'John Doe',
      age: 32,
      department: 'Engineering',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Jane Smith',
      age: 28,
      department: 'Marketing',
      status: 'Active',
    },
    {
      key: '3',
      name: 'Bob Johnson',
      age: 45,
      department: 'Sales',
      status: 'Inactive',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      filters: [
        { text: 'Engineering', value: 'Engineering' },
        { text: 'Marketing', value: 'Marketing' },
        { text: 'Sales', value: 'Sales' },
      ],
      onFilter: (value, record) => record.department === value,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: t('common.actions'),
      key: 'actions',
      render: () => (
        <div className="flex gap-2">
          <Button size="default" type="link">
            {t('common.edit')}
          </Button>
          <Button size="default" type="link" danger>
            {t('common.delete')}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="grid gap-4">
        {/* Page Title */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New
          </Button>
        </div>

        {/* Steps Example */}
        <Card title="Onboarding Process" extra={<Button icon={<ReloadOutlined />}>Reset</Button>}>
          <Steps
            current={1}
            items={[
              {
                title: 'Registration',
                description: 'Create account',
              },
              {
                title: 'Verification',
                description: 'Verify email',
              },
              {
                title: 'Completion',
                description: 'Setup profile',
              },
            ]}
          />
        </Card>

        <Card title="Employee List">
        <CustomTable
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: true }}
          />
        </Card>

        {/* Example with Spin (loading state) */}
        <Card title="Loading Example">
        <div className="py-8 text-center">
          <CustomSpin size="default" />
          <p className="mt-4 text-gray-500" style={{ color: 'var(--text-color)' }}>{t('common.loading')}</p>
          </div>
        </Card>
    </div>
  );
};

export default Dashboard;
