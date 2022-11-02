import * as React from 'react';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function App() {
  return (
    <AppBar>
      <Toolbar style={{ align: 'center' }}>
        <Typography
          align="center"
          style={{ width: '100%', alignItems: 'center' }}
        >
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <MenuIcon />
            &nbsp;FRAMEWORKS
          </Grid>
        </Typography>
        <Button variant="contained" id="addButton" style={{ width: '7%' }}>
          <AddCircleIcon fontSize="small" />
          &nbsp;Add
        </Button>
      </Toolbar>
    </AppBar>
  );
}
