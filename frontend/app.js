import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import AddressContainer from './address-container';

export default function App() {
  return (
    <>
      <CssBaseline />
      <div style={{ padding: 16 }}>
        <Grid container>
          <Grid item xs={12}>
            <AddressContainer />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
