/**
 * Controller da page Login
 */

//Importa os componentes
import { useState } from 'react';
import LoginView from './LoginView';


import * as Yup from "yup";

const LoginController = () => {

    const [infoLogin, setInfoLogin] = useState('');

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars minimum"),
    });

    const onSubmit = (values) => {
        console.log(values);
        setInfoLogin(values.email + " - " + values.password);
    }

    //Adiciona o BusLineController e BusPosition
    return (
        <LoginView
            signInSchema={signInSchema}
            onSubmit={onSubmit}
            infoLogin={infoLogin}
        />
    )
}

export default LoginController;