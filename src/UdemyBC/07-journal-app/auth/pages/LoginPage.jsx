import { Google, Password } from '@mui/icons-material'
import { Button, Grid, Grid2, Link, TextField, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {

    const dispatch = useDispatch();

    const {email, password, onInputChange} = useForm({
        email: 'bryan@mail.com',
        password: '1234'
    });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        dispatch(checkingAuthentication())
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        console.log("on google");
        dispatch(startGoogleSignIn())
    }

    return (
            <AuthLayout title='Login'>
                <form onSubmit={onSubmit}>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField label='Email' type='email' placeholder='email' fullWidth name='email' onChange={onInputChange} value={email}/>
                            <TextField label='Password' type='password' placeholder='password' fullWidth name='password' onChange={onInputChange} value={password}/>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb:2, mt:1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button type='submit' variant="contained" fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
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
