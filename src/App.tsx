import React, {useState} from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handleToOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleToCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpwnNewTransactionModal={handleToOpenNewTransactionModal} />
      <NewTransactionModal 

      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleToCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

