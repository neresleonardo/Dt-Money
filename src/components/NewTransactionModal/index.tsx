import React from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

Modal.setAppElement('#root');



 interface NewTransactionModalProps {
     isOpen:boolean;
     onRequestClose: () => void;
 }

export function NewTransactionModal( {isOpen, onRequestClose}: NewTransactionModalProps) {

    return(
    <Modal
        isOpen={isOpen} // Abrir o Modal
        onRequestClose={onRequestClose} // Fechar o modal
        overlayClassName="react-modal-overlay" // Estilizado no global
        className="react-modal-content" // Estilizado no global
      >
        <button type="button" className="reactModalClose" onClick={onRequestClose}>
          <img src={closeImg} alt="closeimg" />
        </button>

        <Container>
        <h2>Cadastrar transação</h2>

        <input 
        placeholder="Título"
        />
        <input 
        type="number"
        placeholder="Valor"
        />
        <input 
        placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
        </Container>


      </Modal>
    )
}