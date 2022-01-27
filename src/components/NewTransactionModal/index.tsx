import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';
import { Container, RadioBox, TransactionsTypeContainer } from './styles';

Modal.setAppElement('#root');



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {


  // Criando valor no estado para recerber form
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('')
  const [type, setType] = useState('deposit');
  ////////////////////////////////////////////////////////////////////////

  function handleCreatenewTransaction(event: FormEvent) {
    event.preventDefault() // butão para com o efento padrão
  
      const data = {
        title,
        type,
        category,
        value
      };

      api.post('/transaction', data)
    
  }

  return (
    <Modal
      isOpen={isOpen} // Abrir o Modal
      onRequestClose={onRequestClose} // Fechar o modal
      overlayClassName="react-modal-overlay" // Estilizado no global
      className="react-modal-content" // Estilizado no global
    >
      <button type="button" className="reactModalClose" onClick={onRequestClose}>
        <img src={closeImg} alt="closeimg" />
      </button>

      <Container onSubmit={handleCreatenewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
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
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>


    </Modal>
  )
}