import { useState } from 'react';
import LoginView from './LoginView';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const LoginController = () => {
  const [infoLogin, setInfoLogin] = useState('');
  const navigate = useNavigate();
  //const cpf = 855.615.310-00
  //const isValid = validateCPF(cpf) VALIDATEBR

  const signInSchema = Yup.object().shape({
    cpf: Yup.string()
      .required('CPF é obrigatório')
      .length(11, 'CPF são obrigatóriamente 11 dígitos'),
    password: Yup.string()
      .required('Senha é obrigatória')
      .min(4, 'Senha é muito pequena - tamanho mínimo 4 dígitos')
  });

  const onSubmit = (values) => {
    const info = ''; //dados carregados
    navigate('Home', {
      state: {
        info: JSON.stringify(info)
      }
    });
  };

  return (
    <LoginView
      signInSchema={signInSchema}
      onSubmit={onSubmit}
      infoLogin={infoLogin}
    />
  );
};

export default LoginController;
