import AccommodationsLayout from '@/layouts/AccommodationsLayout';
import { Card, Table } from 'antd';
import { useTranslation } from 'react-i18next';

/**
 * Accommodations Dashboard Page
 * Example page using AccommodationsLayout
 */
const AccommodationsDashboard = () => {
  const { t } = useTranslation();

  const dataSource = [
    { key: '1', property: 'Apartment A', status: 'Available', capacity: 4 },
    { key: '2', property: 'House B', status: 'Occupied', capacity: 6 },
  ];

  const columns = [
    { title: 'Property', dataIndex: 'property', key: 'property' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Capacity', dataIndex: 'capacity', key: 'capacity' },
  ];

  return (
    <AccommodationsLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">{t('accommodations.title')}</h1>
        
        <Card title="Properties">
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    </AccommodationsLayout>
  );
};

export default AccommodationsDashboard;
