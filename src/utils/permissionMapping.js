/**
 * Maps the detailed backend permission structure to simple frontend permission strings
 * @param {Array} permissions - Array of permission objects from backend
 * @returns {Array<string>} - Array of permission strings (e.g., 'module.payroll')
 */
export const mapPermissions = (permissions = []) => {
  if (!Array.isArray(permissions)) return [];

  const mappedPermissions = [];

  permissions.forEach(p => {
    // Map Payroll Module Access
    // Keywords: "Payroll", "Pay Structure", "Contract", "Working Hour", "Pay Rule"
    if (
      p.systemCode?.includes('WorkingHour') ||
      p.systemCode?.includes('Contract') ||
      p.systemCode?.includes('PayStructure') ||
      p.systemCode?.includes('PayRule') ||
      p.systemCode?.includes('PayInput') ||
      p.systemCode?.includes('PayBatch') ||
      p.description?.includes('Payroll')
    ) {
      if (!mappedPermissions.includes('module.payroll')) {
        mappedPermissions.push('module.payroll');
      }
    }

    // Map Accommodations Module Access
    // Keywords: "Accommodation", "Guest", "Room"
    if (
      p.systemCode?.includes('Accommodation') ||
      p.systemCode?.includes('Guest') ||
      p.systemCode?.includes('Room') ||
      p.description?.includes('Accommodation')
    ) {
      if (!mappedPermissions.includes('module.accommodations')) {
        mappedPermissions.push('module.accommodations');
      }
    }

    // Map Vehicles Module Access
    // Keywords: "Vehicle"
    if (
      p.systemCode?.includes('Vehicle') ||
      p.description?.includes('Vehicle')
    ) {
      if (!mappedPermissions.includes('module.vehicles')) {
        mappedPermissions.push('module.vehicles');
      }
    }
  });

  return mappedPermissions;
};
