import VehiclesLayout from '@/layouts/VehiclesLayout';
import { Card, Table } from 'antd';
import { useTranslation } from 'react-i18next';

/**
 * Vehicles Dashboard Page
 * Example page using VehiclesLayout
 */
const VehiclesDashboard = () => {
  const { t } = useTranslation();

  const dataSource = [
    { key: '1', vehicle: 'Toyota Camry', plate: 'ABC-123', status: 'Active' },
    { key: '2', vehicle: 'Honda Civic', plate: 'XYZ-789', status: 'Maintenance' },
  ];

  const columns = [
    { title: 'Vehicle', dataIndex: 'vehicle', key: 'vehicle' },
    { title: 'Plate', dataIndex: 'plate', key: 'plate' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  return (
    <VehiclesLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">{t('vehicles.title')}</h1>
        
        <Card title={t('vehicles.fleet')}>
          <Table dataSource={dataSource} columns={columns} />
        </Card>
      </div>
    </VehiclesLayout>
  );
};

export default VehiclesDashboard;
