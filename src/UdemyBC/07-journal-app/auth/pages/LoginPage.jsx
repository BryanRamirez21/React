import { Google, Password } from '@mui/icons-material'
import { Alert, Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn, startLogingWithEmailPass } from '../../store/auth'
import { useMemo, useState } from 'react'

const formData = {
    email: '',
    password: '',
    displayName: ''
};

export const LoginPage = () => {


    const dispatch = useDispatch();

    const [formSubmited, setFormSubmited] = useState(false);
    
    //! The "selector" allows me to extract props from the slice, READ THE NOTES
    const {status, errorMessage, displayName} = useSelector(state => state.auth);

    const {email, password, formState, onInputChange, isFormValid,
    } = useForm(formData);


    //* podemos usar un useMemo para regresar un bool
    //* voy a memorizar el resultado del status
    //* si el status cambia, se obtiene el newVal, sino pues no
    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();

        setFormSubmited(true);

        if(!isFormValid) return;

        const {email, password} = formState;
        
        dispatch(checkingAuthentication());
        dispatch(startLogingWithEmailPass(email, password));
        
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        dispatch(startGoogleSignIn());

        
    }

    return (
            <AuthLayout title='Login'>
                <form onSubmit={onSubmit}>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField 
                                label='Email' 
                                type='email' 
                                placeholder='email' 
                                fullWidth 
                                name='email' 
                                value={email} 
                                onChange={onInputChange}
                                margin='normal'
                            />
                            <TextField 
                                label='Password' 
                                type='password' 
                                placeholder='password' 
                                fullWidth 
                                name='password' 
                                value={password}
                                onChange={onInputChange} 
                                margin='normal'
                            />
                        </Grid>

                        <Grid item xs={12} display={!!errorMessage ? '' : 'none'} marginTop='5px'>
                            <Alert severity='error'>{errorMessage}</Alert>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button 
                                    type='submit'
                                    variant="contained"
                                    fullWidth
                                    disabled={isAuthenticating}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button 
                                    onClick={onGoogleSignIn} 
                                    variant="contained" 
                                    fullWidth
                                    disabled={isAuthenticating}
                                >
                                    <Google />
                                    <Typography sx={{ml:1}}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                            <Link component={RouterLink} color='inherit' to='/auth/register'>
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    )
}
