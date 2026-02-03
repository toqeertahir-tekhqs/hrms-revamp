import { useHasPermission } from '@/hooks/usePermission';
import BaseLayout from '@/layouts/BaseLayout';
import { CarOutlined, DashboardOutlined, DollarOutlined, HomeOutlined, PlusOutlined, ReloadOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Card, Spin, Steps, Table, Tag } from 'antd';
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
          <Button size="small" type="link">
            {t('common.edit')}
          </Button>
          <Button size="small" type="link" danger>
            {t('common.delete')}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <BaseLayout sidebarItems={sidebarItems} headerTitle="Main Dashboard">
      <div className="space-y-6">
        {/* Page Title */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
          <Button type="primary" icon={<PlusOutlined />}>
            Add New
          </Button>
        </div>

        {/* Module Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useHasPermission('module.payroll') && (
            <Card 
              hoverable
              className="cursor-pointer border-l-4 border-l-blue-500 hover:shadow-lg transition-all"
              onClick={() => navigate('/payroll/dashboard')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <DollarOutlined className="text-2xl text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold m-0">{t('payroll.title')}</h3>
                  <p className="text-gray-500 m-0">Manage salaries & payments</p>
                </div>
              </div>
            </Card>
          )}

          {useHasPermission('module.accommodations') && (
            <Card 
              hoverable
              className="cursor-pointer border-l-4 border-l-green-500 hover:shadow-lg transition-all"
              onClick={() => navigate('/accommodations/dashboard')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <HomeOutlined className="text-2xl text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold m-0">{t('accommodations.title')}</h3>
                  <p className="text-gray-500 m-0">Housing & property management</p>
                </div>
              </div>
            </Card>
          )}

          {useHasPermission('module.vehicles') && (
            <Card 
              hoverable
              className="cursor-pointer border-l-4 border-l-purple-500 hover:shadow-lg transition-all"
              onClick={() => navigate('/vehicles/dashboard')}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <CarOutlined className="text-2xl text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold m-0">{t('vehicles.title')}</h3>
                  <p className="text-gray-500 m-0">Fleet & maintenance tracking</p>
                </div>
              </div>
            </Card>
          )}
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

        {/* Table Example */}
        <Card title="Employee List">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{ pageSize: 5 }}
            scroll={{ x: true }}
          />
        </Card>

        {/* Example with Spin (loading state) */}
        <Card title="Loading Example">
          <div className="text-center py-8">
            <Spin size="large" />
            <p className="mt-4 text-gray-500">{t('common.loading')}</p>
          </div>
        </Card>
      </div>
    </BaseLayout>
  );
};

export default Dashboard;
