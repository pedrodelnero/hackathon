import { Box } from '@mui/system';
import React from 'react';
import Navbar from './components/navbar';
import { IconButton, Typography, useTheme } from '@mui/material';

import makestyles from './styles/detailsStyles'
import video from '../videos/Video by Pavel Danilyuk from Pexels.mp4'
import { Instagram, LinkedIn, Twitter } from '@material-ui/icons';

import "./styles/detailStyles.css"
import Footer from './components/footer/footer';

const RoleModel = () => {
  const styles = makestyles(useTheme());

  return (
    <Box sx={styles.container}>
      <Navbar />
      <Box sx={styles.content}>
        <Typography variant="h4" textAlign="center" mt="3em">Sample Story</Typography>
        <Box component="video" autoplay controls mt="3em" sx={styles.video}><source src={video} type="video/mp4"></source></Box>
        <Box sx={styles.iconBox}>
          <IconButton size="large"><LinkedIn root={{fontSize: "3em"}} sx={styles.icon}></LinkedIn></IconButton>
          <IconButton><Twitter></Twitter></IconButton>
          <IconButton><Instagram></Instagram></IconButton>
        </Box>
        <Box>
          <Typography variant="h6">Mentor Name</Typography>
          <Typography>Nationality</Typography>
          <Typography>Gender</Typography>
          <Typography>Job Role</Typography>
        </Box>
        <Box>
          <Typography variant="h5" mt="30px">Some Title</Typography>
          <Typography mt="10px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa fugit quibusdam. In, 
          laudantium nemo repellendus dolore eligendi consequuntur laboriosam maxime. Odio expedita deleniti voluptates quae architecto asperiores id inventore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quas accusantium adipisci at eos? Itaque, ipsam minima. Laboriosam, laborum tempore, 
          iure sed laudantium recusandae repellendus tenetur voluptatibus, alias pariatur magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa fugit quibusdam. In, 
          laudantium nemo repellendus dolore eligendi consequuntur laboriosam maxime. Odio expedita deleniti voluptates quae architecto asperiores id inventore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quas accusantium adipisci at eos? Itaque, ipsam minima. Laboriosam, laborum tempore, 
          iure sed laudantium recusandae repellendus tenetur voluptatibus, alias pariatur magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa fugit quibusdam. In, 
          laudantium nemo repellendus dolore eligendi consequuntur laboriosam maxime. Odio expedita deleniti voluptates quae architecto asperiores id inventore!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quas accusantium adipisci at eos? Itaque, ipsam minima. Laboriosam, laborum tempore, 
          iure sed laudantium recusandae repellendus tenetur voluptatibus, alias pariatur magnam.
          
          
          </Typography>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
    );
};

export default RoleModel;
