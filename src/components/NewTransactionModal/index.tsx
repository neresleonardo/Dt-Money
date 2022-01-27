import React, { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container ,RadioBox, TransactionsTypeContainer} from './styles';

Modal.setAppElement('#root');



 interface NewTransactionModalProps {
     isOpen:boolean;
     onRequestClose: () => void;
 }

export function NewTransactionModal( {isOpen, onRequestClose}: NewTransactionModalProps) {
  
  // Stado do botão modal de entrada e saida
  const [type, setType] = useState('deposit');


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

        <TransactionsTypeContainer>


        <RadioBox
        
        onClick={() => setType('deposit')} 
        type="button"
        isActive={type === 'deposit'}
        activeColor="green"
        >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
        </RadioBox>

        <RadioBox 
        type="button" 
        onClick={() => setType('withdraw')}
        isActive={type === 'withdraw'}
        activeColor="red"
        >
            <img src={outcomeImg} alt="Saida" />
            <span>Saída</span>
        </RadioBox>

        </TransactionsTypeContainer>

        <input 
        placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
        </Container>


      </Modal>
    )
}