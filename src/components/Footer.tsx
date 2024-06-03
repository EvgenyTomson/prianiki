import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ mt: 3 }}>
      <Toolbar sx={{ textAlign: 'right' }}>
        <Typography variant="h6" component="span" sx={{ textAlign: 'right' }}>
          Евгений
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
