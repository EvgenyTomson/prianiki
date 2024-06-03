import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Header = () => {
  const user = useSelector((state: RootState) => state.auth.username);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1, textAlign: 'left' }}>
          Пряники
        </Typography>
        {user && (
          <>
            <Typography variant="h5" component="span">
              {user}
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
