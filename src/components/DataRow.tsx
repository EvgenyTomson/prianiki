import { Button, Input, TableCell, TableRow } from '@mui/material';
import { DataRecord } from '../types';
import React, { useState } from 'react';

interface Props {
  data: DataRecord;
  onUpdate: (row: DataRecord) => void;
  onDelete: (id: string) => void;
}

const DataRow = ({ data, onUpdate, onDelete }: Props) => {
  const { id } = data;

  const [currentData, setCurrentData] = useState<DataRecord>(data);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setCurrentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <TableRow>
      {(Object.keys(currentData) as Array<keyof DataRecord>).sort().map((k) => {
        if (k === 'id') return null;
        return (
          <TableCell key={k} sx={{ p: 1, border: 1 }}>
            <Input
              name={k}
              onChange={onChange}
              value={currentData[k]}
              sx={{ textDecoration: 'none', border: 0 }}
              disableUnderline={true}
            />
          </TableCell>
        );
      })}

      <TableCell sx={{ p: 1, border: 1 }}>
        <Button onClick={() => onDelete(id)} color="secondary">
          Delete
        </Button>
        <Button onClick={() => onUpdate(currentData)} color="primary">
          Edit
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default DataRow;
