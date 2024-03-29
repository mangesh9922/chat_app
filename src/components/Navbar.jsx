import React from 'react'
import { Button,Toolbar,Typography,AppBar,Box } from '@mui/material'
function Navbar() {
  return (
      <div> <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Chit-chat
                  </Typography>
                  <Button color="inherit" href="Login">Login</Button>
                  <Button color="inherit" href="SignUp">SignUp</Button>

              </Toolbar>
          </AppBar>
      </Box></div>
  )
}

export default Navbar