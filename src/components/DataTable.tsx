import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CircularProgress,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Box,
  Backdrop,
  Snackbar,
} from '@mui/material';
import {
  fetchDataRequest,
  createDataRequest,
  deleteDataRequest,
  updateDataRequest,
  clearDataError,
} from '../redux/actions/dataActions';
import { RootState } from '../redux/store';
import { DataRecord, RowData } from '../types';
import DataRow from './DataRow';
import DataForm from './DataForm';
import { tableHeaderMap } from '../constants';

const DataTable = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: RootState) => state.data);

  const [localData, setLocalData] = useState<DataRecord[]>(data || []);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setLocalData(data);
  }, [data, error]);

  const handleCreate = (newRecord: DataRecord) => {
    const tempId = Math.random().toString(36).substring(2, 15);
    const tempRecord = { ...newRecord, id: tempId };
    setLocalData((prevData) => [...prevData, tempRecord]);

    dispatch(createDataRequest(newRecord));
  };

  const handleDelete = (id: string) => {
    setLocalData((prevData) => prevData.filter((record) => record.id !== id));

    dispatch(deleteDataRequest(id));
  };

  const handleUpdate = (updaterRecord: DataRecord) => {
    setLocalData((prevData) =>
      prevData.map((record) => (record.id === updaterRecord.id ? updaterRecord : record))
    );

    dispatch(updateDataRequest(updaterRecord.id, updaterRecord));
  };

  const handleCrearError = () => {
    dispatch(clearDataError());
  };

  return (
    <Box sx={{ flex: '1 1 auto', p: 1 }}>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <DataForm onSubmit={handleCreate} isLoading={loading} />

      <Table sx={{ p: 1 }}>
        <TableHead>
          <TableRow>
            {(Object.keys(tableHeaderMap) as Array<keyof RowData>).sort().map((k) => (
              <TableCell key={k} sx={{ p: 1, border: 1 }}>
                {tableHeaderMap[k]}
              </TableCell>
            ))}

            <TableCell sx={{ p: 1, border: 1 }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localData.map((item) => (
            <DataRow key={item.id} data={item} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))}
        </TableBody>
      </Table>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!error}
        autoHideDuration={5000}
        onClose={handleCrearError}
        message={error}
      />
    </Box>
  );
};

export default DataTable;
