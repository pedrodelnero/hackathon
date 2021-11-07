import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import makeStyles from './styles/homeStyles';
import image1 from '../images/converted/hunter-newton-FQe4hjBlcPE-unsplash.png';

const Home = () => {
  const [searchItem, setSearchItem] = useState('');
  const styles = makeStyles(useTheme());
  const navigate = useNavigate();

  const onClick = () => navigate('/rolemodels');

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headerContainer}>
        <Box sx={styles.headerContent}>
          <Typography variant="h4" color="initial" sx={styles.text}>
            What kind of future would you like to explore?
          </Typography>
          <TextField
            label="Search"
            id="outlined-start-adornment"
            onChange={(e) => setSearchItem(e.target.value)}
            sx={{ m: 0, width: '', ...styles.input }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={onClick}>Go</Button>
                </InputAdornment>
              ),
            }}
          />
          <Box component="img" src={image1} sx={styles.image}></Box>
        </Box>
      </Box>
      <Container style={{ padding: 0, margin: 0 }}>
        <Container style={{ textAlign: 'center', padding: '30px 0' }}>
          <Typography variant="h4" style={{ marginBottom: '100px' }}>
            Information/Data on Minorities aving access to information on STEM
            career paths.
          </Typography>
          <Container>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>
              Featured Careers
            </Typography>
            <Container
              style={{
                display: 'flex',
                justifyContent: searchItem ? 'center' : 'space-between',
              }}
            >
              {searchItem ? (
                <Card
                  style={{ width: 250, height: '200px', position: 'relative' }}
                >
                  <CardContent>
                    <Typography variant="h5" style={{ marginTop: '40px' }}>
                      Web Developer
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '60px',
                    }}
                  >
                    <Link to="/rolemodels" style={{ textDecoration: 'none' }}>
                      <Button size="small">Meet Members</Button>
                    </Link>
                  </CardActions>
                </Card>
              ) : (
                <>
                  <Card
                    style={{
                      width: 250,
                      height: '200px',
                      position: 'relative',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" style={{ marginTop: '40px' }}>
                        Web Developer
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '60px',
                      }}
                    >
                      <Link to="/rolemodels" style={{ textDecoration: 'none' }}>
                        <Button size="small">Meet Members</Button>
                      </Link>
                    </CardActions>
                  </Card>
                  <Card
                    style={{
                      width: 250,
                      height: '200px',
                      position: 'relative',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" style={{ marginTop: '40px' }}>
                        UX Researcher
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '60px',
                      }}
                    >
                      <Link to="/rolemodels" style={{ textDecoration: 'none' }}>
                        <Button size="small">Meet Members</Button>
                      </Link>
                    </CardActions>
                  </Card>
                  <Card
                    style={{
                      width: 250,
                      height: '200px',
                      position: 'relative',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" style={{ marginTop: '40px' }}>
                        Data Analyst
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '60px',
                      }}
                    >
                      <Link to="/rolemodels" style={{ textDecoration: 'none' }}>
                        <Button size="small">Meet Members</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </>
              )}
            </Container>
          </Container>
        </Container>
      </Container>
    </Box>
  );
};

export default Home;
