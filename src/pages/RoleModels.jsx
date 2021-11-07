import React from 'react';
import Card from '@mui/material/Card';  
import CardActions from '@mui/material/CardActions';
import { Container } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useTheme } from '@mui/material'


import image from '../images/Photo by Emmy E from Pexels2381069.jpg';
import styles from './styles/cardStyles';

const RoleModels = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon />
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Developer</Button>
          <Button size="small">Writer</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default RoleModels;
