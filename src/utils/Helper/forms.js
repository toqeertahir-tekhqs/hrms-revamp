const getFormFilePathSettlementDocumentDownload = ({
    formType,
    systemID,
    employeeID,
}) => {
    const routes = {
      AnnualLeave: {
          api: '/api/employeeleaverequest',
      },
      TerminationForm: {
          api: '/api/employeeterminationform',
      },
      ResignedForm: {
          api: '/api/employeeresignedform',
      },
  };

    const route = routes[formType];
    if (!route) return false;

    // API route if formsystemID exists
    if (systemID && route?.api) {
      const url = `${route?.api}/${employeeID}/${systemID}/download-settlement-document`;
      return url;
  }

    // fallback
    return false;
};

export { getFormFilePathSettlementDocumentDownload };
