import React from 'react'
import { Button, Card, CardActions, Grid, TextField, CardActionArea, CardContent, Typography } from '@mui/material'
import { Formik, Form, ErrorMessage } from 'formik'
import './Login.css'

const LoginView = (props) => {

  return (
    <Formik
      initialValues={{
        cpf: "",
        password: ""
      }}
      validationSchema={props.signInSchema}
      onSubmit={props.onSubmit}
   
    >
      {(formik) => {
        const {  setFieldValue } = formik
        return (
          <Form >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className='box'>
              <Grid item xs={9} md={3}
                marginTop={10}

                alignItems="center"
                justify="center">
                <Card>
                  <CardActionArea 
                    noValidate sx={{ pt: 6 }}>
                    <CardContent >

                      <TextField
                        xs={12} md={12}
                        id="outlined-number"
                        label="CPF"
                        type="number"
                        onChange={e => setFieldValue('cpf', e.target.value)}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <ErrorMessage name="cpf" component="span" className="infoError" />
                      <TextField
                        xs={12} md={12}
                        id="outlined-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setFieldValue('password', e.target.value)}
                      />
                      <ErrorMessage name="password" component="span" className="infoError" />
                    </CardContent>

                    <CardActions className="actions">
                      <Button variant="contained" type="submit">Entrar</Button>
                    </CardActions>
                    <Typography variant="body" className='buttonInfo'>{props.infoLogin}</Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>

          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginView