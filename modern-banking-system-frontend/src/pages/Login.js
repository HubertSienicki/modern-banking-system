import React, { useState } from 'react';
import {
    Typography, TextField, Button, InputAdornment,
    IconButton, Grid, Link, Paper
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container component={Paper} elevation={0} square sx={{ minHeight: '100vh', m: 0 }}>
            {/* Login form on the left */}
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: (theme) => theme.spacing(3) // Adjust padding as needed
            }}>
                <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                    Your Bank
                </Typography>
                <Typography component="h1" variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
                    Sign in
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'space-between', // This will space out the links
                        alignItems: 'center', // This aligns items vertically in the center
                        padding: (theme) => theme.spacing(1) // Adjust padding as needed
                    }}>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        <Link href="#" variant="body2">
                            Not signed up? Sign Up
                        </Link>
                    </Grid>

                </Grid>
            </Grid>

            {/* Right side: Image */}
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{
                backgroundImage: 'url(https://source.unsplash.com/1600x900/?bank)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: 'auto', // Ensure it fills the available space
            }} />
        </Grid>
    );
};

export default LoginPage;
