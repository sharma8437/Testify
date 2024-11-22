
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MentionIcon from '@mui/icons-material/AlternateEmail';
import FavoriteIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DraftsIcon from '@mui/icons-material/Drafts';
import SnoozeIcon from '@mui/icons-material/Snooze';
import OutlinedCard from './Outlinedcard';
import  Button  from '@mui/material/Button';



const Sidebarright = () => {
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

  return (
   
    <Box sx={{ bgcolor: 'white', height: '100vh', padding: 1, borderRight: 0.01, borderColor: "lightgray", 
        width: 180,
     }}>
      <List>
     <Box>
      <Button sx={{ color: 'red'}} >Create Test</Button>
     </Box>
     <br />
     <br />
     <br />
     <Box>
     <OutlinedCard />
     </Box>

      </List>
    </Box>
  );
};

export default Sidebarright;
