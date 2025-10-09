import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCretingUserWithEmailPassword } from '../../store/auth'

const formData = {
    email: '',
    password: '',
    displayName: ''
}

//? este es un arreglo cuya primer posicion es la funcion de evaluar, y el segundo es el errorMSG
const formValidations = {
    email: [(value) => value.includes('@'), 'Email needs to have an @'],
    password: [(value) => value.length >= 6, 'Password needs to be 6 chars or more'],
    displayName: [(value) => value.length >= 1, 'Name needs to be some'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formSubmited, setFormSubmited] = useState(false);

    const {status, errorMessage} = useSelector(state => state.auth);
    const isCheckingAuth = useMemo(() => status === 'checking', [status]);

    const {displayName, email, password, formState, onInputChange,
        isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true);
        if(!isFormValid) return;

        dispatch(startCretingUserWithEmailPassword(formState))
    }
    

    return (
            <AuthLayout title='Register'>

                <h1>Form {isFormValid ? "Valid" : "Invalid"}</h1>

                <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
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
                                error={!!displayNameValid && formSubmited}
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
                                error={!!emailValid && formSubmited}
                                onChange={onInputChange}
                                helperText={emailValid}
                            />
                            <TextField 
                                label='Password' 
                                type='password' 
                                placeholder='password' 
                                name='password' 
                                value={password}
                                error={!!passwordValid && formSubmited} 
                                onChange={onInputChange} 
                                helperText={passwordValid}
                                fullWidth

                            />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" type='submit' fullWidth disabled={isCheckingAuth}>
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
