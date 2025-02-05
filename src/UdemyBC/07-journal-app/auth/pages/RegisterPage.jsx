import { Google } from '@mui/icons-material'
import { Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
    email: 'bryan@mail.com',
    password: '1234',
    displayName: 'Bryan'
}

//? este es un arreglo cuya primer posicion es la funcion de evaluar, y el segundo es el errorMSG
const formValidations = {
    email: [(value) => value.includes('@'), 'Email needs to have an @'],
    password: [(value) => value.length >= 6, 'Password needs to be 6 chars or more'],
    displayName: [(value) => value.length >= 1, 'Name needs to be some'],
}

export const RegisterPage = () => {

    const {displayName, email, password, formState, onInputChange,
        isFormValid, emailValid, passValid, displayNameValid
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    console.log(displayNameValid);
    

    return (
            <AuthLayout title='Register'>
                <form onSubmit={onSubmit}>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField 
                                label='Name' 
                                type='text' 
                                placeholder='Full name' 
                                name='displayName' 
                                fullWidth
                                value={displayName} 
                                onChange={onInputChange} 
                                error={!displayNameValid}
                                helperText={displayNameValid}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                label='Email' 
                                type='email' 
                                placeholder='email' 
                                name='email' 
                                fullWidth
                                value={email} 
                                onChange={onInputChange}
                            />
                            <TextField 
                                label='Password' 
                                type='password' 
                                placeholder='password' 
                                name='password' 
                                value={password} 
                                onChange={onInputChange} 
                                fullWidth

                            />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
                            <Grid item xs={12}>
                                <Button variant="contained" type='submit' fullWidth>
                                    Create account
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr: 1}}>¿Already have account?</Typography>
                            <Link component={RouterLink} color='inherit' to='/auth/login'>
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    )
}
