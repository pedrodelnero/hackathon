import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { useTheme } from '@mui/system';

import makeStyles from './navbarStyles';

export default function Navbar(props) {
    const styles = makeStyles(useTheme());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Button color="inherit">Login</Button> */}
          <Link sx={{...styles.firstLink, ...styles.link}} color="#ffffff" href="#">Careers</Link>
          <Link sx={styles.link} color="#ffffff" href="#">Profiles</Link>
          <Link sx={styles.link} color="#ffffff" href="#">Register</Link>
          <Link sx={styles.link}color="#ffffff" href="#">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
