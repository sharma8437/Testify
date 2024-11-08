import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Adjust for medium screens and below
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white", color: "black" }}>
        <Toolbar>
          <Typography>Testify</Typography>

          {isMobile ? (
            // Mobile view: Menu icon and Drawer
            <Box sx={{ ml: "auto" }}>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {["Home", "Services", "About", "Support", "ContactUs"].map(
                    (text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton onClick={handleDrawerToggle}>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Button variant="contained" fullWidth>
                        Sign in
                      </Button>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <Button variant="contained" fullWidth>
                        Sign up
                      </Button>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          ) : (
            // Desktop view: Tabs and Buttons
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            >
              <Tabs textColor="inherit">
                <Tab label="Home" />
                <Tab label="Services" />
                <Tab label="About" />
                <Tab label="Support" />
                <Tab label="ContactUs" />
              </Tabs>
            </Box>
          )}

          {/* Common elements */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <DarkModeIcon />
              <Button variant="contained">Sign in</Button>
              <Button variant="contained">Sign up</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
