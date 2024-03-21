import React from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function Login() {
  return (
    <div
      className='login'
      display="flex"
      height={"100vh"}
      width={"100vw"}
      bgcolor="lightgreen"
      alignItems="center"
      justifyContent="center">
      <Box
        height={"97vh"}
        width={"98vw"}

        // my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      // gap={4}
      // p={2}
      // sx={{ border: '2px solid grey' }}
      >
        <Typography variant='h6'>
                Login here to continue
        </Typography>
        <Card

          sx={{ minWidth: 275, boxShadow:3 }} >
          <CardContent
            display="flex"
            alignItems="center"
            justifyContent = "center"
            sx={{ 
              '& .MuiTextField-root': {m:1, width: '28ch' },
              '& .MuiButton-root':{m: 1, width: '29ch'}
           }}
          ><Stack direction="column" spacing = {2}>
              
              <TextField
                id="Username"
                label="Username"
                variant="outlined"
                
              />
              <TextField
                id="Password"
                label="Password"
                variant="outlined"
                type='password'
              />
              <Button 
                variant="contained"
              >
                Login Now!
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default Login