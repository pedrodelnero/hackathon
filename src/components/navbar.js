import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { useTheme } from '@mui/system';

import makeStyles from './navbarStyles';

export default function Navbar(props) {
  const styles = makeStyles(useTheme());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link sx={styles.link} color="#ffffff" href="/">
            <Typography variant="h5">GateR</Typography>
          </Link>
          <Link
            sx={{ ...styles.firstLink, ...styles.link }}
            color="#ffffff"
            href="#"
          >
            Careers
          </Link>
          <Link sx={styles.link} color="#ffffff" href="#">
            Profiles
          </Link>
          <Link sx={styles.link} color="#ffffff" href="#">
            Register
          </Link>
          <Link
            sx={styles.link}
            color="#1976D2"
            bgcolor="white"
            mr="40px"
            href="#"
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
