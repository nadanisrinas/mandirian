import React from 'react'
import { AppBar, Box, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const AppBarComponent = ({nav}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
    const navItems = ['Home', 'About', 'Contact'];
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });
      
    return(
        <ThemeProvider theme={darkTheme}>
<AppBar component={nav}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        
    )
}


export default AppBarComponent