import { DataRecord, FetchDataResponse } from '../types';
import axiosInstance from '../utils/axiosInstance';

export const fetchData = async (): Promise<FetchDataResponse> => {
  const response = await axiosInstance.get('/ru/data/v3/testmethods/docs/userdocs/get');

  return response.data;
};

export const createData = async (data: DataRecord): Promise<DataRecord> => {
  const response = await axiosInstance.post<{ data: DataRecord }>(
    '/ru/data/v3/testmethods/docs/userdocs/create',
    data
  );
  return response.data.data;
};

export const deleteData = async (id: string): Promise<void> => {
  await axiosInstance.post(`/ru/data/v3/testmethods/docs/userdocs/delete/${id}`);
};

export const updateData = async (id: string, data: DataRecord): Promise<DataRecord> => {
  const response = await axiosInstance.post<{ data: DataRecord }>(
    `/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
    data
  );
  return response.data.data;
};
