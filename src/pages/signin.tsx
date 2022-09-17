import React from 'react';
import { Container, Content, H1, Form, A } from './style';
import Input from '../Components/Input/input'
import Button from '../Components/Button/button'
import {FiMail, FiLock} from 'react-icons/fi'


const Signin = () => {
    return (
    <Container>
        <Content>
            <Form>
                <H1>Faça seu Login</H1>
                <Input icon={FiMail} placeholder='E-mail' type='email'/>
                <br></br>
                <Input icon={FiLock} placeholder='Senha' type='password'/>
                <br></br>
                <Button>ENTRAR</Button>
                <A href='#'>Esqueci minha senha</A>
            </Form>
        </Content>
    </Container>
    )
}


export default Signin;