import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { LogoutTwoTone, Sell } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout, reset } from '../features/authSlice';


export const generalListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      GENERAL
    </ListSubheader>
    <ListItemButton href='../../../dashboard'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton href='../../../products'>
      <ListItemIcon>
        <Sell />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>
  </React.Fragment>
);

export const adminListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      ADMIN
    </ListSubheader>
    <ListItemButton href='../../../users'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
  </React.Fragment>
);

//function Logout button
export const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);

  const fetchLogout = async () => {
    dispatch(await Logout());
    navigate("/");
    dispatch(reset());
  };

  return (
    <ListItemButton>
      <ListItemIcon>
        <LogoutTwoTone />
      </ListItemIcon>
      <ListItemText primary="Logout" onClick={fetchLogout} />
    </ListItemButton>
  )
}

export const settingListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      SETTING
    </ListSubheader>
    <LogoutButton />
  </React.Fragment>
);