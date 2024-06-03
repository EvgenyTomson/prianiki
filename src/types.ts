export interface DataRecord {
  id: string;
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

export interface RowData extends Omit<DataRecord, 'id'> {}

export interface FetchDataResponse {
  error_code: number;
  error_text?: string;
  error_message?: string;
  data: DataRecord[];
}

export interface AuthResponse {
  error_code: number;
  error_text?: string;
  error_message?: string;
  data: {
    token: string;
  };
}

export interface LoginRequestPayload {
  username: string;
  password: string;
}
