import React from 'react'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import { Button, Typography,Link, OutlinedInput, FormControl, Icon } from '@mui/material';
import Stack from '@mui/material/Stack';
// import {Link} from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import AccountCircle from '@mui/icons-material/AccountCircleSharp'
// import {Link} from 'react-router-dom'
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <div
      className='login'
      display="flex"
      height={"100vh"}
      width={"100vw"}
      bgcolor="lightgreen"
      // alignItems="center"
      // justifyContent="center"
      >
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
        <Typography 
          variant='h6'
          pb={8}
          fontSize={35}
        >
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
              '& .MuiButton-root':{m: 1, width: '29ch'},
              '& .MuiFormControl-root':{m: 1, width: '29ch'},
           }}
          >
            <Stack direction="column" spacing = {2}>
                
            <FormControl>
                <InputLabel>username</InputLabel>
                <OutlinedInput
                  id="Username"
                  label="Username"
                  variant="outlined"
                  endAdornment={
                    <InputAdornment position ="end">
                      <AccountCircle/>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl>
                <InputLabel >password
                </InputLabel>
                <OutlinedInput
                  id="Password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

                <Button 
                  variant="contained"
                >
                  Login Now!
                </Button>
            </Stack>

            <br/>

            <Stack direction="column" spacing={1}>
            <Typography 
                
                align="center"
              >
                want to create new account? 
              </Typography>
              {/* <Link to="/SignUp">SignUp</Link> */}

              <Link 
                href = "SignUp"
                underline='hover'
                align = "center"
                m="0"
                p="0"
              >
                Signup
              </Link>
            </Stack>

          </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default Login