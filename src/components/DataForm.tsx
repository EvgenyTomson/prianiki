import React, { useRef, useState } from 'react';
import { DataRecord, RowData } from '../types';
import { Box, Button, TextField, Typography } from '@mui/material';
import { tableHeaderMap } from '../constants';

interface Props {
  onSubmit: (data: DataRecord) => void;
  isLoading: boolean;
}

const DataForm = ({ onSubmit, isLoading }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [newData, setNewData] = useState<DataRecord>({
    id: '',
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(newData);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Add document
      </Typography>
      <Box
        ref={formRef}
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyContent: 'center',
          gap: 1,
          mb: 4,
        }}
      >
        {(Object.keys(tableHeaderMap) as Array<keyof RowData>).sort().map((k) => {
          return (
            <TextField
              key={k}
              label={tableHeaderMap[k]}
              value={newData[k]}
              name={k}
              onChange={onChange}
              required={k === 'documentName' || k === 'documentStatus'}
              type={k.includes('Date') ? 'date' : 'text'}
            />
          );
        })}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isLoading || !formRef.current?.checkValidity()}
          sx={{ gridColumn: '1/5' }}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default DataForm;
