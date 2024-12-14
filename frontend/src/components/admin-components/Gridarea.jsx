import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from './AdminNavbar';
import Sidebar from './Sidebar';
import Datatable from './Datatable';
import Linegraph from './Linegraph';
import Sidebarright from './Sidebarright';


const Item = (props) => (
  <Paper
    sx={{
      padding: 2,
      textAlign: 'center',
      color: 'text.secondary',
      height: '100%', // Ensures the item takes full height of the grid cell
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    {...props}
  />
);

export default function Gridarea() {
  return (
    <div>
      <Navbar />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <Box sx={{ flexShrink: 0 }}>
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {/* First row with 3 equal-sized boxes */}
        <Grid item xs={3}>
          <Item>Box 1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Box 2</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Box 3</Item>
        </Grid>
      </Grid>

      {/* Space between rows */}
      <Box sx={{ marginTop: 14 }} />

      {/* Second row with 3 equal-sized boxes */}
      {/* <Grid item xs={10}>
  <Item sx={{ display: 'flex', width: '100%', height: '100%' }}>
    <Linegraph sx={{ width: '100%', height: '100%' }} />
  </Item>
</Grid> */}

      {/* Space between rows */}
      <Box sx={{ marginTop: 10 }} />

      {/* Third row with 3 equal-sized boxes */}
      <Grid item xs={9}>
          <Item>
            <Datatable />
          </Item>
        </Grid>
    </Box>
    <Box sx={{ flexShrink: 0 }}>
          <Sidebarright />
        </Box>



      </Box>
      
    </div>
  );
}
