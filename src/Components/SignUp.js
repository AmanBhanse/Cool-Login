import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {

    function printInput(){

    }

    return (
        <div className="sign-up">
             <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
             >
            <form>
                <TextField 
                    required 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button type="submit" onClick={printInput} variant="outlined">Sign Up</Button>
            </form>
            </Box>

        </div>
    )
}

export default SignUp
