import React from 'react'
import { Fifth_NavBar } from './Fifth_NavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const Fifth_Task_ContactPage = () => {
  return (
    <div>
      <Fifth_NavBar />
      <Box className='container'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <h3 className='ms-2'>Contact Us</h3>
        <div>
          <TextField required id="outlined-required" label="First Name" type='text' placeholder='First Name' />
          <TextField required id="outlined-required" label="Last Name" type='text' placeholder='First Last' />
        </div>
        <div>
          <TextField required id="outlined-email" label="Email" type='email' />
          <TextField required id="outlined-number" label="Number" type='number' />
        </div>
        <div>
          <TextField required id="outlined-textarea" label="Massage" placeholder="Masssage" multiline rows={4} />
        </div>
        <div>
          <Button variant="outlined" size="medium" className='mt-2 mx-auto ms-2'>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  )
}
