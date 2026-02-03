import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function usePermission(permissionKey) {
  const [hasPermission, setHasPermission] = useState(false);

  const getPermissions =
    useSelector((state) => state?.states?.userPermissions) || [];

  useEffect(() => {
    const checkPermission = () => {
      const [systemCode, action] = permissionKey.split('.');
      const permission = getPermissions?.find(
        (permission) => permission?.systemCode === systemCode
      );
      if (permission) {
        const actionPermission = permission[`can${action}`];
        setHasPermission(actionPermission);
      } else {
        setHasPermission(false);
      }
    };

    checkPermission();
  }, [permissionKey, getPermissions]);

  return hasPermission;
}

export default usePermission;
