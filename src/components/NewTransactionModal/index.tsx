import React, { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionsContext';
import { Container, RadioBox, TransactionsTypeContainer } from './styles';

Modal.setAppElement('#root');



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  // Criando valor no estado para recerber form
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('')
  const [type, setType] = useState('deposit');
  ////////////////////////////////////////////////////////////////////////

  function handleCreatenewTransaction(event: FormEvent) {
    event.preventDefault() // butão para com o efento padrão
  
    createTransaction({
      title,
      amount,
      category,
      type
    })
    
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
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
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