import React, { useState } from 'react';
import ReactDOM from 'react-dom';


import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IHeaderProps{
    onOpwnNewTransactionModal: () => void;
} // Criando uma interface

export function Header({onOpwnNewTransactionModal} : IHeaderProps) { // Declarando aqui



    return (
        <Container>
            <Content>
                <img src={logoImg}  alt="dt money" />
                
                <button onClick={onOpwnNewTransactionModal}  type="button"> Nova Transação</button>
               
            </Content>
        </Container>
    )
}