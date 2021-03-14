import React, { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/Form/Form';
// import Form from './components/Form/FormPoint1'
import useStyles from './styles';
import memories from './images/memories.png';



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" align="center">Attendance</Typography>
        <img className={classes.image} src={memories} alt="icon" height="40" />
        {/* <LoginButton /> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />

            </Grid>
          </Grid>

        </Container>
      </Grow>

    
    </Container>
  );
};

export default App;
