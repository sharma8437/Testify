
import React from 'react';
import Box from '@mui/material/Box';
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


const Sidebar = () => {
  const menuItems = [
    { label: 'New', icon: <InboxIcon /> },
    { label: 'Assigned to me', icon: <AssignmentIndIcon /> },
    { label: 'Mentioned', icon: <MentionIcon /> },
    { label: 'Favourite', icon: <FavoriteIcon /> },
    { label: 'Closed', icon: <CheckCircleIcon /> },
    { label: 'Drafts', icon: <DraftsIcon /> },
    { label: 'Snoozed', icon: <SnoozeIcon /> },
  ];

  return (
   
    <Box sx={{ bgcolor: 'white', height: '100vh', padding: 1, borderRight: 0.01, borderColor: "lightgray",
        width: 180,
     }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
