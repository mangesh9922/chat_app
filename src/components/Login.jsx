import React from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'

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
      // gap={4}
      // p={2}
      // sx={{ border: '2px solid grey' }}
      >
        <Card

          sx={{ minWidth: 275, maxWidth: 345 }} >
          <CardContent
            display="flex"
            alignItems="center"
            justifyContent = "center"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          >
            <TextField
              id="Username"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="Password"
              label="Password"
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default Login