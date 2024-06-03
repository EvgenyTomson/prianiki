import { RowData } from '../types';

export const tableHeaderMap: Record<keyof RowData, string> = {
  companySigDate: 'Company Signature Date',
  companySignatureName: 'Company Signature Name',
  documentName: 'Document Name',
  documentStatus: 'Document Status',
  documentType: 'Document Type',
  employeeNumber: 'Employee Number',
  employeeSigDate: 'Employee Signature Date',
  employeeSignatureName: 'Employee Signature Name',
};
