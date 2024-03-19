import React from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Login() {
  return (
      <div className='login'>
         
          <Card sx={{ minWidth: 275 }} >
              <CardContent>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              </CardContent>
         </Card>
    </div>
  )
}

export default Login