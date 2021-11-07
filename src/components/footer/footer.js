import React from 'react';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import makeStyles from './footerStyles';
import { Typography } from '@mui/material';
import { Copyright } from '@material-ui/icons';

export default function Footer() {
    const styles = makeStyles(useTheme());

    return (
        <Box sx={styles.footerContainer}>
            <Typography textAlign="center" color="white" pt="20px">Copyright 2021 Datacation</Typography>
        </Box>
    )
}
