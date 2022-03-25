import React from 'react';
import {
  Button,
  Card,
  CardActions,
  Grid,
  TextField,
  CardActionArea,
  CardContent,
  Typography
} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import './Login.css';
import loginImg from '../../Assets/img_login.png';

const LoginView = (props) => {
  return (
    <Formik
      initialValues={{
        cpf: '',
        password: ''
      }}
      validationSchema={props.signInSchema}
      onSubmit={props.onSubmit}
    >
      {(formik) => {
        const { setFieldValue } = formik;
        return (
          <Form>
            <Grid container justifyContent="center" alignItems="center">
              <Grid
              
                item
                xs={12}
                sm={9}
                md={4}
                marginTop={5}
                marginBottom={0}
                alignItems="center"
                justify="center"
              >
                <Card>
                  <CardActionArea noValidate>
                    <CardContent>
                      <img
                        src={loginImg}
                        width="100%"
                        height="auto"
                        alt="imagem com usuario e asteriscos abaixo"
                      />
                      <TextField
                        className="input"
                        id="outlined-number"
                        label="CPF"
                        type="number"
                        onChange={(e) => setFieldValue('cpf', e.target.value)}
                        InputLabelProps={{
                          shrink: true
                        }}
                      />
                      <ErrorMessage
                        name="cpf"
                        component="span"
                        className="infoError"
                      />
                      <TextField
                        className="input"
                        id="outlined-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) =>
                          setFieldValue('password', e.target.value)
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="infoError"
                      />
                    </CardContent>

                    <CardActions className="actions">
                      <Button variant="contained" type="submit">
                        Entrar
                      </Button>
                    </CardActions>
                    <Typography variant="body" className="buttonInfo">
                      {props.infoLogin}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginView;
