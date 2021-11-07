import React from 'react';
import Card from '@mui/material/Card';  
import CardActions from '@mui/material/CardActions';
import { Container } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useTheme } from '@mui/material'

import Navbar from './components/navbar';
import image from '../images/Photo by Emmy E from Pexels2381069.jpg'
import makeStyles from './styles/cardStyles';
import Footer from './components/footer/footer';

import './styles/roleModelsStyles.css'

const RoleModels = () => {
  const styles = makeStyles(useTheme());

  return(
  <div className="container">
    <Navbar />
    <Typography variant="h4" textAlign="center" mt="70px" mb="80px">Our Stories as Web Developers</Typography>
    <Box sx={styles.grid}>
    <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 250, padding: "16px" }}>
      <CardMedia
        component="img"
        height="140"
        margin="20px"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{padding: "0"}}>
        {/* <Typography gutterBottom variant="h5" component="div">
          Elizibeth Stuart
        </Typography> */}
          <AccessibilityIcon  sx={styles.icon}/>
          <Typography variant="body2" color="text.secondary">
            <Typography>Mentor Name</Typography>
            <Typography>Nationality</Typography>
            <Typography>Gender</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{padding: "15px 0px 0px 0px"}}>
          <Button size="small" sx={styles.button}>Developer</Button>
          <Button size="small" sx={styles.button}>Writer</Button>
        </CardActions>
      </Card>
    </Box>
    <Footer />
    </div>
  );
};

export default RoleModels;
