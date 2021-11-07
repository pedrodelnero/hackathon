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

const Home = () => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <Container style={{ padding: 0, margin: 0 }}>
      <Container
        style={{
          padding: '100px 50px',
          height: '300px',
          backgroundColor: 'lightgrey',
        }}
      >
        <Typography style={{ marginBottom: '50px' }}>
          Find your career path today.
        </Typography>

        <TextField
          style={{
            backgroundColor: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
          placeholder="Search for career"
          onChange={(e) => setSearchItem(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Container>
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
                  style={{ position: 'absolute', bottom: '20px', left: '60px' }}
                >
                  <Link to="/rolemodels" style={{ textDecoration: 'none' }}>
                    <Button size="small">Meet Members</Button>
                  </Link>
                </CardActions>
              </Card>
            ) : (
              <>
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
                <Card
                  style={{ width: 250, height: '200px', position: 'relative' }}
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
                  style={{ width: 250, height: '200px', position: 'relative' }}
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
  );
};

export default Home;
