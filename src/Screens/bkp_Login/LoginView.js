
import { Grid, Typography, Button, Stack, Input } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
//import CustomInput from '../../Components/CustomInput/CustomInput';
import './Login.css'

const LoginView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={props.signInSchema}
            onSubmit={props.onSubmit}>
            {(formik) => {
                const { errors, touched, isValid, dirty, setFieldValue } = formik;
                return (
                    <Form>
                        <Grid container spacing={2} 
                            justifyContent="center"
                            alignItems="center">
                            <Grid item md={4} lg={3} xl={3} className='mainBox'>
                                <Stack justifyContent="center"
                                    alignItems="center">
                                    <Typography variant="h1">Sign in to continue</Typography>

                                    <div className="lineBox">
                                        <Input
                                            label="E-mail"
                                            data-testid="email"
                                            onChange={e => setFieldValue('email', e.target.value)}
                                        />
                                            <div><ErrorMessage name="email" component="span" className="infoError" /></div>
                                    </div>                                    
                                    <div className="lineBox">
                                        <Input
                                            label="Senha"
                                            type="password"
                                            data-testid="password"
                                            onChange={e => setFieldValue('password', e.target.value)}
                                        />
                                            <div><ErrorMessage name="password" component="span" className="infoError" /></div>
                                    </div>                                    
                                    <Button
                                        type="submit"
                                        data-testid="button"
                                        variant="primary"
                                        className="buttonInfo"
                                    >
                                        Sign In
                                    </Button>
                                    <Typography variant="body" className='buttonInfo'>{props.infoLogin}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Form>
                );
            }}
        </Formik>
    )
}



export default LoginView;