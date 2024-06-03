import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography } from '@mui/material';
import { loginRequest } from '../redux/actions/authActions';
import { RootState } from '../redux/store';

const formStyles = {
  maxWidth: '600px',
  width: '100%',
  p: 1,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  justifyContent: 'center',
  gap: '16px',
};

const AuthForm = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginRequest(username, password));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Box ref={formRef} component="form" autoComplete="off" onSubmit={handleSubmit} sx={formStyles}>
      <Typography variant="h4">Login</Typography>
      <TextField label="Username" value={username} onChange={handleUsernameChange} required />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !formRef.current?.checkValidity()}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default AuthForm;
